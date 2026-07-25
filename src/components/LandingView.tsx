import React from 'react';
import { motion } from 'motion/react';
import { NavigationTab, AppLanguage } from '../types';
import { 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Scale, 
  FileCheck, 
  FileText, 
  Languages, 
  Sparkles,
  CheckCircle2,
  Building2,
  BookOpen,
  Award,
  BookMarked,
  Gavel
} from 'lucide-react';

interface LandingViewProps {
  setActiveTab: (tab: NavigationTab) => void;
  language: AppLanguage;
}

export const LandingView: React.FC<LandingViewProps> = ({ setActiveTab, language }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-[#f4f7f5] text-slate-800 min-h-screen overflow-x-hidden">
      
      {/* Hero Section with Pakistan Flag & Gavel Background */}
      <section className="relative bg-gradient-to-br from-[#011a10] via-[#043d28] to-[#012618] text-white overflow-hidden border-b border-emerald-900/50">
        
        {/* Background Visual Layer with Gavel & Pakistan Flag */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gavel_pakistan_flag_1784924117380.jpg"
            alt="Pakistan Flag & Legal Gavel"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011a10] via-[#012618]/90 to-[#011a10]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(128,234,169,0.12),transparent_50%)]" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns: Headlines and Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Govt Official Order Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-[#043a29] border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#80eaa9] animate-ping" />
                <span className="font-bold font-mono text-xs text-[#80eaa9] tracking-wider uppercase">
                  OFFICIAL PAKISTAN LEGAL PORTAL • عمومی قانونی پورٹل
                </span>
              </motion.div>

              {/* Headlines with staggered motion */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white font-sans">
                  Empowering Citizens with <span className="text-[#80eaa9] underline decoration-[#80eaa9]/50 underline-offset-8">AI Legal Intelligence</span>
                </h1>

                <div className="bg-[#021d13]/90 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 backdrop-blur-md shadow-xl">
                  <p className="text-xl sm:text-2xl font-bold font-urdu text-[#a1f1c2] text-right leading-loose">
                    پاکستانی شہریوں کے لیے مصنوعی ذہانت کے ذریعے آسان، مفت اور فوری قانونی انصاف۔
                  </p>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p variants={itemVariants} className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium max-w-2xl">
                Direct public access to the Pakistan Penal Code (PPC), Civil Procedure Code (CPC), High Court petition generators, and instant AI legal research.
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 25px -5px rgba(128, 234, 169, 0.25)' }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab('intake')}
                  className="bg-[#80eaa9] hover:bg-[#68d893] text-[#012618] font-black px-7 py-4 rounded-2xl flex items-center space-x-3 transition-all text-sm cursor-pointer border border-[#80eaa9] shadow-lg"
                >
                  <FileText className="w-5 h-5 text-[#012618]" />
                  <span>File Complaint / شکوہ درج کریں</span>
                  <ArrowRight className="w-4 h-4 text-[#012618]" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab('chat')}
                  className="bg-[#043321] hover:bg-[#084930] text-[#a1f1c2] border border-[#80eaa9]/40 font-bold px-6 py-4 rounded-2xl transition-all text-sm cursor-pointer flex items-center space-x-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#80eaa9]" />
                  <span>AI Legal Consultation</span>
                </motion.button>
              </motion.div>

              {/* Open Access Subtext Badge */}
              <motion.div variants={itemVariants} className="pt-2 flex items-center space-x-2 text-xs font-semibold text-emerald-200/90">
                <CheckCircle2 className="w-4 h-4 text-[#80eaa9] shrink-0" />
                <span>100% Free Public Access • No Login Required • پاکستان کے تمام شہریوں کے لیے مفت</span>
              </motion.div>

            </div>

            {/* Right 5 Columns: Visual Hero Showcase Card with Floating Badge */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative space-y-4">
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 z-20 bg-[#043a29] border-2 border-[#80eaa9] p-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-white backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#80eaa9] text-[#012618] flex items-center justify-center font-black">
                  <Gavel className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#80eaa9] uppercase block">SUPREME COURT VERIFIED</span>
                  <span className="text-xs font-bold">Constitutional & PPC Statutes</span>
                </div>
              </motion.div>

              {/* Main Visual Card Showcase */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-[#021d13] p-3 rounded-3xl border border-emerald-500/40 shadow-2xl overflow-hidden group"
              >
                <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72">
                  <img 
                    src="/images/gavel_pakistan_flag_1784924117380.jpg"
                    alt="Pakistan Legal System Gavel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011a10] via-transparent to-transparent opacity-95" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-[10px] font-mono font-black text-[#80eaa9] uppercase tracking-widest block bg-[#012618]/80 px-2.5 py-1 rounded-md w-fit border border-emerald-500/30">
                      HIGH COURT PETITION STANDARD
                    </span>
                    <h4 className="text-base font-extrabold text-white">Pakistan Judicial Portal</h4>
                    <p className="text-xs text-emerald-100/90 font-medium">Automatic clause mapping for FIRs, Land Disputes & Rent Appeals.</p>
                  </div>
                </div>
              </motion.div>

              {/* Visual Mini Grid */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3 cursor-pointer"
                  onClick={() => setActiveTab('cases')}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                    <img 
                      src="/images/judicial_gavel_scales_1784923557497.jpg"
                      alt="Scales of Justice"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#012618] block font-mono">CRIMINAL & CIVIL</span>
                    <span className="text-[11px] font-black text-slate-900">CrPC & CPC</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3 cursor-pointer"
                  onClick={() => setActiveTab('petition')}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                    <img 
                      src="/images/court_order_document_1784923535719.jpg"
                      alt="Supreme Court Document"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#012618] block font-mono">COURT PETITION</span>
                    <span className="text-[11px] font-black text-slate-900">High Court Drafts</span>
                  </div>
                </motion.div>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Alignment / Official Verification Standards */}
      <section className="bg-white border-b border-slate-200 py-6 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-4 text-slate-700 text-xs font-bold"
          >
            <span className="text-slate-500 uppercase tracking-widest font-mono text-[10px]">
              VERIFIED LEGAL STANDARDS
            </span>

            <div className="flex items-center space-x-2 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-[#012618]" />
              <span>Pakistan Code & PPC Statutes</span>
            </div>

            <div className="flex items-center space-x-2 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
              <Building2 className="w-4 h-4 text-[#012618]" />
              <span>High Court & CrPC Procedure</span>
            </div>

            <div className="flex items-center space-x-2 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
              <Scale className="w-4 h-4 text-[#012618]" />
              <span>Supreme Court Precedent Engine</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Feature Gallery with Background Imagery */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div>
            <span className="text-[11px] font-mono font-black tracking-widest uppercase text-[#012618] bg-emerald-100 px-3 py-1 rounded-md">
              CORE LEGAL CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Bilingual Legal Intelligence Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Equipping every citizen with instantaneous constitutional analysis, precedent verification, and document drafting.
            </p>
          </div>
          <div className="text-right">
            <p className="font-urdu text-xl font-bold text-[#012618]">
              پاکستانی قانون اور عدالتوں کے مطابق اہم خصوصیات
            </p>
          </div>
        </motion.div>

        {/* 3 Interactive Animated Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all hover:shadow-xl overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img 
                src="/images/courtroom_hero_bg_1784922922228.jpg"
                alt="PPC Penal Code Mapping"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#012618] text-[#80eaa9] flex items-center justify-center font-bold border border-emerald-500/30">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#80eaa9] text-[#012618] text-[10px] font-black rounded-lg">
                PPC & CrPC STATUTES
              </span>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-slate-900">
                  Penal Section Classification
                </h3>
                <p className="font-urdu text-xs font-bold text-[#012618]">
                  تعزیراتِ پاکستان کی دفعات کا تعین
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  Maps real-world grievances directly to PPC sections (420, 378, 302, 506) with punishment severity indicators and risk ratings.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-emerald-100 text-[#012618] text-[10px] font-bold rounded-lg border border-emerald-200">
                  Statutory Classification
                </span>
                <motion.button 
                  whileHover={{ x: 3 }}
                  onClick={() => setActiveTab('intake')}
                  className="text-xs font-black text-[#012618] flex items-center cursor-pointer"
                >
                  <span>Start Intake</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#012618]" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all hover:shadow-xl overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img 
                src="/images/court_order_document_1784923535719.jpg"
                alt="High Court Petition Drafts"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#012618] text-[#80eaa9] flex items-center justify-center font-bold border border-emerald-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#80eaa9] text-[#012618] text-[10px] font-black rounded-lg">
                HIGH COURT DRAFTS
              </span>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-slate-900">
                  Auto Petition Generator
                </h3>
                <p className="font-urdu text-xs font-bold text-[#012618]">
                  آئینی درخواستوں کا خودکار مسودہ
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  Formats constitutional writ petitions under Article 199, bail petitions under Sec 497 CrPC, and civil plaints ready for advocate submission.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-emerald-100 text-[#012618] text-[10px] font-bold rounded-lg border border-emerald-200">
                  Document Automation
                </span>
                <motion.button 
                  whileHover={{ x: 3 }}
                  onClick={() => setActiveTab('petition')}
                  className="text-xs font-black text-[#012618] flex items-center cursor-pointer"
                >
                  <span>Open Vault</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#012618]" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all hover:shadow-xl overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img 
                src="/images/gavel_pakistan_flag_1784924117380.jpg"
                alt="Bilingual Legal Assistant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#012618] text-[#80eaa9] flex items-center justify-center font-bold border border-emerald-500/30">
                <Languages className="w-5 h-5" />
              </div>
              <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#80eaa9] text-[#012618] text-[10px] font-black rounded-lg">
                BILINGUAL AI ASSISTANT
              </span>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-slate-900">
                  Urdu & English Research
                </h3>
                <p className="font-urdu text-xs font-bold text-[#012618]">
                  اردو اور انگریزی میں رہنمائی
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  Every statute breakdown, legal precedent, and guidance step is provided side-by-side in English, Roman Urdu, and Urdu text.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-emerald-100 text-[#012618] text-[10px] font-bold rounded-lg border border-emerald-200">
                  Bilingual Accessibility
                </span>
                <motion.button 
                  whileHover={{ x: 3 }}
                  onClick={() => setActiveTab('chat')}
                  className="text-xs font-black text-[#012618] flex items-center cursor-pointer"
                >
                  <span>Consult AI</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#012618]" />
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Court Order Showcase Section with Animated Visual Background */}
      <section className="relative bg-[#042016] text-white py-16 border-t border-emerald-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/supreme_court_pakistan_1784922968648.jpg"
            alt="Supreme Court Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#042016] via-[#011a10]/95 to-[#042016]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <span className="px-3.5 py-1 bg-[#043a29] text-[#80eaa9] text-xs font-mono font-bold rounded-full uppercase tracking-wider border border-emerald-500/30">
              CERTIFIED JUDICIAL STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Courtroom-Ready Petition Formats
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Generates legal petitions aligned with High Court Sindh, High Court Lahore, and Islamabad High Court filing guidelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-[#011a10] group"
            >
              <img 
                src="/images/court_order_document_1784923535719.jpg"
                alt="Pakistani Court Order Format"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0e5c3e] text-[#80eaa9] flex items-center justify-center shrink-0 font-bold border border-emerald-400/30">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">High Court Formatting Standards</h4>
                  <p className="text-xs text-emerald-100/80 mt-1">Proper legal margins, court title block, prayer clause, and verified verification affidavits.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0e5c3e] text-[#80eaa9] flex items-center justify-center shrink-0 font-bold border border-emerald-400/30">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">PPC Penal Code Cross-Referencing</h4>
                  <p className="text-xs text-emerald-100/80 mt-1">Automatic cross-linking of penal sections with landmark Supreme Court citations (PLD / SCMR).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0e5c3e] text-[#80eaa9] flex items-center justify-center shrink-0 font-bold border border-emerald-400/30">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant Export & Print View</h4>
                  <p className="text-xs text-emerald-100/80 mt-1">Export formatted petition drafts directly to PDF or legal paper ready for Advocate signatures.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Public Access CTA Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-emerald-500/30 shadow-2xl space-y-6"
        >
          <div className="absolute inset-0 z-0 opacity-15">
            <img 
              src="/images/gavel_pakistan_flag_1784924117380.jpg" 
              alt="Pakistan Legal Portal CTA" 
              referrerPolicy="no-referrer" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 bg-[#80eaa9] text-[#012618] text-xs font-black rounded-full uppercase tracking-wider">
              FREE FOR ALL CITIZENS OF PAKISTAN
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to submit your legal inquiry?
            </h2>
            <p className="font-urdu text-xl text-[#a1f1c2]">
              اپنی قانون سے متعلق شکایت درج کریں یا آئی اے سے فوری رہنمائی حاصل کریں۔
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('intake')}
                className="bg-[#80eaa9] hover:bg-[#68d893] text-[#012618] font-extrabold px-8 py-4 rounded-2xl transition-all shadow-xl text-xs cursor-pointer border border-[#80eaa9]"
              >
                Start Legal Analysis Now (Free)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('chat')}
                className="bg-[#03281b] hover:bg-[#074730] text-emerald-100 border border-emerald-400/50 font-bold px-8 py-4 rounded-2xl transition-all text-xs cursor-pointer shadow-md"
              >
                Ask AI Assistant
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};



