import React, { useState } from 'react';
import { GOOGLE_SITES_BLUEPRINT } from '../data/cyberFraudsData';
import { GoogleSitePageSpec } from '../types';
import { Globe, Copy, Check, ExternalLink, LayoutTemplate, Layers, Palette, Code, CheckCircle2 } from 'lucide-react';

export const GoogleSitesGuide: React.FC = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  const currentPage: GoogleSitePageSpec = GOOGLE_SITES_BLUEPRINT[selectedPageIndex];

  const handleCopyPageText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const embedCodeSnippet = `<iframe 
  src="${window.location.origin}" 
  width="100%" 
  height="750" 
  style="border:none; border-radius: 8px;" 
  title="CyberSuraksha Bharat Scam Risk Analyzer & SOP"
  allow="clipboard-write">
</iframe>`;

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCodeSnippet);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  return (
    <section id="google-sites-guide-section" className="py-12 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            Google Sites Blueprint & Export Kit
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
            How to Build Your "Cyber Frauds in India" Google Site
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Here is the complete blueprint, ready-to-copy content, and layout architecture designed 
            specifically for Google Sites (<strong>sites.google.com</strong>). You can build this in under 20 minutes.
          </p>
        </div>

        {/* Step-by-Step Google Sites Setup Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center text-xs mb-3">
              01
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 mb-2">
              Start on Google Sites
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed mb-3">
              Navigate to <strong>sites.google.com</strong>, sign in with your Google Account, and click the 
              <strong> Blank (+)</strong> template to launch the site canvas.
            </p>
            <div className="text-[11px] text-stone-500 font-medium">
              Tip: Set site document title to <em>"Cyber Frauds in India - Citizen Awareness"</em>.
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center text-xs mb-3">
              02
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 mb-2">
              Select Theme & Brand
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed mb-3">
              In the right sidebar, open <strong>Themes</strong>. Choose <strong>Aristotle</strong> or <strong>Diplomat</strong>. 
              Set the primary accent to deep navy or dark charcoal with warm amber buttons.
            </p>
            <div className="text-[11px] text-stone-500 font-medium">
              Font pairing: Classic or Modern for clean institutional readability.
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center text-xs mb-3">
              03
            </div>
            <h3 className="font-display font-bold text-base text-stone-900 mb-2">
              Add Pages & Paste Content
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed mb-3">
              Click the <strong>Pages</strong> tab and create the 4 core pages. Use our one-click copy buttons below 
              to paste the pre-formatted text and collapsible groups.
            </p>
            <div className="text-[11px] text-stone-500 font-medium">
              Embed our interactive Scam Analyzer via Google Sites' <em>"Embed"</em> tool.
            </div>
          </div>
        </div>

        {/* Interactive Page Content Exporter */}
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 border-b border-stone-200 bg-stone-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Ready-to-Paste Page Outlines
              </span>
              <h3 className="text-lg font-display font-bold text-stone-900 mt-0.5">
                Google Sites Page Hierarchy & Draft Content
              </h3>
            </div>

            {/* Page Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200 rounded-lg">
              {GOOGLE_SITES_BLUEPRINT.map((page, idx) => {
                const isActive = selectedPageIndex === idx;
                return (
                  <button
                    key={page.slug}
                    onClick={() => setSelectedPageIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-sm font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {page.pageTitle.split('/')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Page Metadata & Recommended Google Sites Widgets */}
            <div className="lg:col-span-4 space-y-4 text-xs text-stone-700">
              <div>
                <span className="font-bold text-stone-900 block mb-1">Page Name in Google Sites:</span>
                <div className="p-2.5 bg-stone-100 rounded border border-stone-200 font-mono text-stone-800">
                  {currentPage.pageTitle}
                </div>
              </div>

              <div>
                <span className="font-bold text-stone-900 block mb-1">Recommended Header / Layout:</span>
                <p className="text-stone-600 leading-relaxed bg-stone-50 p-2.5 rounded border border-stone-200">
                  {currentPage.layoutType}
                </p>
              </div>

              <div>
                <span className="font-bold text-stone-900 block mb-1.5">Recommended Google Sites Elements:</span>
                <ul className="space-y-1.5 text-stone-600">
                  {currentPage.recommendedBlocks.map((block, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{block}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://sites.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open sites.google.com in New Tab</span>
                </a>
              </div>
            </div>

            {/* Markdown / Text Content Block */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                <span className="text-xs font-bold text-stone-700">
                  Copy & Paste Content for "{currentPage.pageTitle}":
                </span>
                <button
                  onClick={() => handleCopyPageText(currentPage.readyCopyMarkdown, selectedPageIndex)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded transition-colors cursor-pointer"
                >
                  {copiedIndex === selectedPageIndex ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-stone-950" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Page Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-stone-900 text-stone-200 p-4 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto border border-stone-800 max-h-80 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{currentPage.readyCopyMarkdown}</pre>
              </div>

              <p className="text-[11px] text-stone-500 mt-2">
                In Google Sites: Click <strong>Insert &gt; Text Box</strong> or <strong>Collapsible Group</strong> and paste this text directly.
              </p>
            </div>
          </div>
        </div>

        {/* Embed Widget Guide */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
              <Code className="w-4 h-4" />
              <span>Interactive Google Sites Embed</span>
            </div>
            <h3 className="text-lg font-display font-bold text-stone-900">
              Embed This Live Scam Analyzer Inside Your Google Site
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
              Google Sites allows you to embed live web applications! You can insert this interactive 
              Scam Analyzer and 1930 SOP tool directly into your Google Site page using the 
              <strong> Insert &gt; Embed &gt; Embed code</strong> feature.
            </p>
          </div>

          <div className="bg-stone-900 text-stone-200 p-4 rounded-lg font-mono text-xs leading-relaxed border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <code className="text-amber-300 break-all">{embedCodeSnippet}</code>
            <button
              onClick={handleCopyEmbed}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-sans font-bold text-xs rounded transition-colors shrink-0 cursor-pointer"
            >
              {copiedEmbed ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmbed ? 'Copied Embed Code' : 'Copy HTML Embed Code'}</span>
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Works directly in Google Sites iframe</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Responsive for desktop and mobile</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>No coding required on Google Sites</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
