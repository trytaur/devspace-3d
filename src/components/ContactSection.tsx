
import React, { useState, useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24"
    >
      <div className="section-container">
        <div className="section-title">
          <span>Get In Touch</span>
          <h2>Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            className={`transition-all duration-1000 ease-out-expo ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-medium mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email", value: "hello@devspace.com" },
                { icon: <MapPin size={20} />, label: "Location", value: "San Francisco, CA" },
                { icon: <Phone size={20} />, label: "Phone", value: "+1 (555) 123-4567" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Find me on</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, label: "GitHub", href: "#" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className={`p-3 bg-secondary hover:bg-primary hover:text-white rounded-full transition-all duration-300 ${
                      isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={`glass-card p-6 sm:p-8 transition-all duration-1000 ease-out-expo ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your email address"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[150px]"
                  placeholder="How can I help you?"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300 interactive-element ${
                  formStatus === 'success' 
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {formStatus === 'submitting' && (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent!</span>
                  </>
                )}
                {(formStatus === 'idle' || formStatus === 'error') && (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
