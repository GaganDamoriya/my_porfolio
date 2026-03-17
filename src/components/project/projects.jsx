import { motion } from 'framer-motion';
import Projectdisplay from './projectdisplay/Projectdisplay';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section
      id="Projects"
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
            // Projects
          </p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
            Selected Work
          </h2>
        </motion.div>

        <Projectdisplay />
      </div>
    </section>
  );
};

export default Projects;
