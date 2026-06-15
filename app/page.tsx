import Link from "next/link";
import Image from "next/image";
import { PosterPanel } from "@/components/PosterPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio, processSteps, services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="container grid items-center gap-12 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
        <div>
          <span className="badge">Americana craft × modern technology</span>
          <h1 className="mt-6 text-5xl font-black tracking-[-0.07em] text-forest md:text-7xl lg:text-8xl">
            Boutique software for teams ready to grow with intention.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 md:text-xl">
            Oak & Finch Interactive designs and builds premium websites, custom applications, and automation systems inspired by the clarity of National Park posters and engineered for today&apos;s business realities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">Plan your build</Link>
            <Link href="/portfolio" className="btn-secondary">See the work</Link>
          </div>
        </div>
        <PosterPanel />
      </section>

      <section className="border-y border-ink/10 bg-paper/55 py-12">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            ["10+", "years shaping digital products"],
            ["3", "core offers: sites, apps, automation"],
            ["100%", "senior-led strategy and execution"],
          ].map(([stat, label]) => (
            <div key={label} className="card rounded-3xl p-6">
              <p className="text-4xl font-black tracking-[-0.06em] text-copper">{stat}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-ink/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <SectionHeading eyebrow="What we build" title="Digital systems with a handcrafted point of view." description="Every engagement combines sharp product thinking, carefully composed interfaces, and dependable technical foundations." />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card group overflow-hidden rounded-[1.75rem]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 768px) 33vw, calc(100vw - 2rem)" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">{service.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-forest">{service.title}</h3>
                <p className="mt-4 leading-7 text-ink/70">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest py-16 text-paper md:py-24">
        <div className="container">
          <SectionHeading inverse eyebrow="Our trail map" title="A calm, clear path from idea to launch." description="We keep the process transparent so your team always knows what is happening, why it matters, and what comes next." />
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-paper/15 bg-paper/8 p-6">
                <p className="text-sm font-black text-gold">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-paper/72">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <SectionHeading eyebrow="Selected outcomes" title="Built for businesses with real-world momentum." />
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article key={project.title} className="card group overflow-hidden rounded-[1.75rem]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1024px) 33vw, calc(100vw - 2rem)" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">{project.category}</p>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-forest">{project.title}</h3>
                <p className="mt-4 leading-7 text-ink/70">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
