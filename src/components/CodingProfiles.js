import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';

const profiles = [
  { label: 'LinkedIn',  icon: FaLinkedin,  lightColor: 'text-blue-600',  href: data.linkedin },
  { label: 'GitHub',    icon: FaGithub,    lightColor: 'text-gray-800',  href: data.github },
  { label: 'LeetCode',  icon: SiLeetcode,  lightColor: 'text-orange-500',href: data.leetcode },
  { label: 'CodeChef',  icon: SiCodechef,  lightColor: 'text-amber-700', href: data.codechef },
  { label: 'SkillRack', icon: FaCode,      lightColor: 'text-blue-500',  href: data.skillrack },
];

export default function CodingProfiles() {
  const { ref, controls } = useFadeInView();

  return (
    <section id="coding-profiles" className="py-20 bg-white dark:bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-12"
        >
          Connect With Me
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              whileHover={{ scale: 1.06 }}
              className={`flex flex-col items-center gap-3 w-36 py-8 bg-white dark:bg-[#1E293B] rounded-2xl border border-gray-100 dark:border-[#334155] shadow-sm hover:shadow-md dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.2)] dark:hover:border-[#3B82F6] transition-all duration-200 cursor-pointer`}
            >
              <p.icon className={`text-4xl ${p.lightColor} dark:text-[#3B82F6]`} />
              <span className="text-sm font-medium text-gray-700 dark:text-[#CBD5E1]">{p.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
