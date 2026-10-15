export type Consent = "granted" | "denied";

export const CONSENT_KEY = "rectify-cookie-consent";
export const OPEN_SETTINGS_EVENT = "rectify:open-cookie-settings";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function storeConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked: the choice just won't persist between visits.
  }
}
