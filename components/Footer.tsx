"use client";

import { motion } from "framer-motion";
import { SITE, RESTAURANTS } from "@/lib/data";
import BullLogo from "./BullLogo";

/** Footer with giant wordmark reveal (inspired by 21st.dev footer-section). */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-smoke">
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="grid gap-12 pb-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <BullLogo className="h-10 w-14 text-crimson" />
              <div className="leading-none">
                <span className="font-display text-xl tracking-[0.25em] text-bone">
                  BEYMEN
                </span>
                <span className="block text-[9px] uppercase tracking-[0.4em] text-ash">
                  Steakhouse &amp; Café
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-ash">
              Restaurant turc à Tanger — ambiance douce, délicieux menu et bons
              mocktails. La braise, chaque soir, jusqu&apos;à 2h du matin.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-ash">
              {[
                ["#accueil", "Accueil"],
                ["#apropos", "À propos"],
                ["#restaurants", "Nos adresses"],
                ["#galerie", "Galerie"],
                ["#avis", "Avis"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-bone">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-ash">
              {RESTAURANTS.map((r) => (
                <li key={r.id}>
                  <a href={r.phoneHref} className="transition-colors hover:text-bone">
                    {r.name.replace("Beymen ", "")} · {r.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-bone"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4 text-sm text-ash">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                IG
              </a>
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                FB
              </a>
              <a
                href={SITE.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                TT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* giant wordmark rising from the fold */}
      <div className="relative overflow-hidden">
        <motion.p
          initial={{ y: "45%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="select-none text-center font-display text-[19vw] leading-[0.8] text-blood/30"
          aria-hidden
        >
          BEYMEN
        </motion.p>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="border-t border-smoke py-5 text-center text-xs text-ash">
        © {new Date().getFullYear()} Beymen Tanger — Tous droits réservés ·{" "}
        <span className="text-bone/70">Design 3pixelos</span>
      </div>
    </footer>
  );
}
