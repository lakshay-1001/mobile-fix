import { lazy, Suspense } from "react";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import { localBusinessSchema } from "../components/seo/schema";
import { faqs } from "../data/faq";

const BelowFoldSections = lazy(() => import("../components/sections/BelowFoldSections"));

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

export default function HomePage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Mobile Phone Services Dubai"
        description="Mobile phone, iPhone, Samsung, tablet and laptop fixing services across Dubai from Azan Mobile Fix in Bur Dubai."
        structuredData={homeSchema}
      />
      <HeroSection />
      <StatsSection />
      <Suspense fallback={<div className="min-h-[2400px]" aria-hidden="true" />}>
        <BelowFoldSections />
      </Suspense>
    </WebsiteLayout>
  );
}
