import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { ShinyText } from "./reactbits";

/* ── Card ───────────────────────────────────────────────────────────────── */
const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="relative pl-10 sm:pl-14 pb-10 last:pb-0"
  >
    {/* ── Dot on the spine ── */}
    <div
      className="absolute left-0 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex-shrink-0 z-10"
      style={{
        borderColor: experience.color,
        backgroundColor: experience.color + "28",
        boxShadow: `0 0 14px ${experience.color}88`,
      }}
    />

    {/* ── Connector line down to next card ── */}
    {index < experiences.length - 1 && (
      <div
        className="absolute left-[7px] sm:left-[9px] top-5 bottom-0 w-px opacity-25"
        style={{ backgroundColor: experience.color }}
      />
    )}

    {/* ── Card ── */}
    <div
      className="rounded-2xl p-[1px]"
      style={{
        background: `linear-gradient(135deg, ${experience.color}44, transparent 60%, ${experience.color}18)`,
      }}
    >
      <div className="bg-[#0d0a22]/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden">
        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: experience.color }}
        />

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
              {experience.title}
            </h3>
            <p className="text-secondary text-sm mt-0.5 font-medium">
              {experience.company_name}
            </p>
          </div>

          {/* Type badge */}
          <span
            className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 mt-0.5"
            style={{
              color: experience.color,
              borderColor: experience.color + "55",
              backgroundColor: experience.color + "18",
            }}
          >
            {experience.type}
          </span>
        </div>

        {/* Date + Location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-secondary mb-4">
          <span className="flex items-center gap-1.5">
            <span style={{ color: experience.color }}>▷</span>
            {experience.date}
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: experience.color }}>◎</span>
            {experience.location}
          </span>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2.5 mb-4">
          {experience.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] text-secondary leading-relaxed">
              <span
                className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: experience.color }}
              />
              {point}
            </li>
          ))}
        </ul>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] px-2.5 py-0.5 rounded-md font-mono border"
              style={{
                color: experience.color,
                borderColor: experience.color + "40",
                backgroundColor: experience.color + "12",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Section ─────────────────────────────────────────────────────────────── */
const Experience = () => (
  <div className="w-full">
    {/* Header */}
    <motion.div variants={textVariant()}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#915eff] animate-pulse" />
        <ShinyText
          text="✦ CAREER TIMELINE"
          speed={3}
          className="text-xs uppercase tracking-widest text-[#915eff]"
        />
      </div>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-2 text-secondary text-[16px] max-w-3xl leading-[28px] mb-12"
    >
      My professional journey — building and shipping real-world systems across
      infrastructure, full-stack, and backend engineering.
    </motion.p>

    {/* Timeline */}
    <div className="relative max-w-3xl">
      {/* Vertical spine line */}
      <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-10 w-px bg-gradient-to-b from-[#915eff]/50 via-[#00cea8]/30 to-transparent" />

      {experiences.map((exp, i) => (
        <ExperienceCard key={i} experience={exp} index={i} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Experience, "work");