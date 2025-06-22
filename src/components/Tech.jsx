import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Tech = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <h2 className={styles.sectionHeadText}>Tech Stack</h2>

      <div
        className="flex flex-row flex-wrap justify-center gap-10 mt-10"
        ref={containerRef}
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className="w-28 h-28"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {isMobile ? (
              <div className="w-full h-full flex items-center justify-center rounded-full shadow-md p-4">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ) : (
              <BallCanvas icon={technology.icon} staticIcon={technology.icon} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
