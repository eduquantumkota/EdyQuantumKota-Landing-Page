import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin } from 'lucide-react';

const INQUIRIES = [
  { name: 'Rahul S.', city: 'Pune', time: '2 mins ago' },
  { name: 'Amit K.', city: 'Nagpur', time: '5 mins ago' },
  { name: 'Priya M.', city: 'Indore', time: '12 mins ago' },
  { name: 'Sanjay D.', city: 'Ahmedabad', time: '18 mins ago' },
  { name: 'Vikram R.', city: 'Surat', time: '25 mins ago' },
];

export const SocialProofToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 5000);
    
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % INQUIRIES.length);
        setVisible(true);
      }, 1000);
    }, 15000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[90] hidden md:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-xs"
        >
          <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center shrink-0">
            <Users size={24} className="text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Recent Inquiry</div>
            <div className="text-sm font-black text-[#002D62]">
              {INQUIRIES[index].name} from {INQUIRIES[index].city}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 mt-1">
              <MapPin size={10} />
              Requested Partnership Kit • {INQUIRIES[index].time}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
