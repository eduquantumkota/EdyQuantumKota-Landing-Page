import React from 'react';
import { BookOpen, Award } from 'lucide-react';

interface FacultyProps {
  faculty: {
    name: string;
    subject_key: string;
    role_key: string;
    exp_val: string;
    qualification_key: string;
    image: string;
  };
  expText?: string;
}

export const FacultyCard: React.FC<FacultyProps> = ({ faculty, expText = "Years" }) => {
  return (
    <div className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden shrink-0">
        <img 
          src={faculty.image} 
          alt={faculty.name} 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition duration-700" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">{faculty.role_key}</div>
          <div className="text-lg md:text-xl font-black">{faculty.name}</div>
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-4 grow flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-[#D4AF37]" />
              <span className="text-sm font-black text-[#002D62]">{faculty.subject_key}</span>
            </div>
            <div className="bg-[#D4AF37]/10 px-3 py-1 rounded-full text-[9px] font-black text-[#002D62] uppercase shrink-0">
              {faculty.exp_val} {expText}
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Award size={12} className="text-[#D4AF37] mt-1 shrink-0" />
            <p className="text-[11px] font-bold text-slate-600 leading-relaxed italic">
              {faculty.qualification_key}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
