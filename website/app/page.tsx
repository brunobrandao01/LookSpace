"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const SpaceCanvas = dynamic(() => import("../components/SpaceCanvas"), { ssr: false });

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#000005]">

      {/* Espaço 3D */}
      <SpaceCanvas />

      {/* Overlay escuro gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* HUD — topo */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white font-bold tracking-[0.3em] text-lg">LOOK<span className="text-cyan-400">SPACE</span></span>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-8 text-sm text-slate-300"
        >
          <Link href="/universe" className="hover:text-cyan-400 transition-colors tracking-widest">UNIVERSO</Link>
          <Link href="/roadmap" className="hover:text-cyan-400 transition-colors tracking-widest">ROADMAP</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors tracking-widest">SOBRE</Link>
        </motion.nav>
      </div>

      {/* HUD — centro */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center px-6"
        >
          <p className="text-cyan-400 text-xs tracking-[0.5em] mb-4 uppercase">Simulação Espacial Cinematográfica</p>
          <h1 className="text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
            Explora o<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Universo
            </span>
          </h1>
          <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Uma experiência espacial de nova geração. Viaja por planetas, galáxias e nebulosas em tempo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex gap-4 pointer-events-auto"
        >
          <Link
            href="/universe"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm tracking-widest rounded-full transition-all"
          >
            EXPLORAR
          </Link>
          <Link
            href="/roadmap"
            className="px-8 py-3 border border-white/20 hover:border-cyan-400 text-white text-sm tracking-widest rounded-full transition-all backdrop-blur-sm"
          >
            ROADMAP
          </Link>
        </motion.div>
      </div>

      {/* HUD — fundo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
      >
        <div className="flex gap-12 text-xs text-slate-500 tracking-widest">
          <span>SOL → 1 UA</span>
          <span className="text-cyan-600">● SISTEMA SOLAR ATIVO</span>
          <span>5 PLANETAS EM ÓRBITA</span>
        </div>
      </motion.div>

    </main>
  );
}
