import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Lightbulb } from "lucide-react";

const pillars = [
  { icon: Brain, label: "Why coding at 6 is not too early" },
  { icon: BookOpen, label: "Scratch, Python, Web Dev & Java explained" },
  { icon: Lightbulb, label: "Tips to keep kids motivated at home" },
];

export function BlogHero() {
  return (
    <section className="section-shell pt-8">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8511A]">
            Coding Buds Blog
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] text-[#1B2D5B] sm:text-6xl">
            Answers to every question parents ask about coding for kids.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Practical guides, honest advice, and course breakdowns — written so you can make informed decisions about your child&apos;s coding education.
          </p>

          <div className="mt-8 space-y-3">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eef4ff]">
                  <Icon className="h-4 w-4 text-[#1B2D5B]" />
                </div>
                <span className="text-sm font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-6 py-3 font-semibold text-white shadow-brand transition hover:bg-[#cf4514]"
          >
            Book a Free Trial Class
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_30%,rgba(45,142,255,0.18),transparent_34%),radial-gradient(circle_at_20%_70%,rgba(232,81,26,0.12),transparent_25%)]" />
          <div className="card-surface relative overflow-hidden p-4">
            <Image
              src="/assets/images/blog.webp"
              alt="Kids learning coding with blogs and tutorials"
              width={960}
              height={840}
              className="h-[20rem] w-full rounded-[1.5rem] object-cover sm:h-[28rem]"
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8511A]">Written for parents</p>
              <p className="mt-1 font-heading text-lg font-semibold text-[#1B2D5B]">No jargon. Just answers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}