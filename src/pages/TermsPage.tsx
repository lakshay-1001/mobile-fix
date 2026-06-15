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

export default function TermsPage() {
  return (
    <WebsiteLayout>
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
          Effective Date: January 2026
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
            AZAN Mobile Fix is committed to
            providing transparent pricing,
            professional repair services,
            genuine-quality replacement parts,
            and outstanding customer support
            throughout Dubai.
          </p>
        </div>

        <div className="space-y-6">

          <LegalCard
            title="Repair Services"
            icon={<Wrench size={22} />}
          >
            <p>
              AZAN Mobile Fix provides repair
              services for smartphones,
              tablets, laptops, MacBooks,
              gaming devices and accessories.
            </p>

            <p>
              Repairs may be performed at
              customer locations, business
              premises, or authorized service
              locations depending on the request.
            </p>
          </LegalCard>

          <LegalCard
            title="Repair Estimates"
            icon={<ShieldCheck size={22} />}
          >
            <p>
              All quotations are based on the
              visible condition of the device
              and preliminary diagnostics.
            </p>

            <p>
              Additional faults discovered
              during repair may require further
              approval before work continues.
            </p>
          </LegalCard>

          <LegalCard
            title="Customer Responsibilities"
            icon={<UserCheck size={22} />}
          >
            <ul className="list-disc pl-5 space-y-3">
              <li>
                Backup all important data before repair.
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
              successful completion of repair
              services.
            </p>

            <p>
              Refunds may only be granted when
              repairs cannot be completed or
              where required by applicable laws.
            </p>
          </LegalCard>

          <LegalCard
            title="Limitation of Liability"
            icon={<AlertTriangle size={22} />}
          >
            <p>
              AZAN Mobile Fix shall not be liable
              for data loss, software corruption,
              manufacturer defects, or indirect
              damages resulting from repair work.
            </p>

            <p>
              Customers are solely responsible
              for backing up their data prior
              to repair.
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

          <button
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
            Contact Support
          </button>
        </div>

      </LegalPageLayout>
    </WebsiteLayout>
  );
}