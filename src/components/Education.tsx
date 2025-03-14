
import React from 'react';
import SectionHeading from './SectionHeading';
import { GraduationCap, Award, Calendar } from 'lucide-react';

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

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "MBA, Product Management",
      institution: "University of Technology",
      period: "2014 - 2016",
      achievements: [
        "Graduated with distinction (3.8 GPA)",
        "President of Product Management Club",
        "Thesis: 'Impact of User-Centered Design on SaaS Product Adoption'"
      ]
    },
    {
      degree: "Bachelor of Science, Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      achievements: [
        "Minor in Business Administration",
        "Dean's List (7 semesters)",
        "Participated in national hackathon competition, placed 2nd"
      ]
    }
  ];

  const certifications = [
    "Certified Scrum Product Owner (CSPO) - Scrum Alliance",
    "Professional Agile Leadership (PAL) - Scrum.org",
    "Product Management Certification - Product School",
    "Google Analytics Certification",
  ];

  return (
    <section id="education" className="bg-white">
      <div className="section-container">
        <SectionHeading 
          title="Education" 
          subtitle="Academic Background"
        />
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
        
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-6">Professional Certifications</h3>
          
          <div className="glass-panel p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <ul className="grid md:grid-cols-2 gap-4">
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
      </div>
    </section>
  );
};

export default Education;
