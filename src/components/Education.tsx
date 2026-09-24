import React from 'react';
import { GraduationCap, Terminal, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-wrapper relative border-t border-[#20E68A]/10">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // Academic Foundation</span>
          </div>
          <h2 className="section-title">
            Computer Science <span className="text-[#20E68A]">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal computational studies emphasizing algorithmic problem solving, database design, and software engineering.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-6 sm:p-8 rounded-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#20E68A]/15">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10261B] border border-[#20E68A]/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#20E68A]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F2]">
                    {educationData.degree} in {educationData.field}
                  </h3>
                  <div className="text-sm font-semibold text-[#00C878] mt-0.5">
                    {educationData.institution}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9AA8A0] mt-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#20E68A]" />
                      {educationData.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#20E68A]" />
                      {educationData.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* GPA display (balanced and elegant) */}
              <div className="bg-[#0A100D] border border-[#20E68A]/20 px-4 py-2.5 rounded-xl text-right sm:self-start">
                <div className="text-[10px] font-mono text-[#5D6F65] uppercase">Cumulative GPA</div>
                <div className="text-lg font-bold text-[#F1F5F2] font-mono">
                  <span className="text-[#20E68A]">{educationData.gpa}</span>
                  <span className="text-xs text-[#9AA8A0]"> / {educationData.gpaScale}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#9AA8A0] leading-relaxed my-5">
              {educationData.description}
            </p>

            {/* Academic Highlights */}
            <div className="pt-4 border-t border-[#20E68A]/10">
              <div className="text-xs font-mono uppercase tracking-wider text-[#5D6F65] mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#20E68A]" />
                <span>Core Academic Modules:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {educationData.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0A100D] p-2.5 rounded-lg border border-[#20E68A]/10 flex items-center gap-2 text-xs text-[#F1F5F2]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C878] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
