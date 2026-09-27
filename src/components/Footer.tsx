import React from 'react';
import { ShieldCheck, PhoneCall, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-8 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base text-white">
                CyberSuraksha Bharat
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md">
              A comprehensive open citizen cybersecurity initiative educating Indian consumers, 
              senior citizens, students, and businesses against financial cyber frauds, UPI reverse scams, 
              and digital arrest syndicates.
            </p>
            <div className="flex items-center gap-2 pt-1 text-stone-500">
              <span>Aligned with guidelines from I4C (MHA), CERT-In, and Reserve Bank of India</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider block mb-3 text-[11px]">
              Sections
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('overview');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Overview & Statistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('scams');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Modus Operandi Dossiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('analyzer');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Interactive Scam Analyzer
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('sop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Emergency 1930 SOP
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('google-sites');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Google Sites Blueprint Kit
                </button>
              </li>
            </ul>
          </div>

          {/* Official Emergency Contact */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider block mb-3 text-[11px]">
              National Incident Helplines
            </span>
            <div className="space-y-2.5">
              <div>
                <a
                  href="tel:1930"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-stone-950 font-bold rounded hover:bg-amber-400 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call 1930 (Helpline)</span>
                </a>
                <span className="block text-[11px] text-stone-400 mt-1">
                  Citizen Financial Cyber Fraud Reporting System
                </span>
              </div>

              <div className="pt-1 text-stone-400 space-y-1">
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>cybercrime.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://sancharsaathi.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>sancharsaathi.gov.in (Chakshu)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>
            Disclaimer: This portal is created for public education and awareness. In case of actual financial 
            loss, immediately dial 1930 or lodge an official FIR on cybercrime.gov.in.
          </p>
          <div className="shrink-0">
            <span>Cyber Safe Bharat · India Cyber Awareness 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
