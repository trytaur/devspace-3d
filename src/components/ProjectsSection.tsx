
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';

// Sample projects data
const projects = [
  {
    title: 'Modern Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization and interactive charts',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with integrated payment processing and inventory management',
    image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that leverages machine learning to create unique images from text prompts',
    image: 'https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-accent/40">
      <div className="section-container">
        <div className="section-title">
          <span>Portfolio</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
