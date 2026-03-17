import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DashBoard from './components/dashBoard/DashBoard';
import About from './components/about/About';
import TechStack from './components/techStack/TechStack';
import Experience from './components/experience/Experience';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <div
      data-theme={darkMode ? 'dark' : 'light'}
      style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Navbar darkMode={darkMode} onToggle={toggleDarkMode} />
      <main>
        <DashBoard />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
