
import React, { useState, useRef } from 'react';
import { ArrowRight, Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    setHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card transition-all duration-500 ease-custom",
        "will-change-transform hover:shadow-xl",
        "opacity-0 translate-y-8"
      )}
      style={{
        animationName: 'fade-in',
        animationDuration: '0.8s',
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'forwards',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden relative aspect-video">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover object-center transition-transform duration-700 ease-custom",
            hovered ? "scale-105" : "scale-100"
          )}
          loading="lazy"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500",
          hovered ? "opacity-100" : ""
        )} />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 bg-secondary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Live Demo"
              >
                <Globe size={18} />
              </a>
            )}
          </div>
          
          <a 
            href={liveUrl || githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all duration-300 subtle-link"
          >
            View details <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
