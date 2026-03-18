type DataLayerValue = string | number | boolean;

type DataLayerPayload = {
  event: string;
  [key: string]: DataLayerValue | undefined;
};

declare global {
  interface Window {
    dataLayer: DataLayerPayload[];
  }
}

function pushDataLayer(payload: DataLayerPayload) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

type TrackCommonParams = {
  scenario_slug: string;
  link_url?: string;
  link_text?: string;
  location: string;
};

type InteractionType = "cta" | "context_link";

type GlobalTrackParams = {
  interactionType: InteractionType;
  location: string;
  linkUrl?: string;
  linkText?: string;
};

function normalizeText(text: string | null | undefined) {
  if (!text) {
    return "";
  }

  return text.replace(/\s+/g, " ").trim();
}

function getScenarioSlugFromPath(pathname: string) {
  const match = pathname.match(/\/biblioterapia\/scenariusze\/([^/?#]+)/);
  return match?.[1] ?? "global";
}

function resolveInteractionType(element: HTMLElement): InteractionType | null {
  if (element.closest('[data-track-local="true"]')) {
    return null;
  }

  const tagName = element.tagName.toLowerCase();
  const className =
    typeof element.className === "string" ? element.className.toLowerCase() : "";
  const linkText = normalizeText(element.textContent).toLowerCase();

  const isButton = tagName === "button";
  const hasButtonLikeClass =
    className.includes("btn") ||
    className.includes("button") ||
    className.includes("inline-flex") ||
    className.includes("rounded") ||
    className.includes("bg-");

  const hasCtaLikeText =
    /(kup|zamów|zobacz|pobierz|czytaj|dowiedz|więcej|sprawdź|przejdź)/i.test(linkText);

  if (
    tagName === "a" &&
    element.closest("article p, article li, main p, main li") &&
    !hasButtonLikeClass
  ) {
    return "context_link";
  }

  if (isButton || hasButtonLikeClass || hasCtaLikeText) {
    return "cta";
  }

  return null;
}

function trackGlobalClick(params: GlobalTrackParams) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const scenarioSlug = getScenarioSlugFromPath(pathname);

  if (params.interactionType === "cta") {
    trackCtaClick({
      scenario_slug: scenarioSlug,
      location: params.location,
      link_url: params.linkUrl,
      link_text: params.linkText,
    });
    return;
  }

  trackContextLinkClick({
    scenario_slug: scenarioSlug,
    location: params.location,
    link_url: params.linkUrl,
    link_text: params.linkText,
  });
}

export function trackGlobalInteraction(element: HTMLElement) {
  const interactionType = resolveInteractionType(element);

  if (!interactionType) {
    return;
  }

  const tagName = element.tagName.toLowerCase();
  const href =
    tagName === "a" ? (element as HTMLAnchorElement).href || undefined : undefined;
  const text = normalizeText(element.textContent) || undefined;

  trackGlobalClick({
    interactionType,
    location: "global_click",
    linkUrl: href,
    linkText: text,
  });
}

export function trackGlobalInteractionFromTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const interactiveElement = target.closest("a, button") as HTMLElement | null;

  if (!interactiveElement) {
    return;
  }

  trackGlobalInteraction(interactiveElement);
}

export function trackCtaClick(params: TrackCommonParams) {
  pushDataLayer({
    event: "cta_click",
    interaction_type: "cta",
    scenario_slug: params.scenario_slug,
    location: params.location,
    link_url: params.link_url,
    link_text: params.link_text,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

export function trackContextLinkClick(params: TrackCommonParams) {
  pushDataLayer({
    event: "context_link_click",
    interaction_type: "context_link",
    scenario_slug: params.scenario_slug,
    location: params.location,
    link_url: params.link_url,
    link_text: params.link_text,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}
