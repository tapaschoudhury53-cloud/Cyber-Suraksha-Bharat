export type ScamCategoryType = 'all' | 'financial' | 'impersonation' | 'employment' | 'identity';

export interface ScamDetail {
  id: string;
  title: string;
  category: ScamCategoryType;
  categoryLabel: string;
  summary: string;
  severity: 'Critical' | 'High' | 'Moderate';
  prevalenceRating: string; // e.g. "Over 45% of reported cases"
  modusOperandi: string[];
  realScriptExample: string;
  redFlags: string[];
  legalSections: {
    itAct: string;
    bns: string;
  };
  preventativeMeasures: string[];
  goldenHourAdvice: string;
}

export interface ScamPreset {
  id: string;
  name: string;
  sampleType: 'SMS' | 'WhatsApp' | 'Call Script' | 'Link';
  rawText: string;
  threatLevel: 'Critical Scam' | 'High Risk' | 'Medium Risk' | 'Legitimate / Safe';
  threatScore: number; // 0-100
  analysisSummary: string;
  detectedTraps: string[];
  immediateAction: string;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  safetyRule: string;
}

export interface HelplineResource {
  name: string;
  agency: string;
  contactNumber: string;
  website: string;
  domain: string;
  operationalHours: string;
  primaryRole: string;
}

export interface GoogleSitePageSpec {
  pageTitle: string;
  slug: string;
  layoutType: string;
  summary: string;
  recommendedBlocks: string[];
  readyCopyMarkdown: string;
}
