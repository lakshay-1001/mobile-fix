import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FAQItem from "../cards/FAQItem";
import { faqs } from "../../data/faq";

export default function FAQSection() {
  return (
    <section
      id="faqs"
      className="
        relative
        overflow-hidden

        py-20
        md:py-28

        bg-gradient-to-b
        from-[#faf5fb]
        via-[#fffafd]
        to-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-full
          max-w-[700px]
          h-[350px]

          bg-[#b7004f]/5

          rounded-full
          blur-[120px]

          pointer-events-none
        "
      />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know before booking your repair appointment."
            center
          />

          <div
            className="
              mt-12
              md:mt-16

              max-w-[900px]
              mx-auto

              flex
              flex-col

              gap-4
              md:gap-5
            "
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
