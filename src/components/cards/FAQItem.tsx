import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="
        bg-white

        rounded-[30px]

        border
        border-[#eeeeee]

        shadow-[0_10px_25px_rgba(0,0,0,0.05)]

        overflow-hidden
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full

          flex
          items-center
          justify-between

          pl-10
          pr-5

          md:pl-12
          md:pr-6

          py-7

          text-left
        "
      >
        <span
          className="

            text-[20px]
            md:text-[22px]

            font-bold

            text-[#222]

            leading-8
            ml-8
          "
        >
          {question}
        </span>

        <div
          className="
            flex-shrink-0

            w-[52px]
            h-[52px]

            rounded-full

            bg-[#f4f4f4]

            flex
            items-center
            justify-center

            text-[#666]

            transition-all
            duration-300
          "
        >
          {open ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div
              className="
                px-6
                md:px-8

                pb-8
                md:pb-10
              "
            >
              {/* Divider */}

              <div
                className="
                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-[#b7004f]/15
                  to-transparent

                  mb-6
                "
              />

              <p
                className="
                  text-[15px]
                  md:text-[16px]

                  leading-8

                  text-[#666]

                  max-w-[90%]
                "
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}