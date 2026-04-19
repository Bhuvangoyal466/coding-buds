"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
import { CourseFinderQuiz } from "@/components/ui/course-finder-quiz";
import { SectionHeading } from "@/components/ui/section-heading";

const courses = [
  {
    title: "Scratch for Kids",
    subtitle: "Your child's first step into coding",
    badge: "Ages 6–10",
    badgeColor: "bg-[#f0fdf4] text-[#166534]",
    accent: "from-[#46c47d] to-[#1f8b57]",
    accentSolid: "#46c47d",
    accentDim: "rgba(70,196,125,0.08)",
    image: "/assets/images/scratch-game.webp",
    imageAlt: "Scratch programming course for kids aged 6 to 10",
    rating: "4.9",
    sessions: "48 sessions",
    duration: "4 weeks",
    description:
      "In just a few sessions, your child will be building their own games and animations — using colourful drag-and-drop blocks, no typing needed. Scratch is proven to build logical thinking, creativity, and confidence that carries into every subject at school.",
    highlights: [
      { icon: "🎮", text: "Build real games & animations" },
      { icon: "🧠", text: "Grows logical thinking skills" },
      { icon: "🎨", text: "No prior experience needed" },
    ],
    parentNote: "Perfect for complete beginners aged 6–10",
    href: "#contact",
  },
  {
    title: "Python for Teens",
    subtitle: "The language Google, NASA & Netflix use",
    badge: "Ages 8–16",
    badgeColor: "bg-[#fff0eb] text-[#c2410c]",
    accent: "from-[#ff6a7b] to-[#d93464]",
    accentSolid: "#E8511A",
    accentDim: "rgba(232,81,26,0.07)",
    image: "/assets/images/python-class.webp",
    imageAlt: "Python programming course for teens aged 8 to 16",
    rating: "5.0",
    sessions: "48 sessions",
    duration: "6 weeks",
    description:
      "Python is the world's most in-demand programming language — and it reads like plain English, making it surprisingly easy for young learners. Your child will write real code, build mini apps, and even explore the basics of AI.",
    highlights: [
      { icon: "🐍", text: "Real text-based coding from day 1" },
      { icon: "🤖", text: "Apps, games & AI basics" },
      { icon: "🚀", text: "Skills used by top tech companies" },
    ],
    parentNote: "Great step up after Scratch, or as a first course for older kids",
    href: "#contact",
  },
  {
    title: "Web Development",
    subtitle: "Build websites your child can show off",
    badge: "All Ages",
    badgeColor: "bg-[#eef4ff] text-[#1d4ed8]",
    accent: "from-[#4c7cff] to-[#1f4ad7]",
    accentSolid: "#2D8EFF",
    accentDim: "rgba(45,142,255,0.07)",
    image: "/assets/images/web-development.webp",
    imageAlt: "Web development course teaching HTML CSS and JavaScript for kids",
    rating: "4.8",
    sessions: "48 sessions",
    duration: "8 weeks",
    description:
      "HTML, CSS, and JavaScript power every website on earth — and your child will learn all three. By the end of this course, they'll have a live website online that anyone can visit. A real portfolio piece for school applications.",
    highlights: [
      { icon: "🌐", text: "Publish a real live website" },
      { icon: "🎨", text: "Design, layout & interactivity" },
      { icon: "📁", text: "Portfolio ready for school & uni" },
    ],
    parentNote: "Ideal for creative kids who love design and visible results",
    href: "#contact",
  },
  {
    title: "Java Programming",
    subtitle: "Serious computer science for ambitious learners",
    badge: "Intermediate",
    badgeColor: "bg-[#fff8eb] text-[#92400e]",
    accent: "from-[#f5c64e] to-[#f28b1d]",
    accentSolid: "#f59e0b",
    accentDim: "rgba(245,158,11,0.07)",
    image: "/assets/images/java.webp",
    imageAlt: "Java programming course for kids and teens building computer science foundations",
    rating: "4.8",
    sessions: "48 sessions",
    duration: "Self-paced",
    description:
      "Java is taught in most school computer science programmes — and for good reason. It builds structured, disciplined thinking that sets students apart in exams, university applications, and competitive coding. Give your child the edge early.",
    highlights: [
      { icon: "📚", text: "Aligned with school CS syllabuses" },
      { icon: "🏆", text: "Exam & competition preparation" },
      { icon: "⚙️", text: "Object-oriented programming" },
    ],
    parentNote: "Best for teens wanting a head start on school computer science",
    href: "#contact",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Popular Courses"
          title="Find the Right Course for Your Child"
          description="Every course is taught live — 1:1 or in small groups — by an expert instructor. Your child always gets personal attention, never a pre-recorded video."
        />

        {/* ── COURSE CARDS ── */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex flex-col rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_8px_32px_rgba(15,28,56,0.07)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_52px_rgba(15,28,56,0.13)]"
            >
              {/* Colour accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${course.accent}`} />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  width={900}
                  height={520}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${course.badgeColor}`}>
                  {course.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-5">

                {/* Title + subtitle */}
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-tight text-[#1B2D5B]">
                    {course.title}
                  </h3>
                  <p
                    className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: course.accentSolid }}
                  >
                    {course.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="flex-1 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {course.highlights.map((h) => (
                    <li key={h.text} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="text-base leading-none">{h.icon}</span>
                      {h.text}
                    </li>
                  ))}
                </ul>

                {/* Stats row */}
                <div
                  className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-600"
                  style={{ background: course.accentDim }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-[#FFD600] text-[#FFD600]" />
                    <strong className="text-[#1B2D5B]">{course.rating}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {course.sessions}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-slate-400" />
                    1:1 &amp; group
                  </span>
                </div>

                {/* Parent note */}
                <p className="text-xs italic leading-5 text-slate-400">
                  💡 {course.parentNote}
                </p>

                {/* CTA */}
                <Link
                  href={course.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#E8511A] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(232,81,26,0.22)] transition hover:bg-[#cf4514] hover:shadow-[0_8px_24px_rgba(232,81,26,0.32)]"
                >
                  Book a Free Trial
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

              </div>
            </motion.article>
          ))}
        </div>

        {/* ── TRUST BAR ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          {[
            { icon: "✅", text: "Free trial — no commitment" },
            { icon: "👩‍🏫", text: "Expert instructor, live sessions" },
            { icon: "⭐", text: "100% parent satisfaction" },
            { icon: "🌍", text: "Students in 10+ countries" },
          ].map((item) => (
            <span key={item.text} className="inline-flex items-center gap-2 font-medium">
              <span>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        {/* ── QUIZ DIVIDER ── */}
        <div className="mt-20 mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.28em] text-[#E8511A]">
            Not sure which to pick?
          </p>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* ── QUIZ ── */}
        <div className="mx-auto max-w-2xl">
          <CourseFinderQuiz />
        </div>
      </div>
    </section>
  );
}