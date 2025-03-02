
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Code, Globe } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find which section is in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="section-container py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-foreground flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
          >
            <Code size={24} className="text-primary" />
            <span className="font-medium text-xl">Dev<span className="text-primary">Space</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm transition-colors relative",
                  activeSection === item.href.replace('#', '') 
                    ? "text-primary font-medium"
                    : "text-foreground/80 hover:text-foreground"
                )}
                onClick={() => setActiveSection(item.href.replace('#', ''))}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/90 backdrop-blur-md flex flex-col transition-transform duration-300 transform md:hidden pt-24",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "px-4 py-2 text-lg transition-colors relative",
                activeSection === item.href.replace('#', '') 
                  ? "text-primary font-medium"
                  : "text-foreground/80"
              )}
              onClick={() => {
                setActiveSection(item.href.replace('#', ''));
                closeMobileMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto p-8 flex justify-center">
          <Globe size={20} className="text-primary mr-2" />
          <span className="text-sm text-muted-foreground">Available worldwide</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
