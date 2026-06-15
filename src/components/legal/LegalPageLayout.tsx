import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  children,
}: Props) {
  return (
    <div
      className="
      relative
      min-h-screen

      bg-gradient-to-b
      from-[#faf5fb]
      via-[#fffafd]
      to-white

      overflow-hidden
      "
    >
      {/* Premium Background Glows */}

      <div
        className="
        fixed
        top-[-150px]
        right-[-150px]

        w-[700px]
        h-[700px]

        rounded-full

        bg-[#b7004f]/10

        blur-[180px]

        pointer-events-none
        "
      />

      <div
        className="
        fixed
        bottom-[-150px]
        left-[-150px]

        w-[650px]
        h-[650px]

        rounded-full

        bg-[#8138b2]/10

        blur-[180px]

        pointer-events-none
        "
      />

      {/* Decorative Grid */}

      <div
        className="
        absolute
        inset-0

        opacity-[0.03]

        bg-[linear-gradient(to_right,#b7004f_1px,transparent_1px),linear-gradient(to_bottom,#b7004f_1px,transparent_1px)]
        bg-[size:60px_60px]

        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10

        max-w-[1400px]
        mx-auto

        px-5
        md:px-8
        lg:px-10

        pt-8
        md:pt-12

        pb-20
        md:pb-28
        "
      >
        {/* Hero Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
          text-center

          max-w-[900px]
          mx-auto

          mb-12
          md:mb-16
          "
        >
          <div
            className="
            inline-flex

            items-center

            px-5
            py-2.5

            rounded-full

            bg-white/80

            border
            border-[#f0dce8]

            backdrop-blur-xl

            text-[#b7004f]
            text-sm

            font-semibold

            shadow-sm

            mb-6
            "
          >
            AZAN Mobile Fix
          </div>

          <h1
            className="
            font-black

            text-[42px]
            leading-[48px]

            sm:text-[56px]
            sm:leading-[62px]

            lg:text-[72px]
            lg:leading-[78px]

            tracking-[-0.04em]

            text-[#111111]

            mb-6
            "
          >
            {title}
          </h1>

          <p
            className="
            max-w-[720px]
            mx-auto

            text-[#5a4045]

            text-base
            md:text-xl

            leading-8
            "
          >
            Important information regarding
            our repair services, customer
            protection policies, warranty
            coverage and support commitments.
          </p>
        </motion.div>

        {/* Main Content Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
          relative

          rounded-[40px]

          bg-white/92

          backdrop-blur-2xl

          border
          border-white/80

          shadow-[0_40px_120px_rgba(0,0,0,0.08)]

          overflow-hidden
          "
        >
          {/* Top Accent Line */}

          <div
            className="
            h-[5px]

            bg-gradient-to-r
            from-[#b7004f]
            via-[#c2185b]
            to-[#8138b2]
            "
          />

          {/* Content */}

          <div
            className="
            px-6
            py-8

            md:px-14
            md:py-14

            lg:px-16

            space-y-8
            "
          >
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}