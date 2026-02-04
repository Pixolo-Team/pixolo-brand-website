import { a as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, b as renderTemplate, c as createAstro, e as addAttribute } from '../chunks/astro/server_DWfE4s2A.mjs';
import { a as $$ToolBadge, c as $$Icon, b as $$RoundedButton, g as $$ThemeImage, U as URLS, $ as $$Layout } from '../chunks/Layout_V4-FK_Ih.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C5qvMlAd.mjs';
import { B as Ball } from '../chunks/3d-ball_Dw9s7L9E.mjs';
import { $ as $$ServiceItem } from '../chunks/ServiceItem_CWdiCRQf.mjs';
import 'clsx';
import { g as getPortfoliosRequest } from '../chunks/portfolio.api_DarbD74-.mjs';
export { renderers } from '../renderers.mjs';

const decodePortfolioIds = (encoded) => {
  if (!encoded) return [];
  try {
    const decoded = atob(encoded);
    return decoded.split(",").map((id) => Number(id)).filter(Boolean);
  } catch {
    return [];
  }
};

const portfolioHeroDetails = {
  badgeTitle: "Crafted Highlights",
  title: "A showcase of the work that defines our creativity and craft",
  subTitle: "A dynamic showcase where every build sparks innovation"
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Hero Section -->${maybeRenderHead()}<section> <div id="hero-wrapper" class="relative container mx-auto flex flex-col items-center px-6 pt-24 pb-16 text-center md:gap-9 md:py-30 lg:gap-12 xl:pt-52 2xl:pt-64"> <!-- Large 3D Ball  --> ${renderComponent($$result, "Image", $$Image, { "id": "big-marble", "src": Ball, "alt": "Big Marble", "class": "absolute top-[278px] left-[65px] z-[-1] w-9 md:top-[400px] md:left-[200px] md:h-15 md:w-20 lg:h-16 lg:w-20 xl:top-[330px] xl:left-[120px]" })} <!-- Small 3D Ball --> ${renderComponent($$result, "Image", $$Image, { "id": "small-marble", "src": Ball, "alt": "Small Marble", "class": "absolute top-[145px] left-[252.47px] z-[-1] w-5 rotate-[-20deg] md:top-[450px] md:left-[780px] md:h-10 md:w-12 lg:h-11 lg:w-12 xl:top-[300px] xl:left-[1200px]" })} <!-- Content --> <div class="flex flex-col items-center gap-8 md:gap-9 lg:gap-10"> <!-- Tool Badge --> <div class="flex flex-col items-center gap-8 md:gap-9 lg:gap-10"> ${renderComponent($$result, "ToolBadge", $$ToolBadge, { "icon": "comment", "text": portfolioHeroDetails.badgeTitle })} </div> <!-- Headings --> <div class="flex flex-col gap-3.5 lg:gap-7"> <!-- Title --> <p class="word-container text-3xl leading-tight font-medium tracking-[-1] md:text-5xl lg:text-7xl" data-animate-word> ${portfolioHeroDetails.title} </p> <!-- SubTitle --> <p class="word-container bg-[linear-gradient(90deg,var(--blue-500)_0%,var(--blue-300)_100%)] bg-clip-text text-sm leading-tight tracking-normal text-transparent md:text-lg lg:text-2xl" data-animate-word> ${portfolioHeroDetails.subTitle} </p> </div> </div> </div> </section> ${renderScript($$result, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/sections/portfolio/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/sections/portfolio/Hero.astro", void 0);

const $$Astro$5 = createAstro("https://www.pixolotechnologies.com");
const $$SliderArrows = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SliderArrows;
  const { prevId = "slide-prev", nextId = "slide-next" } = Astro2.props;
  return renderTemplate`<!-- Arrows Wrapper -->${maybeRenderHead()}<div class="text-n-700 flex justify-center gap-8 self-end text-xl md:px-5 lg:px-6"> <!-- Left Button --> <button${addAttribute(prevId, "id")} aria-label="Previous Slide" class="hover:border-n-700 flex size-8 cursor-pointer items-center justify-center gap-10 rounded-full border border-transparent transition-all md:size-10"> <!-- Left Arrow icon  --> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-arrow", "class": "size-5 rotate-180 md:size-6" })} </button> <!-- Right Button --> <button${addAttribute(nextId, "id")} aria-label="Next Slide" class="hover:border-n-700 flex size-8 cursor-pointer items-center justify-center gap-10 rounded-full border border-transparent transition-all md:size-10"> <!-- Right Arrow icon --> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-arrow", "class": "size-5 md:size-6" })} </button> </div>`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/components/ui/SliderArrows.astro", void 0);

const portfolioIndustryDetails = {
  badgeTitle: "Crafted Experiences",
  title: "Industries Driving Our Impact",
  // Industries card items
  industryItems: [
    {
      title: "Education, Learning & Institutions",
      image: "/images/portfolio-industries/education.jpg",
      tags: [
        "Sunalis Classes",
        "INQ App",
        "QG App",
        "SAI International Website",
        "SAI School App",
        "Chinook Driving Academy"
      ]
    },
    {
      title: "Travel, Hospitality & Experiences",
      image: "/images/portfolio-industries/travel.jpg",
      tags: [
        "Cola Beach Sunset Bay",
        "DTIX Website",
        "DTIX App",
        "Phat Maps App",
        "Eighty Days App",
        "Eighty Days Admin Panel",
        "Eighty Days Landing Website"
      ]
    },
    {
      title: "Real Estate, Infrastructure & Communities",
      image: "/images/portfolio-industries/real-estate.jpg",
      tags: ["Golden Design Interiors", "Neelsidhi", "Ekonomo Housing Society"]
    },
    {
      title: "Finance, Wealth & FinTech",
      image: "/images/portfolio-industries/finance.jpg",
      tags: [
        "RichMonks Website",
        "RichMonks App",
        "Dovetail – Wealth Manager",
        "My E-Rewards Website",
        "My E-Rewards App"
      ]
    },
    {
      title: "Healthcare, Wellness & Lifestyle",
      image: "/images/portfolio-industries/healthcare.jpg",
      tags: [
        "Project Now App",
        "Project Now Diet Maker",
        "Project Now Admin Panel",
        "Pango Website"
      ]
    },
    {
      title: "Sports, Fitness & Academies",
      image: "/images/portfolio-industries/sports.jpg",
      tags: [
        "Sprinters Sports Club",
        "Conscient Sports (FC Barca)",
        "Conscient Sports Admin Panel",
        "Conscient Sports Admin App"
      ]
    },
    {
      title: "Marketing, Campaigns & Brand Activations",
      image: "/images/portfolio-industries/marketing.jpg",
      tags: [
        "CEAT",
        "Too Yumm",
        "Reliance Digital AI Master Class",
        "Reliance Digital – Admin Panel"
      ]
    }
  ]
};

const $$Industries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Portfolio Industries Section -->${maybeRenderHead()}<section> <!-- Container --> <div class="container mx-auto flex flex-col justify-center gap-9 px-6 py-8 md:gap-12 md:px-0 md:py-12 lg:gap-14 lg:px-2 lg:py-16"> <!-- Tool Badge and Heading --> <div class="flex flex-col items-center gap-3.5 text-center md:gap-4 lg:gap-3.5"> <!-- Tool Badge --> <div class="flex flex-col items-center gap-8 md:gap-9 lg:gap-10"> ${renderComponent($$result, "ToolBadge", $$ToolBadge, { "icon": "comment", "text": portfolioIndustryDetails.badgeTitle })} </div> <!-- Heading --> <p class="text-n-950 text-3xl leading-tight font-normal tracking-[-0.02em] md:text-5xl lg:text-6xl"> ${portfolioIndustryDetails.title} </p> </div> <!-- Cards and arrows --> <div class="group relative flex flex-col gap-8 md:gap-10"> <!-- Cards --> <div id="industry-slider" class="embla__viewport hide-scrollbar overflow-hidden"> <!-- Embla container --> <div class="embla__container flex gap-6"> <!-- Iterating on Industries --> ${portfolioIndustryDetails.industryItems.map((industryItem) => renderTemplate`<div class="flex w-full max-w-[490px] shrink-0 md:w-[490px]">  ${renderComponent($$result, "ServiceItem", $$ServiceItem, { "title": industryItem.title, "imageName": industryItem.image, "tags": industryItem.tags })} </div>`)} </div> </div> <!-- Arrows --> ${renderComponent($$result, "SliderArrows", $$SliderArrows, {})} </div> </div> </section> <!-- Slider working logic --> ${renderScript($$result, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/sections/portfolio/Industries.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/sections/portfolio/Industries.astro", void 0);

const $$Astro$4 = createAstro("https://www.pixolotechnologies.com");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tagName } = Astro2.props;
  return renderTemplate`<!-- Tag -->${maybeRenderHead()}<div class="border-n-500 rounded-3xl border-[0.7px] px-2.5 py-1"> <!-- Tag Content --> <p class="text-n-700 text-center text-xs leading-tight font-normal">${tagName}</p> </div>`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/components/portfolio/showcase/Tag.astro", void 0);

const $$Astro$3 = createAstro("https://www.pixolotechnologies.com");
const $$ProjectShowcaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectShowcaseCard;
  const {
    id = "",
    name,
    image,
    title,
    subTitle,
    description,
    date = "",
    tagItems,
    buttonOneText,
    buttonTwoText,
    buttonOneClick = "",
    buttonTwoClick = ""
  } = Astro2.props;
  return renderTemplate`<!-- Project Card -->${maybeRenderHead()}<div id="portfolio-showcase-project-card"${addAttribute(`flex flex-col group-data-[view=list]:md:flex-row gap-3.5 group-data-[view=list]:md:gap-7 group-data-[view=list]:lg:gap-10 group-data-[view=list]:xl:gap-12 group-data-[view=grid]:lg:gap-5`, "class")}> <!-- Project Card Image --> <div${addAttribute(`project-card-image w-full rounded-3xl overflow-hidden group-data-[view=list]:md:flex-1 group-data-[view=list]:md:h-auto`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": name, "width": 327, "height": 238, "class": "h-full w-full object-contain", "loading": "lazy" })} </div> <!-- Content --> <div class="flex flex-1 flex-col justify-between gap-12 group-data-[view=grid]:px-1 group-data-[view=grid]:md:px-2 group-data-[view=grid]:lg:px-4"> <!-- Details Wrap --> <div class="flex flex-col gap-7 group-data-[view=grid]:gap-5 group-data-[view=grid]:md:gap-2 lg:gap-8 group-data-[view=grid]:lg:gap-6"> <!-- Header --> <div class="project-card-header flex flex-col gap-2 md:gap-3"> <!-- Title --> <p class="text-n-950 text-2xl leading-tight font-normal md:text-3xl lg:text-4xl"> ${name} </p> <!-- Tags --> <div class="flex flex-wrap gap-2 md:gap-2.5"> ${tagItems.map((tagItem) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tagName": tagItem })}`)} </div> </div> <!-- About --> <div class="project-card-content flex flex-col gap-4 md:gap-6 lg:gap-7"> <!-- SubTitle --> ${title && renderTemplate`<p class="text-n-700 text-sm leading-tight font-medium md:text-base lg:text-lg"> ${title} </p>`} <!-- Description --> <p class="text-n-600 text-xs leading-tight font-normal md:text-sm lg:text-base"> ${subTitle} </p> ${date !== "" && // Date
  renderTemplate`<p class="text-n-700 text-xs leading-tight font-normal md:text-sm">${date}</p>`} </div> </div> <!-- Buttons --> <div class="project-card-buttons flex flex-row gap-3.5 group-data-[view=grid]:gap-4 md:gap-4"> <!-- Primary Button --> ${renderComponent($$result, "RoundedButton", $$RoundedButton, { "buttonText": buttonOneText, "onClick": buttonOneClick })} <!-- Secondary Button --> ${renderComponent($$result, "RoundedButton", $$RoundedButton, { "buttonText": buttonTwoText, "onClick": buttonTwoClick, "variant": "secondary" })} </div> </div> </div>`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/components/portfolio/showcase/ProjectShowcaseCard.astro", void 0);

const $$Astro$2 = createAstro("https://www.pixolotechnologies.com");
const $$MiniProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MiniProjectCard;
  const {
    id = "",
    title,
    tagItems,
    date = "",
    btnOneText,
    btnTwoText,
    image,
    buttonOneClick = "",
    buttonTwoClick = ""
  } = Astro2.props;
  return renderTemplate`<!-- MiniProjectCard Component -->${maybeRenderHead()}<div${addAttribute(id, "id")} class="flex h-full w-full flex-col gap-2.5 md:gap-4 lg:gap-6"> <!-- Image part --> <div class="h-full overflow-hidden rounded-2xl"> <!-- Card Image --> ${renderComponent($$result, "ThemeImage", $$ThemeImage, { "light": image, "dark": image, "alt": title, "class": "h-full w-full object-contain", "width": 400, "height": 250 })} </div> <!-- Content wrap --> <div class="flex flex-1 flex-col justify-between gap-7 md:gap-9 lg:gap-10"> <!-- About wrap --> <div class="flex flex-col gap-4"> <!-- Header-section --> <div class="flex flex-col gap-2"> <!-- Title --> <p class="text-lg leading-tight font-normal md:text-xl lg:text-2xl">${title}</p> <!-- Badge wrap --> <div class="flex flex-row flex-wrap gap-1.5 gap-y-2"> ${tagItems.map((tagItem) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tagName": tagItem })}`)} </div> </div> ${date !== "" && // Date
  renderTemplate`<p class="text-n-700 text-sm font-normal">${date}</p>`} </div> <!-- Cta wrap --> <div class="flex flex-row gap-3.5"> <!-- Primary Button --> ${renderComponent($$result, "RoundedButton", $$RoundedButton, { "buttonText": btnOneText, "onClick": buttonOneClick })} <!-- Secondary Button --> ${renderComponent($$result, "RoundedButton", $$RoundedButton, { "buttonText": btnTwoText, "onClick": buttonTwoClick, "variant": "secondary" })} </div> </div> </div>`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/components/portfolio/showcase/MiniProjectCard.astro", void 0);

const portfolioShowcaseDetails = {
  // Section Header
  sectionHeader: {
    badgeIcon: "package",
    badgeTitle: "Crafted Experiences",
    title: "A Showcase of Vision Turned Visual"
  }};

const $$Astro$1 = createAstro("https://www.pixolotechnologies.com");
const $$Showcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Showcase;
  const { clientSpecificPortfolios } = Astro2.props;
  const portfolioItems = await getPortfoliosRequest();
  const isCuratedView = clientSpecificPortfolios.length > 0;
  const filteredPortfolioItems = isCuratedView ? clientSpecificPortfolios.map((id) => portfolioItems.find((item) => Number(item.id) === id)).filter(Boolean) : portfolioItems;
  return renderTemplate`<!-- Portfolio Showcase Section -->${maybeRenderHead()}<section id="showcase-section"> <!-- Container --> <div class="container mx-auto flex flex-col items-center justify-center gap-8 px-6 py-16 md:gap-11 md:py-20 lg:gap-14 lg:py-16"> <!-- Header --> <div class="flex flex-col items-center justify-center gap-4"> <!-- Toolbadge --> <div class="tool-badge"> ${renderComponent($$result, "ToolBadge", $$ToolBadge, { "icon": portfolioShowcaseDetails.sectionHeader.badgeIcon, "text": portfolioShowcaseDetails.sectionHeader.badgeTitle })} </div> <!-- Title --> <p id="header-text" class="text-n-950 text-center text-2xl leading-tight font-normal tracking-[-2%] md:text-4xl lg:text-6xl"> ${portfolioShowcaseDetails.sectionHeader.title} </p> </div> <!-- Portfolio Wrap --> <div class="flex max-w-full flex-col gap-10 md:gap-24 lg:gap-32"> <!-- Portfolio Project Tiles --> <div class="flex flex-col gap-10"> <!-- Tiles --> <div class="hidden justify-end gap-4 px-8 md:flex lg:gap-5"> <!-- List Icon Button--> <button id="listIconBtn" class="cursor-pointer"> <!-- Icon --> ${renderComponent($$result, "Icon", $$Icon, { "name": "list", "class": `text-n-500 size-5 lg:size-6 hover:scale-120 transition duration-200 ease-in-out` })} </button> <!-- Grid Icon Button--> <button id="gridIconBtn" class="cursor-pointer"> <!-- Icon --> ${renderComponent($$result, "Icon", $$Icon, { "name": "grid", "class": `size-5 lg:size-6 hover:scale-120 transition duration-200 ease-in-out` })} </button> </div> <!-- Portfolio Cards Wrap --> <div id="portfolio-project-cards" data-view="list"${addAttribute(`group grid grid-cols-1 data-[view=grid]:md:grid-cols-2 gap-10`, "class")}> ${filteredPortfolioItems.map((projectCardItem) => {
    const shouldRender = isCuratedView ? true : projectCardItem?.show_in_home === "TRUE" && projectCardItem?.is_highlight === "TRUE";
    if (!shouldRender) return null;
    return renderTemplate`${renderComponent($$result, "ProjectShowcaseCard", $$ProjectShowcaseCard, { "name": projectCardItem.brand_name, "image": projectCardItem.thumbnail_image ? projectCardItem.thumbnail_image : "/images/default-showcase-project-image.jpg", "title": projectCardItem.title, "subTitle": projectCardItem.subtitle, "description": projectCardItem.subtitle, "tagItems": projectCardItem.badges, "buttonOneText": "Visit Website", "buttonTwoText": "Show Project", "buttonOneClick": "", "buttonTwoClick": `window.location.href='${URLS.PORTFOLIO.ITEM(projectCardItem.title)}'` })}`;
  })} </div> </div> <!-- Other Projects Wrap --> ${!isCuratedView && renderTemplate`<div id="portfolio-mini-project-cards" data-view="list" class="group embla flex flex-col gap-8 overflow-hidden md:gap-12 lg:gap-16">  <div class="flex flex-col gap-5 md:gap-6 lg:gap-7">  <p class="text-n-950 text-base leading-tight font-normal md:text-2xl group-data-[view=list]:md:text-xl group-data-[view=list]:lg:text-2xl">
Other Projects
</p>  <div id="showcase-slider" class="embla__viewport">  <div class="embla__container flex gap-6">  ${filteredPortfolioItems.map((cardItem) => {
    return cardItem?.show_in_home === "TRUE" && cardItem?.is_highlight === "FALSE" && // Mini Project Cards
    renderTemplate`<div class="embla__slide w-full shrink-0 sm:max-w-[328px] lg:max-w-[412px]"> ${renderComponent($$result, "MiniProjectCard", $$MiniProjectCard, { "title": cardItem.brand_name, "tagItems": cardItem.badges, "image": cardItem.thumbnail_image ? cardItem.thumbnail_image : "/images/default-showcase-project-image.jpg", "btnOneText": "Visit Website", "btnTwoText": "Show Project", "buttonOneClick": "", "buttonTwoClick": `window.location.href='${URLS.PORTFOLIO.ITEM(cardItem.title)}'` })} </div>`;
  })} </div> </div> </div>  <div class="flex w-full items-center justify-between gap-6">  <div class="flex-1"></div>  <div class="bg-n-500 h-[2px] w-24 overflow-hidden rounded-2xl md:w-36 lg:w-96"> <div id="embla__progress__bar" class="h-full w-0 bg-blue-500"></div> </div>  <div class="flex flex-1 justify-end"> ${renderComponent($$result, "SliderArrows", $$SliderArrows, {})} </div> </div> </div>`} </div> </div> </section> ${renderScript($$result, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/sections/portfolio/Showcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/sections/portfolio/Showcase.astro", void 0);

const $$Astro = createAstro("https://www.pixolotechnologies.com");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const encodedPortfolios = Astro2.url.searchParams.get("p");
  const clientSpecificPortfolios = decodePortfolioIds(encodedPortfolios);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Industries", $$Industries, {})} ${renderComponent($$result2, "Showcase", $$Showcase, { "clientSpecificPortfolios": clientSpecificPortfolios })} ` })}`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/pages/portfolio/index.astro", void 0);

const $$file = "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
