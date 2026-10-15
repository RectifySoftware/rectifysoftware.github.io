import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ISSUES_URL, RESPONSE_TIME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Questions, bug reports, or feedback for Rectify. Open an issue on GitHub and we aim to reply within ${RESPONSE_TIME}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <h1 className="font-serif text-4xl md:text-5xl">Contact</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Questions, bug reports, or just want to say something didn&rsquo;t
        work? The quickest way to reach us is a GitHub issue.
      </p>
      <div className="mt-8">
        <a
          href={ISSUES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
        >
          Open an issue on GitHub
        </a>
      </div>
      <p className="mt-8 border-l-2 border-red pl-4 text-ink-soft">
        <span className="font-medium text-ink">
          We aim to reply within {RESPONSE_TIME}.
        </span>{" "}
        We&rsquo;re a small team, so that&rsquo;s a target rather than a
        contract. The{" "}
        <Link
          href="/sla"
          className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
        >
          support page
        </Link>{" "}
        explains what to expect.
      </p>
      <p className="mt-6 text-sm text-ink-soft">
        Issues on GitHub are public, so please don&rsquo;t include personal
        details, passwords, or API keys. See the{" "}
        <Link
          href="/privacy"
          className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
        >
          privacy policy
        </Link>
        .
      </p>
    </section>
  );
}
