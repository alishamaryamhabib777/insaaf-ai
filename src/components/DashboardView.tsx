import React from 'react';
import { motion } from 'motion/react';
import { NavigationTab, AppLanguage } from '../types';
import { 
  FilePlus2, 
  Clock, 
  FileCheck2, 
  Bookmark, 
  Bot, 
  ExternalLink, 
  Calculator, 
  BookOpen, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  Building2,
  ShieldCheck,
  Scale,
  FolderKanban
} from 'lucide-react';

interface DashboardViewProps {
  setActiveTab: (tab: NavigationTab) => void;
  language: AppLanguage;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ setActiveTab, language }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      
      {/* Welcome Hero Banner with Supreme Court Visuals */}
      <div className="relative bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl overflow-hidden">
        <img 
          src="/src/assets/images/supreme_court_pakistan_1784922968648.jpg"
          alt="Supreme Court of Pakistan"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-[#043a29] text-[#80eaa9] border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <span>CITIZEN JUDICIAL DASHBOARD</span>
              <span>•</span>
              <span className="font-urdu">پاکستانی شہری پورٹل</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Public Legal Portal • <span className="text-[#80eaa9]">پاکستان قانون سازی پورٹل</span>
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
              Access verified Pakistan Penal Code (PPC) statutes, generate High Court compliant petitions, and track active grievances in real-time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab('intake')}
              className="bg-[#80eaa9] hover:bg-[#68d893] text-[#012618] font-black px-5 py-3 rounded-2xl flex items-center space-x-2 text-xs shadow-lg transition-all cursor-pointer border border-[#80eaa9]"
            >
              <FilePlus2 className="w-4 h-4 text-[#012618]" />
              <span>Submit New Complaint / شکوہ درج کریں</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab('chat')}
              className="bg-[#03281b] hover:bg-[#063b27] text-[#a1f1c2] border border-emerald-400/40 font-bold px-5 py-3 rounded-2xl flex items-center space-x-2 text-xs shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#80eaa9]" />
              <span>AI Research Assistant</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Metric 1 */}
        <div 
          onClick={() => setActiveTab('cases')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-emerald-500 transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#012618]">
              ACTIVE GRIEVANCES
            </span>
            <FolderKanban className="w-4 h-4 text-[#012618] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900">04</span>
            <span className="text-xs text-slate-500 font-bold">Cases Filed</span>
          </div>
          <p className="text-[11px] font-urdu text-emerald-800 font-bold">زیرِ سماعت مقدمات</p>
        </div>

        {/* Metric 2 */}
        <div 
          onClick={() => setActiveTab('petition')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-emerald-500 transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#012618]">
              PETITION DRAFTS
            </span>
            <FileCheck2 className="w-4 h-4 text-[#012618] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900">12</span>
            <span className="text-xs text-slate-500 font-bold">Court Ready</span>
          </div>
          <p className="text-[11px] font-urdu text-emerald-800 font-bold">تیار شدہ قانونی مسودے</p>
        </div>

        {/* Metric 3 */}
        <div 
          onClick={() => setActiveTab('chat')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-emerald-500 transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#012618]">
              LEGAL QUERIES
            </span>
            <Sparkles className="w-4 h-4 text-[#012618] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900">28</span>
            <span className="text-xs text-slate-500 font-bold">PPC Analyzed</span>
          </div>
          <p className="text-[11px] font-urdu text-emerald-800 font-bold">تعزیراتِ پاکستان تجزئیے</p>
        </div>

        {/* Metric 4 */}
        <div 
          onClick={() => setActiveTab('cases')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-emerald-500 transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#012618]">
              PRECEDENT SEARCH
            </span>
            <Scale className="w-4 h-4 text-[#012618] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900">15</span>
            <span className="text-xs text-slate-500 font-bold">SC Citations</span>
          </div>
          <p className="text-[11px] font-urdu text-emerald-800 font-bold">سپریم کورٹ کی نقول</p>
        </div>

      </div>

      {/* Visual Quick Launch Cards with Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quick Launch Card 1: Submit Intake */}
        <div 
          onClick={() => setActiveTab('intake')}
          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:border-emerald-500 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="relative h-36 overflow-hidden bg-slate-900">
            <img 
              src="/src/assets/images/courtroom_hero_bg_1784922922228.jpg"
              alt="Submit Complaint"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012618] via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#80eaa9] text-[#012618] text-[10px] font-black rounded-lg">
              STEP 1: INTAKE
            </span>
          </div>
          <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#012618]">
                Submit Complaint / شکوہ درج کریں
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Enter incident details in English, Roman Urdu, or Urdu. Instant PPC section mapping.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-black text-[#012618] group-hover:translate-x-1 transition-transform">
              <span>File Complaint Now</span>
              <ArrowRight className="w-4 h-4 ml-1 text-[#012618]" />
            </div>
          </div>
        </div>

        {/* Quick Launch Card 2: AI Research Assistant */}
        <div 
          onClick={() => setActiveTab('chat')}
          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:border-emerald-500 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="relative h-36 overflow-hidden bg-slate-900">
            <img 
              src="/src/assets/images/judicial_gavel_scales_1784923557497.jpg"
              alt="AI Research"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012618] via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#80eaa9] text-[#012618] text-[10px] font-black rounded-lg">
              AI ASSISTANT
            </span>
          </div>
          <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#012618]">
                AI Legal Research / قانونی تحقیق
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Ask questions about bail, FIR registration, rent laws, and land dispute procedures.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-black text-[#012618] group-hover:translate-x-1 transition-transform">
              <span>Start Legal Research</span>
              <ArrowRight className="w-4 h-4 ml-1 text-[#012618]" />
            </div>
          </div>
        </div>

        {/* Quick Launch Card 3: Petition Generator */}
        <div 
          onClick={() => setActiveTab('petition')}
          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:border-emerald-500 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="relative h-36 overflow-hidden bg-slate-900">
            <img 
              src="/src/assets/images/court_order_document_1784923535719.jpg"
              alt="Petition Drafts"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012618] via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#80eaa9] text-[#012618] text-[10px] font-black rounded-lg">
              DOCUMENT VAULT
            </span>
          </div>
          <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#012618]">
                Petition Drafts / درخواستوں کے مسودے
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Download formatted court petitions for Sindh, Lahore, or Islamabad High Court filing.
              </p>
            </div>
            <div className="pt-3 flex items-center text-xs font-black text-[#012618] group-hover:translate-x-1 transition-transform">
              <span>Open Document Vault</span>
              <ArrowRight className="w-4 h-4 ml-1 text-[#012618]" />
            </div>
          </div>
        </div>

      </div>

      {/* Main Content Split: Recent Case Feed / Side Guidance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                Recent Case Activity / تازہ ترین سرگرمی
              </h2>
              <p className="text-xs text-slate-500">Real-time status updates from Pakistan judicial archives</p>
            </div>
            <button 
              onClick={() => setActiveTab('cases')}
              className="text-xs font-extrabold text-[#012618] bg-emerald-100 hover:bg-emerald-200 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-xs border border-emerald-300"
            >
              View Full Case Archive
            </button>
          </div>

          <div className="space-y-4">
            
            {/* Activity Item 1 */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2 hover:border-emerald-300 transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">
                  Constitutional Petition #442 / 2026 (Writ Petition)
                </span>
                <span className="text-[10px] font-mono font-bold text-[#012618] bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">2 HOURS AGO</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                High Court Sindh Registrar acknowledged the filing under Article 199. Preliminary hearing scheduled before Honorable Bench II.
              </p>
              <div className="flex items-center justify-between pt-2 text-[11px] font-bold">
                <div className="flex space-x-2">
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-[#012618] rounded-md border border-emerald-300">
                    PPC 420 & 406
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-md border border-slate-300">
                    High Court Sindh
                  </span>
                </div>
                <span className="text-[#012618] font-extrabold">Status: Filed / زیرِ سماعت</span>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2 hover:border-emerald-300 transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">
                  Bail Application Sec 497 CrPC (FIR #102/2026)
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">YESTERDAY</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Drafted pre-arrest bail petition generated for Session Court Lahore with precedent citation PLD 2022 SC 148.
              </p>
              <div className="flex items-center justify-between pt-2 text-[11px] font-bold">
                <div className="flex space-x-2">
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-[#012618] rounded-md border border-emerald-300">
                    CrPC 497
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-md border border-slate-300">
                    Session Court Lahore
                  </span>
                </div>
                <span className="text-slate-700 font-extrabold">Status: Drafted / تیار شدہ</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Free Legal Aid & Public Helpline Card */}
        <div className="space-y-6">
          
          <div className="bg-gradient-to-b from-[#012618] to-[#043d28] text-white p-6 rounded-3xl border border-emerald-500/30 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 border-b border-emerald-800 pb-3">
              <Building2 className="w-5 h-5 text-[#80eaa9]" />
              <div>
                <h3 className="text-sm font-extrabold text-[#80eaa9]">
                  Government Legal Aid
                </h3>
                <p className="text-[10px] font-urdu text-emerald-200">حکومتِ پاکستان کی مفت قانونی مدد</p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
              Citizens are entitled to free legal counsel under the Legal Aid and Justice Authority Act 2020.
            </p>

            <button
              onClick={() => setActiveTab('chat')}
              className="w-full bg-[#80eaa9] hover:bg-[#68d893] text-[#012618] font-black py-3 px-4 rounded-2xl flex items-center justify-center space-x-2 text-xs transition-all shadow-md cursor-pointer border border-[#80eaa9]"
            >
              <Sparkles className="w-4 h-4 text-[#012618]" />
              <span>Ask AI Legal Advisor</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

