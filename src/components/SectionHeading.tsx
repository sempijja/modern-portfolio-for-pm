
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <div className="inline-block mb-2 px-3 py-1 bg-blue-50 rounded-full">
        <h2 className="text-sm font-medium tracking-wider text-blue-600 uppercase">
          {title}
        </h2>
      </div>
      {subtitle && (
        <h3 className="mt-2 text-3xl md:text-4xl font-display font-bold text-gray-900">
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionHeading;
