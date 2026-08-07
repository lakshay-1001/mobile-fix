import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BRAND_MARK_SMALL,
  getWhatsAppUrl,
  HAS_CONTACT_PHONE,
  HAS_WHATSAPP,
  PHONE_LINK,
} from "../../config/site";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Why us", href: "/#why-us" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Our shop", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-9 z-50 border-b border-[#eadde5] bg-white/95 shadow-sm backdrop-blur-xl sm:top-10">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 md:px-8">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            aria-label="Azan Mobile Fix home"
            className="group flex shrink-0 items-center gap-2 whitespace-nowrap transition-transform hover:scale-[1.02] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7004f]"
          >
            <img
              src={BRAND_MARK_SMALL}
              alt=""
              width="64"
              height="64"
              className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-sm sm:h-11 sm:w-11"
            />
            <span>
              <span
                className="flex items-baseline text-[21px] font-[900] leading-none tracking-[-0.045em] sm:text-[27px] lg:text-[24px] xl:text-[28px]"
                style={{ fontWeight: 900 }}
              >
                <span className="text-[#b7004f]">Azan</span>
                <span className="ml-1.5 text-[#2b1c24] transition-colors group-hover:text-[#b7004f]">
                  Mobile Fix
                </span>
              </span>
              <span className="mt-1 hidden text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#8138b2] sm:block">
                Doorstep Repair Dubai
              </span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-4 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="whitespace-nowrap text-sm font-semibold text-[#5a4045] transition-colors hover:text-[#b7004f] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7004f]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <a
              href={PHONE_LINK}
              aria-label={HAS_CONTACT_PHONE ? "Call Azan Mobile Fix" : "Calling is temporarily unavailable"}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-[#5a4045] transition-colors hover:bg-pink-50 hover:text-[#b7004f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
            >
              <Phone size={19} aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target={HAS_WHATSAPP ? "_blank" : undefined}
              rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#b7004f] px-4 text-sm font-semibold text-[#b7004f] transition-colors hover:bg-[#b7004f] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
            >
              <MessageCircle size={17} aria-hidden="true" />
              {HAS_WHATSAPP ? "WhatsApp Us" : "Contact us"}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-[#b7004f] hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f] xl:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed left-3 right-3 top-[108px] z-40 overflow-hidden rounded-2xl border border-[#eadde5] bg-white shadow-2xl sm:top-[120px] xl:hidden"
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-[15px] font-semibold text-[#5a4045] hover:bg-pink-50 hover:text-[#b7004f] focus-visible:outline-2 focus-visible:outline-[#b7004f]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 grid grid-cols-1 gap-2 border-t border-gray-100 p-2 sm:grid-cols-2">
                <a href={PHONE_LINK} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#b7004f] font-semibold text-[#b7004f]">
                  <Phone size={17} aria-hidden="true" /> {HAS_CONTACT_PHONE ? "Call now" : "Call unavailable"}
                </a>
                <a href={whatsappUrl} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b7004f] to-[#8138b2] font-semibold text-white">
                  <MessageCircle size={17} aria-hidden="true" /> {HAS_WHATSAPP ? "WhatsApp" : "Send inquiry"}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
