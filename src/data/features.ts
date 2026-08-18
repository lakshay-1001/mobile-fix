export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Same-Day Service",
    description:
      "Most fixes are completed within the same day of booking.",
    icon: "Zap",
  },
  {
    title: "Experienced Technicians",
    description:
      "Skilled technicians diagnose and fix a wide range of device faults.",
    icon: "ShieldCheck",
  },
  {
    title: "Quality Parts",
    description:
      "Part options are explained clearly before your fix begins.",
    icon: "Award",
  },
  {
    title: "Fair Pricing",
    description:
      "Transparent quotes with no hidden fees.",
    icon: "Wallet",
  },
  {
    title: "Warranty",
    description:
      "The applicable warranty period is confirmed and recorded for each covered fix.",
    icon: "BadgeCheck",
  },
  {
    title: "Daily Support",
    description:
      "Contact our team seven days a week from 10 AM to midnight.",
    icon: "Headphones",
  },
];
