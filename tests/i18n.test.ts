import { describe, expect, it } from "vitest";

import { fallbackInterfaceLocale, resolveInterfaceLocale } from "../lib/i18n";

describe("interface locale fallback", () => {
  it("keeps supported English requests in English", () => {
    expect(resolveInterfaceLocale(["en-GB", "fr"])).toBe("en");
  });

  it("falls back to English without inferring from country or track", () => {
    expect(resolveInterfaceLocale(["pt-BR", "de-DE"])).toBe(
      fallbackInterfaceLocale,
    );
  });

  it("handles missing browser preferences", () => {
    expect(resolveInterfaceLocale([])).toBe("en");
  });
});
