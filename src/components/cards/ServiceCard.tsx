import {
  Smartphone,
  Laptop,
  Tablet,
  CheckCircle,
  ChevronRight,
  AirVent,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  mobile?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  color,
  features,
  mobile
}: Props) {
  const getIcon = () => {
    switch (icon) {
      case "smartphone":
        return <Smartphone size={32} />;

      case "laptop":
        return <Laptop size={32} />;

      case "ac":
        return <AirVent size={32} />;

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

  const whatsappUrl = mobile
    ? `https://wa.me/${mobile}?text=${encodeURIComponent(
        `Hi AZAN Mobile Fix, I would like to get a quote for ${title}.`
      )}`
    : `https://wa.me/+91976054826?text=${encodeURIComponent(
        `Hi AZAN Mobile Fix, I would like to get a quote for ${title}.`
      )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        gradient-border
        glow-effect
        group
        overflow-hidden
        rounded-[20px]
        cursor-pointer
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="glass-card rounded-[20px] p-8 relative overflow-hidden h-full">
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

        <div
          className="
          flex
          items-center
          gap-2

          text-[#b7004f]

          font-semibold

          group-hover:gap-4

          transition-all
          duration-300

          mt-2
          "
        >
          Click to Connect
          <ChevronRight size={18} />
        </div>
      </div>
    </a>
  );
}
