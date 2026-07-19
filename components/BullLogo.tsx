"use client";

/**
 * Stylized Beymen longhorn bull mark.
 * variant "line"  -> stroke paths (used by the preloader draw-on animation)
 * variant "solid" -> filled silhouette (navbar / footer)
 * Replace with the real logo asset in /public/images/logo.png when provided.
 */
export const BULL_PATHS = [
  // left horn
  "M100 88 C55 80 28 62 22 34 C46 52 74 58 100 60",
  // right horn
  "M140 88 C185 80 212 62 218 34 C194 52 166 58 140 60",
  // head outline
  "M100 60 C96 84 92 104 100 122 C106 136 112 146 120 154 C128 146 134 136 140 122 C148 104 144 84 140 60 C127 54 113 54 100 60 Z",
  // ears
  "M96 74 C86 70 78 72 72 80 C80 84 88 84 96 82",
  "M144 74 C154 70 162 72 168 80 C160 84 152 84 144 82",
  // muzzle
  "M108 128 C112 134 128 134 132 128",
  // nostrils
  "M112 138 C110 141 112 144 115 143",
  "M128 138 C130 141 128 144 125 143",
];

export default function BullLogo({
  className = "",
  variant = "solid",
}: {
  className?: string;
  variant?: "line" | "solid";
}) {
  return (
    <svg
      viewBox="0 0 240 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Beymen bull logo"
    >
      {BULL_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={variant === "line" ? 4 : 6}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={variant === "solid" && i === 2 ? "currentColor" : "none"}
        />
      ))}
    </svg>
  );
}
