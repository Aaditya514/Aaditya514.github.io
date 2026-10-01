import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { ShinyText } from "./reactbits";

const categories = ["All", "Frontend", "Backend", "Databases", "Languages", "Tools & DevOps"];

// forwardRef required: AnimatePresence mode="popLayout" passes a ref to direct
// children to measure layout. Plain function components throw a ref warning.
const TechCard = forwardRef(function TechCard({ technology, index }, ref) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="w-full"
    >
      <Tilt
        options={{
          max: 18,
          scale: 1.04,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        }}
        className="w-full h-full"
      >
        <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-[#915eff]/30 to-transparent hover:from-[#915eff] hover:to-[#00cea8] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(145,94,255,0.35)] h-full">
          <div className="bg-[#120f26]/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between h-[160px] sm:h-[175px] text-center border border-white/5 group-hover:border-transparent transition-colors">
            {/* Top pill for category */}
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#dfd9ff] border border-white/10 group-hover:bg-[#915eff]/20 group-hover:text-white transition-colors">
              {technology.category}
            </span>

            {/* Icon with glowing backdrop */}
            <div className="relative my-2 w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-white/[0.03] group-hover:bg-white/[0.08] transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-[#915eff]/20 blur-md group-hover:bg-[#915eff]/40 transition-all opacity-0 group-hover:opacity-100" />
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
              />
            </div>

            {/* Tech Name (Advanced/Intermediate removed) */}
            <div>
              <p className="text-white text-sm sm:text-base font-semibold group-hover:text-[#915eff] transition-colors line-clamp-1">
                {technology.name}
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
});

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="flex flex-col mx-auto w-full">
      {/* Header */}
      <motion.div variants={textVariant()}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#915eff] animate-pulse" />
          <ShinyText text="✦ PRODUCTION ECOSYSTEM" speed={3} className="text-xs uppercase tracking-widest text-[#915eff]" />
        </div>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px]"
      >
        A comprehensive toolkit spanning enterprise full-stack engineering, scalable relational & NoSQL databases, asynchronous queue workers, and DevOps containerization.
      </motion.p>

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
        {categories.map((category) => {
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

      {/* Filtered Grid: Full-width responsive CSS Grid filling all columns */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 mt-10 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredTechnologies.map((technology, index) => (
            <TechCard
              key={technology.name}
              technology={technology}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, "tech");
export default WrappedTech;
