"use client";

import { motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "mailto:dev.shamsali@gmail.com" },
];

export default function Navbar() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0,
        duration: reduceMotion ? 0.3 : 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex justify-between px-6 md:px-10 pt-6 md:pt-8"
      aria-label="Primary"
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
        >
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
}
