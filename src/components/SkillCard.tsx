
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  color?: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  name,
  level,
  color = "#4285F4",
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  
  // Convert level 1-100 to descriptive text
  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 50) return "Intermediate";
    if (level >= 25) return "Basic";
    return "Beginner";
  };

  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 ease-custom",
        "hover:shadow-md hover:translate-y-[-4px]",
        "opacity-0"
      )}
      style={{
        animationName: 'fade-in',
        animationDuration: '0.5s',
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'forwards',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        borderTop: `3px solid ${color}`
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className={cn(
          "text-white p-3 rounded-md inline-block mb-4 transition-transform duration-300",
          hovered ? "scale-110" : "scale-100"
        )}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      
      <div className="w-full bg-secondary rounded-full h-2 mb-2">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out-expo"
          style={{ 
            width: hovered ? `${level}%` : '15%', 
            backgroundColor: color 
          }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{getLevelText(level)}</span>
        <span>{level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;
