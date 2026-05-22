import { Landmark, ScrollText, BadgeCheck, CreditCard, Globe, HeartPulse } from "lucide-react";

const NETWORK_BG =
  "https://static.prod-images.emergentagent.com/jobs/8a4ab19d-7d9f-43e4-85d9-940945effca3/images/20bb1a6dd7af04b902f381c0ca2e943a6af86e0f225dab33f27f6c60dc5e9d91.png";

const COMPLIANCE = [
  {
    icon: Landmark,
    title: "RBI Guidelines",
    desc: "Cyber security framework for banks, NBFCs, Payment Aggregators and Cooperative banks — including IT examination and master directions.",
  },
  {
    icon: ScrollText,
    title: "DPDP Act",
    desc: "Digital Personal Data Protection Act readiness — consent, data principal rights, breach notification and DPO advisory.",
  },
  {
    icon: BadgeCheck,
    title: "ISO 27001",
    desc: "ISMS implementation, internal audits, risk assessment, Statement of Applicability and certification readiness.",
  },
  {
    icon: CreditCard,
    title: "PCI-DSS",
    desc: "Payment card environment hardening, scoping, segmentation, secure SDLC and continuous compliance maintenance.",
  },
  {
    icon: Globe,
    title: "GDPR",
    desc: "EU data protection compliance — DPIA, cross-border data flows, record of processing and lawful basis advisory.",
  },
  {
    icon: HeartPulse,
    title: "HIPAA",
    desc: "Safeguards for protected health information — administrative, physical and technical control assessments.",
  },
];

export default function Compliance() {
  return (
    <section
      id="compliance"
      data-testid="compliance-section"
      className="relative py-20 lg:py-32 bg-[#0A2540] text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-navy opacity-30"
      />
      <div
        aria-hidden
        style={{ backgroundImage: `url(${NETWORK_BG})` }}
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] via-[#0A2540]/85 to-[#0A2540]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span
            data-testid="compliance-eyebrow"
            className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-300"
          >
            Regulatory Compliance
          </span>
          <h2
            data-testid="compliance-title"
            className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            Aligned with the regulations that matter to{" "}
            <span className="text-slate-300">your industry.</span>
          </h2>
          <p
            data-testid="compliance-subtitle"
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300"
          >
            Whether you operate in BFSI, healthcare, payments or SaaS, we help you
            translate dense regulation into practical, auditable security controls
            — without slowing your business down.
          </p>
        </div>

        <div
          data-testid="compliance-grid"
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {COMPLIANCE.map((c) => (
            <div
              key={c.title}
              data-testid={`compliance-card-${c.title.toLowerCase().replace(/\W+/g, "-")}`}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
