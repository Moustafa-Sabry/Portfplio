import { Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Training', href: '#training' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050807] border-t border-[#20E68A]/10 py-12 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#20E68A]/10">
          {/* Left: Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A100D] border border-[#20E68A]/30 flex items-center justify-center text-[#20E68A]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F1F5F2]">{profileData.name}</div>
              <div className="text-xs font-mono text-[#00C878]">{profileData.title}</div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#9AA8A0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#20E68A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0A100D] border border-[#20E68A]/15 text-[#9AA8A0] hover:text-[#20E68A] hover:border-[#20E68A]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0A100D] border border-[#20E68A]/15 text-[#9AA8A0] hover:text-[#20E68A] hover:border-[#20E68A]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0A100D] border border-[#20E68A]/15 text-[#9AA8A0] hover:text-[#20E68A] hover:border-[#20E68A]/40 transition-colors"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#5D6F65]">
          <div>
            © 2026 {profileData.name}. All rights reserved.
          </div>
          <div className="text-right">
            Cairo, Egypt • Built with React & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
}
