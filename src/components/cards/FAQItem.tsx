import { useState } from "react";
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
  const answerId = `faq-answer-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div
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
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="
          w-full

          flex
          items-center
          justify-between

          px-5

          md:px-8

          py-5
          md:py-6

          text-left
        "
      >
        <span
          className="

            text-[17px]
            md:text-[22px]

            font-bold

            text-[#222]

            leading-8
          "
        >
          {question}
        </span>

        <div
          className="
            flex-shrink-0

            w-[44px]
            h-[44px]

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

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
            <div
              id={answerId}
              role="region"
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

                  max-w-none
                "
              >
                {answer}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
