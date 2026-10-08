import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dominik Medek — Design s citem. Realizace s přesností.",
    template: "%s — Dominik Medek",
  },
  description:
    "Multidisciplinární designer ze Zlínského kraje. Vizuální identity, UI/UX, webdesign a realizace webů i custom aplikací.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Dominik Medek",
    title: "Dominik Medek — Designer & creative developer",
    description: "Vizuální identity, rozhraní a digitální zážitky.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominik Medek — Designer & creative developer",
    images: ["/og.png"],
  },
};
export const viewport: Viewport = { themeColor: "#f5f4f0" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <a className="skip-link" href="#main">
          Přejít na obsah
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
