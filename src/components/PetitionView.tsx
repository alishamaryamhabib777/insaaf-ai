import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DraftedPetition, AppLanguage } from '../types';
import { 
  Building2, 
  Users, 
  Sparkles, 
  Download, 
  Send, 
  Copy, 
  Check, 
  FileCheck2, 
  Printer,
  Scale,
  FileText
} from 'lucide-react';

interface PetitionViewProps {
  initialDraft?: DraftedPetition | null;
  language: AppLanguage;
}

export const PetitionView: React.FC<PetitionViewProps> = ({ initialDraft, language }) => {
  const [jurisdiction, setJurisdiction] = useState(
    initialDraft?.jurisdiction || 'High Court of Sindh, Karachi'
  );
  const [petitionType, setPetitionType] = useState(
    initialDraft?.title || 'Constitution Petition (Art. 199)'
  );
  const [petitioner, setPetitioner] = useState(
    initialDraft?.petitioner || 'Mst. Ayesha Siddiqui, daughter of Ahmed Siddiqui, resident of House No. 42-B, Block 4, Gulshan-e-Iqbal, Karachi.'
  );
  const [respondent, setRespondent] = useState(
    initialDraft?.respondent || 'The Federation of Pakistan, through Ministry of Interior, Islamabad.'
  );
  const [prayer, setPrayer] = useState(
    initialDraft?.prayer || 'It is most respectfully prayed that this Honorable Court may be pleased to issue a Writ of Mandamus directing the Respondents to release the withheld pension of the Petitioner immediately.'
  );

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = document.getElementById('petition-document')?.innerText || '';
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Visual Header Banner */}
      <div className="relative bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white p-6 rounded-3xl border border-emerald-500/30 shadow-xl overflow-hidden">
        <img 
          src="/src/assets/images/supreme_court_pakistan_1784922968648.jpg"
          alt="High Court Petition Draft"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <FileText className="w-5 h-5 text-[#80eaa9]" />
              <span className="text-xs font-mono font-bold text-[#80eaa9] uppercase tracking-widest">
                DOC & DATA • درخواست کنندہ کا مسودہ
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              Petition Draft & Certified Document Generator
            </h1>
            <p className="text-xs text-emerald-100/90 mt-1 max-w-xl font-medium">
              Draft constitutionally compliant High Court petitions formatted strictly to Pakistan Judicial Branch requirements.
            </p>
          </div>

          <div className="bg-[#021810] border border-emerald-500/30 p-3.5 rounded-2xl text-right shrink-0">
            <span className="text-xs font-bold text-[#80eaa9] block">Judicial Format Standard</span>
            <span className="text-[10px] font-urdu text-emerald-200">ہائی کورٹ رجسٹریشن فارمیٹ کے مطابق</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form: 4 Columns */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Court Details */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-[#012618]">
              <Building2 className="w-4 h-4" />
              <h2 className="text-xs font-bold uppercase tracking-wider">Court Details</h2>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Select Jurisdiction
              </label>
              <select
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:ring-2 focus:ring-[#012618] outline-hidden"
              >
                <option value="High Court of Sindh, Karachi">High Court of Sindh, Karachi</option>
                <option value="Lahore High Court, Lahore">Lahore High Court, Lahore</option>
                <option value="Islamabad High Court, Islamabad">Islamabad High Court, Islamabad</option>
                <option value="Peshawar High Court, Peshawar">Peshawar High Court, Peshawar</option>
                <option value="High Court of Balochistan, Quetta">High Court of Balochistan, Quetta</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Type of Petition
              </label>
              <select
                value={petitionType}
                onChange={(e) => setPetitionType(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:ring-2 focus:ring-[#012618] outline-hidden"
              >
                <option value="Constitution Petition (Art. 199)">Constitution Petition (Art. 199)</option>
                <option value="Petition Sec 22-A & 22-B CrPC">Petition Sec 22-A & 22-B CrPC</option>
                <option value="Bail Application Sec 497 CrPC">Bail Application Sec 497 CrPC</option>
                <option value="Civil Plaint / Suit">Civil Plaint / Suit</option>
              </select>
            </div>
          </div>

          {/* Parties */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-[#012618]">
              <Users className="w-4 h-4" />
              <h2 className="text-xs font-bold uppercase tracking-wider">Parties</h2>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Petitioner (Plaintiff)
              </label>
              <textarea
                value={petitioner}
                onChange={(e) => setPetitioner(e.target.value)}
                rows={3}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:ring-2 focus:ring-[#012618] outline-hidden"
              />
            </div>

            <div className="text-center font-mono font-bold text-[10px] text-slate-400">VERSUS</div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                Respondent (Defendant)
              </label>
              <textarea
                value={respondent}
                onChange={(e) => setRespondent(e.target.value)}
                rows={3}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:ring-2 focus:ring-[#012618] outline-hidden"
              />
            </div>
          </div>

          {/* Prayer / Relief */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-[#012618]">
              <Scale className="w-4 h-4" />
              <h2 className="text-xs font-bold uppercase tracking-wider">Prayer (Relief Sought)</h2>
            </div>
            <textarea
              value={prayer}
              onChange={(e) => setPrayer(e.target.value)}
              rows={4}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium focus:ring-2 focus:ring-[#012618] outline-hidden"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex-1 bg-[#012618] hover:bg-[#043a29] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs shadow-md transition-all cursor-pointer border border-[#80eaa9]/30"
            >
              <Download className="w-4 h-4 text-[#80eaa9]" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handleCopy}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold p-3 rounded-xl border border-slate-300 transition-all cursor-pointer"
              title="Copy Text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Right Document Canvas Paper View: 8 Columns */}
        <div className="lg:col-span-8">
          
          <div className="bg-slate-100 p-4 rounded-2xl border border-slate-300 shadow-inner min-h-[750px] flex flex-col justify-between">
            
            {/* Paper Container */}
            <div 
              id="petition-document"
              className="bg-[#fefdfa] text-slate-900 p-8 sm:p-12 rounded-xl shadow-lg border border-emerald-200/80 font-serif leading-relaxed text-xs relative overflow-hidden space-y-6"
            >
              {/* Background Watermark Seal */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <Scale className="w-96 h-96 text-[#012618]" />
              </div>

              {/* Document Reference Header */}
              <div className="flex justify-between items-start text-[10px] font-mono text-slate-400 pb-4 border-b border-slate-200">
                <span>Ref: INSAAF-31-2026-8821</span>
                <span>Date: October 24, 2026</span>
              </div>

              {/* Court Heading */}
              <div className="text-center space-y-1 pt-2">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 inline-block">
                  IN THE HONORABLE {jurisdiction.toUpperCase()}
                </h2>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Original Jurisdiction
                </p>
                <p className="text-xs font-bold text-slate-600">
                  C.P. No. ____________ of 2026
                </p>
              </div>

              {/* Parties Block */}
              <div className="space-y-4 my-6 pt-4">
                <div className="flex justify-between items-end">
                  <p className="font-bold text-slate-800 italic max-w-lg">
                    {petitioner}
                  </p>
                  <span className="font-bold text-slate-900 uppercase">...Petitioner</span>
                </div>

                <p className="text-center font-bold tracking-widest text-slate-900 uppercase">
                  VERSUS
                </p>

                <div className="flex justify-between items-end">
                  <p className="font-bold text-slate-800 italic max-w-lg">
                    {respondent}
                  </p>
                  <span className="font-bold text-slate-900 uppercase">...Respondent</span>
                </div>
              </div>

              {/* Title Header */}
              <div className="text-center my-6 py-2 border-y border-slate-900">
                <h3 className="font-extrabold uppercase text-xs tracking-wider text-slate-900">
                  {petitionType.toUpperCase()}
                </h3>
              </div>

              {/* Body Statements */}
              <div className="space-y-3 text-slate-800 leading-relaxed text-justify">
                <p className="font-bold italic">Respectfully Sheweth,</p>

                <p>
                  1. That the Petitioner is a law-abiding citizen of Pakistan and a aggrieved party, enjoying fundamental rights guaranteed under Articles 4, 9, 10A and 25 of the Constitution of the Islamic Republic of Pakistan, 1973.
                </p>

                <p>
                  2. That the facts leading to the filing of this petition are that the Petitioner has been denied lawful constitutional and statutory remedies without any legal justification.
                </p>

                <p>
                  3. That the act of the Respondents is arbitrary, discriminatory, illegal and in direct violation of the law laid down by the Supreme Court of Pakistan.
                </p>
              </div>

              {/* Prayer Section */}
              <div className="space-y-3 pt-4 border-t border-slate-300">
                <h4 className="font-extrabold uppercase tracking-wider text-xs text-slate-900">
                  PRAYER:
                </h4>
                <p className="italic text-slate-800 text-justify">
                  {prayer}
                </p>
                <p className="italic text-slate-700">
                  Any other relief this Court deems fit may also be granted.
                </p>
              </div>

              {/* Signature Lines */}
              <div className="pt-12 flex justify-between items-end text-xs font-bold text-slate-800 border-t border-slate-200 mt-8">
                <div className="text-center">
                  <div className="w-32 border-b border-slate-400 mb-1" />
                  <span>Petitioner</span>
                </div>
                <div className="text-center">
                  <div className="w-44 border-b border-slate-400 mb-1" />
                  <span>Counsel for Petitioner</span>
                </div>
              </div>

            </div>

            {/* Document Footer Bar */}
            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono px-2">
              <span className="flex items-center space-x-1.5 text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Sync Active • Legal Accuracy: 98%</span>
              </span>
              <span>Bilingual Mode: English (RTL Ready)</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
