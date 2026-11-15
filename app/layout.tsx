import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { copy } from "@/content/copy";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-inter-tight" });

export const metadata: Metadata = {
  metadataBase: new URL(copy.meta.siteUrl),
  title: copy.meta.title,
  description: copy.meta.description,
  openGraph: { title: copy.meta.title, description: copy.meta.description, type: "website" },
  twitter: { card: "summary_large_image", title: copy.meta.title, description: copy.meta.description },
};

export const viewport: Viewport = { themeColor: "#0E0E0C" };

// Runs before first paint: decides motion mode and whether the intro plays (first visit per session).
const boot = `(function(){try{var d=document.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm){d.classList.add('motion');if(!sessionStorage.getItem('intro'))d.dataset.intro='play';}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="font-sans">
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
