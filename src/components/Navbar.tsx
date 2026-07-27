import React from 'react';
import { NavigationTab, AppLanguage } from '../types';
import { Scale, Sparkles, Building2, CheckCircle2, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  isLoggedIn,
  onLoginClick
}) => {
  return (
    <header className="bg-gradient-to-r from-[#012618] via-[#042016] to-[#012618] text-white sticky top-0 z-40 border-b border-[#0e4d34] shadow-xl">
      {/* Top Govt Notification Bar */}
      <div className="bg-[#011a10] py-1 px-4 border-b border-[#0e4d34]/60 text-[11px] flex justify-between items-center text-emerald-200/90 font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#80eaa9] animate-ping" />
          <span className="font-bold text-[#80eaa9]">OFFICIAL PAKISTAN JUDICIAL PORTAL</span>
          <span className="hidden sm:inline text-slate-400">• Free & Open Access to All Citizens</span>
        </div>
        <div className="flex items-center space-x-3 text-[10px]">
          <span className="text-emerald-300 font-semibold">حکومتِ پاکستان - مفت و آزاد قانونی سہولت</span>
          <span className="hidden md:inline bg-[#0a3d2a] px-2 py-0.5 rounded text-[#80eaa9] font-bold border border-emerald-500/30">
            VERIFIED SC / PPC DATASET 2026
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo with Seal */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="relative w-11 h-11 rounded-xl bg-[#0e5c3e] border border-emerald-500/40 flex items-center justify-center text-[#80eaa9] shadow-lg group-hover:scale-105 transition-all">
            <Scale className="w-6 h-6 text-[#80eaa9]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-2xl tracking-tight text-white font-sans drop-shadow-sm">
                Munsif.<span className="text-[#80eaa9]">AI</span>
              </span>
              <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-black bg-[#80eaa9] text-[#012618] rounded-md shadow-xs">
                PAKISTAN
              </span>
            </div>
            <div className="flex items-center space-x-2 -mt-0.5">
              <span className="text-[10px] text-emerald-200/90 font-semibold tracking-wide">
                Judicial Access Portal
              </span>
              <span className="text-[#a1f1c2] font-serif text-[12px] font-bold">
                قومی قانون سازی پورٹل
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center space-x-1.5 bg-[#021810] p-1.5 rounded-2xl border border-[#0d422e]">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-[#0a3d2a] text-[#80eaa9] shadow-md border border-[#1b6b4c]'
                : 'text-emerald-100/80 hover:text-white hover:bg-[#073322]'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('intake')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'intake' || activeTab === 'analysis'
                ? 'bg-[#0a3d2a] text-[#80eaa9] shadow-md border border-[#1b6b4c]'
                : 'text-emerald-100/80 hover:text-white hover:bg-[#073322]'
            }`}
          >
            Submit Complaint
          </button>
          <button
            onClick={() => setActiveTab('petition')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'petition'
                ? 'bg-[#0a3d2a] text-[#80eaa9] shadow-md border border-[#1b6b4c]'
                : 'text-emerald-100/80 hover:text-white hover:bg-[#073322]'
            }`}
          >
            Petition Drafts
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
              activeTab === 'chat'
                ? 'bg-[#0a3d2a] text-[#80eaa9] shadow-md border border-[#1b6b4c]'
                : 'text-emerald-100/80 hover:text-white hover:bg-[#073322]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#80eaa9]" />
            <span>AI Legal Assistant</span>
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'cases'
                ? 'bg-[#0a3d2a] text-[#80eaa9] shadow-md border border-[#1b6b4c]'
                : 'text-emerald-100/80 hover:text-white hover:bg-[#073322]'
            }`}
          >
            Case Archive
          </button>
        </nav>

        {/* Right Actions: Free Access Badge & Language Switcher */}
        <div className="flex items-center space-x-3">
          
          {/* Side-by-side Language Selector Pill */}
          <div className="flex items-center bg-[#021810] border border-[#0e4d34] rounded-xl p-1 text-xs font-medium text-emerald-200 shadow-inner">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-lg transition-all text-xs font-bold cursor-pointer ${
                language === 'en'
                  ? 'bg-[#80eaa9] text-[#012618] shadow-xs'
                  : 'text-emerald-300/80 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('roman_urdu')}
              className={`px-2.5 py-1 rounded-lg transition-all text-xs font-bold cursor-pointer ${
                language === 'roman_urdu'
                  ? 'bg-[#80eaa9] text-[#012618] shadow-xs'
                  : 'text-emerald-300/80 hover:text-white'
              }`}
            >
              Roman Urdu
            </button>
            <button
              onClick={() => setLanguage('ur')}
              className={`px-2.5 py-1 rounded-lg transition-all text-xs font-bold font-urdu cursor-pointer ${
                language === 'ur'
                  ? 'bg-[#80eaa9] text-[#012618] shadow-xs'
                  : 'text-emerald-300/80 hover:text-white'
              }`}
            >
              اردو
            </button>
          </div>

          {/* Open Access Badge (No Login Required) */}
          <div className="hidden sm:flex items-center space-x-2 bg-[#021810] border border-emerald-500/30 text-[#80eaa9] px-3 py-1.5 rounded-xl shadow-xs text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-[#80eaa9] shrink-0" />
            <div className="leading-tight">
              <span className="block text-[10px] text-emerald-300/80 uppercase font-mono">OPEN PUBLIC PORTAL</span>
              <span className="text-[11px] text-white">Free Access for All</span>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};

