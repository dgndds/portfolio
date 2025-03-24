interface News {
  id: number;
  date: string;
  type: string;
  subtype: string;
  title: string;
  description: string;
}

const NEWS_ARTICLES = [
  {
    id: 1,
    title: "News Section Created",
    content: "News Section created and added to main page",
    date: "24/03/2025 MON",
    type: "mdy",
    subtype: "news",
  },
  {
    id: 2,
    title: "About Me Page Launched",
    content:
      "Check out the new About Me page to learn more about me and my work.",
    date: "24/03/2025 MON",
    type: "mdy",
    subtype: "news",
  },
  {
    id: 3,
    title: "New Skills Terminal Added",
    content:
      "Explore the new Skills Terminal on the About Me page to see my latest skills and expertise.",
    date: "24/03/2025 MON",
    type: "mdy",
    subtype: "update",
  },
  {
    id: 4,
    title: "New News Page Launched",
    content:
      "Discover the latest updates and announcements on the new News page.",
    date: "24/03/2025 MON",
    type: "mdy",
    subtype: "news",
  },
];

export { NEWS_ARTICLES };
export type { News };
