"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(progress);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-indigo-500 dark:to-pink-500 shadow-[0_0_10px_rgba(102,126,234,0.6)] transition-[width] duration-100 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
