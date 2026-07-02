"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GSAPAnimationInit() {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  useEffect(() => {
    // @ts-ignore
    if (typeof window === "undefined" || !window.gsap) return;

    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;
    // @ts-ignore
    const SplitText = window.SplitText;

    if (!gsap || !ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger not loaded");
      return;
    }

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Kill existing ScrollTriggers on route change
    ScrollTrigger.getAll().forEach((st: any) => st.kill());

    // Allow DOM to settle
    const timer = setTimeout(() => {
      initAnimations(gsap, ScrollTrigger, SplitText);
      initializedRef.current = true;
    }, 50);

    return () => {
      clearTimeout(timer);
      if (initializedRef.current) {
        ScrollTrigger.getAll().forEach((st: any) => st.kill());
      }
    };
  }, [pathname]);

  return null;
}

function initAnimations(gsap: any, ScrollTrigger: any, SplitText: any) {
  // Set initial states first
  // 1. Fade-in elements start invisible
  const fadeElements = document.querySelectorAll("[fade-in]");
  gsap.set(fadeElements, { opacity: 0, y: 30 });

  // 2. Hero fade elements start invisible
  const heroFadeElements = document.querySelectorAll("[hero-fade-in]");
  gsap.set(heroFadeElements, { opacity: 0, y: 40 });

  // 3. Hero titles
  const heroTitles = document.querySelectorAll("[hero-title='true']");
  gsap.set(heroTitles, { opacity: 0, y: 60 });

  // 4. Inner titles
  const innerTitles = document.querySelectorAll("[inner-title='true']");
  gsap.set(innerTitles, { opacity: 0, y: 40 });

  const innerTitlesScroll = document.querySelectorAll("[inner-title-scroll='true']");
  gsap.set(innerTitlesScroll, { opacity: 0, y: 60 });

  // 5. Section titles
  const sectionTitles = document.querySelectorAll(".section-title");
  gsap.set(sectionTitles, { opacity: 0, y: 30 });

  // 6. Image overlay strips start fully covering
  const strips = document.querySelectorAll(".image-overlay-strip, .page-load-image-overlay-strip");
  gsap.set(strips, { scaleX: 1, transformOrigin: "left" });

  // 7. Button backgrounds start hidden
  const buttonBgs = document.querySelectorAll(".button-bg, .secondary-button-bg, .secondary-button-bg-inner");
  gsap.set(buttonBgs, { scaleX: 0, transformOrigin: "left" });

  // Now run animations
  // 1. Fade-in elements on scroll
  fadeElements.forEach((el: Element) => {
    const delay = parseFloat((el as HTMLElement).dataset.fadeIn || "0");
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // 2. Hero fade-in elements
  heroFadeElements.forEach((el: Element) => {
    const delay = parseFloat((el as HTMLElement).dataset.heroFadeIn || "0");
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      ease: "power3.out",
    });
  });

  // 3. Hero titles
  heroTitles.forEach((title: Element) => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  // 4. Inner title animations
  innerTitles.forEach((title: Element) => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
      },
    });
  });

  innerTitlesScroll.forEach((title: Element) => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
      },
    });
  });

  // 5. Section titles
  sectionTitles.forEach((title: Element) => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
      },
    });
  });

  // 6. Ticker animations
  const tickerInners = document.querySelectorAll(".ticker-inner");
  tickerInners.forEach((ticker: Element) => {
    gsap.to(ticker, {
      xPercent: -33.33,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  });

  // 7. Company logo ticker
  const logoInners = document.querySelectorAll(".company-logo-inner");
  logoInners.forEach((inner: Element) => {
    gsap.to(inner, {
      xPercent: -33.33,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  });

  // 8. Image reveal overlays
  const imageOverlays = document.querySelectorAll(".image-on-scroll-overlay");
  imageOverlays.forEach((overlay: Element) => {
    const overlayStrips = overlay.querySelectorAll(".image-overlay-strip");
    gsap.to(overlayStrips, {
      scaleX: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: overlay,
        start: "top 80%",
      },
    });
  });

  // 9. Hero ring rotation
  const heroRings = document.querySelectorAll(".hero-ring");
  heroRings.forEach((ring: Element) => {
    gsap.to(ring, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  // 10. Button hover animations
  const primaryButtons = document.querySelectorAll(".primary-button");
  primaryButtons.forEach((btn: Element) => {
    const bg = btn.querySelector(".button-bg");
    if (bg) {
      btn.addEventListener("mouseenter", () => {
        gsap.to(bg, { scaleX: 1, duration: 0.4, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(bg, { scaleX: 0, duration: 0.4, ease: "power2.out" });
      });
    }
  });

  // 11. Secondary button hover
  const secondaryButtons = document.querySelectorAll(".secondary-button");
  secondaryButtons.forEach((btn: Element) => {
    const bg = btn.querySelector(".secondary-button-bg");
    const bgInner = btn.querySelector(".secondary-button-bg-inner");
    if (bg) {
      btn.addEventListener("mouseenter", () => {
        gsap.to(bg, { scaleX: 1, duration: 0.4, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(bg, { scaleX: 0, duration: 0.4, ease: "power2.out" });
      });
    }
    if (bgInner) {
      btn.addEventListener("mouseenter", () => {
        gsap.to(bgInner, { scaleX: 1, duration: 0.4, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(bgInner, { scaleX: 0, duration: 0.4, ease: "power2.out" });
      });
    }
  });

  // 12. Home hero section animation
  const homeHeroSection = document.querySelector(".home-hero-section");
  if (homeHeroSection) {
    const heroLeft = homeHeroSection.querySelector(".hero-left");
    const heroRight = homeHeroSection.querySelector(".hero-right");
    const heroCenter = homeHeroSection.querySelector(".home-hero-center");
    const heroTitle = homeHeroSection.querySelector(".home-hero-title");
    const heroExcerpt = homeHeroSection.querySelector(".home-hero-excerpt");
    const heroButtons = homeHeroSection.querySelector(".homer-hero-button-wrapper");
    const statBlock = homeHeroSection.querySelector(".section-stat-block");
    const badgeCircle = homeHeroSection.querySelector(".hero-badge-circle");

    // Set initial states
    if (heroLeft) gsap.set(heroLeft, { opacity: 0, x: -60 });
    if (heroRight) gsap.set(heroRight, { opacity: 0, x: 60 });
    if (heroCenter) gsap.set(heroCenter, { opacity: 0, y: 40 });
    if (heroTitle) gsap.set(heroTitle, { opacity: 0, y: 50 });
    if (heroExcerpt) gsap.set(heroExcerpt, { opacity: 0, y: 30 });
    if (heroButtons) gsap.set(heroButtons, { opacity: 0, y: 20 });
    if (statBlock) gsap.set(statBlock, { opacity: 0, scale: 0.8 });
    if (badgeCircle) gsap.set(badgeCircle, { opacity: 0, scale: 0, rotation: -180 });

    const tl = gsap.timeline({ delay: 0.2 });

    if (heroLeft) {
      tl.to(heroLeft, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, 0);
    }
    if (heroRight) {
      tl.to(heroRight, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, 0);
    }
    if (heroCenter) {
      tl.to(heroCenter, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.2);
    }
    if (heroTitle) {
      tl.to(heroTitle, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.4);
    }
    if (heroExcerpt) {
      tl.to(heroExcerpt, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.6);
    }
    if (heroButtons) {
      tl.to(heroButtons, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.8);
    }
    if (statBlock) {
      tl.to(statBlock, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 0.5);
    }
    if (badgeCircle) {
      tl.to(badgeCircle, { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.5)" }, 0.6);
    }
  }

  // 13. About section animation
  const aboutSection = document.querySelector(".home-about-section");
  if (aboutSection) {
    gsap.set(aboutSection, { opacity: 0 });
    gsap.to(aboutSection, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 70%",
      },
    });
  }

  // 14. Project section categories
  const projectCategories = document.querySelectorAll(".home-project-category");
  gsap.set(projectCategories, { opacity: 0, x: -30 });
  projectCategories.forEach((cat: Element, idx: number) => {
    gsap.to(cat, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      delay: idx * 0.1,
      scrollTrigger: {
        trigger: cat,
        start: "top 85%",
      },
    });
  });

  // 15. Process section animation
  const processSection = document.querySelector(".home-process-section");
  if (processSection) {
    gsap.set(processSection, { opacity: 0 });
    gsap.to(processSection, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: processSection,
        start: "top 70%",
      },
    });
  }

  // 16. Next project bg animation
  const nextProjectBg = document.querySelector(".next-project-bg");
  if (nextProjectBg) {
    gsap.set(nextProjectBg, { scaleY: 0, transformOrigin: "bottom" });
    gsap.to(nextProjectBg, {
      scaleY: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: nextProjectBg,
        start: "top 80%",
      },
    });
  }

  // 17. Service item thumbnail hover
  const serviceThumbnails = document.querySelectorAll(".service-item-thumbnail, .service-item-media-overlay");
  serviceThumbnails.forEach((thumb: Element) => {
    const parent = thumb.closest(".service-item-image-wrapper");
    if (parent) {
      gsap.set(thumb, { scale: 1 });
      parent.addEventListener("mouseenter", () => {
        gsap.to(thumb, { scale: 1.05, duration: 0.4, ease: "power2.out" });
      });
      parent.addEventListener("mouseleave", () => {
        gsap.to(thumb, { scale: 1, duration: 0.4, ease: "power2.out" });
      });
    }
  });

  // Refresh ScrollTrigger after all setup
  ScrollTrigger.refresh();
}
