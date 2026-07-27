import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, AppLanguage } from '../types';
import { 
  Sparkles, 
  Send, 
  BookOpen, 
  User, 
  Loader2, 
  Copy, 
  Check, 
  Trash2, 
  Scale, 
  ExternalLink,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';

interface ChatViewProps {
  language: AppLanguage;
}

export const ChatView: React.FC<ChatViewProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'As-salamu Alaykum! I am Munsif.ai, your dedicated Pakistani Judicial Assistant. How may I help you today with statutory research under the Pakistan Penal Code (PPC), Code of Criminal Procedure (CrPC), Code of Civil Procedure (CPC), or High Court writ petitions?',
      time: '10:47 AM',
      legalBasis: 'Official Gazette of Pakistan & Supreme Court Precedents Archive',
      sectionRef: 'Munsif.ai Legal Engine'
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Searching Pakistan Law Library...');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Loading animation message rotator
  useEffect(() => {
    if (!isLoading) return;
    const stages = [
      "Searching 30,000+ Pakistan Penal Code citations...",
      "Cross-referencing Supreme Court (SCMR & PLD) precedents...",
      "Validating CrPC procedural remedies under Section 154 & 22-A...",
      "Finalizing structured legal opinion..."
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % stages.length;
      setLoadingText(stages[idx]);
    }, 1800);
    return () => clearInterval(interval);
  }, [isLoading]);

  const categoryPrompts = [
    { label: "Cheating & Fraud (PPC 420)", text: "What is the procedure and punishment for Cheating and Fraud under Section 420 PPC?" },
    { label: "Cheque Bounce (PPC 489-F)", text: "How to file FIR for dishonoured cheque under Section 489-F PPC?" },
    { label: "Pre-Arrest Bail (CrPC 497/498)", text: "What are the legal requirements for getting pre-arrest bail under Section 498 CrPC?" },
    { label: "Illegal Qabza (IDA 2005)", text: "What is the summary procedure under Illegal Dispossession Act 2005 against land grabbers?" },
    { label: "Constitutional Writ (Art 199)", text: "When can I file a Constitutional Writ Petition under Article 199 in High Court?" },
    { label: "Family Law & Khula", text: "What is the Family Court procedure for Khula and child maintenance in Pakistan?" }
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

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Build sanitized conversation history
      const history = updatedMessages.map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history })
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setIsLoading(false);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.text || "No legal analysis generated.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        legalBasis: data.legalBasis || 'Pakistan Statutory & Case Law (PPC / CrPC)',
        sectionRef: data.sectionRef || 'Munsif.ai Engine',
        sources: data.sources || []
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
          text: `⚠️ Connection Notice: Relying on offline Pakistani statutory database.\n\n${err?.message || "An issue occurred connecting to live server."}`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          legalBasis: 'Pakistan Penal Code & Supreme Court Precedents'
        }
      ]);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'ai',
        text: 'Chat history reset. Ask any question on Pakistani statutes, criminal procedure, or court petitions.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-5 flex flex-col min-h-[calc(100vh-6rem)] font-sans">
      
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-[#012618] via-[#043d28] to-[#012618] text-white p-6 rounded-3xl border-2 border-[#d4af37] shadow-xl overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-mono font-extrabold text-amber-300 uppercase tracking-widest">
                MUNSIF.AI LEGAL COUNSEL • قانونی تحقیقی پورٹل
              </span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <Scale className="w-6 h-6 text-amber-400" />
              AI Legal Assistant & Statutory Lookup
            </h1>
            <p className="text-xs text-emerald-100/90 mt-1 max-w-xl font-medium leading-relaxed">
              Instant analysis grounded in Pakistan Penal Code (PPC), CrPC, CPC, Constitution 1973, and Supreme Court precedent archives.
            </p>
          </div>

          <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 shrink-0">
            <div className="bg-[#021810] border border-amber-400/40 px-3 py-2 rounded-2xl text-right">
              <span className="text-xs font-bold text-amber-300 block">30,000+ PPC Citations</span>
              <span className="text-[10px] text-emerald-200 font-bold">کیس لا اور قانونی نظائر</span>
            </div>

            <button
              onClick={handleClear}
              className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 rounded-xl text-[11px] font-bold transition-all cursor-pointer flex items-center space-x-1"
              title="Clear Conversation"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Quick Query Pills */}
      <div className="space-y-1.5">
        <div className="flex items-center space-x-1.5 px-1">
          <Zap className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider font-mono">
            Quick Statutory Topics:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {categoryPrompts.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(item.text)}
              disabled={isLoading}
              className="px-3 py-1.5 bg-white hover:bg-amber-50 border-2 border-slate-200 hover:border-amber-400 rounded-2xl text-xs font-extrabold text-slate-800 shadow-xs transition-all cursor-pointer disabled:opacity-50 flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="flex-1 bg-slate-50/80 p-4 sm:p-6 rounded-3xl border-2 border-slate-200 space-y-4 overflow-y-auto max-h-[520px] min-h-[350px]">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {/* Sender Label */}
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500 mb-1 px-1">
                {msg.sender === 'ai' ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
                    <span className="font-extrabold text-[#012618]">MUNSIF.AI ADVISOR</span>
                    {msg.sectionRef && (
                      <span className="px-1.5 py-0.5 bg-amber-100 text-amber-900 font-bold rounded-md border border-amber-300">
                        {msg.sectionRef}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5 text-slate-600" />
                    <span className="font-bold text-slate-700">CITIZEN QUERY</span>
                  </>
                )}
                <span>• {msg.time}</span>
              </div>

              {/* Message Bubble */}
              <div
                className={`group relative max-w-2xl p-5 rounded-3xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#012618] text-white rounded-br-none shadow-md font-medium'
                    : 'bg-white text-slate-900 border-2 border-slate-200 shadow-sm rounded-bl-none space-y-3 font-medium'
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>

                {/* Statutory Basis Sub-Card */}
                {msg.sender === 'ai' && msg.legalBasis && !msg.text.startsWith("⚠️") && (
                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                    <div className="p-3 bg-amber-50/90 rounded-2xl border border-amber-300/80 text-[11px] text-[#012618]">
                      <div className="flex items-center justify-between font-extrabold text-amber-950 mb-0.5">
                        <div className="flex items-center space-x-1.5">
                          <BookOpen className="w-4 h-4 text-amber-700" />
                          <span>Statutory Authority & Citation</span>
                        </div>
                        <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      </div>
                      <p className="text-slate-700 text-[11px] font-semibold">
                        {msg.legalBasis}
                      </p>
                    </div>

                    {/* Sources links if available */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-500 font-mono uppercase">Reference Sources:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.sources.map((s, i) => (
                            <a
                              key={i}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-0.5 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-300 rounded-lg text-[10px] font-bold flex items-center space-x-1 transition-colors"
                            >
                              <span>{s.title}</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Copy Button for AI Messages */}
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => handleCopy(msg.id, msg.text)}
                    className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-slate-100 hover:bg-amber-100 rounded-xl text-slate-600 hover:text-amber-900 border border-slate-200"
                    title="Copy Answer"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3 text-xs font-extrabold text-[#012618] bg-amber-50 p-4 rounded-2xl border-2 border-amber-300 w-fit shadow-xs"
          >
            <Loader2 className="w-4 h-4 animate-spin text-amber-700 shrink-0" />
            <span>{loadingText}</span>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-3 sm:p-4 rounded-3xl border-2 border-slate-300 shadow-xl space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your legal query (e.g. How to get pre-arrest bail under Section 497 CrPC?)..."
            className="flex-1 text-xs sm:text-sm p-3 text-slate-900 font-bold focus:outline-hidden placeholder:text-slate-400"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="bg-amber-400 hover:bg-amber-300 disabled:bg-slate-200 text-[#012618] disabled:text-slate-400 font-black px-5 py-3.5 rounded-2xl transition-all shadow-md cursor-pointer disabled:cursor-not-allowed flex items-center space-x-1.5 shrink-0"
          >
            <span>Ask AI</span>
            <Send className="w-4 h-4 text-[#012618]" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-[10px] text-slate-500 font-mono font-bold pt-2 border-t border-slate-200 px-2">
          <div className="flex items-center space-x-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>PRECISION MODE: PAKISTAN PENAL CODE + HIGH COURT PRECEDENTS</span>
          </div>
          <span className="text-emerald-900">حکومتِ پاکستان قانونی پورٹل • عادلانہ معاون</span>
        </div>
      </div>

    </div>
  );
};