export const qs = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

export const qsa = (selector: string): NodeListOf<Element> | null => {
  return document.querySelectorAll(selector);
};
