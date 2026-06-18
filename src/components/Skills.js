import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaAws,
  FaDatabase, FaCode, FaCubes, FaNetworkWired, FaChartBar,
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiJavascript, SiExpress, SiSpringboot,
  SiMongodb, SiMysql, SiPostgresql, SiPostman, SiCanva,
} from 'react-icons/si';
import { TbBrandReactNative, TbBolt } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';

const ACCENT = '#2563EB';

const iconMap = {
  SiC:                 { component: SiC,                color: ACCENT },
  SiCplusplus:         { component: SiCplusplus,        color: ACCENT },
  FaJava:              { component: FaJava,             color: ACCENT },
  SiJavascript:        { component: SiJavascript,       color: ACCENT },
  FaPython:            { component: FaPython,           color: ACCENT },
  FaHtml5:             { component: FaHtml5,            color: ACCENT },
  FaCss3Alt:           { component: FaCss3Alt,          color: ACCENT },
  FaReact:             { component: FaReact,            color: ACCENT },
  TbBrandReactNative:  { component: TbBrandReactNative, color: ACCENT },
  FaNodeJs:            { component: FaNodeJs,           color: ACCENT },
  SiExpress:           { component: SiExpress,          color: ACCENT },
  SiSpringboot:        { component: SiSpringboot,       color: ACCENT },
  SiPostgresql:        { component: SiPostgresql,       color: ACCENT },
  SiMysql:             { component: SiMysql,            color: ACCENT },
  SiMongodb:           { component: SiMongodb,          color: ACCENT },
  FaGitAlt:            { component: FaGitAlt,           color: ACCENT },
  FaGithub:            { component: FaGithub,           color: ACCENT },
  SiPostman:           { component: SiPostman,          color: ACCENT },
  FaAws:               { component: FaAws,              color: ACCENT },
  SiCanva:             { component: SiCanva,            color: ACCENT },
  SiPowerbi:           { component: FaChartBar,         color: ACCENT },
  TbBolt:              { component: TbBolt,             color: ACCENT },
  VscVscode:           { component: VscVscode,          color: ACCENT },
  FaCode:              { component: FaCode,             color: ACCENT },
  FaCubes:             { component: FaCubes,            color: ACCENT },
  FaDatabase:          { component: FaDatabase,         color: ACCENT },
  FaNetworkWired:      { component: FaNetworkWired,     color: ACCENT },
};

export default function Skills() {
  const { ref, controls } = useFadeInView();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(37,99,235,0.18)' }}
              className="bg-gray-50 dark:bg-[#1E293B] rounded-2xl p-6 border border-transparent dark:border-[#334155] hover:border-blue-400 dark:hover:border-[#3B82F6] transition-all duration-200"
            >
              <h3 className="text-base font-bold text-gray-800 dark:text-[#F8FAFC] mb-1">{group.category}</h3>
              <div className="w-8 h-0.5 bg-blue-600 dark:bg-[#3B82F6] mb-4" />
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => {
                  const entry = iconMap[skill.icon];
                  const IconComp = entry?.component;
                  return (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0B1120] text-gray-700 dark:text-[#CBD5E1] text-sm rounded-full border border-gray-200 dark:border-[#334155] shadow-sm cursor-default dark:hover:border-[#3B82F6] dark:hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]"
                    >
                      {IconComp && (
                        <IconComp
                          style={{ fontSize: '18px', color: entry.color, flexShrink: 0, transition: 'color 0.3s ease' }}
                          className="group-hover:brightness-75"
                        />
                      )}
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
