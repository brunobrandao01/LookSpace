'use client';

import { motion } from 'framer-motion';

const starFields = [
  { top: '12%', left: '18%', size: 1.5, opacity: 0.8 },
  { top: '24%', left: '72%', size: 1.2, opacity: 0.75 },
  { top: '42%', left: '44%', size: 2, opacity: 0.7 },
  { top: '68%', left: '20%', size: 1.1, opacity: 0.6 },
  { top: '78%', left: '82%', size: 1.4, opacity: 0.65 },
  { top: '54%', left: '12%', size: 1.8, opacity: 0.5 },
];

export default function SpaceCanvas() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,116,244,0.14),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.08),transparent_15%),linear-gradient(180deg,rgba(7,12,34,0.95),rgba(0,0,0,0.85))]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_40%)]" />

      {starFields.map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: star.opacity, scale: 1 }}
          transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 8}px rgba(14, 203, 255, ${star.opacity})`,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.18 }}
        animate={{ opacity: [0.18, 0.22, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at center, rgba(14, 116, 244, 0.08), transparent 40%)' }}
      />
    </div>
  );
}
