type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${inverse ? "text-gold" : "text-copper"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black tracking-[-0.05em] md:text-5xl ${inverse ? "text-paper" : "text-forest"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-lg leading-8 ${inverse ? "text-paper/72" : "text-ink/70"}`}>{description}</p> : null}
    </div>
  );
}
