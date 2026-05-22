import { ArrowRight, ShieldCheck, Lock, Server } from "lucide-react";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/8a4ab19d-7d9f-43e4-85d9-940945effca3/images/99a42a22ea2da69b57cb501ff78008fd5448a12a1f2ca7d3572e86100b027160.png";

const SCROLL = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-slate opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#0A2540]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs tracking-[0.2em] uppercase font-semibold text-slate-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            India's Trusted Cybersecurity Consulting
          </div>

          <h1
            data-testid="hero-title"
            className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]"
          >
            Securing your{" "}
            <span className="text-[#0A2540]">digital frontier</span>{" "}
            with offensive &amp; defensive expertise.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600"
          >
            Vanguard Citadel Sec delivers tailored InfoSec services — Application
            &amp; Network Security, VAPT, Cloud Pen Testing, Managed SOC, Threat
            Intelligence, Audits and Training — to protect organizations against
            evolving cyber threats.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-cta-primary"
              onClick={() => SCROLL("#contact")}
              className="inline-flex items-center gap-2 rounded-md bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white hover:bg-[#103960] transition-colors shadow-sm"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              data-testid="hero-cta-secondary"
              onClick={() => SCROLL("#services")}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Explore Services
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "ISO 27001", v: "Aligned Practices" },
              { k: "24×7", v: "Managed SOC" },
              { k: "B2B", v: "Enterprise Focus" },
            ].map((s) => (
              <div key={s.k} data-testid={`hero-stat-${s.k.toLowerCase().replace(/\W+/g, "-")}`}>
                <dt className="font-heading text-2xl font-extrabold text-slate-900">{s.k}</dt>
                <dd className="text-xs tracking-wider uppercase text-slate-500 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 animate-fade-up animate-delay-200">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#0A2540]/10 via-slate-200/40 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
              <img
                src={HERO_IMG}
                alt="Abstract security shield"
                className="w-full h-auto object-cover"
                data-testid="hero-image"
              />
            </div>

            {/* Floating mini-cards */}
            <div
              data-testid="hero-floating-card-1"
              className="hidden sm:flex absolute -left-6 bottom-10 items-center gap-3 rounded-xl border border-slate-200 bg-white/95 backdrop-blur px-4 py-3 shadow-lg"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2540]/10 text-[#0A2540]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">VAPT</p>
                <p className="text-[11px] text-slate-500">Offensive Testing</p>
              </div>
            </div>

            <div
              data-testid="hero-floating-card-2"
              className="hidden sm:flex absolute -right-6 top-10 items-center gap-3 rounded-xl border border-slate-200 bg-white/95 backdrop-blur px-4 py-3 shadow-lg"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2540]/10 text-[#0A2540]">
                <Server className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Managed SOC</p>
                <p className="text-[11px] text-slate-500">24×7 Monitoring</p>
              </div>
            </div>

            <div
              data-testid="hero-floating-card-3"
              className="hidden lg:flex absolute -right-4 -bottom-6 items-center gap-3 rounded-xl border border-slate-200 bg-white/95 backdrop-blur px-4 py-3 shadow-lg"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2540]/10 text-[#0A2540]">
                <Lock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Zero Trust</p>
                <p className="text-[11px] text-slate-500">Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
