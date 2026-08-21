/* ═══════════════════════════════════════════
   PROGRAMS & EVENTS GALLERY — VERTEX EDUCATION

   TWO WAYS TO SHOW AN EVENT — pick whichever
   suits each program:

   OPTION A — Link straight to Instagram (lightest,
   no uploads needed). Tapping the card opens that
   Instagram post/reel in a new tab, same as your
   Experiments page reels.
     {
       title: "Annual Function",
       icon: "🎉",
       color: "linear-gradient(135deg,#1a0000,#4a0000)",
       link: "https://www.instagram.com/p/YOUR_POST_ID/",
       cover: "images/programs/annual-function-cover.jpg"  // optional single thumbnail
     }
     "cover" is optional — leave it out entirely and
     the card will just show the icon instead, no
     image needed at all.

   OPTION B — Your own uploaded photos (site hosts
   them). Tapping the card opens a lightbox showing
   every image in the "images" array.
     {
       title: "Science Fair",
       icon: "🔬",
       color: "linear-gradient(135deg,#0d1a3a,#163580)",
       images: ["images/programs/science-fair-1.jpg", ...]
     }

   Don't mix "link" and "images" on the same entry —
   if "link" is present, it always wins and "images"
   is ignored for that card.

   To add a brand new event: copy one whole block
   below (from { to },) and edit it. Save & push
   like usual — nothing else to touch.
   ═══════════════════════════════════════════ */
const programsData = [
  {
    title: "Science Fair",
    icon: "🔬",
    color: "linear-gradient(135deg,#0d1a3a,#163580)",
    images: [
      "images/programs/photo-1.jpeg",
      "images/programs/photo-2.jpeg",
      "images/programs/photo-3.jpeg",
    ]
  },
  {
    title: "Maths Olympiad",
    icon: "🧮",
    color: "linear-gradient(135deg,#1a1400,#4a3c00)",
    images: [
      "images/programs/photo-3.1.jpeg",
      "images/programs/photo-3.2.jpeg",
      "images/programs/photo-3.3.jpeg",
    ]
  },
  {
    title: "Felicitation Ceremony",
    icon: "🎖️",
    color: "linear-gradient(135deg,#1a002a,#400066)",
    // Example of the Instagram-link style — uncomment and fill in to use:
    link: "https://www.instagram.com/p/DStF3UXCDYM/?img_index=1",
    cover: "images/programs/photo-1.jpeg"
  },
  {
    title: "Career Guidance Day",
    icon: "🗣️",
    color: "linear-gradient(135deg,#001a0d,#004020)",
    images: [
      // "images/programs/career-day-1.jpg",
    ]
  },
  {
    title: "Annual Function",
    icon: "🎉",
    color: "linear-gradient(135deg,#1a0000,#4a0000)",
    images: [
      // "images/programs/annual-function-1.jpg",
    ]
  },
  {
    title: "Parent-Teacher Meetings",
    icon: "👪",
    color: "linear-gradient(135deg,#001a0d,#0a3d1f)",
    images: [
      // "images/programs/ptm-1.jpg",
    ]
  },
];