"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ships } from "../data/ships";

type GameState = "intro" | "logo" | "menu" | "shipselect" | "launch";

const SpaceCanvas = dynamic(() => import("../components/SpaceCanvas"), { ssr: false });

export default function Home() {
  const [state, setState] = useState<GameState>("intro");
  const [selectedShip, setSelectedShip] = useState(ships[0]);
  const [shipIndex, setShipIndex] = useState(0);

  // Sequência cinematográfica automática
  useEffect(() => {
    const t1 = setTimeout(() => setState("logo"), 800);
    const t2 = setTimeout(() => setState("menu"), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Retorna ao menu após a animação de lançamento
  useEffect(() => {
    if (state !== "launch") return;
    const timer = setTimeout(() => setState("menu"), 3200);
    return () => clearTimeout(timer);
  }, [state]);

  const freeShips = ships.filter((s) => s.tier === "free");

  const handleShipNav = (dir: number) => {
    const newIndex = (shipIndex + dir + freeShips.length) % freeShips.length;
    setShipIndex(newIndex);
    setSelectedShip(freeShips[newIndex]);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#000005] font-mono">
      {/* Espaço 3D sempre presente */}
      <SpaceCanvas />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10" />

      {/* FASE 1 — Tela preta inicial */}
      <AnimatePresence>
        {state === "intro" && (
          <motion.div
            key="intro"
            className="absolute inset-0 bg-black z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
              className="text-slate-500 text-xs tracking-[0.5em] uppercase"
            >
              Bruno Brandão Productions
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FASE 2 — Logo cinematográfico */}
      <AnimatePresence>
        {state === "logo" && (
          <motion.div
            key="logo"
            className="absolute inset-0 z-40 flex flex-col items-center justify-center"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8"
              />
              <h1 className="text-7xl lg:text-9xl font-black tracking-[0.2em] text-white">
                LOOK<span className="text-cyan-400">SPACE</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-slate-400 tracking-[0.6em] text-xs mt-4 uppercase"
              >
                O Universo Aguarda
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-8"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FASE 3 — Menu principal */}
      <AnimatePresence>
        {(state === "menu" || state === "shipselect") && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-20 flex flex-col"
          >
            {/* HUD topo */}
            <div className="flex items-center justify-between px-8 py-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white font-black tracking-[0.3em] text-lg">
                  LOOK<span className="text-cyan-400">SPACE</span>
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-6 text-xs text-slate-500 tracking-widest"
              >
                <Link href="/ships" className="hover:text-cyan-400 transition-colors">
                  NAVES
                </Link>
                <Link href="/roadmap" className="hover:text-cyan-400 transition-colors">
                  ROADMAP
                </Link>
              </motion.div>
            </div>

            {/* Conteúdo central */}
            <div className="flex-1 flex">
              {/* Menu lateral esquerdo */}
              <AnimatePresence mode="wait">
                {state === "menu" && (
                  <motion.div
                    key="mainmenu"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center pl-8 lg:pl-16 gap-2 w-72"
                  >
                    <p className="text-cyan-400 text-xs tracking-[0.4em] mb-6 uppercase">Menu Principal</p>

                    {[
                      { label: "NOVA EXPLORAÇÃO", action: () => setState("shipselect"), primary: true },
                      { label: "CONTINUAR", action: () => {}, primary: false },
                      { label: "GARAGEM DE NAVES", action: () => {}, primary: false },
                      { label: "MAPA GALÁCTICO", action: () => {}, primary: false },
                      { label: "CONFIGURAÇÕES", action: () => {}, primary: false },
                    ].map((item, i) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        onClick={item.action}
                        className={`text-left px-5 py-3 rounded-xl text-sm tracking-widest transition-all border ${
                          item.primary
                            ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30"
                            : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {item.primary && <span className="mr-2">▶</span>}
                        {item.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {/* Seleção de nave */}
                {state === "shipselect" && (
                  <motion.div
                    key="shipselect"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center pl-8 lg:pl-16 w-80"
                  >
                    <button
                      onClick={() => setState("menu")}
                      className="text-slate-500 text-xs tracking-widest hover:text-white transition-colors mb-6 text-left"
                    >
                      ← VOLTAR
                    </button>
                    <p className="text-cyan-400 text-xs tracking-[0.4em] mb-4 uppercase">Escolhe a Nave</p>

                    {/* Nave em destaque */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedShip.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 mb-4"
                      >
                        {/* SVG da nave */}
                        <div
                          className="flex items-center justify-center h-28 mb-3 rounded-xl"
                          style={{ background: `radial-gradient(ellipse, ${selectedShip.glowColor} 0%, transparent 70%)` }}
                        >
                          <MiniShipSVG ship={selectedShip} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{selectedShip.name}</h3>
                        <p className="text-xs text-slate-500 tracking-widest uppercase mt-0.5">{selectedShip.class}</p>
                        <p className="text-xs text-slate-400 mt-2 leading-5">{selectedShip.description}</p>
                        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/5">
                          <div className="text-center">
                            <p className="text-xs text-slate-600">VEL.</p>
                            <p className="text-xs font-bold" style={{ color: selectedShip.color }}>
                              {selectedShip.speed}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-slate-600">ALCANCE</p>
                            <p className="text-xs font-bold text-slate-300">{selectedShip.range}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-slate-600">ESCUDO</p>
                            <p className="text-xs font-bold text-slate-300">{selectedShip.shield}</p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navegação entre naves */}
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={() => handleShipNav(-1)}
                        className="flex-1 py-2 border border-white/10 rounded-xl text-slate-400 hover:border-white/30 hover:text-white transition-all text-sm"
                      >
                        ← ANTERIOR
                      </button>
                      <span className="text-xs text-slate-600">
                        {shipIndex + 1}/{freeShips.length}
                      </span>
                      <button
                        onClick={() => handleShipNav(1)}
                        className="flex-1 py-2 border border-white/10 rounded-xl text-slate-400 hover:border-white/30 hover:text-white transition-all text-sm"
                      >
                        PRÓXIMA →
                      </button>
                    </div>

                    <button
                      onClick={() => setState("launch")}
                      className="w-full py-3 rounded-xl font-bold text-sm tracking-widest transition-all"
                      style={{ background: `${selectedShip.color}33`, border: `1px solid ${selectedShip.color}66`, color: selectedShip.color }}
                    >
                      ▶ LANÇAR MISSÃO
                    </button>

                    <Link
                      href="/ships"
                      className="block text-center mt-3 text-xs text-slate-600 hover:text-cyan-400 transition-colors tracking-widest"
                    >
                      VER TODAS AS 10 NAVES →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Área central — info da nave selecionada */}
              {state === "menu" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex-1 flex flex-col items-center justify-center text-center pointer-events-none"
                >
                  <p className="text-cyan-400 text-xs tracking-[0.6em] mb-3 uppercase">Simulação Espacial Cinematográfica</p>
                  <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
                    Explora o
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                      Universo
                    </span>
                  </h2>
                  <p className="mt-4 text-slate-500 text-sm max-w-md leading-relaxed">
                    Viaja por planetas, galáxias e nebulosas.
                    <br />A experiência espacial de nova geração.
                  </p>
                </motion.div>
              )}
            </div>

            {/* HUD fundo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-between items-end px-8 py-5 text-xs text-slate-600 tracking-widest"
            >
              <span>SISTEMA SOLAR ATIVO // 5 PLANETAS</span>
              <span className="text-cyan-800">● LOOKSPACE ALPHA v0.1</span>
              <span>NAVE: {selectedShip.name.toUpperCase()}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FASE 4 — Animação de lançamento */}
      <AnimatePresence>
        {state === "launch" && (
          <motion.div
            key="launch"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{ duration: 3, times: [0, 0.1, 0.8, 1] }}
              className="absolute inset-0 bg-black origin-bottom"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, times: [0.1, 0.2, 0.8, 1] }}
              className="relative z-10 text-center"
            >
              <p className="text-xs tracking-[0.5em] mb-4" style={{ color: selectedShip.color }}>
                INICIANDO MISSÃO
              </p>
              <h2 className="text-4xl font-black text-white tracking-widest">{selectedShip.name}</h2>
              <p className="text-slate-500 text-xs mt-2 tracking-widest">{selectedShip.class.toUpperCase()}</p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-px mt-6"
                style={{ background: `linear-gradient(to right, transparent, ${selectedShip.color}, transparent)` }}
              />
              <p className="text-slate-600 text-xs mt-4 tracking-widest">MOTORES DE DOBRA ATIVADOS</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function MiniShipSVG({ ship }: { ship: { id: string; color: string } }) {
  const c = ship.color;
  const designs: Record<string, JSX.Element> = {
    "aurora-i": (
      <svg width="100" height="70" viewBox="0 0 160 100">
        <polygon points="80,10 120,80 80,65 40,80" fill={c} opacity="0.95" />
        <ellipse cx="80" cy="68" rx="18" ry="5" fill={c} opacity="0.3" />
        <line x1="80" y1="70" x2="80" y2="95" stroke={c} strokeWidth="2" opacity="0.6" />
      </svg>
    ),
    "vega-scout": (
      <svg width="100" height="70" viewBox="0 0 160 100">
        <polygon points="80,5 145,75 115,65 80,75 45,65 15,75" fill={c} opacity="0.9" />
        <rect x="72" y="75" width="16" height="18" rx="4" fill={c} opacity="0.5" />
      </svg>
    ),
    "helios-mk1": (
      <svg width="120" height="70" viewBox="0 0 180 100">
        <ellipse cx="90" cy="55" rx="70" ry="22" fill={c} opacity="0.8" />
        <polygon points="90,10 115,55 90,48 65,55" fill={c} opacity="0.95" />
        <ellipse cx="40" cy="58" rx="12" ry="5" fill={c} opacity="0.5" />
        <ellipse cx="140" cy="58" rx="12" ry="5" fill={c} opacity="0.5" />
      </svg>
    ),
    "drift": (
      <svg width="100" height="70" viewBox="0 0 160 100">
        <ellipse cx="80" cy="55" rx="55" ry="18" fill={c} opacity="0.7" />
        <ellipse cx="80" cy="45" rx="25" ry="30" fill={c} opacity="0.85" />
        <ellipse cx="80" cy="42" rx="12" ry="12" fill="white" opacity="0.2" />
      </svg>
    ),
  };
  return designs[ship.id] || designs["aurora-i"];
}
