import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/92 backdrop-blur-xl">
      <nav className="site-nav flex min-h-24 flex-wrap items-center justify-between gap-4 py-3" aria-label="Primary navigation">
        <Logo />
        <div className="order-3 flex w-full flex-wrap items-center justify-center gap-x-1 pb-1 md:order-2 md:w-auto md:flex-nowrap md:gap-5 md:pb-0 lg:gap-8">
          <Link href="/" className="rounded px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-forest transition hover:bg-forest/10 md:px-3 md:text-xs md:tracking-[0.08em]">Home</Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-forest transition hover:bg-forest/10 md:px-3 md:text-xs md:tracking-[0.08em]">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn-primary desktop-cta order-2 md:order-3">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
