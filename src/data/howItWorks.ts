export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const howItWorks: Step[] = [
  {
    id: 1,
    title: "Contact Us",
    description:
      "Send an inquiry with your device model and the problem you are experiencing.",
    icon: "MousePointerClick",
  },
  {
    id: 2,
    title: "Receive a Quote",
    description:
      "We confirm availability, the expected work, timing, parts and estimated cost.",
    icon: "Car",
  },
  {
    id: 3,
    title: "Approve the Repair",
    description:
      "Work begins only after you approve the quotation and applicable warranty information.",
    icon: "Wrench",
  },
  {
    id: 4,
    title: "Test and Complete",
    description:
      "Review the completed work, test the device and receive the repair record or invoice.",
    icon: "BadgeCheck",
  },
];
