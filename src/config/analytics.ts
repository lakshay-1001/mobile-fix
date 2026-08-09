declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ...params,
  });
};