import React from 'react';
import { Clock, Zap, Flame, MessageSquare, Lock } from 'lucide-react';
import { RhythmData, DailyClockItem } from '../data/hubData';

interface RhythmSectionProps {
  data: RhythmData;
}

const renderClockIcon = (type: DailyClockItem['iconType']) => {
  switch (type) {
    case 'am':
      return <Zap className="w-3.5 h-3.5" />;
    case 'circle':
      return <Flame className="w-3.5 h-3.5" />;
    case 'reply':
      return <MessageSquare className="w-3.5 h-3.5" />;
    case 'quiet':
      return <Lock className="w-3.5 h-3.5" />;
  }
};

const getClockIconBg = (type: DailyClockItem['iconType']) => {
  switch (type) {
    case 'am':
      return 'bg-amber-500/10 text-amber-400';
    case 'circle':
      return 'bg-indigo-500/10 text-indigo-400';
    case 'reply':
      return 'bg-emerald-500/10 text-emerald-400';
    case 'quiet':
      return 'bg-purple-500/10 text-purple-400';
  }
};

export const RhythmSection: React.FC<RhythmSectionProps> = ({ data }) => {
  return (
    <div className="bg-[#0e131d] border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                  {data.sectionNumber}
                </span>
                <h2 className="text-base font-bold text-white tracking-tight">{data.title}</h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{data.subtitle}</p>
            </div>
          </div>
          <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-750">
            {data.cadenceBadge}
          </span>
        </div>

        {/* Weekly Cadence Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          {data.weeklyBeats.map((beat) => {
            const isAmber = beat.paceColor === 'amber';
            const isSky = beat.paceColor === 'sky';
            const isEmerald = beat.paceColor === 'emerald';

            return (
              <div
                key={beat.days}
                className={`border rounded-xl p-3 ${
                  beat.isToday
                    ? 'bg-slate-900/80 border-amber-500/30 bg-amber-950/10'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase font-mono ${
                      isAmber ? 'text-amber-400' : isSky ? 'text-sky-400' : 'text-emerald-400'
                    }`}
                  >
                    {beat.days}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
                      isAmber
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                        : isSky
                        ? 'bg-sky-500/15 text-sky-300 border-sky-500/30'
                        : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    }`}
                  >
                    {beat.pace}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mt-1.5">{beat.title}</div>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  {beat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Daily Operating Clock */}
        <div className="space-y-2 mb-5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
            <span>Daily Clock Triggers</span>
            <span className="text-slate-500">Eastern Time (ET)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {data.dailyClockTriggers.map((trigger) => (
              <div
                key={trigger.label}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5"
              >
                <div className={`p-1.5 rounded mt-0.5 ${getClockIconBg(trigger.iconType)}`}>
                  {renderClockIcon(trigger.iconType)}
                </div>
                <div>
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    {trigger.label}
                    <span className={`text-[10px] font-mono ${trigger.timeColor}`}>
                      {trigger.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{trigger.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comment-Wave Law Banner */}
      <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-indigo-950/30 border border-indigo-900/50 rounded-xl p-3.5">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold mb-1">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          <span>{data.commentWaveRule.title}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{data.commentWaveRule.text}</p>
      </div>
    </div>
  );
};
