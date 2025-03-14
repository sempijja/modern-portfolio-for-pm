
import React, { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  // Lazy loading for images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  return (
    <div className="scroll-smooth">
      <Header 
        name="Jane Doe" 
        title="Product Manager & Owner" 
        avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
      />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
