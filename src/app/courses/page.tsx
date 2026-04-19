import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Star,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Courses — Coding Buds",
  description:
    "Browse all Coding Buds courses for kids and teens: Scratch, Python, Web Development, and Java. Expert-taught live sessions for ages 6 and up.",
  alternates: { canonical: "/courses" },
};

const courses = [
  {
    title: "Scratch for Kids",
    subtitle: "Your child's first step into coding",
    badge: "Ages 6–10 · Beginner",
    badgeColor: "bg-[#f0fdf4] text-[#166534]",
    accent: "from-[#46c47d] to-[#1f8b57]",
    accentSolid: "#46c47d",
    accentDim: "rgba(70,196,125,0.08)",
    image: "/assets/images/scratch-game.webp",
    imageAlt: "Scratch programming course for kids aged 6 to 10",
    rating: "4.9",
    sessions: "48 sessions",
    description:
      "The perfect first step into coding. Kids aged 6–10 build real games, animations, and interactive stories using colourful drag-and-drop blocks — no typing required. Covers loops, conditionals, variables, events, and game design.",
    highlights: [
      { icon: "🎮", text: "Build real games & animations" },
      { icon: "🧠", text: "Grows logical thinking skills" },
      { icon: "🎨", text: "No prior experience needed" },
      { icon: "🚀", text: "Direct pathway into Python" },
    ],
    href: "/courses/scratch",
  },
  {
    title: "Python for Teens",
    subtitle: "The language Google, NASA & Netflix use",
    badge: "Ages 8–16 · Intermediate",
    badgeColor: "bg-[#fff0eb] text-[#c2410c]",
    accent: "from-[#ff6a7b] to-[#d93464]",
    accentSolid: "#E8511A",
    accentDim: "rgba(232,81,26,0.07)",
    image: "/assets/images/python-class.webp",
    imageAlt: "Python programming course for teens aged 8 to 16",
    rating: "5.0",
    sessions: "48 sessions",
    description:
      "Python is the world's most in-demand programming language — and it reads almost like plain English. Students write real code, build apps and games, explore algorithms, and get an introduction to AI concepts.",
    highlights: [
      { icon: "🐍", text: "Real text-based coding from day 1" },
      { icon: "🤖", text: "Apps, games & AI basics" },
      { icon: "🚀", text: "Skills used by top tech companies" },
      { icon: "🔢", text: "Algorithms & data structures" },
    ],
    href: "/courses/python",
  },
  {
    title: "Web Development",
    subtitle: "Build websites your child can show off",
    badge: "All Ages · Intermediate",
    badgeColor: "bg-[#eef4ff] text-[#1d4ed8]",
    accent: "from-[#4c7cff] to-[#1f4ad7]",
    accentSolid: "#2D8EFF",
    accentDim: "rgba(45,142,255,0.07)",
    image: "/assets/images/web-development.webp",
    imageAlt: "Web development course teaching HTML CSS and JavaScript for kids",
    rating: "4.8",
    sessions: "48 sessions",
    description:
      "HTML, CSS, and JavaScript — the three languages that power every website on earth. Students learn all three and finish with a real, live, publicly accessible website they can share with anyone.",
    highlights: [
      { icon: "🌐", text: "Publish a real live website" },
      { icon: "🎨", text: "Design, layout & interactivity" },
      { icon: "📁", text: "Portfolio ready for school & uni" },
      { icon: "⚡", text: "APIs & live data integration" },
    ],
    href: "/courses/web-dev",
  },
  {
    title: "Java Programming",
    subtitle: "Serious computer science for ambitious learners",
    badge: "Ages 10+ · Intermediate",
    badgeColor: "bg-[#fff8eb] text-[#92400e]",
    accent: "from-[#f5c64e] to-[#f28b1d]",
    accentSolid: "#f59e0b",
    accentDim: "rgba(245,158,11,0.07)",
    image: "/assets/images/java.webp",
    imageAlt: "Java programming course for kids and teens building computer science foundations",
    rating: "4.8",
    sessions: "48 sessions",
    description:
      "Java is taught in most school computer science programmes worldwide. It builds structured, disciplined thinking — object-oriented programming, algorithms, exception handling — that sets students apart in exams and competitive coding.",
    highlights: [
      { icon: "📚", text: "Aligned with school CS syllabuses" },
      { icon: "🏆", text: "Exam & competition preparation" },
      { icon: "⚙️", text: "Object-oriented programming" },
      { icon: "📱", text: "Foundation for Android development" },
    ],
    href: "/courses/java",
  },
];

export default function CoursesIndexPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section-wave pt-16 pb-0 text-white">
        <div className="container-shell text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD600]">
            All Courses
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Find the Right Course<br />
            <span className="text-[#FFD600]">for Your Child</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-white/80">
            Every course is taught live — 1:1 or in small groups — by an expert instructor. Choose the pathway that fits your child's age and goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#FFD600] fill-current" /> 4.9 avg rating</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FFD600]" /> 48 sessions each</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#FFD600]" /> 1:1 & small groups</span>
            <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#FFD600]" /> Ages 6 and up</span>
          </div>
        </div>
        <div className="mt-16 h-16 bg-[#f4f7fb]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* ── COURSE LIST ── */}
      <section className="section-shell bg-[#f4f7fb] pt-0">
        <div className="container-shell">
          <div className="flex flex-col gap-10">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="group grid items-center gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_8px_32px_rgba(15,28,56,0.07)] transition-all hover:shadow-[0_16px_48px_rgba(15,28,56,0.11)] lg:grid-cols-[320px_1fr] lg:p-8"
              >
                {/* Image */}
                <Link href={course.href} className="relative block overflow-hidden rounded-[1.25rem]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.accent} opacity-0 transition group-hover:opacity-10 z-10 rounded-[1.25rem]`} />
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    width={640}
                    height={420}
                    className="w-full object-cover transition duration-500 group-hover:scale-105 rounded-[1.25rem] aspect-[4/3]"
                  />
                  <span className={`absolute left-3 top-3 z-20 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </Link>

                {/* Content */}
                <div className="flex flex-col gap-5">
                  <div>
                    <p
                      className="mb-1 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: course.accentSolid }}
                    >
                      {course.subtitle}
                    </p>
                    <Link href={course.href}>
                      <h2 className="font-heading text-3xl font-semibold text-[#1B2D5B] hover:underline underline-offset-2">
                        {course.title}
                      </h2>
                    </Link>
                  </div>

                  <p className="text-base leading-7 text-slate-600">{course.description}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2">
                    {course.highlights.map((h) => (
                      <div
                        key={h.text}
                        className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-slate-700"
                        style={{ background: course.accentDim }}
                      >
                        <span className="text-base leading-none">{h.icon}</span>
                        {h.text}
                      </div>
                    ))}
                  </div>

                  {/* Stats + CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-5 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Star className="h-4 w-4 fill-[#FFD600] text-[#FFD600]" />
                        <strong className="text-[#1B2D5B]">{course.rating}</strong> rating
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-slate-400" />
                        {course.sessions}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-slate-400" />
                        1:1 &amp; group
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(232,81,26,0.22)] transition hover:bg-[#cf4514]"
                      >
                        Book Free Trial
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={course.href}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-[#1B2D5B]"
                      >
                        Full Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATHWAY GUIDE ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Learning Pathway</p>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B]">
              Which course should my child start with?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Most students follow this natural progression — but every child is different, and we're happy to advise at a free trial.
            </p>
          </div>
          <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch">
            {[
              { step: "1", title: "Scratch", age: "Ages 6–10", note: "Complete beginners", color: "#46c47d", href: "/courses/scratch" },
              { step: "2", title: "Python", age: "Ages 8–16", note: "After Scratch or older starters", color: "#E8511A", href: "/courses/python" },
              { step: "3", title: "Web Dev", age: "All ages", note: "Alongside or after Python", color: "#2D8EFF", href: "/courses/web-dev" },
              { step: "4", title: "Java", age: "Ages 10+", note: "For exam prep & CS foundations", color: "#f59e0b", href: "/courses/java" },
            ].map((item, i, arr) => (
              <div key={item.title} className="flex sm:flex-1 sm:flex-col">
                <Link
                  href={item.href}
                  className="flex flex-1 flex-col gap-2 rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:text-center"
                  style={{ borderTopColor: item.color, borderTopWidth: 3 }}
                >
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white sm:mx-auto"
                    style={{ background: item.color }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-[#1B2D5B]">{item.title}</h3>
                  <p className="text-xs font-semibold text-slate-400">{item.age}</p>
                  <p className="text-sm text-slate-500">{item.note}</p>
                </Link>
                {i < arr.length - 1 && (
                  <div className="flex items-center justify-center px-2 sm:py-2 sm:px-0">
                    <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 sm:rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-shell section-wave text-white">
        <div className="container-shell text-center">
          <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            Not sure where to start?
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-8 text-white/80">
            Book a free trial and we'll recommend the perfect course for your child's age and experience.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-8 py-4 font-semibold text-white shadow-brand transition hover:bg-[#cf4514]"
            >
              Book a Free Trial Class
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}