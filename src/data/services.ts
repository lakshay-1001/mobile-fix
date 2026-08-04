export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "iphone-repair-dubai",
    title: "iPhone Repair",
    description:
      "Screen, battery, charging and diagnostic services for a wide range of iPhone models.",
    icon: "smartphone",
    color: "primary",
    features: ["Fast screen service", "Quality-tested parts"],
  },
  {
    id: 2,
    slug: "macbook-laptop-repair-dubai",
    title: "MacBook Service",
    description:
      "Expert diagnostics for logic boards, keyboard replacements, and RAM/SSD upgrades.",
    icon: "laptop",
    color: "purple",
    features: ["Board-level diagnostics", "Repair warranty included"],
  },
  {
    id: 3,
    slug: "ipad-tablet-repair-dubai",
    title: "iPad & Tablet",
    description:
      "Cracked screens and charging port repairs for all tablet devices.",
    icon: "tablet",
    color: "amber",
    features: ["Screen replacements", "Pickup options available"],
  },
  {
    id: 4,
    slug: "samsung-phone-repair-dubai",
    title: "Android Phone Repair",
    description:
      "Screen, battery, camera and charging repairs for Samsung, Google, OnePlus and other Android phones.",
    icon: "smartphone",
    color: "primary",
    features: ["Multi-brand support", "Clear quote before repair"],
  },
];
