
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ThreeScene from './ThreeScene';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden py-20 perspective-container"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-accent opacity-75" />
      
      {/* 3D scene background */}
      <div className="absolute inset-0 -z-10">
        <ThreeScene minimalScene autoRotate interactive={false} cameraPosition={[0, 0, 8]} />
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`flex flex-col max-w-2xl transition-all duration-700 ease-out-expo ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-6">
              <span className="px-3 py-1 text-xs tracking-wider bg-primary/10 text-primary rounded-full inline-block mb-4 animate-fade-in">
                Full-Stack Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
                Crafting Digital <br />
                <span className="text-primary">Experiences</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md animation-delay-200 animate-fade-in">
                Building innovative web applications with precision and attention to detail. Transforming ideas into elegant solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animation-delay-300 animate-fade-in">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-all duration-300 interactive-element"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md flex items-center justify-center transition-all duration-300 interactive-element"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div 
            className={`relative aspect-square w-full max-w-md mx-auto transition-all duration-1000 ease-out-expo ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-full h-full">
              <ThreeScene modelType="mixed" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
