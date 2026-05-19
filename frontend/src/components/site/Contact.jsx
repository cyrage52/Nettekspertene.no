import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowUpRight } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initialState = {
  business_name: "",
  contact_number: "",
  contact_email: "",
  looking_for: "",
  budget: "",
};

export const Contact = () => {
  const { t, lang } = useLang();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e?.target ? e.target.value : e }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.business_name ||
      !form.contact_number ||
      !form.contact_email ||
      !form.looking_for ||
      !form.budget
    ) {
      toast.error(t.contact.validation);
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, { ...form, language: lang });
      toast.success(t.contact.success);
      setForm(initialState);
    } catch (err) {
      const msg = err?.response?.data?.detail || t.contact.error;
      toast.error(typeof msg === "string" ? msg : t.contact.error);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls =
    "h-12 bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-sm focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:border-white/30 font-body";

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-40 border-t border-white/5 bg-[#1c1c1c]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6 font-body">
              ⟶ &nbsp;{t.contact.label}
            </p>
            <h2
              data-testid="contact-title"
              className="font-display font-light tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-8"
            >
              {t.contact.title}
            </h2>
            <p className="text-base md:text-lg text-white/55 leading-relaxed font-body max-w-md mb-12">
              {t.contact.sub}
            </p>

            <div className="space-y-4 text-sm text-white/50 font-body border-t border-white/10 pt-8">
              <div className="flex items-baseline justify-between gap-6">
                <span className="uppercase tracking-widest text-xs text-white/35">
                  Email
                </span>
                <a
                  href="mailto:Contact@Nettekspertene.no"
                  className="text-white hover:text-white/70 transition-colors"
                  data-testid="contact-email-link"
                >
                  Contact@Nettekspertene.no
                </a>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <span className="uppercase tracking-widest text-xs text-white/35">
                  Org. nr
                </span>
                <span className="text-white/80">937 733 615</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="md:col-span-2">
              <Label
                htmlFor="business_name"
                className="text-xs uppercase tracking-widest text-white/40 mb-3 block"
              >
                {t.contact.business_name}
              </Label>
              <Input
                id="business_name"
                data-testid="input-business-name"
                value={form.business_name}
                onChange={update("business_name")}
                placeholder={t.contact.business_name_ph}
                className={fieldCls}
                autoComplete="organization"
              />
            </div>

            <div>
              <Label
                htmlFor="contact_number"
                className="text-xs uppercase tracking-widest text-white/40 mb-3 block"
              >
                {t.contact.contact_number}
              </Label>
              <Input
                id="contact_number"
                data-testid="input-contact-number"
                value={form.contact_number}
                onChange={update("contact_number")}
                placeholder={t.contact.contact_number_ph}
                className={fieldCls}
                autoComplete="tel"
                inputMode="tel"
              />
            </div>

            <div>
              <Label
                htmlFor="contact_email"
                className="text-xs uppercase tracking-widest text-white/40 mb-3 block"
              >
                {t.contact.contact_email}
              </Label>
              <Input
                id="contact_email"
                type="email"
                data-testid="input-contact-email"
                value={form.contact_email}
                onChange={update("contact_email")}
                placeholder={t.contact.contact_email_ph}
                className={fieldCls}
                autoComplete="email"
              />
            </div>

            <div className="md:col-span-2">
              <Label
                htmlFor="looking_for"
                className="text-xs uppercase tracking-widest text-white/40 mb-3 block"
              >
                {t.contact.looking_for}
              </Label>
              <Textarea
                id="looking_for"
                data-testid="input-looking-for"
                value={form.looking_for}
                onChange={update("looking_for")}
                placeholder={t.contact.looking_for_ph}
                rows={5}
                className="min-h-[140px] bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-sm focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:border-white/30 font-body resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <Label
                htmlFor="budget"
                className="text-xs uppercase tracking-widest text-white/40 mb-3 block"
              >
                {t.contact.budget}
              </Label>
              <Select
                value={form.budget}
                onValueChange={(v) => setForm((p) => ({ ...p, budget: v }))}
              >
                <SelectTrigger
                  id="budget"
                  data-testid="input-budget"
                  className="h-12 bg-white/5 border border-white/10 text-white rounded-sm focus:ring-1 focus:ring-white/40 font-body"
                >
                  <SelectValue placeholder={t.contact.budget_ph} />
                </SelectTrigger>
                <SelectContent className="bg-[#242424] border border-white/10 text-white font-body">
                  {t.contact.budget_options.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      data-testid={`budget-option-${opt.value}`}
                      className="focus:bg-white/10 focus:text-white"
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit"
                className="group inline-flex items-center gap-3 h-12 px-6 rounded-full bg-white text-[#1a1a1a] font-medium text-sm hover:bg-white/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t.contact.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.submit}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={2.25}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
