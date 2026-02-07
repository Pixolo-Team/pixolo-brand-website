// CONSTANTS //
import { URLS } from "@/infrastructure/constants/urls.ts";

// Data for the menu
export const menuItems = [
  { name: "Home", url: URLS.HOME },
  { name: "Services", url: URLS.SERVICE.ROOT },
  { name: "Portfolio", url: URLS.PORTFOLIO },
  { name: "Blogs", url: URLS.BLOGS.ROOT },
  { name: "Career", url: URLS.CAREER },
];

// Data for mobile menu
export const mobileMenuItems = [...menuItems, { name: "Contact", url: URLS.CONTACT }];
