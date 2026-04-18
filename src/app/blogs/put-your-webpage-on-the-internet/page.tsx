import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Code2,
  Terminal,
  Zap,
} from "lucide-react";
import { ChecklistSection } from "@/components/sections/checklist-section";

export const metadata: Metadata = {
  title: "Put Your Webpage on the Internet – Web Wizard Tutorial",
  description:
    "A step-by-step guide for kids and teens to publish their Python code as a live website using GitHub Pages.",
  alternates: { canonical: "/blogs/put-your-webpage-on-the-internet" },
  openGraph: {
    title: "Put Your Webpage on the Internet – Web Wizard Tutorial | Coding Buds",
    description:
      "A step-by-step guide for kids and teens to publish their Python code as a live website using GitHub Pages.",
  },
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    emoji: "🧙",
    title: "Create Your GitHub Account",
    color: "#00c97f",
    colorDim: "rgba(0,201,127,0.08)",
    border: "rgba(0,201,127,0.25)",
    analogy: {
      icon: "🏠",
      text: "Think of GitHub as a giant library in the clouds. Your code is a book, and GitHub gives it a special shelf with your name on it. Anyone can find your book and read it!",
    },
    instructions: [
      {
        text: "Go to ",
        link: { href: "https://github.com", label: "github.com" },
        after: " in your web browser.",
      },
      { text: 'Click "Sign up" — it\'s totally free!' },
      { text: "Type in your email address. Ask a parent if you need help with this part." },
      {
        text: "Pick a username — this is your wizard name! Make it fun but remember it. (Example: ",
        code: "coder-sam",
        after: ")",
      },
      { text: "Create a password and keep it safe. Write it down somewhere!" },
      { text: 'Click the big "Create account" button and follow the steps to finish signing up.' },
    ],
    tip: "Your username will be part of your webpage's address, so make it something you love! No spaces allowed — use dashes instead.",
  },
  {
    number: "02",
    emoji: "✨",
    title: "Turn Your Code into a Webpage",
    color: "#2D8EFF",
    colorDim: "rgba(45,142,255,0.08)",
    border: "rgba(45,142,255,0.25)",
    analogy: {
      icon: "🔮",
      text: "You wrote your spell in Python. Code to Webpage is like a magic scroll that reads your spell and rewrites it in a language the internet understands — called HTML!",
    },
    instructions: [
      {
        text: "Go to ",
        link: { href: "https://code-webpage.vercel.app", label: "code-webpage.vercel.app" },
        after: " — that's the Code to Webpage tool!",
      },
      { text: "You'll see a big dark box. That's where your code goes!" },
      {
        text: "Open your Python code from class. Select all of it (",
        code: "Ctrl+A",
        after: " or ",
        code2: "Cmd+A",
        after2: ") and copy it (",
        code3: "Ctrl+C",
        after3: " or ",
        code4: "Cmd+C",
        after4: ").",
      },
      { text: "Click inside the dark box on the website, then paste your code." },
      { text: 'Click the big green "Convert to HTML →" button!' },
      { text: 'Your HTML code will appear below. Click "Copy HTML" — make sure you copied it all!' },
    ],
    tip: "Don't worry about what the HTML code means — the tool handled all that magic for you! Just make sure you copied it all.",
  },
  {
    number: "03",
    emoji: "🏰",
    title: "Create Your Repository",
    color: "#a78bfa",
    colorDim: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.25)",
    analogy: {
      icon: "🗃️",
      text: "A repository is like a magical backpack just for your project. It keeps everything together — your code, your webpage, everything — safe and organized in one place!",
    },
    instructions: [
      {
        text: "Go back to ",
        link: { href: "https://github.com", label: "github.com" },
        after: " and make sure you're logged in.",
      },
      { text: 'Look for the green "Create repository" button on the left side of your home page and click it.' },
      {
        text: 'In the "Repository name" box, type a name for your project — like ',
        code: "my-project",
        after: ". No spaces!",
      },
      { text: 'Make sure "Public" is selected so people can visit your webpage.' },
      { text: 'Leave everything else alone and click the green "Create repository" button!' },
    ],
    tip: 'See where it says "creating a new file"? That\'s what we\'re clicking next!',
  },
  {
    number: "04",
    emoji: "📄",
    title: "Add Your HTML Code",
    color: "#f472b6",
    colorDim: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.25)",
    analogy: {
      icon: "📖",
      text: "index.html is like the front door of your webpage. When someone visits your address on the internet, the browser opens this file first — just like opening the front door of a house!",
    },
    instructions: [
      { text: 'Click where it says "creating a new file".' },
      {
        text: "At the top, type the file name exactly: ",
        code: "index.html",
        after: " — spelling counts!",
      },
      { text: "Click inside the big area below — that's the editor where you write the code." },
      {
        text: "Paste the HTML code you copied from Code to Webpage (",
        code: "Ctrl+V",
        after: " or ",
        code2: "Cmd+V",
        after2: ").",
      },
      { text: 'Click the green "Commit changes…" button in the top right corner.' },
      { text: 'A little box will pop up — just click the green "Commit changes" button again.' },
    ],
    tip: "See the Settings tab at the top? That's where we're going next!",
  },
  {
    number: "05",
    emoji: "🌐",
    title: "Go Live on the Internet!",
    color: "#E8511A",
    colorDim: "rgba(232,81,26,0.08)",
    border: "rgba(232,81,26,0.25)",
    analogy: {
      icon: "💡",
      text: "Right now your webpage is like a drawing inside your backpack — only you can see it. GitHub Pages is like putting that drawing in a giant window for the whole neighbourhood to see. You're opening the curtains! 🪟",
    },
    instructions: [
      { text: "Click the ⚙️ Settings tab at the top of your repository page." },
      { text: 'Scroll down the left menu and click "Pages".' },
      { text: 'Under "Branch", click the dropdown that says "None" and choose "main".' },
      { text: 'Click the green "Save" button!' },
      { text: 'Wait about 1–2 minutes then refresh the page. You\'ll see a message that says "Your site is live at…" 🎉' },
      { text: 'Click "Visit site" to see your webpage on the real internet!' },
    ],
    tip: "Your webpage address will look something like yourusername.github.io/your-repo-name — you can share it with anyone and they can visit it from anywhere in the world!",
  },
];

const checklist = [
  "I created my GitHub account",
  "I pasted my code into Code to Webpage and copied the HTML",
  "I created a new repository on GitHub",
  "I created index.html and pasted my HTML code in",
  "I enabled GitHub Pages and my site is LIVE! 🌐",
];

const relatedPosts = [
  {
    slug: "python-for-young-programmers",
    title: "Why Python is Perfect for Young Programmers",
    category: "Python",
    excerpt:
      "Python's simple syntax makes it the ideal first text-based language for kids and teens aged 8 and above.",
  },
  {
    slug: "building-your-first-website",
    title: "Building Your First Website: A Teen's Guide",
    category: "Web Development",
    excerpt:
      "From personal portfolios to interactive games, web development lets teens bring ideas to life online.",
  },
  {
    slug: "benefits-of-learning-to-code-early",
    title: "The Benefits of Learning to Code at an Early Age",
    category: "Education",
    excerpt:
      "Early coding education builds critical thinking, creativity, and logical reasoning from a young age.",
  },
];

/* ─────────────────────────────────────────────
   INSTRUCTION RENDERER — handles mixed content
───────────────────────────────────────────── */
type Instruction = {
  text: string;
  link?: { href: string; label: string };
  after?: string;
  code?: string;
  after2?: string;
  code2?: string;
  after3?: string;
  code3?: string;
  after4?: string;
  code4?: string;
};

function renderInstruction(instr: Instruction) {
  return (
    <>
      {instr.text}
      {instr.link && (
        <a
          href={instr.link.href}
          target="_blank"
          rel="noreferrer"
          className="font-bold underline underline-offset-2 text-[#2D8EFF] hover:text-[#1B2D5B] transition-colors"
        >
          {instr.link.label}
        </a>
      )}
      {instr.after}
      {instr.code && (
        <code className="mx-0.5 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] font-bold text-[#1B2D5B]">
          {instr.code}
        </code>
      )}
      {instr.after2}
      {instr.code2 && (
        <code className="mx-0.5 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] font-bold text-[#1B2D5B]">
          {instr.code2}
        </code>
      )}
      {instr.after3}
      {instr.code3 && (
        <code className="mx-0.5 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] font-bold text-[#1B2D5B]">
          {instr.code3}
        </code>
      )}
      {instr.after4}
      {instr.code4 && (
        <code className="mx-0.5 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] font-bold text-[#1B2D5B]">
          {instr.code4}
        </code>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function WebWizardPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="section-wave pt-10 pb-0 text-white">
        <div className="container-shell">
          {/* Back link */}
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-xl transition hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FFD600]">
              Web Development · Tutorial
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Put Your Webpage on the Internet!{" "}
              <span className="inline-block animate-bounce">🧙‍♂️</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              You already wrote the code. Now the whole world gets to see it. Follow these five
              wizard steps and your project will be live on the internet — for real!
            </p>

            {/* Meta row */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/65">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#FFD600]" />
                July 2025
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FFD600]" />
                10 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#FFD600]" />
                Coding Buds
              </span>
              <span className="inline-flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[#FFD600]" />
                Ages 8 – 16
              </span>
            </div>
          </div>
        </div>

        {/* Hero banner */}
        <div className="container-shell mt-10">
          <div className="overflow-hidden rounded-t-[2rem] bg-[#0d1630] p-8 sm:p-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex gap-4 text-6xl sm:text-7xl">
                <span>✨</span>
                <span>🌍</span>
                <span>🚀</span>
              </div>
              <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                Coding Buds · Web Wizard Tutorial
              </p>
              {/* Progress pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {[
                  { label: "GitHub Account", color: "#00c97f", bg: "rgba(0,201,127,0.12)", border: "rgba(0,201,127,0.3)" },
                  { label: "Code → HTML", color: "#2D8EFF", bg: "rgba(45,142,255,0.12)", border: "rgba(45,142,255,0.3)" },
                  { label: "Repository", color: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
                  { label: "Upload File", color: "#f472b6", bg: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.3)" },
                  { label: "Go Live 🌐", color: "#E8511A", bg: "rgba(232,81,26,0.12)", border: "rgba(232,81,26,0.3)" },
                ].map((pill, i) => (
                  <span
                    key={pill.label}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      background: pill.bg,
                      color: pill.color,
                      border: `1px solid ${pill.border}`,
                    }}
                  >
                    {i + 1}. {pill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">

            {/* Intro callout */}
            <div className="mb-10 rounded-[1.5rem] border-l-4 border-[#E8511A] bg-[#fff7f4] px-6 py-5">
              <p className="text-base font-medium leading-8 text-slate-700">
                <span className="mr-2">🪄</span>
                <strong>Hey, Coding Bud!</strong> You&rsquo;ve already written real Python code —
                that&rsquo;s amazing! Now it&rsquo;s time to do something even cooler: put your
                creation on the internet so anyone in the world can visit it. Follow each step and
                you&rsquo;ll be a web wizard in no time! ⭐
              </p>
            </div>

            {/* What you'll need */}
            <div className="mb-12 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(15,28,56,0.06)]">
              <h2 className="font-heading text-xl font-semibold text-[#1B2D5B] mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-[#E8511A]" />
                What You&rsquo;ll Need
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "A computer or laptop with internet",
                  "Your Python code from class",
                  "A parent's email address (for GitHub sign-up)",
                  "About 15–20 minutes of wizard time 🧙‍♂️",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8511A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── STEPS ── */}
            <div className="space-y-10">
              {steps.map((step) => (
                <article
                  key={step.number}
                  id={`step-${step.number}`}
                  className="rounded-[2rem] border bg-white shadow-[0_8px_40px_rgba(15,28,56,0.07)] overflow-hidden"
                  style={{ borderColor: step.border }}
                >
                  {/* Step header */}
                  <div
                    className="flex items-center gap-4 px-6 py-5 border-b"
                    style={{ background: step.colorDim, borderColor: step.border }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-heading text-lg font-semibold"
                      style={{
                        background: step.colorDim,
                        border: `2px solid ${step.border}`,
                        color: step.color,
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: step.color }}>
                        Step {parseInt(step.number)} of 5
                      </p>
                      <h2 className="font-heading text-2xl font-semibold text-[#1B2D5B]">
                        {step.emoji} {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Analogy */}
                    <div
                      className="rounded-[1rem] px-5 py-4 text-sm leading-7 text-slate-700"
                      style={{
                        background: step.colorDim,
                        borderLeft: `4px solid ${step.color}`,
                      }}
                    >
                      <span className="mr-2 text-base">{step.analogy.icon}</span>
                      <strong>Think of it like this:</strong> {step.analogy.text}
                    </div>

                    {/* Instructions */}
                    <ol className="space-y-3">
                      {step.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 text-sm text-slate-700 leading-7"
                        >
                          <span
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                            style={{
                              background: step.colorDim,
                              border: `1.5px solid ${step.border}`,
                              color: step.color,
                            }}
                          >
                            {idx + 1}
                          </span>
                          <span>{renderInstruction(instruction as Instruction)}</span>
                        </li>
                      ))}
                    </ol>

                    {/* Tip */}
                    <div className="rounded-[1rem] bg-[#fffbeb] border border-[#fde68a]/60 px-5 py-4 text-sm text-slate-700 leading-7">
                      <span className="font-semibold text-[#92400e]">⭐ Wizard Tip: </span>
                      {step.tip}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Divider */}
            <div className="my-12 text-center text-2xl tracking-[10px] text-slate-300">· · ·</div>

            {/* Finish banner */}
            <div className="rounded-[2rem] overflow-hidden bg-[#0d1630] p-8 sm:p-10 text-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(0,201,127,0.08),transparent_60%)]" />
              <span className="text-7xl inline-block mb-4">🏆</span>
              <h2 className="font-heading text-3xl font-semibold text-[#00c97f] mb-4">
                You&rsquo;re a Web Wizard Now!
              </h2>
              <p className="text-white/75 max-w-md mx-auto text-base leading-8">
                You created a GitHub account, turned your Python code into HTML, set up a
                repository, uploaded your file, and published it live on the internet. That&rsquo;s
                what real developers do — and you just did it too! 🧙‍♂️⭐
              </p>
            </div>

            {/* Interactive checklist (client component) */}
            <ChecklistSection items={checklist} />

            {/* What next */}
            <div className="mt-12 rounded-[2rem] border border-[#2D8EFF]/20 bg-[#eef4ff] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2D8EFF]/15">
                  <Zap className="h-5 w-5 text-[#2D8EFF]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#1B2D5B]">
                    What to do next?
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 leading-7">
                    {[
                      "Share your live link with your family and friends!",
                      "Try editing your code and uploading a new version.",
                      "Ask your Coding Buds teacher about learning HTML and CSS to make your page look amazing.",
                      "Build your very own personal website from scratch in our Web Development course!",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2D8EFF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="mt-12 rounded-[2rem] bg-[#0d1630] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFD600]">
                Ready for more?
              </p>
              <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight">
                Take your coding to the next level with Coding Buds.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                From Scratch to Python, Web Development to Java — we have a course for every young
                coder. Book a free trial today, no commitment required.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-6 py-3 font-semibold text-white transition hover:bg-[#cf4514]"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Credits */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>
                Made with 💚 for{" "}
                <strong className="text-[#E8511A]">Coding Buds</strong> · Happy coding, wizard! 🧙‍♂️✨
              </span>
              <span>
                Page by{" "}
                <span className="font-semibold text-slate-500">Pavan Sankiliraj</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="section-shell pt-0">
        <div className="container-shell">
          <h2 className="font-heading text-3xl font-semibold text-[#1B2D5B]">More Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blogs/${p.slug}`}
                className="card-surface group overflow-hidden transition hover:-translate-y-1"
              >
                <div className="p-5">
                  <span className="inline-block rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2D5B]">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold leading-tight text-[#1B2D5B]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#E8511A]">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}