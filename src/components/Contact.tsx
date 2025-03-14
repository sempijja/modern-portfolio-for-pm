
import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex items-center p-4 glass-panel animate-fade-up transition-all duration-300 hover:shadow-md" style={{ animationDelay: '0.1s' }}>
      <div className="mr-4 bg-blue-50 rounded-full p-3 text-blue-600">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; href: string; label: string }> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="section-container">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Contact Information"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ContactItem 
              icon={<Mail size={20} />} 
              label="Email" 
              value="mulinmeshach@gmail.com" 
              href="mailto:mulinmeshach@gmail.com" 
            />
            <ContactItem 
              icon={<Phone size={20} />} 
              label="Phone" 
              value="+256 752611072" 
              href="tel:+256752611072" 
            />
            <ContactItem 
              icon={<MapPin size={20} />} 
              label="Location" 
              value="Kampala, Uganda" 
            />
            <ContactItem 
              icon={<Linkedin size={20} />} 
              label="LinkedIn" 
              value="linkedin.com/in/meshach-luwaga" 
              href="https://www.linkedin.com/in/meshach-luwaga-268741286" 
            />
          </div>
          
          <div className="glass-panel p-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto">
              I'm passionate about driving innovation through Agile practices and turning ideas into impact. Outside of work, I love experimenting with no-code tools and automations. Let's connect to discuss how I can help your team achieve its product and project goals.
            </p>
            
            <div className="flex justify-center space-x-4">
              <SocialLink 
                icon={<ExternalLink size={20} />} 
                href="https://github.com/yourusername" 
                label="Portfolio"
              />
              <SocialLink 
                icon={<Linkedin size={20} />} 
                href="https://www.linkedin.com/in/meshach-luwaga-268741286" 
                label="LinkedIn"
              />
              <SocialLink 
                icon={<Mail size={20} />} 
                href="mailto:mulinmeshach@gmail.com" 
                label="Email"
              />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-16 py-8 bg-white">
        <div className="container max-w-5xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Luwaga Meshach (Mulinsike). All rights reserved.</p>
          <p className="mt-2">Project Manager | Product Owner | Kampala, Uganda</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
