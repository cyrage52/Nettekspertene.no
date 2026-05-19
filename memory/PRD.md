# Nettekspertene.no — PRD

## Original Problem Statement
Build a professional website for "Nettekspertene" (a Norwegian web development business) using Resend for email delivery.

Requirements:
- Contact form: Business name, Contact number, Contact email, "What they are looking for", Budget dropdown
- Sender: Contact@Nettekspertene.no → Recipient: marcus.reehaug@nettekspertene.com
- Language toggle (NO/EN) in nav, default NO
- Two portfolio videos that auto-play when scrolled into view
- Org. number 937 733 615
- Professional, sleek, dark-but-not-too-dark theme

## Architecture
- **Backend**: FastAPI + MongoDB + Resend SDK (async via `asyncio.to_thread`)
- **Frontend**: React + Tailwind + shadcn/ui (Outfit + Manrope fonts)
- **Email**: Resend (test sender currently, custom domain pending verification)
- **i18n**: React Context with NO/EN translations

## User Personas
- **Prospect**: Norwegian business owner exploring web development services. Browses portfolio, fills contact form.
- **Marcus (owner)**: Receives enquiries via email at marcus.reehaug@nettekspertene.com.

## Core Requirements (Static)
1. Bilingual NO/EN site
2. Contact form delivered via Resend
3. Auto-playing portfolio videos on scroll
4. Sleek dark Scandinavian aesthetic

## What's Implemented (2026-02-19)
- ✅ Bilingual site (NO default, EN toggle pill in nav)
- ✅ Hero / Services / Portfolio / About / Contact / Footer sections
- ✅ Two portfolio videos with IntersectionObserver auto-play (muted, looped)
- ✅ Contact form with all 5 fields + budget dropdown (5000/7500/10000/15000+ NOK)
- ✅ `POST /api/contact` endpoint that persists submission to MongoDB and sends a styled HTML email via Resend
- ✅ Form validation, success/error toasts via sonner
- ✅ Org. nr 937 733 615 in contact section and footer
- ✅ Outfit + Manrope typography, dark charcoal (#1a1a1a) theme, grain overlay

## Prioritized Backlog
### P0 (User action required)
- **Verify nettekspertene.no domain on Resend** (https://resend.com/domains) so `SENDER_EMAIL` can be switched from `Nettekspertene <onboarding@resend.dev>` → `Contact@Nettekspertene.no`.

### P1
- Replace placeholder About text with real studio story
- Real portfolio case studies with client names + project links
- Add real project images/case study pages
- Phone + address in footer once available

### P2
- Cookie banner / GDPR notice
- Blog or insights section
- Reviews / testimonials carousel
- Analytics (Plausible / GA4)

## Files
- Backend: `/app/backend/server.py`, `/app/backend/.env`
- Frontend pages: `/app/frontend/src/components/site/{Nav,Hero,Services,Portfolio,About,Contact,Footer}.jsx`
- i18n: `/app/frontend/src/lib/i18n.js`
- Entry: `/app/frontend/src/App.js`, `/app/frontend/src/index.css`
