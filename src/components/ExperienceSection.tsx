import React from 'react';
import { EXPERIENCE_MILESTONES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-10 border-b border-line max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-line">
        <div>
          <span className="font-mono text-xs text-electric tracking-widestPlus uppercase block mb-1">
            [ 02 / ARCHIVE &amp; TRACK RECORD ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl uppercase tracking-tight text-ink">
            EXPERIENCE
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-muted uppercase mt-2 sm:mt-0 tracking-widestPlus">
          4 VERIFIED MILESTONES
        </span>
      </div>

      {/* 4 Archival Folder Cards Stack */}
      <div className="space-y-8">
        {EXPERIENCE_MILESTONES.map((milestone) => (
          <article
            key={milestone.id}
            className="bg-surface border border-line p-6 sm:p-8 hover:border-electric transition-all relative group"
          >
            {/* Folder Tab Accent */}
            <div
              className={`folder-tab absolute -top-3 left-6 font-mono text-[10px] font-bold uppercase tracking-widestPlus px-4 py-0.5 ${
                milestone.isPrimaryTab
                  ? 'bg-electric text-obsidian'
                  : 'bg-surface-hover border border-line text-ink'
              }`}
            >
              {milestone.tabLabel}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mt-2 mb-6 border-b border-line/60 pb-6">
              <div>
                <span className="font-mono text-xs text-electric tracking-widestPlus uppercase block mb-1 tabular-nums">
                  {milestone.period}
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl text-ink uppercase">
                  {milestone.organization}
                </h3>
                <p className="font-sans text-sm text-ink-muted mt-1">{milestone.roleSubtitle}</p>
              </div>
              <span className="self-start font-mono text-xs px-3 py-1.5 bg-obsidian border border-line text-ink uppercase tracking-wider shrink-0">
                {milestone.categoryBadge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-ink-muted leading-relaxed">
              {milestone.highlights.map((highlight) => (
                <div key={highlight.title} className="space-y-2">
                  <h4 className="font-mono text-xs text-ink uppercase tracking-wider flex items-center gap-2">
                    <span className="text-electric" aria-hidden="true">
                      ✦
                    </span>
                    <span>{highlight.title}</span>
                  </h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
