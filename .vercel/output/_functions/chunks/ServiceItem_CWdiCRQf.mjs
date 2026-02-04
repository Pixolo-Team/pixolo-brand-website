import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent } from './astro/server_DWfE4s2A.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_C5qvMlAd.mjs';

const $$Astro$1 = createAstro("https://www.pixolotechnologies.com");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { badgeText } = Astro2.props;
  return renderTemplate`<!-- Tool Badge For Service-->${maybeRenderHead()}<div class="border-n-800 rounded-3xl border px-4 py-2.5"> <!-- Badge Text --> <p class="text-n-950 text-xs leading-tight md:text-sm"> ${badgeText} </p> </div>`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/components/ui/Badge.astro", void 0);

const $$Astro = createAstro("https://www.pixolotechnologies.com");
const $$ServiceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceItem;
  const {
    imageName = "/images/services/product-planning.jpg",
    title = "Design",
    tags = ["Website", "Mobile", "UI", "App"]
  } = Astro2.props;
  return renderTemplate`<!-- Service Item -->${maybeRenderHead()}<div class="flex w-full cursor-pointer flex-col gap-4 md:gap-6 lg:gap-7 2xl:max-w-[500px]"> <!-- Service Image --> <div class="border-n-300 h-[400px] w-full overflow-hidden rounded-4xl border md:h-[450px]"> ${renderComponent($$result, "Image", $$Image, { "src": imageName, "alt": title, "width": 490, "height": 450, "class": "h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-[1.2]", "loading": "lazy", "decoding": "async" })} </div> <!-- Content --> <div class="anim-fade-in-up flex flex-col gap-3 transition-all duration-300 md:gap-4 lg:gap-6"> <!-- Title --> <p class="text-n-950 text-2xl leading-tight font-normal md:text-4xl"> ${title} </p> <!-- Tool Badges --> <div class="flex flex-wrap gap-2.5"> <!-- Iterating Over A String Array - tags --> ${tags.map((tag) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "badgeText": tag })}`)} </div> </div> </div>`;
}, "/Users/pixolodeveloper/Documents/Frontend/pixolo-brand-website/src/components/ui/ServiceItem.astro", void 0);

export { $$ServiceItem as $ };
