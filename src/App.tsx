import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Training } from './components/Training';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Activities } from './components/Activities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Area */}
      <main className="main-content">
        {/* 1. Hero Section with Interactive Code Visual */}
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* 2. Developer Statistics (Verified from CV) */}
        <Stats />

        {/* 3. About Section with Split Narrative and Info Card */}
        <About />

        {/* 4. Categorized Skills Section */}
        <Skills />

        {/* 5. Featured Projects Showcase (High Visual Priority) */}
        <Projects />

        {/* 6. Professional Training Section (NTI MEAN Stack Diploma) */}
        <Training />

        {/* 7. Academic Education (Modern Academy Computer Science) */}
        <Education />

        {/* 8. Certifications & Courses (Meta & EGYFWD) */}
        <Certifications />

        {/* 9. Problem Solving & Competitive Programming (Modern Academy ECPC) */}
        <Activities />

        {/* 10. Contact Section with Direct Actions */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal & Print/Download Launcher */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

export default App;
