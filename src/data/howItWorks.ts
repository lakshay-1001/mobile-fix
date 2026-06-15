export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const howItWorks: Step[] = [
  {
    id: 1,
    title: "Book Online",
    description:
      "Select your device and issue in under 60 seconds.",
    icon: "MousePointerClick",
  },
  {
    id: 2,
    title: "We Arrive",
    description:
      "A certified technician meets you at your location.",
    icon: "Car",
  },
  {
    id: 3,
    title: "We Fix",
    description:
      "Repairs are done on-site or picked up for complex work.",
    icon: "Wrench",
  },
  {
    id: 4,
    title: "You Pay",
    description:
      "Check your device and pay securely after testing.",
    icon: "BadgeCheck",
  },
];