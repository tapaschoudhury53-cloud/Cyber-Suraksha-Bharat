import React from 'react';
import { AlertTriangle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface EmergencyRibbonProps {
  onSopClick: () => void;
}

export const EmergencyRibbon: React.FC<EmergencyRibbonProps> = ({ onSopClick }) => {
  return (
    <aside aria-label="Emergency Citizen Advisory" className="bg-amber-500 text-stone-950 border-b border-amber-600 px-4 py-2 text-xs sm:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-2 justify-center">
          <AlertTriangle className="w-4 h-4 text-stone-950 shrink-0" />
          <span>
            <strong>Defrauded online?</strong> The first 2 hours are the <em>"Golden Hour"</em> to freeze debited funds in Indian banks.
          </span>
        </div>
        
        <div className="flex items-center gap-4 justify-center shrink-0">
          <div className="flex items-center gap-1.5 font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Call 1930 Helpline Immediately</span>
          </div>
          <span aria-hidden="true" className="text-amber-800">·</span>
          <button
            onClick={onSopClick}
            className="underline underline-offset-2 hover:text-stone-800 font-semibold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View 5-Step Action Protocol</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};
