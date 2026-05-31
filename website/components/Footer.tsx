"use client";
export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} LookSpace. All rights reserved.
    </footer>
  );
}
