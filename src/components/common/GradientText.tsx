import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: Props) {
  return (
    <span
      className={`
        relative
        inline-block

        bg-[linear-gradient(135deg,#b7004f_0%,#da2a67_25%,#8138b2_50%,#b7004f_75%,#da2a67_100%)]

        bg-[length:300%_100%]

        bg-clip-text
        text-transparent

        animate-gradient

        drop-shadow-[0_0_20px_rgba(183,0,79,0.15)]

        ${className}
      `}
    >
      {children}
    </span>
  );
}