import React from 'react';
import { Sparkles } from 'lucide-react';
import { OperatingStatusData } from '../data/hubData';

interface OperatingStatusBarProps {
  data: OperatingStatusData;
}

export const OperatingStatusBar: React.FC<OperatingStatusBarProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-850 border border-slate-800 rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start sm:items-center gap-3">
        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg shrink-0 mt-0.5 sm:mt-0">
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>
        <div>
          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider font-mono">
            {data.title}
          </div>
          <p className="text-sm text-slate-300 mt-0.5">
            {data.summary} (
            <span className="text-white font-semibold">{data.boldCohortText}</span>
            ). November is Cohort 4 (
            <span className="text-emerald-400 font-mono text-xs">{data.cohortApplyUrl}</span>
            ).
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 text-xs">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};
