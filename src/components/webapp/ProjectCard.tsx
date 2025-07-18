"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/600x400/1f2937/F9FAFB?text=Project';
  };

  return (
    <motion.div 
      className="bg-card rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group border border-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={title}
          sizes='100vw'
          width={1920}
          height={1080}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-accent px-6 py-2 rounded-md hover:bg-accent-dark transition-colors font-semibold">
            View Project <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
        <p className="text-secondary/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;