type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="badge">{eyebrow}</span>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-forest md:text-7xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-ink/72 md:text-xl">{description}</p>
      </div>
    </section>
  );
}
