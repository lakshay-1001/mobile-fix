export interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed K.",
    location: "Dubai Marina",
    review:
      "Fixed my iPhone screen in my office lobby in 20 minutes. Truly a lifesaver.",
  },
  {
    id: 2,
    name: "Sarah J.",
    location: "Business Bay",
    review:
      "Very professional service and genuine pricing.",
  },
  {
    id: 3,
    name: "Michael A.",
    location: "JLT",
    review:
      "Fastest repair experience I have ever had.",
  },
];