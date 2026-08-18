import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl, HAS_WHATSAPP } from "../../config/site";
import { trackEvent } from "../../config/analytics";

export default function FloatingWhatsAppButton() {
  return (
    <a   
      href={getWhatsAppUrl(
        "Hi Azan Mobile Fix, I want to book a mobile fix service in Dubai."
      )}
      target={HAS_WHATSAPP ? "_blank" : undefined}
      rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
      onClick={() =>
        trackEvent("whatsapp_click", {
          location: "floating_button",
        })
      }
      aria-label={HAS_WHATSAPP ? "Chat with us on WhatsApp" : "Send fix inquiry"}
      className="
        fixed
        bottom-5
        right-5
        z-[999]

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full
        bg-[#25D366]
        text-white

        shadow-[0_14px_35px_rgba(37,211,102,0.35)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105

        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#25D366]

        sm:h-16
        sm:w-16
      "
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/30" />
      <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366]">
        <FaWhatsapp
            className="
                relative
                z-10
                text-white
                text-[34px]
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-12
            "
            />
      </span>
    </a>
  );
}