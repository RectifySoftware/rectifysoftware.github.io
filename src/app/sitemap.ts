import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const paths = [
  "",
  "/products",
  "/jabre",
  "/about",
  "/case-studies",
  "/faq",
  "/changelog",
  "/contact",
  "/privacy",
  "/terms",
  "/acceptable-use",
  "/sla",
  "/data-protection",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: path === "" ? 1 : path === "/jabre" || path === "/products" ? 0.9 : 0.6,
  }));
}
