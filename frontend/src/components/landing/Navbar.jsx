import { useEffect, useState } from "react";
import { Shield, Menu, X } from "lucide-react";

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
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-sm"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
          aria-label="Vanguard Citadel Sec home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2540] text-white shadow-sm group-hover:bg-[#103960] transition-colors">
            <Shield className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="font-heading font-extrabold tracking-tight text-slate-900 text-base sm:text-lg">
            Vanguard <span className="text-[#0A2540]">Citadel</span>{" "}
            <span className="text-slate-500 font-semibold">Sec</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium text-slate-600 hover:text-[#0A2540] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-cta-contact"
            onClick={() => handleNav("#contact")}
            className="inline-flex items-center rounded-md bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white hover:bg-[#103960] transition-colors shadow-sm"
          >
            Talk to an Expert
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div data-testid="nav-mobile-menu" className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                onClick={() => handleNav(l.href)}
                className="text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-cta-contact"
              onClick={() => handleNav("#contact")}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
