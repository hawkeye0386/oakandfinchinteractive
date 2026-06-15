import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { portfolio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Oak & Finch Interactive products for family travel, bill management, early literacy, and casual golf.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Products for the road, the classroom, the household, and the course." description="We build thoughtful digital products around real moments in people's lives, from keeping a family entertained on a long drive to making everyday responsibilities easier to manage." />
      <section className="container grid gap-7 pb-16 md:pb-24">
        {portfolio.map((project, index) => (
          <article key={project.title} className="card overflow-hidden rounded-[2rem] md:grid md:grid-cols-[.8fr_1.2fr]">
            <div className={`relative min-h-80 overflow-hidden bg-forest text-paper md:min-h-[34rem] ${project.visualClass ?? ""}`}>
              <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 768px) 38vw, calc(100vw - 2rem)" className={project.imageClass ?? "object-cover"} />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent" />
              <p className="absolute bottom-8 left-8 text-6xl font-black tracking-[-0.08em] text-paper/90">0{index + 1}</p>
            </div>
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-copper">{project.category}</p>
                <span className={`rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] ${project.status === "Live" ? "bg-forest text-paper" : "border border-ink/15 bg-cream text-forest"}`}>
                  {project.status}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-forest md:text-5xl">{project.title}</h2>
              <p className="mt-5 text-lg leading-8 text-ink/72">{project.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {project.results.map((result) => (
                  <li key={result} className="rounded-2xl border border-ink/10 bg-cream/70 p-4 text-sm font-bold text-forest">{result}</li>
                ))}
              </ul>
              {project.href && (
                <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex border-b border-forest pb-1 text-sm font-black uppercase tracking-[0.14em] text-forest">
                  {project.linkLabel} ↗
                </a>
              )}
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
