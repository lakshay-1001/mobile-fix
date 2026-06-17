import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Star,
  Send,
  CheckCircle,
} from "lucide-react";

import { createReview } from "../../data/userReviewService";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SubmitReviewSection() {
  const [name, setName] =
    useState("");

  const [review, setReview] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const submitReview =
    async () => {
      if (
        !name.trim() ||
        !review.trim()
      ) {
        alert(
          "Please fill all fields"
        );
        return;
      }

      try {
        setLoading(true);

        const { error } =
          await createReview(
            name,
            review,
            rating
          );

        if (error) {
          alert(error.message);
          return;
        }

        setSubmitted(true);

        setName("");
        setReview("");
        setRating(5);
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Glow */}

      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2

        w-[500px]
        h-[500px]

        rounded-full

        bg-[#b7004f]/10

        blur-[160px]

        pointer-events-none
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="
        relative
        z-10

        max-w-[950px]
        mx-auto
        px-5
        "
      >
        <div
          className="
          glass-card

          rounded-[36px]

          p-8
          md:p-12

          shadow-xl

          overflow-hidden
          "
        >

          {/* Header */}

          <div className="text-center mb-12">

            <span
              className="
              inline-flex
              items-center
              justify-center

              px-6
              py-3

              rounded-full

              bg-gradient-to-r
              from-[#d81b60]
              to-[#8138b2]

              text-white

              text-xs
              font-bold

              tracking-[2px]
              uppercase

              mb-6
              "
            >
              Customer Feedback
            </span>

            <h2
              className="
              text-4xl
              md:text-6xl

              font-black

              tracking-tight

              mb-5
              "
            >
              Share Your Experience
            </h2>

            <p
              className="
              max-w-[650px]

              mx-auto

              text-center

              text-[#5a4045]

              text-lg

              leading-8
              "
            >
              Your review helps us improve
              and helps other customers
              choose our repair services.
            </p>

          </div>

          {/* Success */}

          {submitted && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
              mb-8

              p-5

              rounded-2xl

              bg-green-50

              border
              border-green-200

              flex
              items-center
              gap-3
              "
            >
              <CheckCircle
                size={22}
                className="text-green-600"
              />

              <div>
                <p className="font-semibold">
                  Review Submitted
                </p>

                <p className="text-sm text-gray-600">
                  It will appear after
                  admin approval.
                </p>
              </div>
            </motion.div>
          )}

          {/* Rating */}

          <div className="mb-8">

            <label
              className="
              block
              font-bold
              text-lg
              mb-4
              "
            >
              Rating
            </label>

            <div className="flex gap-2">

              {[1, 2, 3, 4, 5].map(
                (star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setRating(star)
                    }
                    className="
                    transition-all
                    duration-300

                    hover:scale-110
                    "
                  >
                    <Star
                      size={36}
                      fill={
                        star <= rating
                          ? "#f59e0b"
                          : "transparent"
                      }
                      className={
                        star <= rating
                          ? "text-[#f59e0b]"
                          : "text-gray-300"
                      }
                    />
                  </button>
                )
              )}

            </div>

          </div>

          {/* Name */}

          <div className="mb-8">

            <label
              className="
              block

              font-bold
              text-lg

              mb-4
              "
            >
              Your Name
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              placeholder="  Enter your name"
              className="
              w-full

              h-[60px]

              rounded-2xl

              border
              border-[#ece7ef]

              bg-white

              text-[16px]

              px-6

              placeholder:text-gray-400

              focus:outline-none
              focus:border-[#b7004f]
              focus:ring-4
              focus:ring-[#b7004f]/10

              transition-all
              "
            />

          </div>

          {/* Review */}

          <div className="mb-8">

            <label
              className="
              block

              font-bold
              text-lg

              mb-4
              "
            >
              Review
            </label>

            <textarea
              rows={6}
              value={review}
              onChange={(e) =>
                setReview(
                  e.target.value
                )
              }
              placeholder="  Tell us about your experience..."
              className="
              w-full

              rounded-2xl

              border
              border-[#ece7ef]

              bg-white

              text-[16px]

              px-6
              py-5

              placeholder:text-gray-400

              resize-none

              focus:outline-none
              focus:border-[#b7004f]
              focus:ring-4
              focus:ring-[#b7004f]/10

              transition-all
              "
            />

          </div>

          {/* Button */}

          <button
            onClick={submitReview}
            disabled={loading}
            className="
            min-w-[240px]

            h-[60px]

            px-10

            rounded-2xl

            flex
            items-center
            justify-center
            gap-3

            font-semibold
            text-lg

            text-white

            bg-gradient-to-r
            from-[#b7004f]
            via-[#c2185b]
            to-[#8138b2]

            shadow-lg
            shadow-[#b7004f]/20

            hover:shadow-xl
            hover:shadow-[#b7004f]/30
            hover:-translate-y-0.5

            disabled:opacity-50

            transition-all
            duration-300
            "
          >
            <Send size={20} />

            {loading
              ? "Submitting..."
              : "Submit Review"}
          </button>

        </div>
      </motion.div>
    </section>
  );
}