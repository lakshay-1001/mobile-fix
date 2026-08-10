declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
//   console.log("TRACK EVENT:", eventName, params);

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ...params,
  });

//   console.log(window.dataLayer);
};