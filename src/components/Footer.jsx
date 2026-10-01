import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full bg-[#080614] border-t border-white/10 text-white relative z-10 py-5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#915eff] to-[#00cea8] flex items-center justify-center font-bold text-xs text-white shadow-md">
            A
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white">
              Aaditya Aanand
            </span>
            <span className="text-secondary text-xs ml-2 font-mono hidden md:inline">
              Full-Stack Developer & Systems
            </span>
          </div>
        </div>

        {/* Center: Compact Nav Links */}
        <div className="flex items-center gap-3 sm:gap-5 text-xs text-secondary font-medium">
          <button onClick={() => scrollTo("hero")} className="hover:text-white transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollTo("tech")} className="hover:text-white transition-colors cursor-pointer">
            Skills
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Aaditya514"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-[#915eff] text-secondary hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <FaGithub size={13} />
          </a>
          <a
            href="https://www.linkedin.com/in/aadityaaanand514/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-[#00cea8] text-secondary hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <FaLinkedin size={13} />
          </a>
          <a
            href="https://leetcode.com/u/Aaditya_514/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-amber-400 text-secondary hover:text-black flex items-center justify-center transition-all duration-200"
          >
            <SiLeetcode size={13} />
          </a>

          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="w-7 h-7 rounded-lg bg-tertiary hover:bg-[#915eff] border border-white/10 text-secondary hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer ml-1"
          >
            <FaArrowUp size={11} />
          </button>
        </div>
      </div>

      {/* Subtle Copyright Strip */}
      <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-secondary/70 gap-1 font-mono">
        <p className="flex items-center gap-1">
          Designed with <FaHeart className="text-rose-500 inline text-[9px]" /> by Aaditya Aanand
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;