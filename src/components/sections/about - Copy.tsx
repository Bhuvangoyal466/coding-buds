"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const aboutPoints = [
  "1:1 and group classes available",
  "Interactive project-based learning",
  "Global teaching experience",
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell relative">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,28,56,0.1)]">
            <Image
              src="/assets/images/about-banner.jpg"
              alt="Coding Buds founder teaching programming to kids"
              width={1200}
              height={860}
              className="h-[30rem] w-full object-cover lg:h-[36rem]"
            />
          </div>
          
          
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="10+ Years of Global Coding Education Experience"
            description="At Coding Buds, we believe coding education is about creativity, logical thinking, and problem-solving. Founded by Anjali Singla, a Computer Science Engineer with years of industrial and teaching experience, we have successfully trained 600+ students."
          />

          <div className="mt-8 space-y-4">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-surface flex items-center gap-4 px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#E8511A]" />
                <span className="font-medium text-slate-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}