import {
  BRAND_MARK_LARGE,
  getSiteUrl,
  HAS_PUBLIC_PHONE,
  LEGAL_BUSINESS_NAME,
  OPENING_HOUR,
  CLOSING_HOUR,
  PHONE_E164,
  SITE_NAME,
} from "../../config/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": getSiteUrl("/#business"),
  name: SITE_NAME,
  legalName: LEGAL_BUSINESS_NAME,
  description: "Mobile phone, tablet and laptop repair services from a local shop in Meena Bazaar, Bur Dubai.",
  url: getSiteUrl("/"),
  logo: getSiteUrl(BRAND_MARK_LARGE),
  image: getSiteUrl("/og-image.png"),
  ...(HAS_PUBLIC_PHONE ? { telephone: PHONE_E164 } : {}),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25C Street, Meena Bazaar, Bur Dubai",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "Place", name: "Bur Dubai" },
    { "@type": "Place", name: "Meena Bazaar" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Device repair services",
    itemListElement: [
      "iPhone repair",
      "Samsung and Android phone repair",
      "iPad and tablet repair",
      "MacBook and laptop repair",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: OPENING_HOUR,
      closes: CLOSING_HOUR,
    },
  ],
  ...(HAS_PUBLIC_PHONE
    ? {
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_E164,
          contactType: "customer service",
          areaServed: "AE",
          availableLanguage: ["English"],
        },
      }
    : {}),
};

export function createBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getSiteUrl(item.path),
    })),
  };
}

export function createServiceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: getSiteUrl(service.path),
    provider: { "@id": getSiteUrl("/#business") },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Place", name: "Bur Dubai" },
    ],
    serviceType: service.name,
  };
}

export function createArticleSchema(article: {
  title: string;
  description: string;
  path: string;
  published: string;
  modified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: getSiteUrl(article.path),
    image: getSiteUrl("/og-image.png"),
    datePublished: article.published,
    dateModified: article.modified,
    author: { "@type": "Organization", name: `${SITE_NAME} Repair Team`, url: getSiteUrl("/about") },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl("/"),
      logo: { "@type": "ImageObject", url: getSiteUrl(BRAND_MARK_LARGE) },
    },
  };
}
