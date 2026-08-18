export interface Product {
  id: number;
  slug: string;
  name: string;
  category: "phone" | "laptop" | "accessory" | "device";
  brand: string;
  model: string;
  description: string;
  condition: "new" | "used" | "refurbished";
  price?: number; // undefined means "Contact for price"
  image?: string;
  specs?: string[];
  availability: "in-stock" | "pre-order" | "coming-soon";
}

export const products: Product[] = [
  {
    id: 1,
    slug: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    category: "phone",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    description: "Latest iPhone with advanced camera and A17 Pro chip",
    condition: "new",
    availability: "in-stock",
    specs: ["6.7\" Super Retina display", "A17 Pro chip", "48MP Main camera", "Titanium design"],
  },
  {
    id: 2,
    slug: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    category: "phone",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    description: "Flagship Android device with premium features",
    condition: "new",
    availability: "in-stock",
    specs: ["6.8\" AMOLED display", "Snapdragon 8 Gen 3", "200MP camera", "S Pen included"],
  },
  {
    id: 3,
    slug: "macbook-pro-m3",
    name: "MacBook Pro 16\" M3",
    category: "laptop",
    brand: "Apple",
    model: "MacBook Pro 16-inch",
    description: "Professional laptop for creators and developers",
    condition: "new",
    availability: "in-stock",
    specs: ["M3 Max chip", "16GB unified memory", "512GB SSD", "16-hour battery"],
  },
  {
    id: 4,
    slug: "iphone-14-used",
    name: "iPhone 14 (Used)",
    category: "phone",
    brand: "Apple",
    model: "iPhone 14",
    description: "Pre-owned iPhone in excellent condition",
    condition: "used",
    availability: "in-stock",
    specs: ["6.1\" display", "A15 Bionic chip", "48MP main camera", "Verified condition"],
  },
  {
    id: 5,
    slug: "airpods-pro-gen2",
    name: "AirPods Pro (2nd Gen)",
    category: "accessory",
    brand: "Apple",
    model: "AirPods Pro",
    description: "Premium wireless earbuds with active noise cancellation",
    condition: "new",
    availability: "in-stock",
    specs: ["Active Noise Cancellation", "Adaptive Audio", "Personalized Volume", "USB-C charging"],
  },
  {
    id: 6,
    slug: "samsung-buds2-pro",
    name: "Samsung Galaxy Buds2 Pro",
    category: "accessory",
    brand: "Samsung",
    model: "Galaxy Buds2 Pro",
    description: "Premium earbuds with intelligent ANC",
    condition: "new",
    availability: "in-stock",
    specs: ["Active Noise Cancellation", "360-degree audio", "IPX7 water resistance", "Seamless sync"],
  },
  {
    id: 7,
    slug: "ipad-pro-12-9",
    name: "iPad Pro 12.9\"",
    category: "device",
    brand: "Apple",
    model: "iPad Pro 12.9-inch",
    description: "Powerful tablet for work and creativity",
    condition: "new",
    availability: "in-stock",
    specs: ["M2 chip", "12.9\" Liquid Retina XDR", "8GB RAM", "128GB storage"],
  },
  {
    id: 8,
    slug: "samsung-tablet-s9",
    name: "Samsung Galaxy Tab S9",
    category: "device",
    brand: "Samsung",
    model: "Galaxy Tab S9",
    description: "Premium Android tablet with stylus",
    condition: "new",
    availability: "in-stock",
    specs: ["11\" Dynamic AMOLED", "Snapdragon 8 Gen 2", "S Pen included", "DeX mode"],
  },
  {
    id: 9,
    slug: "pixel-8-pro",
    name: "Google Pixel 8 Pro",
    category: "phone",
    brand: "Google",
    model: "Pixel 8 Pro",
    description: "Google's flagship with advanced AI features",
    condition: "new",
    availability: "pre-order",
    specs: ["6.7\" display", "Tensor G3", "50MP camera", "AI-powered features"],
  },
  {
    id: 10,
    slug: "usb-c-cable",
    name: "USB-C Fast Charge Cable",
    category: "accessory",
    brand: "Azan",
    model: "Professional Grade",
    description: "Durable high-speed USB-C charging cable",
    condition: "new",
    availability: "in-stock",
    specs: ["Fast charging up to 100W", "2-meter length", "Nylon braided", "Warranty included"],
  },
];

export function getProduct(slug?: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: Product["category"]) {
  return products.filter((product) => product.category === category);
}

export function getAvailableProducts() {
  return products.filter((product) => product.availability !== "coming-soon");
}
