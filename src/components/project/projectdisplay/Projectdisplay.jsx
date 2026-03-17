import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsLock } from 'react-icons/bs';
import { projectDatadisplay } from '../../../projectData';

/* Scroll-reveal: fades in and slides up on first viewport entry */
const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

/* Hover: slight lift + accent border glow */
const hoverVariants = {
  rest:  { y: 0,  boxShadow: '0 0 0 rgba(99,102,241,0)' },
  hover: { y: -6, boxShadow: '0 12px 36px rgba(99,102,241,0.18)' },
};

const Projectdisplay = () => {
  /* Per-card expand state keyed by project index */
  const [expanded, setExpanded] = useState({});
  const toggle = (idx) => setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const featured = projectDatadisplay.filter((p) => p.featured);
  const others   = projectDatadisplay.filter((p) => !p.featured);

  const ProjectCard = ({ project, index, large = false }) => {
    const isExpanded = expanded[index];
    const shortDes   = project.des.length > 140
      ? `${project.des.substring(0, 140)}…`
      : project.des;

    return (
      <motion.div
        /* Scroll-reveal */
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={revealVariants}
        /* Hover lift — Framer handles the y + shadow transition */
        whileHover="hover"
        animate="rest"
        className={`project-card-hover rounded-xl overflow-hidden flex flex-col ${large ? 'md:flex-row' : ''}`}
        style={{
          backgroundColor: 'var(--bg-elevated)',
          border:          '1px solid var(--border)',
          transition:      'border-color 0.25s ease',
        }}
        /* Border colour change on hover handled via inline callbacks
           because Framer Motion doesn't animate CSS custom properties */
        onHoverStart={(e) => (e.target.closest('.project-card-hover').style.borderColor = 'rgba(99,102,241,0.45)')}
        onHoverEnd={(e)   => (e.target.closest('.project-card-hover').style.borderColor = 'var(--border)')}
      >
        {/* Project screenshot */}
        {project.imgUrl && (
          <div
            className={`overflow-hidden flex-shrink-0 ${large ? 'md:w-1/2' : 'w-full'}`}
            style={{ aspectRatio: large ? 'auto' : '16/9', minHeight: large ? 240 : undefined }}
          >
            <img
              src={project.imgUrl}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ display: 'block' }}
            />
          </div>
        )}

        {/* Private / internal placeholder */}
        {!project.imgUrl && (
          <div
            className={`flex items-center justify-center flex-shrink-0 ${large ? 'md:w-1/2' : 'w-full'}`}
            style={{
              minHeight:   180,
              background:  'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-elevated) 100%)',
              borderBottom: large ? 'none' : '1px solid var(--border)',
              borderRight:  large ? '1px solid var(--border)' : 'none',
            }}
          >
            <div className="text-center" style={{ color: 'var(--text-secondary)' }}>
              <BsLock size={28} className="mx-auto mb-2" style={{ color: 'var(--accent)', opacity: 0.6 }} />
              <p className="text-xs font-mono">Private / Internal</p>
            </div>
          </div>
        )}

        {/* Card content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {project.name}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {isExpanded ? project.des : shortDes}
              {project.des.length > 140 && (
                <button
                  onClick={() => toggle(index)}
                  className="ml-1 text-xs font-medium"
                  style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  {isExpanded ? 'show less' : 'show more'}
                </button>
              )}
            </p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="text-xs font-mono px-2.5 py-1 rounded-md cursor-default"
                style={{
                  backgroundColor: 'var(--accent-dim)',
                  color:           'var(--accent)',
                  border:          '1px solid rgba(99,102,241,0.2)',
                  display:         'inline-block',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <AiFillGithub size={16} /> GitHub
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-secondary)', opacity: 0.45 }}>
                <BsLock size={13} /> Private repo
              </span>
            )}

            {project.deployLink ? (
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <BsBoxArrowUpRight size={13} /> Live Demo
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-secondary)', opacity: 0.45 }}>
                <BsBoxArrowUpRight size={13} /> Internal
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Featured: full-width with side image on desktop */}
      {featured.map((project, idx) => (
        <ProjectCard key={project.name} project={project} index={idx} large />
      ))}

      {/* Others: 2-column responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {others.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={featured.length + idx} />
        ))}
      </div>
    </div>
  );
};

export default Projectdisplay;
