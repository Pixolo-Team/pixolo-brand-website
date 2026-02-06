export const blogsSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.pixolotechnologies.com/blogs/#blog",
  name: "Pixolo Technologies Blog",
  url: "https://www.pixolotechnologies.com/blogs",
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
} as const;
