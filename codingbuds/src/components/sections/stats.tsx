"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/site-data";
import { CounterNumber } from "@/components/ui/counter-number";

export function StatsSection() {
  return (
    <section className="section-shell pt-0">
      <div className="container-shell">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card-surface overflow-hidden p-6 text-center"
            >
              <h3 className="font-heading text-5xl font-semibold text-[#1B2D5B]">
                <CounterNumber end={stat.end} suffix={stat.suffix} duration={1600} />
              </h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                {stat.label}
              </p>
              <div className={`mt-5 h-1 w-full rounded-full bg-linear-to-r ${stat.tone}`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}