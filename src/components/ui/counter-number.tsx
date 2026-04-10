"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type CounterNumberProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export function CounterNumber({ end, suffix = "+", duration = 2000 }: CounterNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(end, duration, inView);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {count}
      {suffix}
    </span>
  );
}