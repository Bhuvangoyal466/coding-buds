import Image from "next/image";

export function ShowcaseSection() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="card-surface overflow-hidden border-0 bg-[#0d1630] p-4 shadow-[0_20px_70px_rgba(15,28,56,0.15)]">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <Image
              src="/assets/images/video-shape-1.webp"
              alt="Coding Buds programming education showcase"
              width={1800}
              height={1020}
              className="h-72 w-full bg-[#0b142b] object-contain opacity-95 sm:h-96 lg:h-120"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,22,48,0.15),rgba(13,22,48,0.62))]" />
            <div className="absolute bottom-6 left-6 max-w-lg rounded-3xl border border-white/20 bg-[#0d1630]/55 p-5 text-white backdrop-blur-xl sm:bottom-10 sm:left-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFD600]">Learning Showcase</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold">Creativity, logic, and confidence in every session.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}