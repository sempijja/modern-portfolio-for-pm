
import React from 'react';
import SectionHeading from './SectionHeading';
import { BookOpen, Target, Users, Lightbulb } from 'lucide-react';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => (
  <div className="glass-panel p-6 transition-all duration-300 hover:shadow-md animate-fade-up">
    <div className="rounded-full bg-blue-50 w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  const cards = [
    {
      icon: <Target size={20} />,
      title: "Strategic Vision",
      description: "Defining product vision and strategy that aligns with business goals and user needs."
    },
    {
      icon: <Users size={20} />,
      title: "Team Leadership",
      description: "Guiding cross-functional teams to deliver successful products on time and within budget."
    },
    {
      icon: <BookOpen size={20} />,
      title: "User Advocacy",
      description: "Championing user needs through research, testing and continuous feedback integration."
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Innovation",
      description: "Driving creative solutions and new opportunities while managing risks effectively."
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Strategic Product Leadership"
        />
        
        <div className="md:flex md:space-x-8 mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-display text-2xl font-bold mb-4">Passionate Product Leader</h3>
            <p className="text-gray-700 mb-4">
              I'm a strategic product manager and owner with a passion for creating digital experiences that solve real problems and delight users. By combining business insight with technical knowledge and user empathy, I bridge the gap between vision and execution.
            </p>
            <p className="text-gray-700">
              My approach is highly collaborative, research-driven, and focused on delivering tangible business results while ensuring exceptional user experiences. I have a proven track record of leading cross-functional teams to success across various industries.
            </p>
          </div>
          
          <div className="md:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display text-2xl font-bold mb-4">Professional Approach</h3>
            <ul className="space-y-3">
              {[
                "Building roadmaps with clear, prioritized objectives aligned with business goals",
                "Gathering and synthesizing user insights through research and data analysis",
                "Managing stakeholder expectations while advocating for optimal user experiences",
                "Defining clear product requirements and success metrics",
                "Iterative development with continuous testing and user feedback",
                "Deeply collaborative with engineering, design, marketing, and leadership teams"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <AboutCard 
              key={index} 
              icon={card.icon} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
