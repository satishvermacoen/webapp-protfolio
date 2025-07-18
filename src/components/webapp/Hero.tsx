"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-primary pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Digital Experiences <br /> that Inspire & Convert
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-secondary/70 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I&apos;m a passionate web designer specializing in creating beautiful, functional, and user-centered websites that drive results.
        </motion.p>
        <motion.div 
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a 
            href="#portfolio" 
            className="bg-accent text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="flex items-center text-accent font-semibold text-lg hover:text-accent/90 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;