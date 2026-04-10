type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "light" ? "text-white" : "text-[#1B2D5B]";
  const descriptionColor = tone === "light" ? "text-white/80" : "text-slate-600";

  return (
    <div className={`${alignment} max-w-3xl`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E8511A]">
        {eyebrow}
      </p>
      <h2 className={`font-heading text-4xl font-semibold leading-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}