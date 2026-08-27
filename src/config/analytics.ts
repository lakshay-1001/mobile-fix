declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, unknown> = {}
) => {
//   console.log("TRACK EVENT:", eventName, params);

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ...params,
  });

//   console.log(window.dataLayer);
};