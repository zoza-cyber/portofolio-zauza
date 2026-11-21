export interface AvatarExpression {
  url: string;
  badge: string;
  reaction: string;
  alt: string;
}

export interface ExperienceHighlight {
  title: string;
  description: string;
}

export interface ExperienceMilestone {
  id: string;
  tabLabel: string;
  isPrimaryTab?: boolean;
  period: string;
  organization: string;
  roleSubtitle: string;
  categoryBadge: string;
  highlights: ExperienceHighlight[];
}

export interface SkillDomainChecklist {
  id: string;
  domainLabel: string;
  title: string;
  description: string;
  items: string[];
  footerNote: string;
}

export interface SoftwareTool {
  name: string;
  purpose: string;
}

export const AVATAR_EXPRESSIONS: AvatarExpression[] = [
  {
    url: 'https://lh3.googleusercontent.com/aida/ALJJyrCfkJ3oVWelh5OblSXezCgVw90jREFrGU_wyJuFpa1WkLxjsHT7PkrIVz3WjeU2emv1egq3MEhNOBFljoonXYCxsF686PtuWApIsmHGcHo5axzL-eLUEe-d5rqMHbLA8iQw_8iVR5Aj68n5B5Rs9K9ENBJYiatCUgGJkUO_9Vyp3nfb-bkvT4dOlkvk51CJLTupeIpuBFqGNNepXEF2EMtOBatRR2SnTQSa6Yq7FVJ-',
    badge: 'TAP TO POKE ✦',
    reaction: '✦ Poked! ✦',
    alt: '3D stylized portrait of Zauza Bilqis Sumayya with a calm friendly smile',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZZ2nOBV1Qg9GDykHnVLxzpe7z-0bL1Pk_SfW-TaOSVUBhO7HPK483zgAILFShte_MwYGO1xmy6OEnbsSJ-f7KyNn2_rNb_XsNyFjW4IfUWciBbSEWs8BespL7HR-JAhYd82NAK0Otc0Wa5hT35697Ueuzm288mFDIv7aA81vk4aRNfUt7sxtKsil2_5xltmmvWfQZ5s4MOunp_nTW3IfbgYWW_9nIqRQcT4C2uUc',
    badge: 'CHEEKY SMILE 😄',
    reaction: '😄 *scrunch!*',
    alt: '3D stylized portrait of Zauza Bilqis Sumayya with a squint and cheeky scrunch nose smile',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxhPbr371aF-fYf_Hal_73Cq8F-va9wUJ4jcu2HfLHmkeod8bFEjDFw7r_pGRhFYZ3EOD5qYB_0a5pQYvxkSuXK-bwO5TCqgIp36SdVnQKolZi20wOUb_-WZyaDyywZCqw4PAHnPQKf9u6PknHltt70_gDpxhFZMMmBjr4Dvyx3quAEueUXN4GaofzVwuub_o-LVfW0YWWbRpgyEWHglom6CkmfCQvYnVqsERlmPc',
    badge: 'CONFIDENT WINK 😉',
    reaction: '😉 *wink!*',
    alt: '3D stylized portrait of Zauza Bilqis Sumayya with a confident wink and smile',
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6UkpUuM5Ij2kiT4ZXsq1rkB5Fd90uxtBNVuJDp0sthOkkUxMD3EZQVMZk2RnJcQfI1MUsEHFghQ2zfcf_wUMg8FYj9rmMSGZJb4UWhMiYncV9hogyceDsE0MLmWL4tUsXUt8E_AUFoNHyQf3ykF_2-UyUmHBS-Q9rffz-FPckSznMaAisl1kFBdjOaZlq_9HGNiubwsFbPizk_9XvEsgOlkJyuZpzul6e5QSsw84',
    badge: 'SURPRISED / EXCITED 😮',
    reaction: '😮 *wow!*',
    alt: "3D stylized portrait of Zauza Bilqis Sumayya with a surprised and wide-eyed 'O' expression",
  },
];

export const PARTNER_ORGANIZATIONS: string[] = [
  'SEKRETARIAT WAKIL PRESIDEN RI',
  'POLRES PURBALINGGA',
  'SMK NEGERI 1 PURBALINGGA',
  'PASKIBRA SMKN 1 PURBALINGGA (PASKAS)',
  'IKATAN SANTRI MIFTAHUSSALAM BANYUMAS',
  'UNIVERSITAS ISLAM INTERNASIONAL INDONESIA (UIII)',
];

export const EDUCATION_TAGS: string[] = [
  'Administrasi Perkantoran',
  'Kearsipan Fisik & Digital',
  'Korespondensi Resmi',
  'Pengelolaan Kas Kecil',
];

export const KEY_STATS = [
  {
    value: '3 THN',
    accent: false,
    label: 'Kepanitiaan LKBB Polres Purbalingga',
  },
  {
    value: 'SETWAPRES',
    accent: true,
    label: 'PKL Asdep Kesehatan, Gizi & SDM',
    compact: true,
  },
  {
    value: 'BPH',
    accent: false,
    label: 'Sekretaris & Bendahara Organisasi',
  },
  {
    value: '100%',
    accent: true,
    label: 'Ketertiban & Rekapitulasi Berkas',
  },
];

export const EXPERIENCE_MILESTONES: ExperienceMilestone[] = [
  {
    id: 'setwapres',
    tabLabel: '01 // INTERNSHIP',
    isPrimaryTab: true,
    period: 'JANUARI 2026 – APRIL 2026 · PRAKTIK KERJA LAPANGAN (PKL)',
    organization: 'Sekretariat Wakil Presiden RI',
    roleSubtitle:
      'Asisten Deputi Bidang Dukungan Kebijakan Pembangunan Manusia dan Pemerataan Pembangunan (Subbid Kesehatan, Gizi, dan Pembangunan Keluarga) — Jakarta Pusat',
    categoryBadge: 'Instansi Pemerintah Pusat',
    highlights: [
      {
        title: 'Penataan & Pendataan Arsip',
        description:
          'Menata, mengelompokkan, dan mendata arsip inaktif kurun 2017–2025 ke dalam box arsip terstandar serta menyusun daftar berkas dan daftar isi berkas secara akurat.',
      },
      {
        title: 'Pengelolaan Arsip Vital UIII',
        description:
          'Mendata dan memilah dokumen vital proyek strategis pembangunan Universitas Islam Internasional Indonesia (UIII) untuk menjamin keutuhan dan kemudahan temu kembali dokumen negara.',
      },
      {
        title: 'Administrasi Deputi',
        description:
          'Mendukung proses ekspedisi surat resmi, notulensi rapat koordinasi penanganan gizi dan stunting, serta digitalisasi dokumen pendukung kebijakan wakil presiden.',
      },
    ],
  },
  {
    id: 'polres',
    tabLabel: '02 // EVENT LOGISTICS & JURY LIAISON',
    period: '2024 – 2026 (3 TAHUN BERTURUT-TURUT)',
    organization: 'POLRES Purbalingga (Satlantas & Binmas)',
    roleSubtitle:
      'Kepanitiaan Lomba Ketangkasan Baris Berbaris (LKBB) Bhayangkara, Polisi Cilik (Pocil), dan Patroli Keamanan Sekolah (PKS)',
    categoryBadge: 'Skala Kabupaten',
    highlights: [
      {
        title: 'Koordinasi Logistik Acara',
        description:
          'Bertanggung jawab atas inventarisasi, distribusi fasilitas perlombaan, briefing tim lapangan, serta memastikan kesiapan arena untuk puluhan kontingen sekolah.',
      },
      {
        title: 'Pendampingan Dewan Juri',
        description:
          'Mendampingi dewan juri dari unsur kepolisian dan purna paskibra, mendistribusikan lembar penilaian, dan menjaga protokol sterilisasi meja rekapitulasi.',
      },
      {
        title: 'Rekapitulasi Nilai Cepat',
        description:
          'Menghitung dan memvalidasi rekapitulasi nilai perlombaan dengan ketelitian 100% tanpa komplain selisih skor pada pengumuman juara resmi.',
      },
    ],
  },
  {
    id: 'paskas',
    tabLabel: '03 // SECRETARY BPH',
    period: '2024 – 2025 · BADAN PENGURUS HARIAN (BPH)',
    organization: 'Paskibra SMK Negeri 1 Purbalingga (PASKAS)',
    roleSubtitle: 'Sekretaris II — Organisasi Kedisiplinan & Baris Berbaris Sekolah',
    categoryBadge: 'Kesekretariatan Utama',
    highlights: [
      {
        title: 'Tata Naskah & Surat Dinas',
        description:
          'Menyusun surat permohonan izin, proposal kegiatan diklat, lembar disposisi, dan surat keputusan internal organisasi sesuai format baku perkantoran.',
      },
      {
        title: 'Pengarsipan Notulensi',
        description:
          'Mendokumentasikan seluruh risalah musyawarah anggota, presensi kehadiran rutin latihan, serta memelihara buku induk keanggotaan PASKAS.',
      },
      {
        title: 'Laporan Pertanggungjawaban',
        description:
          'Mengompilasi LPJ tahunan bersama Ketua dan Bendahara untuk diserahkan kepada Pembina Organisasi dan Kesiswaan SMKN 1 Purbalingga.',
      },
    ],
  },
  {
    id: 'ikatan-santri',
    tabLabel: '04 // TREASURER BPH',
    period: '2021 – 2022 · BADAN PENGURUS HARIAN (BPH)',
    organization: 'Ikatan Santri Miftahussalam Banyumas',
    roleSubtitle: 'Bendahara II — Pengelolaan Anggaran & Iuran Rutin Komunitas',
    categoryBadge: 'Manajemen Finansial',
    highlights: [
      {
        title: 'Buku Kas & Arus Dana',
        description:
          'Mencatat seluruh arus kas masuk dan keluar secara disiplin, mengarsipkan kuitansi pengeluaran, dan menyusun buku kas umum mingguan.',
      },
      {
        title: 'Anggaran Acara Keagamaan',
        description:
          'Menyusun estimasi anggaran operasional peringatan hari besar Islam, santunan sosial, serta pengadaan logistik konsumsi dan perlengkapan santri.',
      },
      {
        title: 'Transparansi Finansial',
        description:
          'Menyajikan laporan keuangan berkala kepada dewan pembina pondok dengan integritas penuh dan keterbukaan tanpa selisih pembukuan.',
      },
    ],
  },
];

export const SKILL_DOMAINS: SkillDomainChecklist[] = [
  {
    id: 'office',
    domainLabel: '[ DOMAIN 01 ]',
    title: 'Office & Archiving',
    description:
      'Standard operating procedures kearsipan negara dan penataan tata kelola dokumen modern.',
    items: [
      'Penataan & Pemilahan Arsip Inaktif',
      'Penyusunan Daftar Berkas & Isi Berkas',
      'Penyimpanan Arsip Vital Instansi',
      'Korespondensi & Tata Naskah Dinas',
      'Pembukuan Kas Kecil (Petty Cash)',
    ],
    footerNote: 'Standar ANRI & Perkantoran',
  },
  {
    id: 'event',
    domainLabel: '[ DOMAIN 02 ]',
    title: 'Event & Leadership',
    description:
      'Koordinasi lapangan, tata kelola logistik kepanitiaan, dan manajerial organisasi kepemudaan.',
    items: [
      'Koordinasi Logistik & Perlengkapan',
      'Liaison Officer & Pendamping Dewan Juri',
      'Rekapitulasi Nilai & Scoring Akurat',
      'Manajemen Waktu di Bawah Tekanan',
      'Kolaborasi Antar-Lembaga & Relawan',
    ],
    footerNote: 'Polres Purbalingga & Organisasi',
  },
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: 'MS WORD', purpose: 'Surat & Laporan' },
  { name: 'MS EXCEL', purpose: 'Formula & Rekap' },
  { name: 'GOOGLE SUITE', purpose: 'Docs & Sheets' },
  { name: 'GOOGLE DRIVE', purpose: 'Arsip Cloud' },
  { name: 'CANVA', purpose: 'Visual & Layout' },
  { name: 'KORESPONDENSI', purpose: 'Tata Naskah' },
];

export const CONTACT_INFO = {
  email: 'bilqissumayya@gmail.com',
  whatsappDisplay: '0857-0210-7069',
  whatsappUrl:
    'https://wa.me/6285702107069?text=Halo%20Zauza%20Bilqis%20Sumayya,%20saya%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda.',
  location: 'Cengkareng, JAKARTA BARAT, DKI JAKARTA',
  cvMailto:
    'mailto:bilqissumayya@gmail.com?subject=CV%20Request%20-%20Zauza%20Bilqis%20Sumayya',
};
