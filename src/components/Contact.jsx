import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const socials = [
  {
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aadityaaanand514/",
  },
  {
    icon: <FaInstagram size={24} />,
    label: "Instagram",
    url: "https://www.instagram.com/_._aadiboi_._/",
  },
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    url: "https://github.com/Aaditya514",
  },
  {
    icon: <SiLeetcode size={24} />,
    label: "LeetCode",
    url: "https://leetcode.com/u/Aaditya_514/",
  },
];

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">

      {/* Left Section: Socials + Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-10 rounded-2xl text-center"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>SOCIALS</h3>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {socials.map(({ icon, url, label }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-tertiary text-white shadow-md hover:shadow-lg transition-all duration-300"
              title={label}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mwpbnzaz"
          method="POST"
          className="mt-12 flex flex-col gap-6 text-left"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Your message here..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105 transition-transform duration-200"
          >
            Send Message ✉️
          </button>
        </form>

      </motion.div>

      {/* Right Section: 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:min-h-[600px] h-[400px] w-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;

