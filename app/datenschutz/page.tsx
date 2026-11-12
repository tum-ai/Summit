import Link from "next/link";

export const metadata = { title: "Datenschutz · TUM.ai SF Summit", robots: { index: false } };

// TODO: legally required content (provided by TUM.ai e.V.)
export default function Page() {
  return (
    <main className="min-h-svh bg-paper px-[var(--gutter)] py-24 text-ink">
      <Link href="/" className="caps text-stone-deep">← TUM.ai SF Summit</Link>
      <h1 className="mt-16 text-5xl font-medium tracking-[-0.03em]">Datenschutz</h1>
      <p className="mt-8 max-w-prose text-stone-deep">[TODO: Datenschutz content]</p>
    </main>
  );
}
