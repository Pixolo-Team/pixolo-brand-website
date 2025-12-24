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
      type: "heading",
      level: 1,
      text: "It's a Continuous Journey of Learning, Experimenting, and Improving",
      paragraph:
        "Technology is not just about writing code. It's about understanding systems, exploring edge cases, and constantly improving how things work behind the scenes.\n\nEvery project teaches something new. Sometimes it's a technical lesson, sometimes it's about design, and sometimes it's simply about patience.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "media",
      mediaType: "image",
      src: "/images/blogs/blog-hero.png",
      alt: "Developer working on a laptop",
      caption:
        "Learn the essentials of coding with picture-based explanations that make every concept easy to follow and remember.",
    },

    {
      type: "heading",
      level: 2,
      text: "Learning never stops",
      paragraph:
        "Technology is constantly evolving, and so should we. Each challenge presents an opportunity to grow and refine our skills.\n\nSmall improvements made consistently over time compound into meaningful progress.",
    },

    {
      type: "media",
      mediaType: "video",
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
        "Dive into a collection of coding videos that simplify complex concepts and guide you step-by-step through real-world development.",
      link: {
        text: "Visit page",
        href: "#",
      },
    },

    {
      type: "list",
      listType: "ordered",
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
        "Write clean, maintainable code",
        "Test thoroughly before shipping",
        "Document everything for future reference",
      ],
    },

    {
      type: "comparison",
      headers: ["Design", "Development"],
      rows: [
        ["Focus on user experience", "Focus on implementation"],
        ["Visual prototyping", "Code architecture"],
        ["Figma & Sketch", "React & TypeScript"],
        ["Color theory", "Data structures"],
        ["Responsive layouts", "API integration"],
      ],
    },

    {
      type: "paragraph",
      text: "The journey of learning never truly ends. Each project, each bug fix, and each code review is an opportunity to grow. Embrace the process, stay curious, and keep building.",
    },
  ],
};

export default blogData;
