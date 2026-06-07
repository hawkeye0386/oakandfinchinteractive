import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Oak & Finch Interactive to discuss a website, custom application, automation, or software consulting engagement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Tell us what you want your software to make possible." description="Share the shape of your project, the business outcome you care about, and any timing constraints. We will respond with next steps and a practical path forward." />
      <section className="container grid gap-8 pb-16 md:grid-cols-[1fr_.8fr] md:pb-24">
        <form className="card grid gap-5 rounded-[2rem] p-7 md:p-10" action={`mailto:${site.email}`} method="post" encType="text/plain">
          <label className="grid gap-2 text-sm font-bold text-forest">
            Name
            <input name="name" required className="rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base font-normal text-ink outline-none focus:border-copper" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-forest">
            Email
            <input name="email" type="email" required className="rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base font-normal text-ink outline-none focus:border-copper" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-forest">
            Project type
            <select name="projectType" className="rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base font-normal text-ink outline-none focus:border-copper">
              <option>Signature website</option>
              <option>Custom application</option>
              <option>Automation or AI enablement</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-forest">
            What are you trying to accomplish?
            <textarea name="message" required rows={6} className="rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base font-normal text-ink outline-none focus:border-copper" />
          </label>
          <button className="btn-primary" type="submit">Send project note</button>
        </form>
        <aside className="card rounded-[2rem] p-7 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-copper">Direct line</p>
          <div className="mt-6 grid gap-5 text-lg font-bold text-forest">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            <p>{site.location}</p>
          </div>
          <div className="mt-10 rounded-3xl bg-forest p-6 text-paper">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Good fit projects</p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-paper/78">
              <li>• Premium marketing sites and brand systems</li>
              <li>• Custom portals, dashboards, and internal tools</li>
              <li>• Automation that removes operational bottlenecks</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
