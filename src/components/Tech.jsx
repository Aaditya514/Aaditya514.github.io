import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col  h-screen mx-auto">
      <h2 className={styles.sectionHeadText } >Tech Stack</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">

        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}

      </div>
    </div>
  )
}

const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;