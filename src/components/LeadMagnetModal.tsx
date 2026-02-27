import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, CheckCircle2 } from 'lucide-react';

interface LeadMagnetModalProps {
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to your backend
    setTimeout(() => {
      window.open('https://wa.me/919351099947?text=I want the Free 2025 Franchise Business Blueprint.', '_blank');
      onClose();
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002D62]/80 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-[#002D62] transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="bg-[#D4AF37] p-10 flex flex-col justify-center text-[#002D62]">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <FileText size={32} />
            </div>
            <h2 className="text-3xl font-black leading-tight mb-4">Free 2025 Business Blueprint</h2>
            <p className="font-bold opacity-80 leading-relaxed">Download our complete guide on how to build a ₹1Cr+ coaching center in your city.</p>
            
            <div className="mt-8 space-y-3">
              {['Investment Breakdown', 'Faculty Hiring Guide', 'Marketing Strategy'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-black">
                  <CheckCircle2 size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 flex flex-col justify-center">
            {!submitted ? (
              <>
                <h3 className="text-xl font-black text-[#002D62] mb-2">Where should we send it?</h3>
                <p className="text-slate-500 text-sm mb-8">Enter your details to get instant access to the PDF kit.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] font-bold"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#002D62] text-white rounded-2xl font-black shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    Download Now <Download size={20} />
                  </button>
                </form>
                <p className="text-[10px] text-slate-400 mt-6 text-center italic">By downloading, you agree to receive updates via WhatsApp/Email.</p>
              </>
            ) : (
              <div className="text-center py-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="text-2xl font-black text-[#002D62] mb-2">Success!</h3>
                <p className="text-slate-500 font-bold">Redirecting you to the kit...</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
