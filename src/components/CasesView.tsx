import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NavigationTab, CaseHistoryItem } from '../types';
import { 
  Search, 
  Filter, 
  Eye, 
  Download, 
  MoreVertical, 
  Upload, 
  FilePlus2, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Building2,
  FolderKanban,
  Scale
} from 'lucide-react';

interface CasesViewProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const CasesView: React.FC<CasesViewProps> = ({ setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const cases: CaseHistoryItem[] = [
    {
      id: '1',
      dateFiled: 'Oct 24, 2026',
      caseTitle: 'Zia v. Federation of Pakistan (Writ Petition)',
      category: 'HIGH COURT SINDH • CONSTITUTIONAL ART 199',
      reference: 'CP-2026-8821',
      status: 'Filed'
    },
    {
      id: '2',
      dateFiled: 'Sep 12, 2026',
      caseTitle: 'Property Dispute: Plot 45-B DHA Lahore',
      category: 'CIVIL PLAINT • SECTION 9 CPC',
      reference: 'LHR-2026-AI782',
      status: 'Draft'
    },
    {
      id: '3',
      dateFiled: 'Aug 05, 2026',
      caseTitle: 'Pre-Arrest Bail: State v. Malik Arshad',
      category: 'CRIMINAL • SEC 497 CrPC / PPC 420',
      reference: 'FIR-772-2026',
      status: 'Closed'
    },
    {
      id: '4',
      dateFiled: 'Jul 18, 2026',
      caseTitle: 'Employment Appeal: Karachi Port Trust Authority',
      category: 'LABOUR COURT • SERVICE TRIBUNAL',
      reference: 'KPT-2026-302',
      status: 'Filed'
    }
  ];

  const filteredCases = cases.filter(c => {
    const matchesSearch = c.caseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      
      {/* Header with Visual Banner */}
      <div className="relative bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#d4af37] shadow-xl overflow-hidden">
        <img 
          src="/src/assets/images/supreme_court_pakistan_1784922968648.jpg"
          alt="Case Archive"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <FolderKanban className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                JUDICIAL ARCHIVE • محفوظ شدہ مقدمات
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              My Cases & Document Vault / میرے مقدمات
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-2xl font-medium">
              Manage your archival court filings, legal research drafts, and certified High Court petitions in one secure place.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('intake')}
            className="bg-amber-400 hover:bg-amber-300 text-[#012618] font-black px-5 py-3 rounded-2xl flex items-center space-x-2 text-xs shadow-lg transition-all shrink-0 cursor-pointer"
          >
            <Upload className="w-4 h-4 text-[#012618]" />
            <span>Upload New Evidence File</span>
          </motion.button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-gradient-to-b from-[#012618] to-[#043d28] text-white p-6 rounded-3xl border-2 border-[#d4af37] shadow-lg space-y-2">
          <p className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest">
            TOTAL FILED CASES / کل مقدمات
          </p>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white">124</span>
            <span className="text-xs text-emerald-300 font-bold">Verified Archival Records</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm space-y-2">
          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            ACTIVE REVIEW STAGE
          </p>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900">08</span>
            <span className="text-xs text-amber-600 font-extrabold">Awaiting High Court Hearing</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm space-y-2">
          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            CERTIFIED PETITION DRAFTS
          </p>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900">54</span>
            <span className="text-xs text-emerald-800 font-bold flex items-center space-x-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Court Formats Verified</span>
            </span>
          </div>
        </div>

      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, FIR number, or PPC section..."
            className="w-full text-xs pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 font-bold focus:bg-white focus:ring-2 focus:ring-[#012618] outline-hidden transition-all"
          />
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto text-xs">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-3 bg-slate-50 border-2 border-slate-200 rounded-2xl font-bold text-slate-800 focus:outline-hidden cursor-pointer"
          >
            <option value="All">All Case Statuses</option>
            <option value="Filed">Filed (زیرِ سماعت)</option>
            <option value="Draft">Draft (تیار شدہ)</option>
            <option value="Closed">Closed (ختم شدہ)</option>
          </select>

          <button className="p-3 bg-[#012618] text-amber-300 rounded-2xl shadow-md border border-amber-400/30 font-bold">
            <Filter className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>

      {/* Case Table */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            
            <thead className="bg-slate-100 border-b-2 border-slate-200 text-slate-600 font-mono font-black uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Date Filed</th>
                <th className="px-6 py-4">Case Title & Reference</th>
                <th className="px-6 py-4">Category / Jurisdiction</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredCases.map((item) => (
                <tr key={item.id} className="hover:bg-amber-50/40 transition-all">
                  <td className="px-6 py-4 font-mono font-bold text-slate-500 text-[11px]">
                    {item.dateFiled}
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-extrabold text-slate-900 text-xs">
                      {item.caseTitle}
                    </p>
                    <span className="text-[10px] font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded mt-0.5 inline-block">
                      {item.reference}
                    </span>
                  </td>

                  <td className="px-6 py-4 font-bold text-slate-600 text-[11px]">
                    {item.category}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-xl text-[11px] font-black inline-block border ${
                        item.status === 'Filed'
                          ? 'bg-emerald-100 text-[#012618] border-emerald-300'
                          : item.status === 'Draft'
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-slate-200 text-slate-800 border-slate-300'
                      }`}
                    >
                      • {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 text-slate-500">
                      <button 
                        onClick={() => setActiveTab('petition')}
                        className="p-2 hover:bg-amber-100 text-[#012618] rounded-xl transition-all cursor-pointer font-bold border border-amber-300/60"
                        title="View Petition Draft"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                        title="Download Document"
                      >
                        <Download className="w-4 h-4 text-slate-700" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};

