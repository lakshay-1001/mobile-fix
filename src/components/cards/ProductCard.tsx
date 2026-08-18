import { ShoppingCart, MessageCircle, Package } from "lucide-react";
import type { Product } from "../../data/products";
import { getWhatsAppUrl, HAS_WHATSAPP } from "../../config/site";
import { trackEvent } from "../../config/analytics";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryIcons: Record<Product["category"], string> = {
    phone: "📱",
    laptop: "💻",
    accessory: "🎧",
    device: "📦",
  };

  const categoryLabels: Record<Product["category"], string> = {
    phone: "Mobile Phone",
    laptop: "Laptop",
    accessory: "Accessory",
    device: "Device",
  };

  const whatsappUrl = getWhatsAppUrl(`Hi Azan Mobile Fix, I'm interested in the ${product.name}. Can you provide more details?`);

  const isOutOfStock = product.availability === "coming-soon";
  const priceDisplay = product.price ? `AED ${product.price.toLocaleString()}` : "Contact for price";

  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[#eadde5] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Product Image or Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[#f5e8f2] to-[#fffafd] flex items-center justify-center border-b border-[#eadde5]">
        <div className="text-6xl">{categoryIcons[product.category]}</div>
        
        {/* Condition Badge */}
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
            product.condition === "new" ? "bg-green-100 text-green-700" :
            product.condition === "refurbished" ? "bg-blue-100 text-blue-700" :
            "bg-amber-100 text-amber-700"
          }`}>
            {product.condition}
          </span>
        </div>

        {/* Availability Badge */}
        {product.availability === "pre-order" && (
          <div className="absolute bottom-3 left-3 bg-[#b7004f] text-white px-3 py-1 rounded-full text-xs font-bold">
            Pre-order
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Category and Brand */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#8138b2]">
            {categoryLabels[product.category]}
          </span>
          <span className="text-xs font-semibold text-[#6f5963]">{product.brand}</span>
        </div>

        {/* Product Name */}
        <h3 className="mt-2 text-lg font-black leading-tight text-[#171217]">{product.name}</h3>

        {/* Model */}
        <p className="mt-1 text-sm text-[#5a4045]">{product.model}</p>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-[#5a4045] flex-1">{product.description}</p>

        {/* Specs */}
        {product.specs && product.specs.length > 0 && (
          <div className="mt-4 space-y-2 bg-[#fffafd] rounded-lg p-3">
            {product.specs.slice(0, 2).map((spec) => (
              <div key={spec} className="flex items-start gap-2 text-xs text-[#5a4045]">
                <span className="text-[#b7004f] font-bold mt-0.5">•</span>
                <span>{spec}</span>
              </div>
            ))}
            {product.specs.length > 2 && (
              <p className="text-xs text-[#8138b2] font-semibold">+{product.specs.length - 2} more specs</p>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-4 pt-4 border-t border-[#eadde5]">
          <p className="text-2xl font-black text-[#b7004f]">{priceDisplay}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-2">
          <a
            onClick={() =>
              trackEvent("product_inquiry", {
                product_name: product.name,
                location: "product_card",
              })
            }
            href={whatsappUrl}
            target={HAS_WHATSAPP ? "_blank" : undefined}
            rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
            disabled={isOutOfStock}
            className={`flex-1 flex items-center justify-center gap-2 rounded-full font-bold py-3 px-4 text-sm transition-all ${
              isOutOfStock
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-[#b7004f] text-white hover:bg-[#950040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
            }`}
          >
            <MessageCircle size={16} aria-hidden="true" />
            Inquire
          </a>

          <button
            onClick={() =>
              trackEvent("add_to_cart", {
                product_name: product.name,
                location: "product_card",
              })
            }
            disabled={isOutOfStock}
            className={`flex items-center justify-center gap-2 rounded-full font-bold py-3 px-4 text-sm transition-all ${
              isOutOfStock
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "border-2 border-[#b7004f] text-[#b7004f] hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]"
            }`}
          >
            <ShoppingCart size={16} aria-hidden="true" />
          </button>
        </div>

        {isOutOfStock && (
          <p className="mt-3 text-center text-xs font-semibold text-gray-500">Coming Soon</p>
        )}
      </div>
    </article>
  );
}
