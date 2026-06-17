import {
  ChevronDown,
  ChevronUp,
  Pencil,
  Trash2,
  Plus,
  Save,
  X,
} from "lucide-react";

import { useState } from "react";

import {
  Product,
  createPart,
  updatePart,
  deletePart,
  deleteProduct,
} from "../../data/productService";

interface Props {
  product: Product;
  refreshProducts?: () => void;
}

export default function ProductCard({
  product,
  refreshProducts,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const [showAddPart, setShowAddPart] =
    useState(false);

  const [partName, setPartName] =
    useState("");

  const [partPrice, setPartPrice] =
    useState("");

  const [editingPartId, setEditingPartId] =
    useState<number | null>(null);

  const [editPrice, setEditPrice] =
    useState("");

  const parts =
    product.product_parts || [];

  const handleAddPart =
    async () => {
      if (
        !partName.trim() ||
        !partPrice
      )
        return;

      const { error } =
        await createPart(
          product.id,
          partName,
          Number(partPrice)
        );

      if (error) {
        console.error(error);
        return;
      }

      setPartName("");
      setPartPrice("");
      setShowAddPart(false);

      refreshProducts?.();
    };

  const handleDeletePart =
    async (id: number) => {
      const confirmed =
        window.confirm(
          "Delete this part?"
        );

      if (!confirmed) return;

      const { error } =
        await deletePart(id);

      if (error) {
        console.error(error);
        return;
      }

      refreshProducts?.();
    };

  const handleDeleteProduct =
    async () => {
      const confirmed =
        window.confirm(
          `Delete ${product.name}?`
        );

      if (!confirmed) return;

      const { error } =
        await deleteProduct(
          product.id
        );

      if (error) {
        console.error(error);
        return;
      }

      refreshProducts?.();
    };

  const savePrice =
    async (
      partId: number
    ) => {
      const current =
        parts.find(
          (p) =>
            p.id === partId
        );

      if (!current) return;

      const { error } =
        await updatePart(
          partId,
          current.part_name,
          Number(editPrice)
        );

      if (error) {
        console.error(error);
        return;
      }

      setEditingPartId(null);

      refreshProducts?.();
    };

  return (
    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-[#f2edf4]
      shadow-sm
      overflow-hidden
      "
      onClick={() =>
        setOpen(!open)
      }
    >
      <div
        className="
        px-6
        py-5

        flex
        items-center
        justify-between
        "
      >
        <button
          onClick={() =>
            setOpen(!open)
          }
          className="
          flex
          items-center
          gap-3
          w-full
          h-full
          text-left
          "
        >
          {open ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}

          <div className="w-full">
            <h3
              className="
              font-bold
              text-lg
              "
            >
              {product.name}
            </h3>

            <p
              className="
              text-sm
              text-gray-500
              "
            >
              {parts.length} Parts
            </p>
          </div>
        </button>

        <div className="flex gap-2">
          {/* <button
            className="
            h-10
            w-10

            rounded-xl

            hover:bg-gray-100

            flex
            items-center
            justify-center
            "
          >
            <Pencil size={16} />
          </button> */}

          <button
            onClick={
              handleDeleteProduct
            }
            className="
            h-10
            w-10

            rounded-xl

            text-red-500

            hover:bg-red-50

            flex
            items-center
            justify-center
            "
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="
          border-t
          border-[#f2edf4]
          p-5
          "
        >
          <div className="space-y-3">
            {parts.map((part) => (
              <div
                key={part.id}
                className="
                flex
                justify-between
                items-center

                p-4

                rounded-2xl

                bg-[#faf7fb]
                "
              >
                <div>
                  <p className="font-semibold">
                    {part.part_name}
                  </p>

                  {editingPartId ===
                  part.id ? (
                    <input
                      value={editPrice}
                      onChange={(e) =>
                        setEditPrice(
                          e.target.value
                        )
                      }
                      className="
                      mt-2
                      h-10
                      w-32
                      px-3

                      border
                      rounded-lg
                      "
                    />
                  ) : (
                    <p
                      className="
                      text-[#b7004f]
                      font-bold
                      "
                    >
                      AED {part.price}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  {editingPartId ===
                  part.id ? (
                    <>
                      <button
                        onClick={() =>
                          savePrice(
                            part.id
                          )
                        }
                        className="
                        h-10
                        w-10

                        rounded-xl

                        bg-green-100
                        text-green-600

                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Save size={16} />
                      </button>

                      <button
                        onClick={() =>
                          setEditingPartId(
                            null
                          )
                        }
                        className="
                        h-10
                        w-10

                        rounded-xl

                        bg-gray-100

                        flex
                        items-center
                        justify-center
                        "
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingPartId(
                            part.id
                          );

                          setEditPrice(
                            String(
                              part.price
                            )
                          );
                        }}
                        className="
                        h-10
                        w-10

                        rounded-xl

                        hover:bg-gray-100

                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() =>
                          handleDeletePart(
                            part.id
                          )
                        }
                        className="
                        h-10
                        w-10

                        rounded-xl

                        text-red-500

                        hover:bg-red-50

                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            {!showAddPart ? (
              <button
                onClick={() =>
                  setShowAddPart(
                    true
                  )
                }
                className="
                flex
                items-center
                gap-2

                text-[#b7004f]
                font-semibold
                "
              >
                <Plus size={18} />
                Add Part
              </button>
            ) : (
              <div
                className="
                mt-4

                p-5

                rounded-2xl

                border

                bg-[#faf7fb]
                "
              >
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    placeholder="Part Name"
                    value={partName}
                    onChange={(e) =>
                      setPartName(
                        e.target.value
                      )
                    }
                    className="
                    h-12
                    px-4

                    border
                    rounded-xl
                    "
                  />

                  <input
                    placeholder="Price"
                    type="number"
                    value={partPrice}
                    onChange={(e) =>
                      setPartPrice(
                        e.target.value
                      )
                    }
                    className="
                    h-12
                    px-4

                    border
                    rounded-xl
                    "
                  />
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={
                      handleAddPart
                    }
                    className="
                    h-11
                    px-5

                    rounded-xl

                    text-white

                    bg-gradient-to-r
                    from-[#b7004f]
                    to-[#8138b2]
                    "
                  >
                    Save Part
                  </button>

                  <button
                    onClick={() =>
                      setShowAddPart(
                        false
                      )
                    }
                    className="
                    h-11
                    px-5

                    rounded-xl

                    border
                    "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}