import React from 'react';
import { SKILL_DOMAINS, SOFTWARE_TOOLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-10 border-b border-line max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-line">
        <div>
          <span className="font-mono text-xs text-electric tracking-widestPlus uppercase block mb-1">
            [ 03 / CAPABILITIES ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl uppercase tracking-tight text-ink">
            SKILLS &amp; TOOLS
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-muted uppercase mt-2 sm:mt-0 tracking-widestPlus">
          CORE COMPETENCIES
        </span>
      </div>

      {/* Bento Grid for Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_DOMAINS.map((domain) => (
          <div
            key={domain.id}
            className="bg-surface border border-line p-8 flex flex-col justify-between hover:border-electric transition-colors"
          >
            <div>
              <div className="font-mono text-xs text-electric uppercase tracking-widestPlus mb-2">
                {domain.domainLabel}
              </div>
              <h3 className="font-headline text-xl text-ink uppercase mb-4">{domain.title}</h3>
              <p className="text-ink-muted text-sm mb-6 leading-relaxed">{domain.description}</p>
              <ul className="space-y-3 font-mono text-xs text-ink">
                {domain.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="text-electric" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-line/60 font-mono text-[10px] text-ink-muted uppercase">
              {domain.footerNote}
            </div>
          </div>
        ))}

        {/* Bento 03: Software & Tools */}
        <div className="bg-surface border border-line p-8 flex flex-col justify-between hover:border-electric transition-colors">
          <div>
            <div className="font-mono text-xs text-electric uppercase tracking-widestPlus mb-2">
              [ DOMAIN 03 ]
            </div>
            <h3 className="font-headline text-xl text-ink uppercase mb-4">Software Toolkit</h3>
            <p className="text-ink-muted text-sm mb-6 leading-relaxed">
              Instrumen komputasi harian untuk produktivitas, analisis data administratif, dan
              visualisasi.
            </p>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              {SOFTWARE_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 bg-obsidian border border-line flex flex-col justify-between"
                >
                  <span className="text-ink font-bold">{tool.name}</span>
                  <span className="text-[10px] text-ink-muted mt-1">{tool.purpose}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-line/60 font-mono text-[10px] text-ink-muted uppercase">
            Efisiensi &amp; Ketelitian Tinggi
          </div>
        </div>
      </div>
    </section>
  );
};
