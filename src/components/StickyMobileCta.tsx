"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { downloadHref } from "@/lib/site";

const HIDDEN_ON = ["/contact", "/thank-you"];

export function StickyMobileCta() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line-dark bg-charcoal/95 px-4 py-3 backdrop-blur md:hidden">
      <Link
        href={downloadHref("jabre")}
        className="flex-1 bg-gradient-to-b from-red-light to-red px-4 py-3 text-center text-sm font-medium text-paper"
      >
        Download Rectify Jabre
      </Link>
      <Link
        href="/contact"
        className="border border-paper-dim/40 px-4 py-3 text-center text-sm font-medium text-paper"
      >
        Contact
      </Link>
    </div>
  );
}
