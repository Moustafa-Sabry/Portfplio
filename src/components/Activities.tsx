import { Terminal, Trophy, Zap } from 'lucide-react';
import { activitiesData } from '../data/activities';

export function Activities() {
  return (
    <section id="activities" className="section-wrapper relative border-t border-[#20E68A]/10">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // Problem Solving</span>
          </div>
          <h2 className="section-title">
            Competitive Programming & <span className="text-[#20E68A]">Problem Solving</span>
          </h2>
          <p className="section-subtitle">
            Strengthening core algorithmic thinking, optimal data structure selection, and Big-O computational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Team Details, Platforms & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {/* ECPC Team Banner */}
            <div className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#10261B] border border-[#20E68A]/30 flex items-center justify-center text-[#20E68A]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F1F5F2]">{activitiesData.team}</div>
                  <div className="text-xs text-[#00C878] font-mono">Modern Academy • {activitiesData.period}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#20E68A]">{activitiesData.solvedCount}</div>
                <div className="text-[10px] text-[#9AA8A0] font-mono">Problems Solved</div>
              </div>
            </div>

            {/* Platforms practiced */}
            <div className="grid grid-cols-3 gap-3">
              {activitiesData.platforms.map((plat) => (
                <div
                  key={plat.name}
                  className="bg-[#0A100D] p-3 rounded-lg border border-[#20E68A]/15 text-center flex flex-col justify-center"
                >
                  <div className="font-bold text-sm text-[#F1F5F2]">{plat.name}</div>
                  <div className="text-[10px] font-mono text-[#20E68A] mt-0.5">{plat.badge}</div>
                </div>
              ))}
            </div>

            {/* 4 Pillars of Competency */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#5D6F65]">
                Core Engineering Strengths Gained:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activitiesData.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-3.5 rounded-lg bg-[#0D1511] border border-[#20E68A]/10 text-xs"
                  >
                    <div className="font-bold text-[#F1F5F2] flex items-center gap-1.5 mb-1 text-sm">
                      <Zap className="w-3.5 h-3.5 text-[#00C878]" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-[#9AA8A0] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="terminal-window border border-[#20E68A]/25">
              <div className="terminal-header bg-[#0A100D] px-4 py-2.5 flex items-center justify-between border-b border-[#20E68A]/15">
                <div className="flex items-center gap-2">
                  <div className="terminal-dots">
                    <span className="terminal-dot red" />
                    <span className="terminal-dot yellow" />
                    <span className="terminal-dot green" />
                  </div>
                  <span className="font-mono text-xs text-[#9AA8A0] ml-2">
                    algorithm-benchmark.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00C878] bg-[#10261B] px-2 py-0.5 rounded border border-[#20E68A]/20">
                  O(n) Optimal
                </span>
              </div>

              <div className="p-4 bg-[#050807] font-mono text-xs overflow-x-auto text-[#9AA8A0]">
                <pre>
                  <code>{activitiesData.algorithmSnippet.code}</code>
                </pre>
              </div>

              <div className="bg-[#0A100D] border-t border-[#20E68A]/10 px-4 py-2 text-[11px] font-mono text-[#5D6F65] flex items-center justify-between">
                <span>Verified Clean Complexity</span>
                <span className="text-[#20E68A]">100% Passing Tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
