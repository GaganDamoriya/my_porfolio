import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { experienceData } from '../../experienceData';
import { BsTrophy } from 'react-icons/bs';

// Register ScrollTrigger plugin once at module level
gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  const sectionRef = useRef(null);

  /* ── GSAP ScrollTrigger animations ─────────────────────────
   * 1. Timeline vertical line: scaleY from 0 → 1 as the user scrolls
   *    through the section (scrub follows scroll position).
   * 2. Experience cards: stagger slide-in from left once section enters
   *    viewport (no scrub — plays once at full speed).
   */
  useGSAP(
    () => {
      // 1 — Draw the timeline line on scroll
      gsap.from('.experience-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.experience-container',
          start: 'top 75%',
          end:   'bottom 30%',
          scrub: 0.6,  // smooth lag behind scroll position
        },
      });

      // 2 — Cards stagger in once (no scrub)
      gsap.from('.experience-card', {
        opacity: 0,
        x: -28,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.18,
        scrollTrigger: {
          trigger: '.experience-container',
          start: 'top 78%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="Experience"
      style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="w-[95%] max-w-5xl mx-auto">
        {/* Section label — Framer handles heading since it's above the GSAP trigger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p
            className="font-mono text-xs font-medium tracking-widest uppercase mb-2"
            style={{ color: 'var(--accent)' }}
          >
            // Experience
          </p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline container — scoped for GSAP selectors */}
        <div className="experience-container relative">
          {/* Vertical line — GSAP scrubs its scaleY on scroll */}
          <div
            className="experience-line absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{
              backgroundColor: 'var(--accent)',
              opacity: 0.5,
              transformOrigin: 'top center',
            }}
          />

          {experienceData.map((job, idx) => (
            <div
              key={idx}
              /* GSAP targets this class for the stagger slide-in */
              className="experience-card relative md:pl-10 mb-12 last:mb-0"
            >
              {/* Timeline dot — pulses via CSS animation to draw the eye */}
              <div
                className="timeline-dot-pulse absolute left-0 top-2 w-2.5 h-2.5 rounded-full -translate-x-[4px] hidden md:block"
                style={{ backgroundColor: 'var(--accent)' }}
              />

              {/* Card */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.25s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--border)')
                }
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <div>
                    <span className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {job.role}
                    </span>
                    <span className="ml-2 text-lg font-medium" style={{ color: 'var(--accent)' }}>
                      @ {job.company}
                    </span>
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full self-start sm:self-auto"
                    style={{
                      color:           'var(--text-secondary)',
                      backgroundColor: 'var(--bg-secondary)',
                      border:          '1px solid var(--border)',
                    }}
                  >
                    {job.duration}
                  </span>
                </div>

                <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
                  {job.location} · {job.type}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Award badges */}
                {job.awards.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {job.awards.map((award) => (
                      <span
                        key={award}
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(245,158,11,0.12)',
                          color:           '#f59e0b',
                          border:          '1px solid rgba(245,158,11,0.25)',
                        }}
                      >
                        <BsTrophy size={10} />
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: 'var(--accent-dim)',
                        color:           'var(--accent)',
                        border:          '1px solid rgba(99,102,241,0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
