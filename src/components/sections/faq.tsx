"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-shell pt-0">
      <div className="container-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Get answers to the most common questions about our coding classes for kids."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <article key={faq.question} className="card-surface overflow-hidden">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-xl font-semibold text-[#1B2D5B]">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#E8511A] transition ${open ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}