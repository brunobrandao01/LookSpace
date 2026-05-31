"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ships } from "../../data/ships";

const tierLabel: Record<string, string> = {
  free: "GRÁTIS",
  unlock: "POR NÍVEL",
  premium: "PREMIUM",
};

const tierStyle: Record<string, string> = {
  free: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  unlock: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  premium: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
};

export default function ShipsPage() {
  return (
    <main className="min-h-screen bg-[#03050f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0a0f2e_0%,_#03050f_60%)] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 border-b border-white/5">
        <Link href="/" className="text-white font-bold tracking-[0.3em]">
          LOOK<span className="text-cyan-400">SPACE</span>
        </Link>
        <div className="flex gap-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Início</Link>
          <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
          <span className="text-cyan-400">Naves</span>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs tracking-[0.5em] mb-3 uppercase">Frota LookSpace</p>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
            As suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Naves</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            10 naves futuristas para explorar o universo. Das gratuitas às lendárias — cada uma com personalidade única.
          </p>

          {/* Filtros */}
          <div className="flex justify-center gap-3 mt-8">
            {["Todas", "Grátis", "Por Nível", "Premium"].map((f) => (
              <button
                key={f}
                className="px-5 py-2 text-xs tracking-widest border border-white/10 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all text-slate-400"
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de naves */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ships.map((ship, i) => (
            <motion.div
              key={ship.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer group"
              style={{ boxShadow: `0 0 0 0 ${ship.glowColor}` }}
            >
              {/* Nave 3D simulada com CSS */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: `radial-gradient(ellipse at center, ${ship.glowColor} 0%, transparent 70%)` }}
              >
                <ShipSVG color={ship.color} id={ship.id} />
                {ship.tier === "premium" && (
                  <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-white/10 text-white/60 border border-white/20">
                    ✦ LENDÁRIA
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{ship.name}</h3>
                    <p className="text-xs text-slate-500 tracking-widest uppercase mt-0.5">{ship.class}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${tierStyle[ship.tier]}`}>
                    {ship.tier === "unlock" ? `NÍV. ${ship.unlockLevel}` : tierLabel[ship.tier]}
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-6 mt-3">{ship.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5">
                  <div className="text-center">
                    <p className="text-xs text-slate-600 mb-1">VELOCIDADE</p>
                    <p className="text-xs font-bold" style={{ color: ship.color }}>{ship.speed}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-600 mb-1">ALCANCE</p>
                    <p className="text-xs font-bold text-slate-300">{ship.range}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-600 mb-1">ESCUDO</p>
                    <p className="text-xs font-bold text-slate-300">{ship.shield}</p>
                  </div>
                </div>

                <button
                  className="mt-4 w-full py-2 rounded-xl text-xs tracking-widest font-bold transition-all"
                  style={{
                    background: ship.tier === "free" ? `${ship.color}22` : "transparent",
                    border: `1px solid ${ship.color}44`,
                    color: ship.color,
                  }}
                >
                  {ship.tier === "free" ? "SELECIONAR NAVE" : ship.tier === "premium" ? "ADQUIRIR NAVE" : `DESBLOQUEAR NÍV. ${ship.unlockLevel}`}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ShipSVG({ color, id }: { color: string; id: string }) {
  const designs: Record<string, JSX.Element> = {
    "aurora-i": (
      <svg width="160" height="100" viewBox="0 0 160 100">
        <polygon points="80,10 120,80 80,65 40,80" fill={color} opacity="0.9"/>
        <polygon points="80,10 120,80 80,65" fill="white" opacity="0.15"/>
        <ellipse cx="80" cy="68" rx="18" ry="5" fill={color} opacity="0.4"/>
        <line x1="80" y1="70" x2="80" y2="95" stroke={color} strokeWidth="2" opacity="0.6"/>
      </svg>
    ),
    "vega-scout": (
      <svg width="160" height="100" viewBox="0 0 160 100">
        <polygon points="80,5 145,75 115,65 80,75 45,65 15,75" fill={color} opacity="0.85"/>
        <polygon points="80,5 115,65 80,55 45,65" fill="white" opacity="0.1"/>
        <rect x="72" y="75" width="16" height="18" rx="4" fill={color} opacity="0.5"/>
      </svg>
    ),
    "helios-mk1": (
      <svg width="180" height="100" viewBox="0 0 180 100">
        <ellipse cx="90" cy="55" rx="70" ry="22" fill={color} opacity="0.8"/>
        <polygon points="90,10 115,55 90,48 65,55" fill={color} opacity="0.95"/>
        <ellipse cx="90" cy="55" rx="20" ry="8" fill="white" opacity="0.15"/>
        <ellipse cx="40" cy="58" rx="12" ry="5" fill={color} opacity="0.5"/>
        <ellipse cx="140" cy="58" rx="12" ry="5" fill={color} opacity="0.5"/>
      </svg>
    ),
    "drift": (
      <svg width="160" height="100" viewBox="0 0 160 100">
        <ellipse cx="80" cy="55" rx="55" ry="18" fill={color} opacity="0.7"/>
        <ellipse cx="80" cy="45" rx="25" ry="30" fill={color} opacity="0.85"/>
        <ellipse cx="80" cy="42" rx="12" ry="12" fill="white" opacity="0.2"/>
        <ellipse cx="80" cy="65" rx="40" ry="8" fill={color} opacity="0.25"/>
      </svg>
    ),
    "orion-blade": (
      <svg width="160" height="110" viewBox="0 0 160 110">
        <polygon points="80,5 95,70 80,60 65,70" fill={color} opacity="0.95"/>
        <polygon points="80,5 160,80 95,60" fill={color} opacity="0.5"/>
        <polygon points="80,5 0,80 65,60" fill={color} opacity="0.5"/>
        <ellipse cx="80" cy="65" rx="12" ry="5" fill="white" opacity="0.3"/>
        <line x1="80" y1="65" x2="80" y2="100" stroke={color} strokeWidth="3" opacity="0.7"/>
      </svg>
    ),
    "nebula-wraith": (
      <svg width="160" height="100" viewBox="0 0 160 100">
        <polygon points="80,8 100,60 80,52 60,60" fill={color} opacity="0.9"/>
        <polygon points="60,40 20,75 60,60" fill={color} opacity="0.6"/>
        <polygon points="100,40 140,75 100,60" fill={color} opacity="0.6"/>
        <ellipse cx="80" cy="55" rx="10" ry="4" fill="white" opacity="0.4"/>
        <ellipse cx="80" cy="80" rx="30" ry="6" fill={color} opacity="0.15"/>
      </svg>
    ),
    "titan-ark": (
      <svg width="200" height="100" viewBox="0 0 200 100">
        <rect x="30" y="35" width="140" height="35" rx="8" fill={color} opacity="0.8"/>
        <polygon points="100,8 130,35 70,35" fill={color} opacity="0.9"/>
        <rect x="20" y="45" width="25" height="15" rx="4" fill={color} opacity="0.6"/>
        <rect x="155" y="45" width="25" height="15" rx="4" fill={color} opacity="0.6"/>
        <ellipse cx="100" cy="70" rx="50" ry="8" fill={color} opacity="0.2"/>
        <rect x="85" y="35" width="30" height="10" rx="3" fill="white" opacity="0.15"/>
      </svg>
    ),
    "seraph-x": (
      <svg width="160" height="110" viewBox="0 0 160 110">
        <polygon points="80,5 92,65 80,58 68,65" fill={color} opacity="1"/>
        <polygon points="80,20 155,60 92,55" fill={color} opacity="0.7"/>
        <polygon points="80,20 5,60 68,55" fill={color} opacity="0.7"/>
        <polygon points="80,30 130,90 92,65 68,65 30,90" fill={color} opacity="0.4"/>
        <ellipse cx="80" cy="60" rx="10" ry="4" fill="white" opacity="0.8"/>
        <line x1="80" y1="64" x2="80" y2="105" stroke={color} strokeWidth="2.5"/>
      </svg>
    ),
    "void-empress": (
      <svg width="180" height="110" viewBox="0 0 180 110">
        <ellipse cx="90" cy="55" rx="75" ry="25" fill={color} opacity="0.7"/>
        <polygon points="90,8 108,55 90,48 72,55" fill={color} opacity="1"/>
        <ellipse cx="90" cy="50" rx="22" ry="30" fill={color} opacity="0.5"/>
        <ellipse cx="90" cy="55" rx="75" ry="10" fill="white" opacity="0.06"/>
        <ellipse cx="90" cy="48" rx="10" ry="10" fill="white" opacity="0.3"/>
        <line x1="90" y1="78" x2="90" y2="105" stroke={color} strokeWidth="3" opacity="0.8"/>
      </svg>
    ),
    "genesis-prime": (
      <svg width="200" height="120" viewBox="0 0 200 120">
        <ellipse cx="100" cy="65" rx="85" ry="30" fill={color} opacity="0.15"/>
        <polygon points="100,8 118,70 100,60 82,70" fill={color} opacity="1"/>
        <polygon points="100,8 185,65 118,60" fill={color} opacity="0.6"/>
        <polygon points="100,8 15,65 82,60" fill={color} opacity="0.6"/>
        <ellipse cx="100" cy="62" rx="85" ry="18" fill="none" stroke={color} strokeWidth="1" opacity="0.4"/>
        <ellipse cx="100" cy="60" rx="14" ry="14" fill="white" opacity="0.9"/>
        <ellipse cx="100" cy="60" rx="7" ry="7" fill={color} opacity="1"/>
        <line x1="100" y1="75" x2="100" y2="112" stroke={color} strokeWidth="3"/>
      </svg>
    ),
  };

  return designs[id] || (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <polygon points="80,10 120,80 80,65 40,80" fill={color} opacity="0.9"/>
    </svg>
  );
}
