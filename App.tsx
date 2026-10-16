/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen text-white font-sans-clean flex flex-col selection:bg-rose-500/40 selection:text-white bg-cover bg-fixed bg-center relative"
      style={{
        backgroundImage: `url(${PERSONAL_INFO.skyBgImage})`
      }}
    >
      {/* Subtle, slim scroll progress bar at the very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-800 via-rose-600 to-amber-600 z-50 origin-left pointer-events-none shadow-xs"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Top Bar Navigation */}
      <Navbar onNavigateResume={scrollToResume} />

      <main className="flex-1 space-y-4">
        {/* Split-Screen Hero with Zainab's exact uploaded portrait & key metrics */}
        <Hero
          onScrollToResume={scrollToResume}
          onScrollToContact={scrollToContact}
        />

        {/* Story & Philosophy (Cottagecore narrative & botanical banner) */}
        <StorySection />

        {/* Career Timeline, Education & ASU Certifications */}
        <ExperienceTimeline />

        {/* Official Curriculum Vitae & Downloadable PDF Resume Section */}
        <ResumeSection />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection />
      </main>

      {/* Quiet Anti-Slop Footer */}
      <Footer />
    </div>
  );
}
