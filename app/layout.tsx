import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const siteUrl = "https://oakandfinchinteractive.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oak & Finch Interactive | Boutique Software Consultancy",
    template: "%s | Oak & Finch Interactive",
  },
  description:
    "Oak & Finch Interactive is a premium boutique software consultancy creating websites, applications, automation, and digital systems with Americana craft and modern engineering.",
  applicationName: "Oak & Finch Interactive",
  keywords: [
    "software consultancy",
    "boutique web studio",
    "Next.js development",
    "custom software",
    "business automation",
    "Oak & Finch Interactive",
  ],
  authors: [{ name: "Oak & Finch Interactive" }],
  creator: "Oak & Finch Interactive",
  publisher: "Oak & Finch Interactive",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Oak & Finch Interactive",
    title: "Oak & Finch Interactive | Boutique Software Consultancy",
    description:
      "Premium websites, software, automation, and digital product strategy for small businesses and ambitious teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oak & Finch Interactive | Boutique Software Consultancy",
    description:
      "Americana-inspired digital products engineered for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
