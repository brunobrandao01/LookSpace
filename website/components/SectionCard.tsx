"use client";
interface Props {
  title: string;
  description: string;
}
export default function SectionCard({ title, description }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-lg font-semibold text-cyan-300">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-6">{description}</p>
    </div>
  );
}
