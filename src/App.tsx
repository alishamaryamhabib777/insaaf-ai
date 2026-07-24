import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationTab, AppLanguage, LegalAnalysisResult } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { LandingView } from './components/LandingView';
import { DashboardView } from './components/DashboardView';
import { IntakeView } from './components/IntakeView';
import { AnalysisView } from './components/AnalysisView';
import { PetitionView } from './components/PetitionView';
import { ChatView } from './components/ChatView';
import { CasesView } from './components/CasesView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const [language, setLanguage] = useState<AppLanguage>('en');
  const [analysisResult, setAnalysisResult] = useState<LegalAnalysisResult | null>(null);

  const handleAnalysisComplete = (result: LegalAnalysisResult) => {
    setAnalysisResult(result);
    setActiveTab('analysis');
  };

  const handleGeneratePetitionFromAnalysis = () => {
    setActiveTab('petition');
  };

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 font-sans flex flex-col antialiased">
      
      {/* Top Govt & Access Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        isLoggedIn={true}
        onLoginClick={() => setActiveTab('dashboard')}
      />

      {/* Main Layout Area */}
      <div className="flex-1 flex w-full">
        
        {/* Sidebar on app tabs */}
        {activeTab !== 'home' && (
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}

        {/* Content Container with Animated View Transitions */}
        <main className="flex-1 overflow-x-hidden min-h-[calc(100vh-4rem)] p-2 sm:p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {activeTab === 'home' && (
                <LandingView
                  setActiveTab={setActiveTab}
                  language={language}
                />
              )}

              {activeTab === 'dashboard' && (
                <DashboardView
                  setActiveTab={setActiveTab}
                  language={language}
                />
              )}

              {activeTab === 'intake' && (
                <IntakeView
                  onAnalysisComplete={handleAnalysisComplete}
                  language={language}
                  onConsultAi={() => setActiveTab('chat')}
                />
              )}

              {activeTab === 'analysis' && (
                analysisResult ? (
                  <AnalysisView
                    result={analysisResult}
                    onGeneratePetition={handleGeneratePetitionFromAnalysis}
                    language={language}
                  />
                ) : (
                  <IntakeView
                    onAnalysisComplete={handleAnalysisComplete}
                    language={language}
                    onConsultAi={() => setActiveTab('chat')}
                  />
                )
              )}

              {activeTab === 'petition' && (
                <PetitionView
                  initialDraft={analysisResult?.draftedPetition || null}
                  language={language}
                />
              )}

              {activeTab === 'chat' && (
                <ChatView
                  language={language}
                />
              )}

              {activeTab === 'cases' && (
                <CasesView
                  setActiveTab={setActiveTab}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>

    </div>
  );
}

