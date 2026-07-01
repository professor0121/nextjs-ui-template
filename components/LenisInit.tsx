"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisInit() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      allowNestedScroll: true,
      smoothWheel: true,
      // smoothTouch is false by default in Lenis, matches Webflow script
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync with ScrollTrigger if loaded
    const handleScroll = () => {
      // @ts-ignore
      if (typeof window.ScrollTrigger !== "undefined") {
        // @ts-ignore
        window.ScrollTrigger.update();
      }
    };

    lenis.on("scroll", handleScroll);

    // Refresh scroll triggers initially
    // @ts-ignore
    if (typeof window.ScrollTrigger !== "undefined") {
      // @ts-ignore
      window.ScrollTrigger.refresh();
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
