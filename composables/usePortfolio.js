const owner = {
  name: "3bdellatiif",
  title: "Front end Engineer",
  headline: "Abdelrahman Abdullatiif",
  tagline: "Front end Engineer",
  blurb:
    "Software engineering student skilled in web development, responsive SPAs, and RESTful API integration.Fast-learning problem solver seeking an opportunity to contribute to impactful projects while expanding technical expertise..",
  contact: [
    {
      title: "GitHub",
      icon: "https://api.iconify.design/mdi:github.svg?color=%23ffffff",
      url: "https://github.com/3bdellatiif",
    },
    {
      title: "LinkedIn",
      icon: "https://api.iconify.design/mdi:linkedin.svg?color=%23ffffff",
      url: "https://www.linkedin.com/in/3bdellatiif",
    },
    {
      title: "Email",
      icon: "https://api.iconify.design/mdi:email-outline.svg?color=%23ffffff",
      url: "mailto:abdelrahmanlatif04@gmail.com",
    },
    {
      title: "X (Twitter)",
      icon: "https://api.iconify.design/ri:twitter-x-fill.svg?color=%23ffffff",
      url: "http://x.com/3bdellatiif/",
    },
    {
      title: "portfolio",
      icon: "https://api.iconify.design/lucide:globe.svg?color=%23ffffff",
      url: "/",
    },
  ],
};

const tech = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "Vue 3", icon: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Nuxt", icon: "https://cdn.simpleicons.org/nuxt" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Bootstrap CSS", icon: "https://cdn.simpleicons.org/bootstrap" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
];

const projects = [
  // {
  //   title: "Meridian",
  //   tagline: "Real-time logistics control tower",
  //   //may add img(s)
  //   summary:
  //     "A live operations console tracking 40k vehicles. Dispatchers see changes in under a second, even at regional peaks.",
  //   highlights: [
  //     "Kafka topics keyed by vehicle id keep per-asset ordering without global locks.",
  //     "A binary WebSocket diff protocol cut payloads by 80%.",
  //   ],
  //   stack: ["HTML", "CSS", "JavaScript", "Nuxt"],
  //   url: "#",
  // },
];

export const usePortfolio = () => ({
  owner,
  tech,
  projects,
});
