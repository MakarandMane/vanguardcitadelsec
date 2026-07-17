import { Cloud, Network, ScrollText, ShieldAlert, Eye, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Cloud,
    name: "Cloud Security",
    desc: "Security categorisation of cloud resources, controls assessment, CSPM, IAM review and network architecture audits across AWS, Azure and GCP.",
  },
  {
    icon: Network,
    name: "Network Security",
    desc: "Identify weaknesses in perimeter, segmentation, Active Directory and wireless deployments through adversary-emulated testing.",
  },
  {
    icon: ScrollText,
    name: "Regulatory Compliance",
    desc: "Gap assessment, control design, implementation support and audit readiness for RBI, DPDP, ISO 27001, PCI-DSS, GDPR and HIPAA.",
  },
  {
    icon: ShieldAlert,
    name: "SOC as a Service",
    desc: "A 24×7 hybrid SOC combining people, process and modern SIEM/SOAR/XDR to deliver detection, threat hunting and incident response.",
  },
  {
    icon: Eye,
    name: "Threat Intelligence",
    desc: "Curated, actionable intelligence on adversaries, leaked credentials and brand exposure across surface, deep and dark web.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-20 lg:py-28 bg-slate-50 border-t border-slate-200/70"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span
            data-testid="services-eyebrow"
            className="text-xs tracking-[0.25em] uppercase font-semibold text-cyan-600"
          >
            What we do
          </span>
          <h2
            data-testid="services-title"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Full-spectrum{" "}
            <span className="text-cyan-600">information security</span> services.
          </h2>
          <p
            data-testid="services-subtitle"
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600"
          >
            From offensive assessments to regulatory consulting, our practitioners help
            you defend, detect and demonstrate — across every layer of your stack.
          </p>
        </div>

        <div
          data-testid="services-grid"
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {SERVICES.map((s, i) => (
            <article
              key={s.name}
              data-testid={`service-card-${s.name.toLowerCase().replace(/\W+/g, "-")}`}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 border border-cyan-100 text-cyan-600 group-hover:bg-cyan-100 transition-colors">
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="font-heading text-xs tracking-widest font-semibold text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-slate-900">
                {s.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-600">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
