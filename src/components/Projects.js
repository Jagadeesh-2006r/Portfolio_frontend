import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';

export default function Projects() {
  const { ref, controls } = useFadeInView();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#334155] flex flex-col gap-4 hover:shadow-md dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.18)] dark:hover:border-[#3B82F6] transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-[#F8FAFC]">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-[#CBD5E1] leading-relaxed flex-1">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span key={j} className="px-3 py-1 bg-blue-50 dark:bg-[rgba(37,99,235,0.12)] text-blue-700 dark:text-[#60A5FA] text-xs rounded-full border-0 dark:border dark:border-[#334155]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {proj.frontendRepo && (
                  <a href={proj.frontendRepo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-[#CBD5E1] hover:text-blue-600 dark:hover:text-[#60A5FA] transition-colors font-medium">
                    <FiGithub /> Frontend
                  </a>
                )}
                {proj.backendRepo && (
                  <a href={proj.backendRepo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-[#CBD5E1] hover:text-blue-600 dark:hover:text-[#60A5FA] transition-colors font-medium">
                    <FiGithub /> Backend
                  </a>
                )}
                {proj.mlRepo && (
                  <a href={proj.mlRepo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-[#CBD5E1] hover:text-blue-600 dark:hover:text-[#60A5FA] transition-colors font-medium">
                    <FiGithub /> ML Engine
                  </a>
                )}
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-[#CBD5E1] hover:text-blue-600 dark:hover:text-[#60A5FA] transition-colors font-medium">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
