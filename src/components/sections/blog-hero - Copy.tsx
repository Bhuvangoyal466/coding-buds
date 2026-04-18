import Image from "next/image";

export function BlogHero() {
  return (
    <section className="section-shell pt-8">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8511A]">Coding Buds Blogs</p>
          <h1 className="font-heading text-5xl font-semibold leading-[0.95] text-[#1B2D5B] sm:text-6xl">
            Ideas, guides, and practical tips for young coders.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover coding tips, educational content, and insights from our expert instructors to help your child&apos;s programming journey.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_30%,rgba(45,142,255,0.18),transparent_34%),radial-gradient(circle_at_20%_70%,rgba(232,81,26,0.12),transparent_25%)]" />
          <div className="card-surface relative overflow-hidden p-4">
            <Image
              src="/assets/images/blog.webp"
              alt="Kids learning coding with blogs and tutorials"
              width={960}
              height={840}
              className="h-[20rem] w-full rounded-[1.5rem] object-cover sm:h-[24rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}