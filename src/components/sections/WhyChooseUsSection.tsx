import Container from "../common/Container";
import { features } from "../../data/features";
import FeatureCard from "../cards/FeatureCard";
import repairImage from "../../assets/images/repair.png";

export default function WhyChooseUsSection() {
  return (
    <section className="py-28 bg-[#f3f3f4]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 gradient-bg blur-2xl opacity-5 rounded-full" />
            <img
              src={repairImage}
              alt="Repair"
              className="rounded-[40px] shadow-2xl w-full relative z-10"
            />
            <div
  className="
  absolute

  bottom-10
  -left-10

  z-20

  max-w-xs

  p-8

  rounded-3xl

  bg-white/90

  backdrop-blur-2xl

  border
  border-white/80

  shadow-[0_20px_60px_rgba(0,0,0,0.12)]

  animate-float
  "
>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#b7004f] flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="font-semibold">Ahmed K.</h4>
                  <p className="text-xs text-[#5a4045]">Dubai Marina</p>
                </div>
              </div>
              <p className="text-sm italic text-[#5a4045]">
                "Fixed my iPhone screen in my office lobby in 20 minutes. Truly a life saver!"
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
