
import React from 'react';
import SectionHeading from './SectionHeading';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  achievements?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  period,
  achievements
}) => (
  <div className="glass-panel p-6 transition-all duration-300 hover:shadow-md animate-fade-up">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div className="flex items-center mb-2 md:mb-0">
        <div className="mr-4 bg-blue-50 rounded-full p-2">
          <GraduationCap size={20} className="text-blue-600" />
        </div>
        <h3 className="font-display text-xl font-bold text-gray-900">{degree}</h3>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar size={16} className="mr-1" />
        <span>{period}</span>
      </div>
    </div>
    
    <div className="mb-4">
      <div className="inline-flex items-center bg-blue-50 px-3 py-1 rounded-full">
        <span className="text-sm font-medium text-blue-600">{institution}</span>
      </div>
    </div>
    
    {achievements && achievements.length > 0 && (
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Achievements & Activities</h4>
        <ul className="space-y-2">
          {achievements.map((item, i) => (
            <li key={i} className="flex items-start">
              <Award size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

// Define skill colors for the badges
const skillColors = [
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-green-100 text-green-700",
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-700",
  "bg-indigo-100 text-indigo-700",
  "bg-pink-100 text-pink-700",
  "bg-cyan-100 text-cyan-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-fuchsia-100 text-fuchsia-700",
  "bg-teal-100 text-teal-700",
];

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "Bachelor's Degree in Procurement and Logistics Management",
      institution: "Kyambogo University, Uganda",
      period: "2020 - 2024",
      achievements: [
        "Specialized in procurement processes and supply chain management",
        "Developed expertise in contract negotiation and vendor relationship management",
        "Applied procurement principles to real-world business scenarios"
      ]
    }
  ];

  const certifications = [
    "Google Project Management Certification",
    "Agile Project Management",
    "Scrum Fundamentals",
    "Product Management Essentials"
  ];

  const skills = [
    "Agile Methodologies (Scrum, Kanban)",
    "Product Roadmapping",
    "Backlog Prioritization",
    "User Story Mapping",
    "Sprint Planning",
    "Stakeholder Management",
    "User Research",
    "Market Analysis",
    "JIRA & Confluence",
    "Trello, Asana, Monday, Notion",
    "Microsoft Office Suite",
    "Data-Driven Decision Making"
  ];

  // Function to get a color for a skill based on its index
  const getSkillColor = (index: number) => skillColors[index % skillColors.length];

  return (
    <section id="education" className="bg-white">
      <div className="section-container">
        <SectionHeading 
          title="Education" 
          subtitle="Academic Background"
        />
        
        <div className="grid md:grid-cols-1 gap-6 mb-16">
          {educationItems.map((item, index) => (
            <EducationItem 
              key={index} 
              degree={item.degree} 
              institution={item.institution} 
              period={item.period}
              achievements={item.achievements}
            />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="font-display text-2xl font-bold text-center mb-6">Professional Certifications</h3>
            
            <div className="glass-panel p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <ul className="grid gap-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-0.5 text-blue-600">
                      <Award size={18} />
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-2xl font-bold text-center mb-6">Professional Skills</h3>
            
            <div className="glass-panel p-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${getSkillColor(i)}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
