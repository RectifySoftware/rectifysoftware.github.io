import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { ISSUES_URL, RESPONSE_TIME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support and Service Levels",
  description: `What support to expect from Rectify. We aim to reply within ${RESPONSE_TIME}. There is no formal SLA because the software is free.`,
  alternates: { canonical: "/sla" },
};

export default function SlaPage() {
  return (
    <LegalPage
      title="Support and Service Levels"
      path="/sla"
      intro="Rectify software is free, so there is no paid service level agreement. This page says what we aim for, so you know what to expect."
    >
      <LegalSection title="Our targets">
        <ul>
          <li>
            <strong>Enquiries:</strong> we aim to reply within {RESPONSE_TIME}
            , Monday to Friday.
          </li>
          <li>
            <strong>Bug reports:</strong> we read every report on GitHub
            Issues, and fix what we can in a following release.
          </li>
          <li>
            <strong>Website:</strong> hosted on Vercel, with no uptime
            guarantee from us.
          </li>
          <li>
            <strong>Downloads and updates:</strong> served from GitHub
            Releases, with availability governed by GitHub.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="What this is not">
        <p>
          These are targets, not commitments. There are no service credits,
          guaranteed fix times, or guaranteed uptime, and we can&rsquo;t offer
          urgent or out-of-hours support. If you need guarantees for a
          business-critical workflow, keep a fallback process in place.
        </p>
      </LegalSection>

      <LegalSection title="Getting help">
        <ul>
          <li>
            Check the <Link href="/faq">FAQ</Link> and the{" "}
            <Link href="/changelog">changelog</Link> first.
          </li>
          <li>
            Report bugs and ask questions by{" "}
            <a href={ISSUES_URL}>opening an issue on GitHub</a>.
          </li>
          <li>
            Include your Windows version, the app version, and the steps that
            caused the problem.
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
