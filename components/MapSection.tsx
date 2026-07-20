"use client";

import { useState } from "react";
import { SITE, RESTAURANTS } from "@/lib/data";
import Reveal from "./Reveal";
import InstagramLink from "./InstagramLink";

export default function MapSection() {
  const [active, setActive] = useState(RESTAURANTS[0]);

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
          {/* map with location toggle */}
          <Reveal className="lg:col-span-3">
            <div className="mb-4 flex flex-wrap gap-3">
              {RESTAURANTS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActive(r)}
                  className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                    active.id === r.id
                      ? "bg-crimson text-bone shadow-[0_0_25px_rgba(164,22,26,0.4)]"
                      : "border border-smoke text-ash hover:border-blood/60 hover:text-bone"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-2xl border border-smoke">
              <iframe
                key={active.id}
                src={active.mapEmbed}
                title={`${active.name} sur Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-blood/30" />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-ash">📍 {active.address}</p>
              <a
                href={active.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-crimson/60 px-5 py-2 text-xs uppercase tracking-[0.2em] text-bone transition-all hover:bg-crimson"
              >
                Itinéraire →
              </a>
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
                    <p>
                      📞{" "}
                      <a href={r.phoneHref} className="hover:text-bone transition-colors">
                        {r.phone}
                      </a>
                    </p>
                    <p>🕘 {r.hours}</p>
                    <p>
                      📸{" "}
                      <InstagramLink
                        username={r.instagramUser}
                        className="text-ember transition-colors hover:text-bone"
                      >
                        {r.instagramHandle}
                      </InstagramLink>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-blood/40 bg-gradient-to-br from-blood/20 to-coal p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-ember">
                  Suivez-nous
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  <InstagramLink
                    username="beymeniberia"
                    className="block text-bone transition-colors hover:text-ember"
                  >
                    Instagram Iberia — @beymeniberia
                  </InstagramLink>
                  <InstagramLink
                    username="beymentanger"
                    className="block text-bone transition-colors hover:text-ember"
                  >
                    Instagram Malabata — @beymentanger
                  </InstagramLink>
                  <a
                    href={SITE.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-ash transition-colors hover:text-bone"
                  >
                    TikTok — @beymentanger
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
