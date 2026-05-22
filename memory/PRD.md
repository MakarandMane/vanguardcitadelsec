# Vanguard Citadel Sec — Landing Page PRD

## Problem Statement (verbatim)
Build a landing page: for vanguardcitadelsec.com — copy of https://varutra.com/. Single-page website with Hero, About, Services (10 services from varutra.com), Regulatory Compliance (RBI/DPDP), Contact form. Run by 2 leaders: Priyanka Joshi & Abhijeet Kulkarni. To be deployed as HTML or WordPress later.

## User Choices (Dec 2025)
- Theme: Corporate light (white background) with **blue + silver** brand palette (logo colors)
- Logo: Text "Vanguard Citadel Sec" + shield icon (file to be uploaded later)
- Leaders: Placeholder titles/bios until client provides
- Contact: Placeholder address/phone, admin email `priyanka@vanguardcitadelsec.com`
- Form: On submit, just shows "Thank you" — **no DB, email integration deferred**

## Architecture
- **Frontend:** React 19 + Tailwind + shadcn UI (Input/Textarea/Button/Label/Sonner). Manrope (headings) + IBM Plex Sans (body).
- **Backend:** FastAPI. Two endpoints: `GET /api/health`, `POST /api/contact` (Pydantic-validated; logs submission, returns success). No MongoDB usage.
- **Routing:** Single page at `/`; in-page anchors `#about #services #compliance #contact` with smooth scroll.

## Personas
- B2B buyers — CISO, CIO, IT Risk, Compliance Officers — evaluating a cybersecurity consulting partner.

## Implemented (Dec 2025)
- Sticky glass navbar with mobile menu
- Hero with brand image, dual CTAs, floating mini-cards (VAPT / SOC / Zero Trust)
- About section: 3 pillars + 2 leader cards (Priyanka Joshi, Abhijeet Kulkarni)
- Services grid (10): Cloud, Mobile, Web, Network, IT Governance, IoT, SOC, VAPT, Threat Intel, AppSec Training
- Compliance section (dark navy, network-grid texture): RBI, DPDP, ISO 27001, PCI-DSS, GDPR, HIPAA
- Contact form: name/email/phone/company/message → `/api/contact` → success state
- Footer with social placeholders + copyright
- 100% test pass (9/9 backend, full frontend e2e)

## Backlog / Next Action Items
**P0**
- Wire real email delivery (Resend/SendGrid) when API key + verified sender domain are ready → admin `priyanka@vanguardcitadelsec.com`
- Replace placeholder phone/address/leader bios with finalized content
- Upload final logo asset and swap shield icon

**P1**
- Add Case Studies / Success Stories carousel (Varutra parity)
- Add Customer Testimonials section
- Add Partners / Awards strip
- SEO: meta tags, OG image, sitemap, structured data (Organization schema)
- Cookie consent banner (DPDP/GDPR alignment)

**P2**
- Static export to HTML or WordPress theme for deployment
- Blog / Resources section
- Multi-language (English/Hindi) toggle
