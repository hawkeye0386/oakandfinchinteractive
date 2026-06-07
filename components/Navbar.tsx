import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(31,42,36,.12)] bg-[#fff9ee]/85 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#173f35] text-lg font-black text-[#fff9ee] shadow-lg">
            O&F
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-[-0.04em]">Oak & Finch</span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#8b5a2b]">Interactive</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-[#1f2a24]/75 transition hover:text-[#173f35]">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="btn-primary hidden md:inline-flex">Start a project</Link>
      </nav>
    </header>
  );
}
