import { stats } from "../../data/stats";
import Container from "../common/Container";
import StatCard from "../cards/StatCard";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4

          gap-4
          md:gap-6
          "
        >
          {stats.map((item) => (
            <StatCard
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}