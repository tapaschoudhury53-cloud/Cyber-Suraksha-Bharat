import React, { useState } from 'react';
import { SCAM_PRESETS } from '../data/cyberFraudsData';
import { ScamPreset } from '../types';
import { ShieldCheck, AlertTriangle, AlertOctagon, CheckCircle2, RotateCcw, ArrowRight, ExternalLink, Sparkles, Copy, Check } from 'lucide-react';

interface AnalysisResult {
  threatLevel: 'Critical Scam' | 'High Risk' | 'Medium Risk' | 'Legitimate / Safe';
  threatScore: number;
  summary: string;
  detectedTraps: string[];
  immediateAction: string;
  statutoryAdvice: string;
}

export const ScamAnalyzer: React.FC = () => {
  const [inputText, setInputText] = useState(SCAM_PRESETS[0].rawText);
  const [activePresetId, setActivePresetId] = useState<string>(SCAM_PRESETS[0].id);
  const [copied, setCopied] = useState(false);

  // Dynamic heuristic analyzer based on Indian cyber crime patterns
  const analyzeMessage = (text: string): AnalysisResult => {
    const lower = text.toLowerCase();
    const traps: string[] = [];
    let score = 0;

    // Trigger 1: Digital Arrest / Fake Police / CBI / ED / Narcotics
    if (
      lower.includes('digital arrest') ||
      lower.includes('cbi') ||
      lower.includes('narcotics') ||
      lower.includes('mdma') ||
      lower.includes('customs') ||
      lower.includes('arrest warrant') ||
      lower.includes('supreme court') ||
      lower.includes('crime branch')
    ) {
      traps.push('Law Enforcement / CBI Impersonation (Extortion tactic)');
      score += 45;
    }

    // Trigger 2: UPI / QR Code / Receive PIN trap
    if (
      lower.includes('scan qr') ||
      (lower.includes('qr') && (lower.includes('receive') || lower.includes('credit'))) ||
      (lower.includes('upi pin') && (lower.includes('receive') || lower.includes('credit') || lower.includes('accept')))
    ) {
      traps.push('UPI Reverse Fraud: Prompting QR scan or PIN entry to "receive" funds');
      score += 50;
    }

    // Trigger 3: Electricity / Bill Disconnect Panic
    if (
      (lower.includes('electricity') || lower.includes('power')) &&
      (lower.includes('disconnect') || lower.includes('bill was not updated') || lower.includes('tonight'))
    ) {
      traps.push('Discom Utility Disconnection Panic Trigger (Urgency bait)');
      score += 40;
    }

    // Trigger 4: Telegram / Part-Time task / Like YouTube
    if (
      lower.includes('part-time') ||
      lower.includes('like youtube') ||
      lower.includes('t.me/') ||
      lower.includes('hotel review') ||
      lower.includes('earn ₹') ||
      lower.includes('earn 2000') ||
      lower.includes('vip task')
    ) {
      traps.push('Unsolicited task/review recruitment funneling to Telegram');
      score += 40;
    }

    // Trigger 5: APK download / Remote screen sharing
    if (
      lower.includes('.apk') ||
      lower.includes('anydesk') ||
      lower.includes('quicksupport') ||
      lower.includes('rustdesk') ||
      lower.includes('teamviewer')
    ) {
      traps.push('Malicious APK / Remote Screen Access installation instruction');
      score += 45;
    }

    // Trigger 6: Courier / India Post Phishing
    if (
      (lower.includes('india post') || lower.includes('fedex') || lower.includes('parcel')) &&
      (lower.includes('address incomplete') || lower.includes('redelivery') || lower.includes('http'))
    ) {
      traps.push('Postal smishing targeting debit/credit card credentials');
      score += 40;
    }

    // Trigger 7: Demanding money / Escrow / Bank transfer
    if (
      lower.includes('transfer ₹') ||
      lower.includes('escrow') ||
      lower.includes('verification account') ||
      lower.includes('security deposit')
    ) {
      traps.push('Demanding upfront fund transfer for "verification" or "clearance"');
      score += 35;
    }

    // Normalize score
    if (score > 99) score = 99;
    if (score === 0) {
      // Check if it looks like a normal bank SMS
      if (lower.includes('credited') || lower.includes('debited') || lower.includes('available balance')) {
        return {
          threatLevel: 'Legitimate / Safe',
          threatScore: 5,
          summary: 'Looks like a standard informational bank transaction alert. No malicious links, APK requests, or emergency threats detected.',
          detectedTraps: ['No malicious calls-to-action detected'],
          immediateAction: 'Verify that the SMS sender header matches your official registered bank (e.g., VM-HDFCBK, AX-SBINB).',
          statutoryAdvice: 'Standard banking notifications are protected under RBI Customer Protection guidelines.'
        };
      }
      // Unknown generic text
      return {
        threatLevel: 'Medium Risk',
        threatScore: 40,
        summary: 'No recognized high-risk keywords detected, but treat unsolicited messages from unknown numbers with caution.',
        detectedTraps: ['Unverified communication source'],
        immediateAction: 'Never share OTPs, PINs, or install APK files from unknown contacts.',
        statutoryAdvice: 'Always verify service requests directly through official provider applications.'
      };
    }

    if (score >= 70) {
      return {
        threatLevel: 'Critical Scam',
        threatScore: score,
        summary: 'High probability of severe financial fraud or cyber extortion. Follows recognized Indian cybercrime modus operandi.',
        detectedTraps: traps,
        immediateAction: 'DO NOT transfer funds, DO NOT share OTPs or enter UPI PINs, and DO NOT click provided links. Disconnect immediately.',
        statutoryAdvice: 'Report the sender number to the Department of Telecommunications "Chakshu" portal (sancharsaathi.gov.in) and dial 1930 if funds were compromised.'
      };
    } else {
      return {
        threatLevel: 'High Risk',
        threatScore: score,
        summary: 'Suspicious message displaying psychological urgency and non-standard verification requests.',
        detectedTraps: traps,
        immediateAction: 'Verify directly through official channels; do not call phone numbers given inside the message.',
        statutoryAdvice: 'Phishing and social engineering attacks are punishable under Section 66D of the IT Act, 2000.'
      };
    }
  };

  const result = analyzeMessage(inputText);

  const handleSelectPreset = (preset: ScamPreset) => {
    setActivePresetId(preset.id);
    setInputText(preset.rawText);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(inputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="analyzer-section" className="py-12 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            Citizen Forensic Tool
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
            Interactive Scam Risk Analyzer
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Paste any suspicious WhatsApp message, SMS alert, email text, or call transcript to audit 
            manipulative triggers, legal violations, and safety protocols.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">
            Or test with real-world case studies:
          </span>
          <div className="flex flex-wrap gap-2">
            {SCAM_PRESETS.map((preset) => {
              const isSelected = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <span className="opacity-70 text-[10px] uppercase mr-1.5 font-bold">
                    [{preset.sampleType}]
                  </span>
                  <span>{preset.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Column (5 cols) */}
          <div className="lg:col-span-6 bg-stone-50 p-6 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="message-input" className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Suspicious Message / Call Script
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyText}
                  className="text-xs text-stone-500 hover:text-stone-900 inline-flex items-center gap-1 cursor-pointer"
                  title="Copy text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <button
                  onClick={() => {
                    setInputText('');
                    setActivePresetId('');
                  }}
                  className="text-xs text-stone-500 hover:text-stone-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <textarea
              id="message-input"
              rows={8}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setActivePresetId('');
              }}
              placeholder="Paste message text, SMS, WhatsApp warning, or script here..."
              className="w-full p-3.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono leading-relaxed"
            />

            <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
              <span>{inputText.length} characters analyzed</span>
              <span className="italic">Real-time heuristic evaluation</span>
            </div>
          </div>

          {/* Analysis Output Column (6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            {/* Threat Meter Banner */}
            <div
              className={`p-4 rounded-lg mb-5 border ${
                result.threatLevel === 'Critical Scam'
                  ? 'bg-red-50 border-red-200 text-red-950'
                  : result.threatLevel === 'High Risk'
                  ? 'bg-amber-50 border-amber-200 text-amber-950'
                  : result.threatLevel === 'Medium Risk'
                  ? 'bg-stone-100 border-stone-300 text-stone-800'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-950'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {result.threatLevel === 'Critical Scam' ? (
                    <AlertOctagon className="w-5 h-5 text-red-600" />
                  ) : result.threatLevel === 'High Risk' ? (
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  )}
                  <span className="font-display font-bold text-base">
                    Threat Assessment: {result.threatLevel}
                  </span>
                </div>
                <span className="text-xs font-bold tabular-nums px-2 py-0.5 rounded bg-white/80 border border-current">
                  Score: {result.threatScore} / 100
                </span>
              </div>
              <p className="text-xs leading-relaxed">{result.summary}</p>
            </div>

            {/* Detected Traps */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                Detected Fraud Indicators & Psychological Traps
              </h4>
              <ul className="space-y-2">
                {result.detectedTraps.map((trap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-stone-800 bg-stone-50 p-2.5 rounded border border-stone-200/80"
                  >
                    <span className="text-red-500 font-bold shrink-0">!</span>
                    <span>{trap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Immediate Action Checklist */}
            <div className="mb-5 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-1">
                Citizen Safety Rule
              </h4>
              <p className="text-xs text-stone-800 leading-relaxed font-medium">
                {result.immediateAction}
              </p>
            </div>

            {/* Official Report Affordance */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-stone-500">
                Suspect this number is circulating frauds?
              </span>
              <a
                href="https://sancharsaathi.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
              >
                <span>Report to DoT Chakshu Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
