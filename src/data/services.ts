export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  mobile?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "iPhone Repair",
    description:
      "Screen replacement, battery issues, and water damage repair for all models including iPhone 15 series.",
    icon: "smartphone",
    color: "primary",
    features: ["Screen Fix in 30min", "Original Parts"],
    mobile: "+919760548266"
  },
  {
    id: 2,
    title: "MacBook Service",
    description:
      "Expert diagnostics for logic boards, keyboard replacements, and RAM/SSD upgrades.",
    icon: "laptop",
    color: "purple",
    features: ["Logic Board Masters", "1 Year Warranty"],
    mobile: "+919760548266"
  },
  {
    id: 3,
    title: "iPad & Tablet",
    description:
      "Cracked screens and charging port repairs for all tablet devices.",
    icon: "tablet",
    color: "amber",
    features: ["Fast Screen Swaps", "Free Pickup/Drop"],
    mobile: "+919760548266"
  },
  {
    id: 4,
    title: "AC Repair",
    description:
      "Professional AC repair, installation and maintenance services across Dubai.",
    icon: "ac",
    color: "amber",
    features: [
      "Gas Refilling",
      "AC Installation",
      "Cooling Issues",
      "Annual Maintenance",
    ],
    mobile: "+919760548266"
  },
];