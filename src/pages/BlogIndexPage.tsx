import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SEO from "../components/seo/SEO";
import { createBreadcrumbSchema } from "../components/seo/schema";
import { getSiteUrl, SITE_NAME } from "../config/site";
import { repairGuides } from "../data/seoContent";

const blogSchema = [
  createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Repair guides", path: "/blog" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Repair Guides`,
    description: "Practical phone and device care guidance from AZAN Mobile Fix in Dubai.",
    url: getSiteUrl("/blog"),
    blogPost: repairGuides.map((guide) => ({
      "@type": "BlogPosting",
      headline: guide.title,
      url: getSiteUrl(`/blog/${guide.slug}`),
      datePublished: guide.published,
      dateModified: guide.modified,
    })),
  },
];

export default function BlogIndexPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Phone Repair Guides and Device Care Tips"
        description="Read practical guides about cracked screens, battery symptoms, charging problems and choosing a mobile repair shop in Dubai."
        path="/blog"
        structuredData={blogSchema}
      />

      <section className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1120px]">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Repair guides" }]} />
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">Helpful, practical information</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.035em] text-[#171217] sm:text-5xl">Phone repair guides</h1>
            <p className="mt-5 text-lg leading-8 text-[#5a4045]">Understand common symptoms, protect your data and make a better-informed repair decision. These guides provide general information; an exact fault still requires diagnosis.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {repairGuides.map((guide) => (
              <article key={guide.slug} className="flex h-full flex-col rounded-[24px] border border-[#eadde5] bg-white p-7 shadow-[0_14px_40px_rgba(67,35,52,0.06)]">
                <BookOpen className="text-[#b7004f]" aria-hidden="true" />
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#6f5963]"><CalendarDays size={15} aria-hidden="true" /><time dateTime={guide.modified}>{new Date(`${guide.modified}T00:00:00`).toLocaleDateString("en-AE", { day: "numeric", month: "long", year: "numeric" })}</time> · {guide.readTime}</p>
                <h2 className="mt-3 text-2xl font-black leading-tight text-[#171217]">{guide.title}</h2>
                <p className="mt-3 flex-1 leading-7 text-[#5a4045]">{guide.excerpt}</p>
                <Link to={`/blog/${guide.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[#b7004f] px-5 font-semibold text-white hover:bg-[#950040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">Read the guide <ArrowRight size={17} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </WebsiteLayout>
  );
}
