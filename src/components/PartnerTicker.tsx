import React from 'react';
import { PARTNER_ORGANIZATIONS } from '../data/portfolioData';

export const PartnerTicker: React.FC = () => {
  return (
    <section
      id="partners"
      aria-label="Trusted and collaborated organizations"
      className="bg-surface-subtle border-b border-line py-4 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-widestPlus text-ink-muted block text-center sm:text-left">
          [ TRUSTED &amp; COLLABORATED WITH ]
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs sm:text-sm tracking-widestPlus uppercase text-ink/80 flex items-center space-x-10">
          {[0, 1].map((loopIdx) => (
            <React.Fragment key={loopIdx}>
              {PARTNER_ORGANIZATIONS.map((org) => (
                <React.Fragment key={`${loopIdx}-${org}`}>
                  <span>{org}</span>
                  <span className="text-electric" aria-hidden="true">
                    ✦
                  </span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
