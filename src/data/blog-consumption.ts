import type { BlogPost } from "@/types/blogs";

export const blogConsumptionDetails: BlogPost = {
  title:
    "It's a Continuous Journey of Learning, Experimenting, and Improving How Technology Works Behind the Scenes",
  category: "Insights Worth Reading",
  author: "Omkar Mitake",
  date: "Nov 18, 2025",
  image: "/images/blogs/blog-hero.png",
  alt: "Developer working on a laptop",

  content: [
    {
      type: "heading",
      level: 2,
      text: "Learning never stops",
    },

    {
      type: "paragraph",
      text: "Technology is not just about writing code. It's about understanding systems, exploring edge cases, and constantly improving how things work behind the scenes.",
    },

    {
      type: "media",
      mediaType: "image",
      src: "/images/blog/setup.jpg",
      alt: "Work setup",
      caption: "Behind the scenes of daily experimentation",
    },

    {
      type: "paragraph",
      text: "Every project teaches something new. Sometimes it's a technical lesson, sometimes it's about design, and sometimes it's simply about patience.",
    },

    {
      type: "media",
      mediaType: "video",
      videoSrc: "dQw4w9WgXcQ",
      caption: "A short explanation of the learning mindset",
    },

    {
      type: "heading",
      level: 3,
      text: "Consistency beats intensity",
    },

    {
      type: "paragraph",
      text: "Small improvements made consistently over time compound into meaningful progress. This mindset applies equally to learning, building, and problem-solving.",
    },
  ],
};
