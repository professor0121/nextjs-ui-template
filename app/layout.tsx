import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Lora } from "next/font/google";
import Script from "next/script";
import "./webflow.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisInit from "@/components/LenisInit";
import GSAPAnimationInit from "@/components/GSAPAnimationInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Orenda - Interior Design Studio",
  description: "Boutique interior studio crafting calm, cinematic spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${lora.variable} h-full antialiased w-mod-js`}
      suppressHydrationWarning
    >
      <head />

      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* GSAP and animation scripts */}
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/CustomEase.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/lenis@1.3.1/dist/lenis.min.js"
          strategy="afterInteractive"
        />

        <main className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </main>
        <LenisInit />
        <GSAPAnimationInit />
      </body>
    </html>
  );
}
