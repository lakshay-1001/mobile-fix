export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  image: "phone" | "laptop" | "tablet" | "ac";
  imagePosition?: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "iphone-fix-dubai",
    title: "iPhone Fix",
    description:
      "Screen, battery, charging and diagnostic services for a wide range of iPhone models.",
    icon: "smartphone",
    color: "primary",
    features: ["Fast screen service", "Quality-tested parts"],
    image: "phone",
    imagePosition: "center",
  },
  {
    id: 2,
    slug: "macbook-laptop-fix-dubai",
    title: "MacBook Fix",
    description:
      "Expert diagnostics for logic boards, keyboard replacements, and RAM/SSD upgrades.",
    icon: "laptop",
    color: "purple",
    features: ["Board-level diagnostics", "Fix warranty included"],
    image: "laptop",
    imagePosition: "center",
  },
  {
    id: 3,
    slug: "ipad-tablet-fix-dubai",
    title: "iPad & Tablet",
    description:
      "Cracked screens and charging port fixes for all tablet devices.",
    icon: "tablet",
    color: "amber",
    features: ["Screen replacements", "Pickup options available"],
    image: "tablet",
    imagePosition: "center",
  },
  {
    id: 4,
    slug: "samsung-phone-fix-dubai",
    title: "Android Phone Fix",
    description:
      "Screen, battery, camera and charging fixes for Samsung, Google, OnePlus and other Android phones.",
    icon: "smartphone",
    color: "primary",
    features: ["Multi-brand support", "Clear quote before fixing"],
    image: "phone",
    imagePosition: "center",
  },
  {
    id: 5,
    slug: "ac-fix-dubai",
    title: "AC Fix",
    description:
      "Split AC inspection, cooling issue checks, cleaning and fix support for homes and offices in Dubai.",
    icon: "air",
    color: "teal",
    features: ["Cooling fault checks", "Home visit support"],
    image: "ac",
    imagePosition: "center",
  },
];
