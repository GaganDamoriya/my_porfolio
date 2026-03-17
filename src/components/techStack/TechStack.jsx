import { techStackData } from '../../techStackData';

const TechStack = () => {
  /* Duplicate the list so the marquee loops seamlessly */
  const doubled = [...techStackData, ...techStackData];

  return (
    <section
      style={{
        padding: '40px 0',
        backgroundColor: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <div
        className="flex"
        style={{ width: `${doubled.length * 120}px` }}
      >
        <div className="marquee-track flex gap-8 items-center" style={{ width: '100%' }}>
          {doubled.map(({ name, Icon, color }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex flex-col items-center gap-2 flex-shrink-0"
              style={{ width: 80 }}
            >
              <Icon size={32} color={color || 'var(--text-secondary)'} />
              <span
                className="font-mono text-xs text-center"
                style={{ color: 'var(--text-secondary)' }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
