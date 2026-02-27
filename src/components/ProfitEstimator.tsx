import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Wallet, ArrowRight } from 'lucide-react';

export const ProfitEstimator: React.FC = () => {
  const [students, setStudents] = useState(100);
  const [fee, setFee] = useState(45000);

  const stats = useMemo(() => {
    const revenue = students * fee;
    const directCosts = revenue * 0.4; // Faculty, material
    const fixedCosts = 1500000; // Rent, staff, admin per year
    const profit = revenue - directCosts - fixedCosts;
    const margin = (profit / revenue) * 100;

    return {
      revenue: revenue.toLocaleString('en-IN'),
      profit: profit > 0 ? profit.toLocaleString('en-IN') : '0',
      margin: profit > 0 ? margin.toFixed(1) : '0',
      isLoss: profit <= 0
    };
  }, [students, fee]);

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Controls */}
        <div className="p-8 md:p-12 bg-slate-50">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[#002D62] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <TrendingUp size={12} />
              Profit Estimator
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#002D62]">Calculate Your ROI</h3>
            <p className="text-slate-500 text-sm mt-2 italic">Adjust the sliders to see potential annual growth.</p>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-black text-slate-700 uppercase tracking-tight flex items-center gap-2">
                  <Users size={16} className="text-[#D4AF37]" />
                  Total Students
                </label>
                <span className="text-2xl font-black text-[#002D62]">{students}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10"
                value={students}
                onChange={(e) => setStudents(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                <span>50 Students</span>
                <span>500 Students</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-black text-slate-700 uppercase tracking-tight flex items-center gap-2">
                  <Wallet size={16} className="text-[#D4AF37]" />
                  Avg. Fee Per Student (₹)
                </label>
                <span className="text-2xl font-black text-[#002D62]">₹{fee.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                min="25000" 
                max="100000" 
                step="5000"
                value={fee}
                onChange={(e) => setFee(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                <span>₹25k</span>
                <span>₹100k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 md:p-12 bg-[#002D62] text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10 space-y-8">
            <div>
              <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Estimated Annual Revenue</div>
              <div className="text-4xl md:text-5xl font-black text-white">₹{stats.revenue}</div>
            </div>

            <div className="h-px bg-white/10 w-full"></div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Potential Profit</div>
                <div className="text-2xl md:text-3xl font-black text-[#D4AF37]">₹{stats.profit}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Profit Margin</div>
                <div className="text-2xl md:text-3xl font-black text-white">{stats.margin}%</div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => window.open(`https://wa.me/919351099947?text=I calculated my ROI for ${students} students. Please send the detailed business plan.`, '_blank')}
                className="w-full py-5 bg-[#D4AF37] text-[#002D62] rounded-2xl font-black shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
              >
                Get Detailed Business Plan <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-4 italic">*Estimates based on standard operational costs. Actual results may vary.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
