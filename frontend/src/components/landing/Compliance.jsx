const COMPLIANCE = [
  {
    tag: "RBI",
    title: "RBI Guidelines",
    desc: "Cyber security frameworks for banks, NBFCs, Payment Aggregators, Cooperative banks — including IT examination and master directions.",
  },
  {
    tag: "DPDP",
    title: "DPDP Act 2023",
    desc: "Digital Personal Data Protection Act readiness — consent, data principal rights, DPIA, breach notification and DPO advisory.",
  },
  {
    tag: "ISO 27001",
    title: "ISO 27001:2022",
    desc: "ISMS scoping, risk assessment, Annex A control implementation, internal audit and Stage 1 / Stage 2 certification support.",
  },
  {
    tag: "ISO 9001",
    title: "ISO 9001:2015",
    desc: "Quality management systems — process definition, documentation, internal audit and certification readiness across industries.",
  },
  {
    tag: "PESO",
    title: "PESO Compliance",
    desc: "Advisory and implementation support for Petroleum and Explosives Safety Organisation cyber-physical requirements for hazardous facilities.",
  },
  {
    tag: "PCI-DSS",
    title: "PCI-DSS v4.0",
    desc: "Scope reduction, control implementation, ASV scanning, segmentation testing and QSA-ready evidence preparation.",
  },
  {
    tag: "GDPR",
    title: "GDPR",
    desc: "Data mapping, lawful basis assessment, ROPA, DPIA and EU representative advisory for cross-border processing.",
  },
  {
    tag: "HIPAA",
    title: "HIPAA / HITRUST",
    desc: "Privacy and security rule implementation for healthcare providers, payers and digital health businesses.",
  },
];

export default function Compliance() {
  return (
    <section
      id="compliance"
      data-testid="compliance-section"
      className="relative py-20 lg:py-28 bg-[#050B15] border-t border-slate-900 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-radial-cyan-soft opacity-70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <span
              data-testid="compliance-eyebrow"
              className="text-xs tracking-[0.25em] uppercase font-semibold text-cyan-400"
            >
              Regulatory consulting
            </span>
            <h2
              data-testid="compliance-title"
              className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            >
              RBI, DPDP and every framework{" "}
              <span className="text-cyan-400">that matters.</span>
            </h2>
            <p
              data-testid="compliance-subtitle"
              className="mt-5 text-base sm:text-lg leading-relaxed text-slate-400"
            >
              Whether you operate in BFSI, healthcare, payments or SaaS — we translate
              dense regulation into practical, auditable controls without slowing your
              business down.
            </p>
          </div>
        </div>

        <div
          data-testid="compliance-grid"
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {COMPLIANCE.map((c) => (
            <div
              key={c.title}
              data-testid={`compliance-card-${c.title.toLowerCase().replace(/\W+/g, "-")}`}
              className="card-dark rounded-xl p-6 transition-all"
            >
              <span className="inline-block rounded-md bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 text-[11px] font-bold tracking-wider text-cyan-300">
                {c.tag}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
