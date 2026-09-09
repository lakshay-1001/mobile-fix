import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import ServicesSection from "./ServicesSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const TestimonialSection = lazy(() => import("./TestimonialSection"));
const SubmitReviewSection = lazy(() => import("../reviews/SubmitReviewSection"));

function DeferredSection({ children, minHeight }: { children: ReactNode; minHeight: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={visible ? undefined : { minHeight }}>
      {visible ? (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

export default function BelowFoldSections() {
  return (
    <>
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <DeferredSection minHeight={600}><TestimonialSection /></DeferredSection>
      <DeferredSection minHeight={700}><SubmitReviewSection /></DeferredSection>
      <FAQSection />
      <CTASection />
    </>
  );
}
