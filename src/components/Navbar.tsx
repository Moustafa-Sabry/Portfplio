import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export function Navbar({ onOpenCVModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Training', href: '#training' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section active detection
      const sections = ['hero', 'about', 'skills', 'projects', 'training', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050807]/90 backdrop-blur-md border-b border-[#20E68A]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20E68A] rounded-lg p-1"
          aria-label="Moustafa Sabry Portfolio Home"
        >
          <div className="w-8 h-8 rounded-md bg-[#0A100D] border border-[#20E68A]/30 flex items-center justify-center text-[#20E68A] group-hover:border-[#20E68A] group-hover:shadow-[0_0_12px_rgba(32,230,138,0.3)] transition-all">
            <Terminal className="w-4 h-4 text-[#20E68A]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#F1F5F2] tracking-tight text-base group-hover:text-[#20E68A] transition-colors flex items-center gap-1.5">
              {profileData.shortName}
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C878] animate-pulse"></span>
            </span>
            <span className="font-mono text-[10px] text-[#9AA8A0] tracking-wider uppercase">
              Backend Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0A100D]/70 border border-[#20E68A]/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-[#050807] bg-[#20E68A] font-semibold shadow-[0_0_15px_rgba(32,230,138,0.4)]'
                    : 'text-[#9AA8A0] hover:text-[#F1F5F2] hover:bg-[#10261B]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCVModal}
            className="text-xs font-mono text-[#9AA8A0] hover:text-[#20E68A] px-3 py-2 rounded-md hover:bg-[#10261B]/40 transition-colors"
          >
            CV Preview
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="btn-primary text-xs py-2 px-4 rounded-full flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#0A100D] border border-[#20E68A]/20 text-[#F1F5F2] hover:text-[#20E68A] focus:outline-none focus:ring-2 focus:ring-[#20E68A]"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#20E68A]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A100D]/95 border-b border-[#20E68A]/20 backdrop-blur-xl px-6 py-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#10261B] text-[#20E68A] border border-[#20E68A]/30'
                      : 'text-[#9AA8A0] hover:bg-[#0D1511] hover:text-[#F1F5F2]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#20E68A]"></span>}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#20E68A]/15 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full btn-secondary text-sm justify-center py-2.5"
              >
                View CV Summary
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full btn-primary text-sm justify-center py-2.5"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
