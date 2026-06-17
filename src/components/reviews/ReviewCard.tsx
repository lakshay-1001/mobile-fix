import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Props {
  customer_name: string;
  review: string;
  rating: number;
}

export default function ReviewCard({
  customer_name,
  review,
  rating,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      relative

      glass-card

      rounded-[28px]

      p-8

      overflow-hidden

      group
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        top-0
        right-0

        w-32
        h-32

        rounded-full

        bg-[#b7004f]/10

        blur-3xl

        group-hover:bg-[#8138b2]/15

        transition-all
        duration-500
        "
      />

      {/* Avatar */}

      <div
        className="
        w-14
        h-14

        rounded-full

        bg-gradient-to-r
        from-[#b7004f]
        to-[#8138b2]

        text-white

        font-bold
        text-xl

        flex
        items-center
        justify-center

        mb-5
        "
      >
        {customer_name.charAt(0)}
      </div>

      {/* Name */}

      <h4
        className="
        text-xl
        font-bold

        mb-3
        "
      >
        {customer_name}
      </h4>

      {/* Rating */}

      <div
        className="
        flex
        gap-1

        mb-4
        "
      >
        {Array.from({
          length: rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="#f59e0b"
            className="text-[#f59e0b]"
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
        text-[#5a4045]

        leading-8
        "
      >
        {review}
      </p>
    </motion.div>
  );
}