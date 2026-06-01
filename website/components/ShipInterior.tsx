"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Ship } from "../data/ships";

export default function ShipInterior({ ship }: { ship: Ship }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040713] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(192,38,211,0.10),transparent_28%)]" />
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <Link href="/ships" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-cyan-300 transition hover:text-white">
          ← Todas as naves
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <section className="rounded-[40px] border border-white/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{ship.rarity} • {ship.tier.toUpperCase()}</p>
                <h1 className="mt-3 text-4xl font-black text-white">{ship.name}</h1>
                <p className="mt-2 text-sm text-slate-300">{ship.class}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                {ship.unlockLevel ? `Desbloqueio Nível ${ship.unlockLevel}` : "Disponível agora"}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#07101f]/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Velocidade</p>
                <p className="mt-3 text-2xl font-semibold text-white">{ship.speed}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#07101f]/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Alcance</p>
                <p className="mt-3 text-2xl font-semibold text-white">{ship.range}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#07101f]/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Escudo</p>
                <p className="mt-2 text-sm font-semibold text-white">{ship.shield}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#07101f]/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Energia</p>
                <p className="mt-2 text-sm font-semibold text-white">{ship.energy}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#07101f]/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Raridade</p>
                <p className="mt-2 text-sm font-semibold text-white">{ship.rarity}</p>
              </div>
            </div>

            <div className="mt-10 rounded-[36px] border border-white/10 bg-[#081524]/90 p-6">
              <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Cockpit holográfico</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Interior futurista</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Painéis com iluminação neon, vidro de controle e um HUD pronto para missões de alta velocidade.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Visão do cockpit</p>
                  <p className="mt-2 text-lg font-semibold text-white">Ativo</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-[#0b1724]/90 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Nível de tripulação</p>
                  <p className="mt-3 text-xl font-semibold text-white">Sênior</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-[#0b1724]/90 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Painéis ativos</p>
                  <p className="mt-3 text-xl font-semibold text-white">8/8</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Painel de controle</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-[#09131f]/90 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Escudo</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.shield}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#09131f]/90 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Energia</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.energy}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#09131f]/90 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Velocidade</p>
                  <p className="mt-2 text-sm font-semibold text-white">{ship.speed}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Descrição</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{ship.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Embarcar
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-fuchsia-400 hover:text-fuchsia-200">
                Explorar
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
