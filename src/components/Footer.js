import React from 'react';
import { data } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-[#0B1120] border-t border-gray-100 dark:border-[#334155] text-center text-sm text-gray-500 dark:text-[#CBD5E1]">
      © {new Date().getFullYear()} {data.name} — {data.role}
    </footer>
  );
}
