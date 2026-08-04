import {
  Award,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Wallet,
  Zap,
};

export default function FeatureCard({ title, description, icon }: Props) {
  const Icon = iconMap[icon] || ShieldCheck;

  return (
    <article className="rounded-2xl border border-white bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-[#b7004f]">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}
