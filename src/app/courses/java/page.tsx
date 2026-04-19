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
  title: "Java Programming for Kids & Teens — Object-Oriented Programming",
  description:
    "Learn Java at Coding Buds. Build strong computer science foundations with object-oriented programming — perfect for school exams, competitive coding, and university applications.",
  alternates: { canonical: "/courses/java" },
};

const topics = [
  { emoji: "🔤", title: "Variables & Data Types", desc: "Integers, strings, booleans, and doubles — the foundation of all Java programs." },
  { emoji: "❓", title: "Conditionals & Logic", desc: "if, else, switch — writing programs that make intelligent decisions." },
  { emoji: "🔁", title: "Loops", desc: "for, while, and do-while loops for automating repetitive tasks." },
  { emoji: "🧩", title: "Methods & Functions", desc: "Organise code into reusable blocks — the key to writing clean, professional programs." },
  { emoji: "📦", title: "Classes & Objects", desc: "The heart of object-oriented programming — modelling real-world things in code." },
  { emoji: "🧬", title: "Inheritance", desc: "Build new classes based on existing ones — reducing repetition and increasing flexibility." },
  { emoji: "🎭", title: "Polymorphism", desc: "Write code that works with many different types — a cornerstone of professional software." },
  { emoji: "🔒", title: "Encapsulation", desc: "Protect data inside objects and control how it is accessed — just like professional codebases." },
  { emoji: "📋", title: "Arrays & ArrayLists", desc: "Store and manipulate collections of data efficiently." },
  { emoji: "⚙️", title: "Algorithms & Sorting", desc: "Understand searching and sorting — tested in virtually every competitive coding challenge." },
  { emoji: "🐛", title: "Exception Handling", desc: "Write programs that handle errors gracefully — an essential professional skill." },
  { emoji: "🏆", title: "Final Projects", desc: "Students build structured Java applications — games, systems, or tools of their own design." },
];

const faqs = [
  { q: "Who is Java for?", a: "Java is best suited to students who already have some programming experience (Python or Scratch), or older teens who want to jump straight into a rigorous language. It's particularly valuable for students preparing for school computer science exams." },
  { q: "Why Java and not another language?", a: "Java is taught in most Indian school computer science syllabuses and in many competitive coding competitions worldwide. A strong Java foundation is a genuine academic advantage. It also teaches object-oriented thinking that transfers to C++, C#, Python classes, and most modern languages." },
  { q: "Is Java hard for kids?", a: "Java is more structured than Python, which actually makes it excellent for learning proper programming discipline. We introduce concepts carefully and always through real projects — it's challenging but absolutely achievable." },
  { q: "How long is the course?", a: "48 sessions of 60 minutes each. We cover a comprehensive range of Java concepts from absolute basics through to full object-oriented design and algorithms." },
  { q: "Will this help with school exams?", a: "Yes. Java is the language used in most school computer science boards. Students who learn it properly — not just memorising syntax — consistently perform better in exams and competitive programming challenges." },
];

export default function JavaCoursePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section-wave pt-16 pb-0 text-white">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                <Code2 className="h-4 w-4 text-[#FFD600]" />
                <span className="text-white/85">Ages 10+ · Intermediate</span>
              </div>
              <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Java<br />
                <span className="text-[#FFD600]">Programming</span><br />
                Course
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
                Serious computer science for ambitious learners. Java builds the structured, disciplined thinking that sets students apart in exams, university applications, and competitive coding.
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
                <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#FFD600] fill-current" /> 4.8 rating</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FFD600]" /> 48 sessions</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#FFD600]" /> 1:1 & group</span>
                <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#FFD600]" /> Ages 10+</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(232,81,26,0.12),transparent_70%)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Image
                  src="/assets/images/java.webp"
                  alt="Java programming course for students"
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

      {/* ── WHY JAVA ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Why Java?</p>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">
                The language that builds real computer scientists
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Java has been one of the world's most widely used programming languages for over 25 years. Android apps, banking systems, enterprise software, and school computer science curricula all rely on Java. For students who want serious programming foundations — especially those preparing for exams or aiming for technology careers — Java is the right choice.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Learning to think in objects is one of the most important skills in professional software development. Once a student understands OOP in Java, they can transfer that thinking to C++, Python classes, C#, and most modern languages. It's a foundation that multiplies every other skill.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Used in most school computer science syllabuses worldwide",
                  "Essential for competitive programming and coding competitions",
                  "Object-oriented thinking transfers to every other language",
                  "Android app development is built on Java",
                  "Rigorous structure builds disciplined coding habits for life",
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
                { icon: "📐", title: "Structured Thinking", desc: "Java's rules teach habits that improve every other coding skill." },
                { icon: "🏫", title: "Exam Ready", desc: "Aligned with school CS syllabuses and competitive coding formats." },
                { icon: "🔭", title: "University Prep", desc: "The OOP concepts taught here are core to every CS degree." },
                { icon: "📱", title: "Android Pathway", desc: "Java is the foundation of Android app development." },
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
              Our Java course covers a comprehensive range of concepts — from the very basics through to full object-oriented design, algorithms, and real application development. Every topic is taught through building actual projects.
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

      {/* ── WHAT STUDENTS BUILD ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">What Students Build</p>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">
                Real programs, real logic
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Despite being a more structured language than Python or Scratch, Java still produces genuinely exciting projects. Students build things they're proud of — and the discipline they develop carries into everything they do.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { emoji: "🎮", title: "Console Games", desc: "Number games, hangman, tic-tac-toe, and word guessing games." },
                  { emoji: "🏦", title: "Banking Applications", desc: "Account systems with deposits, withdrawals, and balance tracking — OOP in action." },
                  { emoji: "📊", title: "Grade Management Systems", desc: "Real data structure practice with arrays and ArrayLists." },
                  { emoji: "🔍", title: "Search & Sort Visualisers", desc: "Understanding algorithms by watching them work step by step." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-[1rem] border border-slate-200 bg-white p-4">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-[#1B2D5B]">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-surface overflow-hidden">
              <Image
                src="/assets/images/java.webp"
                alt="Java programming projects"
                width={700}
                height={600}
                className="w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8511A]">Our approach</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Students who learn Java with genuine understanding — not just memorising syntax — consistently perform better in school CS classes. The rigour of Java teaches habits: writing clean code, thinking before typing, and testing thoroughly.
                </p>
              </div>
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
            Give your child the edge early.
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-8 text-white/80">
            Book a free trial and see how we make Java genuinely engaging — not just another school subject to memorise.
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
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}