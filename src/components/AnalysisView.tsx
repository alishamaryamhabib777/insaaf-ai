import React from 'react';
import { LegalAnalysisResult, AppLanguage } from '../types';
import { 
  ShieldAlert, 
  BookOpen, 
  CheckSquare, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Languages, 
  Building, 
  Download,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface AnalysisViewProps {
  result: LegalAnalysisResult;
  onGeneratePetition: () => void;
  language: AppLanguage;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({
  result,
  onGeneratePetition,
  language
}) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#0a3d2a] mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>CASE REFERENCE: {result.caseId}</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Case Analysis & Legal Classification
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Analysis completed • Status: <span className="font-bold text-[#0a3d2a]">{result.riskLevel}</span>
          </p>
        </div>

        <button
          onClick={onGeneratePetition}
          className="bg-[#0a3d2a] hover:bg-[#0e4d36] text-white font-bold px-5 py-2.5 rounded-xl flex items-center space-x-2 text-xs shadow-md transition-all shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[#80eaa9]" />
          <span>Generate Petition Draft</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Case Summary Bar */}
      <div className="bg-emerald-50/60 border border-emerald-200 p-5 rounded-2xl">
        <h2 className="text-xs font-bold text-[#0a3d2a] uppercase tracking-wider mb-1 flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-[#0a3d2a]" />
          <span>Case Executive Summary</span>
        </h2>
        <p className="text-xs text-slate-800 leading-relaxed font-medium">
          {result.caseSummary}
        </p>
      </div>

      {/* Top 2 Columns: Cognizable Risk Gauge / Detected PPC Violations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Risk Gauge Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center text-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
            Cognizable Risk
          </span>

          {/* Radial meter mockup */}
          <div className="relative w-36 h-36 flex items-center justify-center my-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#0a3d2a]"
                strokeDasharray={`${result.cognizableRisk}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-2xl font-extrabold text-[#0a3d2a]">
                {result.cognizableRisk}%
              </span>
              <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-tight">
                {result.riskLevel}
              </p>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed mt-2">
            {result.riskExplanation}
          </p>
        </div>

        {/* Detected PPC Violations Card */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            Detected Statutory Offences & Penal Code Mapping
          </span>

          <div className="space-y-3">
            {result.ppcLawSections.map((law, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50 transition-all"
              >
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="px-2.5 py-0.5 bg-[#0a3d2a] text-[#80eaa9] text-xs font-bold rounded-md font-mono">
                    {law.section}
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {law.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {law.explanation}
                </p>
                {law.punishment && (
                  <p className="text-[11px] font-bold text-[#012618] bg-emerald-100/80 inline-block px-2 py-0.5 rounded border border-emerald-300">
                    Punishment: {law.punishment}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Middle 2 Columns: Key Legal Precedents & Recommended Procedural Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Precedents Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-[#0a3d2a]" />
            <h3 className="text-sm font-bold text-slate-900">
              Key Supreme Court Precedents
            </h3>
          </div>

          <div className="space-y-4">
            {result.precedents.map((prec, idx) => (
              <div key={idx} className="pl-3 border-l-2 border-[#0a3d2a] space-y-1">
                <span className="text-xs font-mono font-bold text-[#0a3d2a]">
                  {prec.citation}
                </span>
                <p className="text-xs font-bold text-slate-800">
                  {prec.title}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prec.principle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Steps Card */}
        <div className="bg-[#042016] text-white p-6 rounded-2xl border border-[#0d422e] shadow-md space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-[#0d422e]">
            <CheckSquare className="w-5 h-5 text-[#80eaa9]" />
            <h3 className="text-sm font-bold text-[#80eaa9]">
              Recommended Procedural Steps
            </h3>
          </div>

          <div className="space-y-3">
            {result.proceduralSteps.map((step, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#0a3d2a] border border-[#217554] text-[#80eaa9] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-emerald-100/90 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Roman Urdu Accessibility Section */}
      {result.romanUrduTranslation && (
        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center space-x-2 text-[#80eaa9]">
            <Languages className="w-5 h-5" />
            <h3 className="text-xs font-bold uppercase tracking-wider">
              Aasan Urdu / Roman Urdu Guidance (عام شہری کے لیے رہنمائی)
            </h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {result.romanUrduTranslation.summary}
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-200">
            {result.romanUrduTranslation.steps.map((st, i) => (
              <div key={i} className="flex items-center space-x-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#80eaa9] shrink-0" />
                <span>{st}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Verification Core Footer Banner */}
      <div className="bg-gradient-to-r from-[#042016] to-[#083a27] p-5 rounded-2xl text-white flex items-center space-x-4 border border-[#0d422e]">
        <div className="w-10 h-10 rounded-xl bg-[#0e4d36] text-[#80eaa9] flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#80eaa9]">
            InsaafAI Verification Core
          </h4>
          <p className="text-[11px] text-emerald-200/80">
            Cross-referencing 50,000+ past judgments and statutory regulations under Constitutional Framework of Pakistan.
          </p>
        </div>
      </div>

    </div>
  );
};
