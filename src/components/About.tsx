
import React from 'react';
import SectionHeading from './SectionHeading';
import { BookOpen, Target, Users, Lightbulb, Truck, RefreshCw, TrendingUp, Award } from 'lucide-react';

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
      title: "Project Management",
      description: "End-to-end oversight of software development, process automation, and community based projects using Agile and Traditional methodologies."
    },
    {
      icon: <Users size={20} />,
      title: "Product Ownership",
      description: "Defining user stories, prioritizing backlogs, and collaborating with stakeholders to align product features with market needs."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Product Strategy",
      description: "Conducting market research, defining KPIs, and guiding products from ideation to scale with data-driven decision making."
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Agile Practices",
      description: "Implementing Scrum frameworks with sprint planning, backlog refinement, and retrospective meetings to optimize development workflows."
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Bridging Vision & Execution"
        />
        
        <div className="md:flex md:space-x-8 mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-display text-2xl font-bold mb-4">Product & Project Leadership</h3>
            <p className="text-gray-700 mb-4">
              I bridge the gap between strategic vision and flawless execution, partnering with teams to deliver products and projects that drive measurable results. With experience as a Project Manager, Product Owner, and Product Manager, I specialize in translating business goals into actionable roadmaps, optimizing workflows, and leading cross-functional teams in the tech industry.
            </p>
            <p className="text-gray-700">
              My approach combines technical knowledge, business acumen and user-centered design to create products that solve real problems. I've delivered solutions for startups using tools like Jira, Trello, Asana, Monday, and Notion, while ensuring teams stay aligned and motivated throughout the development process.
            </p>
          </div>
          
          <div className="md:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display text-2xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              {[
                "Mentored a team of 40 interns to develop a ride hailing application, resulting in a 90% learning success rate based on internship objectives",
                "Streamlined workflows for Lyanda Technologies Limited, reducing project delays by 10%",
                "Led cross-functional teams in agile product development with 95% adherence to project timelines",
                "Spearheaded user-centric product development through surveys with 200+ potential users",
                "Authored 20+ targeted blog articles, driving a 25% increase in website traffic",
                "Coordinated recruitment efforts for 100+ applicants, successfully filling key roles",
                "Developed backlogs for multiple products, improving development efficiency by 15%"
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
