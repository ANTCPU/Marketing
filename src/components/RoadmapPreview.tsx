import React from 'react';
import { HubContent } from '../data/hubData';

interface RoadmapPreviewProps {
  data: HubContent['roadmap'];
}

export const RoadmapPreview: React.FC<RoadmapPreviewProps> = ({ data }) => {
  return (
    <section className="border border-dashed border-slate-800 rounded-2xl p-5 bg-slate-900/20">
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="font-mono text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-600"></span>
          {data.title}
        </span>
        <span className="text-slate-500 font-mono text-[11px]">{data.architectureTag}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        {data.batches.map((batch) => (
          <div
            key={batch.batchId}
            className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 opacity-75"
          >
            <div className={`font-mono text-[10px] font-semibold ${batch.accentColor}`}>
              {batch.label}
            </div>
            <div className="font-bold text-slate-200 mt-0.5">{batch.title}</div>
            <ul className="text-slate-400 text-[11px] mt-1.5 space-y-0.5 list-disc list-inside">
              {batch.sections.map((sec) => (
                <li key={sec.name}>
                  <strong className="text-slate-300">{sec.name}</strong> {sec.desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
