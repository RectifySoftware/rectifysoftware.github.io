import Link from "next/link";
import { Logo } from "./Logo";
import { downloadHref } from "@/lib/site";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/changelog", label: "Changelog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={downloadHref("jabre")}
          className="hidden shrink-0 border border-ink px-4 py-2 text-sm font-medium text-ink transition-all hover:border-red hover:bg-gradient-to-b hover:from-red-light hover:to-red-dark hover:text-paper md:inline-block"
        >
          Get Rectify Jabre
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="list-none cursor-pointer border border-ink px-3 py-1.5 text-sm text-ink">
        Menu
      </summary>
      <div className="absolute right-0 top-11 flex w-48 flex-col border border-line bg-paper py-2 shadow-lg">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm text-ink-soft hover:bg-paper-dim hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
