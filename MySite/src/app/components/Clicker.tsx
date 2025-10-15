"use client";

import { useEffect, useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem("clicks") || "0");
    if (!Number.isNaN(saved)) setCount(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("clicks", String(count));
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl font-bold">{count}</div>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-lg border border-transparent px-6 py-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        Click me
      </button>
      <button
        type="button"
        onClick={() => setCount(0)}
        className="text-xs opacity-70 underline-offset-2 transition hover:opacity-100 hover:underline"
      >
        Reset
      </button>
    </div>
  );
}
