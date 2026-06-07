import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-forest text-paper">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-paper px-4 py-3 text-ink">
            <Logo />
          </div>
          <p className="max-w-md text-sm leading-7 text-paper/75">
            A premium boutique software consultancy blending National Park poster warmth with modern engineering discipline.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold">Studio</p>
          <div className="grid gap-3 text-sm text-paper/75">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold">Start</p>
          <div className="grid gap-3 text-sm text-paper/75">
            <a href={`mailto:${site.email}`} className="transition hover:text-gold">{site.email}</a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="transition hover:text-gold">{site.phone}</a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-paper/55">
        © {new Date().getFullYear()} Oak & Finch Interactive. Built with care in Pennsylvania.
      </div>
    </footer>
  );
}
