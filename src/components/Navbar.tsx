import React from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-obsidian/85 backdrop-blur-md border-b border-line no-print"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#"
          className="font-mono text-[11px] sm:text-xs tracking-widestPlus text-ink hover:text-electric transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-4"
        >
          ZAUZA B. SUMAYYA <span className="text-electric">[ZBS]</span>
        </a>

        <div className="flex items-center space-x-4 sm:space-x-7 md:space-x-12 font-mono text-[11px] sm:text-xs tracking-widestPlus uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink hover:text-electric transition-colors duration-200 whitespace-nowrap shrink-0 py-2 focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
