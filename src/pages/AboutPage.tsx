import { Building2, MapPin, ShieldCheck, Smartphone } from "lucide-react";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import {
  BRAND_MARK_LARGE,
  LEGAL_BUSINESS_NAME,
  SHOP_ADDRESS,
  SHOP_DIRECTIONS,
  SITE_NAME,
} from "../config/site";

export default function AboutPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="About Our Mobile Repair Shop in Bur Dubai"
        description="Learn about Azan Mobile Fix, our single Meena Bazaar shop and our mobile device repair services in Dubai."
        path="/about"
      />
      <div className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1050px]">
          <img src={BRAND_MARK_LARGE} alt="Azan Mobile Fix logo" width="512" height="512" className="mb-6 h-20 w-20 rounded-[22px] object-cover shadow-lg" />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">About us</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.035em] text-[#171217] sm:text-5xl">
            Local device assistance from our Bur Dubai shop
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5a4045]">
            {SITE_NAME} is the customer-facing brand operated by {LEGAL_BUSINESS_NAME}. We currently have one shop in Meena Bazaar, Bur Dubai.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <section className="rounded-[24px] border border-[#eadde5] bg-white p-7">
              <Building2 className="text-[#b7004f]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">One local shop</h2>
              <p className="mt-3 leading-7 text-[#5a4045]">We operate from a single customer-facing location. We do not claim additional branches or storefronts.</p>
            </section>
            <section className="rounded-[24px] border border-[#eadde5] bg-white p-7">
              <Smartphone className="text-[#b7004f]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">Repair inquiries</h2>
              <p className="mt-3 leading-7 text-[#5a4045]">Customers can ask about phone, tablet and laptop faults. Availability, parts, cost, timing and warranty are confirmed before work begins.</p>
            </section>
            <section className="rounded-[24px] border border-[#eadde5] bg-white p-7">
              <ShieldCheck className="text-[#b7004f]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">Clear approval</h2>
              <p className="mt-3 leading-7 text-[#5a4045]">A repair should begin only after the device condition, quotation, expected timing and applicable warranty have been explained and accepted.</p>
            </section>
            <section className="rounded-[24px] border border-[#eadde5] bg-white p-7">
              <MapPin className="text-[#b7004f]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-black">Find the shop</h2>
              <address className="mt-3 not-italic leading-7 text-[#5a4045]">{SHOP_ADDRESS}</address>
              <ul className="mt-3 space-y-1 text-sm text-[#6f5963]">
                {SHOP_DIRECTIONS.map((direction) => <li key={direction}>{direction}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}
