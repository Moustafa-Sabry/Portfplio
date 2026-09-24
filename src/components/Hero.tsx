import { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Copy, 
  Check, 
  Terminal, 
  Server 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenCVModal: () => void;
}

export function Hero({ onOpenCVModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'developer' | 'server' | 'health'>('developer');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    developer: `// developer.ts
const developer = {
  name: "${profileData.name}",
  role: "${profileData.title}",
  location: "${profileData.location}",
  education: {
    degree: "B.Sc. Computer Science",
    institution: "Modern Academy (2021–2025)",
    gpa: "3.33 / 4.0"
  },
  diploma: "NTI MEAN Stack Diploma (300+ hrs)",
  primaryStack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "NestJS",
    "REST APIs",
    "Angular"
  ],
  security: ["JWT Authentication", "RBAC", "Validation"],
  status: "Available for Junior & Entry-Level Roles"
};

export default developer;`,

    server: `// server.ts — Node.js & Express Architecture
import express from 'express';
import mongoose from 'mongoose';
import { authenticateJWT } from './middleware/auth';
import { router as apiRouter } from './routes/v1';

const app = express();
app.use(express.json());

// Secure REST API Pipeline
app.use('/api/v1', authenticateJWT, apiRouter);

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    app.listen(5000, () => {
      console.log('🚀 Server listening on port 5000');
    });
  });`,

    health: `// health-check.json
{
  "service": "Portfolio Backend Services",
  "status": "UP",
  "code": 200,
  "developer": "Moustafa Mohamed Sabry",
  "environment": "Production-Ready",
  "connections": {
    "database": "MongoDB Atlas Connected",
    "authGuard": "JWT Verification Active",
    "apiFrameworks": ["Express.js", "NestJS"]
  },
  "metrics": {
    "trainingHours": 300,
    "problemsSolved": "150+",
    "verifiedAPIs": "20+"
  }
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="ambient-glow-top" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Title, Description, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A100D] border border-[#20E68A]/20 text-xs font-mono mb-6 text-[#9AA8A0]">
              <span className="w-2 h-2 rounded-full bg-[#00C878] animate-pulse"></span>
              <span className="text-[#F1F5F2] font-medium">Open to Opportunities</span>
              <span className="text-[#5D6F65]">|</span>
              <span className="flex items-center gap-1 text-[#20E68A]">
                <MapPin className="w-3 h-3" />
                {profileData.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#F1F5F2] leading-[1.15] mb-5">
              Building Reliable Backends & <span className="text-[#20E68A] relative inline-block">Modern Web</span> Experiences.
            </h1>

            {/* Professional Title Subheading */}
            <div className="text-lg sm:text-xl font-semibold text-[#00C878] mb-5 flex items-center gap-2">
              <span>{profileData.title}</span>
              <span className="text-[#5D6F65] hidden sm:inline">•</span>
              <span className="text-sm font-normal text-[#9AA8A0] hidden sm:inline">CS Graduate 2025</span>
            </div>

            {/* Short Professional Description */}
            <p className="text-base sm:text-lg text-[#9AA8A0] leading-relaxed max-w-2xl mb-8">
              {profileData.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-3.5 rounded-lg"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-3.5 rounded-lg"
              >
                <Download className="w-4 h-4 text-[#20E68A]" />
                <span>Download CV</span>
              </button>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-mono text-[#9AA8A0] hover:text-[#20E68A] py-2 px-3 transition-colors group"
                title="Configurable GitHub URL"
              >
                <GithubIcon className="w-4 h-4 text-[#9AA8A0] group-hover:text-[#20E68A]" />
                <span>GitHub →</span>
              </a>
            </div>

            {/* Quick Tech Pill Highlights */}
            <div className="mt-10 pt-8 border-t border-[#20E68A]/10 w-full flex flex-wrap items-center gap-2 text-xs font-mono text-[#9AA8A0]">
              <span className="text-[#5D6F65] mr-2">Core Competencies:</span>
              <span className="tag-badge">Node.js</span>
              <span className="tag-badge">Express.js</span>
              <span className="tag-badge">MongoDB</span>
              <span className="tag-badge">NestJS</span>
              <span className="tag-badge">REST APIs</span>
              <span className="tag-badge">JWT & RBAC</span>
              <span className="tag-badge">Angular</span>
            </div>
          </div>

          {/* Right Column: Developer Code & Terminal Visual Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="terminal-window border border-[#20E68A]/25 relative group hover:border-[#20E68A]/50 transition-all duration-300">
              {/* Terminal Window Header */}
              <div className="terminal-header bg-[#0A100D] border-b border-[#20E68A]/15 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="terminal-dots">
                    <span className="terminal-dot red" />
                    <span className="terminal-dot yellow" />
                    <span className="terminal-dot green" />
                  </div>
                  <span className="font-mono text-xs text-[#9AA8A0] ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#20E68A]" />
                    <span>moustafa-env: ~</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-[#9AA8A0] hover:text-[#20E68A] rounded bg-[#0D1511] border border-[#20E68A]/15 hover:border-[#20E68A]/30 transition-all"
                    title="Copy code to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#20E68A]" />
                        <span className="text-[#20E68A]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Panel Tabs */}
              <div className="flex items-center bg-[#070c09] border-b border-[#20E68A]/10 px-2 pt-1 font-mono text-xs overflow-x-auto">
                <button
                  onClick={() => setActiveTab('developer')}
                  className={`px-3 py-1.5 rounded-t border-t-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'developer'
                      ? 'border-[#20E68A] bg-[#0D1511] text-[#20E68A] font-semibold'
                      : 'border-transparent text-[#9AA8A0] hover:text-[#F1F5F2]'
                  }`}
                >
                  <span className="text-[#00C878]">ts</span>
                  <span>developer.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('server')}
                  className={`px-3 py-1.5 rounded-t border-t-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'server'
                      ? 'border-[#20E68A] bg-[#0D1511] text-[#20E68A] font-semibold'
                      : 'border-transparent text-[#9AA8A0] hover:text-[#F1F5F2]'
                  }`}
                >
                  <Server className="w-3 h-3 text-[#00C878]" />
                  <span>server.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('health')}
                  className={`px-3 py-1.5 rounded-t border-t-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'health'
                      ? 'border-[#20E68A] bg-[#0D1511] text-[#20E68A] font-semibold'
                      : 'border-transparent text-[#9AA8A0] hover:text-[#F1F5F2]'
                  }`}
                >
                  <span className="text-[#20E68A]">{`{ }`}</span>
                  <span>health.json</span>
                </button>
              </div>

              {/* Code Content with syntax styling */}
              <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto max-h-[380px] bg-[#050807] scrollbar-thin">
                <pre className="text-[#9AA8A0] leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Bottom Terminal Status Bar */}
              <div className="bg-[#0A100D] border-t border-[#20E68A]/10 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-[#5D6F65]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#20E68A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20E68A]"></span>
                    UTF-8
                  </span>
                  <span>TypeScript 5.x</span>
                </div>
                <div className="text-[#9AA8A0]">
                  Node.js / Express / NestJS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
