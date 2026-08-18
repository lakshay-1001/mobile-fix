import { useEffect, useMemo, useState } from "react";

import { useCallback } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { Star } from "lucide-react";

import { getApprovedReviews } from "../../data/userReviewService";

interface Review {
  id: number;
  customer_name: string;
  review: string;
  rating: number;
}

export default function TestimonialSection() {
  const [reviews, setReviews] =
    useState<Review[]>([]);

  const [loading, setLoading] =
    useState(true);

  const loadReviews = useCallback(async () => {
    try {
      const { data, error } =
        await getApprovedReviews();

      if (error) {
        console.error(error);
        return;
      }

      setReviews(data || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadReviews();
  }, [loadReviews]);

  const averageRating =
    useMemo(() => {
      if (!reviews.length) return 0;

      const total =
        reviews.reduce(
          (sum, review) =>
            sum + review.rating,
          0
        );

      return (
        total / reviews.length
      ).toFixed(1);
    }, [reviews]);

  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <Container>

        <div
          className="
          grid
          gap-10

          xl:grid-cols-[0.95fr_1.05fr]

          items-center
          "
        >
          {/* Left Side */}

          <div className="space-y-6">

            <SectionHeading
              title="Customer"
              highlight="Reviews"
              description="Read reviews submitted by customers and approved before publication."
            />

            <p
              className="
              text-gray-500
              text-base
              md:text-lg
              max-w-2xl
              "
            >
              Reviews reflect individual customer experiences. Approval means a review passed moderation; it does not by itself verify a purchase.
            </p>

            <div
              className="
              grid
              gap-4

              sm:grid-cols-2
              "
            >
              <div
                className="
                glass-card

                p-6

                border
                border-white/60

                shadow-sm
                "
              >
                <p
                  className="
                  text-sm
                  text-gray-500
                  mb-3
                  "
                >
                  Total Reviews
                </p>

                <h3
                  className="
                  text-3xl
                  font-black
                  text-[#b7004f]
                  "
                >
                  {reviews.length}
                </h3>

                <p
                  className="
                  text-gray-500
                  mt-2
                  "
                >
                  Approved customer reviews.
                </p>
              </div>

              <div
                className="
                glass-card

                p-6

                border
                border-white/60

                shadow-sm
                "
              >
                <p
                  className="
                  text-sm
                  text-gray-500
                  mb-3
                  "
                >
                  Average Rating
                </p>

                <h3
                  className="
                  text-3xl
                  font-black
                  text-[#8138b2]
                  "
                >
                  {averageRating || "0.0"}/5
                </h3>

                <p
                  className="
                  text-gray-500
                  mt-2
                  "
                >
                  Based on customer feedback.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="grid gap-6">

            {loading && (
              <div
                className="
                glass-card

                p-8

                border
                border-white/60

                shadow-xl
                "
              >
                Loading reviews...
              </div>
            )}

            {!loading &&
              reviews.length === 0 && (
                <div
                  className="
                  glass-card

                  p-8

                  border
                  border-white/60

                  shadow-xl
                  "
                >
                  <h3
                    className="
                    text-xl
                    font-bold
                    mb-2
                    "
                  >
                    No Reviews Yet
                  </h3>

                  <p className="text-gray-500">
                    Be the first customer
                    to leave a review.
                  </p>
                </div>
              )}

            {!loading &&
              reviews.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="
                  glass-card

                  p-8

                  border
                  border-white/60

                  shadow-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-2xl
                  "
                >
                  <div
                    className="
                    flex
                    items-center
                    justify-between

                    mb-4
                    "
                  >
                    <div>
                      <p
                        className="
                        font-bold
                        text-lg
                        "
                      >
                        {item.customer_name}
                      </p>

                      <p
                        className="
                        text-sm
                        text-[#5a4045]
                        "
                      >
                        Published customer review
                      </p>
                    </div>

                    <div
                      className="
                      inline-flex
                      items-center
                      gap-1

                      rounded-full

                      bg-[#f5e8f2]

                      px-3
                      py-1

                      text-[#b7004f]
                      text-sm
                      "
                    >
                      {Array.from({
                        length:
                          Math.max(0, Math.min(5, item.rating)),
                      }).map(
                        (_, index) => (
                          <Star
                            key={index}
                            size={14}
                            fill="currentColor"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <p
                    className="
                    text-gray-600

                    leading-relaxed
                    "
                  >
                    {item.review}
                  </p>
                </div>
              ))}

          </div>

        </div>

      </Container>
    </section>
  );
}
