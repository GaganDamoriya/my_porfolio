import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const links = [
  {
    label: 'GitHub',
    Icon: AiFillGithub,
    href: 'https://github.com/GaganDamoriya',
  },
  {
    label: 'LinkedIn',
    Icon: AiFillLinkedin,
    href: 'https://www.linkedin.com/in/gagan-prakash-damoriya-1b884b21b/',
  },
  {
    label: 'LeetCode',
    Icon: SiLeetcode,
    href: 'https://leetcode.com/u/gaganprakash123456/',
  },
  {
    label: 'Email',
    Icon: MdOutlineEmail,
    href: 'mailto:gaganprakash123456@gmail.com',
  },
];

const Contact = () => {
  return (
    <section
      id="Contact"
      style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="w-[95%] max-w-5xl mx-auto text-center">
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
            // Contact
          </p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Get in Touch
          </h2>
          <p className="text-base mb-3 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
          <a
            href="mailto:gaganprakash123456@gmail.com"
            className="text-base font-medium mb-10 inline-block"
            style={{ color: 'var(--accent)', textDecoration: 'none' }}
          >
            gaganprakash123456@gmail.com
          </a>

          <div className="flex justify-center gap-8 mt-8">
            {links.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex flex-col items-center gap-2 transition-colors duration-200"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Icon size={28} />
                <span className="text-xs font-mono">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
