import { CalendarDays, Clock3, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SEO from "../components/seo/SEO";
import { createArticleSchema, createBreadcrumbSchema } from "../components/seo/schema";
import { getWhatsAppUrl, HAS_WHATSAPP } from "../config/site";
import { getRepairGuide, getRepairService } from "../data/seoContent";
import NotFoundPage from "./NotFoundPage";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogArticlePage() {
  const { slug } = useParams();
  const guide = getRepairGuide(slug);

  if (!guide) return <NotFoundPage />;

  const path = `/blog/${guide.slug}`;
  const schema = [
    createArticleSchema({ title: guide.title, description: guide.description, path, published: guide.published, modified: guide.modified }),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Repair guides", path: "/blog" },
      { name: guide.title, path },
    ]),
  ];

  return (
    <WebsiteLayout>
      <SEO
        title={guide.title}
        description={guide.description}
        path={path}
        type="article"
        publishedTime={guide.published}
        modifiedTime={guide.modified}
        imageAlt={`${guide.title} – repair guide from Azan Mobile Fix`}
        structuredData={schema}
      />

      <article className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[860px]">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Repair guides", path: "/blog" }, { name: guide.title }]} />
          <header>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">Device care guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-[-0.035em] text-[#171217] sm:text-5xl">{guide.title}</h1>
            <p className="mt-5 text-xl leading-8 text-[#5a4045]">{guide.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 border-y border-[#eadde5] py-4 text-sm font-semibold text-[#6f5963]">
              <span>By Azan Mobile Fix Repair Team</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} aria-hidden="true" /> Updated <time dateTime={guide.modified}>{formatDate(guide.modified)}</time></span>
              <span className="inline-flex items-center gap-1.5"><Clock3 size={15} aria-hidden="true" /> {guide.readTime}</span>
            </div>
          </header>

          <div className="mt-10 space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading} aria-labelledby={`section-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <h2 id={`section-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-2xl font-black leading-tight text-[#171217] sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-[17px] leading-8 text-[#4f3b44]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && <ul className="mt-5 space-y-3 rounded-2xl bg-white p-6 text-[#4f3b44] shadow-[0_10px_30px_rgba(67,35,52,0.05)]">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="font-black text-[#b7004f]">✓</span><span>{bullet}</span></li>)}</ul>}
              </section>
            ))}
          </div>

          <aside className="mt-12 rounded-[26px] bg-gradient-to-r from-[#b7004f] to-[#8138b2] p-7 text-white sm:p-9" aria-label="Repair inquiry">
            <h2 className="text-2xl font-black">Need help with your device?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/85">Send the model and symptoms for initial guidance. A final repair quotation may require physical inspection.</p>
            <a href={getWhatsAppUrl()} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-bold text-[#b7004f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><MessageCircle size={18} aria-hidden="true" /> Message on WhatsApp</a>
          </aside>

          <section className="mt-12" aria-labelledby="related-services-heading">
            <h2 id="related-services-heading" className="text-2xl font-black">Related repair services</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {guide.relatedServiceSlugs.map(getRepairService).filter((service) => service !== undefined).map((service) => <Link key={service.slug} to={`/services/${service.slug}`} className="rounded-full border border-[#b7004f]/25 bg-white px-5 py-3 font-semibold text-[#b7004f] hover:bg-pink-50">{service.name}</Link>)}
            </div>
          </section>

          <p className="mt-12 border-t border-[#eadde5] pt-6 text-sm leading-6 text-[#6f5963]">This guide provides general device-care information and does not replace inspection of a specific device. Stop using equipment that is swollen, unusually hot, smoking or producing an unusual smell.</p>
        </div>
      </article>
    </WebsiteLayout>
  );
}
