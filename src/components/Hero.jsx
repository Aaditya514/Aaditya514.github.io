import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { resumeLink } from "../constants";
import { DeveloperAvatar } from "./canvas";
import { DecryptedText } from "./reactbits";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Pin the Hero section for an extra 500px of scroll distance.
    // The user lands here after the black hole exits and must scroll
    // 500px more before the About section comes into view.
    // pinSpacing:true inserts that extra height into the document flow
    // so the next section doesn't abruptly jump.
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=500",
        pin: true,
        pinSpacing: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative w-full min-h-screen mx-auto flex items-start pt-7 sm:pt-9 lg:pt-11 pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#915eff]/15 via-[#00cea8]/10 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10`}>
        {/* Left Column: Short, Punchy Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Main Heading with Short, Punchy Words */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-[60px] tracking-tight leading-[1.15]">
              Passionate about Code.
              <br />
              Driven by Impact.
              <br />
              <span className="text-white">Hi! I am </span>
              {/* ReactBits DecryptedText inside purple badge */}
              <span className="inline-block mt-1 px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl bg-[#7c5dfa] text-white shadow-lg shadow-[#7c5dfa]/30">
                <DecryptedText
                  text="Aaditya Aanand"
                  speed={35}
                  maxIterations={10}
                  className="font-bold tracking-normal"
                />
              </span>
            </h1>
          </motion.div>

          {/* Description Subtext: Short, crisp, and punchy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 sm:mt-5 text-secondary text-base sm:text-lg leading-relaxed max-w-lg font-normal"
          >
            Software Engineer based in India. I love building fast web apps, clean systems, and solving real-world problems.
          </motion.p>

          {/* Action Button: Clean Standalone Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 sm:mt-6 flex items-center"
          >
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#7c5dfa] hover:bg-[#6c48e8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#7c5dfa]/30 hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <FaFileDownload size={14} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Standalone 3D Cartoon Developer Mascot with Studio Lighting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-center -mt-2 sm:-mt-4"
        >
          {/* Ambient Soft Studio Glow Behind Mascot */}
          <div className="absolute inset-0 bg-radial from-[#915eff]/20 via-[#00cea8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Floating Pure 3D Canvas */}
          <DeveloperAvatar />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
