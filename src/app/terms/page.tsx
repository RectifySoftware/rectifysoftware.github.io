import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { ISSUES_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using the Rectify website and software: free to use, provided as is, with no warranty. Plain-language and short.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      path="/terms"
      intro="By using this website or downloading our software, you agree to these terms. They're short on purpose."
    >
      <LegalSection title="What you're getting">
        <p>
          Rectify software is free to download and use, for personal or
          business purposes, with no fee, trial period, or per-seat charge.
          If a product&rsquo;s source repository includes its own license
          file, that license also applies to the source code and takes
          priority over anything here about the code itself.
        </p>
      </LegalSection>

      <LegalSection title="Provided as is">
        <p>
          The software and this website are provided &ldquo;as is&rdquo;,
          without warranties of any kind, whether express or implied. That
          includes fitness for a particular purpose, accuracy, and
          uninterrupted or error-free operation.
        </p>
        <p>
          Rectify Jabre is a training and workflow tool. It does not connect
          to any real airline reservation system and never books, holds, or
          issues a real ticket. Fares shown from live providers are
          indicative only. Don&rsquo;t rely on any output as a quote or
          travel document.
        </p>
      </LegalSection>

      <LegalSection title="Limit of liability">
        <p>
          To the extent the law allows, Rectify isn&rsquo;t liable for any
          indirect or consequential loss, lost profit, or lost data arising
          from your use of the software or website. Nothing in these terms
          limits liability that can&rsquo;t legally be limited.
        </p>
      </LegalSection>

      <LegalSection title="Your responsibilities">
        <p>
          Use the software lawfully and in line with our{" "}
          <Link href="/acceptable-use">acceptable use policy</Link>. You are
          responsible for your own backups and for any third-party API keys
          you add and the charges they incur.
        </p>
      </LegalSection>

      <LegalSection title="Names and trademarks">
        <p>
          Rectify and the Rectify logo belong to us. Sabre, Amadeus,
          Bloomberg, and other third-party names are the property of their
          owners. We use them only to describe the kind of workflow our
          software is modeled on, and we are not affiliated with or endorsed
          by them.
        </p>
      </LegalSection>

      <LegalSection title="Changes and ending access">
        <p>
          We may update the software, these terms, or stop offering a product.
          We&rsquo;ll update the date above when terms change. Continued use
          after a change means you accept it.
        </p>
      </LegalSection>

      <LegalSection title="Questions">
        <p>
          Ask on our <a href={ISSUES_URL}>GitHub issues page</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
