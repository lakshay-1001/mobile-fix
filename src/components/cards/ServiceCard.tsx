import {
  Smartphone,
  Laptop,
  Tablet,
  CheckCircle,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl, HAS_WHATSAPP } from "../../config/site";
import { trackEvent } from "../../config/analytics";

interface Props {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export default function ServiceCard({
  slug,
  title,
  description,
  icon,
  color,
  features,
}: Props) {
  const getIcon = () => {
    switch (icon) {
      case "smartphone":
        return <Smartphone size={32} />;

      case "laptop":
        return <Laptop size={32} />;

      default:
        return <Tablet size={32} />;
    }
  };

  const getColor = () => {
    switch (color) {
      case "purple":
        return "bg-[#8138b2]";
      case "amber":
        return "bg-[#855400]";
      default:
        return "bg-[#b7004f]";
    }
  };

  const whatsappUrl = getWhatsAppUrl(
    `Hi Azan Mobile Fix, I would like to get a quote for ${title} in Dubai.`
  );

  return (
    <article
      className="
        block
        gradient-border
        glow-effect
        group
        overflow-hidden
        rounded-[20px]
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="glass-card rounded-[20px] p-6 sm:p-8 relative overflow-hidden h-full">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#b7004f]/10 group-hover:bg-[#b7004f]/15 transition-colors" />

        <div
          className={`${getColor()} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
        >
          {getIcon()}
        </div>

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-[#5a4045] mb-6">
          {description}
        </p>

        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle
                size={16}
                className="text-[#b7004f]"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            to={`/services/${slug}`}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-[#b7004f] px-5 font-semibold text-white transition-colors hover:bg-[#950040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
          >
            Service details <ChevronRight size={18} aria-hidden="true" />
          </Link>
          <a
            onClick={() =>
              trackEvent("whatsapp_click", {
                location: "service_card",
              })
            }
            href={whatsappUrl}
            target={HAS_WHATSAPP ? "_blank" : undefined}
            rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
            aria-label={HAS_WHATSAPP ? `Get a WhatsApp quote for ${title}` : `Send an inquiry about ${title}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#b7004f]/30 px-5 font-semibold text-[#b7004f] transition-colors hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
          >
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
