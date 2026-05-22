import {
  Cloud,
  Smartphone,
  Monitor,
  Network,
  FileCheck,
  Cpu,
  ShieldAlert,
  Search,
  Eye,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Cloud,
    name: "Cloud Security",
    desc: "Security categorization of cloud resources, controls assessment, and network architecture review across AWS, Azure and GCP.",
  },
  {
    icon: Smartphone,
    name: "Mobile App Security",
    desc: "Assess mobile application libraries, exposed APIs, cryptography and storage — aligned with OWASP MASVS and Top 10 risks.",
  },
  {
    icon: Monitor,
    name: "Web App Security",
    desc: "Application mapping, client-side and server-side vulnerability discovery, and business-impact assessment of findings.",
  },
  {
    icon: Network,
    name: "Network Security",
    desc: "Assess network infrastructure posture, detect vulnerabilities and report real-world exploitation impact to leadership.",
  },
  {
    icon: FileCheck,
    name: "IT Governance Audits",
    desc: "Risk management, resource management and strategic alignment audits mapped to business goals and regulatory needs.",
  },
  {
    icon: Cpu,
    name: "IoT Security",
    desc: "End-to-end secure IoT product engagement across the IoT Security Life Cycle — firmware, device, cloud and privacy.",
  },
  {
    icon: ShieldAlert,
    name: "SOC as a Service",
    desc: "24×7 real-time monitoring operations combining people, process and technology with measurable detection metrics.",
  },
  {
    icon: Search,
    name: "VAPT",
    desc: "Vulnerability Assessment and Penetration Testing across applications, networks and infrastructure with exploit validation.",
  },
  {
    icon: Eye,
    name: "Threat Intelligence",
    desc: "Curated, actionable intelligence on adversaries, leaked credentials and brand exposure on surface, deep and dark web.",
  },
  {
    icon: BookOpen,
    name: "Application Security Training",
    desc: "Hands-on secure-coding, ethical hacking and red-team training programs delivered by practising consultants.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span
            data-testid="services-eyebrow"
            className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-500"
          >
            Services
          </span>
          <h2
            data-testid="services-title"
            className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            Ten focused practices.{" "}
            <span className="text-[#0A2540]">One trusted partner.</span>
          </h2>
          <p
            data-testid="services-subtitle"
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600"
          >
            Tailored security engagements that blend offensive testing, defensive
            engineering and governance — across cloud, application, network, IoT
            and operations.
          </p>
        </div>

        <div
          data-testid="services-grid"
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((s, i) => (
            <article
              key={s.name}
              data-testid={`service-card-${s.name.toLowerCase().replace(/\W+/g, "-")}`}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#0A2540] text-white shadow-sm group-hover:bg-[#103960] transition-colors">
                  <s.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <span className="font-heading text-xs tracking-widest font-semibold text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-slate-900">
                {s.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-[#0A2540] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
