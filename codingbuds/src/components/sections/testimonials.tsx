"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    if (totalTestimonials === 0) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % totalTestimonials);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [totalTestimonials]);

  return (
    <section id="testimonials" className="section-shell section-wave text-white">
      <div className="container-shell relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say About Our Coding Classes"
          description="Real feedback from families who wanted a more structured, engaging, and child-friendly path into programming."
          tone="light"
        />

        <div className="relative mt-12 overflow-hidden rounded-4xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl sm:p-8">
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -right-28 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,81,26,0.42),rgba(45,142,255,0.08)_70%,transparent_72%)] blur-3xl"
          />
          <AnimatePresence mode="wait">
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0d1630]/90 p-6 sm:p-8"
            >
              <Quote className="h-10 w-10 text-[#FFD600]" />
              <blockquote className="mt-5 text-xl leading-9 text-white/92 sm:text-2xl">
                {testimonials[index].quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#E8511A] text-lg font-semibold text-white">
                  {testimonials[index].avatar}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold">{testimonials[index].name}</h3>
                  <p className="text-sm text-white/70">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((current) => (current - 1 + totalTestimonials) % totalTestimonials)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((item, slideIndex) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${slideIndex + 1}`}
                  onClick={() => setIndex(slideIndex)}
                  className={`h-2.5 rounded-full transition ${
                    slideIndex === index ? "w-10 bg-[#FFD600]" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((current) => (current + 1) % totalTestimonials)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}