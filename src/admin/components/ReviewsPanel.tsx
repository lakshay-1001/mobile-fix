import { useEffect, useState } from "react";
import {
  CheckCircle,
  Trash2,
  XCircle,
  Star,
} from "lucide-react";

import {
  Review,
  getReviews,
  approveReview,
  deleteReview,
} from "../../data/reviewService";

export default function ReviewsPanel() {
  const [reviews, setReviews] =
    useState<Review[]>([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const { data, error } =
      await getReviews();

    if (error) {
      console.error(error);
      return;
    }

    setReviews(data || []);
  };

  const toggleReview = async (
    id: number,
    approved: boolean
  ) => {
    await approveReview(
      id,
      !approved
    );

    loadReviews();
  };

  const removeReview = async (
    id: number
  ) => {
    const confirmed =
      window.confirm(
        "Delete review?"
      );

    if (!confirmed) return;

    await deleteReview(id);

    loadReviews();
  };

  return (
    <div>

      <div className="mb-8">
        <h2 className="text-3xl font-black">
          Reviews
        </h2>

        <p className="text-gray-500 mt-1">
          Manage customer reviews
        </p>
      </div>

      <div className="space-y-4">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="
            bg-white
            rounded-3xl
            shadow-sm
            p-6
            "
          >
            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-bold text-lg">
                  {review.customer_name}
                </h3>

                <div className="flex gap-1 mt-2 mb-4">

                  {Array.from({
                    length:
                      review.rating,
                  }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="
                        fill-[#b7004f]
                        text-[#b7004f]
                        "
                      />
                    )
                  )}

                </div>

                <p className="text-gray-600">
                  {review.review}
                </p>

              </div>

              <span
                className={`
                px-3
                py-1

                rounded-full

                text-xs
                font-semibold

                ${
                  review.approved
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }
                `}
              >
                {review.approved
                  ? "Approved"
                  : "Hidden"}
              </span>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  toggleReview(
                    review.id,
                    review.approved
                  )
                }
                className={`
                h-10
                px-4

                rounded-xl

                flex
                items-center
                gap-2

                ${
                  review.approved
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }
                `}
              >
                {review.approved ? (
                  <>
                    <XCircle size={16} />
                    Hide
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} />
                    Approve
                  </>
                )}
              </button>

              <button
                onClick={() =>
                  removeReview(
                    review.id
                  )
                }
                className="
                h-10
                px-4

                rounded-xl

                flex
                items-center
                gap-2

                bg-red-100
                text-red-600
                "
              >
                <Trash2 size={16} />
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}