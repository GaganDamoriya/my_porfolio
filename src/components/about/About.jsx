import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import imgAboutMe from '../../assets/abouimg.jpeg';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { label: '1+ Yrs Experience', value: '1+' },
  { label: 'Live Projects',     value: '4'  },
  { label: 'CPI',               value: '7.1'},
];

const About = () => {
  const sectionRef = useRef(null);

  /* ── GSAP: stat cards bounce in on scroll ───────────────────
   * `back.out(1.7)` gives a satisfying elastic overshoot.
   * `stagger: 0.12` staggers each card slightly.
   * ScrollTrigger fires once when `.stats-row` enters the viewport.
   */
  useGSAP(
    () => {
      gsap.from('.stat-card', {
        opacity: 0,
        scale: 0.75,
        y: 20,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.stats-row',
          start: 'top 88%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="AboutSection"
      style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="w-[95%] max-w-5xl mx-auto">
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
            // About
          </p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="flex-shrink-0 w-full md:w-auto flex justify-center"
          >
            <img
              src={imgAboutMe}
              alt="About Gagan"
              className="rounded-xl object-cover"
              style={{
                width: 280,
                height: 320,
                border: '1px solid var(--border)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="flex-1"
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Software Engineer based in Noida, NCR 📍
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              I graduated from ABES Engineering College, Ghaziabad with a B.Tech in Computer Science
              (2020–2024). Since then I&apos;ve been working at Crownstack, where I build and maintain
              production-grade backend systems used by healthcare providers daily.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              My focus is on writing clean, maintainable code — whether that&apos;s refactoring a
              monolithic service into domain-driven modules, wiring up event-driven Lambda workflows,
              or building full-stack features end-to-end. I enjoy the challenge of making complex
              systems simple and reliable.
            </p>

            {/* Stats — GSAP bounce-in targets `.stat-card` inside `.stats-row` */}
            <div className="stats-row flex flex-wrap gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-card flex flex-col items-center px-5 py-3 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    minWidth: 100,
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                    {s.value}
                  </span>
                  <span className="text-xs mt-1 text-center" style={{ color: 'var(--text-secondary)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
