"use client";

import { REVIEWS } from "@/lib/data";
import Reveal from "./Reveal";

/** Dual-direction marquee of customer reviews (inspired by 21st.dev marquee-01). */
export default function Reviews() {
  const rowA = [...REVIEWS, ...REVIEWS];
  const rowB = [...REVIEWS].reverse().concat([...REVIEWS].reverse());

  return (
    <section id="avis" className="relative overflow-hidden py-28 md:py-36">
      <Reveal className="mb-14 text-center px-6">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-ember">Avis</p>
        <h2 className="font-display text-4xl text-bone md:text-6xl">
          Ils en parlent mieux que nous
        </h2>
      </Reveal>

      <div className="marquee-paused space-y-6">
        <MarqueeRow items={rowA} reverse={false} />
        <MarqueeRow items={rowB} reverse />
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent md:w-48" />
    </section>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: typeof REVIEWS;
  reverse: boolean;
}) {
  return (
    <div className="flex overflow-hidden">
      {[0, 1].map((k) => (
        <div
          key={k}
          className={`flex shrink-0 gap-6 pr-6 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {items.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <figure className="w-80 shrink-0 rounded-2xl border border-smoke bg-coal p-6 transition-colors duration-300 hover:border-blood/60 md:w-96">
      <div className="flex text-ember" aria-label={`${r.rating} étoiles`}>
        {Array.from({ length: r.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <blockquote className="mt-4 text-sm font-light leading-relaxed text-bone/90">
        « {r.text} »
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blood/40 font-display text-sm text-bone">
          {r.name[0]}
        </span>
        <div>
          <p className="text-sm text-bone">{r.name}</p>
          <p className="text-xs text-ash">{r.date} · Google</p>
        </div>
      </figcaption>
    </figure>
  );
}
