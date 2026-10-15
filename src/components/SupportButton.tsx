/**
 * A hand-rolled equivalent of the Buy Me a Coffee button widget.
 *
 * Their embed script (cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js)
 * injects its markup via `document.writeln`, which browsers silently ignore
 * once the initial HTML has finished parsing, so it never renders in a
 * React/Next.js app no matter how the script is loaded. This renders the
 * same button directly instead.
 */
export function SupportButton() {
  return (
    <a
      href="https://buymeacoffee.com/rectify"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-lg bg-gradient-to-b from-red-light to-red px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:from-red hover:to-red-dark hover:shadow-xl md:flex"
    >
      <span aria-hidden>&#10084;&#65039;</span>
      Support the project
    </a>
  );
}
