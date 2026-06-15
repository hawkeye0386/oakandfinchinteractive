export const site = {
  name: "Oak & Finch Interactive",
  url: "https://oakandfinchinteractive.com",
  email: "hello@oakandfinchinteractive.com",
  phone: "+1 (717) 555-0148",
  location: "Pennsylvania, serving clients nationwide",
  tagline: "Americana craft for modern software",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Signature Websites",
    eyebrow: "Brand systems + Next.js builds",
    description:
      "Fast, expressive marketing sites with durable content architecture, conversion-focused page flows, and a visual language your team can keep using.",
    points: ["Information architecture", "Responsive UI systems", "SEO-ready App Router builds"],
    image: "/illustrations/service-websites.webp",
    imageAlt: "Poster-style woodland trailhead with a carefully organized map and visual system",
  },
  {
    title: "Custom Applications",
    eyebrow: "Internal tools + customer portals",
    description:
      "Purpose-built web apps that replace brittle spreadsheets, unify workflows, and give your customers a polished digital front door.",
    points: ["Product discovery", "Dashboards and portals", "Secure API integrations"],
    image: "/illustrations/service-applications.webp",
    imageAlt: "Poster-style craft workshop where modular pieces connect into a working system",
  },
  {
    title: "Automation & AI Enablement",
    eyebrow: "Practical operations leverage",
    description:
      "Human-centered automations that remove repeated work, connect your systems, and introduce AI where it makes measurable business sense.",
    points: ["Workflow mapping", "CRM and ops automation", "AI-assisted service tooling"],
    image: "/illustrations/service-automation.webp",
    imageAlt: "Poster-style mountain waterways converging through gates to power a waterwheel",
  },
];

export type PortfolioProject = {
  title: string;
  category: string;
  status: "Live" | "In development";
  description: string;
  results: string[];
  image: string;
  imageAlt: string;
  imageClass?: string;
  visualClass?: string;
  href?: string;
  linkLabel?: string;
};

export const portfolio: PortfolioProject[] = [
  {
    title: "Wander Wagon: Road Trip Games",
    category: "Family travel games",
    status: "Live",
    description:
      "An offline-friendly collection of six classic road-trip games for iPhone and iPad, with local multiplayer, scoring, and playful retro-Americana design.",
    results: ["Live on the Apple App Store", "Six family road-trip games", "Offline-first local play"],
    image: "/portfolio/wander-wagon.png",
    imageAlt: "Wander Wagon app icon featuring Dusty the dog beside a packed station wagon",
    imageClass: "object-contain p-12 md:p-20",
    visualClass: "bg-[radial-gradient(circle_at_top,#b7dce3_0%,#e7d5a9_54%,#8f3c26_100%)]",
    href: "https://apps.apple.com/us/app/wander-wagon-road-trip-games/id6775979031",
    linkLabel: "View on the App Store",
  },
  {
    title: "Paidly.To",
    category: "Bill management app",
    status: "In development",
    description:
      "A privacy-first bill management app for iOS and Android with local encrypted storage, bill scanning, reminders, optional bank linking, and secure device sync.",
    results: ["Privacy-first bill tracking", "Encrypted device sync", "Optional bank linking"],
    image: "/portfolio/paidly.png",
    imageAlt: "Paidly app icon with a checkmark over a stack of bills",
    imageClass: "object-contain p-16 md:p-24",
    visualClass: "bg-[radial-gradient(circle_at_top,#392c73_0%,#17102d_58%,#0d0a1b_100%)]",
  },
  {
    title: "WordNest",
    category: "Early literacy app",
    status: "In development",
    description:
      "A playful ELA learning app for Kindergarten and First Grade covering phonics, sight words, leveled reading, writing, vocabulary, and progress tracking.",
    results: ["Kindergarten + Grade 1 ELA", "Five core literacy domains", "Guided learning progress"],
    image: "/portfolio/wordnest.webp",
    imageAlt: "WordNest learning dashboard with an owl guide and colorful literacy activities",
    imageClass: "object-cover object-left",
    visualClass: "bg-[#dce9c5]",
  },
  {
    title: "HackDay",
    category: "Casual golf companion",
    status: "In development",
    description:
      "A mobile product in development for Sunday casual golfers, designed to make the game feel simpler, more social, and more approachable.",
    results: ["Built for casual golfers", "Mobile-first product", "Relaxed weekend play"],
    image: "/portfolio/hackday.webp",
    imageAlt: "Illustrated golf bag beside a welcoming public golf course in warm afternoon light",
    visualClass: "bg-[#203428]",
  },
];

export const processSteps = [
  {
    title: "Scout",
    description: "We map the terrain: business goals, users, constraints, and the moments where software can create the most leverage.",
  },
  {
    title: "Sketch",
    description: "We turn strategy into wireframes, interface systems, technical plans, and a clear delivery roadmap.",
  },
  {
    title: "Build",
    description: "We ship in focused increments with production-grade code, frequent reviews, and pragmatic documentation.",
  },
  {
    title: "Tend",
    description: "We keep improving after launch with analytics, performance tuning, automation enhancements, and retained support.",
  },
];
