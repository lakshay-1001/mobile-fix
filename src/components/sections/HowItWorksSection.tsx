import { howItWorks } from "../../data/howItWorks";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import * as Icons from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          title="Repairing is"
          highlight="Effortless"
          description="We've streamlined the entire process to fit your busy Dubai lifestyle."
          center
        />

        <div className="mt-20 grid md:grid-cols-4 gap-10 relative">
          <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-gradient-to-r from-[#b7004f]/20 via-[#8138b2]/20 to-[#b7004f]/20 -z-10" />

          {howItWorks.map((step) => {
            const Icon = Icons[step.icon as keyof typeof Icons] as React.ElementType;

            return (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 shadow-xl group-hover:bg-gradient-to-r group-hover:from-[#b7004f] group-hover:to-[#8138b2] group-hover:text-white transition-all duration-500">
                  <Icon size={30} />
                </div>

                <h4 className="font-bold text-lg mb-2">{step.id}. {step.title}</h4>
                <p className="text-[#5a4045] text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
