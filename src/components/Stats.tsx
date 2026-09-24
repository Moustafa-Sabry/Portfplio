import React from 'react';
import { Clock, Server, Code, FolderGit2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const Stats: React.FC = () => {
  const icons = [
    <Clock className="w-5 h-5 text-[#20E68A]" />,
    <Server className="w-5 h-5 text-[#20E68A]" />,
    <Code className="w-5 h-5 text-[#20E68A]" />,
    <FolderGit2 className="w-5 h-5 text-[#20E68A]" />,
  ];

  return (
    <section className="py-12 border-y border-[#20E68A]/10 bg-[#0A100D]/50 relative z-10">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profileData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="card-base bg-[#0D1511]/90 p-5 rounded-xl border border-[#20E68A]/15 hover:border-[#20E68A]/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-[#10261B] border border-[#20E68A]/20">
                  {icons[idx]}
                </span>
                <span className="text-[10px] font-mono text-[#00C878] bg-[#10261B]/80 px-2 py-0.5 rounded border border-[#20E68A]/15">
                  Verified CV
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] font-mono tracking-tight text-[#20E68A]">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#F1F5F2] mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#9AA8A0] mt-0.5">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
