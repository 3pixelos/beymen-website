"use client";

import { useEffect, useRef } from "react";

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
  maxLife: number;
};

/** Red shooting stars streaking across the hero (adapted from Aceternity's ShootingStars). */
export default function ShootingStars({
  minDelay = 900,
  maxDelay = 3200,
  className = "",
}: {
  minDelay?: number;
  maxDelay?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const meteors: Meteor[] = [];
    let raf: number;
    let spawnTimer: ReturnType<typeof setTimeout>;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const spawn = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const speed = 7 + Math.random() * 6;
      const angle = Math.PI / 5 + (Math.random() - 0.5) * 0.25; // shallow diagonal
      meteors.push({
        x: Math.random() * width * 1.1 - width * 0.05,
        y: -20 + Math.random() * height * 0.35,
        vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
        vy: Math.sin(angle) * speed,
        len: 90 + Math.random() * 120,
        life: 0,
        maxLife: 70 + Math.random() * 40,
      });
      spawnTimer = setTimeout(spawn, minDelay + Math.random() * (maxDelay - minDelay));
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;
        const fade =
          m.life < 10 ? m.life / 10 : 1 - Math.max(0, m.life - m.maxLife + 20) / 20;
        const nx = m.vx / Math.hypot(m.vx, m.vy);
        const ny = m.vy / Math.hypot(m.vx, m.vy);
        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - nx * m.len,
          m.y - ny * m.len
        );
        grad.addColorStop(0, `rgba(245, 241, 235, ${0.9 * fade})`);
        grad.addColorStop(0.25, `rgba(229, 56, 59, ${0.7 * fade})`);
        grad.addColorStop(1, "rgba(122, 16, 21, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - nx * m.len, m.y - ny * m.len);
        ctx.stroke();
        // bright head
        ctx.fillStyle = `rgba(255, 240, 235, ${fade})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (m.life > m.maxLife || m.y > height + 50 || m.x < -150 || m.x > width + 150) {
          meteors.splice(i, 1);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    // only animate while on screen — keeps the rest of the page smooth
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      clearTimeout(spawnTimer);
      if (entry.isIntersecting) {
        spawn();
        raf = requestAnimationFrame(draw);
      }
    });
    io.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(spawnTimer);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [minDelay, maxDelay]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
