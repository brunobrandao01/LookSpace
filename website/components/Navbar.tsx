"use client";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <span className="text-xl font-bold tracking-widest text-white">LOOKSPACE</span>
      <div className="flex gap-6 text-sm text-slate-300">
        <a href="#" className="hover:text-white transition-colors">Universe</a>
        <a href="#" className="hover:text-white transition-colors">Roadmap</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
      </div>
    </nav>
  );
}
