import { MessageCircle, Phone } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="bg-[#292a2d] py-12 text-white sm:py-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 text-2xl font-black hover:text-pink-200">
              <img src={BRAND_MARK_SMALL} alt="" width="64" height="64" className="h-14 w-14 rounded-2xl object-cover" />
              <span>AZAN Mobile Fix</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/75 md:text-base">
              Same-day phone, tablet and laptop repairs at homes and offices across Dubai.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-6 text-white/60">
              Operated by {LEGAL_BUSINESS_NAME}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 font-bold">Helpful links</p>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link to="/services" className="hover:text-pink-200">All repair services</Link>
              <Link to="/services/iphone-repair-dubai" className="hover:text-pink-200">iPhone repair in Dubai</Link>
              <Link to="/services/mobile-phone-repair-bur-dubai" className="hover:text-pink-200">Mobile repair in Bur Dubai</Link>
              <Link to="/blog" className="hover:text-pink-200">Phone repair guides</Link>
              <Link to="/locations" className="hover:text-pink-200">Our Bur Dubai shop</Link>
              <Link to="/about" className="hover:text-pink-200">About us</Link>
              <a href={getWhatsAppUrl()} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="hover:text-pink-200">WhatsApp us</a>
              <Link to="/warranty" className="hover:text-pink-200">Repair warranty</Link>
              <Link to="/terms" className="hover:text-pink-200">Terms of service</Link>
              <Link to="/privacy" className="hover:text-pink-200">Privacy policy</Link>
            </div>
          </nav>

          <div>
            <p className="mb-4 font-bold">Contact us</p>
            <div className="flex flex-col items-center gap-3 text-sm text-white/80 md:items-start">
              {HAS_CONTACT_PHONE ? (
                <a href={PHONE_LINK} className="inline-flex min-h-11 items-center gap-3 hover:text-pink-200">
                  <Phone size={18} aria-hidden="true" /> {HAS_PUBLIC_PHONE ? PHONE_DISPLAY : "Call the shop"}
                </a>
              ) : (
                <p className="inline-flex min-h-11 items-center gap-3"><Phone size={18} aria-hidden="true" /> Phone: {PHONE_DISPLAY}</p>
              )}
              <a href={getWhatsAppUrl()} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="inline-flex min-h-11 items-center gap-3 hover:text-pink-200">
                <MessageCircle size={18} aria-hidden="true" /> {HAS_WHATSAPP ? "Chat on WhatsApp" : "Send an inquiry"}
              </a>
              <address className="max-w-sm not-italic leading-6">{SHOP_ADDRESS}</address>
              <p>{OPENING_HOURS_DISPLAY}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/60 md:text-left">
          © {new Date().getFullYear()} AZAN Mobile Fix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
