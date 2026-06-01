"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PWAInstall from "../components/PWAInstall";
import SolarSystem from "../components/SolarSystem";
import { ships } from "../data/ships";

const SpaceCanvas = dynamic(() => import("../components/SpaceCanvas"), { ssr: false });

const planetDetails = {
  sol: {
    title: "Sol",
    subtitle: "Fonte de energia cósmica",
    description:
      "O núcleo pulsante do sistema. Brilha com força suficiente para manter todos os mundos em órbita e alimentar a próxima geração de naves.",
    status: "Estável",
  },
  earth: {
    title: "Terra",
    subtitle: "Mãe da humanidade",
    description:
      "Planeta azul com atmosferas vivas e rotas de exploração ativas. A base de operações do projeto LookSpace.",
    status: "Habitat ativo",
  },
  mars: {
    title: "Marte",
    subtitle: "Colônia vermelha",
    description:
      "Planeta de estações avançadas e pesquisas sobre o próximo salto de propulsão quântica.",
    status: "Missões em andamento",
  },
  jupiter: {
    title: "Júpiter",
    subtitle: "Gigante gasoso",
    description:
      "Porta de entrada para regiões profundas do sistema, com tempestades elétricas e anéis com materiais rarefeitos.",
    status: "Radar ativo",
  },
  saturn: {
    title: "Saturno",
    subtitle: "Anéis energizados",
    description:
      "Um espetáculo de luz e partículas, criado por sua magnetosfera gigantesca e potencial de mineração de asteroides.",
    status: "Navegação calibrada",
  },
};

const statusWidgets = [
  { label: "Coordenadas", value: "12.7x - 4.1z - 92.0y" },
  { label: "Energia da Nave", value: "86%" },
  { label: "XP do Explorador", value: "Nível 14" },
  { label: "Radar", value: "Operacional" },
];

export default function Home() {
  const [activePlanet, setActivePlanet] = useState("earth");
  const [selectedShip] = useState(ships[0]);
  const [introPhase, setIntroPhase] = useState<"boot" | "logo" | "activate" | "ready">("boot");
  const [showIntro, setShowIntro] = useState(true);
  const currentPlanet = planetDetails[activePlanet as keyof typeof planetDetails] ?? planetDetails.earth;
  const freeShips = useMemo(() => ships.filter((ship) => ship.tier === "free"), []);

  useEffect(() => {
    const bootTimer = setTimeout(() => setIntroPhase("logo"), 800);
    const logoTimer = setTimeout(() => setIntroPhase("activate"), 2400);
    const readyTimer = setTimeout(() => {
      setIntroPhase("ready");
      setShowIntro(false);
    }, 4200);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(logoTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040713] text-white">
      <SpaceCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(192,38,211,0.12),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,12,0.18),rgba(0,0,0,0.88))] pointer-events-none" />

      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            className="absolute inset-0 z-50 flex min-h-screen flex-col items-center justify-center gap-8 bg-[#02020f]/95 px-6 text-center"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Iniciando comando de bordo</p>
              <h1 className="mt-6 text-5xl font-black uppercase tracking-[-0.03em] text-white sm:text-6xl">
                LOOKSPACE
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Carregando HUD cinematográfico, alinhando propulsão e preparando a instalação Web App.
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/15 bg-white/5 shadow-[0_0_80px_rgba(56,189,248,0.18)]"
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/20 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-[#020717]/80 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                <div className="h-20 w-20 rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-300/50 to-transparent" />
              </div>
            </motion.div>

            <div className="w-full max-w-xl text-left text-sm text-slate-300">
              <p className={`uppercase tracking-[0.35em] ${introPhase === "boot" ? "text-cyan-300" : introPhase === "logo" ? "text-violet-300" : "text-fuchsia-300"}`}>
                {introPhase === "boot"
                  ? "Inicializando sequência de entrada"
                  : introPhase === "logo"
                  ? "Ativando identidade LookSpace"
                  : "Sincronizando rede quântica"}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-cyan-400"
                  initial={{ width: "10%" }}
                  animate={{ width: introPhase === "boot" ? "35%" : introPhase === "logo" ? "70%" : "100%" }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 py-5 lg:px-12">
        <Navbar />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.65)]" />
              Modo de exploração alfa
            </div>

            <h1 className="mt-8 text-5xl font-black tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
              Desperte o piloto. <span className="text-cyan-300">O universo</span> já está em movimento.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              LookSpace combina estilo cinematográfico, HUD futurista, sistema solar animado e um catálogo de naves ultra-tecnológicas. Explore, selecione e entre para a experiência espacial premium.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/ships"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explorar Naves
              </Link>
              <a
                href="/#sistema-solar"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Sistema Solar
              </a>
              <a
                href="/#exploracao"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-fuchsia-400 hover:text-fuchsia-200"
              >
                Lançar missão
              </a>
            </div>
            <div className="mt-4">
              <PWAInstall />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Radar de proximidade</p>
                <p className="mt-4 text-3xl font-semibold text-white">{currentPlanet.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{currentPlanet.subtitle}</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Status do sistema</p>
                <p className="mt-4 text-3xl font-semibold text-white">{currentPlanet.status}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{currentPlanet.description}</p>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="rounded-[38px] border border-white/10 bg-slate-950/80 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Nave ativa</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">{selectedShip.name}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-cyan-200">
                  {selectedShip.tier.toUpperCase()}
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {statusWidgets.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/ships"
                  className="flex-1 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Navegar catálogo
                </Link>
                <button className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-fuchsia-400 hover:text-fuchsia-200">
                  Enviar scout
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Chamadas rápidas</p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-200">Missão atual</p>
                  <p className="mt-3 text-sm font-semibold text-white">Operação Nebula</p>
                </div>
                <div className="rounded-3xl border border-fuchsia-400/10 bg-fuchsia-400/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200">Zona de voo</p>
                  <p className="mt-3 text-sm font-semibold text-white">Setor A7</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="sistema-solar" className="mt-20">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Sistema Solar</p>
              <h2 className="mt-3 text-4xl font-black text-white">Órbitas ativadas e missões em progressão</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Selecione um planeta para ver os dados em tempo real e sentir a profundidade do universo explorável.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.35em] text-slate-300">
              Conexão AI: 97.3%
            </div>
          </div>

          <SolarSystem
            active={activePlanet}
            onHover={(planet) => setActivePlanet(planet ?? "earth")}
            onSelect={(planet) => setActivePlanet(planet)}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Object.entries(planetDetails).map(([planetKey, planet]) => (
              <div
                key={planetKey}
                className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{planet.title}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{planet.subtitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{planet.description}</p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-cyan-300">Status</p>
                <p className="mt-2 text-sm font-semibold text-white">{planet.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="exploracao" className="mt-20 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Experiência viva</p>
              <h2 className="mt-4 text-3xl font-black text-white">Painel de exploração imersivo</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Sistema de HUD, radar falso, efeitos de energia pulsante e animações suaves fazem da home um verdadeiro menu inicial de jogo espacial.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">HUD Futurista</p>
                  <p className="mt-3 text-sm text-slate-300">Quadrantes de status, coordenadas e nível do piloto.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Parallax e profundidade</p>
                  <p className="mt-3 text-sm text-slate-300">Nebulosas, partículas e camadas visuais com movimento sutil.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Painel de missão</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl bg-[#06121f]/80 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Meta</p>
                  <p className="mt-3 text-lg font-semibold text-white">Capturar dados do anel de Saturno</p>
                </div>
                <div className="rounded-3xl bg-[#08131d]/80 p-5">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Tempo estimado</p>
                  <p className="mt-3 text-lg font-semibold text-white">4h 32m</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mt-20 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Roadmap</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Atualizações futuras</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Cockpit interativo</li>
              <li>• Sistema de progressão</li>
              <li>• Viagens hiperespaciais</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Mapa</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Exploração ativa</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">A primeira versão já traz uma sensação de jogo real, com universo vivo e interface sci-fi.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Status</p>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-[#06121f]/80 p-4">HUD interativo pronto</div>
              <div className="rounded-3xl bg-[#06121f]/80 p-4">Sistema Solar animado</div>
              <div className="rounded-3xl bg-[#06121f]/80 p-4">Naves futuristas atualizadas</div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
