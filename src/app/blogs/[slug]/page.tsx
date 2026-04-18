import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, BookOpen, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <>
      {/* Hero */}
      <section className="section-wave pt-12 pb-0 text-white">
        <div className="container-shell">
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-xl transition hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#FFD600]">
              {post.category}
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/65">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#FFD600]" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FFD600]" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#FFD600]" />
                Coding Buds
              </span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="container-shell mt-10">
          <div className="overflow-hidden rounded-t-[2rem]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1400}
              height={700}
              className="h-64 w-full object-cover sm:h-96 lg:h-[28rem]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-shell">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            {/* Intro callout */}
            <div className="mb-10 rounded-[1.5rem] border-l-4 border-[#E8511A] bg-[#fff7f4] px-6 py-5">
              <p className="text-base font-medium leading-8 text-slate-700">{post.excerpt}</p>
            </div>

            {/* Body paragraphs */}
            <div className="prose-custom space-y-6 text-base leading-8 text-slate-600">
              {post.body.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="font-heading text-2xl font-semibold text-[#1B2D5B] sm:text-3xl mt-10 mb-2"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "subheading") {
                  return (
                    <h3
                      key={i}
                      className="font-heading text-xl font-semibold text-[#1B2D5B] mt-8 mb-1"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "paragraph") {
                  return <p key={i}>{block.text}</p>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="space-y-3 pl-1">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E8511A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "callout") {
                  return (
                    <div
                      key={i}
                      className="rounded-[1.5rem] bg-[#eef4ff] px-6 py-5 border border-[#2D8EFF]/20"
                    >
                      <p className="font-medium text-[#1B2D5B]">{block.text}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* CTA card */}
            <div className="mt-14 rounded-[2rem] bg-[#0d1630] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFD600]">
                Ready to get started?
              </p>
              <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight">
                Book a free trial class for your child today.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                No commitment required. See how we make coding fun, structured, and genuinely effective for kids aged 6–16.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8511A] px-6 py-3 font-semibold text-white transition hover:bg-[#cf4514]"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="section-shell pt-0">
        <div className="container-shell">
          <h2 className="font-heading text-3xl font-semibold text-[#1B2D5B]">More Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blogs/${p.slug}`}
                className="card-surface group overflow-hidden transition hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-[#0d1630]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold leading-tight text-[#1B2D5B]">
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