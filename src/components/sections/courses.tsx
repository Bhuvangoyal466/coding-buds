"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Star } from "lucide-react";
import { courses } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CoursesSection() {
  return (
    <section id="courses" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Popular Courses"
          title="Pick a Programming Course to Get Started"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="card-surface group overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  width={900}
                  height={520}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1B2D5B] shadow-lg">
                  {course.badge}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <h3 className="font-heading text-2xl font-semibold leading-tight text-[#1B2D5B]">
                  {course.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{course.description}</p>

                <div className="flex items-center justify-between rounded-2xl bg-[#eef4ff] px-4 py-3 text-sm text-[#1B2D5B]">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <Star className="h-4 w-4 fill-current text-[#FFD600]" />
                    {course.rating}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {course.sessions}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-slate-600">
                  {course.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#E8511A]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1B2D5B] px-5 py-3 text-sm font-semibold text-white! transition hover:bg-[#132145] hover:text-white! visited:text-white!"
                >
                  Book This Course
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}