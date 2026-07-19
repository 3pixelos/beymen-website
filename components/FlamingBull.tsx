"use client";

import { motion } from "framer-motion";
import BullLogo from "./BullLogo";

/**
 * The Beymen bull wreathed in fire — used as the emblem of the
 * "L'art du spectacle" card. Pure SVG + framer flicker, no canvas.
 */
export default function FlamingBull({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* warm glow behind everything */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,60,0.55) 0%, rgba(229,56,59,0.35) 45%, transparent 70%)",
        }}
      />

      {/* flames rising behind the bull */}
      <svg
        viewBox="0 0 240 200"
        className="relative h-24 w-32 md:h-28 md:w-40"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#7a1015" />
            <stop offset="0.45" stopColor="#e5383b" />
            <stop offset="0.8" stopColor="#ff9d4d" />
            <stop offset="1" stopColor="#ffd9a0" />
          </linearGradient>
          <linearGradient id="flameGrad2" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#a4161a" />
            <stop offset="0.6" stopColor="#ff7a3c" />
            <stop offset="1" stopColor="#ffe2b8" />
          </linearGradient>
        </defs>

        {/* left flame */}
        <motion.path
          d="M58 168 C40 140 46 118 60 100 C58 122 68 126 72 114 C82 128 78 148 70 160 C66 166 62 168 58 168 Z"
          fill="url(#flameGrad)"
          animate={{ scaleY: [1, 1.18, 0.95, 1], scaleX: [1, 0.92, 1.05, 1], opacity: [0.85, 1, 0.8, 0.85] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "62px 168px" }}
        />
        {/* right flame */}
        <motion.path
          d="M182 168 C200 138 192 116 178 98 C182 120 170 126 166 114 C158 130 162 150 170 160 C174 166 178 168 182 168 Z"
          fill="url(#flameGrad)"
          animate={{ scaleY: [1, 0.94, 1.2, 1], scaleX: [1, 1.06, 0.94, 1], opacity: [0.85, 0.8, 1, 0.85] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          style={{ transformOrigin: "178px 168px" }}
        />
        {/* center flame, tallest, behind the head */}
        <motion.path
          d="M120 172 C94 138 102 104 120 76 C116 108 134 112 132 94 C146 116 142 148 128 164 C124 170 122 172 120 172 Z"
          fill="url(#flameGrad2)"
          animate={{ scaleY: [1, 1.12, 0.96, 1.06, 1], opacity: [0.9, 1, 0.85, 1, 0.9] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
          style={{ transformOrigin: "120px 172px" }}
        />

        {/* sparks */}
        {[
          { cx: 78, cy: 84, d: 2.2, delay: 0 },
          { cx: 150, cy: 70, d: 2.8, delay: 0.6 },
          { cx: 108, cy: 58, d: 2.0, delay: 1.1 },
          { cx: 170, cy: 92, d: 1.8, delay: 1.6 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.d}
            fill="#ffb36b"
            animate={{ y: [-0, -26], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: s.delay, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* the bull, front and center */}
      <BullLogo
        variant="solid"
        className="absolute left-1/2 top-1/2 h-14 w-20 -translate-x-1/2 -translate-y-[45%] text-crimson drop-shadow-[0_0_12px_rgba(164,22,26,0.8)] md:h-16 md:w-24"
      />
    </div>
  );
}
