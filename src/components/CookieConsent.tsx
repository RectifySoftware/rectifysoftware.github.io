"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  OPEN_SETTINGS_EVENT,
  readConsent,
  storeConsent,
  type Consent,
} from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);
    setOpen(saved === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  function choose(value: Consent) {
    storeConsent(value);
    setConsent(value);
    setOpen(false);
  }

  return (
    <>
      {GA_ID && consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[60] border border-line-dark bg-charcoal p-5 text-paper shadow-2xl md:inset-x-auto md:bottom-5 md:left-5 md:max-w-md"
        >
          <p className="font-serif text-lg">Cookies</p>
          <p className="mt-2 text-sm leading-relaxed text-paper-dim/85">
            We&rsquo;d like to use Google Analytics cookies to see which pages
            are useful. Nothing loads unless you accept, and the site works the
            same either way. Details are in the{" "}
            <Link
              href="/privacy"
              className="text-paper underline decoration-paper-dim/40 underline-offset-4 hover:text-red-light"
            >
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 bg-gradient-to-b from-red-light to-red px-4 py-2.5 text-sm font-medium text-paper transition-all hover:from-red hover:to-red-dark"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 border border-paper-dim/40 px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
