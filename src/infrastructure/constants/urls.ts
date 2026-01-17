// Links for pages to redirect
export const URLS = {
  HOME: "/",

  CAREER: "/careers",
  SERVICE: {
    ROOT: "/services",
    ITEM: (id: string, title: string) =>
      `/services/${id}/${title.toLowerCase().replaceAll(" ", "-")}`,
  },
  CONTACT: "/contact",
  PORTFOLIO: "/portfolio",
};
