import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaHtml5, FaPython, FaCodeBranch, FaDatabase } from 'react-icons/fa';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';

const certIcons = {
  html:     FaHtml5,
  python:   FaPython,
  dsa:      FaCodeBranch,
  database: FaDatabase,
};

export default function Certificates() {
  const { ref, controls } = useFadeInView();

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-12"
        >
          Certificates & Achievements
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.certificates.map((cert, i) => {
            const Icon = certIcons[cert.icon] || FaCodeBranch;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#334155] flex flex-col gap-3 hover:shadow-md dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.18)] dark:hover:border-[#3B82F6] transition-all duration-200"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                  className="w-fit"
                >
                  <Icon className="text-blue-600 dark:text-[#3B82F6]" style={{ fontSize: '2.25rem' }} />
                </motion.div>
                <h3 className="text-base font-bold text-gray-900 dark:text-[#F8FAFC] leading-snug">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-[#CBD5E1]">{cert.platform}</p>
                <p className="text-sm text-gray-500 dark:text-[#CBD5E1]">{cert.year}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-2 text-sm text-blue-600 dark:text-[#3B82F6] border border-blue-200 dark:border-[#334155] rounded-lg px-4 py-2 hover:bg-blue-50 dark:hover:bg-[rgba(37,99,235,0.12)] dark:hover:border-[#3B82F6] dark:hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all font-medium w-fit"
                >
                  <FiExternalLink /> View Certificate
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
