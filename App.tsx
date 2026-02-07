
import React, { useState } from 'react';
import { 
  Check, 
  Phone, 
  ArrowRight, 
  Trophy, 
  Star, 
  Rocket, 
  ShieldCheck, 
  MapPin, 
  Mail,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  Smartphone,
  Crown,
  Layout,
  PieChart,
  MessageCircle,
  Languages,
  Quote,
  TrendingDown,
  UserCheck,
  Award,
  Users,
  Coins,
  Globe
} from 'lucide-react';

// Translation Dictionary for localized Hero components
const translations: Record<string, any> = {
  en: {
    heroTag: "Establish Kota Legacy in Your City",
    heroTitle: "Now Every City Will Become",
    heroSpan: "Kota!",
    heroSub: "Join India's most scalable educational network. Transform your School or Coaching with Kota's Premium Results Ecosystem.",
    ctaBrochure: "Get Brochure",
    ctaWhatsapp: "WhatsApp Now",
    formTitle: "Partnership Enquiry",
    formSub: "Fill details to get detailed quote on WhatsApp",
    formSubmit: "SUBMIT & WHATSAPP NOW",
    whyTitle: "Why Start Coaching Business?",
    whySub: "Education is the only recession-proof industry in India. EduQuantum provides a low-budget entry with high-standard academic deliverables.",
    founderTitle: "Meet the Founder",
    tableTitle: "Choose Your Package",
    supportTitle: "Our Support, Your Success",
    contactUs: "Chat with Us",
    investor: "Individual Investor",
    schoolOwner: "School Owner",
    coachingOwner: "Institute Owner",
    labelName: "Full Name",
    labelCity: "City",
    labelMobile: "Mobile Number",
    successTitle: "Proven Success Across India",
  },
  hi: {
    heroTag: "अपने शहर में कोटा की विरासत स्थापित करें",
    heroTitle: "अब हर शहर बनेगा",
    heroSpan: "कोटा!",
    heroSub: "भारत के सबसे स्केलेबल शैक्षिक नेटवर्क से जुड़ें। कोटा के प्रीमियम परिणाम इकोसिस्टम के साथ अपने स्कूल या कोचिंग को बदलें।",
    ctaBrochure: "ब्रोशर प्राप्त करें",
    ctaWhatsapp: "व्हाट्सएप अभी",
    formTitle: "साझेदारी पूछताछ",
    formSub: "व्हाट्सएप पर विस्तृत उद्धरण प्राप्त करने के लिए विवरण भरें",
    formSubmit: "सबमिट करें और व्हाट्सएप करें",
    whyTitle: "कोचिंग बिजनेस क्यों शुरू करें?",
    whySub: "शिक्षा भारत में एकमात्र मंदी-मुक्त उद्योग है। EduQuantum उच्च-मानक शैक्षणिक परिणामों के साथ कम बजट में प्रवेश प्रदान करता है।",
    founderTitle: "संस्थापक से मिलें",
    tableTitle: "अपना पैकेज चुनें",
    supportTitle: "हमारा समर्थन, आपकी सफलता",
    contactUs: "हमसे चैट करें",
    investor: "व्यक्तिगत निवेशक",
    schoolOwner: "स्कूल मालिक",
    coachingOwner: "संस्थान मालिक",
    labelName: "पूरा नाम",
    labelCity: "शहर",
    labelMobile: "मोबाइल नंबर",
    successTitle: "संपूर्ण भारत में प्रमाणित सफलता",
  },
  gu: {
    heroTag: "તમારા શહેરમાં કોટાનો વારસો સ્થાપિત કરો",
    heroTitle: "હવે દરેક શહેર બનશે",
    heroSpan: "કોટા!",
    heroSub: "ભારતના સૌથી સ્કેલેબલ શૈક્ષણિક નેટવર્ક સાથે જોડાઓ. કોટાના પ્રીમિયમ પરિણામ ઇકોસિસ્ટમ સાથે તમારી શાળા અથવા કોચિંગને બદલો.",
    ctaBrochure: "બ્રોશર મેળવો",
    ctaWhatsapp: "વોટ્સએપ અત્યારે",
    formTitle: "ભાગીદારી પૂછપરછ",
    formSub: "વોટ્સએપ પર વિગતવાર ભાવ મેળવવા માટે વિગતો ભરો",
    formSubmit: "સબમિટ કરો અને વોટ્સએપ કરો",
    whyTitle: "કોચિંગ બિઝનેસ કેમ શરૂ કરવો?",
    whySub: "શિક્ષણ એ ભારતમાં એકમાત્ર મંદી-મુક્ત ઉદ્યોગ છે. EduQuantum ઉચ્ચ-માનક શૈક્ષણિક પરિણામો સાથે ઓછા બજેટમાં પ્રવેશ આપે છે.",
    founderTitle: "સ્થાપકને મળો",
    tableTitle: "તમારું પેકેજ પસંદ કરો",
    supportTitle: "અમારો સપોર્ટ, તમારી સફળતા",
    contactUs: "અમારી સાથે ચેટ કરો",
    investor: "વ્યક્તિગત રોકાણકાર",
    schoolOwner: "શાળા માલિક",
    coachingOwner: "સંસ્થાન માલિક",
    labelName: "આખું નામ",
    labelCity: "શહેર",
    labelMobile: "મોબાઈલ નંબર",
    successTitle: "સમગ્ર ભારતમાં સફળતા સાબિત થઈ",
  },
  mr: {
    heroTag: "तुमच्या शहरात कोटाचा वारसा प्रस्थापित करा",
    heroTitle: "आता प्रत्येक शहर होईल",
    heroSpan: "'कोटा'!",
    heroSub: "भारतातील सर्वात वेगाने वाढणाऱ्या शैक्षणिक नेटवर्कमध्ये सामील व्हा. कोटाच्या प्रीमियम रिझल्ट इकोसिस्टमसह तुमची शाळा किंवा कोचिंग बदला.",
    ctaBrochure: "ब्रोशर मिळवा",
    ctaWhatsapp: "व्हॉट्सॲपवर माहिती मिळवा",
    formTitle: "फ्रँचायझीसाठी चौकशी करा",
    formSub: "व्हॉट्सॲपवर तपशीलवार कोट मिळविण्यासाठी तपशील भरा",
    formSubmit: "सबमिट करा आणि व्हॉट्सॲप करा",
    whyTitle: "कोचिंग व्यवसाय का सुरू करावा?",
    whySub: "शिक्षण हा भारतातील एकमेव मंदी-मुक्त उद्योग आहे. EduQuantum उच्च-दर्जाच्या शैक्षणिक परिणामांसह कमी बजेटमध्ये प्रवेश प्रदान करते.",
    founderTitle: "संस्थापकांना भेटा",
    tableTitle: "तुमचे पॅकेज निवडा",
    supportTitle: "आमचा पाठिंबा, तुमचे यश",
    contactUs: "आमच्याशी गप्पा मारा",
    investor: "वैयक्तिक गुंतवणूकदार",
    schoolOwner: "शाळा मालक",
    coachingOwner: "संस्था मालक",
    labelName: "पूर्ण नाव",
    labelCity: "शहर",
    labelMobile: "मोबाईल नंबर",
    successTitle: "संपूर्ण भारतात यशस्वी कथा",
  }
};

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "ગુજરાતી", code: "gu" },
  { name: "मराठी", code: "mr" },
  { name: "தமிழ்", code: "ta" },
  { name: "తెలుగు", code: "te" },
  { name: "ಕನ್ನಡ", code: "kn" },
  { name: "മലയാളം", code: "ml" }
];

const successStories = [
  {
    name: "Udgir Center",
    location: "Maharashtra",
    featured: true,
    growth: "25 to 80+ Students",
    revenue: "80-90 Lakhs Business",
    profit: "30-40 Lakhs Annual Profit",
    testimonial: "Joining Quantum Kota was a game-changer. Our student count tripled within a year, and the profit margins are exceptional due to their streamlined system.",
    tag: "Highest Growth Center"
  },
  {
    name: "Amravati Center",
    location: "Maharashtra",
    growth: "Rapid Enrollment",
    revenue: "Leading Institute in District",
    testimonial: "The academic material and branding from Kota helped us dominate the local market. The parent trust in Kota brand is phenomenal.",
    tag: "High Parent Trust"
  },
  {
    name: "Ashok Academy",
    location: "Mumbai",
    growth: "Premium SIP Model",
    revenue: "High-Value Admissions",
    testimonial: "Integrating the Quantum Method into our academy gave us an edge in the competitive Mumbai market. Exceptional faculty training support.",
    tag: "Metro Success"
  }
];

const otherLocations = ["Tirupati", "Kinwat", "Nandigram"];

const featureList = [
  { name: "Kota Curriculum & Study Material", base: true, advance: true, premium: true },
  { name: "Faculty Recruitment & Training", base: true, advance: true, premium: true },
  { name: "Online Testing Platform (LMS)", base: true, advance: true, premium: true },
  { name: "Mobile App for Parents/Students", base: true, advance: true, premium: true },
  { name: "Local Marketing Strategy", base: false, baseText: "Basic", advance: true, premium: true },
  { name: "Faculty Performance Monitoring", base: false, advance: true, premium: true },
  { name: "Hybrid Classroom Integration", base: false, advance: true, premium: true },
  { name: "School Integrated Program (SIP)", base: false, advance: false, premium: true },
  { name: "Dedicated Academic Mentor", base: false, advance: false, premium: true },
  { name: "Doubt Counter Support from Kota", base: false, advance: false, premium: true }
];

const App: React.FC = () => {
  const [lang, setLang] = useState('en');
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', role: 'Investor' });
  const t = translations[lang] || translations['en'];

  const triggerTranslation = (langCode: string) => {
    // Dictionary fallback for instant localized UI elements
    if (translations[langCode]) {
      setLang(langCode);
    }
    // Google engine trigger for the whole page
    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event('change'));
    }
  };

  const triggerWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const whatsappNum = "919351099947";
    const msg = formData.name 
      ? `Hi, I want to know about the franchise model. My details: Name: ${formData.name}, City: ${formData.city}, Phone: ${formData.phone}, Role: ${formData.role}`
      : `Hi, I want to know about the franchise model.`;
    
    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`, '_blank');
    
    setTimeout(() => {
      window.location.href = "https://eduquantumkota.com";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-poppins selection:bg-gold/30">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/15jC1v2sZ7mZcGh-ij7ZPZyDL8Co-zqgX" 
              alt="EduQuantum Logo" 
              className="h-10 md:h-14 object-contain"
            />
          </div>
          
          {/* Custom Language Selector - APPENDED South Indian Languages */}
          <div className="flex items-center flex-wrap gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-navy uppercase tracking-wider max-w-lg">
            <Languages size={14} className="text-gold shrink-0" />
            {languages.map((l, idx) => (
              <React.Fragment key={l.code}>
                <button 
                  onClick={() => triggerTranslation(l.code)} 
                  className={`${lang === l.code ? 'text-gold' : 'text-navy'} hover:text-gold transition whitespace-nowrap`}
                >
                  {l.name}
                </button>
                {idx !== languages.length - 1 && <span className="text-gray-200">|</span>}
              </React.Fragment>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <a href="tel:+919351099947" className="bg-red-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-red-700 transition shadow-lg animate-pulse hover:animate-none">
              <Phone size={16} />
              <span className="notranslate font-bold">+91 9351099947</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-gradient text-white py-12 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-gold text-navy px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
              {t.heroTag}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              {t.heroTitle} <span className="text-gold notranslate">Kota!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => triggerWhatsApp()} className="bg-gold text-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition flex items-center justify-center gap-2 shadow-xl">
                {t.ctaBrochure} <ArrowRight size={18} />
              </button>
              <button onClick={() => triggerWhatsApp()} className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-xl">
                <MessageCircle size={18} /> {t.ctaWhatsapp}
              </button>
            </div>
          </div>

          {/* Lead Form */}
          <div id="lead-form" className="bg-white rounded-3xl p-8 shadow-2xl text-gray-800 border-t-8 border-gold lg:max-w-md ml-auto">
            <h3 className="text-2xl font-bold mb-2 text-navy">{t.formTitle}</h3>
            <p className="text-gray-500 mb-6 text-sm">{t.formSub}</p>
            <form onSubmit={triggerWhatsApp} className="space-y-4">
              <input 
                type="text" placeholder={t.labelName}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy outline-none" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} required 
              />
              <input 
                type="text" placeholder={t.labelCity}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy outline-none" 
                onChange={(e) => setFormData({...formData, city: e.target.value})} required 
              />
              <input 
                type="tel" placeholder={t.labelMobile}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy outline-none" 
                onChange={(e) => setFormData({...formData, phone: e.target.value})} required 
              />
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-navy outline-none"
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="Investor">{t.investor}</option>
                <option value="School Owner">{t.schoolOwner}</option>
                <option value="Coaching Owner">{t.coachingOwner}</option>
              </select>
              <button className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl">
                <span>{t.formSubmit}</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Real-World Success Stories Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">{t.successTitle}</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto italic">Verified growth metrics from our network. See how partners are scaling with the <span className="notranslate font-bold text-navy">EduQuantum</span> method.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className={`rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col group h-full shadow-lg ${story.featured ? 'bg-navy text-white border-gold border-2' : 'bg-white text-slate-800 border-gray-100'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${story.featured ? 'bg-gold text-navy' : 'bg-navy/10 text-navy'}`}>
                    {story.tag}
                  </div>
                  <Trophy size={24} className={story.featured ? 'text-gold' : 'text-gray-300'} />
                </div>
                
                <h4 className={`text-2xl font-bold mb-1 ${story.featured ? 'text-white' : 'text-navy'}`}>{story.name}</h4>
                <div className="flex items-center gap-2 mb-8 opacity-70">
                  <MapPin size={14} />
                  <span className="text-xs font-semibold uppercase">{story.location}</span>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    <TrendingUp size={20} className="text-green-500" />
                    <div>
                      <div className={`text-[10px] uppercase font-bold opacity-60`}>Student Growth</div>
                      <div className="font-bold text-sm">{story.growth}</div>
                    </div>
                  </div>
                  {story.revenue && (
                    <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                      <Coins size={20} className="text-gold" />
                      <div>
                        <div className={`text-[10px] uppercase font-bold opacity-60`}>Business Scale</div>
                        <div className="font-bold text-sm">{story.revenue}</div>
                      </div>
                    </div>
                  )}
                  {story.profit && (
                    <div className="flex items-center gap-4 p-3 rounded-2xl bg-green-500/10 border border-green-500/20 shadow-inner">
                      <Award size={20} className="text-green-400" />
                      <div>
                        <div className={`text-[10px] uppercase font-bold text-green-400 opacity-80`}>Center Profit</div>
                        <div className="font-bold text-sm text-green-400">{story.profit}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative pt-6 border-t border-white/10 mt-auto">
                  <Quote className={`absolute -top-3 right-0 opacity-20 w-10 h-10 ${story.featured ? 'text-gold' : 'text-navy'}`} />
                  <p className={`text-sm leading-relaxed italic ${story.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                    "{story.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Location Presence Row */}
          <div className="mt-16 bg-navy rounded-3xl p-8 text-white text-center shadow-xl border-b-4 border-gold">
            <h5 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center justify-center gap-3">
              <Globe size={16} /> Expanding Fast Across Regions
            </h5>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80">
              {otherLocations.map(loc => (
                <div key={loc} className="flex items-center gap-2 group cursor-default">
                  <CheckCircle2 size={16} className="text-green-400 group-hover:scale-125 transition" />
                  <span className="font-bold text-lg">{loc}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full border border-white/10 italic text-sm">
                + New centers in pipeline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-gold rounded-3xl"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1UykyRhRknVxLRI85iJW1AH6kC2h6yU7h" 
                alt="Founder" 
                className="relative z-10 rounded-3xl shadow-2xl max-w-sm w-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-display font-bold text-navy mb-4">{t.founderTitle}</h2>
            <h3 className="text-2xl font-bold text-gold mb-6">
              <span className="notranslate">Gorkey Godara (G.G. Sir)</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 italic border-l-4 border-gold pl-6 leading-relaxed">
              "Hamara mission hai <span className="notranslate">Kota</span> ki quality education ko har sheher tak pahunchana. Hum aapko sirf brand nahi, balki result-oriented academic system provide karte hain."
            </p>
            <div className="flex gap-4">
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                <span className="block font-bold text-navy text-xl">16+ Years</span>
                <span className="text-xs text-gray-400">Kota Experience</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                <span className="block font-bold text-navy text-xl font-bold">Ex-Senior Faculty</span>
                <span className="text-xs text-gray-400">Top Institutes</span>
              </div>
            </div>
            <button onClick={() => triggerWhatsApp()} className="mt-10 bg-navy text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition flex items-center gap-2">
              <MessageCircle size={18} /> Chat with <span className="notranslate">G.G. Sir</span>
            </button>
          </div>
        </div>
      </section>

      {/* Support System Table */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">{t.tableTitle}</h2>
            <p className="text-gray-500">Pick the model that fits your city and budget.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-gray-100 bg-white">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-8 font-bold text-lg">Support & Features</th>
                  <th className="p-8 text-center bg-slate-800">Base Model</th>
                  <th className="p-8 text-center bg-slate-900">Advance Model</th>
                  <th className="p-8 text-center bg-gold text-navy relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] py-1 px-3 rounded-full font-black uppercase tracking-widest whitespace-nowrap">Recommended</div>
                    Premium Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Fixed TypeScript error by casting feature to any to allow optional property access */}
                {featureList.map((feature: any, i) => (
                  <tr key={feature.name} className="hover:bg-gray-50 transition">
                    <td className="p-6 font-semibold text-navy">{feature.name}</td>
                    <td className="p-6 text-center">{feature.base ? <Check className="mx-auto text-green-600" /> : <span className="text-red-400 font-bold">{feature.baseText || "✘"}</span>}</td>
                    <td className="p-6 text-center">{feature.advance ? <Check className="mx-auto text-green-600" /> : <span className="text-red-400 font-bold">{feature.advanceText || "✘"}</span>}</td>
                    <td className="p-6 text-center bg-gold/5">{feature.premium ? <Check className="mx-auto text-navy font-bold" /> : "✘"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => triggerWhatsApp()} className="bg-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition shadow-navy/20">Ask for Full Quotation</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001a38] text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <div className="bg-white p-2 rounded-lg inline-block mb-6">
              <img src="https://lh3.googleusercontent.com/d/15jC1v2sZ7mZcGh-ij7ZPZyDL8Co-zqgX" alt="Logo" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm">Empowering education entrepreneurs since 2012. <span className="notranslate">Kota's</span> legacy, your city's growth.</p>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-6 uppercase tracking-widest text-xs font-bold"><span className="notranslate">Kota</span> Corporate Office</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2"><MapPin size={16} className="text-gold shrink-0 mt-1" /> Jawahar Nagar, District Centre, <span className="notranslate">Kota</span>, Rajasthan</p>
              <p className="flex items-center gap-2 font-bold text-white"><Phone size={16} className="text-gold" /> <span className="notranslate font-bold">+91 9351099947</span></p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-gold" /> franchise@eduquantum.in</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-6 uppercase tracking-widest text-xs font-bold">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><button onClick={() => triggerWhatsApp()} className="hover:text-gold">Get Franchise Brochure</button></li>
              <li><a href="https://eduquantumkota.com" className="hover:text-gold">Main Website</a></li>
              <li><a href="tel:+919351099947" className="hover:text-gold">Call Helpline</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          &copy; 2025 <span className="notranslate">EduQuantum Kota</span> | Innovative Learning Solutions Pvt. Ltd.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => triggerWhatsApp()}
        className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle size={24} className="group-hover:rotate-12 transition" />
        <span className="font-bold text-sm hidden md:block">{t.contactUs}</span>
      </button>

    </div>
  );
};

export default App;
