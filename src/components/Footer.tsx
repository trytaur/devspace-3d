
import React from 'react';
import { Code, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code size={24} className="text-primary" />
            <span className="font-medium text-xl">Dev<span className="text-primary">Space</span></span>
          </div>
          
          <div className="flex gap-8">
            <a href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors subtle-link">
              Home
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors subtle-link">
              Projects
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors subtle-link">
              About
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors subtle-link">
              Skills
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors subtle-link">
              Contact
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-background hover:bg-primary hover:text-white rounded-full transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevSpace. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Designed and built with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
