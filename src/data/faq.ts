export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question:
      "How long does an iPhone screen repair take?",
    answer:
      "Most screen replacements are completed within 30 to 60 minutes.",
  },
  {
    id: 2,
    question:
      "Do you provide a warranty?",
    answer:
      "Yes, all repairs include a service warranty.",
  },
  {
    id: 3,
    question:
      "Do you come to my location?",
    answer:
      "Yes, we provide doorstep repair services across Dubai.",
  },
  {
    id: 4,
    question:
      "Do you use original parts?",
    answer:
      "We use OEM-quality and original parts whenever available.",
  },
];