import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-gradient-to-b from-charcoal to-charcoal-2 text-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-14">
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
            <div>
              <p className="mb-3 font-medium text-paper">Site</p>
              <ul className="space-y-2 text-paper-dim/80">
                <li>
                  <Link href="/products" className="hover:text-red">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-red">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-red">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-medium text-paper">More</p>
              <ul className="space-y-2 text-paper-dim/80">
                <li>
                  <Link href="/changelog" className="hover:text-red">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-red">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-medium text-paper">Contact</p>
              <ul className="space-y-2 text-paper-dim/80">
                <li>
                  <a
                    href="mailto:hello@rectify.getanchor.site"
                    className="hover:text-red"
                  >
                    hello@rectify.getanchor.site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-line-dark pt-6 text-xs text-paper-dim/60">
          &copy; {new Date().getFullYear()} Rectify. Software studio, not a
          vendor.
        </div>
      </div>
    </footer>
  );
}
