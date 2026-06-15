import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryButton({
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
        md:min-w-[180px]
        
        px-7
        md:px-8

        rounded-full

        flex
        items-center
        justify-center
        gap-2

        text-[15px]
        md:text-[16px]

        font-semibold

        text-[#4a3540]

        bg-white/60
        backdrop-blur-xl

        border
        border-white/50

        shadow-lg
        shadow-black/5

        hover:bg-white/80
        hover:border-[#b7004f]/30

        hover:shadow-xl
        hover:shadow-[#b7004f]/10

        transition-all
        duration-300

        disabled:opacity-60
        disabled:pointer-events-none

        overflow-hidden

        ${className}
      `}
    >
      {/* Hover Glow */}
      <span
        className="
        absolute
        inset-0

        opacity-0

        bg-gradient-to-r
        from-[#b7004f]/5
        via-[#8138b2]/5
        to-[#b7004f]/5

        group-hover:opacity-100

        transition-opacity
        duration-500
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