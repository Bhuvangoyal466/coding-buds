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
            <div className="absolute bottom-3 left-3 max-w-[86%] rounded-2xl border border-white/20 bg-[#0d1630]/70 p-3.5 text-white backdrop-blur-xl sm:bottom-10 sm:left-10 sm:max-w-lg sm:rounded-3xl sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFD600] sm:text-sm sm:tracking-[0.25em]">Learning Showcase</p>
              <h3 className="mt-2 font-heading text-[1.05rem] leading-snug font-semibold sm:mt-3 sm:text-3xl sm:leading-tight">Creativity, logic, and confidence in every session.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}