"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { blogPosts, type BlogPost } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

type BlogGridProps = {
  posts?: BlogPost[];
  limit?: number;
  compact?: boolean;
};

export function BlogGrid({ posts = blogPosts, limit, compact = false }: BlogGridProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const visiblePosts = useMemo(() => {
    return typeof limit === "number" ? posts.slice(0, limit) : posts;
  }, [limit, posts]);

  const selectedPost = visiblePosts.find((post) => post.slug === selectedSlug) || null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedSlug(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="blog" className={`section-shell ${compact ? "pt-0" : ""}`}>
      <div className="container-shell">
        <SectionHeading
          eyebrow="Latest Articles"
          title="Educational Blog Posts"
          description="Discover coding tips, educational content, and insights from our expert instructors to help your child's programming journey."
        />

        <div className={`mt-12 grid gap-6 ${limit ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {visiblePosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-surface overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1000}
                  height={680}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#0d1630]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                  {post.category}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(post.date))}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-semibold leading-tight text-[#1B2D5B]">{post.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{post.excerpt}</p>

                <button
                  type="button"
                  onClick={() => setSelectedSlug(post.slug)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1B2D5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#132145]"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {limit ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-6 py-3 font-semibold text-white transition hover:bg-[#cf4514]"
            >
              View All Blogs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}

        <AnimatePresence>
          {selectedPost ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] grid place-items-center bg-[#091123]/80 p-4 backdrop-blur-sm"
              onClick={() => setSelectedSlug(null)}
            >
              <motion.article
                initial={{ opacity: 0, scale: 0.95, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 18 }}
                transition={{ duration: 0.28 }}
                onClick={(event) => event.stopPropagation()}
                className="no-scrollbar max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
              >
                <div className="relative h-72">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.imageAlt}
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Close blog article"
                    onClick={() => setSelectedSlug(null)}
                    className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[#1B2D5B] shadow-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-5 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8511A]">{selectedPost.category}</p>
                  <h3 className="font-heading text-3xl font-semibold text-[#1B2D5B] sm:text-4xl">{selectedPost.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(selectedPost.date))}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <p className="text-base leading-8 text-slate-600">{selectedPost.excerpt}</p>
                  <div className="space-y-4 text-base leading-8 text-slate-600">
                    {selectedPost.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}