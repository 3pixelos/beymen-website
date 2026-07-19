"use client";

import { SITE, RESTAURANTS, MAPS_EMBED } from "@/lib/data";
import Reveal from "./Reveal";

export default function MapSection() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-ember">
            Nous trouver
          </p>
          <h2 className="font-display text-4xl text-bone md:text-6xl">
            Rendez-vous à Tanger
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* map */}
          <Reveal className="lg:col-span-3">
            <div className="group relative h-[420px] overflow-hidden rounded-2xl border border-smoke">
              <iframe
                src={MAPS_EMBED}
                title="Beymen Tanger sur Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.6] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-blood/30" />
            </div>
          </Reveal>

          {/* contact cards */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {RESTAURANTS.map((r, i) => (
              <Reveal key={r.id} delay={0.1 + i * 0.1}>
                <div className="rounded-2xl border border-smoke bg-coal p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-bone">{r.name}</h3>
                    {r.status === "closed" && (
                      <span className="rounded-full border border-crimson/60 px-3 py-0.5 text-[10px] uppercase tracking-widest text-ember">
                        Fermé
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-ash">
                    <p>📍 {r.address}</p>
                    <p>
                      📞{" "}
                      <a href={r.phoneHref} className="hover:text-bone transition-colors">
                        {r.phone}
                      </a>
                    </p>
                    <p>🕘 {r.hours}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-blood/40 bg-gradient-to-br from-blood/20 to-coal p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-ember">
                  Suivez-nous
                </p>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-2xl text-bone transition-colors hover:text-ember"
                >
                  {SITE.instagramHandle}
                </a>
                <div className="mt-4 flex gap-4 text-sm">
                  <a
                    href={SITE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash transition-colors hover:text-bone"
                  >
                    Instagram
                  </a>
                  <a
                    href={SITE.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash transition-colors hover:text-bone"
                  >
                    Facebook
                  </a>
                  <a
                    href={SITE.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash transition-colors hover:text-bone"
                  >
                    TikTok
                  </a>
                </div>
                <p className="mt-4 text-sm text-ash">
                  ✉️{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="transition-colors hover:text-bone"
                  >
                    {SITE.email}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
