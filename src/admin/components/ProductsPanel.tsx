import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  Package,
} from "lucide-react";

import AddProductModal from "./AddProductModal";
import ProductCard from "./ProductCard";

import {
  Product,
  createPart,
  createProduct,
  getProducts,
} from "../../data/productService";

export default function ProductsPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] =
    useState(1);

  const PRODUCTS_PER_PAGE = 10;

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } =
        await getProducts();

      if (error) {
        console.error(error);
        return;
      }

      setProducts(data || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProducts();
  }, [loadProducts]);

  const handleCreateProduct = async (
    name: string,
    keywords: string,
    parts: {
      part_name: string;
      price: number;
    }[]
  ) => {
    const { data, error } =
      await createProduct(
        name,
        keywords
      );

    if (error || !data) {
      console.error(error);
      return;
    }

    for (const part of parts) {
      await createPart(
        data.id,
        part.part_name,
        part.price
      );
    }

    await loadProducts();
  };

  const filteredProducts = useMemo(() => {
  return products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (
        product.search_keywords ??
        ""
      )
        .toLowerCase()
        .includes(search.toLowerCase())
  );
}, [products, search]);

const totalPages = Math.ceil(
  filteredProducts.length /
    PRODUCTS_PER_PAGE
);

const paginatedProducts =
  filteredProducts.slice(
    (currentPage - 1) *
      PRODUCTS_PER_PAGE,
    currentPage *
      PRODUCTS_PER_PAGE
  );

  return (
    <>
      <AddProductModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onSave={
          handleCreateProduct
        }
      />

      <div className="space-y-6">

        {/* Header */}

        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <h2
                className="
                text-4xl
                font-black
                tracking-tight
                "
              >
                Products
              </h2>

              <span
                className="
                px-3
                py-1

                rounded-full

                bg-[#f5e8f2]

                text-[#b7004f]

                text-sm
                font-semibold
                "
              >
                {products.length}
              </span>
            </div>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              Manage all products, parts,
              and repair pricing.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="
            w-[152px]
            h-[52px]

            px-6

            rounded-2xl

            flex
            items-center
            justify-center
            gap-2

            font-semibold

            text-white

            bg-gradient-to-r
            from-[#b7004f]
            via-[#c2185b]
            to-[#8138b2]

            shadow-lg
            shadow-[#b7004f]/20

            hover:shadow-xl
            hover:shadow-[#b7004f]/30

            transition-all
            duration-300
            "
            >
            <Plus size={18} />
            <span>Add Product</span>
            </button>
        </div>

        {/* Search Card */}

        <div
            className="
            flex
            items-center
            gap-3

            h-14

            px-5

            rounded-2xl

            border
            border-[#ece7ef]
            "
            >
            <Search
                size={20}
                className="text-gray-400"
            />

            <input
                type="text"
                placeholder="Search Samsung S24, iPhone 15, MacBook..."
                value={search}
                onChange={(e) =>
                setSearch(e.target.value)
                }
                className="
                flex-1
                outline-none
                bg-transparent
                "
            />
            </div>

        {/* Products */}

        {loading ? (
          <div className="space-y-5">
            {Array.from({ length: 6 }).map(
              (_, index) => (
                <ProductSkeleton
                  key={index}
                />
              )
            )}
          </div>
        ) : filteredProducts.length === 0 ? (
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
              <Package
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
              No Products Found
            </h3>

            <p className="text-gray-500">
              Add your first repair
              product or adjust your
              search.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {paginatedProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  refreshProducts={
                    loadProducts
                  }
                />
              )
            )}
          </div>
        )}
        <div
          className="
          flex
          items-center
          justify-center
          gap-3
          mt-8
          "
        >
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((p) => p - 1)
            }
            className="
            w-[80px]
            h-[44px]
            px-4
            py-2

            rounded-xl

            border

            disabled:opacity-50
            "
          >
            Previous
          </button>

          <span
            className="
            px-4
            py-2

            font-semibold
            "
          >
            {currentPage} / {totalPages || 1}
          </span>

          <button
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              setCurrentPage((p) => p + 1)
            }
            className="
            w-[80px]
            h-[44px]
            px-4
            py-2

            rounded-xl

            border

            disabled:opacity-50
            "
          >
            Next
          </button>
        </div>

      </div>
    </>
  );
}

function ProductSkeleton() {
  return (
    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-[#f0e9f3]
      shadow-sm
      p-5

      animate-pulse
      "
    >
      <div
        className="
        h-6
        w-[220px]

        rounded-lg
        bg-[#f2edf4]
        mb-4
        "
      />

      <div
        className="
        h-4
        w-[120px]

        rounded-lg
        bg-[#f2edf4]
        "
      />
    </div>
  );
}
