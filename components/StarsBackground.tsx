"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  speed: number;
  phase: number;
};

/** Twinkling star field (adapted from Aceternity's StarsBackground, recolored). */
export default function StarsBackground({
  density = 0.00016,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let raf: number;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const n = Math.floor(width * height * density);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        base: Math.random() * 0.5 + 0.25,
        speed: Math.random() * 1.2 + 0.4,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const tw = s.base + Math.sin(t / 1000 * s.speed + s.phase) * 0.25;
        // mostly bone-white stars, a few ember-tinted
        ctx.fillStyle =
          s.phase < 0.9
            ? `rgba(229, 56, 59, ${tw})`
            : `rgba(245, 241, 235, ${tw})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    // only animate while on screen — keeps the rest of the page smooth
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
