"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tighter">Let's Build Something Amazing</h2>
          <p className="text-lg text-secondary/70 mt-2">Have a project in mind? I'd love to hear about it.</p>
        </motion.div>
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Your Name" required className="w-full bg-card border border-border rounded-md p-3 text-secondary focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="email" placeholder="Your Email" required className="w-full bg-card border border-border rounded-md p-3 text-secondary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <textarea placeholder="Your Message" rows={6} required className="w-full bg-card border border-border rounded-md p-3 text-secondary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-accent text-primary px-10 py-3 rounded-md text-lg font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-glow">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;