import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useFadeInView, fadeUp } from '../hooks/useAnimation';
import { data } from '../data/portfolio';
import { sendContactMessage } from '../services/contactService';

export default function Contact() {
  const { ref, controls } = useFadeInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full px-4 py-3 bg-gray-100 dark:bg-[#1E293B] border border-transparent dark:border-[#334155] rounded-xl text-sm focus:outline-none focus:border-blue-500 dark:focus:border-[#3B82F6] dark:focus:shadow-[0_0_0_2px_rgba(59,130,246,0.15)] text-gray-800 dark:text-[#F8FAFC] placeholder-gray-400 dark:placeholder-[#CBD5E1]/40 transition-all";

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-[#F8FAFC] mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-[#F8FAFC] mb-3">Let's Connect</h3>
            <p className="text-gray-500 dark:text-[#CBD5E1] mb-8">Have a project, opportunity, or question? Send me a message.</p>
            <div className="flex flex-col gap-5">
              {[
                { icon: HiMail,     label: data.email,       href: `mailto:${data.email}` },
                { icon: HiPhone,    label: data.phone,       href: `tel:${data.phone}` },
                { icon: FaLinkedin, label: 'LinkedIn Profile', href: data.linkedin },
                { icon: FaGithub,   label: 'GitHub Profile',   href: data.github },
              ].map(({ icon: Icon, label, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-[#CBD5E1] hover:text-blue-600 dark:hover:text-[#60A5FA] transition-colors">
                  <Icon className="text-blue-600 dark:text-[#3B82F6] text-xl flex-shrink-0" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <input className={inputClass} placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input className={inputClass} type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input className={inputClass} placeholder="Subject (optional)" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
            <textarea className={`${inputClass} resize-y`} rows={6} placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-blue-600 dark:bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 dark:hover:bg-[#1D4ED8] dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="text-green-600 dark:text-green-400 text-sm text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 dark:text-red-400 text-sm text-center">Failed to send. Please try again.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
