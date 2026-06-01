import Link from "next/link";
import ShipInterior from "../../../components/ShipInterior";
import { ships } from "../../../data/ships";

export function generateStaticParams() {
  return ships.map((ship) => ({ id: ship.id }));
}

export default function ShipDetailPage({ params }: { params: { id: string } }) {
  const ship = ships.find((item) => item.id === params.id);

  if (!ship) {
    return (
      <main className="min-h-screen bg-[#040713] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Nave não encontrada</p>
          <h1 className="mt-4 text-4xl font-black">Oops, esta nave não existe.</h1>
          <p className="mt-4 text-slate-400">Tente voltar ao catálogo para escolher outra embarcação.</p>
          <Link href="/ships" className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-200">
            Voltar para catálogo
          </Link>
        </div>
      </main>
    );
  }

  return <ShipInterior ship={ship} />;
}
