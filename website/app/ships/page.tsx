'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ships } from '../../data/ships';

const tierStyles: Record<string, string> = {
  free: 'border-cyan-400/25 bg-cyan-500/10 text-cyan-100',
  unlock: 'border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-100',
  premium: 'border-amber-400/25 bg-amber-300/10 text-amber-100',
};

function ShipSVG({ color, glowColor }: { color: string; glowColor: string }) {
  return (
    <div className="relative mx-auto h-32 w-32 overflow-visible">
      <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: glowColor }} />
      <svg viewBox="0 0 160 160" className="relative h-full w-full">
        <defs>
          <linearGradient id="shipGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.75" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="55" fill="url(#shipGlow)" />
        <path
          d="M80 22L98 76L118 88L98 104L80 154L62 104L42 88L62 76Z"
          fill={color}
          stroke="white"
          strokeWidth="2"
          opacity="0.95"
        />
        <path d="M80 34L96 80L112 88L96 96L80 146L64 96L48 88L64 80Z" fill="#0f172a" opacity="0.35" />
        <circle cx="80" cy="95" r="8" fill="#e2e8f0" opacity="0.85" />
      </svg>
    </div>
  );
}

export default function ShipsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#050a14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Sistema de Naves</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Naves do universo LookSpace
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Explore o arsenal de naves com tiers de unlock, estatísticas de velocidade, alcance, escudo e energia — tudo com estilo futurista e animações suaves.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Voltar para o início
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {ships.map((ship) => (
            <motion.article
              key={ship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{ship.class}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{ship.name}</h2>
                </div>
                <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${tierStyles[ship.tier]}`}>
                  {ship.tier}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <ShipSVG color={ship.color} glowColor={ship.glowColor} />
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300">{ship.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Velocidade</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.speed}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Alcance</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.range}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Escudo</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.shield}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Energia</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.energy}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Raridade</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.rarity}</p>
                </div>
              </div>

              {ship.unlockLevel ? (
                <p className="mt-4 text-xs text-slate-400">
                  Desbloqueia no nível <span className="font-semibold text-slate-100">{ship.unlockLevel}</span>
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/ships/${ship.id}`}
                  className="rounded-full bg-cyan-400/15 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/25"
                >
                  Detalhes
                </Link>
                <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-fuchsia-400 hover:text-fuchsia-200">
                  Selecionar nave
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
