# Zauza Bilqis Sumayya — Portfolio

Portfolio web app built with React, Vite, TypeScript, and Tailwind CSS v4 using the **Obsidian Archive** design system.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run lint
npm run build
```

## Deploy to Vercel

Project ini sudah dikonfigurasi dengan `vercel.json` untuk deployment langsung di Vercel:

1. Push repository ini ke GitHub/GitLab/Bitbucket, lalu import project di **Vercel Dashboard** (atau jalankan `npx vercel --prod` via Vercel CLI).
2. Vercel otomatis mendeteksi pengaturan dari `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. **Environment Variables**: Tidak ada environment variable wajib yang perlu diisi (aplikasi ini berjalan sepenuhnya sebagai static SPA).
