import Container from "../common/Container";
import { features } from "../../data/features";
import FeatureCard from "../cards/FeatureCard";
import repairImage from "../../assets/images/repair.png";
import SectionHeading from "../common/SectionHeading";

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="overflow-hidden bg-[#f3f3f4] py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Why Customers"
              highlight="Choose Us"
              description="Clear communication, convenient doorstep service and support after your repair."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 gradient-bg blur-2xl opacity-5 rounded-full" />
            <img
              src={repairImage}
              alt="Technician repairing a mobile phone with precision tools"
              width="512"
              height="512"
              loading="lazy"
              className="rounded-[40px] shadow-2xl w-full relative z-10"
            />
            <div
  className="
  absolute

  bottom-3
  left-3
  right-3

  lg:bottom-10
  lg:-left-10
  lg:right-auto

  z-20

  lg:max-w-xs

  p-5
  sm:p-8

  rounded-3xl

  bg-white/90

  backdrop-blur-2xl

  border
  border-white/80

  shadow-[0_20px_60px_rgba(0,0,0,0.12)]

  animate-float
  "
>
              <p className="font-bold text-[#171217]">Clear repair approval</p>
              <p className="mt-2 text-sm leading-6 text-[#5a4045]">
                Device condition, expected work, parts, timing, price and warranty are explained before a repair begins.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
