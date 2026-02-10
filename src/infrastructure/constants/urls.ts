// API URL
export const API_URL = "http://pixoloproductions.com/api/pixolo-website/section-content.php?key=";

// Links for pages to redirect
export const URLS = {
  HOME: "/",
  ABOUT: "/about",
  CAREER: "/careers",
  SERVICE: {
    ROOT: "/services",
    ITEM: (slug: string) => `/services/${slug}`,
  },
  CONTACT: "/contact",
  CASE_STUDIES: {
    ROOT: "/case-studies",
    ITEM: (slug: string) => `/case-studies/${slug}`,
  },
  PORTFOLIO: {
    ROOT: "/portfolio",
    ITEM: (pageTitle: string) => `/portfolio/${pageTitle.toLowerCase().replaceAll(" ", "-")}`,
  },
  BLOGS: {
    ROOT: "/blogs",
    ITEM: (slug: string) => `/blogs/${slug}`,
  },
};
