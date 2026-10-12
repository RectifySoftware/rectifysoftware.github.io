import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders a GitHub release body (or hand-written changelog copy) as
 * markdown, styled to sit quietly inside a changelog entry rather than
 * compete with the page's own headings.
 */
export function ReleaseNotes({ body }: { body: string }) {
  return (
    <div className="max-w-2xl space-y-2 text-ink-soft [&>*:first-child]:mt-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="leading-relaxed">{children}</p>
          ),
          h1: ({ children }) => (
            <p className="mt-4 font-medium text-ink">{children}</p>
          ),
          h2: ({ children }) => (
            <p className="mt-4 font-medium text-ink">{children}</p>
          ),
          h3: ({ children }) => (
            <p className="mt-4 font-medium text-ink">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc space-y-1.5 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-1.5 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="font-medium text-ink">{children}</strong>
          ),
          em: ({ children }) => <em>{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-red underline decoration-line underline-offset-4 hover:text-red-dark"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded-sm bg-paper-dim px-1 py-0.5 font-mono text-sm text-ink">
              {children}
            </code>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
