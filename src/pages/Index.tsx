
import React, { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Luwaga Meshach (Mulinsike) | Project Manager | Product Owner | Kampala, Uganda</title>
        <meta name="description" content="Experienced Project Manager and Product Owner with expertise in Agile methodologies, product strategy, and cross-functional team leadership. Based in Kampala, Uganda." />
        <meta name="keywords" content="Project Manager, Product Owner, Product Manager, Agile, Scrum, Jira, Trello, Asana, Monday, Notion, Kampala, Uganda, Google Project Management, Backlogs, Sprint Planning, Product Strategy, Tech Industry, Cross-functional teams" />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Luwaga Meshach (Mulinsike) | Project Manager | Product Owner" />
        <meta property="og:description" content="Bridging the gap between strategic vision and flawless execution to deliver products that drive measurable results." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luwaga Meshach (Mulinsike) | Project & Product Management Professional" />
        <meta name="twitter:description" content="Agile Project Manager and Product Owner specializing in translating business goals into actionable roadmaps." />
      </Helmet>
      
      <Header 
        name="Luwaga Meshach (Mulinsike)" 
        title="Project Manager | Product Owner | Kampala, Uganda" 
        avatarSrc="https://www.linkedin.com/in/meshach-luwaga-268741286/overlay/photo/" 
      />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
