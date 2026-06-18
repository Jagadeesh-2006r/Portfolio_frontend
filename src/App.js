import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import TechJourney from './components/TechJourney';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <TechJourney />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
}
