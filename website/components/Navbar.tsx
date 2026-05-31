'use client';

import { motion } from 'framer-motion';

const navItems = ['Universe', 'Roadmap', 'Prototype', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative z-20 flex items-center justify-between border-b border-white/10 pb-4 text-sm text-slate-300"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-lg font-bold text-black shadow-glow">
          L
        </div>
        <div>
          <p className="font-semibold text-white">LookSpace</p>
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Cinematic Universe</p>
        </div>
      </div>
      <div className="hidden items-center gap-8 lg:flex">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
