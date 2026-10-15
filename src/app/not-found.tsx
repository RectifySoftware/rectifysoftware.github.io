import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { downloadHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "That page doesn't exist. Here's where to go instead.",
  robots: { index: false },
};

const suggestions = [
  { href: "/products", label: "Products" },
  { href: "/jabre", label: "Rectify Jabre" },
  { href: "/faq", label: "FAQ" },
  { href: "/changelog", label: "Changelog" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24">
      <Image
        src="/logo-mark.png"
        alt=""
        width={56}
        height={56}
        className="rounded-full"
      />
      <p className="mt-8 text-sm font-medium uppercase tracking-wide text-red">
        Error 404
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">
        That page doesn&rsquo;t exist.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        The link might be old, or mistyped. Nothing here is behind a paywall,
        so it isn&rsquo;t that either. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
        >
          Back to the home page
        </Link>
        <Link
          href={downloadHref("jabre")}
          className="border border-ink px-6 py-3 text-sm font-medium text-ink transition-all hover:border-red hover:bg-gradient-to-b hover:from-red-light hover:to-red-dark hover:text-paper"
        >
          Download Rectify Jabre
        </Link>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {suggestions.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
