import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, CheckCircle2, Clock, FileText, Download, Copy, Check, Lock, ExternalLink } from 'lucide-react';

export const EmergencySOP: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [victimName, setVictimName] = useState('');
  const [amountLost, setAmountLost] = useState('');
  const [bankName, setBankName] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [scamType, setScamType] = useState('UPI Fraud');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const steps = [
    {
      num: 1,
      title: 'Dial Helpline 1930',
      timing: 'Minutes 0–30',
      description: 'Call the National Cybercrime Reporting Helpline 1930 immediately. It connects to the Citizen Financial Cyber Fraud Reporting System (CFCFRS) operated by I4C and state police.',
      keyTakeaway: 'The operator will issue an SMS with an incident acknowledgment number and immediately trigger an automated inter-bank freeze request to the recipient bank.'
    },
    {
      num: 2,
      title: 'Freeze Bank Accounts & Cards',
      timing: 'Minutes 30–60',
      description: 'Call your bank’s dedicated 24x7 fraud desk or use your mobile banking application to temporarily block your netbanking credentials, UPI IDs, and debit/credit cards.',
      keyTakeaway: 'This prevents secondary and recurring automated debits by fraudsters who may have harvested your credentials.'
    },
    {
      num: 3,
      title: 'Collate Transaction Identifiers',
      timing: 'Minutes 60–90',
      description: 'Collect all proof of the fraudulent transaction: UTR (Unique Transaction Reference) number, 12-digit UPI transaction ID, bank statement PDF, screenshots of chat histories, and call logs.',
      keyTakeaway: 'Banks require the exact 12-digit UTR or RRN number to trace the trail of money across intermediate mule accounts.'
    },
    {
      num: 4,
      title: 'File on cybercrime.gov.in',
      timing: 'Within 24 Hours',
      description: 'Visit the official National Cyber Crime Reporting Portal (cybercrime.gov.in) and register a formal complaint under "Report Financial Fraud" using your 1930 acknowledgment number.',
      keyTakeaway: 'Download the stamped PDF acknowledgment receipt. This is legally required by courts and banks to process refund claims.'
    },
    {
      num: 5,
      title: 'Lock Biometrics on mAadhaar',
      timing: 'Immediately (if AePS fraud)',
      description: 'If money was debited without receiving an OTP (AePS biometric fraud), open the official mAadhaar App or uidai.gov.in and immediately lock your Aadhaar biometrics.',
      keyTakeaway: 'Locked biometrics instantly block all further micro-ATM fingerprint withdrawals nationwide.'
    }
  ];

  const complaintDraft = `To,
The Nodal Officer (Cyber Fraud Grievance) / Branch Manager,
${bankName || '[Your Bank Name]'},

Subject: Immediate Dispute and Lien Request for Unauthorized Cyber Fraud Transaction
Reference: 1930 Incident Acknowledgment / CFCFRS Report

Respected Sir/Madam,

I am writing to formally report an unauthorized fraudulent cyber debit from my bank account.

Account Details:
- Account Holder Name: ${victimName || '[Your Full Name]'}
- Nature of Cyber Fraud: ${scamType}
- Disputed Amount: INR ${amountLost || '[Amount in ₹]'}
- Transaction Reference (UTR / RRN): ${utrNumber || '[12-Digit UTR Number]'}
- Date & Time of Incident: ${new Date().toLocaleDateString('en-IN')}

I have already registered this cyber financial crime with the National Cyber Crime Reporting Portal (Helpline 1930). 

In accordance with Reserve Bank of India (RBI) circular on "Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions", I request you to:
1. Immediately place a lien/freeze on the beneficiary account identified through the UTR number.
2. Provide the complete audit trail and beneficiary bank details to the investigating cyber cell.
3. Initiate the chargeback/reversal protocol to restore the disputed funds.

Copies of the transaction SMS, bank statement, and Cybercrime Portal complaint acknowledgment are enclosed herewith.

Yours sincerely,
${victimName || '[Your Name]'}
Mobile: [Registered Mobile Number]`;

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(complaintDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <section id="sop-section" className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            Standard Operating Procedure (SOP)
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
            The Golden 2-Hour Window: What to Do When Money is Debited
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Cyber syndicates transfer stolen money through 5 to 7 layers of "mule" bank accounts within hours. 
            Acting within the first 120 minutes maximizes the chance of freezing the money in the banking pipe.
          </p>
        </div>

        {/* Visual Callout Hero Banner */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm mb-12 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[220px]">
            <img
              src="/src/assets/images/cyber_investigation_desk_1790492272028.jpg"
              alt="Cyber crime official investigation document and 1930 helpline desk"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-medium">
                CFCFRS Banking Gateway · Nodal Officers Network
              </span>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold uppercase tracking-wider mb-2">
                <span>Statutory Protocol</span>
                <span aria-hidden="true">·</span>
                <span>Ministry of Home Affairs & RBI</span>
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900">
                Why Calling 1930 Works Faster Than Visiting a Police Station
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                When you call <strong>1930</strong>, the details are instantly piped into the 
                <strong> Citizen Financial Cyber Fraud Reporting System (CFCFRS)</strong>. 
                This alerts the fraud desks of all participating public, private, and payment banks in India 
                to place a real-time hold on the recipient wallet or account before cash is withdrawn at an ATM.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-4">
              <a
                href="tel:1930"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call 1930 (Helpline)</span>
              </a>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-stone-700 hover:text-stone-950 font-medium underline underline-offset-2"
              >
                <span>cybercrime.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive 5-Step Process */}
        <div className="mb-12">
          <h3 className="text-lg font-display font-bold text-stone-900 mb-6">
            Step-by-Step Incident Action Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
            {steps.map((s) => {
              const isCurrent = activeStep === s.num;
              return (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                    isCurrent
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isCurrent ? 'text-amber-400' : 'text-stone-400'}`}>
                      Step 0{s.num}
                    </span>
                    <span className={`text-[10px] ${isCurrent ? 'text-stone-300' : 'text-stone-400'}`}>
                      {s.timing}
                    </span>
                  </div>
                  <div className="font-semibold text-xs sm:text-sm line-clamp-1">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Dive Card */}
          {(() => {
            const current = steps.find((s) => s.num === activeStep) || steps[0];
            return (
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-2">
                  <span>Priority Stage {current.num} of 5</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.timing}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-stone-900 mb-3">
                  {current.title}
                </h4>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  {current.description}
                </p>
                <div className="p-4 bg-stone-50 border-l-4 border-amber-500 rounded-r text-xs text-stone-800">
                  <span className="font-bold text-stone-900 block mb-0.5">Critical Milestone:</span>
                  {current.keyTakeaway}
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-stone-100">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-3 py-1.5 text-xs text-stone-600 disabled:opacity-30 hover:text-stone-900 cursor-pointer"
                  >
                    &larr; Previous Step
                  </button>
                  <button
                    disabled={activeStep === 5}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-4 py-1.5 text-xs font-semibold bg-stone-900 text-white rounded hover:bg-stone-800 disabled:opacity-30 cursor-pointer"
                  >
                    Next Step &rarr;
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Interactive Tool: Formal Bank Grievance & FIR Letter Generator */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg font-display font-bold text-stone-900">
              Generate Bank Dispute & Cyber Cell Complaint Notice
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Under RBI circulars, lodging a written dispute with your bank within 3 days ensures 
              customer protection against unauthorized electronic transactions. Fill below to copy a ready legal notice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={victimName}
                onChange={(e) => setVictimName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                placeholder="e.g. State Bank of India"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Amount Debited (₹)
              </label>
              <input
                type="text"
                placeholder="e.g. 25,000"
                value={amountLost}
                onChange={(e) => setAmountLost(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                12-Digit UTR / Ref Number
              </label>
              <input
                type="text"
                placeholder="e.g. 426819203112"
                value={utrNumber}
                onChange={(e) => setUtrNumber(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="relative bg-stone-900 text-stone-200 p-4 sm:p-6 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto border border-stone-800">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800">
              <span className="text-stone-400 font-sans text-xs">Ready-to-Submit Bank Dispute Notice:</span>
              <button
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-stone-950 font-sans font-bold text-xs rounded hover:bg-amber-400 transition-colors cursor-pointer"
              >
                {copiedDraft ? <Check className="w-3.5 h-3.5 text-stone-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDraft ? 'Copied to Clipboard' : 'Copy Notice Text'}</span>
              </button>
            </div>
            <pre className="whitespace-pre-wrap">{complaintDraft}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};
