import type { Metadata } from "next";
import { Cinzel, Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Beymen Tanger — Steakhouse & Café",
  description:
    "Beymen Tanger, steakhouse & café turc à Tanger. Viandes maturées, grillades au feu de bois, mocktails signatures et spectacle de feu. Iberia & Malabata.",
  keywords: [
    "Beymen Tanger",
    "steakhouse Tanger",
    "restaurant turc Tanger",
    "grillades Tanger",
    "restaurant Malabata",
    "restaurant Iberia Tanger",
  ],
  openGraph: {
    title: "Beymen Tanger — Steakhouse & Café",
    description:
      "Cuisine turque d'exception à Tanger. Braise, spectacle et mocktails signatures.",
    locale: "fr_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${outfit.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
