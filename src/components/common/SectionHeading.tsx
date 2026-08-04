interface Props {
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  highlight,
  description,
  center = false,
}: Props) {
  return (
    <div
      className={
        center
          ? "text-center max-w-2xl mx-auto"
          : ""
      }
    >
      <h2
        className="
        text-[30px]
        leading-tight
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-extrabold
        tracking-tight
        mb-4
      "
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-[#b7004f] via-[#8138b2] to-[#b7004f] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
