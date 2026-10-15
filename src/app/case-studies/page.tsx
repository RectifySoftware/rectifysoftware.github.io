import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { jabreExampleFlow } from "@/lib/products";
import { downloadHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Rectify Jabre is used, with a worked booking example. Customer case studies will be published here once real teams have used it.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Breadcrumbs items={[{ label: "Case studies" }]} />
      <h1 className="font-serif text-4xl md:text-5xl">Case studies</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        We don&rsquo;t have any yet, and we&rsquo;d rather say so than invent
        some. Rectify Jabre is new, and customer stories will go here once
        real teams have used it and agreed to be named.
      </p>

      <div className="mt-14">
        <h2 className="font-serif text-2xl text-ink">
          What a booking looks like in practice
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Until then, here is a worked example of the workflow Jabre is built
          for. An agent searches Chicago to New York, sells a seat, names the
          passenger, prices it, saves the record, and prints the itinerary.
          Six commands, no mouse.
        </p>
        <div className="mt-6 overflow-x-auto border border-line-dark bg-charcoal-2 font-mono text-sm text-paper">
          {jabreExampleFlow.map((line) => (
            <div
              key={line.command}
              className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line-dark px-5 py-3 last:border-b-0"
            >
              <span className="text-red-light">{line.command}</span>
              <span className="text-paper-dim/70">{line.note}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Every command is documented on the{" "}
          <Link
            href="/jabre"
            className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
          >
            Rectify Jabre page
          </Link>
          .
        </p>
      </div>

      <div className="mt-14 border-l-2 border-red pl-4">
        <h2 className="font-serif text-2xl text-ink">Using Rectify at work?</h2>
        <p className="mt-2 leading-relaxed text-ink-soft">
          If your team uses Jabre and you&rsquo;re happy to talk about it,{" "}
          <Link
            href="/contact"
            className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
          >
            tell us how it&rsquo;s going
          </Link>
          . Or{" "}
          <Link
            href={downloadHref("jabre")}
            className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
          >
            download it
          </Link>{" "}
          and be the first.
        </p>
      </div>
    </section>
  );
}
