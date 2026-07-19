export const SITE = {
  name: "Beymen",
  tagline: "Steakhouse & Café",
  city: "Tanger",
  email: "contact@beymentanger.ma",
  socials: {
    instagram: "https://www.instagram.com/beymentanger/",
    facebook: "https://web.facebook.com/beymentanger/",
    tiktok: "https://www.tiktok.com/@beymentanger",
  },
  instagramHandle: "@beymentanger",
};

export const RESTAURANTS = [
  {
    id: "iberia",
    name: "Beymen Iberia",
    status: "open" as const,
    phone: "+212 667 679 763",
    phoneHref: "tel:+212667679763",
    hours: "08:00 — 02:00",
    address: "Quartier Iberia, Tanger",
    description:
      "Au cœur du quartier Iberia, une adresse chaleureuse où la braise ne s'éteint jamais. Grillades turques, mocktails signatures et spectacle de feu chaque soir.",
    image: "/images/restaurant-iberia.svg",
    menu: "/menus/menu-iberia.pdf",
  },
  {
    id: "malabata",
    name: "Beymen Malabata",
    status: "closed" as const,
    phone: "+212 689 790 825",
    phoneHref: "tel:+212689790825",
    hours: "09:00 — 02:00",
    address: "Corniche Malabata, Complexe Le Printemps, Av. Mohammed VI, Tanger",
    description:
      "Face à la baie de Tanger, notre adresse emblématique de la corniche Malabata fait peau neuve. Réouverture très bientôt — encore plus belle.",
    image: "/images/restaurant-malabata.svg",
    menu: "/menus/menu-malabata.pdf",
  },
];

export const ABOUT = {
  title: "L'art de la braise",
  paragraphs: [
    "BEYMEN TANGER est un restaurant turc à Tanger proposant une ambiance douce, un délicieux menu et de bons mocktails. Notre réputation vient directement de notre menu.",
    "Il y en a pour tous les goûts : des plats classiques préparés fraîchement par de grands chefs, tout droit venus de la cuisine turque. Viandes maturées, feu vif, service d'exception.",
  ],
  stats: [
    { value: "2", label: "Adresses à Tanger" },
    { value: "100%", label: "Recettes turques authentiques" },
    { value: "7/7", label: "Jusqu'à 02:00 du matin" },
  ],
  spectacle: {
    title: "L'art du spectacle",
    text: "Chaque soir, le feu entre en scène. Nos maîtres grilladins transforment le service en performance — flammes, braises et découpe au tableau.",
  },
};

export const GALLERY = [
  { src: "/images/gallery-1.svg", label: "Côte de bœuf au feu de bois" },
  { src: "/images/gallery-2.svg", label: "Salle — ambiance Beymen" },
  { src: "/images/gallery-3.svg", label: "Mocktail signature" },
  { src: "/images/gallery-4.svg", label: "Grillades mixtes" },
  { src: "/images/gallery-5.svg", label: "Le spectacle du feu" },
  { src: "/images/gallery-6.svg", label: "Desserts turcs" },
  { src: "/images/gallery-7.svg", label: "Terrasse — vue Tanger" },
  { src: "/images/gallery-8.svg", label: "Découpe du chef" },
];

export const REVIEWS = [
  {
    name: "Abdelkrim Gonesse",
    date: "Avril 2025",
    text: "Très beau cadre, accueil super sympa, serveurs à l'écoute. Les plats grillés étaient excellents avec un spectacle de feu.",
    rating: 5,
  },
  {
    name: "Bagdad",
    date: "Mai 2024",
    text: "Nous avons adoré notre repas — des entrées aux desserts, tout était savoureux, bien préparé. Le personnel très attentionné a rendu notre visite mémorable.",
    rating: 5,
  },
  {
    name: "Kaoutar A.",
    date: "Octobre 2024",
    text: "Beymen est un véritable joyau ! Le service nous a fait sentir tellement bienvenus, chaque plat était succulent et magnifiquement présenté.",
    rating: 5,
  },
  {
    name: "Kim",
    date: "Décembre 2023",
    text: "Super endroit, personnel très professionnel et aimable. Nourriture délicieuse — c'était ma première expérience de la cuisine turque au Maroc.",
    rating: 5,
  },
];

export const MAPS_EMBED =
  "https://www.google.com/maps?q=Beymen+Tanger&hl=fr&z=13&output=embed";
