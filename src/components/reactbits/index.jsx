import { useRef, useState, useEffect } from "react";

// ================= React Bits: ShinyText Component =================
export const ShinyText = ({ text, disabled = false, speed = 4, className = "" }) => {
  return (
    <span
      className={`text-transparent bg-clip-text inline-block font-mono ${
        disabled
          ? "text-[#dfd9ff]"
          : "bg-gradient-to-r from-white/70 via-white to-white/70"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.2) 70%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animation: `shiny-sweep ${speed}s linear infinite`,
      }}
    >
      {text}
    </span>
  );
};

// ================= React Bits: DecryptedText Component =================
export const DecryptedText = ({
  text,
  speed = 35,
  maxIterations = 12,
  className = "",
  encryptedClassName = "text-[#915eff]",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    if (isHovered) {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovered, text, speed]);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block cursor-pointer select-none transition-colors ${className}`}
    >
      {displayText}
    </span>
  );
};

// ================= React Bits: SpotlightCard Component =================
export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(145, 94, 255, 0.18)",
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-white/10 bg-[#0d0a22]/85 backdrop-blur-xl overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:border-[#915eff]/40 shadow-xl ${className}`}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
