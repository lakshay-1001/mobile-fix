import { useState } from "react";
import { MapPin, MessageCircle, Phone, Package, Smartphone, Laptop, Zap } from "lucide-react";
import WebsiteLayout from "../components/layout/WebsiteLayout";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import SEO from "../components/seo/SEO";
import ProductCard from "../components/cards/ProductCard";
import { products, type Product } from "../data/products";
import { getWhatsAppUrl, HAS_WHATSAPP, SHOP_ADDRESS, OPENING_HOURS_DISPLAY, PHONE_DISPLAY, PHONE_LINK } from "../config/site";
import { trackEvent } from "../config/analytics";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<Product["category"] | "all">("all");

  const categories: { id: Product["category"] | "all"; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Products", icon: <Package size={18} /> },
    { id: "phone", label: "Mobile Phones", icon: <Smartphone size={18} /> },
    { id: "laptop", label: "Laptops", icon: <Laptop size={18} /> },
    { id: "device", label: "Devices", icon: <Package size={18} /> },
    { id: "accessory", label: "Accessories", icon: <Zap size={18} /> },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const whatsappUrl = getWhatsAppUrl("Hi Azan Mobile Fix, I'm interested in your products. Can you help?");

  return (
    <WebsiteLayout>
      <SEO
        title="Mobile Phones, Laptops & Accessories Shop Dubai"
        description="Shop latest iPhones, Samsung, MacBooks, accessories and more at Azan Mobile Fix in Dubai. New and used devices with competitive prices."
        path="/shop"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Azan Mobile Fix Shop",
            description: "Mobile phones, laptops, accessories and devices shop in Dubai",
            url: "https://azanmobilefix.com/shop",
            address: {
              "@type": "PostalAddress",
              streetAddress: SHOP_ADDRESS,
              addressCountry: "AE",
            },
          },
        ]}
      />

      <section className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Shop" }]} />

          {/* Header */}
          <div className="max-w-3xl mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7004f]">Premium Products</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.035em] text-[#171217] sm:text-5xl">
              Mobile Phones & Accessories
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5a4045]">
              Explore our latest collection of smartphones, laptops, devices and accessories. New, refurbished and pre-owned options available at competitive prices.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id as Product["category"] | "all");
                  trackEvent("filter_by_category", { category: cat.id });
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#b7004f] text-white shadow-lg"
                    : "border-2 border-[#b7004f] text-[#b7004f] hover:bg-pink-50"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-12 text-center py-12">
              <Package size={48} className="mx-auto text-[#b7004f]/20 mb-4" />
              <p className="text-lg font-bold text-[#5a4045]">No products in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Store Information Section */}
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-black text-[#171217] text-center">Visit Our Store</h2>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Location Card */}
            <div className="rounded-[24px] border-2 border-[#eadde5] bg-[#fffafd] p-8 text-center">
              <MapPin size={32} className="mx-auto text-[#b7004f] mb-4" />
              <h3 className="text-xl font-black text-[#171217]">Store Location</h3>
              <address className="mt-4 not-italic text-sm leading-7 text-[#5a4045]">
                {SHOP_ADDRESS}
              </address>
              <a
                href="https://maps.google.com/?q=Azan Mobile Fix Bur Dubai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("view_on_map", { location: "store_info_section" })}
                className="mt-5 inline-block px-5 py-2 rounded-full bg-[#b7004f] text-white font-bold text-sm hover:bg-[#950040] transition-colors"
              >
                View on Map
              </a>
            </div>

            {/* Hours Card */}
            <div className="rounded-[24px] border-2 border-[#eadde5] bg-[#fffafd] p-8 text-center">
              <Zap size={32} className="mx-auto text-[#8138b2] mb-4" />
              <h3 className="text-xl font-black text-[#171217]">Opening Hours</h3>
              <p className="mt-4 text-lg font-bold text-[#5a4045]">{OPENING_HOURS_DISPLAY}</p>
              <p className="mt-2 text-sm text-[#6f5963]">Visit us to explore products in person</p>
            </div>

            {/* Contact Card */}
            <div className="rounded-[24px] border-2 border-[#eadde5] bg-[#fffafd] p-8 text-center">
              <Phone size={32} className="mx-auto text-[#6f5963] mb-4" />
              <h3 className="text-xl font-black text-[#171217]">Contact Us</h3>
              <a
                href={PHONE_LINK}
                onClick={() => trackEvent("phone_call", { location: "store_info_section" })}
                className="mt-4 inline-block text-lg font-bold text-[#b7004f] hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-2 text-sm text-[#6f5963]">Call for product availability</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-[28px] bg-gradient-to-r from-[#b7004f] to-[#8138b2] p-8 text-center text-white sm:p-12">
            <h3 className="text-2xl font-black">Interested in a Product?</h3>
            <p className="mt-3 text-lg leading-7 text-white/85">
              Message us on WhatsApp or call for product details, pricing and availability.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target={HAS_WHATSAPP ? "_blank" : undefined}
                rel={HAS_WHATSAPP ? "noopener noreferrer" : undefined}
                onClick={() => trackEvent("whatsapp_cta", { location: "shop_page_cta" })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-[#b7004f] hover:bg-gray-100 transition-colors"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                onClick={() => trackEvent("phone_cta", { location: "shop_page_cta" })}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-3 font-bold text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#fffafd] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Package className="text-[#b7004f]" size={24} />
                <h4 className="font-black text-[#171217]">New & Used</h4>
              </div>
              <p className="text-sm leading-6 text-[#5a4045]">
                We offer both new and pre-owned devices, all verified and in excellent condition.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-[#8138b2]" size={24} />
                <h4 className="font-black text-[#171217]">Competitive Prices</h4>
              </div>
              <p className="text-sm leading-6 text-[#5a4045]">
                Best prices in Dubai. Contact us for special deals and bulk orders.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="text-[#6f5963]" size={24} />
                <h4 className="font-black text-[#171217]">Easy Inquiries</h4>
              </div>
              <p className="text-sm leading-6 text-[#5a4045]">
                Message on WhatsApp for quick product information and availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  );
}
