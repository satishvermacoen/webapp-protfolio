import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-primary pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-tight">
          Crafting Digital Experiences <br /> that Inspire & Convert
        </h1>
        <p className="text-lg md:text-xl text-secondary/70 max-w-3xl mx-auto mb-8">
          I'm a passionate web designer specializing in creating beautiful, functional, and user-centered websites that drive results.
        </p>
        <div className="space-x-4">
          <a href="#portfolio" className="bg-accent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="bg-secondary text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;