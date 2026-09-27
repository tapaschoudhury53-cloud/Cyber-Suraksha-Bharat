import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { EmergencyRibbon } from './components/EmergencyRibbon';
import { HeroSection } from './components/HeroSection';
import { ScamEncyclopedia } from './components/ScamEncyclopedia';
import { ScamAnalyzer } from './components/ScamAnalyzer';
import { EmergencySOP } from './components/EmergencySOP';
import { CyberQuiz } from './components/CyberQuiz';
import { HelplineDirectory } from './components/HelplineDirectory';
import { GoogleSitesGuide } from './components/GoogleSitesGuide';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar (Strict 3-zone contract) */}
      <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Emergency Alert Ribbon (Golden Hour 1930 banner) */}
      <EmergencyRibbon onSopClick={() => setActiveTab('sop')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <>
            <HeroSection
              onAnalyzeClick={() => setActiveTab('analyzer')}
              onSopClick={() => setActiveTab('sop')}
              onExploreScamsClick={() => setActiveTab('scams')}
            />
            <ScamEncyclopedia onSopClick={() => setActiveTab('sop')} />
            <ScamAnalyzer />
            <EmergencySOP />
            <CyberQuiz />
            <HelplineDirectory />
            <GoogleSitesGuide />
          </>
        )}

        {activeTab === 'scams' && (
          <div className="pt-4">
            <ScamEncyclopedia onSopClick={() => setActiveTab('sop')} />
          </div>
        )}

        {activeTab === 'analyzer' && (
          <div className="pt-4">
            <ScamAnalyzer />
          </div>
        )}

        {activeTab === 'sop' && (
          <div className="pt-4">
            <EmergencySOP />
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="pt-4">
            <CyberQuiz />
          </div>
        )}

        {activeTab === 'google-sites' && (
          <div className="pt-4">
            <GoogleSitesGuide />
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
