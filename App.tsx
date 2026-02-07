
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
  Languages
} from 'lucide-react';

// Translation Dictionary for Instant Localized Experience
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
    coachingOwner: "સંસ્થા માલિક",
    labelName: "આખું નામ",
    labelCity: "શહેર",
    labelMobile: "મોબાઈલ નંબર",
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
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState('en');
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', role: 'Investor' });
  const t = translations[lang] || translations['en'];

  const triggerWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const whatsappNum = "919351099947";
    const msg = formData.name 
      ? `Hi, I want to know about the franchise model. My details: Name: ${formData.name}, City: ${formData.city}, Phone: ${formData.phone}, Role: ${formData.role}`
      : `Hi, I want to know about the franchise model.`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`, '_blank');
    
    // Redirect current tab to main site after 2 seconds
    setTimeout(() => {
      window.location.href = "https://eduquantumkota.com";
    }, 2000);
  };

  const featureList = [
    { name: "Brand Recognition & Logo", base: false, advance: true, premium: true },
    { name: "Kota Faculty Recruitment", base: false, advance: true, premium: true },
    { name: "Faculty Replacement Guarantee", base: false, baseText: "✘", advance: false, advanceText: "✘", premium: true },
    { name: "Kota Hard Copy Material", base: true, advance: true, premium: true },
    { name: "Digital Leads Support", base: true, advance: true, premium: true },
    { name: "Personalized Center App", base: true, advance: true, premium: true },
    { name: "Test Paper Generator", base: false, advance: false, premium: true },
    { name: "Social Media Management", base: false, advance: false, premium: true },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-poppins selection:bg-gold/30">
      
      {/* Custom Header with Language Selector */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/15jC1v2sZ7mZcGh-ij7ZPZyDL8Co-zqgX" 
              alt="EduQuantum Logo" 
              className="h-10 md:h-14 object-contain"
            />
          </div>
          
          {/* Custom Logic Switcher */}
          <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-xs font-bold text-navy uppercase tracking-wider">
            <Languages size={14} className="text-gold" />
            <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-gold' : 'text-navy'} hover:text-gold transition`}>English</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLang('hi')} className={`${lang === 'hi' ? 'text-gold' : 'text-navy'} hover:text-gold transition`}>हिन्दी</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLang('gu')} className={`${lang === 'gu' ? 'text-gold' : 'text-navy'} hover:text-gold transition`}>ગુજરાતી</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLang('mr')} className={`${lang === 'mr' ? 'text-gold' : 'text-navy'} hover:text-gold transition`}>मराठी</button>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="tel:+919351099947" className="bg-red-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-red-700 transition shadow-lg animate-pulse hover:animate-none">
              <Phone size={16} />
              <span className="notranslate">+91 9351099947</span>
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
              {t.heroTitle} <span className="text-gold notranslate">{t.heroSpan}</span>
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

      {/* Business Case Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-6">{t.whyTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">{t.whySub}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp />, title: "Low Budget Entry", desc: "No need for massive capital. Start small and scale as the brand grows in your city." },
              { icon: <ShieldCheck />, title: "Recession Proof", desc: "Education is a basic necessity. Parents prioritize learning even during tough times." },
              { icon: <Layout />, title: "SIP Advantage", desc: "Our School Integrated Program allows you to tap into existing students within school premises." },
              { icon: <PieChart />, title: "High Scalability", desc: "With our tech and faculty support, managing 100 or 1000 students is equally simple." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl border-b-4 border-transparent hover:border-gold transition shadow-sm">
                <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-navy">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-gold rounded-3xl"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1UykyRhRknVxLRI85iJW1AH6kC2h6yU7h" 
                alt="Gorkey Godara Sir" 
                className="relative z-10 rounded-3xl shadow-2xl max-w-sm w-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-display font-bold text-navy mb-4">{t.founderTitle}</h2>
            <h3 className="text-2xl font-bold text-gold mb-6">Gorkey Godara (G.G. Sir)</h3>
            <p className="text-lg text-gray-600 mb-8 italic border-l-4 border-gold pl-6">
              "Hamara mission hai Kota ki quality education ko har sheher tak pahunchana. Hum aapko sirf brand nahi, balki result-oriented academic system provide karte hain."
            </p>
            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                <span className="block font-bold text-navy text-xl">16+ Years</span>
                <span className="text-xs text-gray-400">Kota Experience</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                <span className="block font-bold text-navy text-xl">Ex-Senior Faculty</span>
                <span className="text-xs text-gray-400">Top Institutes</span>
              </div>
            </div>
            <button onClick={() => triggerWhatsApp()} className="mt-10 bg-navy text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition flex items-center gap-2">
              <MessageCircle size={18} /> Chat with G.G. Sir
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">{t.tableTitle}</h2>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-2xl border border-gray-100">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-8 font-bold text-lg">Support & Features</th>
                  <th className="p-8 text-center bg-slate-800">Base Model</th>
                  <th className="p-8 text-center bg-slate-900">Advance Model</th>
                  <th className="p-8 text-center bg-gold text-navy relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] py-1 px-3 rounded-full font-black uppercase tracking-widest whitespace-nowrap">Most Recommended</div>
                    Premium Model
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {featureList.map((feature, i) => (
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
            <button onClick={() => triggerWhatsApp()} className="bg-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition shadow-navy/20">Get Specific Quote</button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-8 leading-tight">{t.supportTitle}</h2>
            <div className="space-y-6">
              {[
                { icon: <Rocket />, title: "Academic Support", desc: "Access to 12 years of curated Kota test series and materials." },
                { icon: <Smartphone />, title: "Technology Suite", desc: "Branded apps, ERPs, and automated test generators." },
                { icon: <Crown />, title: "Marketing Kits", desc: "Complete social media and physical marketing templates." }
              ].map((s, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-gold shrink-0">{s.icon}</div>
                  <div>
                    <h5 className="font-bold text-navy">{s.title}</h5>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-gold">
             <h3 className="text-2xl font-bold mb-6 text-gold">Ready to Start?</h3>
             <p className="text-gray-300 mb-8">Join the EduQuantum family and bring Kota’s standard education to your local school premises or independent center.</p>
             <button onClick={() => triggerWhatsApp()} className="w-full bg-gold text-navy font-black py-4 rounded-xl hover:bg-white transition flex items-center justify-center gap-2">
               WHATSAPP NOW <ArrowRight size={18} />
             </button>
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
            <p className="text-gray-400 text-sm">Empowering education entrepreneurs since 2012. Kota's legacy, your city's growth.</p>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-6 uppercase">Corporate Office</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2"><MapPin size={16} className="text-gold shrink-0 mt-1" /> Jawahar Nagar, District Centre, Kota, Rajasthan</p>
              <p className="flex items-center gap-2 font-bold text-white"><Phone size={16} className="text-gold" /> +91 9351099947</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-gold" /> franchise@eduquantum.in</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-6 uppercase">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><button onClick={() => triggerWhatsApp()} className="hover:text-gold">Get Franchise Brochure</button></li>
              <li><a href="https://eduquantumkota.com" className="hover:text-gold">Main Website</a></li>
              <li><a href="tel:+919351099947" className="hover:text-gold">Call Helpline</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          &copy; 2025 EduQuantum Kota | Innovative Learning Solutions Pvt. Ltd.
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
