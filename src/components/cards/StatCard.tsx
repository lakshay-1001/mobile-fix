interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
      relative

      p-[1.5px]

      rounded-[24px]

      bg-gradient-to-r
      from-[#b7004f]
      via-[#d81b60]
      to-[#8138b2]

      hover:shadow-[0_0_30px_rgba(183,0,79,0.25)]

      transition-all
      duration-300

      hover:-translate-y-1
      "
    >
      <div
        className="
        h-full

        bg-white

        rounded-[22px]

        px-4
        py-7

        md:px-6
        md:py-8

        flex
        flex-col
        items-center
        justify-center

        text-center
        "
      >
        <p
          className="
          text-[32px]
          md:text-[42px]

          leading-none

          font-black

          bg-gradient-to-r
          from-[#b7004f]
          to-[#8138b2]

          bg-clip-text
          text-transparent
          "
        >
          {value}
        </p>

        <div
          className="
          w-10
          h-[2px]

          rounded-full

          bg-gradient-to-r
          from-[#b7004f]
          to-[#8138b2]

          mt-3
          mb-3
          "
        />

        <p
          className="
          text-[13px]
          md:text-[14px]

          font-medium

          text-gray-500

          leading-relaxed
          "
        >
          {label}
        </p>
      </div>
    </div>
  );
}
