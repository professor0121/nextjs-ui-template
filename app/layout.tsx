import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Lora } from "next/font/google";
import Script from "next/script";
import "./webflow.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisInit from "@/components/LenisInit";
import WebflowAnimationInit from "@/components/WebflowAnimationInit";
import webflowPages from "@/components/webflow-pages.json";

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
      className={`${inter.variable} ${cormorant.variable} ${lora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const path = window.location.pathname;
                const pages = ${JSON.stringify(webflowPages)};
                const pageId = pages[path] || pages[path.replace(/\\/$/, '')] || "";
                document.documentElement.setAttribute('data-wf-page', pageId);
                document.documentElement.setAttribute('data-wf-site', '6a1e909d66cc33761db4a46d');
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Scripts needed by Webflow and GSAP animations */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6a1e909d66cc33761db4a46d"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6a1e909d66cc33761db4a46d/js/webflow.schunk.9af921559b30ff15.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6a1e909d66cc33761db4a46d/js/webflow.de730475.71b345051e3967e4.js"
          strategy="afterInteractive"
        />
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
        <WebflowAnimationInit />
      </body>
    </html>
  );
}
