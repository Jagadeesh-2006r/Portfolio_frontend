import React, { useState, useEffect } from 'react';
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Tech Journey', 'Coding Profiles', 'Contact'];

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map(l => document.getElementById(l.toLowerCase().replace(' ', '-')));
      sections.forEach((sec, i) => {
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect();
          if (top <= 80 && bottom > 80) setActive(navLinks[i]);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (label) => {
    const id = label.toLowerCase().replace(' ', '-');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled && dark ? 'shadow-[0_4px_24px_rgba(59,130,246,0.08)]' : scrolled ? 'shadow-md' : ''}`}
      style={dark ? {
        background: 'rgba(11, 17, 32, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #334155',
      } : {
        background: 'rgba(255,255,255,1)',
        borderBottom: scrolled ? '1px solid #e5e7eb' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span
          className="text-xl font-bold cursor-pointer tracking-tight"
          style={{ color: dark ? '#F8FAFC' : '#111827' }}
          onClick={() => scrollTo('Home')}
        >
          Jagadeesh R
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm font-medium pb-1 border-b-2 transition-all duration-200"
                style={{
                  color: active === link ? '#3B82F6' : dark ? '#CBD5E1' : '#4B5563',
                  borderBottomColor: active === link ? '#3B82F6' : 'transparent',
                  textShadow: active === link && dark ? '0 0 12px rgba(59,130,246,0.5)' : 'none',
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full transition-all duration-200"
            style={{
              border: dark ? '1px solid #334155' : '1px solid #D1D5DB',
              background: dark ? 'rgba(30,41,59,0.6)' : 'transparent',
              boxShadow: dark ? '0 0 8px rgba(59,130,246,0.15)' : 'none',
            }}
          >
            {dark ? <HiSun className="text-yellow-400 text-lg" /> : <HiMoon className="text-gray-600 text-lg" />}
          </button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: dark ? '#F8FAFC' : '#111827' }}>
            {menuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-3"
          style={dark ? {
            background: 'rgba(11,17,32,0.98)',
            borderTop: '1px solid #334155',
          } : {
            background: '#fff',
            borderTop: '1px solid #e5e7eb',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm font-medium transition-colors"
              style={{ color: active === link ? '#3B82F6' : dark ? '#CBD5E1' : '#4B5563' }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
