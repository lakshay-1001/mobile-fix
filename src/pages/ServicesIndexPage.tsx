import { ArrowRight, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SEO from "../components/seo/SEO";
import { createBreadcrumbSchema, localBusinessSchema } from "../components/seo/schema";
import { getSiteUrl } from "../config/site";
import { servicePages } from "../data/seoContent";

const servicesIndexSchema = [
  localBusinessSchema,
  createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Device Services", path: "/services" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Device Fix Services in Dubai",
    url: getSiteUrl("/services"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: getSiteUrl(`/services/${service.slug}`),
      })),
    },
  },
];

export default function ServicesIndexPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Phone, Tablet and Laptop Fix Services Dubai"
        description="Explore iPhone, Samsung, mobile phone, iPad, tablet, MacBook and laptop fix services from Azan Mobile Fix in Bur Dubai."
        path="/services"
        structuredData={servicesIndexSchema}
      />

      <section className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Device Services" }]} />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">Dubai device fix services</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.035em] text-[#171217] sm:text-5xl">
            Phone, tablet and laptop fix services
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5a4045]">
            Start with the service that matches your device. We confirm the fault, parts availability,
            quotation, expected timing and applicable warranty before approved work begins.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {servicePages.map((service) => (
              <article key={service.slug} className="flex h-full flex-col rounded-[24px] border border-[#eadde5] bg-white p-7 shadow-[0_14px_40px_rgba(67,35,52,0.06)]">
                <Wrench className="text-[#b7004f]" size={25} aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-black text-[#171217]">{service.title}</h2>
                <p className="mt-3 flex-1 leading-7 text-[#5a4045]">{service.summary}</p>
                <Link to={`/services/${service.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[#b7004f] px-5 font-semibold text-white hover:bg-[#950040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">
                  View service details <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 rounded-[28px] bg-[#292a2d] p-7 text-white sm:grid-cols-2 sm:p-9">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-pink-300" aria-hidden="true" />
              <div><h2 className="font-black">One Bur Dubai shop</h2><p className="mt-2 leading-7 text-white/75">Visit our Meena Bazaar location or message first to check availability.</p></div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-pink-300" aria-hidden="true" />
              <div><h2 className="font-black">Approval before fix</h2><p className="mt-2 leading-7 text-white/75">The proposed work and warranty terms are explained before service begins.</p></div>
            </div>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  );
}
