import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TRUST_STATS = [
  { k: "10+", v: "Specialized Services" },
  { k: "24×7", v: "Managed SOC" },
  { k: "PAN-India", v: "Coverage" },
  { k: "B2B", v: "Enterprise Focus" },
];

const INITIAL = { name: "", email: "", phone: "", company: "", message: "" };

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
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span
            data-testid="contact-eyebrow"
            className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-500"
          >
            Contact Us
          </span>
          <h2
            data-testid="contact-title"
            className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            Let's secure what matters most.
          </h2>
          <p
            data-testid="contact-subtitle"
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600"
          >
            Share a brief about your environment and security objectives — a senior
            consultant will reach out within one business day to discuss the right
            engagement.
          </p>

          <div className="mt-10 space-y-4">
            <div
              data-testid="contact-info-email"
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540] text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs tracking-wider uppercase text-slate-500 font-semibold">Email</p>
                <p className="font-heading font-semibold text-slate-900">
                  info@vanguardcitadelsec.com
                </p>
              </div>
            </div>
            <div
              data-testid="contact-info-phone"
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540] text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs tracking-wider uppercase text-slate-500 font-semibold">Phone</p>
                <p className="font-heading font-semibold text-slate-900">+91 — to be updated</p>
              </div>
            </div>
            <div
              data-testid="contact-info-address"
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540] text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs tracking-wider uppercase text-slate-500 font-semibold">Address</p>
                <p className="font-heading font-semibold text-slate-900">India — Address to be updated</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {TRUST_STATS.map((s) => (
              <div
                key={s.k}
                data-testid={`contact-stat-${s.k.toLowerCase().replace(/\W+/g, "-")}`}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="font-heading text-2xl font-extrabold text-slate-900">{s.k}</p>
                <p className="text-xs tracking-wider uppercase text-slate-500 font-semibold mt-1">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-10">
            {submitted ? (
              <div
                data-testid="contact-form-success"
                className="flex flex-col items-center text-center py-12"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900">
                  Thank you for reaching out.
                </h3>
                <p className="mt-3 text-slate-600 max-w-md">
                  Our team will review your enquiry and contact you within one business
                  day. For urgent matters, please call us directly.
                </p>
                <Button
                  data-testid="contact-form-send-another"
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-[#0A2540] hover:bg-[#103960]"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                data-testid="contact-form"
                onSubmit={onSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <div className="sm:col-span-2">
                  <Label htmlFor="name" className="text-slate-700">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-testid="contact-input-name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    className="mt-1.5 h-11"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700">
                    Work email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="contact-input-email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="jane@company.com"
                    className="mt-1.5 h-11"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    data-testid="contact-input-phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91 98xxxxxx00"
                    className="mt-1.5 h-11"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="company" className="text-slate-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    data-testid="contact-input-company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Company name"
                    className="mt-1.5 h-11"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message" className="text-slate-700">
                    How can we help?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="contact-input-message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Briefly describe your environment, goals or scope (e.g., web/mobile app pentest, ISO 27001 readiness, SOC monitoring)..."
                    className="mt-1.5 min-h-[140px]"
                    required
                  />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted by Vanguard Citadel Sec
                    about your enquiry.
                  </p>
                  <Button
                    type="submit"
                    data-testid="contact-form-submit"
                    disabled={submitting}
                    className="bg-[#0A2540] hover:bg-[#103960] h-11 px-6"
                  >
                    {submitting ? "Sending..." : (
                      <span className="inline-flex items-center gap-2">
                        Send Enquiry <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
