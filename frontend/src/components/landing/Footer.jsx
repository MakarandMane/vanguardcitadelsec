import { Linkedin, Twitter, Mail } from "lucide-react";

const LOGO_URL =
  "https://customer-assets-m6fa6gv7.emergentagent.net/job_security-hub-151/artifacts/tc1fu0c7_logo.jpeg";

const FOOTER_NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#compliance", label: "Compliance" },
  { href: "#contact", label: "Contact" },
];

const SERVICES_SHORT = [
  "Cloud Security",
  "Network Security",
  "Regulatory Compliance",
  "SOC as a Service",
  "Threat Intelligence",
];

const handle = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-[#020610] border-t border-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Vanguard Citadel Sec logo"
                className="h-11 w-11 rounded-full ring-1 ring-cyan-500/30"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-extrabold tracking-tight text-white text-base">
                  Vanguard<span className="text-cyan-400">Citadel</span>Sec
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-semibold">
                  Information Security
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">
              A cybersecurity consulting firm helping enterprises secure business-critical
              assets through offensive and defensive security services, aligned with global
              regulatory frameworks.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                data-testid="footer-social-linkedin"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                data-testid="footer-social-twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@vanguardcitadelsec.com"
                aria-label="Email"
                data-testid="footer-social-email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-heading text-xs tracking-[0.25em] uppercase text-slate-500 font-semibold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handle(l.href)}
                    data-testid={`footer-nav-${l.label.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-heading text-xs tracking-[0.25em] uppercase text-slate-500 font-semibold">
              Services
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {SERVICES_SHORT.map((s) => (
                <li key={s} className="text-sm text-slate-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p data-testid="footer-copyright" className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vanguard Citadel Sec. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed for trust. Built for resilience.
          </p>
        </div>
      </div>
    </footer>
  );
}
