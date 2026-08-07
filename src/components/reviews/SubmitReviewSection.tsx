import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Star,
  Send,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

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

  const [errorMessage, setErrorMessage] =
    useState("");

  const [publicationConsent, setPublicationConsent] =
    useState(false);

  const submitReview =
    async () => {
      if (
        !name.trim() ||
        !review.trim() ||
        !publicationConsent
      ) {
        setErrorMessage("Please enter your name and review, then confirm publication permission.");
        return;
      }

      try {
        setLoading(true);
        setErrorMessage("");
        setSubmitted(false);

        const { error } =
          await createReview(
            name.trim(),
            review.trim(),
            rating
          );

        if (error) {
          setErrorMessage("We could not submit your review. Please try again shortly.");
          return;
        }

        setSubmitted(true);

        setName("");
        setReview("");
        setRating(5);
        setPublicationConsent(false);
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* Glow */}

      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2

        w-full
        max-w-[500px]
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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void submitReview();
          }}
          className="
          glass-card

          rounded-[24px]
          sm:rounded-[36px]

          p-5
          sm:p-8
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
              text-3xl
              sm:text-4xl
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
              role="status"
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

          {errorMessage && (
            <p role="alert" className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
              {errorMessage}
            </p>
          )}

          {/* Rating */}

          <div className="mb-8">

            <p
              className="
              block
              font-bold
              text-lg
              mb-4
              "
            >
              Rating
            </p>

            <div className="flex gap-1 sm:gap-2" role="radiogroup" aria-label="Rating out of five stars">

              {[1, 2, 3, 4, 5].map(
                (star) => (
                  <button
                    key={star}
                    type="button"
                    role="radio"
                    aria-checked={rating === star}
                    aria-label={`${star} star${star === 1 ? "" : "s"}`}
                    onClick={() =>
                      setRating(star)
                    }
                    className="
                    transition-all
                    duration-300

                    hover:scale-110
                    rounded
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#b7004f]
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
              htmlFor="reviewer-name"
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
              id="reviewer-name"
              name="name"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                textIndent: 0,
              }}
              autoComplete="name"
              required
              maxLength={80}
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              placeholder="Enter your name"
              className="
              form-control
              w-full

              h-[60px]

              rounded-2xl

              border
              border-[#ece7ef]

              bg-white

              text-[16px]

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
              htmlFor="customer-review"
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
              id="customer-review"
              name="review"
              style={{
                padding: "16px 20px",
                textIndent: 0,
              }}
              required
              minLength={10}
              maxLength={1000}
              rows={6}
              value={review}
              onChange={(e) =>
                setReview(
                  e.target.value
                )
              }
              placeholder="Tell us about your experience..."
              className="
              form-control
              w-full

              rounded-2xl

              border
              border-[#ece7ef]

              bg-white

              text-[16px]

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

          <div className="mb-7 rounded-2xl border border-[#eadde5] bg-white/80 p-4">
            <label htmlFor="review-publication-consent" className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#5a4045]">
              <input
                id="review-publication-consent"
                type="checkbox"
                required
                checked={publicationConsent}
                onChange={(event) => setPublicationConsent(event.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-[#b7004f]"
              />
              <span>
                I authorise Azan Mobile Fix to publish my displayed name, rating and review after moderation. I understand that I can request removal through the <Link to="/contact" className="font-semibold text-[#b7004f] hover:underline">contact page</Link>. Please do not include passwords, payment information or sensitive device data. Read the <Link to="/privacy" className="font-semibold text-[#b7004f] hover:underline">Privacy Policy</Link>.
              </span>
            </label>
          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading || !publicationConsent}
            className="
            w-full
            sm:w-auto
            sm:min-w-[240px]

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
            <Send size={20} aria-hidden="true" />

            {loading
              ? "Submitting..."
              : "Submit Review"}
          </button>

        </form>
      </motion.div>
    </section>
  );
}
