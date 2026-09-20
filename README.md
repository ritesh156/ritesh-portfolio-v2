# Ritesh Kumar — Portfolio

A static React + Vite portfolio designed for free GitHub Pages hosting at `https://ritesh156.github.io/`.

## Stack
- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- GitHub Pages + GitHub Actions

## Run locally
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```

## Main editable content
Update `src/data/portfolioData.js` for your name, about text, contact links, resume, education, skills, experience, project links, and certificates.

## Assets
- Profile photo: `public/assets/profile/profile.jpg`
- PDFMaster showcase: `public/assets/projects/pdfmaster-showcase.svg`
- ProductiView showcase: `public/assets/projects/productiview-showcase.svg`

## GitHub Pages
Repository name:
`ritesh156.github.io`

Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds and deploys the static site to GitHub Pages.

## Notes
The contact form validates the fields and opens the visitor's email client using the supplied email configuration. It does not store messages on a server.
