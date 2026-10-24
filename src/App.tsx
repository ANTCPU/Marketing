import React from 'react';
import { hubData } from './data/hubData';
import { Header } from './components/Header';
import { OperatingStatusBar } from './components/OperatingStatusBar';
import { RhythmSection } from './components/RhythmSection';
import { ApprovalSection } from './components/ApprovalSection';
import { RoadmapPreview } from './components/RoadmapPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Header & Live Drumbeat Banner */}
      <Header data={hubData.header} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Operating Context Bar */}
        <OperatingStatusBar data={hubData.operatingStatus} />

        {/* ROW 1: THE RHYTHM & THE APPROVAL FLOW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RhythmSection data={hubData.rhythm} />
          <ApprovalSection data={hubData.approval} />
        </section>

        {/* ROADMAP / UPCOMING BATCHES PLACEHOLDER ANCHORS */}
        <RoadmapPreview data={hubData.roadmap} />
      </main>
    </div>
  );
}
