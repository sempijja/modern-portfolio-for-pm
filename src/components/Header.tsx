
import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  avatarSrc: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, avatarSrc }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="text-xl font-display font-semibold">{name.split(' ')[0]}</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['About', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container section-container flex flex-col items-center justify-center text-center animate-fade-up">
        <Avatar imageSrc={avatarSrc} alt={name} size="lg" />
        
        <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-900 text-balance">
          {name}
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-xl text-balance">
          {title}
        </p>
        
        <div className="mt-12 flex space-x-4">
          <a 
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Contact Me
          </a>
          <a 
            href="#about"
            className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center animate-pulse">
        <a href="#about" className="text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </header>
  );
};

export default Header;
