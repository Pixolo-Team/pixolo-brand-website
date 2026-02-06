type PixoloBlogPostingInputData = {
  title: string;
  description: string;
  image: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
};

/** Generate BlogPosting JSON-LD */
export const getPixoloBlogPostingSchema = ({
  title,
  description,
  image,
  authorName,
  datePublished,
  dateModified,
}: PixoloBlogPostingInputData) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `https://www.pixolotechnologies.com/blogs/${title.toLowerCase().replaceAll(" ", "-")}/#blogposting`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.pixolotechnologies.com/blogs/${title.toLowerCase().replaceAll(" ", "-")}`,
  },
  headline: title,
  description,
  image,
  author: {
    "@type": "Person",
    name: authorName,
  },
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  isPartOf: {
    "@id": "https://www.pixolotechnologies.com/blogs/#blog",
  },
  datePublished,
  dateModified: dateModified ?? datePublished,
});
