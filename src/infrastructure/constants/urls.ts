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
  CASE_STUDIES: {
    ROOT: "/case-studies",
    ITEM: (pageTitle: string) => `/case-studies/${pageTitle.toLowerCase().replaceAll(" ", "-")}`,
  },
  PORTFOLIO: "/portfolio",
};
