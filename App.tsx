import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Trophy, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Smartphone,
  Star,
  Languages,
  Globe,
  Instagram,
  Mail,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  Rocket,
  Crown,
  Zap,
  Target,
  GraduationCap,
  Users,
  Image as ImageIcon,
  Award,
  BookOpen,
  ExternalLink,
  Search,
  Map
} from 'lucide-react';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'हिन्दी', code: 'hi' },
  { name: 'मराઠી', code: 'mr' },
  { name: 'ગુજરાતી', code: 'gu' }
];

const PHONE_NUMBER = "+91 93510 99947";
const WHATSAPP_RAW = "919351099947";
const BRAND_NAME = "EduQuantum Kota";
const FOUNDER_NAME = "Gorkey Godara";
const FOUNDER_NICKNAME = "G.G. Sir";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1lv6QVksAjYZdSTpcTX6mxkCmOKZl85T_";

const faculties = [
  {
    name: "Gorkey Godara",
    subject: "Physics",
    role: "Founder",
    experience: "16+ Years",
    qualification: "IIT Guwahati Alumni • Specialist in JEE Advanced Physics",
    image: "https://lh3.googleusercontent.com/d/1luFFC0j_NJ1YOoyvtQV-el09soK4t_gf"
  },
  {
    name: "A. Vyas Sir",
    subject: "Chemistry",
    role: "Senior Faculty",
    experience: "14+ Years",
    qualification: "BSc • MSc (Chemistry) • MSc (Botany) • B.Ed",
    image: "https://lh3.googleusercontent.com/d/16nwRLzBrMGb8R1FRD9pZzFqyJZyshPb9"
  },
  {
    name: "Alok Agrawal",
    subject: "Mathematics",
    role: "Senior Faculty",
    experience: "10+ Years",
    qualification: "B.Tech in Mechanical from RTU, Kota (Raj.)",
    image: "https://lh3.googleusercontent.com/d/16mhfEFnK5EyO2YBB6x97m946OFsoyGNO"
  },
  {
    name: "Megha Ma'am",
    subject: "Biology",
    role: "Senior Faculty",
    experience: "10+ Years",
    qualification: "BSc • MSc (Botany) • B.Ed (Biology) • GATE Qualify 2019",
    image: "https://lh3.googleusercontent.com/d/1ur9mXf023Unx4mWI2QD_Gs37QBIfJ4Du"
  }
];

const galleryImages = [
  "https://lh3.googleusercontent.com/d/15_g06RoKEjDkn-yFAVUmOFT0hJlebYzv",
  "https://lh3.googleusercontent.com/d/1AwyA6Ybs4DaB20IxzbRttPWjG6U4WMF1",
  "https://lh3.googleusercontent.com/d/1Sgk9No6AHV1lLGPsYLiwCcAzeOYt4jhA",
  "https://lh3.googleusercontent.com/d/1RmD51O3oQecwir7dikBaqwX_WRtM9G_x"
];

const franchiseModels = [
  {
    name: "Base Model",
    tier: "Foundation",
    icon: <Layers className="text-[#002D62]" size={32} />,
    desc: "Ideal for established schools looking to start a specialized IIT-JEE wing.",
    features: [
      "Standard Kota Modules",
      "Online Test Platform",
      "Basic Marketing Kit",
      "Teacher Orientation",
      "Centralized ERP Access"
    ],
    highlight: false
  },
  {
    name: "Advance Model",
    tier: "Growth",
    icon: <Rocket className="text-[#002D62]" size={32} />,
    desc: "Comprehensive digital ecosystem with enhanced academic support.",
    features: [
      "Branded Student App",
      "Intensive Teacher Training",
      "Video Lecture Library",
      "Local Brand Usage",
      "Monthly Academic Audits",
      "DLP Support"
    ],
    highlight: false
  },
  {
    name: "Premium Model",
    tier: "Full Partnership",
    icon: <Crown className="text-[#D4AF37]" size={32} />,
    desc: "Our most successful full-scale coaching model with dedicated onsite support.",
    features: [
      "White-Label Mobile App",
      "On-site Launch Support",
      "Exclusive Territory Rights",
      "Premium Design Setup",
      "24/7 Priority Support",
      "Direct Founder Interaction",
      "Full Recruitment Support"
    ],
    highlight: true
  }
];

const centers = [
  {
    name: "Udgir, Maharashtra",
    franchisee: "EduQuantum Udgir",
    metric1: "25 to 80+ Students",
    metric2: "30-40 Lakhs Profit",
    desc: "Achieved massive student growth and financial success in just one academic session in Udgir city.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Amravati, Maharashtra",
    franchisee: "EduQuantum Amravati",
    metric1: "120+ Admissions Day-1",
    metric2: "Dominant Market Share",
    desc: "Unprecedented launch success fueled by brand trust and Kota's academic ecosystem in Amravati.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  }
];

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', role: 'Investor' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [currentLang, setCurrentLang] = useState((window as any).initialLang || 'en');
  const [currentSlide, setCurrentSlide] = useState(0);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (formData.name && formData.name.length < 3) e.name = "Enter full name";
    if (formData.city && formData.city.length < 2) e.city = "Enter city";
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) e.phone = "Enter 10-digit number";
    return e;
  }, [formData]);

  const isValid = (field: string) => {
    if (!touched[field]) return null;
    return !errors[field] && formData[field as keyof typeof formData].length > 0;
  };

  const openWhatsApp = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_RAW}?text=${encodedMsg}`, '_blank');
  };

  const changeLang = useCallback((code: string) => {
    if (code === currentLang) return;
    setCurrentLang(code);
    const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
      document.cookie = `googtrans=/en/${code}; path=/`;
    }
  }, [currentLang]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % centers.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + centers.length) % centers.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleWhatsAppForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setTouched({ name: true, city: true, phone: true });
      return;
    }
    const text = `*New Franchise Inquiry*\n*Name:* ${formData.name}\n*City:* ${formData.city}\n*Role:* ${formData.role}\n*Phone:* ${formData.phone}\nI am interested in the ${BRAND_NAME} partnership. Please send business details.`;
    openWhatsApp(text);
  };

  const getInputBorderClass = (field: string) => {
    if (!touched[field]) return 'border-slate-100 focus:border-[#D4AF37]';
    return errors[field] ? 'border-red-500 bg-red-50/10' : 'border-green-500 bg-green-50/10';
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-[#D4AF37] selection:text-white">
      
      {/* Announcement */}
      <div className="bg-[#002D62] text-white py-2 px-4 border-b border-white/10 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#D4AF37]"><Star size={14} fill="currentColor"/> India's Most Result-Oriented Team</span>
            <span className="hidden md:inline-block opacity-30">|</span>
            <span className="flex items-center gap-2">Since 2012</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => openWhatsApp(`Hi ${FOUNDER_NICKNAME}, I'm calling about the franchise opportunity.`)} className="hover:text-[#D4AF37] transition notranslate font-bold">{PHONE_NUMBER}</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="glass-header sticky top-0 z-50 border-b border-slate-100 py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <img src={LOGO_URL} alt={BRAND_NAME} className="h-10 md:h-14 hover:scale-105 transition duration-300 cursor-pointer object-contain notranslate" />
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => openWhatsApp(`Hi ${FOUNDER_NICKNAME}, I want to start an EduQuantum center. Please share details.`)}
                  className="bg-[#002D62] text-white px-8 py-3 rounded-full font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition active:scale-95 shadow-lg shadow-blue-900/20"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-4 overflow-x-auto hide-scroll py-1 notranslate">
              <div className="flex items-center gap-2 shrink-0 bg-slate-100 px-4 py-1.5 rounded-full">
                <Languages size={14} className="text-[#D4AF37]" />
                <span className="text-[10px] font-black uppercase text-slate-500">Language</span>
              </div>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button 
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-bold transition-all border ${
                      currentLang === l.code ? 'bg-[#D4AF37] text-white border-[#D4AF37]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-luxury text-white pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-2 rounded-full mb-8 border border-white/20">
              <Trophy size={16} className="text-[#D4AF37]" />
              <span className="text-[11px] font-black uppercase tracking-widest">Academic Excellence Partner 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-brand font-black leading-[1.05] mb-8">
              Launch Your <span className="notranslate">{BRAND_NAME}</span> <br/> <span className="text-[#D4AF37] italic underline decoration-white/20">Franchise Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12">
              Empower your city with <span className="notranslate">Kota's</span> top-tier coaching system. Get expert materials, modules, and training led by <span className="text-[#D4AF37] font-bold notranslate">{FOUNDER_NICKNAME}</span>.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">16+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Years Exp</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">5K+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Top Results</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37] notranslate">IIT-G</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Founder Pedigree</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">High</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Growth ROI</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-2xl border-t-[10px] border-[#D4AF37] text-slate-900">
              <h3 className="text-3xl font-brand font-black mb-2 text-[#002D62]">Enquiry Form</h3>
              <p className="text-slate-500 text-sm mb-10 italic">"Get complete business plan on <span className="notranslate">WhatsApp</span>."</p>
              
              <form onSubmit={handleWhatsAppForm} className="space-y-6">
                <div className="group relative">
                  <input type="text" placeholder="Full Name" required className={`w-full p-5 bg-slate-50 border rounded-2xl outline-none transition-all ${getInputBorderClass('name')}`} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="group relative">
                  <input type="text" placeholder="City" required className={`w-full p-5 bg-slate-50 border rounded-2xl outline-none transition-all ${getInputBorderClass('city')}`} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
                <div className="group relative">
                  <input type="tel" placeholder="WhatsApp Number" required className={`w-full p-5 bg-slate-50 border rounded-2xl outline-none transition-all notranslate ${getInputBorderClass('phone')}`} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})} value={formData.phone} />
                </div>
                <div className="group relative">
                  <select className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold text-[#002D62] appearance-none" onChange={(e) => setFormData({...formData, role: e.target.value})}>
                    <option>School Owner</option>
                    <option>Coaching Owner</option>
                    <option>Investor</option>
                    <option>Teacher</option>
                  </select>
                </div>
                <button className="w-full bg-[#002D62] text-white font-black py-5 rounded-2xl shadow-xl transition-all hover:bg-blue-800 active:scale-95 flex items-center justify-center gap-3">
                  Get Partnership Kit <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-brand font-black text-[#002D62] mb-6">Partner Success Stories</h2>
          <div className="w-24 h-2 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="overflow-hidden rounded-[3rem] shadow-2xl bg-slate-50 border border-slate-100">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {centers.map((c, i) => (
                <div key={i} className="min-w-full p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-1/2 aspect-video rounded-[2rem] overflow-hidden shadow-xl shrink-0">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full lg:w-1/2 text-left">
                    <div className="text-sm font-black uppercase text-[#D4AF37] mb-2">{c.franchisee}</div>
                    <div className="text-3xl font-black text-[#002D62] mb-6">{c.name}</div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3"><Zap className="text-[#D4AF37]" size={18} /><span className="font-bold">{c.metric1}</span></div>
                      <div className="flex items-center gap-3"><Target className="text-[#D4AF37]" size={18} /><span className="font-bold">{c.metric2}</span></div>
                    </div>
                    <p className="mt-8 text-slate-600 italic leading-relaxed font-light">"{c.desc}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 bg-white text-[#002D62] p-4 rounded-full shadow-2xl hover:bg-[#D4AF37] transition-all z-20">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 bg-white text-[#002D62] p-4 rounded-full shadow-2xl hover:bg-[#D4AF37] transition-all z-20">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-brand font-black text-[#002D62] mb-16">Franchise Partnership Models</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {franchiseModels.map((model, idx) => (
              <div key={idx} className={`relative p-10 rounded-[3.5rem] transition-all duration-500 bg-white border flex flex-col h-full ${model.highlight ? 'border-[#D4AF37] shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-xl'}`}>
                {model.highlight && <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#002D62] px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Most Recommended</div>}
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6 mx-auto">{model.icon}</div>
                  <h3 className={`text-3xl font-brand font-black mb-4 ${model.highlight ? 'text-[#D4AF37]' : 'text-[#002D62]'}`}>{model.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{model.desc}</p>
                </div>
                <div className="grow space-y-4 mb-10 text-left">
                  {model.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <CheckCircle2 size={18} className={model.highlight ? 'text-[#D4AF37]' : 'text-[#002D62]'} />
                      <span className="text-sm font-bold text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openWhatsApp(`I am interested in the ${model.name} (${model.tier}) model.`)} className={`w-full py-5 rounded-[2rem] font-black text-sm transition-all ${model.highlight ? 'bg-[#002D62] text-white shadow-xl hover:bg-blue-800' : 'bg-slate-50 text-[#002D62] hover:bg-slate-100'}`}>Select Model</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-[#002D62] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-[#D4AF37]/40 rounded-[4rem] rotate-6 transform scale-105 blur-2xl"></div>
             <img src="https://lh3.googleusercontent.com/d/1UykyRhRknVxLRI85iJW1AH6kC2h6yU7h" alt={FOUNDER_NAME} className="relative z-10 rounded-[4rem] shadow-2xl border-2 border-white/10 grayscale-[0.2] notranslate" />
             <div className="absolute -bottom-10 -right-10 bg-white text-[#002D62] p-12 rounded-[3.5rem] shadow-2xl z-20 hidden md:block border-4 border-[#D4AF37]">
                <div className="text-5xl font-black mb-1">16+</div>
                <div className="text-[10px] uppercase font-black text-slate-400">Years Proof</div>
             </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-[#D4AF37] text-[#002D62] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest w-fit mb-8">About the Founder</div>
            <h2 className="text-5xl md:text-6xl font-brand font-black mb-8 leading-tight">Elite Academic System <br/>for Your City</h2>
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-12 italic"><span className="notranslate">{FOUNDER_NAME}</span> <span className="text-xl opacity-60 notranslate">(IIT Guwahati)</span></h3>
            <p className="text-xl text-slate-300 italic mb-12 border-l-8 border-[#D4AF37] pl-10 leading-relaxed font-light text-justify">
              "Our mission is to democratize <span className="notranslate">Kota-grade</span> education. We empower school owners and investors with proven modules and teacher training to produce national toppers locally."
            </p>
            <div className="flex items-center gap-10">
              <div><div className="text-4xl font-black text-[#D4AF37] notranslate">IIT-G</div><div className="text-[10px] uppercase font-black text-slate-400 mt-2">Quality Standards</div></div>
              <div><div className="text-4xl font-black text-[#D4AF37]">5,000+</div><div className="text-[10px] uppercase font-black text-slate-400 mt-2">Results Built</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Faculties Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6 text-[#002D62]">
              <Users size={18} className="text-[#D4AF37]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">The Kota Experts</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-brand font-black text-[#002D62] mb-6">Our Elite Faculty Team</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">"We provide you with the same team that makes Kota the coaching capital of India."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculties.map((f, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden notranslate shrink-0">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">{f.role}</div>
                    <div className="text-xl font-black drop-shadow-md">{f.name}</div>
                  </div>
                </div>
                <div className="p-8 space-y-4 grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-4">
                      <div className="flex items-center gap-2"><BookOpen size={16} className="text-[#D4AF37]" /><span className="font-black text-[#002D62]">{f.subject}</span></div>
                      <div className="bg-[#D4AF37]/10 px-3 py-1 rounded-full text-[10px] font-black text-[#002D62] uppercase tracking-tighter shrink-0">{f.experience}</div>
                    </div>
                    <div className="flex items-start gap-2"><Award size={14} className="text-[#D4AF37] mt-1 shrink-0" /><p className="text-xs font-bold text-slate-600 leading-relaxed italic">{f.qualification}</p></div>
                  </div>
                  <button onClick={() => openWhatsApp(`Tell me more about the academic support from ${f.name}.`)} className="w-full py-3 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 rounded-2xl group-hover:bg-[#002D62] group-hover:text-white transition-all">Academic Info</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16:9 Gallery Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-brand font-black text-[#002D62] mb-4">Campus Experience Gallery</h2>
            <p className="text-slate-500 italic max-w-lg mx-auto">High-tech classrooms and focus-driven infrastructure we provide to our partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white hover:border-[#D4AF37] transition-all duration-500 group">
                <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved Footer with all requested links and address */}
      <footer className="bg-slate-950 text-slate-500 pt-32 pb-12 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-16 border-b border-white/5 pb-20 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={LOGO_URL} className="h-16 mb-8 filter brightness-0 invert notranslate" alt="EduQuantum Logo" />
              <p className="text-xl italic leading-relaxed text-slate-400 max-w-sm mb-10">"Bringing <span className="notranslate">Kota's</span> academic power to every school and city across India."</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={24} />
                  <div className="text-sm text-slate-300 leading-relaxed">
                    <span className="font-black text-white block mb-1">📍 Visit Us:</span>
                    Opposite Ratlami Namkeen, <br/>New Jawahar Nagar, Kota, Rajasthan - 324005
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 border-l-2 border-[#D4AF37] pl-4">Connect Online</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="https://eduquantumkota.com/" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Globe size={18} className="text-[#D4AF37]"/> 🏠 Website</a></li>
                <li><a href="https://share.google/c7M2pm9VhuvBw0t2l" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><MapPin size={18} className="text-[#D4AF37]"/> 📍 Google Profile & Reviews</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=co.april2019.qtm" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Smartphone size={18} className="text-[#D4AF37]"/> 📱 Mobile App</a></li>
                <li><a href="https://www.justdial.com/Kota-Rajasthan/Quantum-Physics-Classes-In-Front-Of-Ratlami-Namkeen-New-Jawahar-Nagar/9999PX744-X744-140731230445-Y5M6_BZDET" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Search size={18} className="text-[#D4AF37]"/> 📞 JustDial Profile</a></li>
                <li><a href="https://www.instagram.com/quantum_kota/" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Instagram size={18} className="text-[#D4AF37]"/> 📸 Instagram (Updates)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 border-l-2 border-[#D4AF37] pl-4">Head Office</h4>
              <div className="space-y-8">
                <div>
                   <button onClick={() => openWhatsApp('Contact via Footer Link')} className="text-2xl font-black text-white hover:text-[#D4AF37] transition notranslate">{PHONE_NUMBER}</button>
                   <p className="text-xs mt-2 uppercase tracking-widest font-black opacity-40">Direct Helpline</p>
                </div>
                <div className="flex gap-4">
                   <a href="https://www.instagram.com/quantum_kota/" target="_blank" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Instagram size={22}/></a>
                   <button onClick={() => openWhatsApp('Email Inquiry via Footer')} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Mail size={22}/></button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 leading-relaxed max-w-2xl mx-auto">
              © 2025 <span className="notranslate">{BRAND_NAME}</span>. PREMIUM ACADEMIC ALLIANCE. YOUR JOURNEY TO ACADEMIC EXCELLENCE STARTS HERE!
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button 
        onClick={() => openWhatsApp(`Hi ${FOUNDER_NICKNAME}, I am interested in starting an EduQuantum center. Please share the details.`)}
        className="fixed bottom-10 right-10 z-[100] bg-green-500 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all group animate-bounce"
      >
        <MessageCircle size={32} fill="white" />
        <span className="absolute right-full mr-6 bg-white text-[#002D62] px-6 py-3 rounded-2xl text-[10px] font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border-2 border-[#D4AF37]">
          Connect with Founder
        </span>
      </button>

      <style>{`
        .goog-te-banner-frame.skiptranslate, .goog-te-balloon-frame, #goog-gt-tt, .goog-te-gadget-icon { display: none !important; }
        body { top: 0px !important; position: static !important; }
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default App;