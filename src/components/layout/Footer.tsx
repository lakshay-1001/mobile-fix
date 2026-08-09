import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BRAND_MARK_SMALL,
  getWhatsAppUrl,
  HAS_CONTACT_PHONE,
  HAS_PUBLIC_PHONE,
  HAS_WHATSAPP,
  LEGAL_BUSINESS_NAME,
  OPENING_HOURS_DISPLAY,
  PHONE_DISPLAY,
  PHONE_LINK,
  SHOP_ADDRESS,
} from "../../config/site";
import { trackEvent } from "../../config/analytics";

const instagramUrl = "https://www.instagram.com/azanmobilefix/";
const facebookUrl = "https://www.facebook.com/share/1bcuzBTBoq/?mibextid=wwXIfr";

const iphoneSolutions = [
  { label: "iPhone Screen Replacement", to: "/contact" },
  { label: "iPhone Battery Replacement", to: "/contact" },
  { label: "iPhone Camera Replacement", to: "/contact" },
  { label: "Repair Guidelines", to: "/warranty" },
  { label: "FAQs", to: "/faq" },
  { label: "Book a Repair", to: "/contact" },
];

const helpfulLinks = [
  { label: "All repair services", to: "/services" },
  { label: "iPhone repair in Dubai", to: "/services/iphone-repair-dubai" },
  { label: "Mobile repair in Bur Dubai", to: "/services/mobile-phone-repair-bur-dubai" },
  { label: "Phone repair guides", to: "/blog" },
  { label: "Our Bur Dubai shop", to: "/locations" },
  { label: "About us", to: "/about" },
  { label: "Repair warranty", to: "/warranty" },
  { label: "Terms of service", to: "/terms" },
  { label: "Privacy policy", to: "/privacy" },
];

const dubaiAreas = [
  "Dubai Marina",
  "Palm Jumeirah",
  "Jumeirah 1/2/3",
  "Dubai Hills Estate",
  "Downtown Dubai",
  "JLT (Jumeirah Lake Towers)",
  "Business Bay",
  "Dubai Silicon Oasis",
];

const SocialIconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const SocialIconFacebook = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.8 22v-8.7h2.9l.5-3.4h-3.4V7.7c0-1 .3-1.7 1.8-1.7h1.8V3a24 24 0 0 0-2.7-.1c-2.7 0-4.5 1.6-4.5 4.6v2.5H7.2v3.4h3V22h3.6Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#171217] text-white">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#b7004f]/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#8138b2]/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-12 sm:px-6 md:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.2fr_1fr] lg:gap-12">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center justify-center gap-3 md:justify-start">
              {BRAND_MARK_SMALL && (
                <img
                  src={BRAND_MARK_SMALL}
                  alt="Azan Mobile Fix"
                  className="h-11 w-11 rounded-xl object-contain"
                />
              )}

              <span className="text-xl font-black tracking-tight">
                Azan Mobile Fix
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75 mx-auto md:mx-0">
              Same-day phone, tablet and laptop repairs at homes and offices
              across Dubai.
            </p>

            <p className="mt-4 text-xs leading-6 text-white/50">
              Operated by{" "}
              <span className="font-semibold text-white/75">
                {LEGAL_BUSINESS_NAME}
              </span>
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Azan Mobile Fix Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-pink-300 hover:bg-white hover:text-[#b7004f]"
              >
                <SocialIconInstagram />
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Azan Mobile Fix Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-pink-300 hover:bg-white hover:text-[#b7004f]"
              >
                <SocialIconFacebook />
              </a>

              <a
                href={getWhatsAppUrl()}
                target={HAS_WHATSAPP ? "_blank" : undefined}
                rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
                aria-label="Azan Mobile Fix WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-white hover:text-green-600"
              >
                <MessageCircle size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="iPhone solutions" className="text-center md:text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">
              iPhone Solutions
            </p>

            <div className="flex flex-col gap-2.5 text-sm text-white/75">
              {iphoneSolutions.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="transition hover:text-pink-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="text-center md:text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">
              Dubai Sectors Covered
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {dubaiAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center justify-center gap-2 text-sm text-white/75 md:justify-start"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#13a8ff]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-white">
                Hours & Standards
              </p>

              <div className="space-y-3 text-sm text-white/75">
                <div className="flex items-start justify-center gap-2 md:justify-start">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-pink-200" />
                  <div>
                    <p className="font-bold text-white">Operating Hours</p>
                    <p>{OPENING_HOURS_DISPLAY || "09:00 AM - 10:00 PM"}</p>
                    <p className="text-white/55">Everyday (Mon - Sun)</p>
                  </div>
                </div>

                <p className="text-xs leading-5 text-white/55">
                  Doorstep service • Open 7 days • Repair warranty
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">
              Contact Us
            </p>

            <div className="flex flex-col items-center gap-3 text-sm text-white/75 md:items-start">
              {HAS_CONTACT_PHONE ? (
                <a
                  onClick={() =>
                    trackEvent("phone_click", {
                      location: "footer",
                    })
                  }
                  href={PHONE_LINK}
                  className="inline-flex min-h-10 items-center gap-3 transition hover:text-pink-200"
                >
                  <Phone size={18} aria-hidden="true" />
                  {HAS_PUBLIC_PHONE ? PHONE_DISPLAY : "Call the shop"}
                </a>
              ) : (
                <p className="inline-flex min-h-10 items-center gap-3">
                  <Phone size={18} aria-hidden="true" />
                  Phone: {PHONE_DISPLAY}
                </p>
              )}

              <a
                href={getWhatsAppUrl()}
                target={HAS_WHATSAPP ? "_blank" : undefined}
                rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-10 items-center gap-3 transition hover:text-pink-200"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {HAS_WHATSAPP ? "Chat on WhatsApp" : "Send an inquiry"}
              </a>

              <address className="flex max-w-sm gap-3 not-italic leading-6">
                <MapPin className="mt-1 hidden h-4 w-4 shrink-0 text-pink-200 md:block" />
                <span>{SHOP_ADDRESS}</span>
              </address>
            </div>

            <nav
              aria-label="Helpful links"
              className="mt-7 border-t border-white/10 pt-6"
            >
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">
                Helpful Links
              </p>

              <div className="grid grid-cols-1 gap-2 text-sm text-white/70">
                {helpfulLinks.slice(0, 6).map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="transition hover:text-pink-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center text-sm text-white/55 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Azan Mobile Fix. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/terms" className="hover:text-pink-200">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-pink-200">
              Privacy
            </Link>
            <Link to="/warranty" className="hover:text-pink-200">
              Warranty
            </Link>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              Instagram
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}