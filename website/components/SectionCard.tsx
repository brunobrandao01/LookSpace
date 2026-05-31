'use client';

import { motion } from 'framer-motion';

interface SectionCardProps {
  title: string;
  description: string;
}

export default function SectionCard({ title, description }: SectionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
    >
      <h3 className="text-xl font-semibold tracking-wide text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}
