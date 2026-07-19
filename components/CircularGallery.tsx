"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GALLERY } from "@/lib/data";
import Reveal from "./Reveal";

/**
 * Scroll-driven circular gallery (inspired by 21st.dev circular-gallery):
 * the section is 400vh tall; a sticky viewport pins the ring, and scrolling
 * rotates the wheel of photos around its center.
 */
export default function CircularGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotateRaw = useTransform(scrollYProgress, [0, 1], [0, -360 + 360 / GALLERY.length]);
  const rotate = useSpring(rotateRaw, { stiffness: 60, damping: 20 });
  const counterRotate = useTransform(rotate, (v) => -v);

  return (
    <section id="galerie" ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden">
        <Reveal className="absolute top-20 z-10 text-center px-6">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-ember">Galerie</p>
          <h2 className="font-display text-3xl text-bone md:text-5xl">
            Plongez dans l&apos;ambiance
          </h2>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-ash">
            Continuez à scroller — la roue tourne
          </p>
        </Reveal>

        {/* the wheel */}
        <motion.div
          style={{ rotate }}
          className="relative mt-24 aspect-square w-[150vmin] md:w-[120vmin]"
        >
          {GALLERY.map((g, i) => {
            const angle = (360 / GALLERY.length) * i;
            return (
              <div
                key={g.src}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(calc(-50vmin))`,
                }}
              >
                <motion.figure
                  whileHover={{ scale: 1.06 }}
                  className="w-28 -translate-x-1/2 overflow-hidden rounded-xl border border-smoke bg-coal shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:w-56"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt={g.label}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="px-3 py-2 text-center text-[10px] uppercase tracking-widest text-ash">
                    {g.label}
                  </figcaption>
                </motion.figure>
              </div>
            );
          })}

          {/* hub */}
          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blood/40 bg-ink/80 backdrop-blur-sm md:h-44 md:w-44">
            <motion.div style={{ rotate: counterRotate }}>
              <p className="font-display text-lg tracking-[0.2em] text-crimson md:text-2xl">
                BEYMEN
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>
    </section>
  );
}
