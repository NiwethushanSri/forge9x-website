"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid #f1f5f9" }}>
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center py-8 px-4 sm:py-10 sm:px-6 gap-2 border-b border-gray-100 md:border-b-0 border-r border-gray-100 last:border-r-0 even:border-r-0 md:even:border-r md:[&:nth-child(3)]:border-r-0"
        >
          <div className="mb-1" style={{ color: "#00679A" }}>{s.icon}</div>
          <div
            className="font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#0F172A" }}
          >
            <Counter value={s.value} suffix={s.suffix} duration={1800} />
          </div>
          <div className="font-semibold text-gray-400 uppercase tracking-widest" style={{ fontSize: "0.7rem" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
