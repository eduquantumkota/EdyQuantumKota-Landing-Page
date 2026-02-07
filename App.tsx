
import React, { useState } from 'react';
import { 
  Check, 
  Phone, 
  ArrowRight, 
  Trophy, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  MessageCircle, 
  Languages, 
  Quote, 
  Award, 
  Coins, 
  ShieldCheck, 
  Zap, 
  Star, 
  Globe, 
  Mail, 
  Users,
  Instagram,
  Smartphone
} from 'lucide-react';

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "मराठी", code: "mr" },
  { name: "ગુજરાતી", code: "gu" }
];

const featureList = [
  { name: "Kota Curriculum & Study Material", base: true, advance: true, premium: true },
  { name: "Faculty Recruitment & Training", base: true, advance: true, premium: true },
  { name: "Online Testing Platform (LMS)", base: true, advance: true, premium: true },
  { name: "Mobile App for Parents/Students", base: true, advance: true, premium: true },
  { name: "Local Marketing Strategy Support", base: false, advance: true, premium: true },
  { name: "School Integrated Program (SIP)", base: false, advance: false, premium: true },
  { name: "Dedicated Academic Mentor (Kota)", base: false, advance: false, premium: true },
  { name: "24/7 Doubt Counter (Online)", base: false, advance: false, premium: true }
];

const successStories = [
  {
    center: "Udgir Center",
    location: "Maharashtra",
    growth: "25 to 80+ Students",
    profit: "₹30-40 Lakhs Net Profit",
    description: "Started as a small local setup, but after implementing the EduQuantum Kota methodology, student intake tripled within 14 months.",
    owner: "Partner Franchisee",
    highlight: "3x Growth in 1 Year"
  },
  {
    center: "Amravati Center",
    location: "Maharashtra",
    growth: "120+ First Batch Admissions",
    profit: "Dominant Local Authority",
    description: "Leveraged the Brand Legacy to establish market dominance quickly. The parent trust in Kota academics worked wonders for the launch.",
    owner: "Academic Partner",
    highlight: "Market Leader"
  },
  {
    center: "Mumbai SIP",
    location: "Maharashtra",
    growth: "School Integrated Model",
    profit: "Premium Segment Capture",
    description: "Successfully integrated Kota coaching within school hours, providing a competitive edge and higher revenue per student.",
    owner: "School Owner",
    highlight: "Seamless Integration"
  }
];

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', role: 'Individual Investor' });
  const [activeLang, setActiveLang] = useState('en');

  const handleLanguageChange = (code: string) => {
    setActiveLang(code);
    if ((window as any).setLanguage) {
      (window as any).setLanguage(code);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNum = "919351099947";
    const msg = `*Franchise Enquiry*%0A*Name:* ${formData.name}%0A*City:* ${formData.city}%0A*Phone:* ${formData.phone}%0A*Role:* ${formData.role}%0A*Message:* Hi, I am interested in EduQuantum Kota Franchise. Please share details.`;
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/${whatsappNum}?text=${msg}`, '_blank');
    
    // Redirect main page after delay
    setTimeout(() => { 
        window.location.href = "https://eduquantumkota.com"; 
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Premium Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-xl py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/15jC1v2sZ7mZcGh-ij7ZPZyDL8Co-zqgX" 
              alt="EduQuantum Logo" 
              className="h-10 md:h-12 object-contain"
            />
          </div>
          
          <div className="flex items-center flex-wrap gap-4 text-xs md:text-sm font-bold text-navy uppercase tracking-wider">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <Languages size={14} className="text-gold" />
              {languages.map((l) => (
                <button 
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code)} 
                  className={`${activeLang === l.code ? 'text-gold underline underline-offset-4' : 'text-navy'} hover:text-gold transition px-1`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919351099947" className="flex items-center gap-2 text-navy font-bold text-lg hover:text-gold transition">
              <Phone size={20} className="text-gold" />
              <span className="notranslate">+91 93510 99947</span>
            </a>
            <button 
               onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-navy text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-slate-800 transition transform hover:scale-105"
            >
              Get Franchise
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-gradient text-white pt-16 pb-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-gold/20 text-gold border border-gold/30 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-8">
              Premium Partnership Opportunity 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Ab Har Sheher Banega <span className="text-gold notranslate">Kota!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Bring the world-class <span className="notranslate font-semibold">EduQuantum Kota</span> academic system to your city. 
              Partner with India's fastest-growing IIT-JEE & NEET coaching network and earn consistent returns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Trophy className="text-gold mb-2 mx-auto lg:mx-0" size={24} />
                <p className="text-xs font-bold uppercase tracking-tighter">Established 2012</p>
                <p className="text-[10px] text-gray-400">12+ Years Legacy</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="text-gold mb-2 mx-auto lg:mx-0" size={24} />
                <p className="text-xs font-bold uppercase tracking-tighter">Zero Risk Model</p>
                <p className="text-[10px] text-gray-400">Recession-Proof Biz</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm hidden md:block">
                <TrendingUp className="text-gold mb-2 mx-auto lg:mx-0" size={24} />
                <p className="text-xs font-bold uppercase tracking-tighter">High ROI</p>
                <p className="text-[10px] text-gray-400">Proven Profitability</p>
              </div>
            </div>
          </div>

          <div id="lead-form" className="premium-card p-10 text-slate-900 max-w-md mx-auto lg:ml-auto">
            <h3 className="text-2xl font-bold mb-2 text-navy">Request Franchise Info</h3>
            <p className="text-gray-500 mb-8 text-sm">Download our detailed brochure on WhatsApp instantly.</p>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-navy transition" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} required />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">City & State</label>
                <input type="text" placeholder="Your City" className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-navy transition" value={formData.city} onChange={(e)=>setFormData({...formData, city:e.target.value})} required />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Mobile Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-navy transition" value={formData.phone} onChange={(e)=>setFormData({...formData, phone:e.target.value})} required />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Current Role</label>
                <select className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 outline-none focus:ring-2 focus:ring-navy transition appearance-none" value={formData.role} onChange={(e)=>setFormData({...formData, role:e.target.value})}>
                  <option>Individual Investor</option>
                  <option>School Owner</option>
                  <option>Existing Coaching Owner</option>
                </select>
              </div>
              <button className="w-full bg-navy text-white font-bold py-5 rounded-xl hover:bg-slate-800 transition transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl uppercase tracking-widest text-sm">
                <span>Start Consultation</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Why Partner with Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Why Invest in Education?</h2>
            <div className="w-20 h-1.5 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Recession-Proof", icon: ShieldCheck, text: "Education is a basic need. Even in economic downturns, parents prioritize their children's JEE/NEET preparation." },
              { title: "Brand Legacy", icon: Award, text: "Benefit from the trusted 'EduQuantum Kota' name and G.G. Sir's 16+ years of academic excellence." },
              { title: "Quantum Method", icon: Zap, text: "Our proprietary learning method ensures higher student selections, leading to high local demand." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-gray-50 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="w-16 h-16 bg-navy/5 text-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-500">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-navy">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - RESTORED */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative group max-w-sm mx-auto lg:mx-0">
             <div className="absolute inset-0 bg-gold rounded-[2rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
             <img 
               src="https://lh3.googleusercontent.com/d/1UykyRhRknVxLRI85iJW1AH6kC2h6yU7h" 
               alt="Gorkey Godara (G.G. Sir)" 
               className="relative z-10 rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
               <Star className="text-gold fill-gold mb-2" size={24} />
               <p className="text-navy font-black text-2xl">16+</p>
               <p className="text-gray-400 text-[10px] uppercase font-bold">Years of Kota Exp</p>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Academic Leadership</h2>
            <h3 className="text-2xl font-bold text-gold mb-8 italic">
              Meet <span className="notranslate">Gorkey Godara (G.G. Sir)</span>
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed border-l-4 border-gold pl-6 italic text-lg">
                "EduQuantum is not just a coaching center; it's a movement to democratize Kota-level education across India. We provide our partners with the exact blueprint that produces toppers."
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-semibold">Ex-Senior Faculty, Top Kota Institutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-semibold">Mentor to 1000+ IITians</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-semibold">System Established in 2012</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="text-sm font-semibold">Proven Scalability in 10+ Cities</span>
                </div>
              </div>
            </div>
            <button 
               onClick={handleFormSubmit}
               className="mt-12 bg-white text-navy px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gold transition transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle size={20} /> Discuss with Experts
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">Franchise Models</h2>
            <p className="text-gray-500">Pick the growth plan that aligns with your ambition.</p>
          </div>
          
          <div className="overflow-x-auto rounded-[2rem] shadow-2xl border bg-white border-gray-100">
            <table className="w-full text-left min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-8 font-bold text-lg">Support & Features</th>
                  <th className="p-8 text-center border-r border-white/10">Base Model</th>
                  <th className="p-8 text-center border-r border-white/10">Advance Model</th>
                  {/* Fixed Overlap: Moved badge inside padding and adjusted pt */}
                  <th className="pt-12 pb-6 px-8 text-center bg-gold text-navy relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] py-1 px-3 rounded-full font-black uppercase tracking-[0.1em] shadow-xl whitespace-nowrap">Most Profitable</div>
                    Premium Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {featureList.map((f, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition group">
                    <td className="p-6 font-semibold text-navy flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold/50 group-hover:scale-150 transition"></div>
                      {f.name}
                    </td>
                    <td className="p-6 text-center border-r border-gray-50">
                      {f.base ? <Check className="mx-auto text-green-500" /> : <span className="text-red-300 font-bold">✘</span>}
                    </td>
                    <td className="p-6 text-center border-r border-gray-50">
                      {f.advance ? <Check className="mx-auto text-green-500" /> : <span className="text-red-300 font-bold">✘</span>}
                    </td>
                    <td className="p-6 text-center bg-gold/5">
                      <Check className="mx-auto text-navy font-black" />
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                   <td className="p-8 font-bold text-navy">Expected ROI</td>
                   <td className="p-8 text-center text-sm font-bold">12-18 Months</td>
                   <td className="p-8 text-center text-sm font-bold">10-15 Months</td>
                   <td className="p-8 text-center text-sm font-bold bg-gold/10 text-navy uppercase tracking-widest">8-12 Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partner Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Partner Success Stories</h2>
            <div className="w-20 h-1.5 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Real journeys of entrepreneurs who transformed their vision into high-yielding educational institutes.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="premium-card p-8 flex flex-col h-full group hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <TrendingUp size={24} />
                  </div>
                  <span className="bg-navy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{story.highlight}</span>
                </div>
                
                <h4 className="text-xl font-bold text-navy mb-1">{story.center}</h4>
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4 flex items-center gap-1">
                  <MapPin size={12} /> {story.location}
                </p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Users size={18} className="text-navy" />
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">Growth</p>
                      <p className="text-sm font-bold text-navy">{story.growth}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                    <Coins size={18} className="text-green-600" />
                    <div>
                      <p className="text-[10px] text-green-600 uppercase font-bold">Result</p>
                      <p className="text-sm font-bold text-green-700">{story.profit}</p>
                    </div>
                  </div>
                </div>

                <div className="relative pt-6 border-t border-gray-100">
                  <Quote className="absolute -top-3 right-0 text-gold/20" size={32} />
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "{story.description}"
                  </p>
                  <p className="mt-4 text-xs font-bold text-navy text-right">— {story.owner}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition group"
            >
              Hear More Success Stories <ArrowRight size={18} className="group-hover:translate-x-2 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-navy mb-8">Our Impact in Numbers</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 rounded-[2rem] bg-navy text-white shadow-2xl">
                  <p className="text-5xl font-black text-gold mb-2">10+</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Active Centers</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm">
                  <p className="text-5xl font-black text-navy mb-2">5000+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Students Taught</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm">
                  <p className="text-5xl font-black text-navy mb-2">90%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Parent Satisfaction</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-gold text-navy shadow-2xl">
                  <p className="text-5xl font-black mb-2">12Y</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Legacy</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Quote className="absolute -top-10 -left-10 text-gold opacity-10" size={120} />
              <div className="premium-card p-10 relative z-10">
                <h4 className="text-2xl font-bold text-navy mb-6">A Message to Investors</h4>
                <p className="text-gray-600 leading-relaxed italic mb-8">
                  "Education is the only recession-proof business in India. With our system, you get a business that not only earns you profit but also brings respect in your society. Join us in making Kota-level quality education accessible to every student."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold font-bold">GG</div>
                  <div>
                    <p className="font-bold text-navy notranslate">Gorkey Godara</p>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Founder, EduQuantum Kota</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="hero-gradient rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 relative z-10">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-12 relative z-10 max-w-2xl mx-auto">
              Only a limited number of franchises are granted per city. Secure your region today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
               <button 
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gold text-navy px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition shadow-2xl transform hover:scale-105"
               >
                 Reserve Your City
               </button>
               <button 
                  onClick={handleFormSubmit}
                  className="bg-green-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-3 shadow-2xl transform hover:scale-105"
               >
                 <MessageCircle size={24} /> WhatsApp Us
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-[#001229] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-2">
              <img src="https://lh3.googleusercontent.com/d/15jC1v2sZ7mZcGh-ij7ZPZyDL8Co-zqgX" alt="Logo" className="h-10 mb-8 bg-white p-1.5 rounded" />
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed italic">
                Empowering education entrepreneurs with <span className="notranslate">Kota's</span> academic legacy. Innovative learning solutions for the leaders of tomorrow.
              </p>
              <div className="flex gap-4">
                 <a href="https://www.instagram.com/quantum_kota/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold cursor-pointer hover:bg-gold hover:text-navy transition">
                   <Instagram size={18} />
                 </a>
                 <a href="https://play.google.com/store/apps/details?id=co.april2019.qtm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold cursor-pointer hover:bg-gold hover:text-navy transition">
                   <Smartphone size={18} />
                 </a>
                 <a href="https://eduquantumkota.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold cursor-pointer hover:bg-gold hover:text-navy transition">
                   <Globe size={18} />
                 </a>
              </div>
            </div>
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Kota Head Office</h4>
              <div className="space-y-4 text-sm text-gray-400">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0" />
                  <span>Jawahar Nagar, District Centre, <span className="notranslate">Kota</span>, Rajasthan</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-gold" />
                  <span className="notranslate text-white font-bold">+91 93510 99947</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-gold" />
                  <span>eduquantumkota@gmail.com</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Support Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="https://eduquantumkota.com/" target="_blank" className="hover:text-gold transition">Main Website</a></li>
                <li><a href="https://share.google/c7M2pm9VhuvBw0t2l" target="_blank" className="hover:text-gold transition">Google Profile & Reviews</a></li>
                <li><a href="https://www.instagram.com/quantum_kota/" target="_blank" className="hover:text-gold transition">Instagram (Tips & Updates)</a></li>
                <li><a href="https://www.justdial.com/Kota-Rajasthan/Quantum-Physics-Classes-In-Front-Of-Ratlami-Namkeen-New-Jawahar-Nagar/9999PX744-X744-140731230445-Y5M6_BZDET" target="_blank" className="hover:text-gold transition">JustDial Listing</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=co.april2019.qtm" target="_blank" className="hover:text-gold transition font-bold text-white">Download Mobile App</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <p>&copy; 2025 <span className="notranslate">EduQuantum Kota</span>. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold">Privacy Policy</a>
              <a href="#" className="hover:text-gold">Terms of Partnership</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Float */}
      <button 
        onClick={handleFormSubmit}
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition" />
        <span className="font-bold text-sm hidden md:block">Chat with G.G. Sir</span>
      </button>
    </div>
  );
};

export default App;
