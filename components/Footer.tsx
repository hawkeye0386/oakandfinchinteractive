import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(31,42,36,.12)] bg-[#173f35] text-[#fff9ee]">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fff9ee] text-sm font-black text-[#173f35]">O&F</span>
            <div>
              <p className="font-black">Oak & Finch Interactive</p>
              <p className="text-xs uppercase tracking-[.22em] text-[#d8a84e]">Websites, apps, automation</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#fff9ee]/75">
            A Pennsylvania-based interactive studio building polished websites, useful software, and practical automation for small businesses and ambitious teams.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[.18em] text-[#d8a84e]">Studio</p>
          <div className="grid gap-3 text-sm text-[#fff9ee]/75">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[.18em] text-[#d8a84e]">Start</p>
          <div className="grid gap-3 text-sm text-[#fff9ee]/75">
            <Link href="/contact">Book a project</Link>
            <a href="mailto:hello@oakandfinchinteractive.com">hello@oakandfinchinteractive.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#fff9ee]/55">
        © {new Date().getFullYear()} Oak & Finch Interactive. Built with care in Pennsylvania.
      </div>
    </footer>
  );
}
