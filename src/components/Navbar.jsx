import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { TbHome, TbUser, TbBriefcase2, TbTrophy, TbSocial } from "react-icons/tb";

const navLinks = [
  { id: "hero",     title: "Home",       icon: TbHome },
  { id: "about",    title: "About",      icon: TbUser },
  { id: "work",     title: "Experience", icon: TbBriefcase2 },
  { id: "projects", title: "Projects",   icon: TbBriefcase2 },
  { id: "tech",     title: "Skills",     icon: TbTrophy },
  { id: "contact",  title: "Contact",    icon: TbSocial },
];

const IconContainer = ({ mouseX, title, icon: Icon, id, onClick, isActive }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(id)}
      className="cursor-pointer relative focus:outline-none"
      aria-label={title}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`aspect-square rounded-full flex items-center justify-center relative transition-colors duration-200 ${
          isActive
            ? "bg-[#7c5dfa] text-white shadow-lg shadow-[#7c5dfa]/40"
            : "bg-[#262626] dark:bg-neutral-800 text-neutral-300 hover:bg-[#333333] hover:text-white"
        }`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2.5 py-1 whitespace-pre rounded-md bg-[#18181b] border border-neutral-700/80 text-white font-medium absolute left-1/2 -top-9 -translate-x-1/2 text-xs shadow-2xl pointer-events-none z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          <Icon className="w-full h-full stroke-[1.8]" />
        </motion.div>
      </motion.div>
    </button>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNavbar, setShowNavbar] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar only shows when entering the 3D model screen (#hero)
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setShowNavbar(rect.top <= window.innerHeight * 0.7);
      } else {
        setShowNavbar(window.scrollY > 250);
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["contact", "tech", "projects", "about", "hero"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const target = el.closest("section") || el;
          const rect = target.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const target = element.closest("section") || element;
      if (window.lenis) {
        window.lenis.scrollTo(target, { duration: 1.4, offset: 0 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
  };

  return (
    /* Always in DOM — opacity/y driven by showNavbar to avoid AnimatePresence
       insertBefore crash when the header mounts/unmounts while React is mid-commit. */
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: showNavbar ? 1 : 0,
        y: showNavbar ? 0 : 40,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      style={{ pointerEvents: showNavbar ? undefined : "none" }}
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto mx-auto flex h-16 gap-3 sm:gap-4 items-end rounded-2xl bg-[#141417]/90 dark:bg-neutral-900/90 px-4 pb-3 border border-white/10 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
      >
        {navLinks.map((item) => (
          <IconContainer
            mouseX={mouseX}
            key={item.id}
            {...item}
            onClick={scrollToSection}
            isActive={activeSection === item.id}
          />
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
