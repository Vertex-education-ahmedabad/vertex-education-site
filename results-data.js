/* ═══════════════════════════════════════════
   STUDENT RESULTS — VERTEX EDUCATION (Homepage)

   No limit on how many students you add here —
   add as many as you want, the row just keeps
   scrolling through all of them.

   PHOTOS: put student photos in images/results/
   and reference them like:
     photo: "images/results/ananya-sharma.jpg"
   Leave "photo" out entirely (or set it to null)
   for a student with no photo yet — the card will
   just show the badge text instead, same as before.

   FIELDS PER STUDENT:
     name         — student's full name
     subtitle     — small line under the name, e.g. "Science · PCM"
     photo        — optional image path (see above)
     bgGradient   — CSS gradient for the card's top area
                    (only visible if there's no photo)
     color        — accent color for the big badge text
     badgeTop     — the big text at the top, e.g. "96%" or "JEE"
     badgeSub     — small line under badgeTop, e.g. "CBSE · Class 12"
     resultTag    — the small pill at the bottom, e.g. "🏆 96.4%"
     badgeColor   — color for that bottom pill (optional,
                    defaults to blue if left out)

   To add a new student: copy one whole block
   below (from { to },) and edit it. Save & push
   like usual — nothing else to touch.
   ═══════════════════════════════════════════ */
const resultsData = [
  {
    name: "Ananya Sharma",
    subtitle: "Science · PCM",
    photo: null, // e.g. "images/results/ananya-sharma.jpg"
    bgGradient: "linear-gradient(135deg,#0d1a3a,#163580)",
    color: "#4F8EF7",
    badgeTop: "96%",
    badgeSub: "CBSE · Class 12",
    resultTag: "🏆 96.4%",
  },
  {
    name: "Rahul Patel",
    subtitle: "PCM · JEE 2024",
    photo: null,
    bgGradient: "linear-gradient(135deg,#1a0f00,#4a2800)",
    color: "#F4B400",
    badgeTop: "JEE",
    badgeSub: "Main Qualified",
    resultTag: "🎯 92 %ile",
    badgeColor: "#F4B400",
  },
  {
    name: "Dhruvi Shah",
    subtitle: "Std 10 · GSEB",
    photo: null,
    bgGradient: "linear-gradient(135deg,#001a0d,#004020)",
    color: "#22c55e",
    badgeTop: "94%",
    badgeSub: "GSEB · Std 10",
    resultTag: "🥇 94.2%",
  },
  {
    name: "Priya Desai",
    subtitle: "PCB · NEET 2024",
    photo: null,
    bgGradient: "linear-gradient(135deg,#1a002a,#400066)",
    color: "#a855f7",
    badgeTop: "NEET",
    badgeSub: "Qualified",
    resultTag: "💊 570/720",
    badgeColor: "#a855f7",
  },
  {
    name: "Arjun Mehta",
    subtitle: "ICSE · Class 10",
    photo: null,
    bgGradient: "linear-gradient(135deg,#1a0000,#4a0000)",
    color: "#ef4444",
    badgeTop: "98%",
    badgeSub: "ICSE · Class 10",
    resultTag: "⭐ 98.0%",
    badgeColor: "#ef4444",
  },
  {
    name: "Sneha Trivedi",
    subtitle: "Class 10 · CBSE",
    photo: null,
    bgGradient: "linear-gradient(135deg,#0d1a3a,#163580)",
    color: "#4F8EF7",
    badgeTop: "91%",
    badgeSub: "CBSE · Class 10",
    resultTag: "🎓 91.2%",
  },
  {
    name: "Karan Solanki",
    subtitle: "Std 12 · Science",
    photo: null,
    bgGradient: "linear-gradient(135deg,#001a0d,#004020)",
    color: "#22c55e",
    badgeTop: "93%",
    badgeSub: "GSEB · Std 12",
    resultTag: "🔬 93.6%",
  },
  {
    name: "Veer Agarwal",
    subtitle: "JEE Adv · 2024",
    photo: null,
    bgGradient: "linear-gradient(135deg,#1a1400,#4a3c00)",
    color: "#F4B400",
    badgeTop: "JEE",
    badgeSub: "Advanced",
    resultTag: "🚀 AIR 2840",
    badgeColor: "#F4B400",
  },
  {
    name: "Pooja Verma",
    subtitle: "Science · CBSE",
    photo: null,
    bgGradient: "linear-gradient(135deg,#0d1a3a,#163580)",
    color: "#4F8EF7",
    badgeTop: "97%",
    badgeSub: "CBSE · Class 12",
    resultTag: "🌟 97.2%",
  },
  {
    name: "Manan Thakkar",
    subtitle: "Std 10 · GSEB",
    photo: null,
    bgGradient: "linear-gradient(135deg,#001a0d,#004020)",
    color: "#22c55e",
    badgeTop: "88%",
    badgeSub: "GSEB · Std 10",
    resultTag: "📝 88.6%",
  },
  {
    name: "Riya Kapoor",
    subtitle: "ICSE · Class 10",
    photo: null,
    bgGradient: "linear-gradient(135deg,#1a002a,#400066)",
    color: "#a855f7",
    badgeTop: "95%",
    badgeSub: "ICSE · Class 10",
    resultTag: "🎖 95.4%",
    badgeColor: "#a855f7",
  },
];