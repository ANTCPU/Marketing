import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, FileCheck2 } from 'lucide-react';
import { ApprovalData, ApprovalDraftItem } from '../data/hubData';

interface ApprovalSectionProps {
  data: ApprovalData;
}

const renderStatusBadge = (item: ApprovalDraftItem) => {
  switch (item.statusType) {
    case 'fired':
      return (
        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-600/60 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          {item.statusText}
        </span>
      );
    case 'approved':
      return (
        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-600/60 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          {item.statusText}
        </span>
      );
    case 'staged':
      return (
        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-800 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          {item.statusText}
        </span>
      );
    case 'ready':
      return (
        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
          <FileCheck2 className="w-3.5 h-3.5 text-slate-400" />
          {item.statusText}
        </span>
      );
  }
};

const renderCategoryBadge = (badge: string, type: ApprovalDraftItem['badgeType']) => {
  switch (type) {
    case 'dayof':
      return (
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-950/80 text-rose-300 border border-rose-800/40">
          {badge}
        </span>
      );
    case 'sports':
      return (
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
          {badge}
        </span>
      );
    case 'scheduled':
      return (
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40">
          {badge}
        </span>
      );
    case 'flywheel':
      return (
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40">
          {badge}
        </span>
      );
  }
};

export const ApprovalSection: React.FC<ApprovalSectionProps> = ({ data }) => {
  return (
    <div className="bg-[#0e131d] border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                  {data.sectionNumber}
                </span>
                <h2 className="text-base font-bold text-white tracking-tight">{data.title}</h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{data.subtitle}</p>
            </div>
          </div>
          <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 font-semibold">
            {data.badge}
          </span>
        </div>

        {/* The Gate Protocol Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></div>
            <span className="text-slate-300">
              Rule of Law:{' '}
              <span className="text-white font-medium">
                Prepped day before → Approved night before → Explicit green light.
              </span>
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 shrink-0 bg-slate-800/80 px-2 py-0.5 rounded">
            {data.gateStatus}
          </span>
        </div>

        {/* Staged Drafts Queue */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <span>{data.queueHeader}</span>
            <span className="text-slate-500">{data.registeredCountText}</span>
          </div>

          {data.stagedDrafts.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">{item.title}</span>
                  {renderCategoryBadge(item.badge, item.badgeType)}
                </div>
                <p className="text-[11px] text-slate-400">{item.details}</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                {renderStatusBadge(item)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tap Discipline Footer */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{data.safetySealText}</span>
        </span>
        <span className="font-mono text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
          {data.tapRuleBadge}
        </span>
      </div>
    </div>
  );
};
