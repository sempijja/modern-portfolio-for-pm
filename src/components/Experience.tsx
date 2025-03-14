
import React from 'react';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  description,
  isActive
}) => (
  <div className={cn(
    "relative pl-8 pb-12 animate-fade-up",
    isActive ? "" : "opacity-[0.99]"
  )}
  style={{ animationDelay: '0.1s' }}>
    {/* Timeline dot */}
    <div className="absolute left-0 rounded-full w-4 h-4 bg-blue-500 border-4 border-white shadow-sm">
      {isActive && (
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-blue-500 animate-ping" />
      )}
    </div>
    
    {/* Timeline line */}
    <div className="absolute left-2 top-4 bottom-0 w-[1px] bg-gray-200"></div>
    
    <div className="glass-panel p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="font-display text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1 md:mt-0">
          <Calendar size={16} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>
      
      <div className="inline-flex items-center bg-blue-50 px-3 py-1 rounded-full mb-4">
        <Briefcase size={14} className="mr-1 text-blue-600" />
        <span className="text-sm font-medium text-blue-600">{company}</span>
      </div>
      
      <ul className="space-y-2">
        {description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: [
        "Led the end-to-end product development of the company's flagship analytics platform resulting in 45% revenue growth",
        "Managed a cross-functional team of 15 people across engineering, design, and marketing",
        "Conducted regular user research sessions and translated insights into product requirements",
        "Developed and maintained the product roadmap with quarterly OKRs aligned with company strategy"
      ],
      isActive: true
    },
    {
      title: "Product Owner",
      company: "Innovate Digital",
      period: "2018 - 2021",
      description: [
        "Served as product owner for 3 agile development teams using Scrum methodology",
        "Defined and prioritized product backlog items and user stories",
        "Collaborated with UX/UI designers to create intuitive user experiences",
        "Implemented data-driven decision-making processes, improving feature adoption by 35%"
      ]
    },
    {
      title: "Associate Product Manager",
      company: "Global Tech Services",
      period: "2016 - 2018",
      description: [
        "Assisted in the development and launch of a mobile application with 100,000+ downloads",
        "Conducted competitor analysis and market research to identify product opportunities",
        "Collaborated with engineering teams to ensure timely delivery of product features",
        "Analyzed user feedback and product metrics to guide feature improvements"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="Professional Journey"
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              title={exp.title} 
              company={exp.company} 
              period={exp.period} 
              description={exp.description}
              isActive={exp.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
