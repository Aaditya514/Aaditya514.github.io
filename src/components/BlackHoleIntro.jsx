import { useEffect, useRef } from "react";
import gsap from "gsap";

const nameString = "Aaditya Aanand";

/**
 * BlackHoleIntro — Fixed fullscreen overlay.
 *
 * KEY BEHAVIOUR:
 *  - position: fixed → zero scroll-height. The scrollbar only reflects the real page.
 *  - pointer-events: none → wheel/touch events pass straight through to the page.
 *  - On scroll, the overlay "explodes" outward from centre (scale ↑ + opacity ↓),
 *    revealing the Hero page that lives underneath it from scroll=0.
 *  - Once scrollY passes ~55 vh, the overlay becomes display:none.
 *  - Scrolling back to top (scrollY < 5px) restores the overlay.
 */
const BlackHoleIntro = () => {
  const overlayRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const hasExited = useRef(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!overlay) return;

    // ── LOCK page scroll immediately ───────────────────────────────────────────
    // Freeze native scroll so the hero page stays perfectly at the top.
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Pause Lenis smooth-scroll engine (it initialises in SmoothScroll.jsx's
    // useEffect which runs after children, so wait one tick to be safe).
    const lenisTimer = setTimeout(() => {
      if (window.lenis) window.lenis.stop();
    }, 0);

    // ── Entrance animations ────────────────────────────────────────────────────
    const ctx = gsap.context(() => {
      gsap.from(bg, {
        scale: 1.1, opacity: 0.65, duration: 1.8, ease: "power2.out",
      });
      gsap.from(".bh-front", {
        y: 60, opacity: 0, duration: 0.9, delay: 0.4, stagger: 0.06, ease: "back.out(1.7)",
      });
      gsap.from(".bh-back", {
        y: 60, opacity: 0, duration: 0.9, delay: 0.4, stagger: -0.06, ease: "back.out(1.7)",
      });
      gsap.from(".bh-subtitle", {
        opacity: 0, y: 22, duration: 0.7, delay: 0.9, ease: "power2.out",
      });
      gsap.from(".bh-scroll-hint", {
        opacity: 0, y: 10, duration: 0.5, delay: 1.8, ease: "power2.out",
      });
    }, overlay);

    // ── Wheel-driven exit (page stays locked at scrollY=0 the entire time) ─────
    // We intercept wheel events in CAPTURE phase before Lenis sees them,
    // and call preventDefault() so the page never actually scrolls.
    // Exit progress is driven entirely by accumulated wheel deltaY.
    let progress = 0;

    const unlockPage = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();
    };

    const onWheel = (e) => {
      // Once exited, let events through normally
      if (hasExited.current) return;

      // Prevent native scroll AND Lenis from reacting
      e.preventDefault();
      e.stopPropagation();

      // Normalise delta across pixel / line / page modes
      const rawDelta =
        e.deltaMode === 1 ? e.deltaY * 18 :
          e.deltaMode === 2 ? e.deltaY * 400 :
            e.deltaY;

      progress = Math.min(1, Math.max(0, progress + rawDelta * 0.0014));

      // BG: subtle counter-pull inward (gravity feel)
      gsap.set(bg, {
        scale: 1 + progress * 0.22,
        opacity: 1 - progress * 0.35,
      });
      // Content: collapses slightly faster than the overlay shell
      gsap.set(content, {
        scale: 1 - progress * 0.1,
        opacity: 1 - progress * 1.4,
      });
      // Full overlay: erupts outward from centre → hero revealed beneath
      gsap.set(overlay, {
        scale: 1 + progress * 1.7,
        opacity: 1 - progress,
      });

      if (progress >= 1) {
        hasExited.current = true;
        overlay.style.display = "none";
        overlay.style.pointerEvents = "none";
        unlockPage();
        // Listener no longer needed — wheel events go to page naturally now
        window.removeEventListener("wheel", onWheel, { capture: true });
      }
    };

    // capture:true → we intercept BEFORE Lenis' bubble-phase listener
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    return () => {
      clearTimeout(lenisTimer);
      ctx.revert();
      window.removeEventListener("wheel", onWheel, { capture: true });
      // Always restore scroll on unmount
      unlockPage();
    };
  }, []);

  const halfValue = Math.floor(nameString.length / 2);

  return (
    /*
     * position: fixed  — not in document flow, zero scroll-height contribution.
     * pointer-events: none — all pointer/scroll events go straight to the page.
     * z-[150]          — floats above Hero + Navbar while visible.
     * transformOrigin: center center — scale erupts from the middle outward.
     */
    <div
      ref={overlayRef}
      className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#06050e] select-none z-[150]"
      style={{
        transformOrigin: "center center",
        pointerEvents: "none",
        willChange: "transform, opacity",
      }}
    >
      {/* Black hole background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url(/blackhole.png)",
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      />

      {/* Dark radial vignette for depth */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(6,5,14,0.75) 100%)" }}
      />

      {/* Foreground content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Name — split-letter GSAP bounce */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wider whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          style={{
            textShadow:
              "0 0 12px #000, 0 0 24px #000, 0 0 40px #000, 2px 2px 4px #000, -2px -2px 4px #000, 2px -2px 4px #000, -2px 2px 4px #000, 0 4px 20px rgba(0,0,0,1)",
          }}
        >
          {nameString.split("").map((char, idx) => {
            const isFront = idx <= halfValue;
            return (
              <span
                key={idx}
                className={`inline-block ${isFront ? "bh-front" : "bh-back"} ${char === " " ? "w-2 sm:w-4 md:w-6" : ""
                  }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <p
          className="bh-subtitle mt-4 sm:mt-5 text-white/90 text-xs sm:text-sm md:text-base font-mono tracking-widest uppercase font-semibold"
          style={{ textShadow: "0 0 8px #000, 0 2px 10px #000, 1px 1px 3px #000" }}
        >
          Software Engineer &amp; Full-Stack Developer
        </p>

        {/* Subtle scroll cue */}
        <div className="bh-scroll-hint mt-10 flex flex-col items-center gap-1.5 opacity-70">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.35em] text-white/45 uppercase">
            scroll
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlackHoleIntro;
