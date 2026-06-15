import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Variants } from "framer-motion";

import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import GradientText from "../common/GradientText";

import heroImage from "../../assets/images/hero.png";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-screen
      lg:min-h-[921px]
      flex
      items-center
      pt-20
      "
    >
      {/* Background */}
      <div className="absolute inset-0">

        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          src={heroImage}
          alt="Hero"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#f9f9f9]
          via-[#f9f9f9]/60
          via-35%
          to-transparent
          "
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-10
          right-[-100px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#b7004f]/20
          blur-[140px]
          "
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          bottom-[-120px]
          left-[-120px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#8138b2]/15
          blur-[120px]
          "
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
        relative
        z-10
        max-w-[1400px]
        mx-auto
        w-full
        px-6
        md:px-10
        "
      >
        <div className="max-w-[980px]">

          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center justify-center h-[40px] md:h-[48px] px-4 md:px-8 px-6 md:px-8
              rounded-full bg-gradient-to-r from-[#d81b60] via-[#c2185b] to-[#e91e63] text-white
              text-[12px] md:text-[12px] uppercase tracking-[2.5px] font-bold shadow-[0_10px_30px_rgba(216,27,96,0.30)]
              mb-8 md:mb-10
              "
            >
              PREMIUM REPAIR SERVICE
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="
            font-black
            text-[52px]
            leading-[56px]

            sm:text-[64px]
            sm:leading-[68px]

            lg:text-[84px]
            lg:leading-[88px]

            tracking-[-0.04em]
            mb-12
            md:mb-8
            "
          >
            Expert Device Service
            <br />

            <span className="block">
              at
            </span>

            <GradientText className="block">
              Your Door — Same Day
            </GradientText>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="
            text-[17px]
            md:text-[18px]
            font-bold
            leading-[30px]
            md:leading-[32px]
            text-[#5a4045]
            max-w-[520px]
            mt-0
            pt-8
            "
          >
            Experience lightning-fast smartphone
            and laptop repairs in Dubai.
            From cracked screens to battery failures,
            our certified technicians come directly
            to you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
            "
          >
            <PrimaryButton>
              <Phone size={20} />
              Call Now
            </PrimaryButton>

            <SecondaryButton>
              <MessageCircle size={20} />
              WhatsApp Us
            </SecondaryButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}