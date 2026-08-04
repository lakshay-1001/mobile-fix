import { useEffect } from "react";
import { getSiteUrl, SITE_NAME } from "../../config/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function removeMeta(selector: string) {
  document.head.querySelector(selector)?.remove();
}

export default function SEO({
  title,
  description,
  path = "/",
  noIndex = false,
  type = "website",
  image = "/og-image.png",
  imageAlt = "AZAN Mobile Fix mobile repair services in Dubai",
  publishedTime,
  modifiedTime,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = getSiteUrl(path);
    const imageUrl = getSiteUrl(image);

    document.title = fullTitle;
    document.documentElement.lang = "en-AE";

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_AE" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: imageAlt });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: imageAlt });

    if (type === "article" && publishedTime) {
      upsertMeta('meta[property="article:published_time"]', {
        property: "article:published_time",
        content: publishedTime,
      });
    } else {
      removeMeta('meta[property="article:published_time"]');
    }

    if (type === "article" && modifiedTime) {
      upsertMeta('meta[property="article:modified_time"]', {
        property: "article:modified_time",
        content: modifiedTime,
      });
    } else {
      removeMeta('meta[property="article:modified_time"]');
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.head.querySelectorAll('script[data-site-schema="true"]').forEach((node) => node.remove());
    if (structuredData && !noIndex) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.siteSchema = "true";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [description, image, imageAlt, modifiedTime, noIndex, path, publishedTime, structuredData, title, type]);

  return null;
}
