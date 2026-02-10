// src/utils/siteUrl.ts

/**
 * Get the site URL
 * @returns {string} The site URL
 */
export const getSiteUrl = () => {
  return import.meta.env.LOCAL_SITE_URL?.replace(/\/$/, "") || "https://pixolotechnologies.com";
};
