import { useState, useRef, forwardRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ShinyText, DecryptedText } from "./reactbits";

const projectCategories = [
  "All",
  "Full-Stack & Systems",
  "Backend & Systems",
];

// forwardRef is required because AnimatePresence mode="popLayout" passes a ref
// to direct children to measure them. Without it React throws a ref warning and
// the DOM insertBefore mutation fails crashing the whole tree.
const ProjectCard = forwardRef(function ProjectCard({
  name,
  category,
  description,
  highlights,
  tags,
  source_code_link,
  live_demo_link,
  index,
}, ref) {
  const cardRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="w-full h-full flex flex-col"
    >
      <Tilt
        options={{ max: 12, scale: 1.02, speed: 450 }}
        className="h-full flex flex-col"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-full flex flex-col justify-between rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-[#915eff]/30 to-transparent hover:from-[#915eff] hover:to-[#00cea8] transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(145,94,255,0.25)] overflow-hidden"
        >
          {/* ReactBits Cursor Spotlight Glow */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(145, 94, 255, 0.22), transparent 75%)`,
            }}
          />

          <div className="relative z-20 bg-[#100d26]/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl flex-1 flex flex-col justify-between border border-white/5">
            {/* Card Body */}
            <div>
              {/* Header: Category Badge + GitHub Action Button */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00cea8] animate-pulse" />
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide bg-white/5 text-[#00cea8] border border-[#00cea8]/25">
                    {category}
                  </span>
                </div>

                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View GitHub Repository"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#915eff] text-secondary hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#915eff] hover:scale-110 shadow-sm cursor-pointer"
                >
                  <FaGithub size={15} />
                </a>
              </div>

              {/* Title with ReactBits DecryptedText */}
              <div>
                <h3 className="text-white font-bold text-lg sm:text-[19px] tracking-tight hover:text-[#915eff] transition-colors leading-snug">
                  <DecryptedText text={name} speed={25} maxIterations={8} />
                </h3>
                <p className="mt-2 text-secondary text-[13px] sm:text-[13.5px] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Technical Highlights */}
              {highlights && highlights.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-white/5 space-y-1.5">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11.5px] sm:text-xs text-[#dfd9ff]/90 leading-snug">
                      <FaCheckCircle className="text-[#00cea8] shrink-0 text-[10px] mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions & Tech Tags */}
            <div className="mt-4 pt-3 border-t border-white/10">
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 font-mono text-secondary border border-white/5"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2.5 rounded-lg bg-tertiary hover:bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#915eff]/50 transition-all duration-200"
                >
                  <FaGithub size={13} />
                  <span>Code</span>
                </a>
                <a
                  href={live_demo_link || source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2.5 rounded-lg bg-gradient-to-r from-[#915eff] to-[#804dee] hover:from-[#804dee] hover:to-[#6d32dc] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#915eff]/20 transition-all duration-200"
                >
                  <FaExternalLinkAlt size={11} />
                  <span>Explore</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00cea8] animate-pulse" />
          <ShinyText text="✦ REAL-WORLD ENGINEERING" speed={3} className="text-xs uppercase tracking-widest text-[#00cea8]" />
        </div>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I’ve built a range of full-stack web applications and scalable systems that solve real-world problems. My portfolio reflects strong front-end and back-end development skills, combined with experience in system architecture to deliver scalable, reliable, and user-focused solutions.
        </motion.p>

        <a
          href="https://github.com/Aaditya514?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 hover:border-white/30 transition-all duration-200 flex items-center gap-2 w-fit"
        >
          <FaGithub />
          <span>More on GitHub →</span>
        </a>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
        {projectCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#915eff] to-[#804dee] text-white shadow-md shadow-[#915eff]/40 scale-105"
                  : "bg-tertiary/70 text-secondary hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid: Exactly 3 columns in a SINGLE ROW on desktop */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "projects");
export default WrappedWorks;
