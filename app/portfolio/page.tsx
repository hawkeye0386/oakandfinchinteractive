import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { portfolio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected Oak & Finch Interactive projects spanning commerce, operations platforms, service websites, and automation.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Case-study style snapshots of useful, polished software." description="Our work is designed to feel memorable on the surface and dependable below it: clear interfaces, strong performance, and systems that support the way teams actually operate." />
      <section className="container grid gap-7 pb-16 md:pb-24">
        {portfolio.map((project, index) => (
          <article key={project.title} className="card overflow-hidden rounded-[2rem] md:grid md:grid-cols-[.8fr_1.2fr]">
            <div className="poster-lines relative min-h-72 bg-forest p-8 text-paper">
              <div className="poster-sun h-28 w-28 rounded-full" />
              <div className="mountain-mask absolute inset-x-0 bottom-0 h-40 bg-pine" />
              <p className="absolute bottom-8 left-8 text-6xl font-black tracking-[-0.08em] text-paper/90">0{index + 1}</p>
            </div>
            <div className="p-7 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-copper">{project.category}</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-forest md:text-5xl">{project.title}</h2>
              <p className="mt-5 text-lg leading-8 text-ink/72">{project.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {project.results.map((result) => (
                  <li key={result} className="rounded-2xl border border-ink/10 bg-cream/70 p-4 text-sm font-bold text-forest">{result}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="container pb-20">
        <div className="rounded-[2rem] bg-forest p-8 text-paper md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Have a different challenge?</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-5xl">We shape each build around the business terrain, not a template.</h2>
          <Link href="/contact" className="btn-secondary mt-8 bg-paper text-forest">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
