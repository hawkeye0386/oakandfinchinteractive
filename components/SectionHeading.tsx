type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-copper">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-forest md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-ink/70">{description}</p> : null}
    </div>
  );
}
