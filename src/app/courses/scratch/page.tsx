import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Gamepad2,
  Palette,
  Star,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scratch Programming for Kids — Ages 6–10",
  description:
    "Learn Scratch programming at Coding Buds. Kids aged 6–10 build games, animations, and interactive stories with colourful drag-and-drop blocks.",
  alternates: { canonical: "/courses/scratch" },
};

const topics = [
  { emoji: "🧩", title: "Sprites & Backdrops", desc: "Bring characters to life with costumes, movement, and animated scenes." },
  { emoji: "🔁", title: "Loops & Sequences", desc: "Understand how computers repeat actions and follow step-by-step instructions." },
  { emoji: "❓", title: "Conditionals & Logic", desc: "Make programs that react — if this happens, do that." },
  { emoji: "🎵", title: "Sound & Events", desc: "Add music, sound effects, and trigger actions when keys are pressed or sprites clicked." },
  { emoji: "📦", title: "Variables & Score Systems", desc: "Store information and build real scoring systems for games." },
  { emoji: "🎮", title: "Game Design", desc: "Design levels, win conditions, and obstacles — the fundamentals of real game development." },
  { emoji: "🖌️", title: "Animation & Storytelling", desc: "Create frame-by-frame animations and code interactive stories with branching paths." },
  { emoji: "🤝", title: "Broadcasts & Clones", desc: "Make sprites communicate and create multiple copies of objects dynamically." },
  { emoji: "🏆", title: "Final Projects", desc: "Every student ends with a portfolio of personal projects they designed and built themselves." },
];

const projects = [
  {
    image: "/assets/images/project-scratch-card.png",
    title: "Interactive Greeting Card",
    desc: "A clickable animated card built entirely in Scratch — one of our students made this for their parents.",
    tag: "Beginner Project",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    image: "/assets/images/project-scratch-vending.png",
    title: "Smart Vending Machine",
    desc: "A fully working vending machine simulation with item selection, pricing, and a payment system.",
    tag: "Advanced Project",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

const faqs = [
  { q: "Does my child need any coding experience?", a: "None at all. Scratch is designed for complete beginners and we start from scratch (pun intended). If your child can use a mouse, they're ready." },
  { q: "What age is Scratch for?", a: "We recommend Scratch for ages 6–10. Older children who are new to coding may still start here before moving to Python." },
  { q: "How long is the course?", a: "48 sessions in total. Sessions are 60 minutes each and can be scheduled flexibly around your child's routine." },
  { q: "What comes after Scratch?", a: "Most students move on to our Python course, where they apply the same logical thinking they learned in Scratch but with real text-based code." },
];

export default function ScratchCoursePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section-wave pt-16 pb-0 text-white">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                <Gamepad2 className="h-4 w-4 text-[#FFD600]" />
                <span className="text-white/85">Ages 6–10 · Beginner Level</span>
              </div>
              <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Scratch<br />
                <span className="text-[#FFD600]">Programming</span><br />
                for Kids
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
                The perfect first step into coding. Kids aged 6–10 build real games, animations, and interactive stories — no typing required.
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
              {/* quick stats */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#FFD600] fill-current" /> 4.9 rating</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#FFD600]" /> 48 sessions</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#FFD600]" /> 1:1 & group</span>
                <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#FFD600]" /> Beginner friendly</span>
              </div>
            </div>
            {/* hero image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(255,214,0,0.12),transparent_70%)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Image
                  src="/assets/images/scratch-game.webp"
                  alt="Scratch programming for kids"
                  width={700}
                  height={500}
                  className="w-full rounded-[1.5rem] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* wave */}
        <div className="mt-16 h-16 bg-[#f4f7fb]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* ── WHY SCRATCH ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Why Scratch?</p>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">
                Code without the confusing bits
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Scratch replaces intimidating lines of text with colourful drag-and-drop blocks that snap together like puzzle pieces. Children see instant results — a sprite dances, a sound plays, a story unfolds — and that immediate feedback is incredibly motivating.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                By the end of the course your child will have built a real portfolio of projects — games, animations, and interactive stories they designed themselves. They cover a huge range of concepts and come away with skills that directly transfer into Python and beyond.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "No typing errors — blocks either snap or they don't",
                  "Instant visual feedback keeps children engaged",
                  "Introduces loops, conditionals, variables and events",
                  "Free platform — no downloads or purchases needed",
                  "Used in schools and universities worldwide",
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
                { icon: "🧠", title: "Critical Thinking", desc: "Breaking problems into steps is a skill for life." },
                { icon: "🎨", title: "Creative Expression", desc: "Art, storytelling, and code all in one place." },
                { icon: "💪", title: "Resilience", desc: "Debugging teaches kids to try again calmly." },
                { icon: "🚀", title: "Real Foundation", desc: "Everything learned transfers directly into Python." },
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
              Our Scratch course covers an enormous range of concepts — from the very first sprite all the way to fully designed multi-level games. Every topic is taught through hands-on projects.
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
              These are real projects made by real Coding Buds students — not demos, not templates. Every project was designed and built by the student themselves.
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
            Ready to start building?
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-8 text-white/80">
            Book a free trial class and your child will create their first Scratch project in the very first session — guaranteed.
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
              href="/courses/python"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              Next: Python Course →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}