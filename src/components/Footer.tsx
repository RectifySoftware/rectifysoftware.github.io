import Link from "next/link";
import { Logo } from "./Logo";
import { ISSUES_URL } from "@/lib/site";
import { CookieSettingsButton } from "./CookieSettingsButton";

const columns = [
  {
    title: "Site",
    links: [
      { href: "/products", label: "Products" },
      { href: "/jabre", label: "Rectify Jabre" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/changelog", label: "Changelog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/acceptable-use", label: "Acceptable use" },
      { href: "/sla", label: "Support and SLA" },
      { href: "/data-protection", label: "Data protection" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-gradient-to-b from-charcoal to-charcoal-2 text-paper-dim">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-14 md:pb-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-paper-dim/80">
              A small software studio building enterprise-grade business
              tools and giving them away, free. No licensing fees, no
              per-seat pricing, no sales calls.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 font-medium text-paper">{col.title}</p>
                <ul className="space-y-2 text-paper-dim/80">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-red">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="mb-3 font-medium text-paper">Contact</p>
              <ul className="space-y-2 text-paper-dim/80">
                <li>
                  <a
                    href={ISSUES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red"
                  >
                    Report an issue
                  </a>
                </li>
                <li>
                  <a
                    href="https://buymeacoffee.com/rectify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red"
                  >
                    Support the project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-2 border-t border-line-dark pt-6 text-xs text-paper-dim/60">
          <p>
            &copy; {new Date().getFullYear()} Rectify. Software studio, not a
            vendor.
          </p>
          <p>
            <CookieSettingsButton />
          </p>
          <p>
            Rectify is not affiliated with Sabre, Amadeus, or Bloomberg. Those
            names are used only to describe the kind of workflow our software
            is modeled on.
          </p>
        </div>
      </div>
    </footer>
  );
}
