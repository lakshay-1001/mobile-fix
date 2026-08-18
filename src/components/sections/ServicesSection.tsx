import { services } from "../../data/services";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../cards/ServiceCard";

export default function ServicesSection() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-16
      md:py-24
      bg-[linear-gradient(180deg,#fffafd_0%,#f7f4f7_48%,#ffffff_100%)]
    "
      id="services"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b7004f]/25 to-transparent" />
      <Container>
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          mb-10
          md:mb-14
        "
        >
          <SectionHeading
            title="Our Services"
            highlight="Ecosystem"
            description="Precision engineering meets rapid service."
          />

          <div className="mt-1 flex flex-wrap items-center gap-3 font-semibold text-[#b7004f] md:justify-end">
            <Link to="/services" className="rounded-full border border-[#b7004f]/20 bg-white px-5 py-3 shadow-sm transition-colors hover:bg-[#fff0f7]">View all services</Link>
            <a href="#faqs" className="rounded-full px-5 py-3 transition-colors hover:bg-white">Common questions</a>
          </div>
        </div>

        <div
          className="
          grid
          auto-rows-fr
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5
          lg:gap-6
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
