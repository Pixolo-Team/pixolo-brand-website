// SCRIPTS //
import { EVENTS } from "@/enums/analytics.enum";
import { getDeviceType } from "./device";

/** GET CURRENT VISIBLE SECTION */
export const getCurrentVisibleSection = (): string => {
  const sectionsWithData = document.querySelectorAll<HTMLElement>("[data-section]");
  const midpoint = window.innerHeight / 2;

  for (const section of sectionsWithData) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= midpoint && rect.bottom >= midpoint) {
      return section.dataset.section || "Unknown Section";
    }
  }

  return "Unknown Section";
};

/** Base GA event sender */
export const trackEvent = (eventName: EVENTS, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  const eventParams = {
    page_location: window.location.href,
    page_title: document.title,
    device_type: getDeviceType(),
    current_section: getCurrentVisibleSection(),
    ...params,
  };

  console.log("[GA EVENT]", eventName, eventParams);

  window.gtag("event", eventName, eventParams);
};

/** PAGE VIEW */
export const trackPageView = () => {
  trackEvent(EVENTS.PAGE_VIEW);
};

/** SCROLL TRACKING */
export const setupScrollTracking = () => {
  let fired50 = false;
  let fired90 = false;

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (!fired50 && scrollPercent >= 50) {
      fired50 = true;
      trackEvent(EVENTS.SCROLL_50_PERCENT, { scroll_depth: 50 });
    }

    if (!fired90 && scrollPercent >= 90) {
      fired90 = true;
      trackEvent(EVENTS.SCROLL_90_PERCENT, { scroll_depth: 90 });
    }
  };

  window.addEventListener("scroll", onScroll);
};

/** Setup click tracking of an element */
export const setupClickTracking = (elementId: string, trackingFn: () => void) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", trackingFn);
  }
};

/** CTA CLICKS */
export const trackContactCTAClick = (
  source: "nav" | "footer" | "hero" | "floating" | "mob-menu",
) => {
  trackEvent(EVENTS.CTA_CLICK_CONTACT, {
    button_text: "Contact",
    source,
  });
};

/** WHATSAPP CLICK */
export const trackWhatsappClick = (source: "mob-menu" | "floating") => {
  trackEvent(EVENTS.CTA_CLICK_WHATSAPP, { source });
};

/** CALL CLICK */
export const trackCallClick = (source: "mob-menu" | "home-contact" | "contact-form") => {
  trackEvent(EVENTS.CTA_CLICK_CALL, { source });
};

/** CONTACT FORM */
export const trackContactFormView = () => {
  trackEvent(EVENTS.FORM_VIEW_CONTACT, {
    form_name: "contact_form",
  });
};

/** CONTACT FORM SUBMIT */
export const trackContactFormSubmit = (fieldsFilledCount: number) => {
  trackEvent(EVENTS.FORM_SUBMIT_CONTACT, {
    form_name: "contact_form",
    fields_filled_count: fieldsFilledCount,
  });
};

/** CONTACT FORM ERROR */
export const trackContactFormError = (errorType: string) => {
  trackEvent(EVENTS.FORM_ERROR_CONTACT, {
    form_name: "contact_form",
    error_type: errorType,
  });
};

/** SERVICES */
export const trackServiceInterest = (serviceName: string) => {
  trackEvent(EVENTS.SERVICE_INTEREST, {
    service_name: serviceName,
  });
};

/** SOCIAL / EXTERNAL LINKS */
export const trackSocialLinkClick = (platform: string) => {
  trackEvent(EVENTS.SOCIAL_LINK_CLICK, {
    social_platform: platform,
  });
};

/** EXTERNAL LINKS */
export const trackExternalLinkClick = (url: string) => {
  trackEvent(EVENTS.EXTERNAL_LINK_CLICK, {
    link_url: url,
  });
};

/** CAREERS */
export const trackCareerView = () => {
  trackEvent(EVENTS.CAREER_VIEW);
};

/** FAQ */
export const trackFaqExpand = (question: string) => {
  trackEvent(EVENTS.FAQ_EXPAND, {
    faq_question: question,
    action: "expand",
  });
};

/** FAQ ENGAGEMENT */
export const trackFaqEngagement = (
  question: string,
  category: string,
  action: "expand" | "collapse",
  position: number,
) => {
  trackEvent(EVENTS.FAQ_ENGAGEMENT, {
    faq_question: question,
    faq_category: category,
    action,
    faq_position: position,
  });
};

/** CASE STUDIES */
export const trackCaseStudyView = (name: string, category: string, viewType: "full_page") => {
  trackEvent(EVENTS.CASE_STUDY_VIEW, {
    case_study_name: name,
    case_study_category: category,
    view_type: viewType,
  });
};

/** GLOBAL TYPE */
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, eventParams?: Record<string, any>) => void;
    dataLayer?: any[];
  }
}
