"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';
import Footer from '../components/Footer';

const roadmap = [
  { title: 'World-building', description: 'Design the first Earth-in-space sequence and environment assets.' },
  { title: 'Cinematic systems', description: 'Implement camera rigs, lighting passes, and sequencer shots.' },
  { title: 'Gameplay layering', description: 'Add spaceship controls, orbit visualization and free-flight prototype.' },
  { title: 'Rendering polish', description: 'Tune Lumen, Nanite, volumetrics, and cinematic post-process.' },
];

const universe = [
  { title: 'Earth Atmosphere', description: 'Volumetric skies, cloud depth, and planet chemistry.' },
  { title: 'Deep Space', description: 'Layered nebulae, starfields, and cinematic cosmic lighting.' },
  { title: 'Spaceship Prototype', description: 'Modular ship forms, engine trails and reflective hull surfaces.' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-space-950 text-white">
      <div className="absolute inset-0 bg-space-radial opacity-75" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
        <Navbar />
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative z-10 flex flex-1 flex-col justify-center py-10"
          >
            <Hero />
            <div className="grid gap-6 pt-16 lg:grid-cols-3">
              {roadmap.map((item) => (
                <SectionCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
            <section className="mt-20 grid gap-8 lg:grid-cols-3">
              {universe.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -10 }}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-cyan-200">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </section>
          </motion.section>
        </AnimatePresence>
        <Footer />
      </div>
    </main>
  );
}
