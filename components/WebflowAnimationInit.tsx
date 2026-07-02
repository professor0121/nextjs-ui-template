"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import webflowPages from "./webflow-pages.json";

function getPageId(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  
  // @ts-ignore
  if (webflowPages[path]) {
    // @ts-ignore
    return webflowPages[path];
  }
  
  // Dynamic matches
  if (path.startsWith("/services/")) return "6a278d985779c3193f0dee47";
  if (path.startsWith("/project/")) return "6a26598b563d93a2d2559598";
  if (path.startsWith("/post/")) return "6a2695bc2d8d2b30dfdd8dce";
  if (path.startsWith("/author/")) return "6a2a94943980afc066879041";
  if (path.startsWith("/blog-categories/")) return "6a26a914bc726f5bb592ab37";
  if (path.startsWith("/project-category/")) return "6a26acaf63006835ec642fc0";
  
  return "";
}

export default function WebflowAnimationInit() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Dynamically set correct data-wf-page attribute
    const pageId = getPageId(pathname || "");
    if (pageId) {
      document.documentElement.setAttribute("data-wf-page", pageId);
    } else {
      document.documentElement.removeAttribute("data-wf-page");
    }

    // 2. Poll for Webflow initialization (robust script load handling)
    let attempts = 0;
    let timerId: any;

    const checkAndInit = () => {
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
      } else if (attempts < 30) {
        attempts++;
        timerId = setTimeout(checkAndInit, 100);
      }
    };

    // Delay slightly to let React complete its render/commit phase
    const startTimer = setTimeout(checkAndInit, 100);

    return () => {
      clearTimeout(startTimer);
      if (timerId) clearTimeout(timerId);
    };
  }, [pathname]);

  return null;
}
