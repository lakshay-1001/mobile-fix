import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import ReviewCard from "./ReviewCard";

import { getApprovedReviews } from "../../data/userReviewService";

interface Review {
  id: number;
  customer_name: string;
  review: string;
  rating: number;
}

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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ReviewsSection() {
  const [reviews, setReviews] =
    useState<Review[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
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
  };

  if (loading) {
    return (
      <div
        className="
        py-20

        text-center

        text-[#5a4045]
        "
      >
        Loading reviews...
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div
        className="
        glass-card

        rounded-[32px]

        p-14

        text-center
        "
      >
        <h3
          className="
          text-2xl
          font-bold
          mb-3
          "
        >
          No Reviews Yet
        </h3>

        <p className="text-[#5a4045]">
          Be the first customer to
          share your experience.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="
      grid

      md:grid-cols-2
      lg:grid-cols-3

      gap-8

      mt-20
      "
    >
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          variants={itemVariants}
        >
          <ReviewCard
            customer_name={
              review.customer_name
            }
            review={review.review}
            rating={review.rating}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}