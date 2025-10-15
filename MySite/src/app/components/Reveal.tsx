"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

export default function Reveal({ children, className, threshold = 0.1 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const base = "transition-all duration-700";
  const hidden = "opacity-0 translate-y-6";
  const shown = "opacity-100 translate-y-0";

  return (
    <div ref={ref} className={`${base} ${visible ? shown : hidden} ${className ?? ""}`}>
      {children}
    </div>
  );
}
