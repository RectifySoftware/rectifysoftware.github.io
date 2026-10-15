import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProduct, resolveProduct } from "@/lib/products";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/faqs";
import { downloadHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Rectify - Free Enterprise-Grade Business Software" },
  description:
    "Free enterprise software with no licensing fees, no per-seat pricing, and no sales calls. Download Rectify Jabre, a free GDS-style booking terminal for Windows.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const jabre = await resolveProduct(getProduct("jabre")!);
  if (jabre.status !== "available") return null;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-charcoal-2 to-charcoal text-paper">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="max-w-2xl">
            <Image
              src="/logo-mark.png"
              alt="Rectify"
              width={64}
              height={64}
              className="rounded-full"
              priority
            />
            <h1 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
              Enterprise-grade software.
              <br />
              <span className="text-red">Free.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim/90">
              Rectify builds real business software, the kind vendors
              usually gate behind a sales call and a per-seat invoice, and
              gives it away. No license fees, no demos, just download it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={downloadHref("jabre")}
                className="bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
              >
                Download Rectify Jabre, free
              </Link>
              <Link
                href="/products"
                className="border border-paper-dim/40 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                See the products
              </Link>
            </div>
            <p className="mt-6 text-sm text-paper-dim/70">
              Skeptical?{" "}
              <Link
                href="/about"
                className="text-paper underline decoration-paper-dim/40 underline-offset-4 hover:text-red-light"
              >
                Here&rsquo;s why it&rsquo;s free
              </Link>
              , or read the{" "}
              <Link
                href="/faq"
                className="text-paper underline decoration-paper-dim/40 underline-offset-4 hover:text-red-light"
              >
                FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
          <Differentiator
            title="No licensing fees"
            body="Nothing to renew, nothing to negotiate. The software is free the day you download it and free every day after."
          />
          <Differentiator
            title="No per-seat pricing"
            body="Add your whole team. Add every team. The price doesn't change, because there isn't one."
          />
          <Differentiator
            title="No sales calls"
            body="There's no demo to book and no rep to talk to. Download the installer and you're running it in minutes."
          />
        </div>
      </section>

      {/* Featured product */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-wide text-red">
            Featured product
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Rectify <span className="italic text-red">{jabre.name}</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            {jabre.tagline}.
          </p>
          <div className="mt-10 overflow-hidden border border-line bg-charcoal">
            <Image
              src={jabre.screenshot}
              alt={jabre.screenshotAlt}
              width={1456}
              height={640}
              className="w-full"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/jabre"
              className="border border-ink px-6 py-3 text-sm font-medium text-ink transition-all hover:border-red hover:bg-gradient-to-b hover:from-red-light hover:to-red-dark hover:text-paper"
            >
              View Rectify Jabre &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="text-sm text-red underline decoration-line underline-offset-4 hover:text-red-dark"
            >
              See it in use
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Common questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            <Link
              href="/faq"
              className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
            >
              All questions
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
            >
              Ask us something else
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function Differentiator({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="h-px w-10 bg-red" />
      <h3 className="mt-4 font-serif text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
