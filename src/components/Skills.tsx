import { useState } from 'react';
import { 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Wrench, 
  ShieldCheck, 
  Code2, 
  GitBranch, 
  FileCode2, 
  Boxes, 
  Network 
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory['id']>('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  // Icon selector helper
  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'nodejs':
      case 'expressjs':
      case 'nestjs':
        return <Server className="w-5 h-5 text-[#20E68A]" />;
      case 'rest-apis':
        return <Network className="w-5 h-5 text-[#00C878]" />;
      case 'jwt-auth':
        return <ShieldCheck className="w-5 h-5 text-[#20E68A]" />;
      case 'mongoose':
      case 'mongodb':
      case 'mysql':
        return <Database className="w-5 h-5 text-[#00C878]" />;
      case 'angular':
        return <Boxes className="w-5 h-5 text-[#20E68A]" />;
      case 'typescript-fe':
      case 'typescript':
      case 'javascript-fe':
      case 'javascript':
        return <Code2 className="w-5 h-5 text-[#20E68A]" />;
      case 'html5':
      case 'css3':
        return <Layout className="w-5 h-5 text-[#00C878]" />;
      case 'python':
      case 'java':
        return <FileCode2 className="w-5 h-5 text-[#20E68A]" />;
      case 'git':
      case 'github':
        return <GitBranch className="w-5 h-5 text-[#00C878]" />;
      case 'postman':
      case 'swagger':
        return <Wrench className="w-5 h-5 text-[#20E68A]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#20E68A]" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper bg-[#0A100D]/40 relative border-t border-[#20E68A]/10">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // Technical Skills</span>
          </div>
          <h2 className="section-title">
            Technologies & <span className="text-[#20E68A]">Tools</span> I Work With
          </h2>
          <p className="section-subtitle">
            Categorized technical stack focused on scalable server architectures, database modeling, and modern client integration.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {skillCategories.map((cat) => {
            const count = cat.id === 'all' 
              ? skillsData.length 
              : skillsData.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#10261B] text-[#20E68A] border border-[#20E68A]/40 font-semibold shadow-[0_0_12px_rgba(32,230,138,0.15)]'
                    : 'bg-[#0D1511] text-[#9AA8A0] border border-[#20E68A]/10 hover:border-[#20E68A]/25 hover:text-[#F1F5F2]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  selectedCategory === cat.id ? 'bg-[#20E68A]/20 text-[#20E68A]' : 'bg-[#050807] text-[#5D6F65]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="card-base bg-[#0D1511] p-5 rounded-xl border border-[#20E68A]/15 hover:border-[#20E68A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#070c09] border border-[#20E68A]/20 flex items-center justify-center group-hover:border-[#20E68A]/50 group-hover:bg-[#10261B]/60 transition-all">
                    {getSkillIcon(skill.id)}
                  </div>
                  {skill.badge && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#10261B] text-[#00C878] border border-[#20E68A]/15">
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-[#F1F5F2] group-hover:text-[#20E68A] transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Practical Description */}
                <p className="text-xs text-[#9AA8A0] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Category Tag */}
              <div className="mt-4 pt-3 border-t border-[#20E68A]/10 flex items-center justify-between text-[11px] font-mono text-[#5D6F65]">
                <span className="capitalize">{skill.category}</span>
                <span className="text-[#00C878] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  Active Skill
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
