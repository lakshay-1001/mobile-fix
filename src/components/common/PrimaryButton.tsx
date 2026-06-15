import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: Props) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        relative

        h-[54px]
        md:h-[60px]

        min-w-[120px]
        md:min-w-[140px]

        px-8
        md:px-10

        rounded-full

        flex
        items-center
        justify-center
        gap-2

        text-[15px]
        md:text-[16px]

        font-semibold
        text-white

        bg-gradient-to-r
        from-[#b7004f]
        via-[#c21467]
        to-[#8138b2]

        bg-[length:200%_100%]

        shadow-lg
        shadow-[#b7004f]/25

        hover:shadow-xl
        hover:shadow-[#b7004f]/35

        disabled:opacity-60
        disabled:pointer-events-none

        overflow-hidden
        transition-all
        duration-300

        ${className}
      `}
    >
      {/* Shine Effect */}
      <span
        className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent

        group-hover:translate-x-full

        transition-transform
        duration-1000
        "
      />

      <span
        className="
        relative
        z-10

        flex
        items-center
        gap-2
        "
      >
        {children}
      </span>
    </motion.button>
  );
}