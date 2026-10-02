/* ------------------------------------------------------------------
   SITE CONTENT — edit this file to change everything on the site.
   Videos: each project accepts either
     vimeo: "123456789"             -> Vimeo player in the lightbox
     mp4:   "https://.../file.mp4"  -> native player in the lightbox
   preview: optional short muted mp4 that plays on hover in the grid
   poster:  still image shown before the preview loads
   ------------------------------------------------------------------ */
window.SITE = {
  name: "Tristan Samson",
  role: "Colorist",
  tagline: "Freelance Colorist",
  description:
    "Color grading with a precise eye and a taste for restraint. " +
    "Tristan crafts tailored grades for commercials, fashion films " +
    "and music videos, always in service of the image and the story.",
  email: "hello@tristansamson.com",
  phone: "+33 6 00 00 00 00",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "Vimeo", url: "https://vimeo.com/" }
  ],
  categories: [
    { slug: "luxury", label: "Luxury" },
    { slug: "fashion", label: "Fashion" },
    { slug: "beauty", label: "Beauty" },
    { slug: "music-video", label: "Music Video" },
    { slug: "animation", label: "Animation" }
  ],
  hero: {
    // Looping background film behind the name. Replace with the real reel.
    mp4: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_5MB.mp4",
    poster: "assets/posters/hero.svg"
  },
  projects: [
    {
      title: "Maison Noire — Spring Campaign",
      categories: ["luxury", "fashion"],
      credits: { director: "Léa Marchand", dop: "Samuel Oyelaran", prod: "Studio Orée" },
      mp4: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4",
      preview: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_2MB.mp4",
      poster: "assets/posters/p01.svg"
    },
    {
      title: "Aurum — Eau de Parfum",
      categories: ["luxury", "beauty"],
      credits: { director: "Noor Haddad", dop: "", prod: "Lumen Films" },
      mp4: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_5MB.mp4",
      preview: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_2MB.mp4",
      poster: "assets/posters/p02.svg"
    },
    {
      title: "Velours — FW Collection",
      categories: ["fashion"],
      credits: { director: "Ilan Weiss", dop: "Mara Koskinen", prod: "Partout" },
      mp4: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_5MB.mp4",
      preview: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_2MB.mp4",
      poster: "assets/posters/p03.svg"
    },
    {
      title: "Horlogerie Delcourt — Atelier",
      categories: ["luxury"],
      credits: { director: "Camille Roux", dop: "", prod: "" },
      mp4: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
      preview: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      poster: "assets/posters/p04.svg"
    },
    {
      title: "Sable — Skin Ritual",
      categories: ["beauty"],
      credits: { director: "Tomás Herrera", dop: "Anaïs Lefèvre", prod: "Blanche" },
      mp4: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4",
      preview: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
      poster: "assets/posters/p05.svg"
    },
    {
      title: "Nova Lune — \"Static\"",
      categories: ["music-video"],
      credits: { director: "Kenji Arai", dop: "Oscar Bellamy", prod: "Lowlight" },
      mp4: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_5MB.mp4",
      preview: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_2MB.mp4",
      poster: "assets/posters/p06.svg"
    },
    {
      title: "Ombra Eyewear",
      categories: ["luxury", "fashion"],
      credits: { director: "Priya Nair", dop: "", prod: "New Shore" },
      mp4: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_5MB.mp4",
      preview: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_2MB.mp4",
      poster: "assets/posters/p07.svg"
    },
    {
      title: "Résonance — Speaker Launch",
      categories: ["luxury"],
      credits: { director: "Studio Fjord", dop: "Daniel Marques", prod: "" },
      mp4: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
      preview: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_2MB.mp4",
      poster: "assets/posters/p08.svg"
    },
    {
      title: "Juno & The Tides — \"Driftwood\"",
      categories: ["music-video"],
      credits: { director: "Elise Dubois", dop: "", prod: "Marée Haute" },
      mp4: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4",
      preview: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      poster: "assets/posters/p09.svg"
    },
    {
      title: "Grisaille — Couture Short",
      categories: ["fashion", "beauty"],
      credits: { director: "Nicolas Perrin", dop: "", prod: "" },
      mp4: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_5MB.mp4",
      preview: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
      poster: "assets/posters/p10.svg"
    },
    {
      title: "Paper Birds",
      categories: ["animation"],
      credits: { director: "Hana Sato", dop: "", prod: "Folded Studio" },
      mp4: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4",
      preview: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_2MB.mp4",
      poster: "assets/posters/p11.svg"
    },
    {
      title: "Lovers — Fragrance Film",
      categories: ["luxury", "beauty"],
      credits: { director: "", dop: "", prod: "" },
      mp4: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_5MB.mp4",
      preview: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_2MB.mp4",
      poster: "assets/posters/p12.svg"
    }
  ]
};
