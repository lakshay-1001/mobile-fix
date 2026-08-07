import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import WebsiteLayout from "../components/layout/WebsiteLayout";

export default function NotFoundPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found. Return to Azan Mobile Fix for mobile repair services in Dubai."
        path="/404"
        noIndex
      />
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
        <p className="mb-3 font-bold text-[#b7004f]">404</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">This page could not be found</h1>
        <p className="mt-5 text-lg leading-8 text-[#5a4045]">
          The link may be outdated. Visit our home page to explore repair services or contact our team.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#b7004f] px-7 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
        >
          Back to home
        </Link>
      </section>
    </WebsiteLayout>
  );
}
