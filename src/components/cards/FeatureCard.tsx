import * as Icons from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  const LucideIcon =
    Icons[
      icon as keyof typeof Icons
    ] as React.ElementType;

  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      border
      border-white
      hover:shadow-lg
      transition-all
      duration-300
    "
    >
      <div
        className="
        h-12
        w-12
        rounded-xl
        bg-pink-100
        text-[#b7004f]
        flex
        items-center
        justify-center
        mb-4
      "
      >
        <LucideIcon size={22} />
      </div>

      <h4
        className="
        font-bold
        mb-2
      "
      >
        {title}
      </h4>

      <p
        className="
        text-sm
        text-gray-500
      "
      >
        {description}
      </p>
    </div>
  );
}