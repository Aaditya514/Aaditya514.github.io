import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ max: 25, scale: 1, speed: 450 }}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='w-full bg-gradient-to-r from-[#915eff]/30 to-[#1f1f2e]/40 p-[1px] rounded-[20px] shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300 ease-in-out'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly text-center'>
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold mt-4'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* About Text */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        🚀 I'm a full-stack dev riding the PERN stack 🌊 — crafting seamless UIs with React ⚛️, scalable backends with Node.js 🔧, and blending AI 🔮 into the mix to make products smarter and faster. Whether it’s building intuitive interfaces or smart integrations, I thrive where frontend meets backend meets intelligence.
        <br /><br />
        📊 Data isn't just numbers — it's a story waiting to be told.I specialize in collecting 🗂️, cleaning 🧹, and analyzing 📈 data to uncover trends, highlight patterns, and drive smarter decisions. From building dashboards that simplify complex metrics to writing efficient scripts with Python, SQL, and Pandas, I turn raw data into clear, actionable insights 🔍. I ensure the data actually works for the product, the user, and the team behind it 👥.
        <br /><br />
       🧠 I move fast ⚡, learn faster 🧪, and collaborate tightly 🤝 to turn ideas into elegant, high-performance solutions. Every project I touch blends thoughtful UX 🎨 with robust code and a clear goal: build things that matter, and build them well ✅.
      </motion.p>

      {/* Cards Grid */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');
export default WrappedAbout;
