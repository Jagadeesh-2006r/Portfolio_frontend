import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket, FaSeedling, FaMoneyBillTrendUp, FaFingerprint,
  FaTrophy, FaShieldHalved, FaRobot,
} from 'react-icons/fa6';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';

const icons = {
  rocket:      FaRocket,
  seedling:    FaSeedling,
  money:       FaMoneyBillTrendUp,
  fingerprint: FaFingerprint,
  trophy:      FaTrophy,
  shield:      FaShieldHalved,
  robot:       FaRobot,
};

export default function TechJourney() {
  const { ref, controls } = useFadeInView();

  return (
    <section id="tech-journey" className="py-20 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-16"
        >
          Tech Journey & Achievements
        </motion.h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-[#334155] -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {data.journey.map((item, i) => {
              const Icon = icons[item.icon] || FaRocket;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`w-5/12 bg-white dark:bg-[#1E293B] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#334155] dark:hover:border-[#3B82F6] dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)] transition-all duration-200 ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-[rgba(37,99,235,0.15)] text-blue-700 dark:text-[#60A5FA] text-xs rounded-full mb-3 font-medium border-0 dark:border dark:border-[#334155]">
                      {item.date}
                    </span>
                    <h3 className="font-bold text-gray-900 dark:text-[#F8FAFC] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-[#CBD5E1] leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-50 dark:bg-[rgba(37,99,235,0.15)] border-2 border-blue-200 dark:border-[#3B82F6] dark:shadow-[0_0_16px_rgba(59,130,246,0.3)] rounded-full flex items-center justify-center z-10 hover:scale-110 transition-transform duration-200">
                    <Icon className="text-blue-600 dark:text-[#3B82F6] text-lg" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
