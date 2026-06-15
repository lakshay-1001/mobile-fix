export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Same-Day Service",
    description:
      "Most repairs are completed within the same day of booking.",
    icon: "Zap",
  },
  {
    title: "Certified Pros",
    description:
      "All technicians are factory-trained and background checked.",
    icon: "ShieldCheck",
  },
  {
    title: "OEM Quality",
    description:
      "We only use original parts or the highest grade alternatives.",
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
      "Industry-leading repair warranty.",
    icon: "BadgeCheck",
  },
  {
    title: "24/7 Support",
    description:
      "Always available to track your repair.",
    icon: "Headphones",
  },
];