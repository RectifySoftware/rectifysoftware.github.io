import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { ISSUES_URL } from "@/lib/site";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Rectify collects on this website and in its software, why, who processes it, how cookies work, and how to ask us to delete data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      intro="Short version: the software keeps your data on your own machine, and this website collects very little. Here's the detail."
    >
      <LegalSection title="Who we are">
        <p>
          Rectify is a small software studio. In this policy,
          &ldquo;we&rdquo; and &ldquo;us&rdquo; mean Rectify. The best way to
          reach us is through our{" "}
          <a href={ISSUES_URL}>GitHub issues page</a>.
        </p>
      </LegalSection>

      <LegalSection title="This website">
        <p>When you use this site, we may collect:</p>
        <ul>
          <li>
            <strong>Analytics, only if you accept cookies.</strong> Google
            Analytics records anonymised usage such as pages viewed,
            approximate location, and device type, so we can see what&rsquo;s
            useful.
          </li>
          <li>
            <strong>Server logs.</strong> Our hosting provider, Vercel,
            records standard request data such as IP address and user agent
            for security and reliability.
          </li>
        </ul>
        <p>
          We don&rsquo;t sell your information, and we don&rsquo;t use it for
          advertising. The website has no accounts and no forms.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          The site itself needs no cookies. Google Analytics sets cookies, but
          only after you press Accept on the cookie banner. If you decline,
          nothing from Google loads. We remember your choice in your
          browser&rsquo;s local storage so we don&rsquo;t keep asking.
        </p>
        <p>
          Changed your mind? <CookieSettingsButton className="text-red underline decoration-line underline-offset-4 hover:text-red-dark" /> reopens the banner. If
          you&rsquo;ve already accepted, you can also clear this site&rsquo;s
          cookies in your browser settings.
        </p>
      </LegalSection>

      <LegalSection title="The software">
        <p>
          Rectify Jabre stores bookings, agent profiles, and settings in a
          local file on your computer. We don&rsquo;t receive that data. The
          app does make a few network requests:
        </p>
        <ul>
          <li>
            Checks for new versions through GitHub, which can see your IP
            address as with any download.
          </li>
          <li>
            Exchange rates from the Frankfurter API, when you change display
            currency.
          </li>
          <li>
            Flight searches through SearchAPI.io or Apify, only if you add
            your own API keys. Those providers receive the search details and
            are governed by their own policies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Who else handles your data">
        <ul>
          <li>Vercel (website hosting)</li>
          <li>Google (analytics, only if you accept cookies)</li>
          <li>GitHub (hosting installers, releases, and issues)</li>
          <li>Buy Me a Coffee (only if you follow the support link)</li>
        </ul>
        <p>
          Some of these are based outside your country, so your data may be
          transferred internationally. See our{" "}
          <Link href="/data-protection">data protection statement</Link> for
          more.
        </p>
      </LegalSection>

      <LegalSection title="GitHub issues are public">
        <p>
          If you contact us through GitHub, what you write is public and
          governed by GitHub&rsquo;s own privacy policy. Don&rsquo;t include
          personal details, passwords, or API keys. If you need to raise
          something private, say so in the issue without the detail and we
          will work out another way.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep things">
        <p>
          Analytics data is kept according to the retention setting in our
          Google Analytics account. We don&rsquo;t otherwise store personal
          information from this site.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live, you may be able to ask us for a copy of
          the personal information we hold about you, to correct it, or to
          delete it. Open an issue and we&rsquo;ll deal with it. If you&rsquo;re
          not happy with our response, you can complain to your local privacy
          regulator.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If we change this policy in a way that matters, we&rsquo;ll update
          the date at the top and say what changed.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
