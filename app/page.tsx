import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/site";

const homeServices = [
  {
    icon: "code",
    title: "Custom Development",
    description: "Web apps and platforms built for your business.",
  },
  {
    icon: "automation",
    title: "Automation",
    description: "Streamline workflows and eliminate manual work.",
  },
  {
    icon: "ai",
    title: "AI Integration",
    description: "Intelligent tools that unlock real productivity.",
  },
  {
    icon: "cloud",
    title: "Cloud Solutions",
    description: "Secure, scalable, and built for performance.",
  },
  {
    icon: "growth",
    title: "Digital Growth",
    description: "Websites and strategies that drive results.",
  },
];

const principles = [
  ["Reliable", "Solutions you can count on."],
  ["Collaborative", "We work with you, not for you."],
  ["People focused", "Technology should serve people."],
  ["Results driven", "We measure what matters."],
];

function ServiceIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  if (name === "code") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="7" width="34" height="25" rx="2" {...common} />
        <path d="m20 15-5 5 5 5m8-10 5 5-5 5M17 39h14M24 32v7" {...common} />
      </svg>
    );
  }

  if (name === "automation") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="8" {...common} />
        <path d="M24 5v5m0 28v5M5 24h5m28 0h5M10.6 10.6l3.5 3.5m19.8 19.8 3.5 3.5m0-26.8-3.5 3.5M14.1 33.9l-3.5 3.5" {...common} />
        <circle cx="24" cy="24" r="16" {...common} />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M20 11a6 6 0 0 0-10 4 6 6 0 0 0 1 11 7 7 0 0 0 9 10V11Zm8 0a6 6 0 0 1 10 4 6 6 0 0 1-1 11 7 7 0 0 1-9 10V11Z" {...common} />
        <path d="M15 18h5m-6 8h6m8-8h5m-5 8h6M20 15l-4-3m12 3 4-3M20 32l-4 3m12-3 4 3" {...common} />
      </svg>
    );
  }

  if (name === "cloud") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M13 35h24a8 8 0 0 0 1-15 13 13 0 0 0-25-2 8.5 8.5 0 0 0 0 17Z" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 39h33M12 35V25h6v10m6 0V19h6v16m6 0V12h6v23M10 20l10-8 7 5L40 6" {...common} />
      <path d="M34 6h6v6" {...common} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden">
        <Image
          src="/illustrations/hero-editorial-v2.webp"
          alt="Old oak tree and flying finch overlooking a Pennsylvania river valley"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[28%_center] md:object-center"
        />
        <div className="container flex min-h-[640px] items-center pb-36 pt-16 md:min-h-[700px] md:pb-44">
          <div className="max-w-[590px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-oak">Thoughtful software, built with purpose</p>
            <h1 className="font-serif text-5xl leading-[1.02] font-medium tracking-[-0.04em] text-forest sm:text-6xl lg:text-[4rem] xl:text-[4.35rem]">
              Thoughtful technology.<br />Meaningful impact.
            </h1>
            <p className="mt-7 max-w-[520px] text-lg leading-8 text-ink/78 md:text-xl">
              Custom software, smart automation, and modern web experiences that help businesses grow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary">Our services</Link>
              <Link href="/portfolio" className="btn-secondary">View our work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-28 px-4 md:-mt-32">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[1.4rem] border border-ink/15 bg-paper/95 shadow-[0_28px_70px_rgba(31,42,36,.15)] backdrop-blur md:grid-cols-5">
          {homeServices.map((service) => (
            <article key={service.title} className="home-service-item px-6 py-7 text-center md:px-5 md:py-9">
              <div className="mx-auto h-12 w-12 text-forest">
                <ServiceIcon name={service.icon} />
              </div>
              <h2 className="mt-4 font-serif text-xl font-semibold text-forest">{service.title}</h2>
              <p className="mx-auto mt-2 max-w-[210px] text-sm leading-6 text-ink/70">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-0 grid overflow-hidden bg-forest lg:grid-cols-[.75fr_1.25fr]">
        <div className="relative min-h-[430px] lg:min-h-[520px]">
          <Image
            src="/illustrations/studio-workspace-v2.webp"
            alt="Illustrated studio desk with laptop, oak-leaf mug, notebook, and finch overlooking a river valley"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-8 px-7 py-14 text-paper sm:px-12 lg:grid-cols-[1.3fr_.7fr] lg:px-12 lg:py-16">
          <div className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Built with purpose</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight font-medium tracking-[-0.035em] text-paper md:text-5xl">
              We build digital solutions that help businesses thrive.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-paper/76 md:text-lg">
              We combine clean code, thoughtful design, and practical strategy to deliver technology that makes a real difference.
            </p>
            <Link href="/about" className="mt-8 inline-flex border-b border-gold pb-1 text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Meet the studio
            </Link>
          </div>
          <div className="grid content-center gap-6 border-paper/25 lg:border-l lg:pl-10">
            {principles.map(([title, description], index) => (
              <div key={title} className="grid grid-cols-[2.7rem_1fr] gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-paper/45 font-serif text-sm text-gold">0{index + 1}</span>
                <div>
                  <h3 className="font-sans text-base font-bold text-paper">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-paper/68">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper/90 py-8">
        <div className="container text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-ink/50">Trusted by businesses ready to grow</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-serif text-sm font-semibold text-forest/55 md:gap-x-16 md:text-base">
            <span>Service businesses</span>
            <span>Growing teams</span>
            <span>Independent founders</span>
            <span>Regional brands</span>
            <span>Operations leaders</span>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-copper">Selected work</p>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight font-medium tracking-[-0.035em] text-forest md:text-5xl">
              Useful software, grounded in the way people really work.
            </h2>
          </div>
          <Link href="/portfolio" className="text-sm font-bold uppercase tracking-[0.14em] text-forest">View all work →</Link>
        </div>
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
          {portfolio.map((project) => (
            <article key={project.title} className="group border-t border-ink/20 pt-5">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${project.visualClass ?? ""}`}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className={`${project.imageClass ?? "object-cover"} transition duration-500 group-hover:scale-[1.025]`} />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">{project.category}</p>
                <span className={`rounded-full px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] ${project.status === "Live" ? "bg-forest text-paper" : "border border-ink/15 text-forest"}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-forest">{project.title}</h3>
              <p className="mt-3 leading-7 text-ink/70">{project.description}</p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex border-b border-forest pb-1 text-xs font-bold uppercase tracking-[0.14em] text-forest">
                  {project.linkLabel} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
