import { Swords, FileBarChart, Layers, ShieldCheck } from "lucide-react";

const LEADERS = [
  {
    name: "Priyanka Joshi",
    role: null,
    bio: "Drives strategy, client advisory and security consulting practice — partnering with CISOs and CIOs to build resilient security programs.",
    initials: "PJ",
  },
  {
    name: "Abhijeet Kulkarni",
    role: "Programme Manager",
    bio: null,
    initials: "AK",
  },
];

const PILLARS = [
  {
    icon: Swords,
    title: "Offensive-first DNA",
    desc: "Our consultants are practitioners who break things for a living — so your business does not have to.",
  },
  {
    icon: FileBarChart,
    title: "Outcome-driven reports",
    desc: "Risk-rated, repro-ready, evidence-backed reports an engineer can act on and an executive can defend.",
  },
  {
    icon: Layers,
    title: "Engineered for scale",
    desc: "Proven across hyperscalers, regulated industries and complex hybrid estates spanning multiple geographies.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by design",
    desc: "DPDP and GDPR specialists embedded with our offensive teams — security and privacy advised in lock-step.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span
              data-testid="about-eyebrow"
              className="text-xs tracking-[0.25em] uppercase font-semibold text-cyan-600"
            >
              Why count on us
            </span>
            <h2
              data-testid="about-title"
              className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              A partner that operates like an{" "}
              <span className="text-cyan-600">extension</span> of your security team.
            </h2>
            <p
              data-testid="about-paragraph-1"
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600"
            >
              Vanguard Citadel Sec blends deep technical practitioners with
              regulatory specialists — so security and compliance move forward
              together, not in parallel silos. From securing business-critical assets
              to defending real-world attacks, we work alongside your team to remediate
              risks with measurable impact.
            </p>

            <div data-testid="about-leaders" className="mt-10 space-y-4">
              <p className="text-xs tracking-[0.25em] uppercase font-semibold text-slate-500">
                Led by industry practitioners
              </p>
              {LEADERS.map((l) => (
                <div
                  key={l.name}
                  data-testid={`leader-card-${l.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 hover:border-cyan-400 hover:shadow-md transition-all"
                >
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center font-heading font-bold text-base">
                    {l.initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">{l.name}</p>
                    {l.role && (
                      <p className="mt-1 text-xs tracking-[0.15em] uppercase font-semibold text-cyan-600">
                        {l.role}
                      </p>
                    )}
                    {l.bio && (
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{l.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  data-testid={`about-pillar-${p.title.toLowerCase().replace(/\W+/g, "-")}`}
                  className="rounded-xl border border-slate-200 bg-white p-6 hover:border-cyan-400 hover:shadow-lg transition-all"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 border border-cyan-100 text-cyan-600">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
