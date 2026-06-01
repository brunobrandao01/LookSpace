"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Universo', href: '/#universo' },
  { label: 'Sistema Solar', href: '/#sistema-solar' },
  { label: 'Exploração', href: '/#exploracao' },
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'Naves', href: '/ships' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="relative z-20 flex flex-col gap-5 border-b border-white/10 pb-5 text-sm text-slate-300 lg:flex-row lg:items-center lg:justify-between"
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

      <div className="flex flex-wrap items-center gap-4 lg:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
