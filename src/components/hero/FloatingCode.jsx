import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// VS Code dark+ inspired token colours
const T = {
  comment:   '#6A9955',
  keyword:   '#569cd6',
  variable:  '#4EC9B0',
  property:  '#9CDCFE',
  string:    '#CE9178',
  number:    '#b5cea8',
  default:   '#d4d4d4',
  bracket:   '#ffd700',
};

/**
 * Each line is an array of { t: text, c: colour } tokens.
 * An empty array renders a blank line.
 */
const CODE_LINES = [
  [{ t: '// gagan-prakash.ts', c: T.comment }],
  [],
  [{ t: 'const ', c: T.keyword }, { t: 'developer', c: T.variable }, { t: ' = {', c: T.default }],
  [{ t: '  name', c: T.property }, { t: ': ', c: T.default }, { t: '"Gagan Prakash"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '  role', c: T.property }, { t: ': ', c: T.default }, { t: '"Software Engineer"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '  company', c: T.property }, { t: ': ', c: T.default }, { t: '"Crownstack"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '  experience', c: T.property }, { t: ': ', c: T.default }, { t: '"1+ year"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '  stack', c: T.property }, { t: ': [', c: T.default }],
  [{ t: '    ', c: T.default }, { t: '"NestJS"', c: T.string }, { t: ', ', c: T.default }, { t: '"TypeScript"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '    ', c: T.default }, { t: '"React"', c: T.string }, { t: ', ', c: T.default }, { t: '"AWS Lambda"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '    ', c: T.default }, { t: '"PostgreSQL"', c: T.string }, { t: ', ', c: T.default }, { t: '"Docker"', c: T.string }],
  [{ t: '  ]', c: T.default }, { t: ',', c: T.default }],
  [{ t: '  awards', c: T.property }, { t: ': [', c: T.default }],
  [{ t: '    ', c: T.default }, { t: '"Employee of Quarter"', c: T.string }, { t: ',', c: T.default }],
  [{ t: '    ', c: T.default }, { t: '"Project Hero Award"', c: T.string }],
  [{ t: '  ]', c: T.default }],
  [{ t: '};', c: T.default }],
];

const FloatingCode = () => {
  const containerRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const done = visibleLines >= CODE_LINES.length;

  /* ── Line-by-line typewriter reveal ────────────────────── */
  useEffect(() => {
    if (done) return;
    const id = setTimeout(
      () => setVisibleLines((v) => v + 1),
      /* Blank lines appear faster, code lines at 110ms */
      CODE_LINES[visibleLines]?.length === 0 ? 40 : 110,
    );
    return () => clearTimeout(id);
  }, [visibleLines, done]);

  /* ── Entrance animation (slide in from right) ───────────── */
  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.55, // starts after hero text stagger finishes
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      /* Hidden on small screens — text alone fills the hero on mobile */
      className="hidden lg:block flex-shrink-0"
      style={{ width: 380 }}
    >
      <div
        className="rounded-xl overflow-hidden select-none"
        style={{
          backgroundColor: '#0d1117',
          border: '1px solid #30363d',
          /* Soft indigo glow around the window */
          boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 48px rgba(99,102,241,0.07)',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 12,
          lineHeight: '1.75',
        }}
      >
        {/* ── Title bar ───────────────────────────────────── */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{
            backgroundColor: '#161b22',
            borderBottom: '1px solid #30363d',
          }}
        >
          {/* Traffic-light dots */}
          <div className="flex gap-1.5">
            <span className="block w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
            <span className="block w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
            <span className="block w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
          </div>
          <span
            className="ml-2 text-xs tracking-wide"
            style={{ color: '#8b949e' }}
          >
            gagan-prakash.ts
          </span>
          {/* Pulsing green dot — "active" indicator */}
          <span
            className="ml-auto block w-2 h-2 rounded-full"
            style={{
              backgroundColor: '#28c840',
              boxShadow: '0 0 6px #28c840',
              animation: 'pulse-dot 2.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* ── Code area ───────────────────────────────────── */}
        <div
          className="p-4 overflow-hidden"
          style={{ minHeight: 320 }}
        >
          {CODE_LINES.slice(0, visibleLines).map((line, lineIdx) => (
            <div key={lineIdx} className="flex">
              {/* Line number */}
              <span
                className="mr-5 text-right flex-shrink-0"
                style={{ color: '#4e5563', minWidth: 18, userSelect: 'none' }}
              >
                {lineIdx + 1}
              </span>

              {/* Tokens */}
              <span>
                {line.map((token, i) => (
                  <span key={i} style={{ color: token.c }}>
                    {token.t}
                  </span>
                ))}

                {/* Blinking block cursor on the last visible, non-done line */}
                {lineIdx === visibleLines - 1 && !done && (
                  <span className="cursor-blink" style={{ color: T.keyword }}>
                    ▋
                  </span>
                )}
              </span>
            </div>
          ))}

          {/* After all lines shown, leave a static cursor on a new line */}
          {done && (
            <div className="flex">
              <span
                className="mr-5 text-right flex-shrink-0"
                style={{ color: '#4e5563', minWidth: 18 }}
              >
                {CODE_LINES.length + 1}
              </span>
              <span className="cursor-blink" style={{ color: T.keyword }}>▋</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingCode;
