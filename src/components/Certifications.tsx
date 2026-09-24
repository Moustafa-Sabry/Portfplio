import React from 'react';
import { Award, Terminal, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-wrapper bg-[#0A100D]/40 border-t border-[#20E68A]/10 relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // Certifications</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-[#20E68A]">Certifications</span> & Courses
          </h2>
          <p className="section-subtitle">
            Formal technical certifications issued by Meta and EGYFWD covering backend engineering, databases, and Python programming.
          </p>
        </div>

        {/* Small Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="card-base bg-[#0D1511] border border-[#20E68A]/15 p-5 rounded-xl hover:border-[#20E68A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Issuer Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#10261B] border border-[#20E68A]/20 flex items-center justify-center text-[#20E68A] group-hover:border-[#20E68A]/50 transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-[#00C878] bg-[#10261B] px-2 py-0.5 rounded border border-[#20E68A]/15 font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#F1F5F2] group-hover:text-[#20E68A] transition-colors mb-3 leading-snug">
                  {cert.title}
                </h3>

                {cert.track && (
                  <div className="text-xs text-[#20E68A] font-mono mb-3">
                    Track: {cert.track}
                  </div>
                )}

                {/* Covered Skills */}
                <div className="space-y-1.5 mb-4">
                  {cert.skillsCovered.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#9AA8A0]">
                      <CheckCircle2 className="w-3 h-3 text-[#00C878] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Status Footer */}
              <div className="pt-3 border-t border-[#20E68A]/10 flex items-center justify-between text-[11px] font-mono text-[#5D6F65]">
                <span className="flex items-center gap-1 text-[#20E68A]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Completion
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
