export function PosterPanel() {
  return (
    <div className="card poster-lines relative min-h-[420px] overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-x-8 top-8 h-40 rounded-t-full poster-sun" />
      <div className="mountain-mask absolute inset-x-0 bottom-24 h-56 bg-forest" />
      <div className="mountain-mask absolute inset-x-0 bottom-16 h-48 bg-pine" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-oak" />
      <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-paper/25 bg-forest/84 p-5 text-paper shadow-2xl backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Field notes</p>
        <p className="mt-2 text-2xl font-black tracking-[-0.04em]">Software with roots, rhythm, and reach.</p>
      </div>
    </div>
  );
}
