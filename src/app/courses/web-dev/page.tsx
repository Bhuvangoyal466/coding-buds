import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Globe,
  Star,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Course for Kids & Teens — HTML, CSS & JavaScript",
  description:
    "Learn web development at Coding Buds. Kids and teens build real live websites using HTML, CSS, and JavaScript — perfect for school portfolios and university applications.",
  alternates: { canonical: "/courses/web-dev" },
};

const topics = [
  { emoji: "🏗️", title: "HTML Structure", desc: "Build the skeleton of any webpage — headings, paragraphs, images, links, and buttons." },
  { emoji: "🎨", title: "CSS Styling", desc: "Make websites beautiful with colours, fonts, spacing, and layouts." },
  { emoji: "📐", title: "Responsive Design", desc: "Websites that look great on phones, tablets, and desktops — automatically." },
  { emoji: "✨", title: "CSS Animations", desc: "Bring pages to life with transitions, hover effects, and keyframe animations." },
  { emoji: "⚡", title: "JavaScript Fundamentals", desc: "Make websites interactive — buttons that do things, forms that validate, menus that open." },
  { emoji: "🔧", title: "DOM Manipulation", desc: "Use JavaScript to update page content dynamically without reloading." },
  { emoji: "📋", title: "Forms & User Input", desc: "Build forms that collect, validate, and respond to user data." },
  { emoji: "🌐", title: "APIs & Live Data", desc: "Connect to real-world data sources and display live information on your page." },
  { emoji: "🚀", title: "Deploying Live", desc: "Publish your website so anyone in the world can visit it — for free." },
  { emoji: "🗂️", title: "Project Architecture", desc: "Organise files and folders the way professional developers do." },
  { emoji: "♿", title: "Accessibility Basics", desc: "Build websites that work for everyone, including people using screen readers." },
  { emoji: "🏆", title: "Portfolio Projects", desc: "Every student finishes with a live, publicly accessible portfolio of websites." },
];

const projects = [
  {
    image: "/assets/images/project-web-codefinder.png",
    title: "CodeFinder — Language Learning App",
    desc: "A full multi-page web app with a quiz, language guides, a playground, and progress tracking. Built entirely with HTML, CSS, and JavaScript.",
    tag: "Full Web App",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    image: "/assets/images/project-web-wizard.png",
    title: "Web Wizard Tutorial Site",
    desc: "An interactive step-by-step tutorial website teaching other kids how to publish code online. Complete with animations and a custom design system.",
    tag: "Tutorial Site",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    image: "/assets/images/project-web-gaming.png",
    title: "Mega Gaming Hub",
    desc: "A complete gaming platform with 19 playable games — dice roller, snake, flappy bird, tic tac toe, and more. All built from scratch in the browser.",
    tag: "Game Platform",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    image: "/assets/images/project-web-webpage.png",
    title: "Code → Webpage Tool",
    desc: "A real web tool that converts Python code into a shareable HTML webpage. Used by other Coding Buds students to publish their own projects online.",
    tag: "Dev Tool",
    tagColor: "bg-green-100 text-green-700",
  },
];

const faqs = [
  { q: "What age is this course for?", a: "Web Development is open to all ages. Younger children (8+) can absolutely take this course — HTML is actually one of the most beginner-friendly languages there is." },
  { q: "Do they need to know Python first?", a: "No. Web Development is completely independent. Some students take it alongside Python, others take it as their very first course." },
  { q: "Will my child have a real website at the end?", a: "Yes — a real, publicly accessible website hosted online that they can share with anyone. Not a mock-up. An actual live URL." },
  { q: "Is this useful for school and university?", a: "Absolutely. A working personal website is increasingly expected in university applications and competitive internship processes. Several of our students have used their Coding Buds portfolio sites in applications." },
  { q: "How long is the course?", a: "48 sessions, each 60 minutes. We cover a huge amount of ground — HTML, CSS, JavaScript, responsive design, APIs, and deployment." },
];

export default function WebDevCoursePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section-wave pt-16 pb-0 text-white">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                <Globe className="h-4 w-4 text-[#FFD600]" />
                <span className="text-white/85">All Ages · Intermediate</span>
              </div>
              <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Web<br />
                <span className="text-[#FFD600]">Development</span><br />
                Course
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
                HTML, CSS, and JavaScript — the three languages that power every website on earth. Your child will learn all three and build real live websites anyone can visit.
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
                <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#FFD600]" /> All ages</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(45,142,255,0.15),transparent_70%)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Image
                  src="/assets/images/web-development.webp"
                  alt="Web development course for kids"
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

      {/* ── WHY WEB DEV ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">Why Web Development?</p>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1B2D5B] sm:text-5xl">
                Build things the whole world can see
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Every website your child visits was built by someone who learned exactly what we teach. At the end of this course your child won't just understand how the web works — they'll have built a piece of it themselves.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We cover an enormous amount of ground — from the very first HTML tag all the way to connecting to live APIs and deploying a real website. The projects our students produce are genuinely impressive.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "A real live website — not a mock-up — by the end of the course",
                  "HTML, CSS, and JavaScript all covered in one course",
                  "Portfolio-worthy projects for school and university applications",
                  "Responsive design — websites that work on any device",
                  "Web development is one of the most in-demand skills worldwide",
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
                { icon: "🌍", title: "Live on the Web", desc: "A real URL they can share with anyone, anywhere in the world." },
                { icon: "💼", title: "Career Ready", desc: "Web developers are among the most sought-after professionals globally." },
                { icon: "🎨", title: "Design + Code", desc: "Perfect for kids who love both art and technology." },
                { icon: "📚", title: "University Edge", desc: "A working portfolio site stands out in any application." },
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
              We cover a massive range of web development concepts — from the very first HTML tag to live deployed websites. Every topic is taught through real projects.
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
              These are real websites and apps built by real Coding Buds students. Every single one is live on the internet — a real URL, not a screenshot of a mock-up.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="card-surface overflow-hidden transition hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
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
            Your child&apos;s first website starts here.
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-8 text-white/80">
            Book a free trial and your child will write their first HTML in the very first session and see it come to life in the browser instantly.
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
              href="/courses/java"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              Next: Java Course →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}