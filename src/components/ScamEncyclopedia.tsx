import React, { useState } from 'react';
import { SCAMS_DATA } from '../data/cyberFraudsData';
import { ScamDetail, ScamCategoryType } from '../types';
import { Search, ShieldAlert, ChevronRight, X, AlertOctagon, CheckCircle2, Scale, ExternalLink, Lightbulb } from 'lucide-react';

interface ScamEncyclopediaProps {
  onSopClick: () => void;
}

export const ScamEncyclopedia: React.FC<ScamEncyclopediaProps> = ({ onSopClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<ScamCategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScamModal, setActiveScamModal] = useState<ScamDetail | null>(null);

  const filterTabs: { id: ScamCategoryType; label: string }[] = [
    { id: 'all', label: 'All Modus Operandi (8)' },
    { id: 'financial', label: 'UPI & Banking' },
    { id: 'impersonation', label: 'Police & Digital Arrest' },
    { id: 'employment', label: 'Work-from-Home & Telegram' },
    { id: 'identity', label: 'AePS & Loan Extortion' },
  ];

  const filteredScams = SCAMS_DATA.filter((scam) => {
    const matchesCategory = selectedCategory === 'all' || scam.category === selectedCategory;
    const matchesSearch =
      scam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scam.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scam.redFlags.some(flag => flag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="scams-section" className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            Encyclopedia of Cyber Threats
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
            Modus Operandi: How Criminals Target Citizens in India
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Every cyber scam exploits psychological urgency, fear of authority, or financial greed. 
            Examine the anatomy, scripts, and legal provisions for the most prevalent rackets.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-sm font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search scams, keywords, UPI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-900 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Spotlight Card: The UPI QR Code Myth Banner */}
        <div className="mb-10 bg-white border border-amber-200 rounded-lg overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[220px]">
            <img
              src="/src/assets/images/upi_fraud_awareness_1790492261141.jpg"
              alt="UPI QR Code Payment Scam Awareness"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
              <div className="text-white text-xs font-medium">
                National UPI Rule: PIN is strictly for paying, never for receiving.
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                <span>Critical Citizen Advisory</span>
                <span aria-hidden="true">·</span>
                <span>National Payments Corporation of India (NPCI)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 tracking-tight">
                The Number #1 Rule: You NEVER Scan a QR to Receive Money
              </h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Fraudsters posing as OLX buyers, armed forces officers, or refund agents send QR codes promising instant advance payments.
                When you scan a QR code and enter your 4 or 6 digit UPI PIN, your bank account is immediately debited. 
                Receiving money via UPI requires <strong>ZERO input from you</strong>.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={() => {
                  const upiScam = SCAMS_DATA.find(s => s.id === 'upi-qr-fraud');
                  if (upiScam) setActiveScamModal(upiScam);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                <span>Read Full UPI Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onSopClick}
                className="text-xs font-medium text-stone-600 hover:text-stone-900 underline underline-offset-2 cursor-pointer"
              >
                What if money was already debited?
              </button>
            </div>
          </div>
        </div>

        {/* Scam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScams.map((scam) => (
            <article
              key={scam.id}
              className="bg-white border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div>
                {/* Clean unboxed metadata with bullet separators */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-amber-700">{scam.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className={scam.severity === 'Critical' ? 'text-red-700 font-medium' : 'text-amber-700 font-medium'}>
                    {scam.severity} Threat
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                  {scam.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm mt-2.5 leading-relaxed line-clamp-3">
                  {scam.summary}
                </p>

                {/* Excerpt of Real Fraudster Script */}
                <div className="mt-4 p-3 bg-stone-50 border-l-2 border-amber-400 rounded-r text-xs text-stone-700 italic">
                  <span className="font-semibold not-italic text-stone-900 block mb-0.5">Typical Scam Trigger:</span>
                  <span className="line-clamp-2">{scam.realScriptExample}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  {scam.prevalenceRating.split('(')[0]}
                </span>

                <button
                  onClick={() => setActiveScamModal(scam)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-amber-700 cursor-pointer"
                >
                  <span>Case Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredScams.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-stone-200 p-8">
            <ShieldAlert className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-stone-700">No scams matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-amber-600 font-semibold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detailed Modal Dossier */}
      {activeScamModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-amber-700">{activeScamModal.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-red-700 font-semibold">{activeScamModal.severity} Severity</span>
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mt-0.5">
                  {activeScamModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveScamModal(null)}
                className="p-1.5 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-sm text-stone-700 leading-relaxed">
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1">
                  Overview
                </h4>
                <p className="text-stone-700">{activeScamModal.summary}</p>
              </div>

              {/* Real Script */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-700" />
                  <span>Actual Fraud Script Used by Scammers</span>
                </div>
                <p className="italic text-stone-800 text-xs sm:text-sm">
                  {activeScamModal.realScriptExample}
                </p>
              </div>

              {/* Modus Operandi Steps */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Chronology of the Fraud (Modus Operandi)
                </h4>
                <ol className="space-y-2 list-decimal list-inside text-stone-700">
                  {activeScamModal.modusOperandi.map((step, idx) => (
                    <li key={idx} className="pl-1">
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Red Flags & Defenses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50/60 border border-red-200 rounded-lg">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-2 flex items-center gap-1.5">
                    <AlertOctagon className="w-4 h-4 text-red-600" />
                    <span>Fatal Red Flags</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-red-950">
                    {activeScamModal.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-lg">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>How to Protect Yourself</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-950">
                    {activeScamModal.preventativeMeasures.map((measure, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Statutory Legal Provisions */}
              <div className="p-4 bg-stone-100 rounded-lg border border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-stone-700" />
                  <span>Applicable Indian Legal Sections</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-stone-900">Information Technology Act, 2000:</span>
                    <p className="text-stone-600 mt-0.5">{activeScamModal.legalSections.itAct}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900">Bharatiya Nyaya Sanhita (BNS) 2023:</span>
                    <p className="text-stone-600 mt-0.5">{activeScamModal.legalSections.bns}</p>
                  </div>
                </div>
              </div>

              {/* Golden Hour Action */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-stone-900 block mb-0.5">Emergency Debited Action:</span>
                  <span className="text-stone-700">{activeScamModal.goldenHourAdvice}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-stone-50 border-t border-stone-200 px-6 py-3 flex items-center justify-between">
              <span className="text-xs text-stone-500">Helpline: Dial 1930 for financial freeze</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveScamModal(null);
                    onSopClick();
                  }}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded transition-colors cursor-pointer"
                >
                  View Victim SOP
                </button>
                <button
                  onClick={() => setActiveScamModal(null)}
                  className="px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-200 rounded transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
