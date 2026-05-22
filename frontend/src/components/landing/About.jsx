import { Target, Compass, Award, UserSquare2 } from "lucide-react";

const ABOUT_IMG =
  "https://static.prod-images.emergentagent.com/jobs/8a4ab19d-7d9f-43e4-85d9-940945effca3/images/f9b99699a1449cef0fc032e867701bc7675ccae6faf82d0a56d6b27d45892835.png";

const LEADERS = [
  {
    name: "Priyanka Joshi",
    role: "Co-Founder & Director",
    bio: "Drives strategy, client advisory and security consulting practice — partnering with CISOs and CIOs to build resilient security programs.",
    initials: "PJ",
  },
  {
    name: "Abhijeet Kulkarni",
    role: "Co-Founder & Director",
    bio: "Leads technical delivery across VAPT, Cloud Security and SOC operations — with deep expertise in offensive and defensive security tactics.",
    initials: "AK",
  },
];

const PILLARS = [
  {
    icon: Target,
    title: "Purpose-Built Engagements",
    desc: "Every assessment is tailored to your threat model, regulatory landscape, and business priorities.",
  },
  {
    icon: Compass,
    title: "Offensive + Defensive",
    desc: "We combine adversary-simulation with defense-in-depth advisory to harden your attack surface.",
  },
  {
    icon: Award,
    title: "Outcomes-First Reporting",
    desc: "Executive and technical reports designed to drive remediation, board reviews, and audits.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-20 lg:py-32 bg-slate-50 border-y border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span
              data-testid="about-eyebrow"
              className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-500"
            >
              About Vanguard Citadel Sec
            </span>
            <h2
              data-testid="about-title"
              className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
            >
              A premier cybersecurity consulting firm built for the modern enterprise.
            </h2>
            <p
              data-testid="about-paragraph-1"
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600"
            >
              Vanguard Citadel Sec is an information security consulting practice
              delivering specialized services to keep your business resilient. From
              securing business-critical assets to defending against real-world cyber
              attacks, our team works alongside yours to remediate high-impact risks
              and elevate your security posture.
            </p>
            <p
              data-testid="about-paragraph-2"
              className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600"
            >
              We help organizations align with regulatory expectations including RBI
              guidelines, the DPDP Act, ISO 27001, PCI-DSS and global frameworks —
              backed by hands-on engineering, not slideware.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  data-testid={`about-pillar-${p.title.toLowerCase().replace(/\W+/g, "-")}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540] text-white">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
              <img
                src={ABOUT_IMG}
                alt="Vanguard Citadel Sec corporate environment"
                className="w-full h-72 lg:h-80 object-cover"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent" />
            </div>

            <div data-testid="about-leaders" className="mt-8 space-y-4">
              <h3 className="font-heading text-lg font-semibold text-slate-900">
                Led by industry practitioners
              </h3>
              {LEADERS.map((l) => (
                <div
                  key={l.name}
                  data-testid={`leader-card-${l.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors"
                >
                  <div className="relative h-14 w-14 shrink-0 rounded-lg bg-gradient-to-br from-[#0A2540] to-[#103960] text-white flex items-center justify-center font-heading font-bold text-lg shadow-sm">
                    {l.initials}
                    <UserSquare2 className="absolute -bottom-1 -right-1 h-4 w-4 text-slate-300 bg-white rounded-sm p-0.5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">{l.name}</p>
                    <p className="text-xs tracking-wider uppercase text-[#0A2540] font-semibold mt-0.5">
                      {l.role}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{l.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
