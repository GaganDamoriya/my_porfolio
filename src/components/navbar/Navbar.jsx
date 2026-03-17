import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import ContentWrapper from '../contentWrapper/ContentWrapper';

const navLinks = [
  { label: 'About', href: '#AboutSection' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact' },
];

const Navbar = ({ darkMode, onToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: darkMode ? 'rgba(10,10,10,0.85)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <ContentWrapper>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#dashBoard"
              className="font-semibold text-lg tracking-tight"
              style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Gagan Prakash
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    /* nav-link adds a CSS underline-slide micro-interaction (see index.css) */
                    className="nav-link text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={onToggle}
                aria-label="Toggle dark mode"
                className="p-2 rounded-lg transition-colors duration-200"
                style={{
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                {darkMode ? <BsSun size={16} /> : <BsMoon size={16} />}
              </button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                style={{
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
              </button>
            </div>
          </div>
        </ContentWrapper>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <ul className="list-none flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-semibold"
                  style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
