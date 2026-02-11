import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Trophy, 
  MapPin, 
  CheckCircle2, 
  XCircle,
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
  Map,
  X
} from 'lucide-react';

// Professional Translation Dictionary
const TRANSLATIONS: Record<string, any> = {
  en: {
    nav_announcement: "India's Most Result-Oriented Team",
    nav_estd: "ESTD 2012",
    nav_apply: "Apply Now",
    hero_badge: "Academic Excellence Partner 2025",
    hero_title_p1: "Launch Your ",
    hero_title_p2: " Franchise Center",
    hero_desc: "Empower your city with Kota's top-tier coaching system. Get expert materials, modules, and training led by G.G. Sir.",
    stat_exp: "Years Exp",
    stat_results: "Top Results",
    stat_pedigree: "Founder Pedigree",
    stat_roi: "Growth ROI",
    form_title: "Enquiry Form",
    form_subtitle: "Get complete business plan on WhatsApp.",
    form_placeholder_name: "Full Name",
    form_placeholder_city: "City",
    form_placeholder_phone: "WhatsApp Number",
    form_role_school: "School Owner",
    form_role_coaching: "Coaching Owner",
    form_role_investor: "Investor",
    form_role_teacher: "Teacher",
    form_submit: "Get Partnership Kit",
    success_title: "Partner Success Stories",
    models_title: "Franchise Partnership Details",
    models_subtitle: "Compare our School Integrated Program (SIP) Models",
    model_recommended: "Most Popular",
    model_base_name: "Base Model",
    model_advance_name: "Advance Model",
    model_premium_name: "Premium Model",
    feat_brand: "Brand Recognition",
    feat_fac_rec: "Faculty Recruitment",
    feat_fac_rep: "Faculty Replacement",
    feat_dmg_ctrl: "Damage Control",
    feat_app: "Customized Centre App",
    feat_test_gen: "Test Paper Generator",
    feat_lib: "Digital Library",
    feat_study_mat: "Hard Copy Study Material",
    feat_merch: "Bags + T-Shirt",
    feat_orient: "Live Orientation Session",
    feat_fac_train: "Online Faculty Training",
    feat_social: "Manage Social Media",
    feat_leads: "First 50 Leads (Digital Ads)",
    feat_promo: "Printable Promo Design (Soft Copy)",
    founder_badge: "About the Founder",
    founder_title: "Elite Academic System for Your City",
    founder_quote: "Our mission is to democratize Kota-grade education. We empower school owners and investors with proven modules and teacher training to produce national toppers locally.",
    faculty_badge: "The Kota Experts",
    faculty_title: "Our Elite Faculty Team",
    faculty_desc: "We provide you with the same team that makes Kota the coaching capital of India.",
    gallery_title: "Campus Experience Gallery",
    gallery_desc: "High-tech classrooms and focus-driven infrastructure we provide to our partners.",
    footer_quote: "Bringing Kota's academic power to every school and city across India.",
    footer_visit: "Visit Us",
    footer_connect: "Connect Online",
    footer_helpline: "Direct Helpline",
    footer_copyright: "PREMIUM ACADEMIC ALLIANCE. YOUR JOURNEY TO ACADEMIC EXCELLENCE STARTS HERE!",
    cta_floating: "Speak with Head Office",
    success_udgir: "Udgir, Maharashtra",
    success_amravati: "Amravati, Maharashtra",
    metric_students: "25 to 80+ Students",
    metric_profit: "30-40 Lakhs Profit",
    metric_hub: "Elite Learning Hub",
    metric_market: "Dominant Market Share",
    success_desc_udgir: "Achieved massive student growth and financial success in just one session.",
    success_desc_amravati: "Unprecedented launch success fueled by brand trust in Amravati.",
    exp_text: "Years"
  },
  hi: {
    nav_announcement: "भारत की सबसे परिणाम-केंद्रित टीम",
    nav_estd: "2012 से स्थापित",
    nav_apply: "अभी आवेदन करें",
    hero_badge: "अकादमिक उत्कृष्टता पार्टनर 2025",
    hero_title_p1: "अपना ",
    hero_title_p2: " फ्रैंचाइज़ी सेंटर शुरू करें",
    hero_desc: "कोटा के टॉप-टियर कोचिंग सिस्टम के साथ अपने शहर को सशक्त बनाएं। जी.जी. सर के नेतृत्व में विशेषज्ञ सामग्री, मॉड्यूल और प्रशिक्षण प्राप्त करें।",
    stat_exp: "वर्षों का अनुभव",
    stat_results: "टॉप परिणाम",
    stat_pedigree: "संस्थापक वंशावली",
    stat_roi: "ग्रोथ ROI",
    form_title: "पूछताछ फॉर्म",
    form_subtitle: "WhatsApp पर पूरा बिजनेस प्लान प्राप्त करें।",
    form_placeholder_name: "पूरा नाम",
    form_placeholder_city: "शहर",
    form_placeholder_phone: "WhatsApp नंबर",
    form_role_school: "स्कूल मालिक",
    form_role_coaching: "कोचिंग मालिक",
    form_role_investor: "निवेशक",
    form_role_teacher: "शिक्षक",
    form_submit: "पार्टनरशिप किट प्राप्त करें",
    success_title: "पार्टनर की सफलता की कहानियां",
    models_title: "फ्रैंचाइज़ी पार्टनरशिप विवरण",
    models_subtitle: "हमारे स्कूल इंटीग्रेटेड प्रोग्राम (SIP) मॉडल्स की तुलना करें",
    model_recommended: "सबसे लोकप्रिय",
    model_base_name: "बेस मॉडल",
    model_advance_name: "एडवांस मॉडल",
    model_premium_name: "प्रीमियम मॉडल",
    feat_brand: "ब्रांड पहचान",
    feat_fac_rec: "फैकल्टी भर्ती",
    feat_fac_rep: "फैकल्टी रिप्लेसमेंट",
    feat_dmg_ctrl: "डैमेज कंट्रोल",
    feat_app: "कस्टमाइज्ड सेंटर ऐप",
    feat_test_gen: "टेस्ट पेपर जनरेटर",
    feat_lib: "डिजिटल लाइब्रेरी",
    feat_study_mat: "हार्ड कॉपी स्टडी मटेरियल",
    feat_merch: "बैग्स + टी-शर्ट",
    feat_orient: "लाइव ओरिएंटेशन सेशन",
    feat_fac_train: "ऑनलाइन फैकल्टी ट्रेनिंग",
    feat_social: "सोशल मीडिया मैनेजमेंट",
    feat_leads: "पहले 50 लीड्स (डिजिटल विज्ञापन)",
    feat_promo: "प्रोमो डिज़ाइन (सॉफ्ट कॉपी)",
    founder_badge: "संस्थापक के बारे में",
    founder_title: "आपके शहर के लिए विशिष्ट अकादमिक प्रणाली",
    founder_quote: "हमारा मिशन कोटा-ग्रेड शिक्षा का लोकतंत्रीकरण करना है। हम स्कूल मालिकों और निवेशकों को प्रमाणित मॉड्यूल और शिक्षक प्रशिक्षण के साथ सशक्त बनाते हैं ताकि स्थानीय स्तर पर नेशनल टॉपर्स तैयार किए जा सकें।",
    faculty_badge: "कोटा एक्सपर्ट्स",
    faculty_title: "हमारी विशिष्ट फैकल्टी टीम",
    faculty_desc: "हम आपको वही टीम प्रदान करते हैं जो कोटा को भारत की कोचिंग राजधानी बनाती है।",
    gallery_title: "कैंपस अनुभव गैलरी",
    gallery_desc: "उच्च तकनीक वाली कक्षाएं और फोकस-संचालित इंफ्रास्ट्रक्चर जो हम अपने पार्टनर्स को प्रदान करते हैं।",
    footer_quote: "कोटा की अकादमिक शक्ति को भारत के हर स्कूल और शहर तक पहुँचाना।",
    footer_visit: "हमसे मिलें",
    footer_connect: "ऑनलाइन जुड़ें",
    footer_helpline: "डायरेक्ट हेल्पलाइन",
    footer_copyright: "प्रीमियम अकादमिक गठबंधन। अकादमिक उत्कृष्टता की आपकी यात्रा यहीं से शुरू होती है!",
    cta_floating: "हेड ऑफिस से बात करें",
    success_udgir: "उदगीर, महाराष्ट्र",
    success_amravati: "अमरावती, महाराष्ट्र",
    metric_students: "25 से 80+ छात्र",
    metric_profit: "30-40 लाख मुनाफा",
    metric_hub: "उत्कृष्ट शिक्षण केंद्र",
    metric_market: "प्रभावी मार्केट शेयर",
    success_desc_udgir: "सिर्फ एक सेशन में भारी छात्र वृद्धि और वित्तीय सफलता हासिल की।",
    success_desc_amravati: "अमरावती में ब्रांड के भरोसे के साथ अभूतपूर्व लॉन्च सफलता।",
    exp_text: "वर्ष"
  },
  mr: {
    nav_announcement: "भारतातील सर्वात निकाल-केंद्रित टीम",
    nav_estd: "२०१२ पासून",
    nav_apply: "आता अर्ज करा",
    hero_badge: "अकादमिक उत्कृष्टता भागीदार २०२५",
    hero_title_p1: "तुमचे ",
    hero_title_p2: " फ्रँचायझी सेंटर सुरू करा",
    hero_desc: "कोटाच्या टॉप-टियर कोचिंग सिस्टमसह तुमच्या शहराला सक्षम करा. जी.जी. सर यांच्या मार्गदर्शनाखाली तज्ञ साहित्य, मॉड्युल्स आणि प्रशिक्षण मिळवा.",
    stat_exp: "वर्षांचा अनुभव",
    stat_results: "टॉप निकाल",
    stat_pedigree: "संस्थापक वंशावळ",
    stat_roi: "ग्रोथ ROI",
    form_title: "चौकशी फॉर्म",
    form_subtitle: "WhatsApp वर संपूर्ण बिझनेस प्लॅन मिळवा.",
    form_placeholder_name: "पूर्ण नाव",
    form_placeholder_city: "शहर",
    form_placeholder_phone: "WhatsApp नंबर",
    form_role_school: "शाळा मालक",
    form_role_coaching: "कोचिंग मालक",
    form_role_investor: "गुंतवणूकदार",
    form_role_teacher: "शिक्षक",
    form_submit: "पार्टनरशिप किट मिळवा",
    success_title: "भागीदारांच्या यशोगाथा",
    models_title: "फ्रँचायझी पार्टनरशिप तपशील",
    models_subtitle: "आमच्या स्कूल इंटीग्रेटेड प्रोग्राम (SIP) मॉडेल्सची तुलना करा",
    model_recommended: "सर्वात लोकप्रिय",
    model_base_name: "बेस मॉडेल",
    model_advance_name: "एडवांस मॉडेल",
    model_premium_name: "प्रीमियम मॉडेल",
    feat_brand: "ब्रँड ओळख",
    feat_fac_rec: "फॅकल्टी भरती",
    feat_fac_rep: "फॅकल्टी रिप्लेसमेंट",
    feat_dmg_ctrl: "डॅमेज कंट्रोल",
    feat_app: "कस्टमाइज्ड सेंटर अॅप",
    feat_test_gen: "टेस्ट पेपर जनरेटर",
    feat_lib: "डिजिटल लायब्ररी",
    feat_study_mat: "हार्ड कॉपी स्टडी मटेरियल",
    feat_merch: "बॅग + टी-शर्ट",
    feat_orient: "लाईव्ह ओरिएंटेशन सेशन",
    feat_fac_train: "ऑनलाइन फॅकल्टी ट्रेनिंग",
    feat_social: "सोशल मीडिया मॅनेजमेंट",
    feat_leads: "पहिले ५० लीड्स (डिजिटल जाहिरात)",
    feat_promo: "प्रोमो डिझाइन (सॉफ्ट कॉपी)",
    founder_badge: "संस्थापकांबद्दल",
    founder_title: "तुमच्या शहरासाठी उच्चभ्रू शैक्षणिक प्रणाली",
    founder_quote: "कोटा-ग्रेड शिक्षणाचे लोकशाहीकरण करणे हे आमचे ध्येय आहे. आम्ही शाळा मालक आणि गुंतवणूकदारांना स्थानिक पातळीवर राष्ट्रीय टॉपर्स तयार करण्यासाठी प्रमाणित मॉड्युल्स आणि शिक्षक प्रशिक्षणाद्वारे सक्षम करतो.",
    faculty_badge: "कोटा एक्सपर्ट्स",
    faculty_title: "आमची एलिट फॅकल्टी टीम",
    faculty_desc: "आमी तुम्हाला तीच टीम देतो जी कोटाला भारताची कोचिंग राजधानी बनवते.",
    gallery_title: "कॅम्पस अनुभव गॅलरी",
    gallery_desc: "हाय-टेक क्लासरूम आणि फोकस-आधारित इन्फ्रास्ट्रक्चर जे आम्ही आमच्या भागीदारांना देतो.",
    footer_quote: "कोटाची शैक्षणिक शक्ती भारतातील प्रत्येक शाळा आणि शहरापर्यंत पोहोचवत आहोत.",
    footer_visit: "आम्हाला भेट द्या",
    footer_connect: "ऑनलाइन कनेक्ट व्हा",
    footer_helpline: "थेट हेल्पलाइन",
    footer_copyright: "प्रीमियम शैक्षणिक युती. तुमच्या शैक्षणिक उत्कृष्टतेचा प्रवास येथून सुरू होतो!",
    cta_floating: "हेड ऑफिसशी बोला",
    success_udgir: "उदगीर, महाराष्ट्र",
    success_amravati: "अमरावती, महाराष्ट्र",
    metric_students: "२५ ते ८०+ विद्यार्थी",
    metric_profit: "३०-४० लाख नफा",
    metric_hub: "उत्कृष्ट शिक्षण केंद्र",
    metric_market: "प्रभावी मार्केट शेअर",
    success_desc_udgir: "केवळ एका सत्रात प्रचंड विद्यार्थी वाढ आणि आर्थिक यश मिळवले.",
    success_desc_amravati: "अमरावतीमधील ब्रँडवरील विश्वासामुळे अभूतपूर्व लॉन्च यश.",
    exp_text: "वर्षे"
  },
  gu: {
    nav_announcement: "ભારતની સૌથી પરિણામ-કેન્દ્રિત ટીમ",
    nav_estd: "2012 થી",
    nav_apply: "હમણાં અરજી કરો",
    hero_badge: "એકેડેમિક એક્સેલન્સ પાર્ટનર 2025",
    hero_title_p1: "તમારું ",
    hero_title_p2: " ફ્રેન્ચાઇઝી સેન્ટર શરૂ કરો",
    hero_desc: "કોટાની ટોપ-ટાયર કોચિંગ સિસ્ટમ સાથે તમારા શહેરને સશક્ત બનાવો. જી.જી. સરના નેતૃત્વ હેઠળ નિષ્ણાત સામગ્રી, મોડ્યુલ્સ અને તાલીમ મેળવો.",
    stat_exp: "વર્ષોનો અનુભવ",
    stat_results: "ટોચના પરિણામો",
    stat_pedigree: "સ્થાપક વંશાવળી",
    stat_roi: "ગ્રોથ ROI",
    form_title: "પૂછપરછ ફોર્મ",
    form_subtitle: "WhatsApp પર સંપૂર્ણ બિઝનેસ પ્લાન મેળવો.",
    form_placeholder_name: "પૂરું નામ",
    form_placeholder_city: "શહેર",
    form_placeholder_phone: "WhatsApp નંબર",
    form_role_school: "શાળાના માલિક",
    form_role_coaching: "કોચિંગ માલિક",
    form_role_investor: "રોકાણકાર",
    form_role_teacher: "શિક્ષક",
    form_submit: "પાર્ટનરશિપ કીટ મેળવો",
    success_title: "ભાગીદારોની સફળતાની વાર્તાઓ",
    models_title: "ફ્રેન્ચાઇઝી પાર્ટનરશિપ વિગતો",
    models_subtitle: "અમારા સ્કૂલ ઇન્ટિગ્રેટેડ પ્રોગ્રામ (SIP) મોડલ્સની સરખામણી કરો",
    model_recommended: "સૌથી લોકપ્રિય",
    model_base_name: "બેઝ મોડલ",
    model_advance_name: "એડવાન્સ મોડલ",
    model_premium_name: "પ્રીમિયમ મોડલ",
    feat_brand: "બ્રાન્ડ ઓળખ",
    feat_fac_rec: "ફેકલ્ટી ભરતી",
    feat_fac_rep: "ફેકલ્ટી રિપ્લેસમેન્ટ",
    feat_dmg_ctrl: "ડેમેજ કંટ્રોલ",
    feat_app: "સેન્ટર એપ",
    feat_test_gen: "ટેસ્ટ પેપર જનરેટર",
    feat_lib: "ડિજિટલ લાઇબ્રેરી",
    feat_study_mat: "હાર્ડ કોપી અભ્યાસ સામગ્રી",
    feat_merch: "બેગ + ટી-શર્ટ",
    feat_orient: "લાઇવ ઓરિએન્ટેશન સેશન",
    feat_fac_train: "ઓનલાઇન ફેકલ્ટી તાલીમ",
    feat_social: "સોશિયલ મીડિયા મેનેજમેન્ટ",
    feat_leads: "પ્રથમ 50 લીડ્સ (ડિજિટલ જાહેરાતો)",
    feat_promo: "પ્રોમો ડિઝાઇન (સોફ્ટ કોપી)",
    founder_badge: "સ્થાપક વિશે",
    founder_title: "તમારા શહેર માટે ભદ્ર શૈક્ષણિક પ્રણાલી",
    founder_quote: "અમારું મિશન કોટા-ગ્રેડ શિક્ષણનું લોકશાહીકરણ કરવાનું છે. અમે શાળાના માલિકો અને રોકાણકારોને સાબિત મોડ્યુલ્સ અને શિક્ષક તાલીમ સાથે સશક્ત બનાવીએ છીએ.",
    faculty_badge: "કોટા એક્સપર્ટ્સ",
    faculty_title: "અમારી ભદ્ર ફેકલ્ટી ટીમ",
    faculty_desc: "અમે તમને તે જ ટીમ પ્રદાન કરીએ છીએ જે કોટાને ભારતની કોચિંગ રાજધાની બનાવે છે.",
    gallery_title: "કેમ્પસ અનુભવ ગેલેરી",
    gallery_desc: "હાઈ-ટેક ક્લાસરૂમ્સ અને ફોકસ-ડ્રિવન ઈન્ફ્રાસ્ટ્રક્ચર જે અમે અમારા ભાગીદારોને પ્રદાન કરીએ છીએ.",
    footer_quote: "ભારતની દરેક શાળા અને શહેરમાં કોટાની શૈક્ષણિક શક્તિ લાવવી.",
    footer_visit: "અમારી મુલાકાત લો",
    footer_connect: "ઓનલાઇન જોડાઓ",
    footer_helpline: "ડાયરેક્ટ હેલ્પલાઇન",
    footer_copyright: "પ્રીમિયમ શૈક્ષણિક જોડાણ. તમારી શૈક્ષણિક શ્રેષ્ઠતાની સફર અહીંથી શરૂ થાય છે!",
    cta_floating: "હેડ ઓફિસ સાથે વાત કરો",
    success_udgir: "ઉદગીર, મહારાષ્ટ્ર",
    success_amravati: "અમરાવતી, મહારાષ્ટ્ર",
    metric_students: "25 થી 80+ વિદ્યાર્થીઓ",
    metric_profit: "30-40 લાખ નફો",
    metric_hub: "શ્રેષ્ઠ શિક્ષણ કેન્દ્ર",
    metric_market: "પ્રભાવી માર્કેટ શેર",
    success_desc_udgir: "માત્ર એક સત્રમાં પ્રચંડ વિદ્યાર્થી વૃદ્ધિ અને નાણાકીય સફળતા હાંસલ કરી.",
    success_desc_amravati: "અમરાવતીમાં બ્રાન્ડના વિશ્વાસ સાથે અભૂતપૂર્વ લોન્ચ સફળતા.",
    exp_text: "વર્ષો"
  }
};

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
    subject_key: "Physics",
    role_key: "Founder",
    exp_val: "16+",
    qualification_key: "IIT Guwahati Alumni • Specialist in JEE Advanced Physics",
    image: "https://lh3.googleusercontent.com/d/1luFFC0j_NJ1YOoyvtQV-el09soK4t_gf"
  },
  {
    name: "A. Vyas Sir",
    subject_key: "Chemistry",
    role_key: "Senior Faculty",
    exp_val: "14+",
    qualification_key: "BSc • MSc (Chemistry) • MSc (Botany) • B.Ed",
    image: "https://lh3.googleusercontent.com/d/16nwRLzBrMGb8R1FRD9pZzFqyJZyshPb9"
  },
  {
    name: "Alok Agrawal",
    subject_key: "Mathematics",
    role_key: "Senior Faculty",
    exp_val: "10+",
    qualification_key: "B.Tech in Mechanical from RTU, Kota (Raj.)",
    image: "https://lh3.googleusercontent.com/d/16mhfEFnK5EyO2YBB6x97m946OFsoyGNO"
  },
  {
    name: "Megha Ma'am",
    subject_key: "Biology",
    role_key: "Senior Faculty",
    exp_val: "10+",
    qualification_key: "BSc • MSc (Botany) • B.Ed (Biology) • GATE Qualify 2019",
    image: "https://lh3.googleusercontent.com/d/1ur9mXf023Unx4mWI2QD_Gs37QBIfJ4Du"
  }
];

const galleryImages = [
  "https://lh3.googleusercontent.com/d/15_g06RoKEjDkn-yFAVUmOFT0hJlebYzv",
  "https://lh3.googleusercontent.com/d/1AwyA6Ybs4DaB20IxzbRttPWjG6U4WMF1",
  "https://lh3.googleusercontent.com/d/1Sgk9No6AHV1lLGPsYLiwCcAzeOYt4jhA",
  "https://lh3.googleusercontent.com/d/1RmD51O3oQecwir7dikBaqwX_WRtM9G_x"
];

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('preferredLang') || 'en');
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', role: 'Investor' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sync document lang for font handling in index.html
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const t = useMemo(() => TRANSLATIONS[currentLang] || TRANSLATIONS.en, [currentLang]);

  const centers = useMemo(() => [
    {
      name: t.success_udgir,
      franchisee: "EduQuantum Udgir",
      metric1: t.metric_students,
      metric2: t.metric_profit,
      desc: t.success_desc_udgir,
      image: "https://lh3.googleusercontent.com/d/1qc0fFJFFtVh8RLyu26if_IER2lnTyIzL"
    },
    {
      name: t.success_amravati,
      franchisee: "EduQuantum Amravati",
      metric1: t.metric_hub,
      metric2: t.metric_market,
      desc: t.success_desc_amravati,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    }
  ], [t]);

  // Comprehensive feature list based on the user's "Quantum School Integrated Program (SIP)" image
  const sipFeatures = useMemo(() => [
    { label: t.feat_brand, premium: true, advance: true, base: false },
    { label: t.feat_fac_rec, premium: true, advance: true, base: false },
    { label: t.feat_fac_rep, premium: true, advance: false, base: false },
    { label: t.feat_dmg_ctrl, premium: true, advance: false, base: false },
    { label: t.feat_app, premium: true, advance: true, base: true },
    { label: t.feat_test_gen, premium: true, advance: false, base: false },
    { label: t.feat_lib, premium: true, advance: true, base: true },
    { label: t.feat_study_mat, premium: true, advance: true, base: true },
    { label: t.feat_merch, premium: true, advance: true, base: true },
    { label: t.feat_orient, premium: true, advance: true, base: false },
    { label: t.feat_fac_train, premium: true, advance: true, base: true },
    { label: t.feat_social, premium: true, advance: false, base: false },
    { label: t.feat_leads, premium: true, advance: true, base: true },
    { label: t.feat_promo, premium: true, advance: true, base: true },
  ], [t]);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (formData.name && formData.name.length < 3) e.name = "Enter full name";
    if (formData.city && formData.city.length < 2) e.city = "Enter city";
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) e.phone = "Enter 10-digit number";
    return e;
  }, [formData]);

  const openWhatsApp = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_RAW}?text=${encodedMsg}`, '_blank');
  };

  const changeLang = useCallback((code: string) => {
    localStorage.setItem('preferredLang', code);
    setCurrentLang(code);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % centers.length);
  }, [centers.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + centers.length) % centers.length);
  }, [centers.length]);

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
    const text = `*New Franchise Inquiry*\n*Name:* ${formData.name}\n*City:* ${formData.city}\n*Role:* ${formData.role}\n*Phone:* ${formData.phone}\nI am interested in ${BRAND_NAME}.`;
    openWhatsApp(text);
  };

  const getInputBorderClass = (field: string) => {
    if (!touched[field]) return 'border-slate-100 focus:border-[#D4AF37]';
    return errors[field] ? 'border-red-500 bg-red-50/10' : 'border-green-500 bg-green-50/10';
  };

  const StatusIcon = ({ check }: { check: boolean }) => (
    check 
      ? <CheckCircle2 size={18} className="text-green-500 mx-auto" /> 
      : <XCircle size={18} className="text-red-400 mx-auto" />
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-[#D4AF37] selection:text-white" lang={currentLang}>
      
      {/* Announcement */}
      <div className="bg-[#002D62] text-white py-2 px-4 border-b border-white/10 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#D4AF37]"><Star size={14} fill="currentColor"/> {t.nav_announcement}</span>
            <span className="hidden md:inline-block opacity-30">|</span>
            <span className="flex items-center gap-2">{t.nav_estd}</span>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={() => openWhatsApp(`Hi ${FOUNDER_NICKNAME}`)} className="hover:text-[#D4AF37] transition font-bold">{PHONE_NUMBER}</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="glass-header sticky top-0 z-50 border-b border-slate-100 py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <img src={LOGO_URL} alt={BRAND_NAME} className="h-10 md:h-14 hover:scale-105 transition duration-300 cursor-pointer object-contain" />
              <div className="flex items-center gap-4">
                <button onClick={() => openWhatsApp(`Hi`)} className="bg-[#002D62] text-white px-8 py-3 rounded-full font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition active:scale-95 shadow-lg shadow-blue-900/20">
                  {t.nav_apply}
                </button>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-4 overflow-x-auto hide-scroll py-1">
              <div className="flex items-center gap-2 shrink-0 bg-slate-100 px-4 py-1.5 rounded-full">
                <Languages size={14} className="text-[#D4AF37]" />
                <span className="text-[10px] font-black uppercase text-slate-500">Language</span>
              </div>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button key={l.code} onClick={() => changeLang(l.code)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-bold transition-all border ${
                      currentLang === l.code ? 'bg-[#D4AF37] text-white border-[#D4AF37]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}>
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
              <span className="text-[11px] font-black uppercase tracking-widest">{t.hero_badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-brand font-black leading-[1.05] mb-8">
              {t.hero_title_p1} <span className="text-[#D4AF37]">{BRAND_NAME}</span> {t.hero_title_p2}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12">
              {t.hero_desc}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">16+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">{t.stat_exp}</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">5K+</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">{t.stat_results}</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">IIT-G</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">{t.stat_pedigree}</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#D4AF37]">High</div>
                <div className="text-[10px] uppercase font-bold text-slate-400">{t.stat_roi}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-2xl border-t-[10px] border-[#D4AF37] text-slate-900">
              <h3 className="text-3xl font-brand font-black mb-2 text-[#002D62]">{t.form_title}</h3>
              <p className="text-slate-500 text-sm mb-10 italic">"{t.form_subtitle}"</p>
              
              <form onSubmit={handleWhatsAppForm} className="space-y-6">
                <input type="text" placeholder={t.form_placeholder_name} required className={`w-full p-5 bg-slate-50 border rounded-2xl outline-none transition-all ${getInputBorderClass('name')}`} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input type="text" placeholder={t.form_placeholder_city} required className={`w-full p-5 bg-slate-50 border rounded-2xl outline-none transition-all ${getInputBorderClass('city')}`} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                <input type="tel" placeholder={t.form_placeholder_phone} required className={`w-full p-5 bg-slate-50 border rounded-2xl outline-none transition-all ${getInputBorderClass('phone')}`} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})} value={formData.phone} />
                <select className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold text-[#002D62] appearance-none" onChange={(e) => setFormData({...formData, role: e.target.value})}>
                  <option value="School Owner">{t.form_role_school}</option>
                  <option value="Coaching Owner">{t.form_role_coaching}</option>
                  <option value="Investor">{t.form_role_investor}</option>
                  <option value="Teacher">{t.form_role_teacher}</option>
                </select>
                <button className="w-full bg-[#002D62] text-white font-black py-5 rounded-2xl shadow-xl transition-all hover:bg-blue-800 active:scale-95 flex items-center justify-center gap-3">
                  {t.form_submit} <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Models Comparison Table - Updated according to SIP Image */}
      <section className="py-24 bg-slate-50 relative overflow-hidden" id="models">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-brand font-black text-[#002D62] mb-4">{t.models_title}</h2>
            <p className="text-slate-500 text-lg italic max-w-2xl mx-auto">{t.models_subtitle}</p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-hidden rounded-[3.5rem] bg-white shadow-2xl border border-slate-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#002D62] text-white">
                    <th className="p-8 text-xl font-brand font-black">Facilities At Study Centre</th>
                    <th className="p-8 text-center bg-[#D4AF37]/10">
                      <div className="flex flex-col items-center">
                        <Crown className="text-[#D4AF37] mb-2" size={24} />
                        <span className="block text-lg font-black">{t.model_premium_name}</span>
                        <span className="text-[10px] opacity-60 font-bold uppercase tracking-widest">{t.model_recommended}</span>
                      </div>
                    </th>
                    <th className="p-8 text-center">
                      <div className="flex flex-col items-center">
                        <Rocket className="text-slate-300 mb-2" size={24} />
                        <span className="block text-lg font-black">{t.model_advance_name}</span>
                      </div>
                    </th>
                    <th className="p-8 text-center">
                      <div className="flex flex-col items-center">
                        <Layers className="text-slate-300 mb-2" size={24} />
                        <span className="block text-lg font-black">{t.model_base_name}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {sipFeatures.map((feat, idx) => (
                    <tr key={idx} className={`hover:bg-slate-50/50 transition ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'}`}>
                      <td className="p-6 pl-10 font-bold text-slate-700 text-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                          {feat.label}
                        </div>
                      </td>
                      <td className="p-6 text-center bg-[#D4AF37]/5"><StatusIcon check={feat.premium} /></td>
                      <td className="p-6 text-center"><StatusIcon check={feat.advance} /></td>
                      <td className="p-6 text-center"><StatusIcon check={feat.base} /></td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-10"></td>
                    <td className="p-10 text-center bg-[#D4AF37]/5">
                      <button onClick={() => openWhatsApp(`Premium Model Details`)} className="bg-[#002D62] text-white px-8 py-3 rounded-full text-xs font-black hover:bg-[#D4AF37] transition-all">Get Kit</button>
                    </td>
                    <td className="p-10 text-center">
                      <button onClick={() => openWhatsApp(`Advance Model Details`)} className="bg-slate-100 text-[#002D62] px-8 py-3 rounded-full text-xs font-black hover:bg-slate-200 transition-all">Enquire</button>
                    </td>
                    <td className="p-10 text-center">
                      <button onClick={() => openWhatsApp(`Base Model Details`)} className="bg-slate-100 text-[#002D62] px-8 py-3 rounded-full text-xs font-black hover:bg-slate-200 transition-all">Enquire</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Premium Card Mobile */}
               <div className="bg-white rounded-[2.5rem] shadow-xl border-t-8 border-[#D4AF37] overflow-hidden">
                  <div className="p-8 bg-[#002D62] text-white">
                    <Crown className="text-[#D4AF37] mb-2" size={32} />
                    <h3 className="text-2xl font-black">{t.model_premium_name}</h3>
                    <p className="text-[10px] text-[#D4AF37] uppercase font-black tracking-widest">{t.model_recommended}</p>
                  </div>
                  <div className="p-6 space-y-4 text-left">
                    {sipFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                        <span className="font-bold text-slate-600">{feat.label}</span>
                        <StatusIcon check={feat.premium} />
                      </div>
                    ))}
                    <button onClick={() => openWhatsApp(`Premium Model Details`)} className="w-full py-5 bg-[#002D62] text-white rounded-2xl font-black mt-4">Get Kit</button>
                  </div>
               </div>

               {/* Advance Card Mobile */}
               <div className="bg-white rounded-[2.5rem] shadow-xl border-t-8 border-slate-300 overflow-hidden">
                  <div className="p-8 bg-slate-900 text-white">
                    <Rocket className="text-slate-400 mb-2" size={32} />
                    <h3 className="text-2xl font-black">{t.model_advance_name}</h3>
                  </div>
                  <div className="p-6 space-y-4 text-left">
                    {sipFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2">
                        <span className="font-bold text-slate-600">{feat.label}</span>
                        <StatusIcon check={feat.advance} />
                      </div>
                    ))}
                    <button onClick={() => openWhatsApp(`Advance Model Details`)} className="w-full py-5 bg-slate-100 text-[#002D62] rounded-2xl font-black mt-4">Get Kit</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-brand font-black text-[#002D62] mb-6">{t.success_title}</h2>
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

      {/* Founder Profile */}
      <section className="py-24 bg-[#002D62] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-[#D4AF37]/40 rounded-[4rem] rotate-6 transform scale-105 blur-2xl"></div>
             <img src="https://lh3.googleusercontent.com/d/1UykyRhRknVxLRI85iJW1AH6kC2h6yU7h" alt={FOUNDER_NAME} className="relative z-10 rounded-[4rem] shadow-2xl border-2 border-white/10 grayscale-[0.2]" />
             <div className="absolute -bottom-10 -right-10 bg-white text-[#002D62] p-12 rounded-[3.5rem] shadow-2xl z-20 hidden md:block border-4 border-[#D4AF37]">
                <div className="text-5xl font-black mb-1">16+</div>
                <div className="text-[10px] uppercase font-black text-slate-400">{t.exp_text}</div>
             </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-[#D4AF37] text-[#002D62] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest w-fit mb-8">{t.founder_badge}</div>
            <h2 className="text-5xl md:text-6xl font-brand font-black mb-8 leading-tight">{t.founder_title}</h2>
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-12 italic"><span>{FOUNDER_NAME}</span> <span className="text-xl opacity-60">(IIT Guwahati)</span></h3>
            <p className="text-xl text-slate-300 italic mb-12 border-l-8 border-[#D4AF37] pl-10 leading-relaxed font-light text-justify">
              "{t.founder_quote}"
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-6 py-2 rounded-full mb-6 text-[#002D62]">
              <Users size={18} className="text-[#D4AF37]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">{t.faculty_badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-brand font-black text-[#002D62] mb-6">{t.faculty_title}</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">"{t.faculty_desc}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculties.map((f, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">{f.role_key}</div>
                    <div className="text-xl font-black">{f.name}</div>
                  </div>
                </div>
                <div className="p-8 space-y-4 grow flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-50 pb-4 mb-4">
                      <div className="flex items-center gap-2"><BookOpen size={16} className="text-[#D4AF37]" /><span className="font-black text-[#002D62]">{f.subject_key}</span></div>
                      <div className="bg-[#D4AF37]/10 px-3 py-1 rounded-full text-[10px] font-black text-[#002D62] uppercase tracking-tighter shrink-0">{f.exp_val} {t.exp_text}</div>
                    </div>
                    <div className="flex items-start gap-2"><Award size={14} className="text-[#D4AF37] mt-1 shrink-0" /><p className="text-xs font-bold text-slate-600 leading-relaxed italic">{f.qualification_key}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-brand font-black text-[#002D62] mb-4">{t.gallery_title}</h2>
            <p className="text-slate-500 italic max-w-lg mx-auto">{t.gallery_desc}</p>
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 pt-32 pb-12 overflow-hidden relative text-left">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-16 border-b border-white/5 pb-20 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={LOGO_URL} className="h-16 mb-8 filter brightness-0 invert" alt="Logo" />
              <p className="text-xl italic leading-relaxed text-slate-400 max-w-sm mb-10">"{t.footer_quote}"</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D4AF37] mt-1 shrink-0" size={24} />
                  <div className="text-sm text-slate-300 leading-relaxed">
                    <span className="font-black text-white block mb-1">📍 {t.footer_visit}:</span>
                    Opposite Ratlami Namkeen, <br/>New Jawahar Nagar, Kota, Rajasthan - 324005
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 border-l-2 border-[#D4AF37] pl-4">{t.footer_connect}</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="https://eduquantumkota.com/" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Globe size={18} className="text-[#D4AF37]"/> Website</a></li>
                <li><a href="https://share.google/c7M2pm9VhuvBw0t2l" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><MapPin size={18} className="text-[#D4AF37]"/> Google Profile</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=co.april2019.qtm" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Smartphone size={18} className="text-[#D4AF37]"/> Mobile App</a></li>
                <li><a href="https://www.instagram.com/quantum_kota/" target="_blank" className="flex items-center gap-3 hover:text-[#D4AF37] transition-all"><Instagram size={18} className="text-[#D4AF37]"/> Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 border-l-2 border-[#D4AF37] pl-4">{t.footer_helpline}</h4>
              <button onClick={() => openWhatsApp('Help')} className="text-2xl font-black text-white hover:text-[#D4AF37] transition">{PHONE_NUMBER}</button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 leading-relaxed max-w-2xl mx-auto">
              © 2025 {BRAND_NAME}. {t.footer_copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <button 
        onClick={() => openWhatsApp(`Hi ${FOUNDER_NICKNAME}, I am interested in opening an EduQuantum center in my city. Please share business details.`)}
        className="fixed bottom-10 right-10 z-[100] bg-green-500 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all group animate-bounce"
      >
        <MessageCircle size={32} fill="white" />
        <span className="absolute right-full mr-6 bg-white text-[#002D62] px-6 py-3 rounded-2xl text-[10px] font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border-2 border-[#D4AF37]">
          {t.cta_floating}
        </span>
      </button>

      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        body { top: 0px !important; position: static !important; }
      `}</style>
    </div>
  );
};

export default App;