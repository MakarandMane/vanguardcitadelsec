# Vanguard Citadel Sec — Static HTML Exports

Two standalone versions of the landing page as pure HTML + Tailwind (CDN) + Google Fonts + lucide icons.

## Live Previews

1. Light theme — https://makarandmane.github.io/vanguardcitadelsec/exports/light-theme/
2. Dark theme — https://makarandmane.github.io/vanguardcitadelsec/exports/dark-theme/
3. Alternating theme (recommended) — https://makarandmane.github.io/vanguardcitadelsec/exports/alternating-theme/

## Structure
```
exports/
├── light-theme/          # v1 — Corporate light theme (navy + silver)
│   └── index.html
├── dark-theme/           # v2 — Fully dark theme (navy + cyan)
│   └── index.html
└── alternating-theme/    # v3 — Alternating dark/light with cyan accent (current recommended)
    └── index.html
```

## How to preview
Just double-click either `index.html` — no server required. Both files load Tailwind, fonts, and icons over the internet.

## Notes
- The contact form is client-side only in these exports (shows a "Thank you" state on submit — no backend call). To wire it to a real backend later, replace the `handleSubmit` JS function.
- All colors, fonts, layout and content match the deployed React app.
- Ready to host as static HTML or drop into a WordPress custom page template.
