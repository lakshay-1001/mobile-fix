import { motion, type Variants } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import GradientText from "../common/GradientText";
import { getWhatsAppUrl, HAS_CONTACT_PHONE, HAS_WHATSAPP, PHONE_LINK } from "../../config/site";
import heroImage from "../../assets/images/hero.png";
import { trackEvent } from "../../config/analytics";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-100px)] items-center overflow-hidden py-14 sm:py-20 lg:min-h-[760px]">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Mobile phone opened for professional repair in Dubai"
          width="512"
          height="512"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/30 sm:bg-gradient-to-r sm:from-[#f9f9f9] sm:via-[#f9f9f9]/20 sm:via-55% sm:to-[#f9f9f9]/15" />
        <div className="absolute right-[-100px] top-10 h-[420px] w-[420px] rounded-full bg-[#b7004f]/15 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-10"
      >
        <div className="max-w-[900px]">
          <motion.p
            variants={itemVariants}
            className="mb-7 inline-flex min-h-10 items-center justify-center rounded-full bg-gradient-to-r from-[#d81b60] to-[#8138b2] px-5 text-[11px] font-bold uppercase tracking-[2px] text-white shadow-lg sm:px-7 sm:text-xs"
          >
            Doorstep repair across Dubai
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-[40px] font-black leading-[44px] tracking-[-0.04em] text-[#171217] sm:text-[58px] sm:leading-[62px] lg:text-[76px] lg:leading-[80px]"
          >
            Mobile Phone Repair
            <span className="block">in Dubai</span>
            <GradientText className="block">At Your Door</GradientText>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-[570px] text-[16px] font-medium leading-7 text-[#4f3b44] sm:text-lg sm:leading-8">
            Get convenient smartphone, tablet and laptop repairs at your home or office.
            From cracked screens to battery problems, our technicians serve customers across Dubai.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a 
            onClick={() =>
              trackEvent("phone_click", {
                location: "hero_section",
              })
            }
            href={PHONE_LINK} className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b7004f] to-[#8138b2] px-8 font-semibold text-white shadow-lg shadow-[#b7004f]/25 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">
              <Phone size={20} aria-hidden="true" /> {HAS_CONTACT_PHONE ? "Call Now" : "Call Unavailable"}
            </a>
            <a 
              onClick={() =>
                trackEvent("whatsapp_click", {
                  location: "hero_section",
                })
              }
              href={getWhatsAppUrl()} target={HAS_WHATSAPP ? "_blank" : undefined} rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined} className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-[#b7004f]/30 bg-white/90 px-8 font-semibold text-[#4a3540] shadow-lg shadow-black/5 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">
              <MessageCircle size={20} aria-hidden="true" /> {HAS_WHATSAPP ? "WhatsApp Us" : "Send Inquiry"}
            </a>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-5 text-sm font-semibold text-[#5a4045]">
            Doorstep service <span aria-hidden="true">•</span> Open 7 days <span aria-hidden="true">•</span> Repair warranty
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
