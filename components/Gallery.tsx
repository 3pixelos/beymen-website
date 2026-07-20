"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GALLERY } from "@/lib/data";
import Reveal from "./Reveal";
import InstagramLink from "./InstagramLink";

/**
 * Scroll-driven cinema strip: the section pins and the photo track slides
 * horizontally as you scroll. One single transform on one element — cheap
 * on the GPU, smooth on desktop.
 */
export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setRange(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -range]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="galerie" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <Reveal className="mb-10 text-center px-6">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-ember">Galerie</p>
          <h2 className="font-display text-3xl text-bone md:text-5xl">
            Plongez dans l&apos;ambiance
          </h2>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-ash">
            Continuez à scroller
          </p>
        </Reveal>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-center gap-6 pl-[8vw] pr-[8vw] md:gap-10"
        >
          {GALLERY.map((g, i) => (
            <figure
              key={g.src}
              className="group relative w-[70vw] shrink-0 overflow-hidden rounded-2xl border border-smoke bg-coal sm:w-[45vw] md:w-[26rem]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.label}
                loading={i < 3 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <span className="text-xs uppercase tracking-[0.25em] text-bone md:text-sm">
                  {g.label}
                </span>
                <span className="font-condensed text-3xl leading-none text-crimson/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}

          {/* end card */}
          <InstagramLink
            username="beymeniberia"
            className="flex aspect-[3/4] w-[70vw] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-blood/40 bg-gradient-to-br from-blood/25 to-coal text-center transition-colors hover:border-crimson sm:w-[45vw] md:w-[26rem]"
          >
            <span className="font-display text-2xl text-bone md:text-3xl">
              Encore plus
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-ember">
              @beymeniberia sur Instagram →
            </span>
          </InstagramLink>
        </motion.div>

        {/* progress bar */}
        <div className="mx-auto mt-10 h-px w-56 bg-smoke md:w-96">
          <motion.div
            style={{ width: progress }}
            className="h-full bg-gradient-to-r from-blood to-ember"
          />
        </div>
      </div>
    </section>
  );
}
