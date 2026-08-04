import { Clock3, MapPin, MessageCircle, Navigation, Store } from "lucide-react";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import { createBreadcrumbSchema, localBusinessSchema } from "../components/seo/schema";
import {
  getWhatsAppUrl,
  HAS_WHATSAPP,
  LEGAL_BUSINESS_NAME,
  OPENING_HOURS_DISPLAY,
  SHOP_ADDRESS,
  SHOP_DIRECTIONS,
  SITE_NAME,
} from "../config/site";

export default function StoreLocatorPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Mobile Repair Shop in Meena Bazaar, Bur Dubai"
        description="Visit the single AZAN Mobile Fix shop on 25C Street in Meena Bazaar, Bur Dubai. View the address, nearby landmarks and opening hours."
        path="/locations"
        structuredData={[
          localBusinessSchema,
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Bur Dubai shop", path: "/locations" },
          ]),
        ]}
      />
      <LegalPageLayout title="Our Shop">
        <div className="space-y-8">
          <section className="rounded-[28px] bg-gradient-to-r from-[#b7004f] to-[#8138b2] p-7 text-white sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Store size={27} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Our only location</p>
                <h2 className="mt-2 text-3xl font-black">{SITE_NAME}, Bur Dubai</h2>
                <p className="mt-3 max-w-2xl leading-7 text-white/85">Operated by {LEGAL_BUSINESS_NAME}</p>
              </div>
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-[24px] border border-[#eadde5] bg-white p-7">
              <MapPin className="text-[#b7004f]" size={25} aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">Shop address</h2>
              <address className="mt-3 not-italic leading-7 text-[#5a4045]">{SHOP_ADDRESS}</address>
            </section>

            <section className="rounded-[24px] border border-[#eadde5] bg-white p-7">
              <Clock3 className="text-[#b7004f]" size={25} aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">Opening hours</h2>
              <p className="mt-3 font-semibold text-[#171217]">{OPENING_HOURS_DISPLAY}</p>
            </section>
          </div>

          <section className="rounded-[24px] border border-[#eadde5] bg-[#fff8fb] p-7">
            <Navigation className="text-[#b7004f]" size={25} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black">Nearby landmarks</h2>
            <ul className="mt-4 space-y-3 text-[#5a4045]">
              {SHOP_DIRECTIONS.map((direction) => (
                <li key={direction} className="flex gap-3">
                  <span aria-hidden="true" className="text-[#b7004f]">•</span>
                  {direction}
                </li>
              ))}
            </ul>
          </section>

          <div className="text-center">
            <a href={getWhatsAppUrl()} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b7004f] px-7 font-semibold text-white hover:bg-[#950040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">
              <MessageCircle size={18} aria-hidden="true" /> Chat with the shop on WhatsApp
            </a>
          </div>
        </div>
      </LegalPageLayout>
    </WebsiteLayout>
  );
}
