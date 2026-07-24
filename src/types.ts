export type NavigationTab = 
  | 'home' 
  | 'dashboard' 
  | 'intake' 
  | 'analysis' 
  | 'petition' 
  | 'chat' 
  | 'cases' 
  | 'login';

export type AppLanguage = 'en' | 'ur' | 'roman_urdu';

export interface PpcSection {
  section: string;
  title: string;
  explanation: string;
  punishment?: string;
  severity: 'High' | 'Medium' | 'Low';
}

export interface LegalPrecedent {
  citation: string;
  title: string;
  principle: string;
}

export interface DraftedPetition {
  title: string;
  courtName: string;
  jurisdiction: string;
  petitioner: string;
  respondent: string;
  facts: string[];
  grounds: string[];
  prayer: string;
  documentText: string;
}

export interface LegalAnalysisResult {
  caseId: string;
  cognizableRisk: number;
  riskLevel: 'High Risk' | 'Medium Risk' | 'Low Risk';
  riskExplanation: string;
  caseSummary: string;
  ppcLawSections: PpcSection[];
  proceduralSteps: string[];
  precedents: LegalPrecedent[];
  draftedPetition: DraftedPetition;
  romanUrduTranslation?: {
    summary: string;
    steps: string[];
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
  legalBasis?: string;
  sectionRef?: string;
  sources?: Array<{ title: string; url: string }>;
}

export interface CaseHistoryItem {
  id: string;
  dateFiled: string;
  caseTitle: string;
  category: string;
  reference: string;
  status: 'Filed' | 'Draft' | 'Closed' | 'Under Review';
}
