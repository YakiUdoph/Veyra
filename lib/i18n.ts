export const interfaceLocales = ["en"] as const;
export type InterfaceLocale = (typeof interfaceLocales)[number];

export const fallbackInterfaceLocale: InterfaceLocale = "en";

export function resolveInterfaceLocale(
  requestedLocales: readonly string[],
): InterfaceLocale {
  const supportsEnglish = requestedLocales.some((locale) => {
    const normalized = locale.trim().toLowerCase();
    return normalized === "en" || normalized.startsWith("en-");
  });

  return supportsEnglish ? "en" : fallbackInterfaceLocale;
}
