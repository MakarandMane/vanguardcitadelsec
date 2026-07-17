import { useState } from "react";
import axios from "axios";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TRUST_STATS = [
  { k: "5", v: "Specialized Services" },
  { k: "24×7", v: "Managed SOC" },
  { k: "Pan-Global", v: "Coverage" },
  { k: "B2B", v: "Enterprise Focus" },
];

const INITIAL = { name: "", email: "", phone: "", company: "", message: "" };

const fieldClass =
  "mt-1.5 w-full h-11 rounded-md border border-slate-800 bg-slate-900/60 px-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-colors";
const textareaClass =
  "mt-1.5 w-full min-h-[140px] rounded-md border border-slate-800 bg-slate-900/60 p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-colors resize-y";

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please complete name, email, phone and message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await axios.post(`${API}/contact`, form, {
        headers: { "Content-Type": "application/json" },
      });
      if (res?.data?.success) {
        toast.success("Thank you — our team will reach out within one business day.");
        setSubmitted(true);
        setForm(INITIAL);
      } else {
        toast.error("Submission received but response was unexpected.");
      }
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        (Array.isArray(err?.response?.data) ? err.response.data[0]?.msg : null) ||
        "Unable to send right now. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-20 lg:py-28 bg-[#050B15] border-t border-slate-900 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-radial-cyan opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span
            data-testid="contact-eyebrow"
            className="text-xs tracking-[0.25em] uppercase font-semibold text-cyan-400"
          >
            Contact us
          </span>
          <h2
            data-testid="contact-title"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Ready to harden your{" "}
            <span className="text-cyan-400">security posture?</span>
          </h2>
          <p
            data-testid="contact-subtitle"
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-400"
          >
            Schedule a 30-minute discovery call with our principal consultants — walk
            away with a prioritised plan, no obligations.
          </p>

          <div className="mt-10 space-y-4">
            <div
              data-testid="contact-info-email"
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:border-cyan-500/30 transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs tracking-wider uppercase text-slate-500 font-semibold">Email</p>
                <a
                  href="mailto:hello@vanguardcitadelsec.com"
                  className="font-heading font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  hello@vanguardcitadelsec.com
                </a>
              </div>
            </div>
            <div
              data-testid="contact-info-phone"
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:border-cyan-500/30 transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs tracking-wider uppercase text-slate-500 font-semibold">Phone</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-0.5">
                  <a
                    href="tel:+919637420583"
                    className="font-heading font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 96374 20583
                  </a>
                  <span className="hidden sm:inline text-slate-600">/</span>
                  <a
                    href="tel:+918788196840"
                    className="font-heading font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 87881 96840
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {TRUST_STATS.map((s) => (
              <div
                key={s.k}
                data-testid={`contact-stat-${s.k.toLowerCase().replace(/\W+/g, "-")}`}
                className="rounded-xl border border-slate-800 bg-slate-900/30 p-4"
              >
                <p className="font-heading text-xl font-extrabold text-white">{s.k}</p>
                <p className="text-[11px] tracking-wider uppercase text-slate-400 font-semibold mt-1">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div
                data-testid="contact-form-success"
                className="flex flex-col items-center text-center py-12"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                  Thank you for reaching out.
                </h3>
                <p className="mt-3 text-slate-400 max-w-md">
                  Our team will review your enquiry and contact you within one business
                  day. For urgent matters, please call us directly.
                </p>
                <button
                  data-testid="contact-form-send-another"
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#050B15] hover:bg-cyan-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                data-testid="contact-form"
                onSubmit={onSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="text-xs tracking-wider uppercase font-semibold text-slate-400">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    data-testid="contact-input-name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    className={fieldClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs tracking-wider uppercase font-semibold text-slate-400">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="contact-input-email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="jane@company.com"
                    className={fieldClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs tracking-wider uppercase font-semibold text-slate-400">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    data-testid="contact-input-phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91 98xxxxxx00"
                    className={fieldClass}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="text-xs tracking-wider uppercase font-semibold text-slate-400">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    data-testid="contact-input-company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Company name"
                    className={fieldClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs tracking-wider uppercase font-semibold text-slate-400">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-input-message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Briefly describe your environment, goals or scope (e.g., cloud security assessment, ISO 27001 readiness, SOC monitoring)..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2 flex-wrap">
                  <p className="text-xs text-slate-500 max-w-sm">
                    By submitting, you agree to be contacted by Vanguard Citadel Sec
                    about your enquiry.
                  </p>
                  <button
                    type="submit"
                    data-testid="contact-form-submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold text-[#050B15] hover:bg-cyan-300 transition-colors shadow-[0_0_25px_rgba(34,211,238,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : (
                      <>
                        Send Enquiry <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
