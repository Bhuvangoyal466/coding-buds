import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  Star,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Python Programming for Kids & Teens — Ages 8–16",
  description:
    "Learn Python at Coding Buds. Kids and teens aged 8–16 build real apps, games, and AI basics with the language used by Google, NASA, and Netflix.",
  alternates: { canonical: "/courses/python" },
};

const topics = [
  { emoji: "🖨️", title: "Variables & Data Types", desc: "Store text, numbers, and lists — the building blocks of every program." },
  { emoji: "🔀", title: "Conditionals", desc: "Write programs that make decisions using if, elif, and else." },
  { emoji: "🔁", title: "Loops", desc: "Automate repetitive tasks with for and while loops." },
  { emoji: "📦", title: "Functions", desc: "Write reusable blocks of code and understand how programs are structured." },
  { emoji: "📋", title: "Lists & Dictionaries", desc: "Work with collections of data — essential for any real-world application." },
  { emoji: "📁", title: "File Handling", desc: "Read from and write to files — making programs that remember things." },
  { emoji: "🐢", title: "Turtle Graphics", desc: "Draw shapes, patterns, and mini animations using Python's Turtle library." },
  { emoji: "🎮", title: "Mini Games & Apps", desc: "Build console games like number guessing, rock paper scissors, and word games." },
  { emoji: "🤖", title: "AI & Logic Basics", desc: "An introduction to how computers make smart decisions — the foundation of AI." },
  { emoji: "🧹", title: "Debugging & Clean Code", desc: "Learn to read error messages, fix bugs, and write code that's easy to understand." },
  { emoji: "🔢", title: "Algorithms & Sorting", desc: "Understand how computers search and sort data efficiently." },
  { emoji: "🏆", title: "Final Projects", desc: "Students build and present a personal Python project of their own choosing." },
];

const projects = [
  {
    image: "/assets/images/project-python-etch.png",
    title: "Etch-a-Sketch Drawing App",
    desc: "A fully interactive drawing program using Python's Turtle library — controllable with keyboard keys, complete with colour changes and clear screen.",
    tag: "Turtle Graphics",
    tagColor: "bg-blue-100 text-blue-700",
  },
];

const faqs = [
  { q: "Does my child need to know Scratch first?", a: "Not necessarily. If your child is 8+ and a confident reader, they can start Python directly. Younger children or complete beginners often benefit from Scratch first." },
  { q: "What makes Python the right choice?", a: "Python reads almost like plain English, runs on any computer, and is used by Google, NASA, Netflix, and thousands of other organisations. Children aren't learning a toy language — they're learning the real thing." },
  { q: "How long is the course?", a: "48 sessions, each 60 minutes long. Flexible scheduling means classes fit around school, sports, and other activities." },
  { q: "What comes after Python?", a: "Students can move into Web Development (HTML, CSS, JavaScript) or Java Programming depending on their interests and goals." },
  { q: "Is Python hard for kids?", a: "Python is specifically recommended for young learners because of its clean, readable syntax. In our experience, most children are writing working programs within their first session." },
];

export default function PythonCoursePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section-wave pt-16 pb-0 text-white">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                <Code2 className="h-4 w-4 text-[#FFD600]" />
                <span className="text-white/85">Ages 8–16 · Intermediate</span>
              </div>
              <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Python<br />
                <span className="text-[#FFD600]">Programming</span><br />
                for Kids
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
                The language Google, NASA, and Netflix all use — and it reads almost like plain English. Your child will write real code and build real things from day one.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-6 py-3 font-semibold text-white shadow-brand transition hover:bg-[#cf4514]"
                >
                  Book a Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
                >
                  View All Courses
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#FFD600] fill-current" /> 5.0 rating</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FFD600]" /> 48 sessions</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#FFD600]" /> 1:1 & group</span>
                <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#FFD600]" /> Ages 8–16</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(45,142,255,0.15),transparent_70%)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Image
                  src="/assets/images/python-class.webp"
                  alt="Python programming for kids"
                  width={700}
                  height={500}
                  className="w-full rounded-[1.5rem] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 h-16 bg-[#f4f7fb]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* ── WHY PYTHON ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Why Python?</p>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">
                Real code. Real projects. Real confidence.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Python is the world's most recommended first text-based programming language — and for good reason. It's powerful enough to run billion-dollar companies, but readable enough for an 8-year-old to pick up on day one.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our Python course covers an enormous range of topics — from the very basics all the way through to algorithms, file handling, and an introduction to AI concepts. Students work through a huge amount of material and come away genuinely prepared for advanced programming.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Used by Google, NASA, Netflix, Instagram, and thousands more",
                  "Number one language in data science and AI",
                  "Reads almost like plain English — beginners pick it up fast",
                  "Students write working programs in their very first session",
                  "Skills that are genuinely in demand now and for decades to come",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E8511A]" />
                    <span className="text-sm text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", title: "Fast Results", desc: "Working programs from session one — no lengthy setup." },
                { icon: "🌍", title: "Industry Standard", desc: "The same language professionals use every day." },
                { icon: "🧩", title: "Logical Thinking", desc: "Builds problem-solving habits that carry into every subject." },
                { icon: "🔭", title: "AI Ready", desc: "Python is the gateway to machine learning and data science." },
              ].map((item) => (
                <div key={item.title} className="card-surface p-5">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-[#1B2D5B]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ── */}
      <section className="section-shell bg-[#f4f7fb] pt-0">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Course Content</p>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">What your child will learn</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We cover a huge range of Python concepts — from absolute basics through to real apps, games, and an introduction to AI. Every topic is taught through building actual projects.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic.title} className="card-surface p-6 transition hover:-translate-y-1">
                <span className="text-3xl">{topic.emoji}</span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-[#1B2D5B]">{topic.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT PROJECTS ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Real Student Work</p>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">What kids actually build</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Real projects, built by real students. Not demos — actual work produced during class by children who started as complete beginners.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="card-surface overflow-hidden transition hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-[#1B2D5B]">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{project.desc}</p>
                </div>
              </div>
            ))}
            {/* confidence callout */}
            <div className="card-surface flex flex-col justify-center p-8 bg-[#eef4ff]">
              <span className="text-5xl mb-4">💬</span>
              <blockquote className="font-heading text-xl font-semibold leading-snug text-[#1B2D5B]">
                &ldquo;My son used to give up the moment something was hard. After six months of Python, he debugs his homework the way he debugs his code — methodically, without panic.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-500">— Parent of a Coding Buds student</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-shell bg-[#f4f7fb] pt-0">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">FAQ</p>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">Questions parents ask</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-surface p-6">
                <h3 className="font-heading text-lg font-semibold text-[#1B2D5B]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-shell section-wave text-white">
        <div className="container-shell text-center">
          <Zap className="mx-auto h-10 w-10 text-[#FFD600]" />
          <h2 className="mt-6 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Your child&apos;s first Python program starts here.
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-8 text-white/80">
            Book a free trial and your child will write their first real Python program in the very first session — we guarantee it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-8 py-4 font-semibold text-white shadow-brand transition hover:bg-[#cf4514]"
            >
              Book a Free Trial Class
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/courses/web-dev"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              Next: Web Development →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}