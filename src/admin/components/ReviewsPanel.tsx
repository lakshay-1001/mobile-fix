import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle,
  Trash2,
  XCircle,
  Star,
  MessageSquare,
} from "lucide-react";

import {
  Review,
  getReviews,
  approveReview,
  deleteReview,
} from "../../data/reviewService";

type ReviewTab =
  | "all"
  | "pending"
  | "approved"
  | "yesterday";

export default function ReviewsPanel() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState<ReviewTab>("all");

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      setLoading(true);

      const { data, error } =
        await getReviews();

      if (error) {
        console.error(error);
        return;
      }

      setReviews(data || []);
    } finally {
      setLoading(false);
    }
  };

  const toggleReview = async (
    id: number,
    approved: boolean
  ) => {
    await approveReview(
      id,
      !approved
    );

    await loadReviews();
  };

  const removeReview = async (
    id: number
  ) => {
    const confirmed =
      window.confirm(
        "Delete this review?"
      );

    if (!confirmed) return;

    await deleteReview(id);

    await loadReviews();
  };

  const yesterdayReviews =
    useMemo(() => {
      const yesterday =
        new Date();

      yesterday.setDate(
        yesterday.getDate() - 1
      );

      return reviews.filter(
        (review) => {
          const reviewDate =
            new Date(
              review.created_at
            );

          return (
            reviewDate.getDate() ===
              yesterday.getDate() &&
            reviewDate.getMonth() ===
              yesterday.getMonth() &&
            reviewDate.getFullYear() ===
              yesterday.getFullYear()
          );
        }
      );
    }, [reviews]);

  const filteredReviews =
    useMemo(() => {
      switch (activeTab) {
        case "approved":
          return reviews.filter(
            (review) =>
              review.approved
          );

        case "pending":
          return reviews.filter(
            (review) =>
              !review.approved
          );

        case "yesterday":
          return yesterdayReviews;

        default:
          return reviews;
      }
    }, [
      reviews,
      activeTab,
      yesterdayReviews,
    ]);

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h2
          className="
          text-4xl
          font-black
          tracking-tight
          "
        >
          Reviews
        </h2>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Manage customer reviews
          and approvals.
        </p>
      </div>

      {/* Tabs */}

      <div
        className="
        flex
        flex-wrap
        gap-6
        "
      >
        <TabButton
          title={`All (${reviews.length})`}
          active={
            activeTab === "all"
          }
          onClick={() =>
            setActiveTab("all")
          }
        />

        <TabButton
          title={`Pending (${
            reviews.filter(
              (r) => !r.approved
            ).length
          })`}
          active={
            activeTab ===
            "pending"
          }
          onClick={() =>
            setActiveTab(
              "pending"
            )
          }
        />

        <TabButton
          title={`Approved (${
            reviews.filter(
              (r) => r.approved
            ).length
          })`}
          active={
            activeTab ===
            "approved"
          }
          onClick={() =>
            setActiveTab(
              "approved"
            )
          }
        />

        <TabButton
          title={`Yesterday (${
            yesterdayReviews.length
          })`}
          active={
            activeTab ===
            "yesterday"
          }
          onClick={() =>
            setActiveTab(
              "yesterday"
            )
          }
        />
      </div>

      {/* Loading */}

      {loading ? (
        <div className="space-y-4">
          {Array.from({
            length: 5,
          }).map((_, index) => (
            <ReviewSkeleton
              key={index}
            />
          ))}
        </div>
      ) : filteredReviews.length ===
        0 ? (
        <div
          className="
          bg-white
          rounded-[28px]
          border
          border-[#f0e9f3]
          shadow-sm

          p-14

          text-center
          "
        >
          <div
            className="
            w-20
            h-20

            mx-auto
            mb-5

            rounded-full

            bg-[#f8edf4]

            flex
            items-center
            justify-center
            "
          >
            <MessageSquare
              size={32}
              className="text-[#b7004f]"
            />
          </div>

          <h3
            className="
            text-xl
            font-bold
            mb-2
            "
          >
            No Reviews Found
          </h3>

          <p className="text-gray-500">
            No reviews available in
            this category.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {filteredReviews.map(
            (review) => (
              <div
                key={review.id}
                className="
                bg-white

                rounded-[28px]

                border
                border-[#f0e9f3]

                shadow-sm

                p-6
                "
              >
                <div className="flex justify-between items-start gap-6">

                  <div className="flex-1">

                    <div className="flex items-center gap-3">

                      <h3
                        className="
                        font-bold
                        text-lg
                        "
                      >
                        {
                          review.customer_name
                        }
                      </h3>

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
                          : "Pending"}
                      </span>

                    </div>

                    <div className="flex gap-1 mt-3">

                      {Array.from({
                        length:
                          review.rating,
                      }).map(
                        (
                          _,
                          index
                        ) => (
                          <Star
                            key={
                              index
                            }
                            size={
                              16
                            }
                            className="
                            fill-[#b7004f]
                            text-[#b7004f]
                            "
                          />
                        )
                      )}

                    </div>

                    <p
                      className="
                      text-gray-600
                      mt-4
                      leading-relaxed
                      "
                    >
                      {
                        review.review
                      }
                    </p>

                  </div>

                </div>

                <div
                  className="
                  flex
                  gap-3
                  mt-6
                  "
                >
                  <button
                    onClick={() =>
                      toggleReview(
                        review.id,
                        review.approved
                      )
                    }
                    className={`
                    h-11

                    px-5

                    rounded-xl

                    flex
                    items-center
                    gap-2

                    font-medium

                    ${
                      review.approved
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }
                    `}
                  >
                    {review.approved ? (
                      <>
                        <XCircle
                          size={
                            16
                          }
                        />
                        Hide
                      </>
                    ) : (
                      <>
                        <CheckCircle
                          size={
                            16
                          }
                        />
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
                    h-11

                    px-5

                    rounded-xl

                    flex
                    items-center
                    gap-2

                    font-medium

                    bg-red-100
                    text-red-600
                    "
                  >
                    <Trash2
                      size={16}
                    />
                    Delete
                  </button>
                </div>
              </div>
            )
          )}

        </div>
      )}
    </div>
  );
}

function TabButton({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
      h-11
      w-56
      px-5

      rounded-xl

      font-medium

      transition-all

      ${
        active
          ? `
          bg-gradient-to-r
          from-[#b7004f]
          to-[#8138b2]

          text-white
          `
          : `
          bg-white
          border
          border-[#ece7ef]

          hover:bg-[#faf5fb]
          `
      }
      `}
    >
      {title}
    </button>
  );
}

function ReviewSkeleton() {
  return (
    <div
      className="
      bg-white

      rounded-[28px]

      border
      border-[#f0e9f3]

      shadow-sm

      p-6

      animate-pulse
      "
    >
      <div
        className="
        h-5
        w-[180px]

        bg-[#f2edf4]

        rounded-lg

        mb-4
        "
      />

      <div
        className="
        h-4
        w-[80px]

        bg-[#f2edf4]

        rounded-lg

        mb-5
        "
      />

      <div
        className="
        h-4
        w-full

        bg-[#f2edf4]

        rounded-lg

        mb-2
        "
      />

      <div
        className="
        h-4
        w-[70%]

        bg-[#f2edf4]

        rounded-lg
        "
      />
    </div>
  );
}