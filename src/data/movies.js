// Frontend-only dummy catalog for the Netflix clone.
// No API keys, no backend. Images are stable, seeded placeholders so the
// UI always renders (a random-but-consistent photo per title), with a CSS
// gradient fallback handled in the Card component if the network is offline.

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Deterministic backdrop (16:9) and poster (2:3) per title.
const backdrop = (title) => `https://picsum.photos/seed/${slugify(title)}nfx/640/360`;
const poster = (title) => `https://picsum.photos/seed/${slugify(title)}nfxp/300/450`;

const MATURITY = ["TV-MA", "TV-14", "PG-13", "R", "TV-PG", "TV-Y7"];
const GENRE_POOL = [
  "Thriller",
  "Drama",
  "Sci-Fi",
  "Action",
  "Mystery",
  "Crime",
  "Comedy",
  "Fantasy",
  "Documentary",
  "Adventure",
];

let _id = 0;
const make = (title, opts = {}) => {
  _id += 1;
  const isSeries = opts.isSeries ?? Math.random() > 0.5;
  return {
    id: _id,
    title,
    slug: slugify(title),
    img: backdrop(title),
    poster: poster(title),
    year: opts.year ?? 2016 + ((_id * 7) % 10),
    maturity: opts.maturity ?? MATURITY[_id % MATURITY.length],
    match: opts.match ?? 75 + ((_id * 13) % 24), // 75–98% match
    isSeries,
    seasons: isSeries ? 1 + (_id % 5) : undefined,
    duration: isSeries ? undefined : `${1}h ${(_id * 11) % 60}m`,
    genres: opts.genres ?? [
      GENRE_POOL[_id % GENRE_POOL.length],
      GENRE_POOL[(_id + 3) % GENRE_POOL.length],
    ],
    isOriginal: opts.isOriginal ?? _id % 3 === 0,
    overview:
      opts.overview ??
      "A gripping, binge-worthy tale of ambition, secrets, and consequence — where every choice pulls the characters deeper into a world they can't escape.",
  };
};

// Featured hero title on the browse page.
export const featured = make("Crimson Horizon", {
  isSeries: true,
  maturity: "TV-MA",
  year: 2024,
  match: 97,
  genres: ["Sci-Fi", "Thriller", "Mystery"],
  isOriginal: true,
  overview:
    "When a deep-space signal reaches Earth after forty years of silence, a disgraced astrophysicist is pulled back into a mission that could rewrite humanity's future — or end it.",
});

export const rows = [
  {
    title: "Trending Now",
    items: [
      "Crimson Horizon",
      "The Silent Patient",
      "Midnight Runners",
      "Echoes of Tomorrow",
      "Paper Kingdom",
      "Velvet Underground",
      "The Last Signal",
      "Northern Lights",
      "Broken Compass",
      "Ashes & Empire",
    ].map((t) => make(t)),
  },
  {
    title: "Netflix Originals",
    isOriginalRow: true,
    items: [
      "Ironbound",
      "The Glasshouse",
      "Saints & Sinners",
      "Nightfall City",
      "The Reckoning",
      "Hollow Crown",
      "Wolves of Winter",
      "Static",
      "Gilded Cage",
      "The Undertow",
    ].map((t) => make(t, { isOriginal: true })),
  },
  {
    title: "Popular on Netflix",
    items: [
      "Concrete Jungle",
      "The Ferryman",
      "Sugar & Salt",
      "Lantern Bay",
      "Redline",
      "The Archivist",
      "Glass Onion Nights",
      "Cold Harbor",
      "The Pact",
      "Feral",
    ].map((t) => make(t)),
  },
  {
    title: "Top 10 in Your Country Today",
    isTopTen: true,
    items: [
      "Blackwater",
      "The Inheritance",
      "Neon Saints",
      "Deadlock",
      "The Cartographer",
      "Amber Road",
      "The Understudy",
      "Fault Lines",
      "The Long Game",
      "Salt & Stone",
    ].map((t) => make(t)),
  },
  {
    title: "Critically Acclaimed Dramas",
    items: [
      "The Weight of Water",
      "Quiet Hours",
      "A Small Light",
      "The Remains",
      "Letters to Nobody",
      "Bittersweet",
      "The Understory",
      "Grace Notes",
      "The Slow Burn",
      "Homecoming",
    ].map((t) => make(t, { genres: ["Drama"], maturity: "TV-14" })),
  },
  {
    title: "Adrenaline-Fueled Action",
    items: [
      "Overdrive",
      "The Extraction",
      "Kill Switch",
      "Firewall",
      "Point of No Return",
      "Blacksite",
      "The Rundown",
      "Ricochet",
      "Hard Target",
      "Breakneck",
    ].map((t) => make(t, { genres: ["Action", "Thriller"], isSeries: false })),
  },
  {
    title: "Comedies to Make You Feel Good",
    items: [
      "Office Politics",
      "The Roommate Agreement",
      "Suburban Legends",
      "Wine Country",
      "The Setup",
      "Group Chat",
      "Bad Influence",
      "The Understatement",
      "Small Talk",
      "Meet Cute",
    ].map((t) => make(t, { genres: ["Comedy"], maturity: "TV-14" })),
  },
  {
    title: "Sci-Fi & Fantasy Worlds",
    items: [
      "The Ninth Gate",
      "Starless",
      "The Aether Project",
      "Hollowworld",
      "Chrono",
      "The Verge",
      "Dust & Circuits",
      "The Waking",
      "Parallel",
      "Event Horizon Line",
    ].map((t) => make(t, { genres: ["Sci-Fi", "Fantasy"] })),
  },
];

// Flat map for lookups (search, my-list, modal, etc.)
export const allTitles = [
  featured,
  ...rows.flatMap((r) => r.items),
].reduce((acc, item) => {
  if (!acc.find((x) => x.id === item.id)) acc.push(item);
  return acc;
}, []);

export const findById = (id) => allTitles.find((t) => t.id === Number(id));
