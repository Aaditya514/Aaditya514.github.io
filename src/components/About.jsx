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
                  Who I Am
                </span>
                <span className="text-secondary text-xs font-mono">01 // INTRO</span>
              </div>

              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                <DecryptedText text="Hey! I'm Aaditya." />
              </h3>

              <p className="text-secondary text-[14.5px] sm:text-[15.5px] leading-relaxed">
                A full-stack developer passionate about software development, problem-solving, and creating meaningful digital experiences.
              </p>

              <p className="text-secondary text-[14.5px] sm:text-[15.5px] leading-relaxed mt-3">
                I enjoy building products that solve real problems, understanding things from the user's perspective, and creating solutions that can genuinely be useful to people. I'm naturally curious, always eager to learn, and constantly looking for ways to improve.
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
                  Currently Working
                </span>
                <span className="text-secondary text-xs font-mono">02 // NOW</span>
              </div>

              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                <DecryptedText text="Intellect Design Arena" />
              </h3>

              <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed">
                I'm currently working at Intellect Design Arena, where I get to work with real-world systems and gain hands-on experience as a software developer.
              </p>

              <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed mt-3">
                My interests span across full-stack development, with a focus on Java, Spring Boot, Angular, Node.js, and building reliable web applications. I also enjoy working on personal projects that help me explore new technologies and strengthen my skills.
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
                  Beyond the Screen
                </span>
                <span className="text-secondary text-xs font-mono">03 // LIFE</span>
              </div>

              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2">
                <DecryptedText text="Outside of Code" />
              </h3>

              <p className="text-secondary text-[14.5px] sm:text-[15px] leading-relaxed max-w-4xl">
                When I'm not coding, I enjoy exploring new places, listening to music, going for walks, and spending time with friends. I also enjoy learning more about human psychology and understanding how people think, behave, and see the world differently.
              </p>

              <p className="text-secondary text-[14.5px] sm:text-[15px] leading-relaxed max-w-4xl mt-3">
                I believe there's a lot to learn beyond the screen, and the experiences, conversations, and perspectives we gain outside of work often shape how we think and create.
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
