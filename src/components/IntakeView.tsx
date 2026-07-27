import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LegalAnalysisResult, AppLanguage } from '../types';
import { 
  FileText, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Loader2, 
  Paperclip, 
  Trash2, 
  ShieldCheck, 
  FileCheck,
  Scale,
  ArrowRight,
  Building2,
  BookOpen
} from 'lucide-react';

interface IntakeViewProps {
  onAnalysisComplete: (result: LegalAnalysisResult) => void;
  language: AppLanguage;
  onConsultAi: () => void;
}

export const IntakeView: React.FC<IntakeViewProps> = ({
  onAnalysisComplete,
  language,
  onConsultAi
}) => {
  const [englishText, setEnglishText] = useState('');
  const [urduText, setUrduText] = useState('');
  const [jurisdiction, setJurisdiction] = useState('High Court of Sindh, Karachi');
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; size: string; date: string }>>([
    { name: 'FIR_772_Lahore.pdf', size: '2.4 MB', date: 'Uploaded 2 mins ago' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFile = e.target.files[0];
      setUploadedFiles(prev => [
        ...prev,
        {
          name: newFile.name,
          size: `${(newFile.size / (1024 * 1024)).toFixed(1)} MB`,
          date: 'Uploaded just now'
        }
      ]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handlePresetSample = () => {
    setEnglishText(
      "On June 15th, I entered into a property purchase contract for Plot 45-B DHA Lahore. I transferred Rs. 4,500,000 to the seller via bank wire. However, the seller failed to transfer ownership, forged title documents, and has now illegally occupied the property with armed guards. The local police station SHO refused to register my FIR under Section 154 CrPC."
    );
    setUrduText(
      "مورخہ 15 جون کو میں نے پلاٹ 45-B DHA میں خریدا اور 45 لاکھ روپے بینک کے ذریعے منتقل کیے۔ لیکن فروخت کنندہ نے ملکیت منتقل کرنے کے بجائے جعلی دستاویزات بنائیں اور قبضہ کر لیا۔ پولیس نے FIR درج کرنے سے انکار کر دیا۔"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!englishText.trim() && !urduText.trim()) {
      setErrorMsg("Please describe your incident or grievance in English, Roman Urdu, or Urdu / براہ کرم اپنی شکایت تحریر کریں۔");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/legal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          complaint: englishText,
          urduComplaint: urduText,
          jurisdiction,
          language
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const result: LegalAnalysisResult = await response.json();
      setIsLoading(false);
      onAnalysisComplete(result);
    } catch (err: any) {
      console.error("Failed to submit legal grievance:", err);
      setErrorMsg("Error analyzing complaint. Please check your network connection and try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Intake Step Header */}
      <div className="bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white p-6 rounded-3xl border border-emerald-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Building2 className="w-5 h-5 text-[#80eaa9]" />
            <span className="text-xs font-mono font-bold text-[#80eaa9] uppercase tracking-widest">
              LEGAL INTAKE PORTAL • شکایت درج کرانے کی سہولت
            </span>
          </div>
          <h1 className="text-2xl font-black text-white">
            Submit Citizen Complaint / عمومی شکایت درج کریں
          </h1>
          <p className="text-xs text-emerald-200/90 mt-1 max-w-2xl">
            Provide the details of your incident. Munsif.ai will map relevant Pakistan Penal Code (PPC) laws and draft court-ready petitions.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center space-x-2 text-xs font-bold self-start md:self-auto bg-[#021810] p-2 rounded-2xl border border-emerald-500/30">
          <div className="flex items-center space-x-1.5 bg-[#80eaa9] text-[#012618] px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="w-4 h-4 rounded-full bg-[#012618] text-[#80eaa9] flex items-center justify-center font-bold text-[10px]">1</span>
            <span>1. Intake / تفسیلات</span>
          </div>
          <span className="text-emerald-500">•</span>
          <div className="flex items-center space-x-1.5 text-emerald-300/70 px-3 py-1.5">
            <span className="w-4 h-4 rounded-full bg-[#04281b] text-emerald-400 flex items-center justify-center font-bold text-[10px]">2</span>
            <span>2. PPC Analysis</span>
          </div>
          <span className="text-emerald-500">•</span>
          <div className="flex items-center space-x-1.5 text-emerald-300/70 px-3 py-1.5">
            <span className="w-4 h-4 rounded-full bg-[#04281b] text-emerald-400 flex items-center justify-center font-bold text-[10px]">3</span>
            <span>3. Petition Draft</span>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-300 rounded-2xl flex items-center space-x-3 text-red-800 text-xs font-bold">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Grid: Left Side-by-Side Text Inputs / Right Court Guidance */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Columns: Side-by-Side Dual Language Inputs */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Incident Description Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#012618] flex items-center justify-center font-bold border border-emerald-300">
                  <FileText className="w-5 h-5 text-[#012618]" />
                </div>
                <div>
                  <h2 className="text-sm font-extrabold text-slate-900">
                    Grievance Description / شکایت کا متن
                  </h2>
                  <p className="text-[11px] text-slate-500">Provide details in English, Roman Urdu, or Urdu</p>
                </div>
              </div>
              
              <button
                type="button"
                onClick={handlePresetSample}
                className="text-xs font-extrabold text-[#012618] bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-xs flex items-center space-x-1 border border-emerald-300"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Load Sample FIR Complaint</span>
              </button>
            </div>

            {/* Select Jurisdiction */}
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                Select High Court Jurisdiction / متعلقہ عدالتِ عالیہ منتخب کریں
              </label>
              <select
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 focus:ring-2 focus:ring-[#012618] focus:bg-white transition-all outline-hidden cursor-pointer"
              >
                <option value="High Court of Sindh, Karachi">High Court of Sindh, Karachi (سندھ ہائی کورٹ)</option>
                <option value="Lahore High Court, Lahore">Lahore High Court, Lahore (لاہور ہائی کورٹ)</option>
                <option value="Islamabad High Court, Islamabad">Islamabad High Court, Islamabad (اسلام آباد ہائی کورٹ)</option>
                <option value="Peshawar High Court, Peshawar">Peshawar High Court, Peshawar (پشاور ہائی کورٹ)</option>
                <option value="High Court of Balochistan, Quetta">High Court of Balochistan, Quetta (بلوچستان ہائی کورٹ)</option>
              </select>
            </div>

            {/* Side-by-Side Inputs: Left English, Right Urdu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* English / Roman Urdu Input Box */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-slate-800">
                    English / Roman Urdu
                  </label>
                  <span className="text-[10px] bg-emerald-100 text-[#012618] font-bold px-2 py-0.5 rounded border border-emerald-300">
                    Primary Text
                  </span>
                </div>
                <textarea
                  value={englishText}
                  onChange={(e) => setEnglishText(e.target.value)}
                  rows={8}
                  placeholder="Describe incident in detail (dates, locations, fraud amount, FIR refusal, SHO details)..."
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 font-medium focus:bg-white focus:ring-2 focus:ring-[#012618] focus:border-transparent outline-hidden transition-all leading-relaxed"
                />
              </div>

              {/* Urdu Input Box */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-slate-800 font-urdu">
                    اردو متن (Urdu Text)
                  </label>
                  <span className="text-[10px] bg-emerald-100 text-[#012618] font-bold px-2 py-0.5 rounded font-urdu border border-emerald-300">
                    اردو شکایت
                  </span>
                </div>
                <textarea
                  value={urduText}
                  onChange={(e) => setUrduText(e.target.value)}
                  rows={8}
                  dir="rtl"
                  placeholder="واقعہ کی مکمل تفصیل، تاریخ، رقم اور تھانے کا نام یہاں درج کریں..."
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 font-urdu focus:bg-white focus:ring-2 focus:ring-[#012618] focus:border-transparent outline-hidden transition-all leading-relaxed"
                />
              </div>

            </div>

          </div>

          {/* Supporting Documentation Drag & Drop Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 pb-3 border-b border-slate-200">
              <Paperclip className="w-5 h-5 text-[#012618]" />
              <h2 className="text-sm font-extrabold text-slate-900">
                Evidence & FIR Attachment / دستاویزات اور ثبوت
              </h2>
            </div>

            {/* Drag & Drop Zone */}
            <div className="border-2 border-dashed border-emerald-300 hover:border-[#012618] rounded-2xl p-6 text-center bg-emerald-50/40 hover:bg-emerald-50 transition-all cursor-pointer relative">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="w-12 h-12 rounded-2xl bg-[#042016] text-[#80eaa9] flex items-center justify-center mx-auto mb-3 shadow-md">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-xs font-black text-slate-900 mb-1">
                Drag & Drop FIR Copy, Bank Wires, or Property Deeds
              </p>
              <p className="text-[11px] text-slate-600 mb-3">
                Supported formats: PDF, PNG, JPG, Word • Max file size: 50MB
              </p>
              <span className="px-4 py-2 bg-white border border-slate-300 text-slate-800 font-extrabold rounded-xl text-xs shadow-xs hover:bg-slate-100 inline-block">
                Choose Files / فائل منتخب کریں
              </span>
            </div>

            {/* Uploaded File List */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2 pt-2">
                {uploadedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#012618] flex items-center justify-center">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{file.name}</p>
                        <p className="text-[10px] text-slate-500">{file.size} • {file.date}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right 4 Columns: Legal Guidance Side Panel & AI Actions */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Green Court Guidance Side Panel */}
          <div className="bg-gradient-to-b from-[#012618] to-[#043d28] text-white p-6 rounded-3xl border border-emerald-500/30 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 border-b border-emerald-800 pb-3">
              <Scale className="w-5 h-5 text-[#80eaa9]" />
              <div>
                <h3 className="text-sm font-extrabold text-[#80eaa9]">
                  Judicial Analysis Guide
                </h3>
                <p className="text-[10px] text-emerald-200 font-urdu">رہنمائی برائے قانونی کارروائی</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-xs text-emerald-100/90 leading-relaxed font-medium">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#80eaa9] shrink-0 mt-0.5" />
                <span>Specify transaction dates, bank wire numbers, and exact property details.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#80eaa9] shrink-0 mt-0.5" />
                <span>Mention SHO refusal details for Section 22-A / 22-B CrPC petition filing.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#80eaa9] shrink-0 mt-0.5" />
                <span>Specify Article 199 Fundamental Rights violations for High Court Writ.</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onConsultAi}
              className="w-full mt-2 bg-[#021810] hover:bg-[#063825] text-[#80eaa9] border border-emerald-500/40 font-extrabold py-3 px-4 rounded-2xl flex items-center justify-center space-x-2 text-xs transition-all cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#80eaa9]" />
              <span>Consult AI Legal Assistant</span>
            </button>
          </div>

          {/* Submit Intake Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Analyze Complaint / تجزئیہ کریں
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Munsif.ai will scan Pakistan Penal Code statutes and draft your petition.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#80eaa9] hover:bg-[#68d893] text-[#012618] font-black py-4 px-4 rounded-2xl flex items-center justify-center space-x-2 text-xs shadow-lg transition-all cursor-pointer border border-[#80eaa9]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#012618]" />
                  <span>Scanning PPC Statutes...</span>
                </>
              ) : (
                <>
                  <span>Run Legal AI Analysis</span>
                  <Sparkles className="w-4 h-4 text-[#012618]" />
                </>
              )}
            </motion.button>
          </div>

        </div>

      </form>

    </div>
  );
};

