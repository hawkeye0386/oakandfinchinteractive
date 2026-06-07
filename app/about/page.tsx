import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Oak & Finch Interactive, a boutique software consultancy blending Americana visual craft with modern technology.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Craft over clutter", "We choose deliberate composition, durable code, and thoughtful details over trend-chasing noise."],
  ["Plainspoken strategy", "You get clear recommendations, tradeoffs, and roadmaps without jargon or inflated ceremony."],
  ["Tools that earn trust", "We build secure, maintainable systems that feel good to use and are realistic to operate."],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="A small studio for ambitious, grounded teams." description="Oak & Finch Interactive exists for organizations that value craft, clarity, and software that keeps serving long after launch day." />
      <section className="container grid gap-10 pb-16 md:grid-cols-[.9fr_1.1fr] md:pb-24">
        <div className="card poster-lines rounded-[2rem] p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-copper">Studio point of view</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-forest">National Park poster soul. Modern product discipline.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-ink/72">
          <p>
            Our visual direction borrows from the optimism and structure of vintage American travel art: bold silhouettes, warm paper tones, grounded colors, and a sense that every detail has a purpose.
          </p>
          <p>
            Behind that warmth is a modern engineering practice: App Router architecture, accessible components, performance-minded implementation, reliable deployment, and a bias toward maintainable systems.
          </p>
          <p>
            The result is premium digital work that feels personable and performs professionally for founders, operators, and service businesses ready for their next chapter.
          </p>
        </div>
      </section>
      <section className="bg-paper/65 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Values" title="How we make decisions." />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(([title, description]) => (
              <article key={title} className="card rounded-[1.75rem] p-7">
                <h3 className="text-2xl font-black tracking-[-0.04em] text-forest">{title}</h3>
                <p className="mt-4 leading-7 text-ink/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
