
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // High performance quickTo setters for instant, zero-lag tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.08, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.08, ease: "power2.out" });

    // Initial positioning offscreen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseEnterInteractive = (e) => {
      setIsHovered(true);
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor") || "");
      } else {
        setCursorText("");
      }
    };

    const onMouseLeaveInteractive = () => {
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", onMouseMove);

    const setupListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, [data-cursor], .cursor-pointer, [role='button']"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });

      return interactiveElements;
    };

    let elements = setupListeners();

    // Observe DOM mutations to bind new elements
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      elements = setupListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden sm:flex items-center justify-center transition-all duration-200 ease-out select-none ${isHovered
          ? "w-12 h-12 bg-[#915eff]/25 border-2 border-[#915eff] shadow-[0_0_25px_rgba(145,94,255,0.6)] backdrop-blur-[2px] scale-110"
          : "w-3.5 h-3.5 bg-white border border-[#915eff] shadow-[0_0_12px_#915eff] scale-100"
        }`}
    >
      {isHovered && cursorText ? (
        <span className="text-[9px] font-mono font-bold tracking-wider text-white uppercase drop-shadow pointer-events-none">
          {cursorText}
        </span>
      ) : isHovered ? (
        <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_#fff]" />
      ) : null}
    </div>
  );
};

export default CustomCursor;
