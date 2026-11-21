import React, { useRef, useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopyEmail = async () => {
    const email = CONTACT_INFO.email;
    let success = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        success = document.execCommand('copy');
      } catch {
        success = false;
      }
      document.body.removeChild(textarea);
    }

    if (success) {
      setCopied(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="bg-surface border border-line p-8 sm:p-14 relative overflow-hidden">
        {/* Eyebrow Tag */}
        <span className="font-mono text-xs text-electric tracking-widestPlus uppercase block mb-3">
          [ 04 / LET&apos;S CONNECT ]
        </span>

        {/* Massive Callout Headline */}
        <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight max-w-3xl leading-none">
          READY TO CONTRIBUTE
        </h2>

        {/* Description Paragraph */}
        <p className="text-ink-muted text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
          Terbuka untuk posisi staf administrasi perkantoran, asisten tata kelola arsip, koordinator
          kesekretariatan, maupun kepanitiaan event. Siap berdedikasi dengan ketelitian tinggi,
          integritas, dan semangat pembelajar.
        </p>

        {/* Interactive Direct Actions Grid */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          {/* Email with Copy-to-Clipboard Action */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Klik untuk menyalin email"
            className="px-5 py-3.5 bg-obsidian border border-line hover:border-electric text-ink hover:text-electric transition-colors duration-200 font-mono text-xs tracking-wider uppercase flex items-center space-x-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-2"
          >
            <span aria-hidden="true">✉</span>
            <span>{CONTACT_INFO.email}</span>
            {copied && <span className="text-[10px] text-electric font-bold">[COPIED!]</span>}
          </button>

          {/* WhatsApp Direct Link */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-ink text-obsidian hover:bg-electric transition-colors duration-200 font-mono text-xs font-bold tracking-wider uppercase flex items-center space-x-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-2"
          >
            <span>WHATSAPP: {CONTACT_INFO.whatsappDisplay}</span>
            <span aria-hidden="true">↗</span>
          </a>

          {/* Location Badge */}
          <div className="px-5 py-3.5 bg-surface-subtle border border-line text-ink-muted font-mono text-xs tracking-wider uppercase flex items-center space-x-2">
            <span aria-hidden="true">📍</span>
            <span>{CONTACT_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
