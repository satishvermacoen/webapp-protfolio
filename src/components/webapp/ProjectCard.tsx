"use client"

import React from 'react';

// Define the props type for the ProjectCard component
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl }) => {
  // Type the event for the image onError handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/600x400/2a2a2a/f2f2f2?text=Project';
  };

  return (
    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
      <div className="relative h-56">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-accent px-6 py-2 rounded-md hover:bg-accent/90 transition-colors">
            View Live
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-secondary/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;