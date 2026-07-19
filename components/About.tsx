"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ABOUT } from "@/lib/data";
import Reveal from "./Reveal";
import FlamingBull from "./FlamingBull";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xWord = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);

  return (
    <section id="apropos" ref={ref} className="relative overflow-hidden py-28 md:py-40">
      {/* giant scrolling ghost word */}
      <motion.div
        style={{ x: xWord }}
        className="pointer-events-none absolute top-8 left-0 whitespace-nowrap font-display text-[22vw] leading-none text-stroke select-none md:text-[14rem]"
        aria-hidden
      >
        STEAKHOUSE · CAFÉ · TANGER ·
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pt-24 md:grid-cols-2 md:pt-32">
        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-ember">
              À propos
            </p>
            <h2 className="font-display text-4xl leading-tight text-bone md:text-6xl">
              {ABOUT.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-ash md:text-lg">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {ABOUT.stats.map((s) => (
                <div key={s.label} className="border-l border-blood/50 pl-4">
                  <p className="font-condensed text-4xl text-crimson md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-ash">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* fire spectacle card */}
        <Reveal delay={0.2} className="flex items-center">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-smoke bg-coal p-10 md:p-14">
            {/* animated flame gradient behind */}
            <motion.div
              animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,56,59,0.5) 0%, rgba(122,16,21,0.25) 50%, transparent 70%)",
              }}
            />
            <FlamingBull />
            <h3 className="mt-6 font-display text-2xl uppercase tracking-wide text-bone md:text-3xl">
              {ABOUT.spectacle.title}
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-ash md:text-base">
              {ABOUT.spectacle.text}
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-blood via-crimson to-transparent" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-ash">
              Tous les soirs · sur les deux adresses
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
