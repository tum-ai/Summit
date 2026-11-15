import Link from "next/link";
import { copy } from "@/content/copy";

const f = copy.footer;

export default function Footer() {
  return (
    <footer data-scene="ink" className="px-[var(--gutter)] pb-10 pt-28 text-sm text-stone">
      <div className="grid gap-14 border-t border-paper/10 pt-12 md:grid-cols-[1fr_1fr_1.4fr]">
        <div>
          <p className="font-medium text-paper">{copy.nav.wordmark}</p>
          <ul className="mt-6 space-y-2">
            {f.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-paper">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="caps !text-[10px]">Sources</h2>
          <ul className="mt-6 space-y-2 leading-relaxed">
            {f.sources.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="caps !text-[10px]">Media</h2>
          <ul className="mt-6 space-y-2 leading-relaxed">
            {f.credits.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between gap-4 text-xs">
        <span>© {new Date().getFullYear()} TUM.ai</span>
        <span className="flex gap-6">
          {f.legal.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-paper">{l.label}</Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
