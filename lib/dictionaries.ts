import type { Locale } from "@/middleware";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  cy: () => import("@/dictionaries/cy.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries.en();
}
