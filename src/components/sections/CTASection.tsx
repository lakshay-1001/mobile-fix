import Container from "../common/Container";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppUrl, HAS_CONTACT_PHONE, HAS_WHATSAPP, PHONE_LINK } from "../../config/site";
import { trackEvent } from "../../config/analytics";

export default function CTASection() {
  return (
    <section className="py-14 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            md:rounded-[40px]

            bg-gradient-to-r
            from-[#b7004f]
            via-[#c2185b]
            to-[#8138b2]

            px-6
            py-14

            md:px-16
            md:py-20

            text-center
          "
        >
          {/* Glow */}
          <div
            className="
            absolute
            -top-24
            -right-24

            h-[250px]
            w-[250px]

            rounded-full
            bg-white/10
            blur-[100px]
          "
          />

          <div
            className="
            absolute
            -bottom-24
            -left-24

            h-[250px]
            w-[250px]

            rounded-full
            bg-white/10
            blur-[100px]
          "
          />

          <div className="relative z-10">
            <div className="relative z-10 flex flex-col items-center mb-2 md:mb-4">
              <h2
                className="
                text-white
                font-black
                text-[34px]
                leading-[40px]
                sm:text-[42px]
                sm:leading-[46px]
                md:text-[64px]
                md:leading-[68px]
                tracking-[-0.03em]
                "
              >
                Ready to Restore
                <br />
                Your Device?
              </h2>
            </div>

            <div
              className="
              relative
              z-10

              flex
              flex-col
              items-center
              mb-4
              md:mb-6
              "
            >
              <p
                className="
                max-w-[700px]
                mx-auto

                text-white/85

                text-lg

                mb-10
                "
              >
                Don't let a broken screen slow you down.
                Tell us about the fault and receive clear information about
                availability, the quotation and the repair process.
              </p>
            </div>

            <div
              className="
              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-4
              "
            >
              <a
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    location: "CTA_section",
                  })
                }
                href={getWhatsAppUrl()}
                target={HAS_WHATSAPP ? "_blank" : undefined}
                rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
                className="
                inline-flex
                items-center
                justify-center
                w-full
                sm:w-auto
                sm:min-w-[220px]

                h-[56px]

                rounded-full

                bg-white

                text-[#b7004f]
                font-semibold

                shadow-xl

                hover:scale-[1.09]
                transition-all
                duration-300
                "
              >
                <MessageCircle className="mr-2 inline" size={19} aria-hidden="true" />
                {HAS_WHATSAPP ? "Get a WhatsApp Quote" : "Send a Repair Inquiry"}
              </a>

              <a
                onClick={() =>
                  trackEvent("phone_click", {
                    location: "CTA_section",
                  })
                }
                href={PHONE_LINK}
                className="
                inline-flex
                items-center
                justify-center
                w-full
                sm:w-auto
                sm:min-w-[220px]

                h-[56px]

                rounded-full

                border-2
                border-white

                text-white
                font-semibold

                hover:bg-white
                hover:text-[#b7004f]
                hover:scale-[1.09]
                transition-all
                duration-300
                "
              >
                <Phone className="mr-2 inline" size={19} aria-hidden="true" />
                {HAS_CONTACT_PHONE ? "Call for Pricing" : "Calling Unavailable"}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
