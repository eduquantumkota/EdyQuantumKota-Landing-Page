import React from 'react';
import { FacultyCard } from './FacultyCard';
import { faculties } from '../constants/faculties';

interface FacultyListProps {
  expText?: string;
}

export const FacultyList: React.FC<FacultyListProps> = ({ expText = "Years" }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {faculties.map((f, idx) => (
        <FacultyCard key={idx} faculty={f} expText={expText} />
      ))}
    </div>
  );
};
