"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';

// Define the type for a navigation link
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
    <header className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Pixel<span className="text-accent">Perfect</span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-secondary/80 hover:text-accent transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors duration-300">
            Hire Me
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-secondary/80 hover:text-accent transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent/90 transition-colors duration-300" onClick={() => setIsOpen(false)}>
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;