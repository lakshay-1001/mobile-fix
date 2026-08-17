import {
  Smartphone,
  Laptop,
  Tablet,
  AirVent,
  CheckCircle,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl, HAS_WHATSAPP } from "../../config/site";
import { trackEvent } from "../../config/analytics";
import phoneRepairImage from "../../assets/images/phone-repair.jpg";
import laptopRepairImage from "../../assets/images/laptop-repair.jpg";
import tabletRepairImage from "../../assets/images/tablet-repair.jpg";
import acRepairImage from "../../assets/images/ac-repair.jpg";

interface Props {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  image: "phone" | "laptop" | "tablet" | "ac";
  imagePosition?: string;
}

export default function ServiceCard({
  slug,
  title,
  description,
  icon,
  color,
  features,
  image,
  imagePosition = "center",
}: Props) {
  const getIcon = () => {
    switch (icon) {
      case "smartphone":
        return <Smartphone size={32} />;

      case "laptop":
        return <Laptop size={32} />;

      case "air":
        return <AirVent size={32} />;

      default:
        return <Tablet size={32} />;
    }
  };

  const getTone = () => {
    switch (color) {
      case "purple":
        return {
          solid: "bg-[#8138b2]",
          ring: "ring-[#8138b2]/20",
          text: "text-[#8138b2]",
          soft: "bg-[#f5edfb]",
        };
      case "amber":
        return {
          solid: "bg-[#a46400]",
          ring: "ring-[#a46400]/20",
          text: "text-[#855400]",
          soft: "bg-[#fff4df]",
        };
      case "teal":
        return {
          solid: "bg-[#08756f]",
          ring: "ring-[#08756f]/20",
          text: "text-[#08756f]",
          soft: "bg-[#e9fbf8]",
        };
      default:
        return {
          solid: "bg-[#b7004f]",
          ring: "ring-[#b7004f]/20",
          text: "text-[#b7004f]",
          soft: "bg-[#fff0f7]",
        };
    }
  };

  const imageSrc = {
    ac: acRepairImage,
    laptop: laptopRepairImage,
    phone: phoneRepairImage,
    tablet: tabletRepairImage,
  }[image];
  const tone = getTone();

  const whatsappUrl = getWhatsAppUrl(
    `Hi Azan Mobile Fix, I would like to get a quote for ${title} in Dubai.`
  );

  return (
    <article
      className="
        group
        h-full
      "
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#eadde5] bg-white shadow-[0_18px_55px_rgba(67,35,52,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_70px_rgba(183,0,79,0.15)]">
        <div className="relative min-h-[240px] overflow-hidden sm:min-h-[270px] lg:min-h-[250px]">
          <img
            src={imageSrc}
            alt={`${title} service`}
            loading="lazy"
            width="1024"
            height="576"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171217]/80 via-[#171217]/15 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#4a3540] shadow-lg shadow-black/10 backdrop-blur">
            Dubai service
          </div>
          <div
            className={`${tone.solid} absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-3xl text-white shadow-xl shadow-black/20 ring-8 ring-white/25`}
          >
            {getIcon()}
          </div>
        </div>

        <div className="relative flex flex-1 flex-col p-5 pt-6 sm:p-7">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="max-w-[13rem] text-[1.55rem] font-black leading-tight tracking-tight text-[#171217] sm:max-w-none">
              {title}
            </h3>
            <span className={`${tone.soft} ${tone.text} shrink-0 rounded-full px-3 py-1 text-xs font-black`}>
              Repair
            </span>
          </div>

          <p className="mb-6 leading-7 text-[#5a4045]">
            {description}
          </p>

          <ul className="mb-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className={`flex min-h-11 items-center gap-2 rounded-2xl bg-[#fffafd] px-3 text-sm font-semibold text-[#30242b] ring-1 ${tone.ring}`}
              >
                <CheckCircle
                  size={16}
                  className={`shrink-0 ${tone.text}`}
                />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-auto grid gap-3 sm:grid-cols-[1fr_auto]">
            <Link
              to={`/services/${slug}`}
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-[#171217] px-5 font-bold text-white transition-colors hover:bg-[#b7004f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#eadde5] px-5 font-bold text-[#b7004f] transition-colors hover:border-[#b7004f]/40 hover:bg-[#fff0f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
            >
              <MessageCircle size={17} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
