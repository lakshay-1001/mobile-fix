import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import { localBusinessSchema } from "../components/seo/schema";
import { faqs } from "../data/faq";

const TestimonialSection = lazy(() => import("../components/sections/TestimonialSection"));
const SubmitReviewSection = lazy(() => import("../components/reviews/SubmitReviewSection"));

const homeSchema = [
  localBusinessSchema,
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

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
      {visible ? <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />} >{children}</Suspense> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Mobile Phone Repair Dubai"
        description="Mobile phone, iPhone, Samsung, tablet and laptop repair services across Dubai from AZAN Mobile Fix in Bur Dubai."
        structuredData={homeSchema}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <DeferredSection minHeight={600}><TestimonialSection /></DeferredSection>
      <DeferredSection minHeight={700}><SubmitReviewSection /></DeferredSection>
      <FAQSection />
      <CTASection />
    </WebsiteLayout>
  );
}
