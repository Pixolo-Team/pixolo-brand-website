// TYPE FOR BLOG CONSUMPTION
export type BlogPost = {
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
};

export type BlogBlock =
  | HeadingBlockData
  | ParagraphBlockData
  | MediaBlockData
  | ListBlockData
  | ComparisonBlockData;

export type HeadingBlockData = {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  paragraph?: string;
  link?: {
    text: string;
    href: string;
  };
};

export type ParagraphBlockData = {
  type: "paragraph";
  text: string;
};

export type MediaBlockData = {
  type: "media";
  mediaType: "image" | "video";

  src?: string;
  alt?: string;

  videoSrc?: string;
  caption?: string;
};
<<<<<<< HEAD
=======

export type ListBlockData = {
  type: "list";
  listType: "unordered" | "ordered";
  header?: string;
  items: string[];
};

export type ComparisonBlockData = {
  type: "comparison";
  headers: string[];
  rows: string[][];
};
>>>>>>> 52aa8d1b12a6273e8acc41af023f3aab86b2c126
