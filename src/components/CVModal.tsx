import { 
  X, 
  Download, 
  Printer, 
  GraduationCap, 
  Award, 
  Layers, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  FileText 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { trainingData } from '../data/training';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0A100D] border border-[#20E68A]/30 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        {/* Modal Top Action Bar */}
        <div className="p-4 bg-[#0D1511] border-b border-[#20E68A]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#20E68A]" />
            <span className="font-mono text-xs font-semibold text-[#F1F5F2]">
              Curriculum Vitae Preview — {profileData.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn-secondary text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#20E68A]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href="/Moustafa_Sabry_CV.txt"
              download="Moustafa_Sabry_CV.txt"
              className="btn-primary text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#070c09] text-[#9AA8A0] hover:text-[#F1F5F2] hover:bg-[#10261B] transition-colors ml-1"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#9AA8A0] text-xs sm:text-sm leading-relaxed font-sans bg-[#080d0a]">
          {/* Header */}
          <div className="border-b border-[#20E68A]/20 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] tracking-tight">
              {profileData.name}
            </h1>
            <div className="text-base font-semibold text-[#20E68A] mt-1">
              {profileData.title}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9AA8A0] mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00C878]" />
                {profileData.location}
              </span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-1 text-[#20E68A] hover:underline">
                <Mail className="w-3.5 h-3.5" />
                {profileData.email}
              </a>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[#9AA8A0]">
              {profileData.shortDescription}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#20E68A] font-bold mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="bg-[#0D1511] p-3.5 rounded-xl border border-[#20E68A]/10">
              <div className="flex justify-between items-start font-semibold text-[#F1F5F2]">
                <span>{educationData.degree} in {educationData.field}</span>
                <span className="font-mono text-xs text-[#00C878]">{educationData.period}</span>
              </div>
              <div className="text-xs text-[#9AA8A0] mt-0.5">
                {educationData.institution} — {educationData.location}
              </div>
              <div className="text-xs font-mono text-[#20E68A] mt-1">
                Cumulative GPA: {educationData.gpa} / {educationData.gpaScale}
              </div>
            </div>
          </div>

          {/* Professional Training */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#20E68A] font-bold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Professional Practical Training
            </h2>
            <div className="bg-[#0D1511] p-3.5 rounded-xl border border-[#20E68A]/10">
              <div className="flex justify-between items-start font-semibold text-[#F1F5F2]">
                <span>{trainingData.program}</span>
                <span className="font-mono text-xs text-[#20E68A] bg-[#10261B] px-2 py-0.5 rounded">
                  {trainingData.hours}
                </span>
              </div>
              <div className="text-xs text-[#00C878] mt-0.5">
                {trainingData.institution}
              </div>
              <p className="text-xs text-[#9AA8A0] mt-2">
                {trainingData.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {trainingData.technologies.map((t) => (
                  <span key={t} className="tag-badge text-[10px]">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#20E68A] font-bold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Featured Technical Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((p) => (
                <div key={p.id} className="bg-[#0D1511] p-3.5 rounded-xl border border-[#20E68A]/10">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#F1F5F2]">{p.title}</span>
                    <span className="text-[11px] font-mono text-[#20E68A]">{p.stackBadge}</span>
                  </div>
                  <p className="text-xs text-[#9AA8A0] mt-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono bg-[#070c09] text-[#00C878] px-2 py-0.5 rounded border border-[#20E68A]/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#20E68A] font-bold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Certifications & Tracks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="bg-[#0D1511] p-2.5 rounded-lg border border-[#20E68A]/10">
                  <div className="font-semibold text-[#F1F5F2]">{c.title}</div>
                  <div className="text-[11px] font-mono text-[#00C878]">{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="p-4 bg-[#0D1511] border-t border-[#20E68A]/15 flex items-center justify-between">
          <div className="text-[11px] font-mono text-[#5D6F65]">
            Verified CV Data • Cairo, Egypt
          </div>
          <button
            onClick={onClose}
            className="btn-secondary text-xs py-1.5 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
