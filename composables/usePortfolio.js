import {
  siHtml5,
  siCss,
  siJavascript,
  siNuxt,
  siPython,
  siTailwindcss,
  siBootstrap,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

const owner = {
  name: "3bdellatiif",
  title: "Front end Engineer",
  headline: "Abdelrahman Ibrahem",
  tagline: "Front end Engineer",
  blurb:
    "Software engineering student skilled in web development, responsive SPAs, and RESTful API integration.Fast-learning problem solver seeking an opportunity to contribute to impactful projects while expanding technical expertise..",
  email: "abdelrahmanlatif04@example.com",
  github: "https://github.com/3bdellatiif",
  linkedin: "https://www.linkedin.com/in/3bdellatiif",
};

const tech = [
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "Vue 3", icon: siVuedotjs },
  { name: "Nuxt", icon: siNuxt },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Bootstrap CSS", icon: siBootstrap },
  { name: "Python", icon: siPython },
];

const projects = [
  {
    title: "Meridian",
    tagline: "Real-time logistics control tower",
    summary:
      "A live operations console tracking 40k vehicles. Dispatchers see changes in under a second, even at regional peaks.",
    highlights: [
      "Kafka topics keyed by vehicle id keep per-asset ordering without global locks.",
      "A binary WebSocket diff protocol cut payloads by 80%.",
    ],
    metrics: [
      { value: "420 ms", label: "p95 latency" },
      { value: "1.2M", label: "events / min" },
      { value: "99.98%", label: "uptime" },
    ],
    stack: ["Nuxt", "TypeScript", "Kafka", "PostgreSQL", "Redis"],
    link: "https://example.com/case-studies/meridian",
  },
];

// const principles = [
//   {
//     title: "Speed is a feature",
//     text: "Heavy work is lazy-loaded. Nothing blocks the first paint.",
//   },
//   {
//     title: "Small, honest abstractions",
//     text: "Composables own behaviour, components own presentation.",
//   },
//   {
//     title: "Accessible by default",
//     text: "Semantic HTML, visible focus, readable contrast in both themes, no motion for people who ask for none.",
//   },
//   {
//     title: "Plan for failure",
//     text: "Content stays visible if animation fails, and error states say what happened.",
//   },
// ];

export const usePortfolio = () => ({
  owner,
  tech,
  projects,
  // principles
});
