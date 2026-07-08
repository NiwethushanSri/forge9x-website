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
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid #1f2937" }}>
      {stats.map((s, i) => {
        const rightBorderMobile = i % 2 === 0;
        const rightBorderDesktop = i !== stats.length - 1;
        const bottomBorderMobile = i < stats.length - 2;
        return (
        <div
          key={i}
          className={[
            "flex flex-col items-center text-center py-8 px-4 sm:py-10 sm:px-6 gap-2",
            bottomBorderMobile ? "border-b border-gray-800" : "",
            "md:border-b-0",
            rightBorderMobile ? "border-r border-gray-800" : "",
            rightBorderDesktop ? "md:border-r md:border-gray-800" : "md:border-r-0",
          ].join(" ")}
        >
          <div className="mb-1" style={{ color: "#5EA8D9" }}>{s.icon}</div>
          <div
            className="font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#FFFFFF" }}
          >
            <Counter value={s.value} suffix={s.suffix} duration={1800} />
          </div>
          <div className="font-semibold text-gray-500 uppercase tracking-widest" style={{ fontSize: "0.85rem" }}>
            {s.label}
          </div>
        </div>
        );
      })}
    </div>
  );
}
