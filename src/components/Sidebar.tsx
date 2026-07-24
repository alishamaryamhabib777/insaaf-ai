import React from 'react';
import { NavigationTab } from '../types';
import { 
  Home, 
  FolderKanban, 
  FileText, 
  Sparkles, 
  Settings, 
  HelpCircle, 
  LogOut,
  Building2,
  FilePlus2
} from 'lucide-react';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onLogout
}) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between shrink-0 shadow-xs">
      <div>
        {/* Portal Header */}
        <div className="bg-[#f2faf5] border border-[#c3eed7] rounded-xl p-3 mb-6 flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-[#0a3d2a] text-[#80eaa9] flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#083625] uppercase tracking-wider">
              Case Manager
            </h3>
            <p className="text-[11px] text-emerald-700 font-medium">
              Supreme Court Portal
            </p>
          </div>
        </div>

        {/* Start New Complaint Banner Button */}
        <button
          onClick={() => setActiveTab('intake')}
          className="w-full mb-6 bg-[#0a3d2a] hover:bg-[#0e4d36] text-white font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all text-xs"
        >
          <FilePlus2 className="w-4 h-4 text-[#80eaa9]" />
          <span>+ Start New Complaint</span>
        </button>

        {/* Navigation Section */}
        <div className="space-y-1">
          <p className="px-3 text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">
            Main Menu
          </p>

          <button
            onClick={() => setActiveTab('home')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'home'
                ? 'bg-[#0a3d2a] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home className={`w-4 h-4 ${activeTab === 'home' ? 'text-[#80eaa9]' : 'text-slate-400'}`} />
            <span>Home</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#0a3d2a] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FolderKanban className={`w-4 h-4 ${activeTab === 'dashboard' ? 'text-[#80eaa9]' : 'text-slate-400'}`} />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('cases')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'cases'
                ? 'bg-[#0a3d2a] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FolderKanban className={`w-4 h-4 ${activeTab === 'cases' ? 'text-[#80eaa9]' : 'text-slate-400'}`} />
            <span>My Cases</span>
          </button>

          <button
            onClick={() => setActiveTab('petition')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'petition'
                ? 'bg-[#0a3d2a] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeTab === 'petition' ? 'text-[#80eaa9]' : 'text-slate-400'}`} />
            <span>Documents & Drafts</span>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'chat'
                ? 'bg-[#0a3d2a] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${activeTab === 'chat' ? 'text-[#80eaa9]' : 'text-slate-400'}`} />
            <span>AI Legal Research</span>
          </button>

          <button
            onClick={() => setActiveTab('intake')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'intake' || activeTab === 'analysis'
                ? 'bg-[#0a3d2a] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FilePlus2 className={`w-4 h-4 ${activeTab === 'intake' || activeTab === 'analysis' ? 'text-[#80eaa9]' : 'text-slate-400'}`} />
            <span>Submit Intake</span>
          </button>
        </div>

        {/* History Quick Nav */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="px-3 text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">
            Recent Research
          </p>
          <div className="space-y-1 text-xs">
            <div 
              onClick={() => setActiveTab('chat')}
              className="px-3 py-1.5 text-slate-600 hover:text-[#0a3d2a] hover:bg-emerald-50 rounded cursor-pointer truncate font-medium"
            >
              • PPC Section 302 Analysis
            </div>
            <div 
              onClick={() => setActiveTab('chat')}
              className="px-3 py-1.5 text-slate-600 hover:text-[#0a3d2a] hover:bg-emerald-50 rounded cursor-pointer truncate font-medium"
            >
              • Inheritance Law Punjab
            </div>
            <div 
              onClick={() => setActiveTab('chat')}
              className="px-3 py-1.5 text-slate-600 hover:text-[#0a3d2a] hover:bg-emerald-50 rounded cursor-pointer truncate font-medium"
            >
              • Property Registration Fee
            </div>
          </div>
        </div>
      </div>

      {/* Footer System Actions */}
      <div className="pt-4 border-t border-slate-200 space-y-1">
        <button
          onClick={() => setActiveTab('home')}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all"
        >
          <HelpCircle className="w-4 h-4 text-slate-400" />
          <span>Help & Compliance</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-4 h-4 text-red-500" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
