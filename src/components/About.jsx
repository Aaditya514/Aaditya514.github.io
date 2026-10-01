import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ShinyText, DecryptedText, SpotlightCard } from "./reactbits";

// ================= Main About Component (Clean & Uncluttered) =================
const About = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00cea8] animate-ping" />
          <ShinyText text="✦ DEVELOPER PHILOSOPHY" speed={3} className="text-xs uppercase tracking-widest text-[#00cea8]" />
        </div>
        <h2 className={styles.sectionHeadText}>
          About <span className="text-[#915eff]">Me.</span>
        </h2>
      </motion.div>

      {/* Spacious, Elegant Bento Grid (Rows 2 & 3 Removed for Zero Clutter) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Full-Stack Craftsmanship (Large Hero Card spanning 7 cols) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="md:col-span-7"
        >
          <SpotlightCard className="h-full flex flex-col justify-start" spotlightColor="rgba(145, 94, 255, 0.22)">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#915eff]/15 text-[#dfd9ff] border border-[#915eff]/30">
                  Full-Stack Architecture
                </span>
                <span className="text-secondary text-xs font-mono">01 // CRAFT</span>
              </div>

              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                <DecryptedText text="Bridging Systems & Experience" />
              </h3>

              <p className="text-secondary text-[14.5px] sm:text-[15.5px] leading-relaxed">
                Full-stack developer focused on building robust web applications and scalable backends. I architect structured, responsive user interfaces with Angular, develop scalable services with Spring Boot and Node.js, and translate complex requirements into clean, reliable systems where engineering rigor meets seamless user experience.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Card 2: System Reliability & High Throughput (5 cols) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="md:col-span-5"
        >
          <SpotlightCard className="h-full flex flex-col justify-start" spotlightColor="rgba(0, 206, 168, 0.2)">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00cea8]/15 text-[#00cea8] border border-[#00cea8]/30">
                  High Reliability
                </span>
                <span className="text-secondary text-xs font-mono">02 // SCALE</span>
              </div>

              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                <DecryptedText text="Reliability & Performance" />
              </h3>

              <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed">
                System reliability and efficiency are core to every application I develop. From mathematical task prioritization algorithms to high-throughput asynchronous message queues with BullMQ and Redis, I turn real-world challenges into high-performance, production-grade software.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Card 3: Velocity & Problem Solving (Full Width 12 cols banner) */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="md:col-span-12"
        >
          <SpotlightCard spotlightColor="rgba(145, 94, 255, 0.18)">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-purple-300 border border-purple-400/20">
                  Execution Velocity
                </span>
                <span className="text-secondary text-xs font-mono">03 // MINDSET</span>
              </div>

              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2">
                <DecryptedText text="Curiosity, Speed & Clean Execution" />
              </h3>

              <p className="text-secondary text-[14.5px] sm:text-[15px] leading-relaxed max-w-4xl">
                I prioritize high execution velocity, continuous learning, and clean architectural design. Every project combines thoughtful user experience with robust code and a clear focus: delivering reliable software that solves real problems with clarity and efficiency.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
