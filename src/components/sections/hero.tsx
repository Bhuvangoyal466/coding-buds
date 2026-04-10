"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
});

const heroWords = ["Fun", "&", "Personalized", "Coding", "Classes"];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const shouldRenderHeroScene = !prefersReducedMotion && process.env.NODE_ENV === "production";

  return (
    <section id="home" className="relative overflow-hidden section-wave text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,142,255,0.24),transparent_24%),radial-gradient(circle_at_80%_25%,rgba(232,81,26,0.18),transparent_18%)]" />
      <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.svg')] bg-cover bg-center opacity-20" />
      {shouldRenderHeroScene ? <HeroScene /> : null}

      <div className="container-shell relative grid min-h-[calc(100vh-5.5rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#FFD600]" />
            1:1 and group classes for ages 6-16
          </motion.p>

          <h1 className="font-heading text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl lg:text-[5.5rem]">
            {heroWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                className={`inline-block ${index === 1 || index === 2 ? "text-[#FFD600]" : "text-white"}`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl"
          >
            Scratch, Python, Web Development, and Java lessons shaped for kids and teens who want
            to build confidence, creativity, and strong computer science foundations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8511A] px-7 py-4 font-semibold text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-[#cf4514]"
            >
              Book a Free Trial Class
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
            >
              Read Blogs
            </Link>
          </motion.div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
              className="card-glass p-5 text-[#1B2D5B]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E8511A]">
                Trusted Learning
              </p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-heading text-4xl font-semibold">600+</span>
                <span className="pb-1 text-sm text-slate-500">students trained</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                100% parent satisfaction and real project-based learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.75 }}
              className="card-glass p-5 text-[#1B2D5B]"
            >
              <div className="flex items-center gap-2 text-[#FFD600]">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Fun live sessions, guided practice, and a curriculum that stays close to the child.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[36rem]">
            <div className="absolute left-4 top-10 h-28 w-28 rounded-full bg-[#E8511A]/25 blur-3xl" />
            <div className="absolute right-8 top-24 h-40 w-40 rounded-full bg-[#2D8EFF]/20 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="card-glass relative overflow-hidden border-white/10 p-4"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.2rem] bg-[#0c1632] p-3">
                  <Image
                    src="/assets/images/kids-coding-1.webp"
                    alt="Kids learning coding"
                    width={540}
                    height={620}
                    className="h-72 w-full rounded-[1rem] object-cover"
                    priority
                  />
                </div>
                <div className="overflow-hidden rounded-[1.2rem] bg-[#0c1632] p-3 sm:mt-12">
                  <Image
                    src="/assets/images/kids-coding-2.webp"
                    alt="Children enjoying a coding class"
                    width={540}
                    height={620}
                    className="h-72 w-full rounded-[1rem] object-cover"
                  />
                </div>
              </div>

              
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}