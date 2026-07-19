"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarsBackground from "./StarsBackground";
import ShootingStars from "./ShootingStars";
import Embers from "./Embers";
import BullLogo from "./BullLogo";

const TITLE = "BEYMEN".split("");

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleBull = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex h-svh flex-col items-center justify-center overflow-hidden"
    >
      {/* sky layers */}
      <StarsBackground className="opacity-70" />
      <ShootingStars />
      <Embers className="opacity-80" />

      {/* deep red glow rising from the bottom, like a bed of coals */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 110%, rgba(122,16,21,0.55) 0%, rgba(122,16,21,0.18) 45%, transparent 70%)",
        }}
      />

      {/* giant watermark bull behind the type */}
      <motion.div
        style={{ scale: scaleBull, opacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <BullLogo
          variant="line"
          className="h-[60vmin] w-[80vmin] text-blood/25"
        />
      </motion.div>

      <motion.div
        style={{ y: yTitle, opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 text-[11px] uppercase tracking-[0.7em] text-ember md:text-sm"
        >
          Tanger · Maroc
        </motion.p>

        <h1 className="flex overflow-hidden">
          {TITLE.map((l, i) => (
            <motion.span
              key={i}
              initial={{ y: "115%", rotate: 6 }}
              animate={started ? { y: 0, rotate: 0 } : {}}
              transition={{
                delay: 0.35 + i * 0.08,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[18vw] leading-none tracking-[0.08em] text-bone md:text-[11rem]"
              style={{
                textShadow: "0 0 80px rgba(164,22,26,0.45)",
              }}
            >
              {l}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={started ? { scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="my-5 h-px w-48 bg-gradient-to-r from-transparent via-crimson to-transparent md:w-72"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-condensed text-2xl tracking-[0.35em] text-ash md:text-3xl"
        >
          STEAKHOUSE&nbsp;&amp;&nbsp;CAFÉ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.45, duration: 0.8 }}
          className="mt-6 max-w-xl text-sm font-light leading-relaxed text-ash md:text-base"
        >
          La cuisine turque d&apos;exception à Tanger. Viandes au feu de bois,
          mocktails signatures et l&apos;art du spectacle — chaque soir, jusqu&apos;à 2h du matin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.65, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#restaurants"
            className="group relative overflow-hidden rounded-full bg-crimson px-8 py-3.5 text-sm font-medium text-bone
              transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(164,22,26,0.6)]"
          >
            <span className="relative z-10">Découvrir nos adresses</span>
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent
                transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#galerie"
            className="rounded-full border border-bone/25 px-8 py-3.5 text-sm text-bone
              transition-all duration-300 hover:border-bone/60 hover:bg-bone/5"
          >
            Voir la galerie
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-ash">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-crimson to-transparent"
        />
      </motion.div>
    </section>
  );
}
