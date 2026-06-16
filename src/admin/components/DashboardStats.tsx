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
    },
    {
      label: "Parts",
      value: parts,
    },
    {
      label: "Reviews",
      value: reviews,
    },
    {
      label: "Approved",
      value: approved,
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-5">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
          bg-white
          rounded-3xl
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            {item.label}
          </p>

          <h3
            className="
            text-4xl
            font-black
            mt-2
            text-[#b7004f]
            "
          >
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}