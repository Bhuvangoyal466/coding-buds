"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────
   QUIZ DATA
───────────────────────────────────────────── */
const questions = [
  {
    id: 1,
    question: "What sounds most fun to you?",
    emoji: "🎯",
    options: [
      { label: "Making games and solving puzzles", value: "python", emoji: "🎮" },
      { label: "Designing cool websites", value: "web", emoji: "🌐" },
      { label: "Drag-and-drop block coding", value: "scratch", emoji: "🧩" },
      { label: "Building apps with real code", value: "java", emoji: "☕" },
    ],
  },
  {
    id: 2,
    question: "How old are you?",
    emoji: "🎂",
    options: [
      { label: "6 – 9 years old", value: "scratch", emoji: "🌱" },
      { label: "10 – 12 years old", value: "python", emoji: "📚" },
      { label: "13 – 16 years old", value: "web", emoji: "🚀" },
      { label: "I just want the hardest course!", value: "java", emoji: "💪" },
    ],
  },
  {
    id: 3,
    question: "Which describes you best?",
    emoji: "🪞",
    options: [
      { label: "Total beginner — never coded before", value: "scratch", emoji: "👶" },
      { label: "I've tried a little, want more", value: "python", emoji: "🌱" },
      { label: "Comfortable with basics already", value: "web", emoji: "📗" },
      { label: "I want a real challenge", value: "java", emoji: "🔥" },
    ],
  },
  {
    id: 4,
    question: "What do you want to build first?",
    emoji: "🏗️",
    options: [
      { label: "A game or animation", value: "scratch", emoji: "🎪" },
      { label: "A mini app or quiz game", value: "python", emoji: "🐍" },
      { label: "My own personal website", value: "web", emoji: "🌐" },
      { label: "A real software project", value: "java", emoji: "☕" },
    ],
  },
  {
    id: 5,
    question: "Pick your superpower:",
    emoji: "⚡",
    options: [
      { label: "Creativity and storytelling", value: "scratch", emoji: "🎨" },
      { label: "Logic and problem-solving", value: "python", emoji: "🧠" },
      { label: "Design and making things look amazing", value: "web", emoji: "✨" },
      { label: "Engineering and building big systems", value: "java", emoji: "⚙️" },
    ],
  },
];

/* ─────────────────────────────────────────────
   RESULTS
───────────────────────────────────────────── */
const results = {
  scratch: {
    emoji: "🧩",
    course: "Scratch for Kids",
    age: "Ages 6–10",
    badge: "Beginner",
    badgeColor: "bg-[#eef4ff] text-[#1B2D5B]",
    accent: "#46c47d",
    accentDim: "rgba(70,196,125,0.10)",
    description:
      "Scratch is perfect for you! Using colourful drag-and-drop blocks, you'll create games, animations, and interactive stories — no typing required. It's the most fun way to start your coding journey.",
    highlights: [
      "Visual block-based programming",
      "Games, animations & stories",
      "No prior experience needed",
      "4-week structured programme",
    ],
    href: "#contact",
  },
  python: {
    emoji: "🐍",
    course: "Python for Teens",
    age: "Ages 8–16",
    badge: "Intermediate",
    badgeColor: "bg-[#fff0eb] text-[#E8511A]",
    accent: "#E8511A",
    accentDim: "rgba(232,81,26,0.08)",
    description:
      "Python is your ideal match! It reads almost like plain English, runs on any computer, and is used by Google, Netflix, and NASA. You'll build apps, mini-games, and even explore AI basics.",
    highlights: [
      "Text-based real programming",
      "Apps, games & AI basics",
      "Used by top companies worldwide",
      "6-week structured programme",
    ],
    href: "#contact",
  },
  web: {
    emoji: "🌐",
    course: "Web Development",
    age: "All Ages",
    badge: "Intermediate",
    badgeColor: "bg-[#eef4ff] text-[#2D8EFF]",
    accent: "#2D8EFF",
    accentDim: "rgba(45,142,255,0.08)",
    description:
      "Web development is made for you! HTML, CSS, and JavaScript are the three languages that power every website on earth. You'll build a real portfolio site that anyone in the world can visit.",
    highlights: [
      "HTML, CSS & JavaScript",
      "Real live websites you publish",
      "Portfolio projects for school/jobs",
      "8-week structured programme",
    ],
    href: "#contact",
  },
  java: {
    emoji: "☕",
    course: "Java Programming",
    age: "All Ages",
    badge: "Advanced",
    badgeColor: "bg-[#fff8eb] text-[#d97706]",
    accent: "#f59e0b",
    accentDim: "rgba(245,158,11,0.08)",
    description:
      "Java is your challenge! Object-oriented programming, logic building, and computer science fundamentals — this is what engineers at major tech companies write every day. You're ready for the real thing.",
    highlights: [
      "Object-oriented programming",
      "Logic & CS fundamentals",
      "Prep for school exams & university",
      "Self-paced advanced programme",
    ],
    href: "#contact",
  },
};

type CourseKey = keyof typeof results;

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export function CourseFinderQuiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<CourseKey, number>>({
    scratch: 0,
    python: 0,
    web: 0,
    java: 0,
  });
  const [chosen, setChosen] = useState<number | null>(null);
  const [result, setResult] = useState<CourseKey | null>(null);

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  function handleAnswer(value: string, idx: number) {
    setChosen(idx);
    const updated = { ...scores, [value]: (scores[value as CourseKey] ?? 0) + 1 };

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setScores(updated as Record<CourseKey, number>);
        setCurrent((c) => c + 1);
        setChosen(null);
      } else {
        // Find winner
        const winner = (Object.entries(updated) as [CourseKey, number][]).reduce(
          (a, b) => (b[1] > a[1] ? b : a)
        )[0];
        setResult(winner);
      }
    }, 420);
  }

  function reset() {
    setStarted(false);
    setCurrent(0);
    setScores({ scratch: 0, python: 0, web: 0, java: 0 });
    setChosen(null);
    setResult(null);
  }

  /* ── INTRO ── */
  if (!started) {
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,28,56,0.08)] overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E8511A] via-[#2D8EFF] to-[#46c47d]" />

        <div className="p-8 sm:p-10 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef4ff] text-3xl mb-5">
            <Sparkles className="h-7 w-7 text-[#2D8EFF]" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E8511A] mb-3">
            Course Finder Quiz
          </p>
          <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1B2D5B] leading-tight mb-4">
            Not sure which course to pick?
          </h3>
          <p className="text-slate-600 leading-7 max-w-md mx-auto mb-8">
            Answer 5 quick questions and we&apos;ll tell you exactly which Coding Buds course
            is the right fit for your child — no guesswork needed.
          </p>

          {/* Mini course pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { label: "Scratch", emoji: "🧩", color: "bg-[#f0fdf4] text-[#166534]" },
              { label: "Python", emoji: "🐍", color: "bg-[#fff0eb] text-[#E8511A]" },
              { label: "Web Dev", emoji: "🌐", color: "bg-[#eef4ff] text-[#2D8EFF]" },
              { label: "Java", emoji: "☕", color: "bg-[#fff8eb] text-[#d97706]" },
            ].map((c) => (
              <span
                key={c.label}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${c.color}`}
              >
                {c.emoji} {c.label}
              </span>
            ))}
          </div>

          <button
            onClick={() => setStarted(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-7 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(232,81,26,0.28)] transition hover:bg-[#cf4514] hover:-translate-y-0.5"
          >
            Start the Quiz
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-4 text-xs text-slate-400">5 questions · takes about 1 minute</p>
        </div>
      </div>
    );
  }

  /* ── RESULT ── */
  if (result) {
    const r = results[result];
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,28,56,0.08)] overflow-hidden"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-[#E8511A] via-[#2D8EFF] to-[#46c47d]" />

          <div className="p-8 sm:p-10">
            {/* Result header */}
            <div
              className="rounded-[1.5rem] p-6 sm:p-8 mb-6 text-center"
              style={{ background: r.accentDim }}
            >
              <div className="text-5xl mb-3">{r.emoji}</div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] mb-1" style={{ color: r.accent }}>
                Your perfect match
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-[#1B2D5B]">
                {r.course}
              </h3>
              <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${r.badgeColor}`}>
                  {r.badge}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                  {r.age}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-7 mb-6">{r.description}</p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {r.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: r.accent }}
                  />
                  {h}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={r.href}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#E8511A] px-6 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(232,81,26,0.22)] transition hover:bg-[#cf4514]"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={reset}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <RotateCcw className="h-4 w-4" />
                Retake Quiz
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  /* ── QUESTION ── */
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -32 }}
        transition={{ duration: 0.3 }}
        className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,28,56,0.08)] overflow-hidden"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#E8511A] via-[#2D8EFF] to-[#46c47d]" />

        <div className="p-6 sm:p-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8511A]">
              Question {current + 1} of {questions.length}
            </span>
            <span className="text-xs text-slate-400">{Math.round(progress)}% done</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 mb-6 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#E8511A] to-[#2D8EFF]"
              initial={{ width: `${((current) / questions.length) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Question */}
          <div className="mb-6">
            <div className="text-3xl mb-3">{question.emoji}</div>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1B2D5B] leading-tight">
              {question.question}
            </h3>
          </div>

          {/* Options */}
          <div className="grid gap-3">
            {question.options.map((opt, idx) => (
              <motion.button
                key={idx}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => chosen === null && handleAnswer(opt.value, idx)}
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all ${
                  chosen === idx
                    ? "border-[#E8511A] bg-[#fff0eb] text-[#E8511A]"
                    : chosen !== null
                    ? "border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#1B2D5B] hover:bg-[#eef4ff]"
                }`}
              >
                <span className="text-xl shrink-0">{opt.emoji}</span>
                <span className="flex-1">{opt.label}</span>
                {chosen === idx && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="shrink-0 text-[#E8511A]"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Back button */}
          {current > 0 && chosen === null && (
            <button
              onClick={() => { setCurrent((c) => c - 1); setChosen(null); }}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}