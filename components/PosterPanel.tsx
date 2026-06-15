import Image from "next/image";

export function PosterPanel() {
  return (
    <figure className="card illustration-frame relative min-h-[440px] overflow-hidden rounded-[2rem]">
      <Image
        src="/illustrations/hero-oak-and-finch.webp"
        alt="Oak tree and finch overlooking a mountain trail that becomes an elegant digital system"
        fill
        priority
        sizes="(min-width: 768px) 46vw, calc(100vw - 2rem)"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
      <figcaption className="absolute bottom-6 left-6 right-6 rounded-2xl border border-paper/25 bg-forest/84 p-5 text-paper shadow-2xl backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Field notes</p>
        <p className="mt-2 text-2xl font-black tracking-[-0.04em]">Software with roots, rhythm, and reach.</p>
      </figcaption>
    </figure>
  );
}
