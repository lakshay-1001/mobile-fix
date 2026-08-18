import { CheckCircle2, Clock3, MapPin, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SEO from "../components/seo/SEO";
import { createBreadcrumbSchema, createServiceSchema, localBusinessSchema } from "../components/seo/schema";
import { getWhatsAppUrl, HAS_WHATSAPP, OPENING_HOURS_DISPLAY, SHOP_ADDRESS } from "../config/site";
import { getServiceGuide, getService } from "../data/seoContent";
import NotFoundPage from "./NotFoundPage";
import { trackEvent } from "../config/analytics";

export default function ServiceLandingPage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFoundPage />;

  const path = `/services/${service.slug}`;
  const schema = [
    localBusinessSchema,
    createServiceSchema({ name: service.title, description: service.description, path }),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Device Services", path: "/services" },
      { name: service.name, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  const whatsappUrl = getWhatsAppUrl(`Hi Azan Mobile Fix, I would like a quote for ${service.name}.`);

  return (
    <WebsiteLayout>
      <SEO title={service.title} description={service.description} path={path} structuredData={schema} />

      <article className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1120px]">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Device Services", path: "/services" }, { name: service.name }]} />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">Local fix service</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.035em] text-[#171217] sm:text-5xl">{service.title}</h1>
              <p className="mt-5 text-lg leading-8 text-[#5a4045]">{service.intro}</p>
              <a 
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "service_landing_page",
                  })
                }
                href={whatsappUrl} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#b7004f] px-7 font-bold text-white hover:bg-[#950040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">
                <MessageCircle size={18} aria-hidden="true" /> Ask about this fix
              </a>
            </div>

            <aside className="rounded-[24px] bg-[#292a2d] p-7 text-white">
              <div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-pink-300" aria-hidden="true" /><div><h2 className="font-black">Visit our shop</h2><address className="mt-2 not-italic leading-7 text-white/75">{SHOP_ADDRESS}</address></div></div>
              <div className="mt-6 flex gap-3 border-t border-white/15 pt-6"><Clock3 className="mt-1 shrink-0 text-pink-300" aria-hidden="true" /><div><h2 className="font-black">Opening hours</h2><p className="mt-2 text-white/75">{OPENING_HOURS_DISPLAY}</p></div></div>
            </aside>
          </div>

          <section className="mt-14" aria-labelledby="common-issues-heading">
            <h2 id="common-issues-heading" className="text-3xl font-black text-[#171217]">Common faults we can assess</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.issues.map((issue) => <div key={issue} className="flex gap-3 rounded-2xl border border-[#eadde5] bg-white p-5"><CheckCircle2 className="mt-0.5 shrink-0 text-[#b7004f]" size={21} aria-hidden="true" /><p className="leading-7 text-[#5a4045]">{issue}</p></div>)}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-3xl font-black text-[#171217]">How the fix process works</h2>
            <ol className="mt-6 grid gap-5 md:grid-cols-2">
              {service.process.map((step, index) => <li key={step.title} className="rounded-[22px] bg-white p-6 shadow-[0_12px_35px_rgba(67,35,52,0.06)]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 font-black text-[#b7004f]">{index + 1}</span><h3 className="mt-4 text-xl font-black">{step.title}</h3><p className="mt-2 leading-7 text-[#5a4045]">{step.description}</p></li>)}
            </ol>
          </section>

          <section className="mt-14" aria-labelledby="service-faq-heading">
            <h2 id="service-faq-heading" className="text-3xl font-black text-[#171217]">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-[#eadde5] bg-white p-5"><summary className="cursor-pointer list-none pr-5 text-lg font-black text-[#171217]">{faq.question}</summary><p className="mt-3 leading-7 text-[#5a4045]">{faq.answer}</p></details>)}
            </div>
          </section>

          <section className="mt-14 rounded-[26px] border border-[#eadde5] bg-white p-7 sm:p-9" aria-labelledby="related-guides-heading">
            <h2 id="related-guides-heading" className="text-2xl font-black">Helpful fix guides</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.relatedGuideSlugs.map(getServiceGuide).filter((guide) => guide !== undefined).map((guide) => (
                <Link key={guide.slug} to={`/blog/${guide.slug}`} className="rounded-xl bg-[#fff5fa] p-5 font-bold text-[#b7004f] hover:underline">{guide.title}</Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </WebsiteLayout>
  );
}
