import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { ISSUES_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "What you can and can't do with the Rectify website and software, including the limits on misuse and abuse.",
  alternates: { canonical: "/acceptable-use" },
};

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      path="/acceptable-use"
      intro="Rectify is free, which makes it easy to abuse. This is what we ask you not to do."
    >
      <LegalSection title="Don't">
        <ul>
          <li>
            Use the software to defraud anyone, including presenting its
            simulated bookings or itineraries as real tickets or confirmed
            reservations.
          </li>
          <li>
            Attack, probe, or overload this website or the infrastructure that serves our downloads.
          </li>
          <li>
            Post spam, malware, or abusive or unlawful content in our GitHub
            repositories or issues.
          </li>
          <li>
            Redistribute modified installers while implying they come from
            us, or bundle our software with malware.
          </li>
          <li>
            Use a third-party service key you don&rsquo;t own, or break the
            rules of the providers the software connects to.
          </li>
          <li>Use our name or logo to suggest an endorsement we haven&rsquo;t given.</li>
        </ul>
      </LegalSection>

      <LegalSection title="What happens if you do">
        <p>
          We may remove content, block access to the website or repositories,
          and report unlawful activity to the relevant authorities. Because
          the software runs on your own machine, we can&rsquo;t switch it off,
          but these rules still apply to how you use it.
        </p>
      </LegalSection>

      <LegalSection title="Reporting abuse">
        <p>
          If you think someone is misusing Rectify software or impersonating
          us, open an issue on our <a href={ISSUES_URL}>GitHub issues page</a> (without personal details).
          This policy sits alongside our <Link href="/terms">terms</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
