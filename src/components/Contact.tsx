import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      subject || 'Job Opportunity / Collaboration'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-wrapper relative border-t border-[#20E68A]/10 overflow-hidden">
      {/* Subtle Glow */}
      <div className="ambient-glow-mid left-1/2 -translate-x-1/2 bottom-0" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-badge mx-auto">
              <Terminal className="w-3.5 h-3.5" />
              <span>08 // Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F2] tracking-tight mb-4">
              Let's Build Something <span className="text-[#20E68A]">Useful.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#9AA8A0]">
              Have a project, opportunity, or collaboration in mind? Feel free to get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Action Buttons */}
            <div className="md:col-span-5 space-y-5">
              {/* Email Card */}
              <div className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-5 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#10261B] border border-[#20E68A]/20 flex items-center justify-center text-[#20E68A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] font-mono text-[#9AA8A0] hover:text-[#20E68A] bg-[#070c09] px-2.5 py-1 rounded border border-[#20E68A]/15 hover:border-[#20E68A]/30 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#20E68A]" />
                        <span className="text-[#20E68A]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs font-mono text-[#5D6F65] uppercase">Direct Email</div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm font-semibold text-[#F1F5F2] hover:text-[#20E68A] transition-colors break-all mt-0.5 block"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-5 rounded-xl flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#10261B] border border-[#20E68A]/20 flex items-center justify-center text-[#20E68A] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#5D6F65] uppercase">Location</div>
                  <div className="text-sm font-semibold text-[#F1F5F2]">
                    {profileData.location}
                  </div>
                  <div className="text-[11px] text-[#00C878] font-mono mt-0.5">
                    Available for Remote & Local Roles
                  </div>
                </div>
              </div>

              {/* External Profile Links */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-[#5D6F65] uppercase tracking-wider">
                  Social & Developer Profiles:
                </div>
                <div className="flex gap-2">
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-xs py-2.5 justify-center rounded-lg flex items-center gap-2 group"
                  >
                    <GithubIcon className="w-4 h-4 text-[#9AA8A0] group-hover:text-[#20E68A]" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#5D6F65] group-hover:text-[#20E68A]" />
                  </a>

                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-xs py-2.5 justify-center rounded-lg flex items-center gap-2 group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#9AA8A0] group-hover:text-[#20E68A]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#5D6F65] group-hover:text-[#20E68A]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Direct Email Message Composer */}
            <div className="md:col-span-7">
              <form
                onSubmit={handleSendMessage}
                className="card-base bg-[#0D1511] border border-[#20E68A]/20 p-6 rounded-2xl space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#20E68A]/15">
                  <span className="text-xs font-mono text-[#20E68A] flex items-center gap-1.5 font-semibold">
                    <Send className="w-3.5 h-3.5" />
                    Quick Dispatch Message
                  </span>
                  <span className="text-[11px] font-mono text-[#9AA8A0]">
                    Opens Default Mail Client
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9AA8A0] mb-1.5" htmlFor="subject">
                    Subject / Role Opportunity
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Junior Backend Developer Opening / Project Inquiry"
                    className="w-full bg-[#070c09] border border-[#20E68A]/20 focus:border-[#20E68A] rounded-lg px-3.5 py-2.5 text-xs text-[#F1F5F2] placeholder-[#5D6F65] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9AA8A0] mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Moustafa, I reviewed your portfolio and would like to discuss..."
                    className="w-full bg-[#070c09] border border-[#20E68A]/20 focus:border-[#20E68A] rounded-lg px-3.5 py-2.5 text-xs text-[#F1F5F2] placeholder-[#5D6F65] focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-xs font-mono text-[#9AA8A0] hover:text-[#20E68A] transition-colors"
                  >
                    Prefer direct mailto link? Click here
                  </a>

                  <button
                    type="submit"
                    className="btn-primary text-xs py-2.5 px-5 rounded-lg flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
