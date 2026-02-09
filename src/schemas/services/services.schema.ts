// DATA //
import { serviceDetails } from "@/data/home/services";

const BASE_URL = "https://www.pixolotechnologies.com/services";

// Services JSON-LD
export const pixoloServicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}#itemlist`,
  name: "Pixolo Technologies Services",
  publisher: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  itemListElement: serviceDetails.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${BASE_URL}/${service.slug}`,
  })),
} as const;
