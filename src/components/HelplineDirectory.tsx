import React from 'react';
import { HELPLINE_RESOURCES } from '../data/cyberFraudsData';
import { Phone, ExternalLink, ShieldCheck, Clock, Building2 } from 'lucide-react';

export const HelplineDirectory: React.FC = () => {
  return (
    <section id="helplines-section" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            Verified Indian Regulatory & Police Portals
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
            Official Helplines & Incident Escalation Directory
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Always verify that you are communicating with genuine government portals ending with 
            <strong className="text-stone-900"> .gov.in</strong> or <strong className="text-stone-900">.nic.in</strong>. 
            Official Indian enforcement bodies do not maintain private Gmail or WhatsApp support lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HELPLINE_RESOURCES.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:border-amber-300 hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>{item.agency}</span>
                </div>

                <h3 className="text-base font-display font-bold text-stone-900 leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                  {item.primaryRole}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-200/80 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5 font-medium text-stone-900">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Availability: {item.operationalHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <span className="font-semibold text-stone-900">Domain:</span>
                    <span className="font-mono text-[11px] text-amber-800">{item.domain}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                {item.contactNumber !== 'Portal Direct' ? (
                  <a
                    href={`tel:${item.contactNumber.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{item.contactNumber}</span>
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-stone-500">
                    Web Submission
                  </span>
                )}

                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-stone-700 hover:text-stone-950 underline underline-offset-2"
                >
                  <span>Visit Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
