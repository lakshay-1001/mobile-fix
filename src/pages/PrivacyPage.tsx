import { Cookie, Database, Eye, Globe2, Lock, Shield, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import LegalCard from "../components/legal/LegalCard";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import SEO from "../components/seo/SEO";
import {
  LEGAL_BUSINESS_NAME,
  SHOP_ADDRESS,
  SITE_NAME,
} from "../config/site";

export default function PrivacyPage() {
  return (
    <WebsiteLayout>
      <SEO
        title="Privacy Policy"
        description="Learn what information Azan Mobile Fix collects through inquiries, reviews and fix services, and how to make a privacy request."
        path="/privacy"
      />
      <LegalPageLayout title="Privacy Policy">
        <p className="mb-8 text-sm font-semibold text-[#6f5963]">Last updated: 3 August 2026</p>

        <div className="space-y-6">
          <LegalCard title="Who Is Responsible" icon={<Shield size={22} />}>
            <p>{SITE_NAME} is operated by {LEGAL_BUSINESS_NAME}, which is responsible for the personal information described in this policy.</p>
            <address className="not-italic">Shop address: {SHOP_ADDRESS}</address>
            <p>Privacy requests can be submitted through our <Link to="/contact" className="font-semibold text-[#b7004f] hover:underline">contact form</Link> by choosing “Privacy request”.</p>
          </LegalCard>

          <LegalCard title="Information We Collect" icon={<Database size={22} />}>
            <ul className="list-disc space-y-2 pl-5">
              <li>Contact inquiries: name, email address, optional phone number, device/model, inquiry type and message.</li>
              <li>Customer reviews: displayed name, rating, review text, moderation status and submission date.</li>
              <li>Fix interactions: contact details, device details, reported fault, quotation, fix history, parts, warranty and invoice information where applicable.</li>
              <li>Technical information created by our hosting, security and communications providers, such as timestamps, IP address and basic request information.</li>
            </ul>
            <p>Please do not submit device passwords, payment-card details, sensitive files or unrelated personal information through website forms.</p>
          </LegalCard>

          <LegalCard title="Why We Use Information" icon={<Eye size={22} />}>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and take steps requested before a fix.</li>
              <li>Prepare quotations, provide fix updates and manage warranties or complaints.</li>
              <li>Moderate and, where authorised, publish customer reviews.</li>
              <li>Protect the website and forms from misuse and maintain business records required by law.</li>
            </ul>
            <p>We do not use inquiry details for promotional marketing unless separate permission is obtained.</p>
          </LegalCard>

          <LegalCard title="Service Providers" icon={<Globe2 size={22} />}>
            <p>When the contact form is enabled, messages are transmitted through EmailJS and the connected email provider. Public reviews and administrator authentication use Supabase. Website hosting and security providers may also process limited technical information.</p>
            <p>These providers may process information outside the UAE. We assess provider terms and use appropriate contractual or other safeguards where required. Each provider may also publish its own privacy information.</p>
            <p>The website currently does not accept online payments and does not intentionally load advertising or analytics trackers.</p>
          </LegalCard>

          <LegalCard title="Retention and Security" icon={<Lock size={22} />}>
            <p>Information is retained only for as long as reasonably needed for the inquiry, fix, warranty, dispute, legal or accounting purpose for which it was collected. Different records may have different legally required retention periods.</p>
            <p>We use access controls, HTTPS, account protection, moderation and service-provider safeguards. No internet transmission or storage system can be guaranteed completely secure.</p>
          </LegalCard>

          <LegalCard title="Your Choices and Rights" icon={<UserCheck size={22} />}>
            <p>Subject to applicable UAE law, you may ask for access, correction, deletion, restriction, transfer where applicable, or withdrawal of consent. You may also object to direct marketing and submit a complaint.</p>
            <p>Use the <Link to="/contact" className="font-semibold text-[#b7004f] hover:underline">contact page</Link> and select “Privacy request”. We may need to verify identity before acting on a request.</p>
          </LegalCard>

          <LegalCard title="Cookies and Browser Storage" icon={<Cookie size={22} />}>
            <p>The public website does not currently use advertising or analytics cookies. Supabase authentication may use browser storage for authorised administrator sessions. If non-essential analytics or marketing technology is introduced, this policy and the consent controls will be updated before it is enabled.</p>
          </LegalCard>

          <LegalCard title="Children and Policy Changes" icon={<Shield size={22} />}>
            <p>The website is intended for people arranging legitimate device services and is not directed to children. A parent or guardian should contact us where a minor requires assistance.</p>
            <p>We may update this policy when our services or providers change. The latest revision date will always appear at the top of this page.</p>
          </LegalCard>
        </div>
      </LegalPageLayout>
    </WebsiteLayout>
  );
}
