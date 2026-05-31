'use client';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 pt-10 text-sm text-slate-500">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-white">LookSpace</p>
          <p className="mt-2 max-w-xl text-[13px] leading-6 text-slate-400">
            A cinematic landing page and prototype hub for the next AAA space simulation.
          </p>
        </div>
        <div className="space-x-4">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
      <p className="mt-8 text-xs text-slate-600">© 2026 LookSpace. Built for futuristic cinematic experiences.</p>
    </footer>
  );
}
