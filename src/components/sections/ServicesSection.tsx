import { services } from "../../data/services";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../cards/ServiceCard";

export default function ServicesSection() {
  return (
    <section
      className="
      py-24
      bg-gray-50
    "
    >
      <Container>
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          mb-16
        "
        >
          <SectionHeading
            title="Our Repair"
            highlight="Ecosystem"
            description="Precision engineering meets rapid service."
          />

          <button
            className="
            text-[#b7004f]
            font-semibold
            mt-4
          "
          >
            View All Services
          </button>
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}