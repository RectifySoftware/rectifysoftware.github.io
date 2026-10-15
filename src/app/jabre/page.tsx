import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getProduct,
  resolveProduct,
  jabreCommands,
  jabreFunctionKeys,
  jabreDemoProfiles,
  jabreExampleFlow,
} from "@/lib/products";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { downloadHref, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Rectify Jabre: Free GDS-Style Booking Terminal" },
  description:
    "Rectify Jabre is a free GDS-style travel booking terminal for Windows. Availability search, PNRs, fare pricing, PDF itineraries, auto-update. No licensing fees.",
  alternates: { canonical: "/jabre" },
};

export default async function JabrePage() {
  const jabre = await resolveProduct(getProduct("jabre")!);
  if (jabre.status !== "available") return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rectify Jabre",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    softwareVersion: jabre.latestVersion,
    description: jabre.description,
    url: `${SITE_URL}/jabre`,
    downloadUrl: jabre.downloadUrl,
    fileSize: jabre.downloadSize,
    publisher: { "@type": "Organization", name: "Rectify", url: SITE_URL },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <JsonLd data={schema} />
      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-charcoal-2 to-charcoal text-paper">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Breadcrumbs
            dark
            items={[{ label: "Products", href: "/products" }, { label: "Rectify Jabre" }]}
          />
          <p className="text-sm font-medium uppercase tracking-wide text-red">
            Rectify product &middot; v{jabre.latestVersion}
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">
            Rectify <span className="italic text-red">Jabre</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-dim/90">
            {jabre.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={downloadHref(jabre.slug)}
              className="bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
            >
              Download for Windows ({jabre.downloadSize})
            </a>
            <a
              href={jabre.repoUrl}
              className="border border-paper-dim/40 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              View source on GitHub
            </a>
          </div>
          <p className="mt-4 text-xs text-paper-dim/60">
            Unsigned NSIS installer for Windows. Windows SmartScreen may warn
            on first run since the binary isn&rsquo;t code-signed. That&rsquo;s
            normal for a small, independently-built installer, not a sign
            anything is wrong.
          </p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-hidden border border-line bg-charcoal">
          <Image
            src={jabre.screenshot}
            alt={jabre.screenshotAlt}
            width={1456}
            height={640}
            className="w-full"
          />
        </div>
      </section>

      {/* What / who */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-3xl text-ink">What it is</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            Jabre is a Windows desktop reservation terminal modeled on the
            command-line workflow of real GDS platforms like Sabre Red 360
            and Amadeus Selling Platform. You type commands into a workspace:
            search availability, sell a segment, add a passenger, price the
            itinerary, then end the transaction to generate a record locator.
            It&rsquo;s the same workflow a travel agent runs every day,
            without the GDS contract behind it.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            <span className="font-medium text-ink">Built for: </span>
            {jabre.audience}
          </p>
        </div>
      </section>

      {/* Command reference */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-ink">Command set</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          Type commands into the entry field at the bottom of the terminal
          (or press F3 to focus it). All commands are case-insensitive.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-paper-dim text-left">
                <th className="px-4 py-3 font-medium text-ink">Command</th>
                <th className="px-4 py-3 font-medium text-ink">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {jabreCommands.map((row, i) => (
                <tr
                  key={row.command}
                  className={i % 2 === 1 ? "bg-paper-dim/50" : undefined}
                >
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-red">
                    {row.command}
                  </td>
                  <td className="px-4 py-3 text-ink-soft">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Example flow */}
      <section className="border-t border-line bg-gradient-to-b from-charcoal-2 to-charcoal text-paper">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-3xl">Example booking flow</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-paper-dim/90">
            Search, sell, name, price, and finalize a booking in six lines.
          </p>
          <div className="mt-8 overflow-x-auto border border-line-dark bg-charcoal-2 font-mono text-sm">
            {jabreExampleFlow.map((line) => (
              <div
                key={line.command}
                className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line-dark px-5 py-3 last:border-b-0"
              >
                <span className="text-red">{line.command}</span>
                <span className="text-paper-dim/70">{line.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Function keys */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-ink">Function keys</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
          {jabreFunctionKeys.map((row) => (
            <div key={row.key} className="flex items-baseline gap-3">
              <span className="w-10 shrink-0 font-mono text-sm font-medium text-red">
                {row.key}
              </span>
              <span className="text-sm text-ink-soft">{row.action}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Live data */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-3xl text-ink">
            Live airline data (optional)
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            By default, availability searches run against a built-in
            synthetic schedule. It covers roughly 140 IATA airport codes
            worldwide, and flight time, aircraft, and fare all scale from
            great-circle distance, so any recognized city pair comes back
            with a plausible result instead of an error.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Want real carriers, real flight numbers, real fares instead?
            Connect one or both providers under{" "}
            <span className="font-medium text-ink">
              Tools &rsaquo; Live Data Settings
            </span>
            .
          </p>
          <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 text-ink-soft">
            <li>
              <span className="font-medium text-ink">SearchAPI.io</span>{" "}
              (tried first). Mirrors live Google Flights results. Free tier
              gives you 100 requests total, no card required.
            </li>
            <li>
              <span className="font-medium text-ink">Apify</span> (kicks in
              once SearchAPI&rsquo;s free requests run out, or if it&rsquo;s
              the only one you&rsquo;ve set up). A multi-source
              fare-scraping actor running at roughly $0.0003 per search,
              pay-per-use.
            </li>
          </ul>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Results are always labeled so you know what you&rsquo;re
            looking at:{" "}
            <span className="font-mono text-sm text-red">
              [LIVE - REAL AIRLINE DATA]
            </span>
            ,{" "}
            <span className="font-mono text-sm text-red">
              [SIMULATED - NO LIVE FARE FOUND]
            </span>
            , or{" "}
            <span className="font-mono text-sm text-red">[MOCK DATA]</span>.
            Live results get cached locally for 24 hours per route, date,
            and currency, which stretches your free quota a lot further.
            Nothing in the app ever actually books, holds, or purchases a
            real flight.
          </p>
        </div>
      </section>

      {/* Currency */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-ink">Currency</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
          Fares are priced internally in USD and converted on the fly
          whenever you switch display currency. Click the{" "}
          <span className="font-mono text-sm text-red">CUR:</span> indicator
          in the status bar, use{" "}
          <span className="font-medium text-ink">
            Tools &rsaquo; Change Currency
          </span>
          , press F11, or type{" "}
          <span className="font-mono text-sm text-red">CC&lt;CODE&gt;</span>{" "}
          (say <span className="font-mono text-sm text-red">CCEUR</span>).
          Every switch pulls live mid-market rates from the free Frankfurter
          API (European Central Bank reference rates, no key required), and
          those rates are cached locally so the app still works offline,
          marked <span className="font-mono text-sm text-red">(CACHED)</span>{" "}
          when it&rsquo;s using them.
        </p>
      </section>

      {/* Data persistence */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-3xl text-ink">
            Data persistence &amp; privacy
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            Agent profiles, PNRs, API settings, and the 24-hour live-fare
            cache all live in a local JSON file inside Electron&rsquo;s
            per-user data directory. Bookings survive closing and reopening
            the app, and nothing leaves your machine except the optional
            live-fare and currency lookups you explicitly turn on. Read the{" "}
            <Link href="/privacy" className="text-red underline decoration-line underline-offset-4 hover:text-red-dark">
              privacy policy
            </Link>{" "}
            for the full detail.
          </p>
        </div>
      </section>

      {/* Try it / demo profiles */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-ink">Try it</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
          After installing, sign on with either demo profile below to poke
          around the terminal against the built-in synthetic dataset. No
          live API keys needed.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-paper-dim text-left">
                <th className="px-4 py-3 font-medium text-ink">Agent ID</th>
                <th className="px-4 py-3 font-medium text-ink">Password</th>
                <th className="px-4 py-3 font-medium text-ink">Duty code</th>
                <th className="px-4 py-3 font-medium text-ink">PCC</th>
              </tr>
            </thead>
            <tbody>
              {jabreDemoProfiles.map((row, i) => (
                <tr
                  key={row.agentId}
                  className={i % 2 === 1 ? "bg-paper-dim/50" : undefined}
                >
                  <td className="px-4 py-3 font-mono text-red">
                    {row.agentId}
                  </td>
                  <td className="px-4 py-3 font-mono text-ink-soft">
                    {row.password}
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{row.duty}</td>
                  <td className="px-4 py-3 font-mono text-ink-soft">
                    {row.pcc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Updates */}
      <section className="border-t border-line bg-gradient-to-b from-charcoal-2 to-charcoal text-paper">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-3xl">Auto-update</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-paper-dim/90">
            Jabre ships with auto-update wired in from day one, same as
            software you&rsquo;d pay for. When a new version goes out, the
            app checks for it and prompts you to install. No manual
            reinstall, no chasing down a new download link every time.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={downloadHref(jabre.slug)}
              className="bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
            >
              Download v{jabre.latestVersion} ({jabre.downloadSize})
            </a>
            <Link
              href="/changelog"
              className="border border-paper-dim/40 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Full changelog
            </Link>
            <Link
              href="/faq"
              className="border border-paper-dim/40 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Questions? Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
