import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ: Is Rectify Really Free?",
  description:
    "Is Rectify really free? What is the catch, how does licensing work, how do updates work, and what support looks like. Straight answers, no hedging.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <h1 className="font-serif text-4xl md:text-5xl">
        Frequently asked questions
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Straight answers to the questions everyone asks first.
      </p>
      <div className="mt-12">
        <FaqAccordion items={faqs} />
      </div>
      <p className="mt-10 text-ink-soft">
        Still not sure about something?{" "}
        <Link
          href="/contact"
          className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
        >
          Ask us directly
        </Link>
        , or{" "}
        <Link
          href="/products"
          className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
        >
          just try the software
        </Link>
        .
      </p>
    </section>
  );
}
