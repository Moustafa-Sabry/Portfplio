import { Terminal, Clock, CheckCircle2, Layers } from 'lucide-react';
import { trainingData } from '../data/training';

export function Training() {
  return (
    <section id="training" className="section-wrapper bg-[#0A100D]/30 border-t border-[#20E68A]/10 relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // Professional Training</span>
          </div>
          <h2 className="section-title">
            Intensive Practical <span className="text-[#20E68A]">Diploma Journey</span>
          </h2>
          <p className="section-subtitle">
            Dedicated practical diploma at the National Telecommunication Institute (NTI) focused on engineering complete MEAN stack solutions.
          </p>
        </div>

        {/* Vertical Journey / Timeline Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#20E68A]/30 space-y-12">
            {/* Timeline Milestone Marker */}
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#050807] border-2 border-[#20E68A] flex items-center justify-center shadow-[0_0_15px_rgba(32,230,138,0.5)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#20E68A]"></span>
            </div>

            {/* Main Training Card */}
            <div className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-6 sm:p-8 rounded-2xl relative">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#050807] bg-[#20E68A] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_10px_rgba(32,230,138,0.3)]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{trainingData.hours}</span>
                  </span>
                  <span className="text-xs font-mono text-[#20E68A] bg-[#10261B] px-3 py-1 rounded-full border border-[#20E68A]/20">
                    {trainingData.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#9AA8A0]">
                  Official Diploma
                </span>
              </div>

              {/* Title & Institution */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] mb-1">
                {trainingData.program}
              </h3>
              <div className="text-base font-semibold text-[#00C878] mb-4">
                {trainingData.institution}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#9AA8A0] leading-relaxed mb-6">
                {trainingData.description}
              </p>

              {/* Tech Badges */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#5D6F65] mb-2.5">
                  Core Technologies Mastered:
                </div>
                <div className="flex flex-wrap gap-2">
                  {trainingData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tag-badge text-xs px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Deliverables & Achievements */}
              <div className="pt-6 border-t border-[#20E68A]/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#5D6F65] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#20E68A]" />
                  <span>Hands-On Engineering Deliverables</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trainingData.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0A100D] p-3 rounded-lg border border-[#20E68A]/10 flex items-start gap-2.5 text-xs text-[#F1F5F2]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00C878] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
