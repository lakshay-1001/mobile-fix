import { BadgeCheck, Car, MousePointerClick, Wrench, type LucideIcon } from "lucide-react";
import { howItWorks } from "../../data/howItWorks";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Car,
  MousePointerClick,
  Wrench,
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Fixing is"
          highlight="Effortless"
          description="We've streamlined the process to fit your busy Dubai lifestyle."
          center
        />

        <div className="relative mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          <div className="absolute left-10 right-10 top-12 -z-10 hidden h-[2px] bg-gradient-to-r from-[#b7004f]/20 via-[#8138b2]/20 to-[#b7004f]/20 lg:block" />
          {howItWorks.map((step) => {
            const Icon = iconMap[step.icon] || Wrench;
            return (
              <article key={step.id} className="group flex flex-col items-center text-center">
                <div className="glass-card mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-xl transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#b7004f] group-hover:to-[#8138b2] group-hover:text-white">
                  <Icon size={30} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.id}. {step.title}</h3>
                <p className="text-sm leading-6 text-[#5a4045]">{step.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
