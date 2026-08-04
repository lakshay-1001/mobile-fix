const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const REQUEST_TIMEOUT_MS = 15_000;

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  device: string;
  message: string;
}

function getEmailJsConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "",
  };
}

export function isEmailJsConfigured() {
  const config = getEmailJsConfig();
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}

export async function sendContactEmail(message: ContactMessage) {
  const config = getEmailJsConfig();

  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error("EMAIL_NOT_CONFIGURED");
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: {
          name: message.name,
          email: message.email,
          reply_to: message.email,
          phone: message.phone || "Not provided",
          inquiry_type: message.inquiryType,
          device: message.device || "Not provided",
          message: message.message,
          page_url: window.location.href,
          time: new Date().toLocaleString("en-AE", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "Asia/Dubai",
          }),
        },
      }),
    });

    if (!response.ok) {
      throw new Error("EMAIL_SEND_FAILED");
    }
  } finally {
    window.clearTimeout(timeout);
  }
}
