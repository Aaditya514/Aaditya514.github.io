import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ShinyText } from "./reactbits";

const socials = [
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aadityaaanand514/",
    color: "hover:border-[#0a66c2] hover:text-[#0a66c2]",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    url: "https://github.com/Aaditya514",
    color: "hover:border-purple-400 hover:text-purple-400",
  },
  {
    icon: <SiLeetcode size={20} />,
    label: "LeetCode",
    url: "https://leetcode.com/u/Aaditya_514/",
    color: "hover:border-amber-400 hover:text-amber-400",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    url: "https://www.instagram.com/_._aadiboi_._/",
    color: "hover:border-pink-500 hover:text-pink-500",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const myEmail = "aanandwinner5@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Standard form submission continues to Formspree
  };

  return (
    <div className="xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left Section: Socials + Quick Connect + Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.8] bg-[#100d26]/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
      >
        <div className="absolute top-0 right-10 w-40 h-40 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00cea8] animate-pulse" />
          <ShinyText text="✦ GET IN TOUCH" speed={3} className="text-xs uppercase tracking-widest text-[#00cea8]" />
        </div>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        {/* Quick Email Copy Pill */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#161233] border border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
            <HiOutlineMail className="text-[#00cea8] text-lg shrink-0" />
            <span className="font-mono text-[#dfd9ff] select-all">{myEmail}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white font-medium border border-white/10 flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <FaCopy className="text-secondary" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Location & Status Badges */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-secondary font-mono">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <HiOutlineLocationMarker className="text-rose-400" />
            India
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Hire
          </span>
        </div>

        {/* Social Icons Strip */}
        <div className="mt-6 flex items-center gap-3 flex-wrap">
          {socials.map(({ icon, url, label, color }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 flex items-center justify-center rounded-xl bg-[#161233] text-white border border-white/10 shadow-md hover:scale-110 transition-all duration-200 ${color}`}
              title={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mwpbnzaz"
          method="POST"
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5 text-left"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium text-xs sm:text-sm mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="What's your name?"
              className="bg-[#161233] py-3.5 px-5 placeholder:text-secondary/70 text-white rounded-xl outline-none border border-white/10 focus:border-[#915eff] text-sm transition-colors"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium text-xs sm:text-sm mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="What's your email address?"
              className="bg-[#161233] py-3.5 px-5 placeholder:text-secondary/70 text-white rounded-xl outline-none border border-white/10 focus:border-[#915eff] text-sm transition-colors"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium text-xs sm:text-sm mb-2">Your Message</span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="What would you like to discuss?"
              className="bg-[#161233] py-3.5 px-5 placeholder:text-secondary/70 text-white rounded-xl outline-none border border-white/10 focus:border-[#915eff] text-sm transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#915eff] to-[#804dee] hover:from-[#804dee] hover:to-[#6d32dc] text-white font-bold text-sm shadow-lg shadow-[#915eff]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-fit"
          >
            <FaPaperPlane size={13} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </motion.div>

      {/* Right Section: 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:min-h-[550px] h-[380px] w-full relative"
      >
        {/* Ambient Halo Behind Earth */}
        <div className="absolute inset-0 bg-radial from-[#915eff]/15 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
