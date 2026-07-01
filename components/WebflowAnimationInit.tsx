"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WebflowAnimationInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize Webflow animations after the route finishes loading and rendering
    const timer = setTimeout(() => {
      // @ts-ignore
      const wf = window.Webflow;
      if (wf) {
        try {
          // Destroy existing event bindings
          if (typeof wf.destroy === "function") {
            wf.destroy();
          }
          // Re-trigger standard bindings
          if (typeof wf.ready === "function") {
            wf.ready();
          }
          // Re-trigger interactions (IX2)
          if (typeof wf.require === "function") {
            const ix2 = wf.require("ix2");
            if (ix2 && typeof ix2.init === "function") {
              ix2.init();
            }
          }
          
          // Force layout refresh of ScrollTrigger if loaded
          // @ts-ignore
          if (typeof window.ScrollTrigger !== "undefined") {
            // @ts-ignore
            window.ScrollTrigger.refresh();
          }
        } catch (e) {
          console.warn("Failed to re-initialize Webflow interactions:", e);
        }
      }
    }, 150); // slight delay to allow React DOM updates to flush

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
