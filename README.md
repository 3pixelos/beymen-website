# Beymen Tanger — Steakhouse & Café

Complete redesign of [beymentanger.ma](https://beymentanger.ma) — Next.js 16, Tailwind CSS 4, Framer Motion, Lenis smooth scroll.

Dark red / black / white luxury theme with:

- Cinematic preloader (bull logo draw-on + counter + curtain reveal)
- Hero with twinkling stars, red shooting stars and rising embers (canvas)
- Scroll-parallax about section with ghost marquee typography
- Restaurant cards — Iberia (3D hover tilt) & Malabata (animated caution tape + swinging "EN TRAVAUX" sign)
- Scroll-driven circular photo gallery (the wheel rotates as you scroll)
- Dual-direction review marquee
- Google Maps + contact + socials, footer with giant wordmark reveal

## Run

```bash
npm install
npm run dev
```

## Replace the placeholders

All photos are labeled placeholder SVGs. Drop the real assets in and update paths in `lib/data.ts` if the extensions change:

| File | What it is |
|---|---|
| `public/images/gallery-1..8.svg` | Gallery wheel photos (portrait 3:4) |
| `public/images/restaurant-iberia.svg` | Iberia card photo (landscape) |
| `public/images/restaurant-malabata.svg` | Malabata card photo (landscape) |
| `public/menus/menu-iberia.pdf` | Iberia menu PDF |
| `public/menus/menu-malabata.pdf` | Malabata menu PDF |
| `components/BullLogo.tsx` | Stylized logo — swap for the real logo asset |

All text content (phones, hours, reviews, socials) lives in `lib/data.ts`.
