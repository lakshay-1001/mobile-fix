import WebsiteLayout from "../components/layout/WebsiteLayout";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import LegalCard from "../components/legal/LegalCard";

import {
  Database,
  Eye,
  Lock,
  Shield,
  UserCheck,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <WebsiteLayout>
      <LegalPageLayout title="Privacy Policy">

        <div className="space-y-6">

          <LegalCard
            title="Information We Collect"
            icon={<Database size={22} />}
          >
            <p>
              We may collect customer names,
              phone numbers, email addresses,
              repair history and device details.
            </p>
          </LegalCard>

          <LegalCard
            title="How We Use Information"
            icon={<Eye size={22} />}
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Process repair bookings.</li>
              <li>Provide repair updates.</li>
              <li>Offer customer support.</li>
              <li>Improve our services.</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Data Security"
            icon={<Lock size={22} />}
          >
            <p>
              We use reasonable security
              measures to protect customer
              information from unauthorized
              access and misuse.
            </p>
          </LegalCard>

          <LegalCard
            title="Third Party Services"
            icon={<Shield size={22} />}
          >
            <p>
              We may use trusted third-party
              services for payments,
              communications and analytics.
            </p>
          </LegalCard>

          <LegalCard
            title="Your Rights"
            icon={<UserCheck size={22} />}
          >
            <p>
              You may request access,
              correction or deletion of
              personal information where
              permitted by law.
            </p>
          </LegalCard>

        </div>

      </LegalPageLayout>
    </WebsiteLayout>
  );
}