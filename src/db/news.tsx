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
  {
    id: 5,
    title: "Updated About Me Section",
    content:
      "The About Me section has been updated with new information and design improvements.",
    date: "25/03/2025 TUE",
    type: "mdy",
    subtype: "update",
  },
  {
    id: 6,
    title: "New Terminal Buttons",
    content:
      "The Skills Terminal now includes new buttons and dialog functionality for an enhanced user experience.",
    date: "26/03/2025 WED",
    type: "mdy",
    subtype: "update",
  },
  {
    id: 7,
    title: "Education & Projects Added",
    content:
      "The About Me section has been updated with newly added education details and projects in the Experience tab.",
    date: "26/03/2025 WED",
    type: "mdy",
    subtype: "update",
  },
  {
    id: 8,
    title: "New Skills Section Created",
    content:
      "A new Skills section has been added to the About Me page, showcasing my expertise and proficiencies.",
    date: "27/03/2025 THU",
    type: "mdy",
    subtype: "news",
  },
  {
    id: 9,
    title: "New Working Terminal Added",
    content:
      "Experience the new Working Terminal feature, designed to enhance productivity and streamline workflows.",
    date: "28/03/2025 FRI",
    type: "mdy",
    subtype: "news",
  },
  {
    id: 10,
    title: "New Desktop Page Launched",
    content:
      "Explore the new Desktop Page, designed to imitate an OS desktop for a unique and interactive experience.",
    date: "07/04/2025 MON",
    type: "mdy",
    subtype: "news",
  },
];

export { NEWS_ARTICLES };
export type { News };
