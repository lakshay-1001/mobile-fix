import { useState } from "react";
import { Plus, X, Trash2 } from "lucide-react";

interface Part {
  part_name: string;
  price: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (
    name: string,
    keywords: string,
    parts: Part[]
  ) => Promise<void>;
}

export default function AddProductModal({
  open,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [keywords, setKeywords] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [parts, setParts] = useState<
    Part[]
  >([
    {
      part_name: "",
      price: 0,
    },
  ]);

  if (!open) return null;

  const addPart = () => {
    setParts([
      ...parts,
      {
        part_name: "",
        price: 0,
      },
    ]);
  };

  const removePart = (index: number) => {
    setParts(
      parts.filter(
        (_, i) => i !== index
      )
    );
  };

  const updatePart = (
    index: number,
    field: keyof Part,
    value: string | number
  ) => {
    const updated = [...parts];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setParts(updated);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Product name required");
      return;
    }

    const validParts =
      parts.filter(
        (part) =>
          part.part_name.trim() !== ""
      );

    try {
      setLoading(true);

      await onSave(
        name,
        keywords,
        validParts
      );

      setName("");
      setKeywords("");

      setParts([
        {
          part_name: "",
          price: 0,
        },
      ]);

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-50

      bg-black/40

      flex
      items-center
      justify-center

      p-5
      "
    >
      <div
        className="
        w-full
        max-w-4xl

        bg-white

        rounded-[32px]

        shadow-2xl

        overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
          px-8
          py-6

          border-b

          flex
          items-center
          justify-between
          "
        >
          <div>
            <h2 className="text-3xl font-black">
              Add Product
            </h2>

            <p className="text-gray-500 mt-1">
              Add a device and all repair
              parts pricing.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
            w-10
            h-10

            rounded-full

            hover:bg-gray-100

            flex
            items-center
            justify-center
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
          p-8

          max-h-[70vh]
          overflow-y-auto
          "
        >
          <div className="space-y-6">

            <div>
              <label className="font-semibold block mb-2">
                Product Name
              </label>

              <input
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                placeholder="Samsung S24 Ultra"
                className="
                w-full
                h-12

                border

                rounded-xl

                px-4
                "
              />
            </div>

            {/* <div>
              <label className="font-semibold block mb-2">
                Search Keywords
              </label>

              <input
                value={keywords}
                onChange={(e) =>
                  setKeywords(
                    e.target.value
                  )
                }
                placeholder="s24,s24 ultra,samsung"
                className="
                w-full
                h-12

                border

                rounded-xl

                px-4
                "
              />
            </div> */}

            {/* Parts */}

            <div>
              <div
                className="
                flex
                items-center
                justify-between
                mb-4
                "
              >
                <h3 className="font-bold text-xl">
                  Parts Pricing
                </h3>

                <button
                  onClick={addPart}
                  className="
                  flex
                  items-center
                  gap-2

                  text-[#b7004f]
                  font-semibold
                  "
                >
                  <Plus size={16} />
                  Add Part
                </button>
              </div>

              <div className="space-y-4">

                {parts.map(
                  (
                    part,
                    index
                  ) => (
                    <div
                      key={index}
                      className="
                      grid
                      md:grid-cols-[1fr_180px_auto]
                      gap-3
                      "
                    >
                      <input
                        placeholder="Screen"
                        value={
                          part.part_name
                        }
                        onChange={(e) =>
                          updatePart(
                            index,
                            "part_name",
                            e.target.value
                          )
                        }
                        className="
                        h-12

                        border

                        rounded-xl

                        px-4
                        "
                      />

                      <input
                        type="number"
                        placeholder="950"
                        value={
                          part.price
                        }
                        onChange={(e) =>
                          updatePart(
                            index,
                            "price",
                            Number(
                              e.target
                                .value
                            )
                          )
                        }
                        className="
                        h-12

                        border

                        rounded-xl

                        px-4
                        "
                      />

                      <button
                        onClick={() =>
                          removePart(
                            index
                          )
                        }
                        className="
                        h-12
                        w-12

                        rounded-xl

                        bg-red-50
                        text-red-500

                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Trash2
                          size={18}
                        />
                      </button>
                    </div>
                  )
                )}

              </div>
            </div>

          </div>
        </div>

        {/* Footer */}

        <div
          className="
          px-8
          py-6

          border-t

          flex
          justify-end
          gap-3
          "
        >
          <button
            onClick={onClose}
            className="
            h-12
            px-6

            rounded-xl

            border
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
            h-12
            px-8

            rounded-xl

            text-white

            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]

            disabled:opacity-50
            "
          >
            {loading
              ? "Saving..."
              : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}