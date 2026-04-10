"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoriesSection() {
  return (
    <section id="categories" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Categories"
          title="Coding Buds - Hands-On Programming Learning for Kids Ages 6-16"
          description="Choose between 1:1 personalized sessions or fun group classes. From Scratch visual programming to AI projects, we prepare kids for a future where technology and creativity go hand in hand."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card-surface group relative overflow-hidden p-6 transition hover:-translate-y-1"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef4ff]">
                <Image src={item.image} alt={item.imageAlt} width={40} height={40} className="h-10 w-10" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight text-[#1B2D5B]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <span className="mt-5 inline-flex rounded-full bg-[#eef4ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1B2D5B]">
                {item.badge}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}