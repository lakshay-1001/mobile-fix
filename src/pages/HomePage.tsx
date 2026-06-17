import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";
// import ReviewsSection from "../components/reviews/ReviewsSection";
import SubmitReviewSection from "../components/reviews/SubmitReviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <SubmitReviewSection />
      {/* <ReviewsSection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}