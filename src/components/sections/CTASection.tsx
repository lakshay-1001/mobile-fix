import Container from "../common/Container";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
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
                text-[42px]
                leading-[46px]
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
                Join over 10,000 happy customers and get
                your device repaired by Dubai's trusted experts.
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
              <button
                className="
                min-w-[220px]

                h-[56px]

                rounded-full

                bg-white

                text-[#b7004f]
                font-semibold

                shadow-xl

                hover:scale-[1.03]
                transition-all
                duration-300
                "
              >
                Book Your Repair
              </button>

              <button
                className="
                min-w-[220px]

                h-[56px]

                rounded-full

                border-2
                border-white

                text-white
                font-semibold

                hover:bg-white
                hover:text-[#b7004f]

                transition-all
                duration-300
                "
              >
                Check Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}