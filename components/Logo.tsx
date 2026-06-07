import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Oak & Finch Interactive home">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-forest text-lg font-black text-paper shadow-lg">
        <span className="absolute inset-x-0 bottom-0 h-4 bg-copper/80" />
        <span className="relative">O&F</span>
      </span>
      <span className="leading-tight">
        <span className="block text-lg font-black tracking-[-0.04em]">Oak & Finch</span>
        <span className="block text-xs font-bold uppercase tracking-[0.22em] text-oak">Interactive</span>
      </span>
    </Link>
  );
}
