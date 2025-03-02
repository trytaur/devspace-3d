
import React, { useRef } from 'react';
import SkillCard from './SkillCard';
import ThreeScene from './ThreeScene';
import { useInView } from '@/utils/animations';

// Import icons for skills
import { 
  Code,
  Globe,
  Search,
  Database,
  Server,
  LineChart,
  Layers,
  ShieldCheck
} from 'lucide-react';

// Skills data
const skills = [
  { name: "Frontend Development", icon: <Code size={20} />, level: 95, color: "#4285F4" },
  { name: "Backend Systems", icon: <Server size={20} />, level: 85, color: "#EA4335" },
  { name: "UI/UX Design", icon: <Layers size={20} />, level: 80, color: "#FBBC05" },
  { name: "Database Management", icon: <Database size={20} />, level: 82, color: "#34A853" },
  { name: "API Development", icon: <Globe size={20} />, level: 90, color: "#5F6368" },
  { name: "SEO Optimization", icon: <Search size={20} />, level: 75, color: "#8E24AA" },
  { name: "Analytics", icon: <LineChart size={20} />, level: 78, color: "#1E88E5" },
  { name: "Security", icon: <ShieldCheck size={20} />, level: 80, color: "#D81B60" },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-accent/40 relative">
      <div className="absolute inset-0 -z-10">
        <ThreeScene minimalScene autoRotate interactive={false} cameraPosition={[0, 0, 10]} />
      </div>
      
      <div className="section-container" ref={sectionRef}>
        <div className="section-title">
          <span>Expertise</span>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              color={skill.color}
              index={index}
            />
          ))}
        </div>
        
        <div className={`mt-20 glass-card p-8 max-w-3xl mx-auto text-center transition-all duration-1000 ease-out-expo ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl font-medium mb-4">Technologies I Work With</h3>
          <p className="text-muted-foreground mb-8">
            I continuously stay updated with the latest frameworks and tools to deliver cutting-edge solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "TypeScript", "Node.js", "Next.js", "MongoDB", 
              "PostgreSQL", "GraphQL", "Express", "AWS", "Docker", 
              "Tailwind CSS", "Redux", "Three.js", "Figma"
            ].map((tech, index) => (
              <span 
                key={index}
                className={`px-4 py-2 bg-secondary rounded-full text-sm transition-all duration-500 hover:bg-primary hover:text-white`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
