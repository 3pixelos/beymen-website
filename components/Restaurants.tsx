"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { RESTAURANTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Restaurants() {
  return (
    <section id="restaurants" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-ember">
            Nos adresses
          </p>
          <h2 className="font-display text-4xl text-bone md:text-6xl">
            Deux maisons, une braise
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          {RESTAURANTS.map((r, i) =>
            r.status === "open" ? (
              <OpenCard key={r.id} r={r} delay={i * 0.15} />
            ) : (
              <ClosedCard key={r.id} r={r} delay={i * 0.15} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

type R = (typeof RESTAURANTS)[number];

/* ---------- Iberia: open, 3D tilt on hover ---------- */
function OpenCard({ r, delay }: { r: R; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 8, ry: px * 8 });
  };

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        style={{
          transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className="group relative overflow-hidden rounded-2xl border border-smoke bg-coal"
      >
        <div className="relative h-72 overflow-hidden md:h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={r.image}
            alt={r.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
          <span className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-ink/70 px-4 py-1.5 text-xs uppercase tracking-widest text-bone backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-ember animate-pulse-dot" />
            Ouvert
          </span>
        </div>

        <div className="p-8">
          <h3 className="font-display text-2xl text-bone md:text-3xl">{r.name}</h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-ash">
            {r.description}
          </p>
          <dl className="mt-6 space-y-2 text-sm text-ash">
            <div className="flex gap-3">
              <dt className="text-ember">📍</dt>
              <dd>{r.address}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ember">🕘</dt>
              <dd>{r.hours}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={r.phoneHref}
              className="rounded-full bg-crimson px-6 py-3 text-sm font-medium text-bone transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(164,22,26,0.5)]"
            >
              Réserver · {r.phone}
            </a>
            <a
              href={r.menu}
              className="rounded-full border border-bone/25 px-6 py-3 text-sm text-bone transition-colors hover:border-bone/60"
            >
              Voir le menu
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Malabata: temporarily closed, caution tape ---------- */
function ClosedCard({ r, delay }: { r: R; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="relative overflow-hidden rounded-2xl border border-smoke bg-coal">
        <div className="relative h-72 overflow-hidden md:h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={r.image}
            alt={r.name}
            className="h-full w-full object-cover grayscale contrast-75 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-ink/40 to-transparent" />

          {/* crossing caution tapes */}
          <Tape className="top-[38%] -rotate-6" direction="left" />
          <Tape className="top-[58%] rotate-[5deg]" direction="right" />

          {/* swinging hanging sign */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="mx-auto h-10 w-px bg-ash/50" />
            <motion.div
              initial={{ rotate: -4 }}
              className="animate-swing rounded-md border-2 border-crimson bg-ink px-5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <p className="font-condensed text-xl tracking-[0.2em] text-crimson">
                EN TRAVAUX
              </p>
            </motion.div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl text-bone md:text-3xl">{r.name}</h3>
            <span className="rounded-full border border-crimson/60 px-3 py-1 text-[10px] uppercase tracking-widest text-ember">
              Temporairement fermé
            </span>
          </div>
          <p className="mt-3 text-sm font-light leading-relaxed text-ash">
            {r.description}
          </p>
          <dl className="mt-6 space-y-2 text-sm text-ash/70">
            <div className="flex gap-3">
              <dt>📍</dt>
              <dd>{r.address}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-smoke bg-smoke/40 px-6 py-3 text-sm text-ash">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-crimson"
              />
              Réouverture très bientôt — restez connectés
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** Diagonal red-and-black caution tape with scrolling text. */
function Tape({
  className,
  direction,
}: {
  className?: string;
  direction: "left" | "right";
}) {
  const text = " TEMPORAIREMENT FERMÉ ✦ RÉOUVERTURE BIENTÔT ✦";
  const anim = direction === "left" ? "animate-tape-left" : "animate-tape-right";
  return (
    <div
      className={`absolute -left-[10%] w-[120%] overflow-hidden border-y-2 border-ink bg-crimson py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className={`flex w-max whitespace-nowrap ${anim}`}>
        {[0, 1].map((k) => (
          <span
            key={k}
            className="font-condensed text-sm tracking-[0.3em] text-ink"
          >
            {text.repeat(6)}
          </span>
        ))}
      </div>
    </div>
  );
}
