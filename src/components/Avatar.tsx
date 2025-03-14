
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  imageSrc: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  imageSrc, 
  alt, 
  size = 'md', 
  className 
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32 md:w-40 md:h-40',
    lg: 'w-40 h-40 md:w-48 md:h-48',
  };

  return (
    <div className={cn(
      "relative rounded-full overflow-hidden border-4 border-white shadow-xl animate-float mx-auto",
      sizeClasses[size],
      className
    )}>
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-cover"
        style={{ 
          transition: 'transform 0.5s ease-in-out',
          willChange: 'transform'
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.transform = 'scale(1)';
        }}
      />
    </div>
  );
};

export default Avatar;
