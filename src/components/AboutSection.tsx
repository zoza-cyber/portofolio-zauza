import React from 'react';
import { EDUCATION_TAGS, KEY_STATS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCv: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCv }) => {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-10 border-b border-line max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-line">
        <div>
          <span className="font-mono text-xs text-electric tracking-widestPlus uppercase block mb-1">
            [ 01 / PROFILE &amp; BACKGROUND ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl uppercase tracking-tight text-ink">
            ABOUT ME
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-muted uppercase mt-2 sm:mt-0 tracking-widestPlus">
          CENGKARENG, JAKARTA BARAT, DKI JAKARTA
        </span>
      </div>

      {/* Asymmetric 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Story */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xl sm:text-2xl font-sans font-medium text-ink leading-relaxed">
            Lulusan <span className="text-electric">SMK Manajemen Perkantoran</span> dengan
            pengalaman langsung di tata kelola arsip instansi negara, kesekretariatan organisasi,
            serta koordinasi logistik acara skala kabupaten.
          </p>
          <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
            Memiliki rekam jejak formal melalui Praktik Kerja Lapangan (PKL) di{' '}
            <strong className="text-ink font-semibold">
              Sekretariat Wakil Presiden Republik Indonesia
            </strong>{' '}
            (Asisten Deputi Kesehatan, Gizi, dan Pembangunan Keluarga). Terbiasa memproses penataan
            ratusan berkas inaktif, pendataan fisik &amp; digital, hingga pemilahan arsip vital
            pembangunan Universitas Islam Internasional Indonesia (UIII).
          </p>
          <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
            Di luar ranah kearsipan, saya aktif memegang tanggung jawab strategis sebagai{' '}
            <strong className="text-ink font-semibold">
              Sekretaris II PASKIBRA SMKN 1 Purbalingga (PASKAS)
            </strong>{' '}
            dan{' '}
            <strong className="text-ink font-semibold">
              Bendahara II Ikatan Santri
            </strong>
            , serta berpengalaman selama 3 tahun berturut-turut dalam kepanitiaan logistik LKBB
            Bhayangkara &amp; Polisi Cilik di POLRES Purbalingga.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-4 items-center font-mono text-xs tracking-widestPlus uppercase">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-ink text-obsidian font-bold hover:bg-electric transition-colors duration-200 flex items-center space-x-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-2"
            >
              <span>GET IN TOUCH</span>
              <span aria-hidden="true">↓</span>
            </a>
            <button
              type="button"
              onClick={onOpenCv}
              className="px-6 py-3.5 border border-line bg-surface hover:border-electric text-ink hover:text-electric transition-colors duration-200 flex items-center space-x-2 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-2"
            >
              <span>DOWNLOAD CV / RESUME</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        {/* Right: Education & Quantitative Metrics Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <div className="bg-surface border border-line p-6 relative overflow-hidden group hover:border-electric transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-electric uppercase tracking-widestPlus">
                PENDIDIKAN FORMAL
              </span>
              <span className="font-mono text-xs text-ink-muted tabular-nums">2023 – 2026</span>
            </div>
            <h3 className="font-sans font-bold text-lg text-ink">SMK Negeri 1 Purbalingga</h3>
            <p className="text-sm text-ink-muted mt-1">
              Konsentrasi Keahlian: Manajemen Perkantoran dan Layanan Bisnis (MPLB)
            </p>
            <div className="mt-4 pt-4 border-t border-line/50 flex flex-wrap gap-2">
              {EDUCATION_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-obsidian border border-line text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 2x2 Mini Key Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {KEY_STATS.map((stat) => (
              <div
                key={stat.value}
                className="bg-surface border border-line p-5 hover:border-electric transition-colors"
              >
                <div
                  className={`font-headline tabular-nums ${
                    stat.compact ? 'text-xl sm:text-2xl pt-1' : 'text-3xl'
                  } ${stat.accent ? 'text-electric' : 'text-ink'}`}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-ink-muted uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
