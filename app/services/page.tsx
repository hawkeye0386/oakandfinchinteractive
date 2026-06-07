import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium website design, custom application development, and automation consulting from Oak & Finch Interactive.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Strategy, design, and engineering under one roof." description="We help teams replace scattered digital efforts with cohesive systems that look distinctive, work reliably, and support measurable growth." />
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-6">
          {services.map((service) => (
            <article key={service.title} className="card grid gap-8 rounded-[2rem] p-7 md:grid-cols-[.75fr_1fr] md:p-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-copper">{service.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-forest md:text-5xl">{service.title}</h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-ink/72">{service.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {service.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-ink/10 bg-cream/70 p-4 text-sm font-bold text-forest">{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-paper/65 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Engagement model" title="Boutique attention, production-ready delivery." description="Projects are scoped around outcomes, then delivered through focused sprints, crisp communication, and code your business can depend on." />
          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="card rounded-3xl p-6">
                <p className="text-sm font-black text-copper">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-black text-forest">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{step.description}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-10">Discuss services</Link>
        </div>
      </section>
    </>
  );
}
