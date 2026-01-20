// Links for pages to redirect
export const URLS = {
  HOME: "/",
  ABOUT: "/about",

  CAREER: "/careers",
  SERVICE: {
    ROOT: "/services",
    ITEM: (title: string) =>
      `/services/${title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}`,
  },
  CONTACT: "/contact",
  PORTFOLIO: "/portfolio",
};
