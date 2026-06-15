import LegalPageLayout from "../components/legal/LegalPageLayout";
import {
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import WebsiteLayout from "../components/layout/WebsiteLayout";

const locations = [
  {
    area: "Dubai Marina",
    service: "Same-Day Mobile Repair",
  },
  {
    area: "Business Bay",
    service: "Phone & Laptop Repair",
  },
  {
    area: "JLT",
    service: "Doorstep Technician Service",
  },
  {
    area: "Downtown Dubai",
    service: "Express Repairs",
  },
  {
    area: "Dubai Silicon Oasis",
    service: "Onsite Visits",
  },
];

export default function StoreLocatorPage() {
  return (
    <WebsiteLayout>
        <LegalPageLayout title="Service Areas">
        <div className="space-y-8">

            <div
            className="
            rounded-[24px]

            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]

            p-8

            text-white
            "
            >
            <h2 className="text-3xl font-black mb-4">
                Dubai Wide Coverage
            </h2>

            <p className="text-white/85">
                We provide same-day repair services
                across major areas of Dubai with
                doorstep technician visits.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location) => (
                <div
                key={location.area}
                className="
                rounded-[24px]

                border
                border-[#f0e5ee]

                p-6

                hover:border-[#b7004f]

                transition-all
                duration-300
                "
                >
                <div className="flex gap-3">
                    <MapPin
                    size={20}
                    className="text-[#b7004f]"
                    />

                    <div>
                    <h3 className="font-bold text-xl">
                        {location.area}
                    </h3>

                    <p className="text-[#5a4045] mt-2">
                        {location.service}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">

            <div className="glass-card p-8">
                <Clock
                size={24}
                className="text-[#b7004f] mb-4"
                />

                <h3 className="font-bold text-xl mb-2">
                Service Hours
                </h3>

                <p>Monday - Sunday</p>
                <p>9:00 AM - 9:00 PM</p>
            </div>

            <div className="glass-card p-8">
                <ShieldCheck
                size={24}
                className="text-[#b7004f] mb-4"
                />

                <h3 className="font-bold text-xl mb-2">
                Why Choose Us
                </h3>

                <p>
                Certified technicians,
                genuine-quality parts,
                same-day repairs and
                transparent pricing.
                </p>
            </div>

            </div>
        </div>
        </LegalPageLayout>
    </WebsiteLayout>
  );
}