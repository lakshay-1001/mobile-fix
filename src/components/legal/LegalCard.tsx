import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function LegalCard({
  title,
  icon,
  children,
}: Props) {
  return (
    <div
      className="
      group

      rounded-[28px]

      border
      border-[#f1e6ef]

      bg-white

      p-6
      md:p-8

      shadow-[0_10px_30px_rgba(0,0,0,0.04)]

      hover:shadow-[0_20px_40px_rgba(183,0,79,0.08)]
      hover:border-[#b7004f]/15

      transition-all
      duration-300
      "
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className="
          h-12
          w-12

          rounded-2xl

          bg-[#f8e8f2]

          flex
          items-center
          justify-center

          text-[#b7004f]

          shrink-0
          "
        >
          {icon}
        </div>

        <h2
          className="
          text-[22px]
          md:text-[24px]

          font-bold

          text-[#b7004f]

          leading-tight
          "
        >
          {title}
        </h2>
      </div>

      <div
        className="
        text-[#5a4045]

        leading-8

        space-y-4
        "
      >
        {children}
      </div>
    </div>
  );
}