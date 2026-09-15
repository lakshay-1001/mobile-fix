import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import BelowFoldSections from "../components/sections/BelowFoldSections";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import { localBusinessSchema } from "../components/seo/schema";
import { faqs } from "../data/faq";

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
        title="Mobile Phone Repair Dubai"
        description="Mobile phone repair in Dubai for iPhone, Samsung, tablets and laptops. Visit our Bur Dubai shop or ask Azan Mobile Fix about doorstep service."
        structuredData={homeSchema}
      />
      <HeroSection />
      <StatsSection />
      <BelowFoldSections />
    </WebsiteLayout>
  );
}
