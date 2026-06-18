import React from 'react';
import { motion } from 'framer-motion';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';

export default function About() {
  const { ref, controls } = useFadeInView();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#0B1120]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-12">About Me</h2>
        <div className="flex flex-col gap-6">
          {data.about.map((para, i) => (
            <p key={i} className="text-lg text-gray-600 dark:text-[#CBD5E1] leading-relaxed">{para}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
