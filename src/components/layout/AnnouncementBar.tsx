import { Clock3, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, HAS_WHATSAPP, OPENING_HOURS_SHORT } from "../../config/site";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Business contact and opening hours"
      className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center bg-[#b7004f] px-2 text-white sm:h-10 sm:px-4"
    >
      <div className="flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-medium sm:gap-3 sm:text-sm">
        <a
          href={getWhatsAppUrl()}
          target={HAS_WHATSAPP ? "_blank" : undefined}
          rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
          className="flex items-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <MessageCircle size={13} className="sm:h-4 sm:w-4" aria-hidden="true" />
          WhatsApp us
        </a>
        <span className="hidden sm:block" aria-hidden="true">|</span>
        <span className="hidden items-center gap-1.5 sm:flex">
          <Clock3 size={14} aria-hidden="true" />
          {OPENING_HOURS_SHORT}
        </span>
      </div>
    </aside>
  );
}
