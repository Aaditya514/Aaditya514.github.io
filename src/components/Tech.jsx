import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Tech = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <h2 className={styles.sectionHeadText}>Tech Stack</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-50px" });

          return (
            <motion.div
              ref={ref}
              key={technology.name}
              className="w-28 h-28"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
