import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/portfolio';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-transparent pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 py-16">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <motion.img
            src="/assets/profile.png"
            alt="Jagadeesh R"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              border: '8px solid rgba(255,255,255,0.9)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            }}
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] dark:[box-shadow:0_0_40px_rgba(59,130,246,0.25),0_20px_40px_rgba(0,0,0,0.4)] dark:[border:8px_solid_rgba(59,130,246,0.3)]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-sm font-semibold tracking-widest text-gray-500 dark:text-[#CBD5E1] uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-[#F8FAFC] leading-tight">
            {data.name.split(' ')[0]} <span className="font-extrabold">{data.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-2xl font-semibold text-blue-600 dark:text-[#3B82F6]">{data.role}</p>
          <p className="text-gray-600 dark:text-[#CBD5E1] max-w-lg leading-relaxed">
            {data.description}
          </p>
          <div className="flex gap-4 mt-2 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1V0ODTNaA9fENxs-_W3AW_1QmUM881ABW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold rounded-xl transition-all hover:scale-105 bg-gray-900 text-white dark:bg-[#2563EB] dark:text-white dark:hover:bg-[#1D4ED8] dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-block text-center"
            >
              View Resume
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 font-semibold rounded-xl transition-all hover:scale-105 border-2 border-gray-300 text-gray-800 hover:border-blue-500 hover:text-blue-600 dark:border-[#334155] dark:text-[#F8FAFC] dark:hover:bg-[rgba(37,99,235,0.1)] dark:hover:border-[#3B82F6] dark:hover:shadow-[0_0_16px_rgba(59,130,246,0.2)]"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
