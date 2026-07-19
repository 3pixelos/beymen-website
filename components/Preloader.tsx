"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BULL_PATHS } from "./BullLogo";

const LETTERS = "BEYMEN".split("");

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 2600;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      // ease-out so the counter sprints then settles
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setLeaving(true);
        setTimeout(onDone, 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 1 }}
        >
          <LoaderInner count={count} />
        </motion.div>
      ) : (
        <motion.div key="curtains" className="fixed inset-0 z-[100] pointer-events-none">
          {/* two curtain panels split and reveal the hero */}
          <motion.div
            className="absolute top-0 left-0 h-1/2 w-full bg-ink border-b border-blood/40"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-1/2 w-full bg-ink border-t border-blood/40"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LoaderInner({ count }: { count: number }) {
  return (
    <>
      {/* bull draws itself on */}
      <svg
        viewBox="0 0 240 170"
        className="w-40 h-28 text-crimson md:w-52 md:h-36"
        fill="none"
      >
        {BULL_PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.4, delay: 0.15 + i * 0.12, ease: "easeInOut" },
              opacity: { duration: 0.2, delay: 0.15 + i * 0.12 },
            }}
          />
        ))}
      </svg>

      {/* BEYMEN letters rise out of a mask */}
      <div className="mt-8 flex overflow-hidden">
        {LETTERS.map((l, i) => (
          <motion.span
            key={i}
            className="font-display text-4xl md:text-6xl tracking-[0.35em] text-bone"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: [0.33, 1, 0.68, 1] }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <motion.p
        className="mt-3 text-[11px] md:text-xs uppercase tracking-[0.6em] text-ash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        Steakhouse &amp; Café
      </motion.p>

      {/* progress */}
      <div className="absolute bottom-10 left-0 right-0 px-10 flex items-end justify-between">
        <div className="h-px flex-1 mr-6 bg-smoke overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blood to-ember"
            style={{ width: `${count}%` }}
          />
        </div>
        <span className="font-condensed text-5xl md:text-7xl text-crimson tabular-nums leading-none">
          {count}
        </span>
      </div>
    </>
  );
}
