
import React, { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Code, Globe, Laptop } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const experienceItems = [
    {
      year: '2019 - Present',
      role: 'Senior Full-Stack Developer',
      company: 'TechVision',
      description: 'Led development of enterprise-level web applications with React, Node.js, and AWS.',
    },
    {
      year: '2017 - 2019',
      role: 'Front-End Developer',
      company: 'CreativeWorks',
      description: 'Built responsive web interfaces and interactive experiences for high-profile clients.',
    },
    {
      year: '2015 - 2017',
      role: 'Junior Developer',
      company: 'StartUp Inc',
      description: 'Developed and maintained websites using JavaScript, HTML, and CSS.',
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="section-title">
          <span>About Me</span>
          <h2>My Journey</h2>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div 
              className={`absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl transition-all duration-1000 ease-out-expo ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            />
            <div 
              className={`absolute inset-4 glass-card overflow-hidden transition-all duration-1000 ease-out-expo delay-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Developer"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 shadow-sm transition-all duration-1000 delay-500 ease-out-expo transform rotate-3 hover:rotate-0 hover:scale-105">
              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-primary/70 animate-pulse animation-delay-300"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse animation-delay-500"></div>
              </div>
              <div className="mt-2 text-sm font-mono">
                <span className="opacity-70">const</span> <span className="text-primary">passion</span> = <span className="opacity-70">true;</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-medium mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              Passionate developer crafting intuitive digital experiences
            </h3>

            <div className={`space-y-4 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <p>
                I'm a full-stack developer with over 5 years of experience, specializing in building modern web applications that combine functionality with elegant design.
              </p>
              <p>
                My journey began with a deep curiosity about how the digital world works, leading me to explore various programming languages and frameworks. Today, I craft solutions that solve real-world problems while maintaining a focus on user experience and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { icon: <Code size={24} />, label: "Clean Code", description: "Writing maintainable, efficient code" },
                { icon: <Globe size={24} />, label: "Responsive Design", description: "Creating seamless experiences across devices" },
                { icon: <Laptop size={24} />, label: "Performance", description: "Optimizing for speed and efficiency" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`glass-card p-5 transition-all duration-700 ease-custom ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h4 className="text-base font-medium mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className={`text-xl font-medium mb-6 transition-all duration-700 delay-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Experience
              </h4>

              <div className="space-y-6">
                {experienceItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative pl-6 transition-all duration-700 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h5 className="text-base font-medium">{item.role}</h5>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
