import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { ISSUES_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Protection Statement",
  description:
    "How Rectify protects personal data: what we process, our sub-processors, where data goes, security measures, and how to make a request.",
  alternates: { canonical: "/data-protection" },
};

const processors = [
  { name: "Vercel", purpose: "Website hosting and request logs" },
  { name: "Google Analytics", purpose: "Anonymised website usage statistics, only if you accept cookies" },
  { name: "GitHub", purpose: "Hosting installers, releases, issues, and update checks" },
];

export default function DataProtectionPage() {
  return (
    <LegalPage
      title="Data Protection Statement"
      path="/data-protection"
      intro="This statement sets out how we handle personal data in practice. It supports our privacy policy and is written for people who need more detail."
    >
      <LegalSection title="Our role">
        <p>
          For the limited data this website processes (hosting logs and, with your
          consent, analytics), Rectify decides why and how it is used, so we act
          as the controller. For the desktop
          software, your bookings and settings never reach us. They stay on
          your machine, and you are the controller of anything you put in
          them.
        </p>
      </LegalSection>

      <LegalSection title="What we process">
        <ul>
          <li>Anonymised analytics data, only if you accept cookies.</li>
          <li>Anything you choose to post publicly in a GitHub issue.</li>
          <li>IP address and device details in hosting and analytics logs.</li>
        </ul>
        <p>
          We don&rsquo;t knowingly process special-category data, and the
          website isn&rsquo;t aimed at children.
        </p>
      </LegalSection>

      <LegalSection title="Why we process it">
        <ul>
          <li>To understand which pages are useful (your consent, through the cookie banner).</li>
          <li>
            To keep the site secure and understand how it&rsquo;s used (our
            legitimate interest in running a reliable site).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Service providers we use">
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-paper-dim text-left">
                <th className="px-4 py-3 font-medium text-ink">Provider</th>
                <th className="px-4 py-3 font-medium text-ink">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {processors.map((p) => (
                <tr key={p.name} className="border-b border-line last:border-b-0">
                  <td className="px-4 py-3 text-ink">{p.name}</td>
                  <td className="px-4 py-3">{p.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          These providers may process data outside your country. We rely on
          their own security and transfer safeguards, and we don&rsquo;t
          authorise them to use the data for their own marketing.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          The website is served over HTTPS, access to our inbox and hosting
          accounts is limited to the people who need it, and analytics only
          loads after you consent. No system is perfectly secure. If we learn
          of a breach affecting your personal data, we&rsquo;ll notify you and
          the relevant regulator where the law requires.
        </p>
      </LegalSection>

      <LegalSection title="Making a request">
        <p>
          To access, correct, or delete your data, or to object to how we use
          it, open an issue on our <a href={ISSUES_URL}>GitHub issues page</a>, without
          personal details, and we will arrange a private channel. We aim to
          respond within one month. See also our{" "}
          <Link href="/privacy">privacy policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
