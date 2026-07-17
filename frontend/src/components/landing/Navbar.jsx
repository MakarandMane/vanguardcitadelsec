import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://customer-assets-m6fa6gv7.emergentagent.net/job_security-hub-151/artifacts/tc1fu0c7_logo.jpeg";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#compliance", label: "Compliance" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050B15]/85 backdrop-blur-xl border-b border-slate-800/80"
          : "bg-[#050B15]/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
          aria-label="Vanguard Citadel Sec home"
        >
          <img
            src={LOGO_URL}
            alt="Vanguard Citadel Sec logo"
            className="h-10 w-10 rounded-full ring-1 ring-cyan-500/20 group-hover:ring-cyan-400/50 transition-all"
          />
          <div className="flex flex-col leading-tight text-left">
            <span className="font-heading font-extrabold tracking-tight text-white text-sm sm:text-base">
              Vanguard<span className="text-cyan-400">Citadel</span>Sec
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-semibold">
              Information Security
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-cta-contact"
            onClick={() => handleNav("#contact")}
            className="inline-flex items-center rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-[#050B15] hover:bg-cyan-300 transition-colors shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            Talk to an Expert
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-200 hover:bg-white/5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden border-t border-slate-800 bg-[#050B15]/95 backdrop-blur-xl"
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                onClick={() => handleNav(l.href)}
                className="text-left px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-cta-contact"
              onClick={() => handleNav("#contact")}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-[#050B15]"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
