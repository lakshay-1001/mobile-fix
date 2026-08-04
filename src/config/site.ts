export const SITE_NAME = "AZAN Mobile Fix";
export const BRAND_MARK_SMALL = "/brand/azan-mark-64.png";
export const BRAND_MARK_LARGE = "/brand/icon-512.png";
export const LEGAL_BUSINESS_NAME = "NAJMA AL WAHDA ELECTRONICS TRADING L.L.C";
export const SHOP_ADDRESS = "25C Street, Meena Bazaar, Bur Dubai, Dubai, United Arab Emirates";
export const SHOP_DIRECTIONS = [
  "Opposite Suleman Usman Mithaiwala Restaurant",
  "Near Mini Panjab Restaurant",
  "Landmark: Astoria Hotel",
];
export const OPENING_HOURS_DISPLAY = "Daily, 10:00 AM–12:00 AM";
export const OPENING_HOURS_SHORT = "Open daily, 10 AM–12 AM";
export const OPENING_HOUR = "10:00";
export const CLOSING_HOUR = "00:00";

const configuredPhone = import.meta.env.VITE_PUBLIC_PHONE_E164?.trim() ?? "";
const configuredPhoneDisplay = import.meta.env.VITE_PUBLIC_PHONE_DISPLAY?.trim() ?? "";
const configuredContactPhone =
  import.meta.env.VITE_CONTACT_PHONE_E164?.trim() || configuredPhone;

export const HAS_PUBLIC_PHONE = /^\+[1-9]\d{7,14}$/.test(configuredPhone);
export const PHONE_E164 = HAS_PUBLIC_PHONE ? configuredPhone : "";
export const HAS_CONTACT_PHONE = /^\+[1-9]\d{7,14}$/.test(configuredContactPhone);
export const CONTACT_PHONE_E164 = HAS_CONTACT_PHONE ? configuredContactPhone : "";
export const PHONE_DISPLAY = HAS_PUBLIC_PHONE
  ? configuredPhoneDisplay || configuredPhone
  : "XXXXXX";
export const PHONE_LINK = HAS_CONTACT_PHONE ? `tel:${CONTACT_PHONE_E164}` : "tel:";
export const HAS_WHATSAPP = HAS_CONTACT_PHONE;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi AZAN Mobile Fix, I would like to book a device repair in Dubai.";

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  if (!HAS_WHATSAPP) return "https://wa.me/";
  return `https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function getSiteUrl(path = "/") {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  const origin = configuredUrl || (typeof window !== "undefined" ? window.location.origin : "");
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
