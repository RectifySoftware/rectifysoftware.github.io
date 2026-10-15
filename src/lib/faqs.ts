import { RESPONSE_TIME } from "./site";

export type Faq = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const faqs: Faq[] = [
  {
    question: "Is this really free?",
    answer:
      "Yes. Download it, install it, use it. No trial period, no locked features, no invoice waiting at the end. There's no per-seat pricing and nothing to negotiate with anyone.",
    link: { href: "/products", label: "See the products" },
  },
  {
    question: "What's the catch?",
    answer:
      "There isn't one. We're not selling your data, we're not upselling a paid tier later, and nothing in the app phones home to try to convert you. The About page has the longer version of why we build software this way.",
    link: { href: "/about", label: "Read why it's free" },
  },
  {
    question: "What's the license?",
    answer:
      "Free to download and use. We're not asking you to sign anything or talk to anyone first. If you're planning to redistribute or build on top of a specific product, check that product's repository for its exact license terms.",
    link: { href: "/terms", label: "Terms of use" },
  },
  {
    question: "How do updates work?",
    answer:
      "Rectify Jabre ships with auto-update built in, same as commercial desktop software. When a new version is published, the app checks for it and prompts you to install. No manual reinstall, no chasing download links.",
    link: { href: "/changelog", label: "See the changelog" },
  },
  {
    question: "What does support look like?",
    answer: `We're a small team, not a call center. Bug reports and questions go through GitHub Issues on the product's repository, where we aim to reply within ${RESPONSE_TIME}, but there's no guaranteed service level because the software is free.`,
    link: { href: "/sla", label: "Support and service levels" },
  },
  {
    question: "Does Rectify Jabre collect my data?",
    answer:
      "No. Bookings, agent profiles, and settings are stored in a local file on your own machine. The only network calls the app makes are the optional live-fare and currency lookups you turn on yourself, plus the check for new versions.",
    link: { href: "/privacy", label: "Privacy policy" },
  },
  {
    question: "Will it stay free?",
    answer:
      "That's the plan. If that ever changed, we'd say so plainly and in advance, not bury it in a changelog.",
    link: { href: "/contact", label: "Ask us anything" },
  },
];
