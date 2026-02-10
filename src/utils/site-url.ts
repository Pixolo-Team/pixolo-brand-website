// src/utils/siteUrl.ts

/**
 * Get the site URL
 * @returns {string} The site URL
 */
export const getSiteUrl = () => {
  return import.meta.env.ROOT_URL?.replace(/\/$/, "") || "https://pixolotechnologies.com";
};
