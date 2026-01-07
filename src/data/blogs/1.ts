import type { BlogPost } from "@/data/blogs";

const blogData: BlogPost = {
  title:
    "It's a Continuous Journey of Learning, Experimenting, and Improving How Technology Works Behind the Scenes",

  category: {
    label: "Insights Worth Reading",
    type: "Coding",
  },

  author: {
    name: "Omkar Mitake",
  },

  publishedAt: "Nov 18, 2025",

  hero: {
    image: "/images/blogs/blog-hero.png",
    alt: "Developer working on a laptop",
  },

  content: [
    {
      type: "media",
      mediaType: "image",
      src: "/images/blogs/blog-hero.png",
      alt: "Developer working on a laptop",
      caption:
        "Learn the essentials of coding with picture-based explanations that make every concept easy to follow and remember.",
    },

    {
      type: "media",
      mediaType: "video",
      // TODO : Add a video link instead of PNG
      src: "/images/blogs/blog-hero.png",
      alt: "Coding tutorial video",
      caption:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
    },

    {
      type: "heading",
      level: 1,
      text: "Header 1",
      paragraph:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development. \n \nDive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "heading",
      level: 2,
      text: "Header 2",
      paragraph:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development. \n \nDive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "heading",
      level: 3,
      text: "Header 3",
      paragraph:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "heading",
      level: 4,
      text: "Header 4",
      paragraph:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "heading",
      level: 5,
      text: "Header 5",
      paragraph:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "heading",
      level: 6,
      text: "Header 6",
      paragraph:
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development. \n \nDive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "list",
      listType: "unordered",
      header: "Header 1",
      items: [
        "Dive into a collection of coding videos.",
        "Dive into a collection of coding videos.",
        "Dive into a collection of coding videos.",
      ],
    },

    {
      type: "list",
      listType: "unordered",
      header: "Header 2",
      items: [
        "Dive into a collection of coding videos.",
        "Dive into a collection of coding videos.",
        "Dive into a collection of coding videos.",
      ],
    },

    {
      type: "comparison",
      headers: ["Design", "Development"],
      rows: [
        ["May 20 - Deven", "May 30 - Omkar"],
        ["May 20 - Deven", "May 30 - Omkar"],
        ["May 20 - Deven", "May 30 - Omkar"],
        ["May 20 - Deven", "May 30 - Omkar"],
        ["May 20 - Deven", "May 30 - Omkar"],
      ],
    },
  ],
};

export default blogData;
