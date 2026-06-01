import Link from 'next/link';
import type { Metadata } from 'next';
import { ships } from '../../data/ships';

export const metadata: Metadata = {
  title: 'Ships - LookSpace',
  description: 'Cinematic ship prototypes and descriptions',
};

export default function ShipsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-space-950 text-white">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Ships</h1>
          <Link href="/" className="text-sm text-slate-300 hover:text-white">
            Back home
          </Link>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ships.map((ship) => (
            <article key={ship.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{ship.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{ship.description}</p>
              <p className="mt-3 text-xs text-slate-400">Role: {ship.role ?? 'Unknown'}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
