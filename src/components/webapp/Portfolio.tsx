import React from 'react';
import ProjectCard from '@/components/webapp/ProjectCard';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
        {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with a custom CMS and payment gateway integration.',
      imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
    },
    {
      title: 'Corporate Landing Page',
      description: 'A sleek and professional landing page for a B2B SaaS company.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
    },
    {
      title: 'Creative Agency Portfolio',
      description: 'A visually-driven portfolio site with complex animations and transitions.',
      imageUrl: 'https://images.unsplash.com/photo-1559028006-44a13675a33e?q=80&w=1974&auto=format&fit=crop',
      tags: ['GSAP', 'Three.js', 'Headless CMS'],
      liveUrl: '#',
    },
     {
      title: 'Mobile Banking App',
      description: 'A secure and intuitive mobile app for managing personal finances.',
      imageUrl: 'https://images.unsplash.com/photo-1580974928064-76ae03737330?q=80&w=1974&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Biometrics'],
      liveUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-primary/50 text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-secondary">My Portfolio</h2>
          <p className="text-lg text-secondary/70 mt-2">A selection of my best work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;