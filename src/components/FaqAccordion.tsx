"use client";

import { useState } from "react";
import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-xl text-ink">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-2xl leading-none text-red transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="max-w-2xl pb-6">
                <p className="leading-relaxed text-ink-soft">{item.answer}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-3 inline-block text-sm text-red underline decoration-line underline-offset-4 hover:text-red-dark"
                  >
                    {item.link.label} &rarr;
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
