"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import SplashScreen from "@/components/splash/SplashScreen";
import SpaceBackground from "@/components/background/SpaceBackground";
import BottomNav, { type SectionId } from "@/components/navigation/BottomNav";

import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import CatalogSection from "@/components/sections/CatalogSection";

const sections: SectionId[] = ["about", "projects", "contact", "catalog"];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const [appVisible, setAppVisible] = useState(false);

  /*
   * ========================================
   * SPLASH → APPLICATION
   * ========================================
   */

  useEffect(() => {
    const handleSplashComplete = () => {
      setAppVisible(true);
    };

    window.addEventListener("angkasa:splash-complete", handleSplashComplete);

    return () => {
      window.removeEventListener(
        "angkasa:splash-complete",
        handleSplashComplete,
      );
    };
  }, []);

  /*
   * ========================================
   * NAVIGATION
   * ========================================
   */

  const navigateTo = useCallback((section: SectionId) => {
    const element = document.getElementById(section);

    const container = containerRef.current;

    if (!element || !container) return;

    container.scrollTo({
      left: element.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  /*
   * ========================================
   * ACTIVE SECTION
   * ========================================
   */

  useEffect(() => {
    if (!appVisible) return;

    const container = containerRef.current;

    if (!container) return;

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) return;

        setActiveSection(visible.target.id as SectionId);
      },
      {
        root: container,
        threshold: 0.6,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [appVisible]);

  /*
   * ========================================
   * MOUSE WHEEL → HORIZONTAL SCROLL
   * ========================================
   *
   * Wheel atas    → kiri
   * Wheel bawah   → kanan
   *
   * Mobile tidak terpengaruh karena
   * touch swipe tetap ditangani browser.
   */

  useEffect(() => {
    if (!appVisible) return;

    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      /*
       * Kalau gesture sudah horizontal,
       * gunakan deltaX.
       *
       * Kalau mouse wheel biasa,
       * gunakan deltaY sebagai horizontal.
       */
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (delta === 0) return;

      event.preventDefault();

      container.scrollBy({
        left: delta,
        behavior: "auto",
      });
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [appVisible]);

  /*
   * ========================================
   * RENDER
   * ========================================
   */

  return (
    <main
      className="
        relative
        h-dvh
        overflow-hidden
      "
    >
      {/* ==================================
          SPLASH SCREEN
      =================================== */}

      <SplashScreen />

      {/* ==================================
          APPLICATION
      =================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.985,
          y: 12,
        }}
        animate={
          appVisible
            ? {
                opacity: 1,
                scale: 1,
                y: 0,
              }
            : {
                opacity: 0,
                scale: 0.985,
                y: 12,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          overflow-hidden
        "
        style={{
          pointerEvents: appVisible ? "auto" : "none",
        }}
      >
        {/* Cosmic background */}
        <SpaceBackground />

        {/* ==================================
            HORIZONTAL PAGE CONTAINER
        =================================== */}

        <div
          ref={containerRef}
          className="
            relative
            z-10
            flex
            h-full
            w-full

            snap-x
            snap-mandatory

            overflow-x-auto
            overflow-y-hidden

            scroll-smooth
            overscroll-x-contain

            touch-pan-x

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* ==================================
              ABOUT
          =================================== */}

          <AboutSection />

          {/* ==================================
              PROJECTS
          =================================== */}

          <ProjectsSection />

          {/* ==================================
              CONTACT
          =================================== */}

          <ContactSection />

          {/* ==================================
              CATALOG
          =================================== */}

          <CatalogSection />
        </div>

        {/* ==================================
            BOTTOM DOCK
        =================================== */}

        <BottomNav activeSection={activeSection} onNavigate={navigateTo} />
      </motion.div>
    </main>
  );
}
