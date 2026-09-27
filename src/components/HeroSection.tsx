import React from 'react';
import { ShieldCheck, PhoneCall, Search, FileText, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onAnalyzeClick: () => void;
  onSopClick: () => void;
  onExploreScamsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onAnalyzeClick,
  onSopClick,
  onExploreScamsClick,
}) => {
  return (
    <section className="relative bg-stone-950 text-white overflow-hidden border-b border-stone-800">
      {/* Background Hero Image with measured optical scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_cyber_safety_india_1790492248700.jpg"
          alt="Cyber defense command and financial fraud protection in India"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-18 lg:pb-22">
        <div className="max-w-3xl">
          {/* Metadata kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
            <span>National Citizen Awareness</span>
            <span aria-hidden="true">·</span>
            <span>Indian Cyber Crime Coordination Centre (I4C) Guide</span>
            <span aria-hidden="true">·</span>
            <span>Citizen Protection Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight mb-4 text-balance">
            Recognize, Prevent, & Report Cyber Frauds in India
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed mb-8 max-w-2xl">
            From <strong>"Digital Arrest"</strong> video extortion and <strong>UPI QR code deception</strong> to 
            fraudulent <strong>Telegram tasks</strong> and <strong>AePS biometric cloning</strong>, equip yourself 
            with actionable dossiers, statutory legal provisions, and immediate 
            <strong> 1930 emergency response SOPs</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={onAnalyzeClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-colors shadow-md cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Analyze a Suspicious Message</span>
            </button>

            <button
              onClick={onSopClick}
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-sm border border-stone-700 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Emergency 1930 SOP (Money Lost)</span>
            </button>

            <button
              onClick={onExploreScamsClick}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded text-stone-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <span>Browse All 8 Scam Types</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          {/* Adjacent Official Proof Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                ₹1,750+ Cr
              </div>
              <div className="text-xs text-stone-400 mt-1 leading-snug">
                Citizen funds frozen via 1930 helpline & CFCFRS
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                Under 2 Hrs
              </div>
              <div className="text-xs text-stone-400 mt-1 leading-snug">
                Crucial "Golden Hour" inter-bank freeze window
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold font-display text-amber-400 tabular-nums">
                1930
              </div>
              <div className="text-xs text-stone-400 mt-1 leading-snug">
                Toll-free 24x7 Citizen Cyber Helpline (cybercrime.gov.in)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
