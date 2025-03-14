
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
      title: "Product Manager",
      company: "Lyanda Technologies Limited, Kampala",
      period: "August 2024 - Present",
      description: [
        "Led cross-functional teams in agile product development, achieving 95% adherence to project timelines and delivering 3 major product updates aligned with organizational strategy",
        "Spearheaded user-centric product development by conducting surveys with industry-leading partners and over 200 potential users, resulting in 20% improvement in data-driven decision-making",
        "Authored 20+ targeted blog articles, driving a 25% increase in website traffic and enhancing organizational visibility",
        "Acted as the primary liaison between development, marketing and management to ensure alignment on priorities"
      ],
      isActive: true
    },
    {
      title: "Product Owner",
      company: "Codeplay UG, Kampala",
      period: "August 2023 - August 2024",
      description: [
        "Mentored 40 interns in Scrum methodologies and project management tools, designing a grading system that resulted in 100% certification success",
        "Coordinated recruitment efforts for 100+ applicants, successfully filling key roles in Product Management and Agile teams",
        "Developed backlogs for 2 products, improving development efficiency by 15% through effective sprint planning and retrospective meetings",
        "Met all project deadlines while maintaining high quality standards through rigorous backlog refinement"
      ]
    },
    {
      title: "Procurement Intern",
      company: "Mukono District Local Government, Uganda",
      period: "December 2023 - February 2024",
      description: [
        "Spearheaded the consolidation of procurement requisitions from multiple departments into a streamlined Excel tracking system",
        "Enhanced efficiency and data accuracy for the procurement process through systematic organization",
        "Optimized the organization's solicitation processes through the EGP system, ensuring compliance with procurement regulations",
        "Developed robust evaluation criteria for procurement assessments, improving the accuracy and fairness of vendor selection"
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
