"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-lg z-50 border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-bold tracking-tighter"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pixel<span className="text-accent">Perfect</span>
        </motion.a>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              className="text-secondary/80 hover:text-accent transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="bg-accent text-primary font-semibold px-4 py-2 rounded-md hover:bg-accent/90 transition-colors duration-300 shadow-glow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hire Me
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-primary/90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-secondary/80 hover:text-accent transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-accent text-primary font-semibold px-6 py-2 rounded-md hover:bg-accent/90 transition-colors duration-300" onClick={() => setIsOpen(false)}>
              Hire Me
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Header;