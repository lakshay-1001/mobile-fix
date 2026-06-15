import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      w-full
      max-w-[1440px]
      mx-auto
      px-4
      sm:px-6
      md:px-10
      lg:px-14
      xl:px-16
      ${className}
    `}
    >
      {children}
    </div>
  );
}
