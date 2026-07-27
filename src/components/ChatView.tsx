=import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, AppLanguage } from '../types';
import { 
  Sparkles, 
  Send, 
  BookOpen, 
  User, 
  Loader2 
} from 'lucide-react';

interface ChatViewProps {
  language: AppLanguage;
}

export const ChatView: React.FC<ChatViewProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'As-salamu Alaykum! How may I assist you today with Pakistan Penal Code (PPC), Criminal Procedure (CrPC), or High Court petition research?',
      time: '10:47 AM'
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const quickPrompts = [
    "Definition of Fraud & Cheating (PPC 420)",
    "Pre-Arrest Bail Procedure in CrPC 497",
    "Illegal Dispossession Act 2005 Procedure",
    "Constitutional Writ Petition (Article 199)",
    "Land Theft & Breach of Trust (PPC 406)"
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Send request to your Express server endpoint instead of SDK client-side
      const res = await fetch('/api/legal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          complaint: query,
          jurisdiction: "High Court of Sindh, Karachi"
        })
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setIsLoading(false);

      // Build AI response text from server payload
      const responseText = data.caseSummary || data.text || "No legal analysis generated.";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        legalBasis: data.ppcLawSections?.[0]?.section || 'Pakistan Penal Code & Supreme Court Precedents'
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setIsLoading(false);

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: `⚠️ Error: ${err?.message || "An error occurred while connecting to the legal database."}`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6 flex flex-col min-h-[calc(100vh-6rem)]">
      
      {/* Visual Header Banner */}
      <div className="relative bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white p-6 rounded-3xl border-2 border-[#d4af37] shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                AI LEGAL RESEARCH ENGINE • قانونی تحقیقی معاون
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              AI Legal Assistant & Precedent Lookup
            </h1>
            <p className="text-xs text-emerald-100/90 mt-1 max-w-xl font-medium">
              Instant statutory lookup across PPC, CrPC, CPC, and Supreme Court of Pakistan judgment archives.
            </p>
          </div>

          <div className="bg-[#021810] border border-amber-400/40 p-3 rounded-2xl text-right shrink-0">
            <span className="text-xs font-bold text-amber-300 block">30,000+ PPC Citations</span>
            <span className="text-[10px] font-urdu text-emerald-200">کیس لا اور قانونی نظائر کا ڈیٹا بیس</span>
          </div>
        </div>
      </div>

      {/* Quick Prompt Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-extrabold text-slate-700 font-mono uppercase tracking-wider">
          Suggested Queries:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3.5 py-1.5 bg-white hover:bg-amber-50 border-2 border-slate-200 hover:border-amber-400 rounded-2xl text-xs font-extrabold text-slate-800 shadow-xs transition-all cursor-pointer flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-900" />
            <span>{prompt}</span>
          </button>
        ))}
      </div>

      {/* Chat Messages Container */}
      <div className="flex-1 bg-slate-50/70 p-5 rounded-3xl border-2 border-slate-200 space-y-4 overflow-y-auto max-h-[500px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            {/* Sender Label */}
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500 mb-1 px-1">
              {msg.sender === 'ai' ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
                  <span className="font-extrabold text-[#012618]">MUNSIF.AI LEGAL ADVISOR</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-slate-600" />
                  <span className="font-bold text-slate-700">CITIZEN INQUIRY</span>
                </>
              )}
              <span>• {msg.time}</span>
            </div>

            {/* Bubble */}
            <div
              className={`max-w-2xl p-5 rounded-3xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#012618] text-white rounded-br-none shadow-md font-medium'
                  : 'bg-white text-slate-900 border-2 border-slate-200 shadow-sm rounded-bl-none space-y-3 font-medium'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>

              {/* Legal Basis Sub-Card if AI */}
              {msg.sender === 'ai' && msg.legalBasis && !msg.text.startsWith("⚠️") && (
                <div className="space-y-2 pt-1">
                  <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-300 text-[11px] text-[#012618]">
                    <div className="flex items-center space-x-1.5 font-extrabold mb-1 text-amber-950">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>Statutory Authority: {msg.legalBasis}</span>
                    </div>
                    <p className="text-slate-700 text-[10px] font-medium leading-normal">
                      Cross-referenced with Official Gazette of Pakistan & Law Commission Reports.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center space-x-2 text-xs font-bold text-[#012618] bg-amber-100 p-4 rounded-2xl border border-amber-300 w-fit shadow-xs">
            <Loader2 className="w-4 h-4 animate-spin text-[#012618]" />
            <span>Searching Pakistan Law Library & PPC Precedents...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-3 rounded-3xl border-2 border-slate-300 shadow-lg space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask legal query (e.g., How to apply for pre-arrest bail under Section 497 CrPC?)..."
            className="flex-1 text-xs p-3 text-slate-900 font-bold focus:outline-hidden"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="bg-amber-400 hover:bg-amber-300 disabled:bg-slate-300 text-[#012618] font-black p-3.5 rounded-2xl transition-all shadow-md cursor-pointer flex items-center space-x-1"
          >
            <span>Ask</span>
            <Send className="w-4 h-4 text-[#012618]" />
          </button>
        </div>

        <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono font-bold pt-1 border-t border-slate-200 px-2">
          <span>PRECISION MODE: PPC STATUTES + SUPREME COURT PRECEDENTS</span>
          <span>حکومتِ پاکستان قانونی پورٹل</span>
        </div>
      </div>

    </div>
  );
};