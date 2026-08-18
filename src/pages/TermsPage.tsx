import WebsiteLayout from "../components/layout/WebsiteLayout";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import LegalCard from "../components/legal/LegalCard";

import {
  Wrench,
  UserCheck,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  Phone,
} from "lucide-react";
import SEO from "../components/seo/SEO";
import { getWhatsAppUrl, HAS_WHATSAPP, LEGAL_BUSINESS_NAME } from "../config/site";
import { trackEvent } from "../config/analytics";

export default function TermsPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Terms of Service"
        description="Review the fix service terms, estimates, payment conditions and customer responsibilities for Azan Mobile Fix in Dubai."
        path="/terms"
      />
      <LegalPageLayout title="Terms of Service">

        {/* Effective Date */}

        <div
          className="
          inline-flex

          px-4
          py-2

          rounded-full

          bg-[#f5e8f2]

          text-[#b7004f]

          text-sm
          font-semibold

          mb-8
          "
        >
          Effective Date: 3 August 2026
        </div>

        {/* Intro Banner */}

        <div
          className="
          mb-10

          rounded-[32px]

          bg-gradient-to-r
          from-[#b7004f]
          via-[#c2185b]
          to-[#8138b2]

          p-8
          md:p-10

          text-white
          "
        >
          <h2
            className="
            text-2xl
            md:text-3xl

            font-black

            mb-4
            "
          >
            Customer Service Commitment
          </h2>

          <p
            className="
            text-white/90

            leading-8

            max-w-3xl
            "
          >
            Azan Mobile Fix, operated by {LEGAL_BUSINESS_NAME}, is committed to
            providing transparent pricing,
            professional fix services,
            clear information about replacement parts,
            and outstanding customer support
            in Dubai.
          </p>
        </div>

        <div className="space-y-6">

          <LegalCard
            title="Fix Services"
            icon={<Wrench size={22} />}
          >
            <p>
              Azan Mobile Fix provides fix
              services for smartphones,
              tablets, laptops, MacBooks,
              gaming devices and accessories.
            </p>

            <p>
              Fix availability is confirmed for each request. Unless otherwise agreed in writing, customers should bring devices to our Bur Dubai shop.
            </p>
          </LegalCard>

          <LegalCard
            title="Fix Estimates"
            icon={<ShieldCheck size={22} />}
          >
            <p>
              All quotations are based on the
              visible condition of the device
              and preliminary diagnostics.
            </p>

            <p>
              Additional faults discovered
              during fix may require further
              approval before work continues.
            </p>
          </LegalCard>

          <LegalCard
            title="Customer Responsibilities"
            icon={<UserCheck size={22} />}
          >
            <ul className="list-disc pl-5 space-y-3">
              <li>
                Backup all important data before fix.
              </li>

              <li>
                Remove passwords where possible.
              </li>

              <li>
                Provide accurate information about device issues.
              </li>

              <li>
                Ensure the device is legally owned.
              </li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Payments & Refunds"
            icon={<CreditCard size={22} />}
          >
            <p>
              Payment is due immediately upon
              successful completion of fix
              services.
            </p>

            <p>
              If a service is defective, customers may be entitled to re-performance, an appropriate refund, compensation or another remedy required by applicable UAE law.
            </p>
          </LegalCard>

          <LegalCard
            title="Limitation of Liability"
            icon={<AlertTriangle size={22} />}
          >
            <p>
              Nothing in these Terms excludes or limits any right or remedy that cannot lawfully be excluded under UAE consumer protection law, including responsibility for damage caused by negligence or defective service.
            </p>

            <p>
              Customers should back up their data and remove passwords where reasonably possible before fix. This precaution does not remove rights that apply under UAE law.
            </p>
          </LegalCard>

        </div>

        {/* Contact Card */}

        <div
          className="
          mt-10

          rounded-[32px]

          border
          border-[#f1e6ef]

          bg-white

          p-8
          md:p-10

          text-center
          "
        >
          <div
            className="
            w-14
            h-14

            rounded-full

            bg-[#f5e8f2]

            flex
            items-center
            justify-center

            mx-auto

            text-[#b7004f]

            mb-5
            "
          >
            <Phone size={24} />
          </div>

          <h3
            className="
            text-2xl
            font-bold

            mb-3
            "
          >
            Need Help?
          </h3>

          <p
            className="
            text-[#5a4045]

            max-w-xl
            mx-auto

            mb-6
            "
          >
            If you have questions regarding
            these Terms of Service, our support
            team will be happy to assist.
          </p>

          <a
            onClick={() =>
              trackEvent("whatsapp_click", {
                location: "terms_page",
              })
            }
            href={getWhatsAppUrl("Hi Azan Mobile Fix, I need help with your Terms of Service.")}
            target={HAS_WHATSAPP ? "_blank" : undefined}
            rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
            className="
            h-[52px]

            px-8

            rounded-full

            text-white
            font-semibold

            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]

            hover:scale-[1.03]

            transition-all
            duration-300
            "
          >
            Contact Support on WhatsApp
          </a>
        </div>

      </LegalPageLayout>
    </WebsiteLayout>
  );
}
