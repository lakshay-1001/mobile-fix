import { services } from "../../data/services";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../cards/ServiceCard";

export default function ServicesSection() {
  return (
    <section
      className="
      py-16
      md:py-24
      bg-gray-50
    "
      id="services"
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

          <div className="mt-4 flex flex-wrap gap-4 font-semibold text-[#b7004f]">
            <Link to="/services" className="hover:underline">View all repair services</Link>
            <a href="#faqs" className="hover:underline">Common repair questions</a>
          </div>
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-2
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
