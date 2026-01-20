// TYPE FOR BLOG CONSUMPTION
export type BlogPost = {
  title: string;

  category: {
    label: string;
  };

  author: {
    name: string;
  };

  publishedAt: string;

  hero: {
    image: string;
    alt: string;
  };

  content: BlogBlockData[];
};

export type BlogBlockData = HeadingBlockData | ParagraphBlockData | MediaBlockData;

export type HeadingBlockData = {
  type: "heading";
  level: 2 | 3;
  text: string;
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
