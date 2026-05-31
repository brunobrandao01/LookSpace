"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link
        href="/"
        className="text-xl font-bold tracking-widest text-white hover:text-cyan-400 transition-colors"
      >
        LOOKSPACE
      </Link>

      <div className="flex gap-6 text-sm text-slate-300">
        <Link
          href="/#universo"
          className="hover:text-white transition-colors"
        >
          Universo
        </Link>

        <Link
          href="/ships"
          className="hover:text-cyan-400 transition-colors"
        >
          Naves
        </Link>

        <Link
          href="/roadmap"
          className="hover:text-cyan-400 transition-colors"
        >
          Roadmap
        </Link>

        <Link
          href="/#sobre"
          className="hover:text-white transition-colors"
        >
          Sobre
        </Link>
      </div>
    </nav>
  );
}
