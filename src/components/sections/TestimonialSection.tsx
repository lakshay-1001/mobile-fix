import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed K.",
    location: "Dubai Marina",
    quote:
      "My iPhone screen repair was done in 20 minutes in my office lobby — fast, friendly, and professional.",
    rating: 5,
  },
  {
    name: "Sara A.",
    location: "JBR",
    quote:
      "The technician arrived on time, diagnosed the issue instantly, and replaced the battery while I waited.",
    rating: 5,
  },
  {
    name: "Omar N.",
    location: "Business Bay",
    quote:
      "Excellent repair quality and transparent pricing. I will use AZAN Mobile Fix again for my laptop repairs.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6">
            <SectionHeading
              title="Real"
              highlight="Testimonials"
              description="Trusted by Dubai customers for fast, convenient repairs delivered at home or office."
            />
            <p className="text-gray-500 text-base md:text-lg max-w-2xl">
              Hear from actual clients who experienced our same-day phone and laptop service with confidence.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-6 border border-white/60 shadow-sm">
                <p className="text-sm text-gray-500 mb-3">Average repair</p>
                <h3 className="text-3xl font-black text-[#b7004f]">30 min</h3>
                <p className="text-gray-500 mt-2">Average on-site fix time.</p>
              </div>
              <div className="glass-card p-6 border border-white/60 shadow-sm">
                <p className="text-sm text-gray-500 mb-3">Customer rating</p>
                <h3 className="text-3xl font-black text-[#8138b2]">4.9/5</h3>
                <p className="text-gray-500 mt-2">Trusted by thousands of satisfied clients.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="glass-card p-8 border border-white/60 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-sm text-[#5a4045]">{item.location}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-[#f5e8f2] px-3 py-1 text-[#b7004f] text-sm">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star key={index} size={14} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
