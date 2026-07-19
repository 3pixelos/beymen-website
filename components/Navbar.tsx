"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BullLogo from "./BullLogo";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#restaurants", label: "Nos adresses" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-smoke py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#accueil" className="flex items-center gap-3 group">
          <BullLogo className="h-9 w-12 text-crimson transition-transform duration-500 group-hover:scale-110" />
          <div className="leading-none">
            <span className="font-display text-lg tracking-[0.25em] text-bone">
              BEYMEN
            </span>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-ash">
              Steakhouse &amp; Café
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-ash transition-colors hover:text-bone
                after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                after:bg-crimson after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#restaurants"
            className="rounded-full border border-crimson/60 px-5 py-2 text-sm text-bone
              transition-all duration-300 hover:bg-crimson hover:shadow-[0_0_25px_rgba(164,22,26,0.5)]"
          >
            Réserver
          </a>
        </nav>

        {/* mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-6 bg-bone transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-bone transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-bone transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile menu */}
      <motion.nav
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden bg-ink/95 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg text-ash transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}
