import WebsiteLayout from "../components/layout/WebsiteLayout";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import LegalCard from "../components/legal/LegalCard";

import {
  Smartphone,
  Battery,
  PlugZap,
  Cpu,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import SEO from "../components/seo/SEO";
import { LEGAL_BUSINESS_NAME } from "../config/site";

export default function WarrantyPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Mobile Fix Warranty Dubai"
        description="Read the Azan Mobile Fix warranty periods, exclusions and claim process for screen, battery, charging port and motherboard fixes in Dubai."
        path="/warranty"
      />
      <LegalPageLayout title="Warranty Policy">

        <div className="mb-8 rounded-2xl border border-[#eadde5] bg-white p-5 text-[#5a4045]">
          <p className="font-semibold text-[#171217]">Last updated: 3 August 2026</p>
          <p className="mt-2">Azan Mobile Fix is operated by {LEGAL_BUSINESS_NAME}. The applicable warranty period, installed parts and coverage must be recorded on the fix invoice or warranty document.</p>
          <p className="mt-2">This commercial warranty is provided in addition to, and does not replace or reduce, mandatory rights available under UAE consumer protection law.</p>
        </div>

        <div className="space-y-6">

          <LegalCard
            title="Screen Fixes"
            icon={<Smartphone size={22} />}
          >
            <p>
              Covered for 90 days against
              workmanship defects.
            </p>
          </LegalCard>

          <LegalCard
            title="Battery Replacements"
            icon={<Battery size={22} />}
          >
            <p>
              Covered for 90 days against
              battery manufacturing defects.
            </p>
          </LegalCard>

          <LegalCard
            title="Charging Port Fixes"
            icon={<PlugZap size={22} />}
          >
            <p>
              Covered for 60 days against
              workmanship defects.
            </p>
          </LegalCard>

          <LegalCard
            title="Motherboard Fixes"
            icon={<Cpu size={22} />}
          >
            <p>
              Covered for 30 days unless
              otherwise specified.
            </p>
          </LegalCard>

          <LegalCard
            title="Warranty Exclusions"
            icon={<AlertTriangle size={22} />}
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Physical damage.</li>
              <li>Water damage.</li>
              <li>Unauthorized fixes.</li>
              <li>Accidental damage.</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Claim Process"
            icon={<ShieldCheck size={22} />}
          >
            <p>
              Customers should provide the original or electronic fix invoice when requesting warranty service. We will inspect the device and explain the available warranty or statutory remedy.
            </p>
          </LegalCard>

        </div>

      </LegalPageLayout>
    </WebsiteLayout>
  );
}
