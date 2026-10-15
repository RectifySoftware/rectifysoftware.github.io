"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ThankYouEffects({
  type,
  product,
  downloadUrl,
}: {
  type: "download";
  product?: string;
  downloadUrl?: string;
}) {
  useEffect(() => {
    window.gtag?.("event", "file_download", {
      product,
    });

    if (type !== "download" || !downloadUrl) return;
    const timer = setTimeout(() => window.location.assign(downloadUrl), 1200);
    return () => clearTimeout(timer);
  }, [type, product, downloadUrl]);

  return null;
}
