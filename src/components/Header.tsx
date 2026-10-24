import React from 'react';
import { Radio } from 'lucide-react';
import { HeaderData } from '../data/hubData';

interface HeaderProps {
  data: HeaderData;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="border-b border-slate-800/80 bg-[#0c1017]/95 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3.5 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/40">
            <span className="text-lg tracking-tighter font-mono">ANT</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                {data.appName}
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {data.version}
                </span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {data.statusBadge}
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
              <span>{data.tagline}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-mono">{data.currentDateText}</span>
            </p>
          </div>
        </div>

        {/* Live Drumbeat Pulse */}
        <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
          <Radio className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-rose-300 uppercase tracking-wide text-[10px]">
              {data.liveBeat.label}
            </span>
            {data.liveBeat.items.map((item, index) => (
              <React.Fragment key={item.name}>
                {index > 0 && <span className="text-slate-600">|</span>}
                <span className="text-slate-200">
                  {item.name}{' '}
                  <span className={`${item.highlightClass} font-mono font-semibold`}>
                    {item.time}
                  </span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
