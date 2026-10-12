import type { Metadata } from "next";
import { resolveProducts } from "@/lib/products";
import { ReleaseNotes } from "@/components/ReleaseNotes";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Version history and release notes for Rectify products, including Rectify Jabre.",
};

export default async function ChangelogPage() {
  const products = (await resolveProducts()).filter(
    (product) => product.status === "available"
  );

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl md:text-5xl">What&rsquo;s new</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Real version releases, per product, newest first.
      </p>

      <div className="mt-16 space-y-16">
        {products.map((product) => (
          <div key={product.slug}>
            <h2 className="font-serif text-2xl text-ink">
              Rectify <span className="italic text-red">{product.name}</span>
            </h2>
            <div className="mt-6 space-y-10 border-l border-line pl-6">
              {product.changelog.map((entry) => (
                <div key={entry.version} className="relative">
                  <div className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-red" />
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-serif text-lg text-ink">
                      v{entry.version}
                    </span>
                    <span className="text-sm text-ink-soft">
                      {entry.date}
                    </span>
                  </div>
                  <div className="mt-2">
                    <ReleaseNotes body={entry.body} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
