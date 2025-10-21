import "@/styles/globals.css";

import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Inter,
  JetBrains_Mono,
  Lato,
  Roboto_Slab,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Tags from "@/components/Tags";
import { Providers } from "@/components/Providers";

const description = "Execute your runbooks, docs, and READMEs.";
const defaultTitle = `RUNME runs Markdown `;

export const metadata = {
  metadataBase: "https://runme.dev",
  manifest: "/site.webmanifest",
  title: {
    default: defaultTitle,
    template: "%s • RUNME",
  },
  description: description,
  keywords: ["Runbook", "Workflow", "Task", "Operations", "docs as code", "VS Code", "DevOps"],
  favicon: "/favicon.ico",
  icons: {
    icon: "/favicon.ico",
    apple: "/",
    other: [
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
  sitemap: "/sitemap.xml",
  openGraph: {
    images: [
      {
        url: "https://runme.dev/img/intro.png",
        width: 1540,
        height: 866,
      },
      {
        url: "https://runme.dev/img/intro.gif",
        width: 1400,
        height: 788,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUNME",
    description: description,
    siteId: "10765432100123456789",
    creator: "@runmedev",
    creatorId: "10765432100123456789",
    images: ["https://runme.dev/img/intro.png"],
  },
};

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-ibm-plex-mono",
});

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-ibm-plex-sans",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-roboto-slab",
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-jetbrains-mono",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibm_plex_mono.variable} ${ibm_plex_sans.variable} ${roboto_slab.variable} ${jetbrains_mono.variable} ${lato.variable} ${inter.variable}`}
    >
      <head>
        <Tags />
      </head>
      <body className="flex flex-col w-full min-h-screen">
        <div className="bg-background-dark text-text-dark">
          <Providers>
            <main className="flex-1">{children}</main>
            <Analytics />
          </Providers>
        </div>
      </body>
    </html>
  );
}
