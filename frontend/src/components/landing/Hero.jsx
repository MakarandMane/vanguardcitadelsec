import { ArrowRight, ShieldCheck, CheckCircle2, Shield, Server, Swords, Sparkles } from "lucide-react";

const SCROLL = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const TRUST_BADGES = [
  "ISO 27001:2022",
  "CERT-In Aligned",
  "CREST-Ready",
  "OSCP Team",
  "CISSP",
];

const POSTURE = [
  { label: "Critical findings remediated", value: 28 },
  { label: "Cloud misconfigurations detected", value: 71 },
  { label: "DPDP control coverage", value: 92 },
];

const CAPSULES = [
  { icon: Shield, label: "Zero Trust" },
  { icon: Server, label: "24×7 SOC" },
  { icon: Swords, label: "Red Team" },
];

const STATS = [
  { k: "Pan-Global", v: "Coverage" },
  { k: "24×7", v: "Managed SOC" },
  { k: "5", v: "Focused Practices" },
  { k: "B2B", v: "Enterprise Focus" },
];

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-radial-cyan overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-400/5 px-3 py-1.5 text-xs font-semibold text-cyan-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="tracking-wide">
              CERT-In Aligned · ISO 27001 · CREST Ready
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Securing the digital{" "}
            <span className="text-cyan-400">perimeter</span> of the modern enterprise.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300"
          >
            Vanguard Citadel Sec delivers offensive security, cloud defence and
            regulatory consulting across RBI, DPDP, ISO 27001, PCI-DSS and GDPR —
            engineered for regulated, high-risk industries.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-cta-primary"
              onClick={() => SCROLL("#contact")}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold text-[#050B15] hover:bg-cyan-300 transition-colors shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              Book a Security Assessment
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              data-testid="hero-cta-secondary"
              onClick={() => SCROLL("#services")}
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-white/10 transition-colors"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-3">
            {TRUST_BADGES.map((b) => (
              <div
                key={b}
                data-testid={`hero-trust-${b.toLowerCase().replace(/\W+/g, "-")}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up animate-delay-200">
          <div
            data-testid="hero-threat-posture"
            className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-6 shadow-2xl"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-semibold text-white">Threat Posture</p>
                  <p className="text-xs text-slate-400">Live snapshot · last 24h</p>
                </div>
              </div>
              <span className="relative flex h-3 w-3">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
            </div>

            <div className="relative mt-6 space-y-5">
              {POSTURE.map((p, i) => (
                <div key={p.label} data-testid={`hero-posture-bar-${i}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{p.label}</span>
                    <span className="font-heading font-bold text-white">{p.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="bar-animate h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                      style={{ width: `${p.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {CAPSULES.map((c) => (
                <div
                  key={c.label}
                  data-testid={`hero-capsule-${c.label.toLowerCase().replace(/\W+/g, "-")}`}
                  className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-center hover:border-cyan-500/40 transition-colors"
                >
                  <c.icon className="h-4 w-4 text-cyan-400 mx-auto" />
                  <p className="mt-2 text-[11px] font-semibold text-slate-200">{c.label}</p>
                </div>
              ))}
            </div>

            <div
              data-testid="hero-mttd"
              className="relative mt-6 flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-400/5 px-4 py-3"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cyan-300">
                Mean time to detect
              </span>
              <span className="font-heading text-lg font-extrabold text-white">4.2 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((s) => (
            <div
              key={s.k}
              data-testid={`hero-stat-${s.k.toLowerCase().replace(/\W+/g, "-")}`}
              className="rounded-xl border border-slate-800/70 bg-slate-900/30 p-5 hover:border-cyan-500/30 transition-colors"
            >
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-white">{s.k}</p>
              <p className="mt-1 text-xs tracking-wider uppercase text-slate-400 font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
