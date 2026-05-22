import { Shield, Linkedin, Twitter, Mail } from "lucide-react";

const FOOTER_NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#compliance", label: "Compliance" },
  { href: "#contact", label: "Contact" },
];

const SERVICES_SHORT = [
  "Cloud Security",
  "Mobile App Security",
  "Web App Security",
  "Network Security",
  "VAPT",
  "SOC as a Service",
];

const handle = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#0A2540] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
                <Shield className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="font-heading font-extrabold tracking-tight text-white text-lg">
                Vanguard <span className="text-slate-300">Citadel</span>{" "}
                <span className="text-slate-400 font-semibold">Sec</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              A premier cybersecurity consulting firm helping enterprises secure
              business-critical assets through offensive and defensive security
              services, aligned with global regulatory frameworks.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                data-testid="footer-social-linkedin"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                data-testid="footer-social-twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@vanguardcitadelsec.com"
                aria-label="Email"
                data-testid="footer-social-email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-slate-400 font-semibold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handle(l.href)}
                    data-testid={`footer-nav-${l.label.toLowerCase()}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-slate-400 font-semibold">
              Services
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {SERVICES_SHORT.map((s) => (
                <li key={s} className="text-sm text-slate-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p data-testid="footer-copyright" className="text-xs text-slate-400">
            © {new Date().getFullYear()} Vanguard Citadel Sec. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Designed for trust. Built for resilience.
          </p>
        </div>
      </div>
    </footer>
  );
}
