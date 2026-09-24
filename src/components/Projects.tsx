import { useState } from 'react';
import { 
  ExternalLink, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Code2, 
  ChevronRight, 
  X, 
  Network 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [infoNotice, setInfoNotice] = useState<string | null>(null);

  const handleLinkClick = (url: string, type: 'github' | 'live', projectTitle: string) => {
    if (!url || url.trim() === '') {
      setInfoNotice(
        `The ${type === 'github' ? 'GitHub repository' : 'Live Demo'} link for "${projectTitle}" is ready to be configured in src/data/projects.ts. No placeholder URLs were invented.`
      );
      setTimeout(() => setInfoNotice(null), 5000);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-wrapper relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // Featured Projects</span>
          </div>
          <h2 className="section-title">
            Practical <span className="text-[#20E68A]">Production-Ready</span> Architectures
          </h2>
          <p className="section-subtitle">
            Real projects built with Node.js, Express.js, NestJS, MongoDB, and Angular. Emphasizing clean REST contracts, JWT security, and modular structure.
          </p>
        </div>

        {/* Informational Toast Notice for Placeholder Links */}
        {infoNotice && (
          <div className="mb-6 p-4 rounded-xl bg-[#0D1511] border border-[#20E68A]/40 text-xs font-mono text-[#F1F5F2] flex items-center justify-between shadow-xl animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20E68A] animate-pulse"></span>
              <span>{infoNotice}</span>
            </div>
            <button
              onClick={() => setInfoNotice(null)}
              className="text-[#9AA8A0] hover:text-[#20E68A] ml-4"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Large Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card-base bg-[#0D1511] border border-[#20E68A]/15 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#20E68A]/50 transition-all duration-300"
            >
              <div>
                {/* Visual Representation Window */}
                <div className="h-60 sm:h-64 p-3 bg-[#070c09] border-b border-[#20E68A]/15 overflow-hidden">
                  <ProjectVisual type={project.previewType} />
                </div>

                {/* Project Header Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#20E68A] bg-[#10261B] px-2.5 py-1 rounded-full border border-[#20E68A]/20">
                      {project.stackBadge}
                    </span>
                    <span className="text-xs font-mono text-[#9AA8A0]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F2] group-hover:text-[#20E68A] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#9AA8A0] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mb-5 space-y-2">
                    <div className="text-xs font-mono text-[#5D6F65] uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-[#F1F5F2]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00C878] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#20E68A]/10">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.deployment && (
                    <div className="mt-3 text-xs font-mono text-[#9AA8A0] flex items-center gap-1.5">
                      <span className="text-[#5D6F65]">Deployment:</span>
                      <span className="text-[#00C878] font-medium">{project.deployment.join(' • ')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#20E68A]/10 mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#20E68A] hover:text-[#00C878] transition-colors py-1.5"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Inspect API Endpoints</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleLinkClick(project.githubUrl, 'github', project.title)}
                    className="btn-secondary text-xs py-2 px-3 rounded-lg flex items-center gap-1.5"
                    title={project.githubUrl ? 'View GitHub Repository' : 'Repository URL Configurable'}
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#20E68A]" />
                    <span>Code</span>
                  </button>

                  <button
                    onClick={() => handleLinkClick(project.liveUrl, 'live', project.title)}
                    className="btn-secondary text-xs py-2 px-3 rounded-lg flex items-center gap-1.5"
                    title={project.liveUrl ? 'View Live Application' : 'Live URL Configurable'}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#00C878]" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive API Endpoints & Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0A100D] border border-[#20E68A]/40 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl relative">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#20E68A]/15">
              <div>
                <span className="text-xs font-mono text-[#20E68A] bg-[#10261B] px-2 py-0.5 rounded border border-[#20E68A]/20">
                  {selectedProject.stackBadge}
                </span>
                <h3 className="text-xl font-bold text-[#F1F5F2] mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#9AA8A0] font-mono mt-0.5">
                  Architecture & API Specification
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-[#0D1511] text-[#9AA8A0] hover:text-[#F1F5F2] hover:bg-[#10261B] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Notes */}
            {selectedProject.architectureNotes && (
              <div className="my-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#5D6F65] mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#20E68A]" />
                  <span>Architecture Highlights</span>
                </h4>
                <div className="space-y-1.5 bg-[#0D1511] p-3 rounded-lg border border-[#20E68A]/10 text-xs text-[#9AA8A0]">
                  {selectedProject.architectureNotes.map((note, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#00C878]">▹</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Endpoints List */}
            {selectedProject.endpoints && (
              <div className="my-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#5D6F65] mb-2 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-[#20E68A]" />
                  <span>Documented REST Endpoints</span>
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {selectedProject.endpoints.map((ep, i) => (
                    <div
                      key={i}
                      className="bg-[#070c09] p-2.5 rounded-lg border border-[#20E68A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            ep.method === 'GET'
                              ? 'bg-[#10261B] text-[#20E68A]'
                              : ep.method === 'POST'
                              ? 'bg-[#1a382b] text-[#00C878]'
                              : 'bg-[#2a2414] text-[#F59E0B]'
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="text-[#F1F5F2] font-semibold">{ep.path}</span>
                      </div>
                      <span className="text-[11px] text-[#9AA8A0]">{ep.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Features */}
            <div className="my-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#5D6F65] mb-2">
                All Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[#9AA8A0]">
                    <CheckCircle2 className="w-3 h-3 text-[#20E68A] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#20E68A]/15 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary text-xs py-2 px-4 rounded-lg"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
