import { GraduationCap, CheckCircle, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export function About() {
  return (
    <section id="about" className="section-wrapper relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="section-title">
            Engineering with a <span className="text-[#20E68A]">Backend Focus</span> & Full-Stack Rigor
          </h2>
          <p className="section-subtitle">
            A solid foundation in Computer Science combined with intensive practical training in scalable web applications.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: About Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-[#9AA8A0] text-base leading-relaxed">
            <p>
              I am a <strong className="text-[#F1F5F2] font-semibold">Computer Science graduate</strong> from Modern Academy (Class of 2025, Cairo, Egypt) with a strong passion for backend architecture, RESTful API design, and distributed data systems.
            </p>

            <p>
              My primary technical focus is on engineering scalable and maintainable backend services using <span className="text-[#20E68A] font-mono">Node.js</span>, <span className="text-[#20E68A] font-mono">Express.js</span>, <span className="text-[#20E68A] font-mono">NestJS</span>, and <span className="text-[#20E68A] font-mono">MongoDB</span>. I have hands-on experience structuring REST APIs with stateless <strong className="text-[#F1F5F2]">JWT authentication</strong>, role-based authorization (RBAC), and rigorous input validation pipelines.
            </p>

            <p>
              To supplement my theoretical computer science curriculum, I completed the intensive <strong className="text-[#F1F5F2]">300+ hour MEAN Stack Diploma</strong> at the <span className="text-[#00C878]">National Telecommunication Institute (NTI)</span>. This training provided rigorous real-world practice architecting full-stack projects, connecting robust backends to dynamic <span className="text-[#20E68A] font-mono">Angular</span> single-page applications.
            </p>

            {/* Core Values / Work Ethic */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A100D] border border-[#20E68A]/10">
                <CheckCircle className="w-4 h-4 text-[#00C878] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[#F1F5F2]">Clean REST Architecture</div>
                  <div className="text-[#9AA8A0] mt-0.5">Stateless design, clear status codes, and modular route handlers.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A100D] border border-[#20E68A]/10">
                <CheckCircle className="w-4 h-4 text-[#00C878] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[#F1F5F2]">Security & Authentication</div>
                  <div className="text-[#9AA8A0] mt-0.5">JWT token lifecycles, password hashing, and role-based guards.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A100D] border border-[#20E68A]/10">
                <CheckCircle className="w-4 h-4 text-[#00C878] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[#F1F5F2]">Practical Full-Stack Integration</div>
                  <div className="text-[#9AA8A0] mt-0.5">Connecting Angular frontends seamlessly with Express & NestJS APIs.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A100D] border border-[#20E68A]/10">
                <CheckCircle className="w-4 h-4 text-[#00C878] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[#F1F5F2]">Algorithmic Foundations</div>
                  <div className="text-[#9AA8A0] mt-0.5">150+ solved challenges strengthening data structures and time complexity.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Information Card */}
          <div className="lg:col-span-5 w-full">
            <div className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-6 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#20E68A]/15">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#20E68A]" />
                  <span className="font-bold text-[#F1F5F2] text-sm tracking-wide uppercase font-mono">
                    Profile Summary
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#00C878] bg-[#10261B] px-2.5 py-1 rounded-full border border-[#20E68A]/20">
                  Graduate 2025
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                {/* Education */}
                <div className="space-y-1">
                  <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">Education</div>
                  <div className="text-[#F1F5F2] font-semibold font-sans text-sm">
                    {profileData.education.degree}
                  </div>
                </div>

                {/* University */}
                <div className="space-y-1">
                  <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">University</div>
                  <div className="text-[#F1F5F2] font-sans text-sm flex items-center gap-1.5">
                    <span>{profileData.education.university}</span>
                    <span className="text-[#5D6F65]">—</span>
                    <span className="text-[#9AA8A0]">{profileData.education.location}</span>
                  </div>
                </div>

                {/* Graduation & Period */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">Graduation</div>
                    <div className="text-[#F1F5F2] font-semibold text-sm mt-0.5">
                      {profileData.education.graduationYear}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">Academic Period</div>
                    <div className="text-[#9AA8A0] text-sm mt-0.5">
                      {profileData.education.period}
                    </div>
                  </div>
                </div>

                {/* GPA */}
                <div className="pt-1">
                  <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">Cumulative GPA</div>
                  <div className="text-[#F1F5F2] text-sm mt-0.5 flex items-center gap-2">
                    <span className="font-semibold text-[#00C878]">{profileData.education.gpa}</span>
                    <span className="text-[#5D6F65]">on 4.0 scale</span>
                  </div>
                </div>

                {/* Professional Training */}
                <div className="pt-2 border-t border-[#20E68A]/10">
                  <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">Professional Diploma</div>
                  <div className="text-[#F1F5F2] font-sans text-sm font-semibold mt-1">
                    NTI MEAN Stack Diploma (300+ Hours)
                  </div>
                  <div className="text-[#9AA8A0] text-[11px] mt-0.5">
                    MongoDB • Express.js • Angular • Node.js • JWT
                  </div>
                </div>

                {/* Target Roles */}
                <div className="pt-2 border-t border-[#20E68A]/10">
                  <div className="text-[#5D6F65] uppercase text-[10px] tracking-wider">Target Positions</div>
                  <div className="text-[#20E68A] text-xs font-semibold mt-1">
                    Backend Developer • Junior Full-Stack Developer • Node.js API Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
