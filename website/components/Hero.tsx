'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200"
        >
          <span className="h-3 w-3 rounded-full bg-cyan-400" />
          AAA cinematic prototype launch
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl"
        >
          LookSpace — the cinematic Earth-in-space prototype for the next generation of immersive space simulations.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="max-w-2xl text-base leading-7 text-slate-300"
        >
          Experience a futuristic interface, volumetric atmosphere, deep-space vistas, and a polished AAA landing page built for Vercel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#prototype"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Explore Prototype
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-200"
          >
            View Roadmap
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/5 p-6 shadow-glow"
      >
        <div className="absolute inset-x-0 top-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 opacity-75" />
        <div className="hero-planet relative mx-auto mt-8 flex h-[340px] w-[340px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/5 shadow-[0_0_120px_rgba(79,118,255,0.12)]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="absolute left-[18%] top-[24%] h-8 w-8 rounded-full bg-cyan-300/80 blur-xl" />
          <div className="absolute right-[18%] top-[30%] h-6 w-6 rounded-full bg-fuchsia-300/70 blur-xl" />
          <div className="absolute bottom-[16%] left-[12%] h-5 w-5 rounded-full bg-white/80 blur-md" />
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute bottom-[6%] right-[18%] h-20 w-20 rounded-full border border-cyan-300/15" />
        </div>
        <div className="mt-10 grid gap-4 text-sm text-slate-300">
          <div className="flex items-center justify-between rounded-3xl bg-white/5 px-5 py-4">
            <span>Atmosphere + Clouds</span>
            <span className="text-cyan-300">Realtime</span>
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-white/5 px-5 py-4">
            <span>Dynamic Space Lighting</span>
            <span className="text-fuchsia-300">Lumen</span>
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-white/5 px-5 py-4">
            <span>Cinematic Ships</span>
            <span className="text-indigo-300">Prototype</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
