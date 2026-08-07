import { useState, type FormEvent } from "react";
import { Clock3, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import {
  BRAND_MARK_SMALL,
  LEGAL_BUSINESS_NAME,
  OPENING_HOURS_DISPLAY,
  PHONE_DISPLAY,
  SHOP_ADDRESS,
  SHOP_DIRECTIONS,
  SITE_NAME,
} from "../config/site";
import {
  isEmailJsConfigured,
  sendContactEmail,
  type ContactMessage,
} from "../services/emailService";

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm: ContactMessage = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "Repair inquiry",
  device: "",
  message: "",
};

let lastSubmissionAt = 0;

export default function ContactPage() {
  const configured = isEmailJsConfigured();
  const [form, setForm] = useState(initialForm);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (field: keyof ContactMessage, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (website) return;

    if (!configured) {
      setStatus("error");
      setStatusMessage("Email contact is being configured. Please visit the shop for assistance in the meantime.");
      return;
    }

    const cleanForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      inquiryType: form.inquiryType,
      device: form.device.trim(),
      message: form.message.trim(),
    };

    if (!cleanForm.name || !cleanForm.email || cleanForm.message.length < 10) {
      setStatus("error");
      setStatusMessage("Please enter your name, email and a message of at least 10 characters.");
      return;
    }

    if (Date.now() - lastSubmissionAt < 10_000) {
      setStatus("error");
      setStatusMessage("Please wait a few seconds before sending another message.");
      return;
    }

    setStatus("sending");
    setStatusMessage("Sending your message…");

    try {
      await sendContactEmail(cleanForm);
      lastSubmissionAt = Date.now();
      setForm(initialForm);
      setStatus("success");
      setStatusMessage("Thank you. Your message has been sent successfully.");
    } catch {
      setStatus("error");
      setStatusMessage("We could not send your message. Please try again later or visit the shop.");
    }
  };

  const fieldClassName =
    "form-control min-h-12 w-full min-w-0 max-w-full rounded-xl border border-[#e3d7df] bg-white text-base text-[#171217] shadow-sm transition focus:border-[#b7004f] focus:outline-none focus:ring-4 focus:ring-[#b7004f]/10";

  return (
    <WebsiteLayout>
      <SEO
        title="Contact Our Mobile Repair Shop in Bur Dubai"
        description="Contact Azan Mobile Fix or visit our mobile repair shop on 25C Street in Meena Bazaar, Bur Dubai."
        path="/contact"
      />

      <div className="overflow-x-hidden bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto min-w-0 max-w-[1180px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">Contact us</p>
            <h1 className="text-4xl font-black tracking-[-0.035em] text-[#171217] sm:text-5xl">
              Tell us what your device needs
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#5a4045]">
              Send a repair inquiry or visit our single Bur Dubai shop. Please do not include passwords,
              payment details or sensitive files in your message.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]">
            <aside className="min-w-0 space-y-5 overflow-hidden rounded-[28px] bg-[#292a2d] p-6 text-white sm:p-8">
              <div className="flex min-w-0 items-center gap-3">
                <img src={BRAND_MARK_SMALL} alt="" width="64" height="64" className="h-14 w-14 shrink-0 rounded-2xl object-cover" />
                <div className="min-w-0">
                  <p className="text-2xl font-black">{SITE_NAME}</p>
                  <p className="mt-1 [overflow-wrap:anywhere] text-sm leading-6 text-white/70">Operated by {LEGAL_BUSINESS_NAME}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-pink-300" size={21} aria-hidden="true" />
                <div className="min-w-0">
                  <h2 className="font-bold">Shop address</h2>
                  <address className="mt-1 not-italic leading-7 text-white/80">{SHOP_ADDRESS}</address>
                  <ul className="mt-3 space-y-1 text-sm text-white/65">
                    {SHOP_DIRECTIONS.map((direction) => <li key={direction}>{direction}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3 className="mt-1 shrink-0 text-pink-300" size={21} aria-hidden="true" />
                <div className="min-w-0">
                  <h2 className="font-bold">Opening hours</h2>
                  <p className="mt-1 text-white/80">{OPENING_HOURS_DISPLAY}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 shrink-0 text-pink-300" size={21} aria-hidden="true" />
                <div className="min-w-0">
                  <h2 className="font-bold">Public phone</h2>
                  <p className="mt-1 text-white/80">{PHONE_DISPLAY}</p>
                  <p className="mt-1 text-xs leading-5 text-white/60">The public call and WhatsApp number will be added after confirmation.</p>
                </div>
              </div>
            </aside>

            <section aria-labelledby="contact-form-title" className="min-w-0 overflow-hidden rounded-[28px] border border-[#eadde5] bg-white p-6 shadow-[0_20px_60px_rgba(67,35,52,0.08)] sm:p-8">
              <h2 id="contact-form-title" className="text-2xl font-black">Send an inquiry</h2>
              <p className="mt-2 text-[#5a4045]">Required fields are marked with an asterisk.</p>

              {!configured && (
                <div role="status" className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                  The email service is awaiting its EmailJS configuration. The form will become available as soon as the public configuration keys are added.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 min-w-0 max-w-full space-y-5">
                <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                  <label className="block min-w-0 font-semibold" htmlFor="contact-name">
                    Name *
                    <input id="contact-name" name="name" required maxLength={80} autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} className={`${fieldClassName} mt-2`} />
                  </label>
                  <label className="block min-w-0 font-semibold" htmlFor="contact-email">
                    Email *
                    <input id="contact-email" name="email" type="email" required maxLength={160} autoComplete="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className={`${fieldClassName} mt-2`} />
                  </label>
                </div>

                <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                  <label className="block min-w-0 font-semibold" htmlFor="contact-phone">
                    Phone <span className="font-normal text-[#6f5963]">(optional)</span>
                    <input id="contact-phone" name="phone" type="tel" maxLength={30} autoComplete="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className={`${fieldClassName} mt-2`} />
                  </label>
                  <label className="block min-w-0 font-semibold" htmlFor="inquiry-type">
                    Inquiry type *
                    <select id="inquiry-type" name="inquiry_type" required value={form.inquiryType} onChange={(event) => updateField("inquiryType", event.target.value)} className={`${fieldClassName} mt-2`}>
                      <option>Repair inquiry</option>
                      <option>Warranty question</option>
                      <option>Complaint</option>
                      <option>Privacy request</option>
                      <option>General question</option>
                    </select>
                  </label>
                </div>

                <label className="block min-w-0 font-semibold" htmlFor="contact-device">
                  Device and model <span className="font-normal text-[#6f5963]">(optional)</span>
                  <input id="contact-device" name="device" maxLength={100} value={form.device} onChange={(event) => updateField("device", event.target.value)} placeholder="For example: iPhone 14" className={`${fieldClassName} mt-2`} />
                </label>

                <label className="block min-w-0 font-semibold" htmlFor="contact-message">
                  Message *
                  <textarea id="contact-message" name="message" required minLength={10} maxLength={1500} rows={6} value={form.message} onChange={(event) => updateField("message", event.target.value)} className={`${fieldClassName} mt-2 resize-y`} />
                </label>

                <p className="text-sm leading-6 text-[#5a4045]">
                  We use the information submitted to respond to your inquiry. Messages are processed through EmailJS when configured. Read our <Link to="/privacy" className="font-semibold text-[#b7004f] underline-offset-4 hover:underline">Privacy Policy</Link>.
                </p>

                <button type="submit" disabled={!configured || status === "sending"} className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b7004f] to-[#8138b2] px-8 font-bold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto">
                  <Send size={18} aria-hidden="true" />
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                <p aria-live="polite" role="status" className={status === "error" ? "text-sm font-semibold text-red-700" : status === "success" ? "text-sm font-semibold text-green-700" : "text-sm text-[#5a4045]"}>
                  {statusMessage}
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}
