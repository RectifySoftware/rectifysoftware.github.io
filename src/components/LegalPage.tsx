import { Breadcrumbs } from "./Breadcrumbs";
import { LEGAL_UPDATED } from "@/lib/site";

export function LegalPage({
  title,
  path,
  intro,
  children,
}: {
  title: string;
  path: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20" data-path={path}>
      <Breadcrumbs items={[{ label: title }]} />
      <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-ink-soft">Last updated {LEGAL_UPDATED}</p>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>
      <div className="mt-10 space-y-10">{children}</div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft [&_a]:text-red [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
