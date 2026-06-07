import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
      <nav className="container flex min-h-20 flex-wrap items-center justify-between gap-4 py-3" aria-label="Primary navigation">
        <Logo />
        <div className="order-3 flex w-full items-center gap-2 overflow-x-auto pb-1 md:order-2 md:w-auto md:gap-8 md:overflow-visible md:pb-0">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm font-bold text-ink/75 transition hover:bg-forest/10 hover:text-forest">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn-primary order-2 hidden md:order-3 md:inline-flex">
          Start a project
        </Link>
      </nav>
    </header>
  );
}
