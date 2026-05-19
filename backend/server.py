from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.getenv("MONGO_URL")
client = AsyncIOMotorClient(mongo_url)

db = client[os.getenv("DB_NAME", "test")]

# Resend configuration
resend.api_key = os.environ['RESEND_API_KEY']
SENDER_EMAIL = os.environ['SENDER_EMAIL']
RECIPIENT_EMAIL = os.environ['RECIPIENT_EMAIL']

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ContactRequest(BaseModel):
    business_name: str = Field(..., min_length=1, max_length=200)
    contact_number: str = Field(..., min_length=1, max_length=50)
    contact_email: EmailStr
    looking_for: str = Field(..., min_length=1, max_length=5000)
    budget: str = Field(..., min_length=1, max_length=100)
    language: Optional[str] = "no"


class ContactResponse(BaseModel):
    id: str
    status: str
    message: str


@api_router.get("/")
async def root():
    return {"message": "Nettekspertene API"}


def _build_email_html(payload: ContactRequest) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;padding:32px;font-family:Arial,sans-serif;color:#f5f5f5;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#242424;border:1px solid #333333;border-radius:4px;padding:32px;">
          <tr><td>
            <h1 style="margin:0 0 8px 0;font-size:24px;font-weight:300;letter-spacing:-0.5px;color:#ffffff;">
              Ny henvendelse — Nettekspertene
            </h1>
            <p style="margin:0 0 24px 0;font-size:13px;color:#a3a3a3;text-transform:uppercase;letter-spacing:2px;">
              New contact form submission
            </p>

            <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="color:#a3a3a3;width:35%;border-bottom:1px solid #333;">Bedriftsnavn</td>
                <td style="color:#f5f5f5;border-bottom:1px solid #333;">{payload.business_name}</td>
              </tr>
              <tr>
                <td style="color:#a3a3a3;border-bottom:1px solid #333;">Telefonnummer</td>
                <td style="color:#f5f5f5;border-bottom:1px solid #333;">{payload.contact_number}</td>
              </tr>
              <tr>
                <td style="color:#a3a3a3;border-bottom:1px solid #333;">E-post</td>
                <td style="color:#f5f5f5;border-bottom:1px solid #333;">
                  <a href="mailto:{payload.contact_email}" style="color:#ffffff;text-decoration:underline;">{payload.contact_email}</a>
                </td>
              </tr>
              <tr>
                <td style="color:#a3a3a3;border-bottom:1px solid #333;">Budsjett</td>
                <td style="color:#f5f5f5;border-bottom:1px solid #333;">{payload.budget}</td>
              </tr>
              <tr>
                <td style="color:#a3a3a3;vertical-align:top;padding-top:16px;">Hva ser de etter</td>
                <td style="color:#f5f5f5;padding-top:16px;white-space:pre-wrap;">{payload.looking_for}</td>
              </tr>
            </table>

            <p style="margin:32px 0 0 0;font-size:12px;color:#666;border-top:1px solid #333;padding-top:16px;">
              Sendt fra nettekspertene.no • Org. nr. 937 733 615
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(payload: ContactRequest):
    submission_id = str(uuid.uuid4())

    # Persist submission
    doc = {
        "id": submission_id,
        "business_name": payload.business_name,
        "contact_number": payload.contact_number,
        "contact_email": payload.contact_email,
        "looking_for": payload.looking_for,
        "budget": payload.budget,
        "language": payload.language or "no",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_submissions.insert_one(doc)

    # Build & send email
    params = {
        "from": SENDER_EMAIL,
        "to": [RECIPIENT_EMAIL],
        "reply_to": payload.contact_email,
        "subject": f"Ny henvendelse fra {payload.business_name} — {payload.budget}",
        "html": _build_email_html(payload),
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent: {email}")
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Email delivery failed: {str(e)}")

    return ContactResponse(
        id=submission_id,
        status="success",
        message="Takk! Vi tar kontakt så snart som mulig.",
    )


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
