import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  const heroRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(160);

  useEffect(() => {
    if (lineRef.current) {
      setLineHeight(lineRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen mx-auto overflow-hidden pb-20"
    >
      <div
        className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        {/* Left dot and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            style={{ y }}
            className="w-5 h-5 rounded-full bg-[#915eff]"
          />
          <div
            ref={lineRef}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        {/* Text content */}
        <motion.div style={{ y }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Yo, I'm{' '}
            <motion.span
              className="text-[#915eff] inline-block cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: '0 0 20px rgba(145, 94, 255, 0.8)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Aaditya
            </motion.span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-Stack  Developer <br className="sm:block hidden" />
            Data Analytics Enthusiast.
          </p>

          <p className="mt-4 text-white-100 text-[17px] max-w-lg leading-[30px]">
            I craft seamless web experiences with the PERN stack 💻 and turn complex data into clear insights 📊 — basically turning caffeine into code ☕💡. Passionate about building fast, scalable apps 🚀 backed by clean architecture 🧱 and mildly obsessive debugging 🐛🔍.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
