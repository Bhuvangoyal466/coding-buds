"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Globe2, Mail, Search, Send } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { countries } from "@/lib/countries";
import { siteConfig } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xfs65vr";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_r7wsth7";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ykE6MPiOGmJw2EFzy";

const defaultCountry = countries[0];

export function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!open) return;
      const target = event.target as Node;
      const dropdown = document.getElementById("country-dropdown");
      if (dropdown && !dropdown.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const filteredCountries = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    if (!normalized) return countries;
    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(normalized) ||
        country.dialCode.toLowerCase().includes(normalized) ||
        country.code.toLowerCase().includes(normalized)
      );
    });
  }, [search]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const formData = new FormData(form);
      const phone = `${selectedCountry.dialCode} ${String(formData.get("phone") || "").trim()}`.trim();

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          phone,
          child_age: String(formData.get("child_age") || ""),
          course_interest: String(formData.get("course_interest") || ""),
          message: String(formData.get("message") || ""),
          country: `${selectedCountry.name} (${selectedCountry.dialCode})`,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message: "Thank you. Your free trial request has been sent successfully.",
      });
      form.reset();
      setSelectedCountry(defaultCountry);
      setSearch("");
    } catch {
      setStatus({
        type: "error",
        message: "We could not send your request right now. Please try again or use WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  function handleCountryChange(country: (typeof countries)[number]) {
    setSelectedCountry(country);
    setOpen(false);
    setSearch("");
  }

  return (
    <section id="contact" className="section-shell pt-0">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact Us"
          title="Book Your Free Trial Coding Class for Kids Today"
          description="Ready to give your child a head start in the digital world? Book a free trial class and see how we make coding fun and engaging."
        />

        <div className="mt-12 grid gap-8 rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,28,56,0.08)] lg:grid-cols-[0.88fr_1.12fr] lg:p-8">
          <div className="rounded-3xl bg-[#0d1630] p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFD600]">Get Started Today</p>
            <h3 className="mt-4 font-heading text-4xl font-semibold leading-tight">Live classes that keep children curious, confident, and actively building.</h3>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Choose a class path and we will help you get started with the right learning level.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a href={siteConfig.whatsappHref} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <FaWhatsapp className="h-5 w-5 text-[#FFD600]" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={siteConfig.emailHref} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                <Mail className="h-5 w-5 text-[#FFD600]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a href={siteConfig.instagram} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10">
                <FaInstagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
              <a href={siteConfig.linkedin} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10">
                <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Your Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#E8511A]"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Your Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#E8511A]"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Child&apos;s Age</span>
                <input
                  name="child_age"
                  type="number"
                  min={1}
                  max={18}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#E8511A]"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Course Interested</span>
                <select
                  name="course_interest"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#E8511A]"
                >
                  <option value="">Select a course</option>
                  <option value="scratch">Scratch for Kids</option>
                  <option value="python">Python for Teens</option>
                  <option value="web">Web Development</option>
                  <option value="java">Java Programming</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Phone Number</span>
              <div className="grid gap-3 sm:grid-cols-[18rem_1fr]">
                <div className="relative" id="country-dropdown">
                  <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left"
                  >
                    <span className="flex items-center gap-3">
                      {mounted ? (
                        <Image
                          src={selectedCountry.flag}
                          alt={selectedCountry.name}
                          width={24}
                          height={16}
                          className="h-4 w-6 rounded-sm object-cover"
                        />
                      ) : (
                        <span className="h-4 w-6 rounded-sm bg-slate-200" />
                      )}
                      <span className="text-sm font-medium text-slate-700">
                        {selectedCountry.name} ({selectedCountry.dialCode})
                      </span>
                    </span>
                    <Globe2 className="h-4 w-4 text-slate-500" />
                  </button>

                  {open ? (
                    <div className="absolute left-0 top-[calc(100%+0.5rem)] z-10 w-full overflow-hidden rounded-card border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,28,56,0.12)]">
                      <div className="border-b border-slate-200 p-3">
                        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                          <Search className="h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            value={search}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
                            placeholder="Search country..."
                            className="w-full bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {filteredCountries.map((country) => (
                          <button
                            key={`${country.code}-${country.dialCode}`}
                            type="button"
                            onClick={() => handleCountryChange(country)}
                            className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-slate-50"
                          >
                            <Image
                              src={country.flag}
                              alt={country.name}
                              width={24}
                              height={16}
                              className="h-4 w-6 rounded-sm object-cover"
                            />
                            <span className="flex-1 text-slate-700">{country.name}</span>
                            <span className="text-slate-500">{country.dialCode}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#E8511A]"
                />
              </div>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-slate-700">Your Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Ask your query..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#E8511A]"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E8511A] px-6 py-4 font-semibold text-white transition hover:bg-[#cf4514] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Book a Free Trial"}
              <Send className="h-4 w-4" />
            </button>

            {status.type !== "idle" ? (
              <p
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${
                  status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}