export const SITE = {
  name: "Beymen",
  tagline: "Steakhouse & Café",
  city: "Tanger",
  email: "contact@beymentanger.ma",
  socials: {
    instagramIberia: "https://www.instagram.com/beymeniberia",
    instagramMalabata: "https://www.instagram.com/beymentanger",
    tiktok: "https://www.tiktok.com/@beymentanger",
  },
};

export const RESTAURANTS = [
  {
    id: "iberia",
    name: "Beymen Iberia",
    status: "open" as const,
    phone: "+212 667 679 763",
    phoneHref: "tel:+212667679763",
    hours: "08:00 — 02:00",
    address: "Avenue Sidi Mohamed Ben Abdellah, Iberia, Tanger",
    description:
      "Au cœur du quartier Iberia, une adresse chaleureuse où la braise ne s'éteint jamais. Grillades turques, mocktails signatures et spectacle de feu chaque soir.",
    image: "/images/restaurant-iberia.jpg",
    menu: "/menus/menu-iberia.pdf",
    instagram: "https://www.instagram.com/beymeniberia",
    instagramUser: "beymeniberia",
    instagramHandle: "@beymeniberia",
    mapEmbed:
      "https://www.google.com/maps?q=35.7832375,-5.8222448(Beymen+Iberia)&z=17&hl=fr&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=35.7832375,-5.8222448",
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
    image: "/images/restaurant-malabata.jpg",
    menu: "/menus/menu-malabata.pdf",
    instagram: "https://www.instagram.com/beymentanger",
    instagramUser: "beymentanger",
    instagramHandle: "@beymentanger",
    mapEmbed:
      "https://www.google.com/maps?q=Beymen+Malabata+Complexe+Le+Printemps+Tanger&z=16&hl=fr&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Beymen+Malabata+Complexe+Le+Printemps+Tanger",
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
  { src: "/images/gallery-1.jpg", label: "Petit-déjeuner turc" },
  { src: "/images/gallery-2.jpg", label: "Le spectacle du feu" },
  { src: "/images/gallery-3.jpg", label: "Entrecôte maturée" },
  { src: "/images/gallery-4.jpg", label: "Steak au feu de bois" },
  { src: "/images/gallery-5.jpg", label: "Mezze & saveurs" },
  { src: "/images/gallery-6.jpg", label: "Mocktails signatures" },
  { src: "/images/gallery-7.jpg", label: "Sujuk & œufs" },
  { src: "/images/gallery-8.jpg", label: "Beyti kebab" },
];

export const REVIEWS = [
  {
    name: "Faith",
    date: "Mars 2026",
    text: "Beymen is a fantastic restaurant for anyone who loves Turkish food. The menu has a great variety of traditional dishes, all prepared very well and full of flavor. The quality of the food is excellent.",
    rating: 5,
  },
  {
    name: "Ayman Saadi",
    date: "Mars 2026",
    text: "Le service est aux petits soins, le personnel est accueillant et attentionné. La qualité de la nourriture est tout simplement au top : des plats savoureux, bien présentés et préparés avec soin. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Awa Ka",
    date: "Mars 2026",
    text: "Très bon et beau restaurant. La nourriture spécialité turque est très bonne et savoureuse. Le prix est correct, je recommande ✅",
    rating: 5,
  },
  {
    name: "Aidy Gooner",
    date: "Janvier 2026",
    text: "Delicious brunch at a beautiful spot with amazing service from the staff. I could've had everything on the menu but went for a healthy start which also came with fruit yoghurt.",
    rating: 5,
  },
  {
    name: "Selma Tabbassi",
    date: "Novembre 2025",
    text: "Superbe accueil. Je suis partie manger avec ma sœur et nous avons été très bien reçues. Un grand merci pour tout.",
    rating: 5,
  },
  {
    name: "Khatija Ahmed Jogee",
    date: "Octobre 2025",
    text: "We had a lovely lunch here. The staff were really pleasant. The portions are enormous. The staff were kind enough to pack the leftovers so we could give the food to whoever needed a meal.",
    rating: 5,
  },
  {
    name: "Nabil Bensiali",
    date: "Septembre 2025",
    text: "L'accueil est chaleureux et le service très attentionné, toujours avec le sourire. Les plats sont préparés avec soin, joliment présentés et surtout savoureux. On sent la qualité des produits et le fait-maison.",
    rating: 5,
  },
  {
    name: "Mowdah",
    date: "2025",
    text: "Nous avons passé un excellent moment. La cuisine était délicieuse, les plats parfaitement maîtrisés et joliment présentés. Mention spéciale au serveur, d'une gentillesse et d'un professionnalisme exemplaires.",
    rating: 5,
  },
  {
    name: "Jihane",
    date: "2025",
    text: "Cuisine de qualité et service impeccable avec le sourire. Le personnel est très chaleureux. Rapport qualité prix très intéressant !",
    rating: 5,
  },
  {
    name: "Тодор Денев",
    date: "2025",
    text: "I am so pleased with the service and the food! The staff is super friendly and helpful, cares a lot about your stay here. The food comes quickly, with a wide selection of traditional Turkish meals.",
    rating: 5,
  },
  {
    name: "Darren Parker",
    date: "2025",
    text: "Lovely restaurant with excellent attentive service. Very much enjoyed the recommendation from the waiter which was tasty and well cooked. Good flavours in the sauces and good spices.",
    rating: 5,
  },
  {
    name: "Abdelkrim Gonesse",
    date: "Avril 2025",
    text: "Très beau cadre, accueil super sympa, serveurs à l'écoute. Les plats grillés étaient excellents avec un spectacle de feu.",
    rating: 5,
  },
  {
    name: "Kaoutar A.",
    date: "Octobre 2024",
    text: "Beymen est un véritable joyau ! Le service nous a fait sentir tellement bienvenus, chaque plat était succulent et magnifiquement présenté.",
    rating: 5,
  },
  {
    name: "Bagdad",
    date: "Mai 2024",
    text: "Nous avons adoré notre repas — des entrées aux desserts, tout était savoureux, bien préparé. Le personnel très attentionné a rendu notre visite mémorable.",
    rating: 5,
  },
  {
    name: "Lauren Morton",
    date: "2024",
    text: "We enjoyed a stunning 3 course meal here. Every dish was cooked perfectly and we loved every bite. The desserts were served with flair and the service was flawless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Walid Bomaye",
    date: "2024",
    text: "Un des meilleurs restaurants de Tanger. Le cadre est beau et l'ambiance vraiment bonne. Les serveurs sont attentifs et aux petits soins. Saumon, kefta, veau, filets de bœuf, mix houmous…",
    rating: 5,
  },
  {
    name: "Mohamed Oubiouch",
    date: "2024",
    text: "L'atmosphère du restaurant était chaleureuse et invitante, créant une toile de fond parfaite pour cette expérience culinaire mémorable. Le service était exemplaire, le personnel attentif.",
    rating: 5,
  },
  {
    name: "Kim",
    date: "Décembre 2023",
    text: "Super endroit, personnel très professionnel et aimable. Nourriture délicieuse — c'était ma première expérience de la cuisine turque au Maroc.",
    rating: 5,
  },
  {
    name: "Abderrahim Akhrif",
    date: "2022",
    text: "3rd time here and same satisfaction. Their breakfasts are original and delicious. The waiters are friendly and very professional.",
    rating: 5,
  },
  {
    name: "Lola",
    date: "2021",
    text: "Whoever is looking for authentic Turkish food, this is the right place. A beautiful, quiet and wonderful place — every corner has a different decor. ♥️",
    rating: 5,
  },
];
