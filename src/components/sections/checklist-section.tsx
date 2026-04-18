"use client";

import { CheckSquare } from "lucide-react";
import { useState } from "react";

type ChecklistSectionProps = {
  items: string[];
};

export function ChecklistSection({ items }: ChecklistSectionProps) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));

  function toggle(index: number) {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }

  return (
    <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,28,56,0.06)]">
      <h3 className="font-heading text-2xl font-semibold text-[#1B2D5B] mb-6 flex items-center gap-2">
        <CheckSquare className="h-6 w-6 text-[#E8511A]" />
        Wizard Checklist — Tick Off Each Step!
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => {
          const done = checked[i];
          return (
            <li
              key={i}
              onClick={() => toggle(i)}
              className="flex cursor-pointer items-center gap-4 rounded-xl border border-slate-100 px-4 py-3 text-sm transition hover:bg-slate-50 select-none"
              style={{
                textDecoration: done ? "line-through" : "none",
                color: done ? "#94a3b8" : "#374151",
              }}
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 text-xs font-bold transition-all duration-200"
                style={{
                  background: done ? "#00c97f" : "transparent",
                  borderColor: done ? "#00c97f" : "#cbd5e1",
                  color: done ? "#fff" : "transparent",
                }}
              >
                ✓
              </span>
              {item}
            </li>
          );
        })}
      </ul>
      {checked.every(Boolean) && (
        <div className="mt-6 rounded-[1rem] bg-[#f0fdf4] border border-[#86efac] px-5 py-4 text-center">
          <p className="font-heading text-lg font-semibold text-[#166534]">
            🎉 You completed every step! You&apos;re officially a Web Wizard! 🧙‍♂️✨
          </p>
        </div>
      )}
    </div>
  );
}