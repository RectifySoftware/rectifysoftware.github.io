import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Is Rectify really free? What's the catch, how does licensing work, and how do updates work. Straight answers, no corporate hedging.",
};

const faqs = [
  {
    question: "Is this really free?",
    answer:
      "Yes. Download it, install it, use it. No trial period, no locked features, no invoice waiting at the end. There's no per-seat pricing and nothing to negotiate with anyone.",
  },
  {
    question: "What's the catch?",
    answer:
      "There isn't one. We're not selling your data, we're not upselling a paid tier later, and nothing in the app phones home to try to convert you. See the About page for the longer version of why we build software this way.",
  },
  {
    question: "What's the license?",
    answer:
      "Free to download and use. We're not asking you to sign anything or talk to anyone first. If you're planning to redistribute or build on top of a specific product, check that product's repository for its exact license terms.",
  },
  {
    question: "How do updates work?",
    answer:
      "Rectify Jabre ships with auto-update built in, same as commercial desktop software. When a new version is published, the app checks for it and prompts you to install. No manual reinstall, no chasing download links.",
  },
  {
    question: "What does support look like?",
    answer:
      "We're a small team, not a call center. Bug reports and questions go through GitHub Issues on the product's repository, or you can reach us directly on the Contact page. We read everything, but response times are those of a small studio, not an enterprise SLA.",
  },
  {
    question: "Will it stay free?",
    answer:
      "That's the plan. If that ever changed, we'd say so plainly and in advance, not bury it in a changelog.",
  },
];

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl md:text-5xl">
        Frequently asked questions
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Straight answers to the questions everyone asks first.
      </p>
      <div className="mt-12">
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
