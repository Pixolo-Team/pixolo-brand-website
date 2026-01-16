export const blogSectionDetails = {
  badgeTitle: "Code & Culture",
  heading: "Stories and trends shaping how technology connects us.",
  loadMoreButton: "Load More Blogs",
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

// TYPE FOR BLOG CONSUMPTION
export interface BlogPost {
  title: string;

  category: {
    label: string;
    type: string;
  };

  author: {
    name: string;
  };

  publishedAt: string;

  hero: {
    image: string;
    alt: string;
  };

  content: BlogBlock[];
}

export type BlogBlock =
  | HeadingBlockData
  | ParagraphBlockData
  | MediaBlockData
  | ListBlockData
  | ComparisonBlockData;

export interface HeadingBlockData {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  paragraph?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface ParagraphBlockData {
  type: "paragraph";
  text: string;
}

export interface MediaBlockData {
  type: "media";
  mediaType: "image" | "video";

  src?: string;
  alt?: string;

  videoId?: string;
  caption?: string;
}

export interface ListBlockData {
  type: "list";
  listType: "unordered" | "ordered";
  header?: string;
  items: string[];
}

export interface ComparisonBlockData {
  type: "comparison";
  headers: string[];
  rows: string[][];
}
