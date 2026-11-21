import React, { useEffect } from 'react';
import { Printer, X, Mail } from 'lucide-react';
import {
  CONTACT_INFO,
  EDUCATION_TAGS,
  EXPERIENCE_MILESTONES,
  SKILL_DOMAINS,
  SOFTWARE_TOOLS,
} from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="print-only-sheet bg-surface border border-line w-full max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 bg-obsidian/95 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between gap-4 no-print">
          <div>
            <span className="font-mono text-[10px] text-electric tracking-widestPlus uppercase block">
              [ CURRICULUM VITAE // ARCHIVE DOSSIER ]
            </span>
            <h3 id="cv-modal-title" className="font-headline text-lg text-ink uppercase">
              Zauza Bilqis Sumayya
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-ink text-obsidian hover:bg-electric transition-colors font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href={CONTACT_INFO.cvMailto}
              className="px-3.5 py-2 bg-surface border border-line hover:border-electric text-ink hover:text-electric transition-colors font-mono text-[11px] uppercase tracking-wider hidden sm:flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Request</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-2 border border-line bg-surface hover:border-electric text-ink-muted hover:text-electric transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-6 sm:p-10 space-y-8 text-sm">
          <div className="border-b border-line pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                ZAUZA BILQIS SUMAYYA
              </h2>
              <p className="font-mono text-xs text-electric tracking-widestPlus uppercase mt-1">
                Office Administration &amp; Archiving Specialist
              </p>
            </div>
            <div className="font-mono text-[11px] text-ink-muted space-y-1 sm:text-right">
              <div>{CONTACT_INFO.location}</div>
              <div>{CONTACT_INFO.email}</div>
              <div>WhatsApp: {CONTACT_INFO.whatsappDisplay}</div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="font-mono text-xs text-electric tracking-widestPlus uppercase mb-2">
              RINGKASAN PROFIL
            </h4>
            <p className="text-ink-muted leading-relaxed">
              Lulusan SMK Manajemen Perkantoran dan Layanan Bisnis (MPLB) dengan pengalaman praktik
              kerja lapangan di Sekretariat Wakil Presiden RI, kepemimpinan kesekretariatan &amp;
              kebendaharaan organisasi, serta 3 tahun pengalaman logistik event tingkat kabupaten di
              POLRES Purbalingga.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-mono text-xs text-electric tracking-widestPlus uppercase mb-3">
              PENDIDIKAN FORMAL
            </h4>
            <div className="bg-obsidian border border-line p-4">
              <div className="flex flex-wrap justify-between gap-2">
                <strong className="text-ink">SMK Negeri 1 Purbalingga</strong>
                <span className="font-mono text-xs text-ink-muted tabular-nums">2023 – 2026</span>
              </div>
              <p className="text-ink-muted text-xs mt-1">
                Manajemen Perkantoran dan Layanan Bisnis (MPLB) —{' '}
                {EDUCATION_TAGS.join(' · ')}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-mono text-xs text-electric tracking-widestPlus uppercase mb-3">
              PENGALAMAN UTAMA
            </h4>
            <div className="space-y-4">
              {EXPERIENCE_MILESTONES.map((item) => (
                <div key={item.id} className="border-b border-line/60 pb-4 last:border-b-0">
                  <div className="flex flex-wrap justify-between gap-2">
                    <strong className="text-ink">{item.organization}</strong>
                    <span className="font-mono text-[11px] text-ink-muted tabular-nums">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-electric mt-0.5">{item.roleSubtitle}</p>
                  <ul className="mt-2 space-y-1 text-xs text-ink-muted list-disc list-inside">
                    {item.highlights.map((h) => (
                      <li key={h.title}>
                        <span className="text-ink font-medium">{h.title}:</span> {h.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="font-mono text-xs text-electric tracking-widestPlus uppercase mb-2">
                KOMPETENSI INTI
              </h4>
              <ul className="space-y-1 text-xs text-ink-muted">
                {SKILL_DOMAINS.flatMap((d) => d.items).map((skill) => (
                  <li key={skill}>· {skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-electric tracking-widestPlus uppercase mb-2">
                PERANGKAT LUNAK
              </h4>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                {SOFTWARE_TOOLS.map((tool) => (
                  <div key={tool.name} className="p-2 bg-obsidian border border-line">
                    <div className="text-ink font-semibold">{tool.name}</div>
                    <div className="text-[10px] text-ink-muted">{tool.purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
