"use client";

import { motion } from "framer-motion";

const planets = [
  {
    id: "earth",
    label: "Terra",
    orbit: 130,
    size: 18,
    color: "#4dd5ff",
    glow: "rgba(77,213,255,0.45)",
  },
  {
    id: "mars",
    label: "Marte",
    orbit: 190,
    size: 14,
    color: "#fb7185",
    glow: "rgba(251,113,133,0.45)",
  },
  {
    id: "jupiter",
    label: "Júpiter",
    orbit: 250,
    size: 24,
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.45)",
  },
  {
    id: "saturn",
    label: "Saturno",
    orbit: 310,
    size: 20,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.45)",
  },
];

type SolarSystemProps = {
  active: string;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
};

export default function SolarSystem({ active, onHover, onSelect }: SolarSystemProps) {
  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-[1400px] items-center justify-center overflow-hidden rounded-[48px] border border-white/10 bg-slate-950/40 p-6 shadow-glow backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(252,211,77,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

      {planets.map((planet, index) => (
        <motion.div
          key={planet.id}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28 + index * 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            style={{ width: planet.orbit * 2, height: planet.orbit * 2 }}
          />

          <button
            type="button"
            onMouseEnter={() => onHover(planet.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onSelect(planet.id)}
            className={`absolute top-1/2 -translate-y-1/2 rounded-full transition duration-200 focus:outline-none ${
              active === planet.id ? "ring-2 ring-cyan-400/60" : ""
            }`}
            style={{
              left: `${planet.orbit}px`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              background: planet.color,
              boxShadow: `0 0 22px ${planet.glow}`,
            }}
            aria-label={planet.label}
          />
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#fedf7d] via-[#ffb600] to-transparent shadow-[0_0_120px_rgba(255,173,0,0.35)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#060a13]/90 border border-white/10">
        <span className="text-xs uppercase tracking-[0.35em] text-slate-300">Sol</span>
      </div>
    </div>
  );
}
