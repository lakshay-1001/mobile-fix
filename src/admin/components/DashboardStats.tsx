import {
  Smartphone,
  Wrench,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

interface Props {
  products: number;
  parts: number;
  reviews: number;
  approved: number;
}

export default function DashboardStats({
  products,
  parts,
  reviews,
  approved,
}: Props) {
  const stats = [
    {
      label: "Products",
      value: products,
      icon: Smartphone,
      color:
        "from-[#b7004f] to-[#d81b60]",
      bg: "bg-[#fff0f6]",
    },
    {
      label: "Parts",
      value: parts,
      icon: Wrench,
      color:
        "from-[#8138b2] to-[#9c4dcc]",
      bg: "bg-[#f6efff]",
    },
    {
      label: "Reviews",
      value: reviews,
      icon: MessageSquare,
      color:
        "from-[#ff9800] to-[#ffb74d]",
      bg: "bg-[#fff7ec]",
    },
    {
      label: "Approved",
      value: approved,
      icon: CheckCircle,
      color:
        "from-[#22c55e] to-[#4ade80]",
      bg: "bg-[#effdf4]",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1
          className="
          text-4xl
          font-black
          tracking-tight
          "
        >
          Dashboard
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          text-lg
          "
        >
          Overview of products,
          parts, reviews and
          business activity.
        </p>
      </div>

      {/* Welcome Banner */}

      <div
        className="
        relative

        overflow-hidden

        rounded-[32px]

        bg-gradient-to-r
        from-[#b7004f]
        via-[#c2185b]
        to-[#8138b2]

        p-8

        text-white
        "
      >
        <div className="relative z-10">

          <h2
            className="
            text-3xl
            font-black
            "
          >
            Welcome Back 👋
          </h2>

          <p
            className="
            mt-2

            text-white/90
            "
          >
            Manage products,
            pricing, reviews and
            customer requests from
            one place.
          </p>

        </div>

        <div
          className="
          absolute

          right-[-50px]
          top-[-50px]

          w-[220px]
          h-[220px]

          rounded-full

          bg-white/10
          "
        />

        <div
          className="
          absolute

          right-[100px]
          bottom-[-60px]

          w-[160px]
          h-[160px]

          rounded-full

          bg-white/10
          "
        />
      </div>

      {/* Stats */}

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
              bg-white

              rounded-[30px]

              border
              border-[#f0e9f3]

              shadow-sm

              p-6

              hover:shadow-lg

              transition-all
              duration-300
              "
            >
              <div className="flex justify-between items-start">

                <div>

                  <p
                    className="
                    text-gray-500
                    font-medium
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                    text-5xl
                    font-black

                    mt-3
                    "
                  >
                    {item.value}
                  </h3>

                </div>

                <div
                  className={`
                  w-14
                  h-14

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  ${item.bg}
                  `}
                >
                  <div
                    className={`
                    w-10
                    h-10

                    rounded-xl

                    bg-gradient-to-r
                    ${item.color}

                    flex
                    items-center
                    justify-center

                    text-white
                    `}
                  >
                    <Icon size={20} />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Summary */}

      <div
        className="
        bg-white

        rounded-[30px]

        border
        border-[#f0e9f3]

        shadow-sm

        p-8
        "
      >
        <h3
          className="
          text-2xl
          font-black
          mb-6
          "
        >
          Quick Overview
        </h3>

        <div
          className="
          grid
          md:grid-cols-2
          gap-5
          "
        >
          <div
            className="
            p-5

            rounded-2xl

            bg-[#faf5fb]
            "
          >
            <p className="text-gray-500">
              Total Added Product & Parts
            </p>

            <h4
              className="
              text-3xl
              font-black
              mt-2
              "
            >
              {products + parts}
            </h4>
          </div>

          <div
            className="
            p-5

            rounded-2xl

            bg-[#faf5fb]
            "
          >
            <p className="text-gray-500">
              Approval Rate
            </p>

            <h4
              className="
              text-3xl
              font-black
              mt-2
              "
            >
              {reviews > 0
                ? Math.round(
                    (approved /
                      reviews) *
                      100
                  )
                : 0}
              %
            </h4>
          </div>
        </div>
      </div>

    </div>
  );
}