"use client";

import { OPEN_SETTINGS_EVENT } from "@/lib/consent";

export function CookieSettingsButton({
  className = "underline decoration-paper-dim/30 underline-offset-4 hover:text-red",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
