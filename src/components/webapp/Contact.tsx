"use client"

import React from 'react';

const Contact: React.FC = () => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter">Let's Build Something Amazing</h2>
          <p className="text-lg text-secondary/70 mt-2">Have a project in mind? I'd love to hear about it.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Your Name" required className="w-full bg-[#2a2a2a] border border-secondary/20 rounded-md p-3 text-secondary focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="email" placeholder="Your Email" required className="w-full bg-[#2a2a2a] border border-secondary/20 rounded-md p-3 text-secondary focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <textarea placeholder="Your Message" rows={6} required className="w-full bg-[#2a2a2a] border border-secondary/20 rounded-md p-3 text-secondary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-accent text-white px-10 py-3 rounded-md text-lg font-semibold hover:bg-accent/90 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
