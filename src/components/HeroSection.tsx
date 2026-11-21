import React from 'react';
import { HeroAvatar } from './HeroAvatar';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative min-h-screen pt-20 pb-12 flex flex-col justify-between items-center px-4 sm:px-8 border-b border-line overflow-hidden bg-grid-subtle">
      {/* Top Oversized Edge-to-Edge Metallic Headline */}
      <div className="w-full text-center mt-6 sm:mt-10 select-none pointer-events-none z-10">
        <h1 className="metallic-headline font-headline tracking-tightPlus text-[14.5vw] sm:text-[13.5vw] md:text-[12.5vw] uppercase">
          HI, I&apos;M ZAUZA
        </h1>
      </div>

      {/* Centerpiece Interactive Floating 3D Bust Avatar */}
      <HeroAvatar />

      {/* Hero Bottom Row Info Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-center md:text-left z-20">
        {/* Role Statement (Left) */}
        <div className="max-w-md">
          <p className="font-mono text-[11px] leading-relaxed tracking-widestPlus uppercase text-ink-muted">
            OFFICE ADMINISTRATION &amp; ARCHIVING SPECIALIST DRIVEN BY PRECISION, ORDER, AND YOUTH
            COLLABORATION.
          </p>
        </div>

        {/* Availability Status (Right) */}
        <div className="flex items-center space-x-2.5 font-mono text-[11px] tracking-widestPlus uppercase bg-surface/90 border border-line px-3.5 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-ink">BASED IN Jakarta, ID · OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>
    </header>
  );
};
