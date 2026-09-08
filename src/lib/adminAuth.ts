export const ADMIN_SESSION_KEY = "azan_admin_session";

export function getAdminCredentials() {
  return {
    email: (import.meta.env.VITE_ADMIN_EMAIL ?? "").trim(),
    password: (import.meta.env.VITE_ADMIN_PASSWORD ?? "").trim(),
  };
}

export function isAdminAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function setAdminAuthenticated(value: boolean) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ADMIN_SESSION_KEY, value ? "true" : "false");
}
