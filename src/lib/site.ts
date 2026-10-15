export const SITE_URL = "https://rectifysoftware.vercel.app";
export const GITHUB_URL = "https://github.com/RectifySoftware";
export const ISSUES_URL = "https://github.com/RectifySoftware/rectify-jabre/issues";
export const RESPONSE_TIME = "2 business days";
export const LEGAL_UPDATED = "14 October 2026";

export function downloadHref(slug: string) {
  return `/thank-you?type=download&product=${slug}`;
}
