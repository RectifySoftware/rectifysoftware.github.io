import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  dark = false,
}: {
  items: Crumb[];
  dark?: boolean;
}) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}` } : {}),
    })),
  };

  const muted = dark ? "text-paper-dim/60" : "text-ink-soft";
  const hover = "hover:text-red";

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <JsonLd data={schema} />
      <ol className={`flex flex-wrap items-center gap-2 ${muted}`}>
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {crumb.href && !last ? (
                <Link href={crumb.href} className={`transition-colors ${hover}`}>
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>
                  {crumb.label}
                </span>
              )}
              {!last && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
