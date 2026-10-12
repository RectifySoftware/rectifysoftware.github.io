import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rectify is a small software studio, not a vendor. Here's who builds it and why our enterprise-grade tools are free, no catch.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl md:text-5xl">About Rectify</h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
        <p>
          Rectify is a small software studio, not a vendor and definitely not
          a venture-funded startup with a pricing page waiting to happen.
          It's a small team building the kind of internal business software
          most companies pay a lot of money for, and giving it away instead.
        </p>
        <p>
          The first release is Rectify Jabre, a GDS-style travel booking
          terminal. The kind of thing that usually comes bundled with an
          enterprise sales cycle, a per-agent license, and a support
          contract. Ours skips all three. You download it, it works, and it
          updates itself.
        </p>

        <h2 className="pt-4 font-serif text-2xl text-ink">
          So what's the catch?
        </h2>
        <p>
          There isn't one, and we know how that sounds. Nothing in the app
          phones home to sell you an upgrade. There's no paid tier waiting
          behind a locked feature. We aren't collecting your data to sell it
          later either. Everything the app needs, it stores locally, on your
          own machine.
        </p>
        <p>
          The honest answer to "why free" is that building software we're
          proud of and letting it speak for itself sounded a lot better than
          running a sales team. Enterprise software gets expensive because
          of everything wrapped around it: the demos, the seat licenses, the
          annual contracts. The software itself rarely costs that much to
          build well. So we just cut the sales motion out.
        </p>
        <p>
          It's also why it's still just a handful of us, and why we'd rather
          ship one product done properly than ten done halfway. Jabre gets
          real version releases and auto-update from day one, the same as
          anything you'd pay for, because it should hold up like something
          you paid for even though you didn't.
        </p>
        <p>
          If any of this ever changes, if we start charging, or selling
          data, or adding some catch we haven't thought of yet, we'd rather
          you heard it from us directly than found it buried in a changelog.
          For now, it's free because we want it to be, and we're planning to
          keep it that way.
        </p>
      </div>
    </section>
  );
}
