import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, ExternalLink, Menu, X } from 'lucide-react';

interface TopBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'scams', label: 'Modus Operandi' },
    { id: 'analyzer', label: 'Scam Analyzer' },
    { id: 'sop', label: 'Emergency 1930' },
    { id: 'quiz', label: 'Awareness Quiz' },
    { id: 'google-sites', label: 'Google Sites Kit' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => {
              setActiveTab('overview');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors">
                CyberSuraksha Bharat
              </span>
            </div>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`relative py-1.5 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'hover:text-white text-stone-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded bg-amber-500 text-stone-950 hover:bg-amber-400 transition-colors shadow-sm"
              title="Call National Cyber Crime Reporting Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Dial 1930 (Helpline)</span>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-stone-600 rounded transition-colors"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:1930"
              className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500 text-stone-950"
            >
              1930
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-900 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded text-sm ${
                activeTab === link.id
                  ? 'bg-stone-800 text-amber-400 font-semibold'
                  : 'text-stone-300 hover:bg-stone-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
            <a
              href="tel:1930"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded bg-amber-500 text-stone-950"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Dial 1930 National Helpline</span>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 text-xs text-stone-300 border border-stone-700 rounded"
            >
              <span>Visit National Cyber Crime Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
