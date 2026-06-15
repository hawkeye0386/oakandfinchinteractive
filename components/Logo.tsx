import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Oak & Finch Interactive home">
      <Image src="/illustrations/oak-finch-emblem-v2.webp" alt="" width={64} height={64} className="h-14 w-14 rounded-full object-cover md:h-16 md:w-16" priority />
      <span className="leading-none text-forest">
        <span className="block font-serif text-[1.45rem] tracking-[0.04em] md:text-[1.7rem]">Oak & Finch</span>
        <span className="mt-1.5 block text-[0.6rem] font-bold uppercase tracking-[0.42em] text-forest/75 md:text-[0.68rem]">Interactive</span>
      </span>
    </Link>
  );
}
