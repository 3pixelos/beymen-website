"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  vy: number;
  drift: number;
  phase: number;
  alpha: number;
};

/** Glowing embers floating up from the bottom of the hero, like sparks off a grill. */
export default function Embers({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let embers: Ember[] = [];
    let raf: number;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      embers = Array.from({ length: Math.floor(width / 30) }, () => ({
        x: Math.random() * width,
        y: height * (0.5 + Math.random() * 0.5),
        r: Math.random() * 2.2 + 0.6,
        vy: Math.random() * 0.6 + 0.25,
        drift: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.5 + 0.2,
      }));
    };

    const draw = (t: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const e of embers) {
        e.y -= e.vy;
        e.x += Math.sin(t / 900 + e.phase) * e.drift;
        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        const flicker = 0.7 + Math.sin(t / 120 + e.phase * 3) * 0.3;
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
        grad.addColorStop(0, `rgba(255, 120, 80, ${e.alpha * flicker})`);
        grad.addColorStop(0.4, `rgba(229, 56, 59, ${e.alpha * 0.5 * flicker})`);
        grad.addColorStop(1, "rgba(122, 16, 21, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
