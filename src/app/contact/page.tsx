import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rectify: questions, bug reports, or anything else. hello@rectify.getanchor.site.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl md:text-5xl">Contact</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Questions, bug reports, or just want to say something didn&rsquo;t
        work? Reach us directly.
      </p>
      <p className="mt-4">
        <a
          href="mailto:hello@rectify.getanchor.site"
          className="font-serif text-2xl text-red hover:underline"
        >
          hello@rectify.getanchor.site
        </a>
      </p>

      <div className="mt-14 border-t border-line pt-14">
        <h2 className="font-serif text-2xl text-ink">Or send a message</h2>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
