// TYPES //
import type { BlogPost } from "@/types/blogs";

// Blog Section Details
export const blogSectionDetails = {
  badgeTitle: "Code & Culture",
  heading: "Stories and trends shaping how technology connects us.",
  loadMoreButton: "Load More Blogs",
  defaultImage: "/images/blogs/blog-card.jpg",
  blogItems: [
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
    {
      imageSrc: "/images/blogs/blog-card.jpg",
      category: "Design",
      date: "6 Nov 2025",
      title: "Get expert design advice to create experiences.",
      author: "Omkar Mitake",
      href: "#",
    },
  ],
};

export const dummyBlogPost: BlogPost = {
  title: "How Pixolo Builds Scalable Digital Products",
  category: "Product & Engineering",
  author: "Abhay Amin",
  date: "2026-01-17",
  image: "/images/blogs/pixolo-hero.jpg",
  alt: "Pixolo product engineering team working on digital products",
  content: [
    // Heading Block
    {
      type: "heading",
      level: 1,
      text: "Building Products That Scale",
      paragraph:
        "At Pixolo, we don't just build software. We build systems that grow with your business.",
      link: {
        text: "Explore our product philosophy",
        href: "/philosophy",
      },
    },

    // Paragraph Block
    {
      type: "paragraph",
      text: "Modern digital products demand more than just beautiful interfaces. They need performance, security, scalability, and thoughtful engineering. At Pixolo, every line of code is written with tomorrow in mind.",
    },

    // Media Block — Image
    {
      type: "media",
      mediaType: "image",
      src: "/images/blogs/team-working.jpg",
      alt: "Pixolo engineers collaborating on a product roadmap",
      caption: "Our engineering team designing scalable architecture",
    },

    // Heading Block
    {
      type: "heading",
      level: 2,
      text: "Our Product Development Approach",
      paragraph:
        "We follow a structured, transparent, and highly collaborative development process.",
    },

    // List Block — Unordered
    {
      type: "list",
      listType: "unordered",
      header: "What Makes Pixolo Different",
      items: [
        "Product-first engineering mindset",
        "Scalable architecture from day one",
        "Design-led development process",
        "High-performance modern tech stack",
        "Long-term maintainability focus",
      ],
    },

    // Paragraph Block
    {
      type: "paragraph",
      text: "Our teams work closely with founders, product managers, and business leaders to deeply understand the problem before writing a single line of code.",
    },

    // Media Block — Video
    {
      type: "media",
      mediaType: "video",
      videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      caption: "Watch how we build and scale digital platforms",
    },

    // Heading Block
    {
      type: "heading",
      level: 3,
      text: "Technology That Powers Our Products",
      paragraph: "We use a modern, battle-tested technology stack for performance and scalability.",
    },

    // List Block — Ordered
    {
      type: "list",
      listType: "ordered",
      header: "Our Core Technology Stack",
      items: [
        "Next.js & Astro for frontend",
        "Tailwind CSS for design systems",
        "Supabase for backend & auth",
        "PostgreSQL for data layer",
        "Vercel for deployments",
      ],
    },

    // Paragraph Block
    {
      type: "paragraph",
      text: "This stack allows us to move fast without sacrificing long-term reliability or scalability.",
    },

    // Comparison Table Block
    {
      type: "comparison",
      headers: ["Feature", "Pixolo", "Traditional Agencies"],
      rows: [
        ["Scalable Architecture", "Yes", "Sometimes"],
        ["Product Ownership", "Yes", "No"],
        ["Long-term Support", "Yes", "Limited"],
        ["Modern Tech Stack", "Always", "Rarely"],
        ["Design Systems", "Built-in", "Not Included"],
      ],
    },

    // Final Heading
    {
      type: "heading",
      level: 2,
      text: "Let’s Build Something Great",
      paragraph:
        "If you're serious about building a scalable digital product, Pixolo is your engineering partner.",
      link: {
        text: "Start your project with Pixolo",
        href: "/contact",
      },
    },
  ],
};
