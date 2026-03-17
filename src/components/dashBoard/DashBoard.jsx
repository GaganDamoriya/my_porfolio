import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import FloatingCode from '../hero/FloatingCode';

// Register useGSAP as a GSAP plugin for correct React 18 integration
gsap.registerPlugin(useGSAP);

/* ── Role typing effect ─────────────────────────────────────
 * Cycles through role titles with a typewriter effect.
 * Returns [displayedText, isDone] where isDone means the
 * cursor should blink (waiting before next erase cycle).
 */
const ROLES = [
  'Software Engineer',
  'Backend Developer',
  'Full Stack Dev',
  'NestJS Engineer',
];

function useTypingEffect() {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const current = ROLES[wordIdx];

    if (phase === 'typing') {
      if (text.length < current.length) {
        const id = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
        return () => clearTimeout(id);
      }
      // Finished typing — pause before erasing
      const id = setTimeout(() => setPhase('deleting'), 2200);
      return () => clearTimeout(id);
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const id = setTimeout(() => setText((t) => t.slice(0, -1)), 45);
        return () => clearTimeout(id);
      }
      // Finished erasing — advance to next word
      setWordIdx((i) => (i + 1) % ROLES.length);
      setPhase('typing');
    }
  }, [text, phase, wordIdx]);

  const isPaused = phase === 'typing' && text === ROLES[wordIdx];
  return [text, isPaused];
}

/* ── Social links ───────────────────────────────────────── */
const SOCIALS = [
  { href: 'https://github.com/GaganDamoriya',                              Icon: AiFillGithub,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/gagan-prakash-damoriya-1b884b21b/', Icon: AiFillLinkedin, label: 'LinkedIn' },
  { href: 'https://leetcode.com/u/gaganprakash123456/',                    Icon: SiLeetcode,     label: 'LeetCode' },
];

/* ── Component ──────────────────────────────────────────── */
const DashBoard = () => {
  const heroRef = useRef(null);
  const [roleText, rolePaused] = useTypingEffect();

  /* ── GSAP entrance timeline ─────────────────────────────
   * Staggered slide-up for each hero text element.
   * `scope: heroRef` restricts selectors to this section,
   * preventing collisions with identically-named classes elsewhere.
   */
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-greeting', { opacity: 0, y: 22, duration: 0.5 })
        .from('.hero-name',     { opacity: 0, y: 32, duration: 0.6 }, '-=0.25')
        .from('.hero-role',     { opacity: 0, y: 22, duration: 0.5 }, '-=0.3')
        .from('.hero-subtitle', { opacity: 0,         duration: 0.4 }, '-=0.15')
        .from('.hero-bio',      { opacity: 0, y: 18,  duration: 0.5 }, '-=0.2')
        .from('.hero-cta',      { opacity: 0, y: 14,  duration: 0.4 }, '-=0.2')
        .from('.hero-social',   { opacity: 0, y: 10,  duration: 0.4 }, '-=0.2');
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="dashBoard"
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-primary)',
        padding: '80px 0',
      }}
    >
      {/* Subtle dot-grid background — purely decorative, masked out at edges */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="w-[95%] max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">

          {/* ── Left: text content ─────────────────────── */}
          <div className="flex-1">
            <p className="hero-greeting font-mono text-sm font-medium mb-3"
               style={{ color: 'var(--accent)' }}>
              Hello, there 👋
            </p>

            <h1 className="hero-name text-4xl md:text-5xl font-bold leading-tight mb-3"
                style={{ color: 'var(--text-primary)' }}>
              Gagan Prakash
            </h1>

            {/* Typing-effect subtitle */}
            <h2
              className="hero-role text-2xl md:text-3xl font-semibold mb-1 flex items-center gap-0"
              style={{ color: 'var(--accent)', minHeight: '2.25rem' }}
            >
              {roleText}
              {/* Blinking cursor — visible while pausing between roles */}
              <span
                className="typing-cursor"
                style={{ opacity: rolePaused ? undefined : 1 }}
              />
            </h2>

            <p className="hero-subtitle text-sm mb-6"
               style={{ color: 'var(--text-secondary)' }}>
              Currently @ Crownstack — building scalable healthcare platforms
            </p>

            <p className="hero-bio text-base leading-relaxed mb-8 max-w-lg"
               style={{ color: 'var(--text-secondary)' }}>
              I build production-grade full-stack applications with a focus on clean
              architecture, maintainability, and performance. Experienced across the
              stack — from NestJS microservices to React UIs and AWS Lambda
              event-driven workflows.
            </p>

            {/* CTA buttons */}
            <div className="hero-cta flex flex-wrap gap-3 mb-8">
              <a
                href="#Projects"
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ backgroundColor: 'var(--accent)', color: '#ffffff', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
              >
                View Projects
              </a>
              <a
                href="#Contact"
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                Get in Touch
              </a>
            </div>

            {/* Social icon row */}
            <div className="hero-social flex gap-4">
              {SOCIALS.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: animated code terminal (replaces photo) ── */}
          <FloatingCode />

        </div>
      </div>
    </section>
  );
};

export default DashBoard;
