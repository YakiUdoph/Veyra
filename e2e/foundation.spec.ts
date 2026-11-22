import { expect, test } from "@playwright/test";

test.describe("local foundation", () => {
  test("renders truthful prototype content without horizontal overflow", async ({
    page,
  }) => {
    const externalRequests: string[] = [];
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (!["127.0.0.1", "localhost"].includes(url.hostname)) {
        externalRequests.push(request.url());
      }
    });

    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Prepare for the conversations that shape a new place.",
      }),
    ).toBeVisible();
    await expect(
      page.getByText("No account, payment, personal data", { exact: false }),
    ).toBeVisible();
    await expect(page.getByRole("article")).toHaveCount(8);

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
    expect(externalRequests).toEqual([]);
  });

  test("supports keyboard navigation and visible focus", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to content" });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
    const outlineWidth = await skipLink.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).outlineWidth),
    );
    expect(outlineWidth).toBeGreaterThan(0);

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "View planned tracks" }),
    ).toBeFocused();
  });

  test("honors reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
    const transitionDuration = await page
      .getByRole("link", { name: "View planned tracks" })
      .evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).transitionDuration),
      );
    expect(transitionDuration).toBeLessThanOrEqual(0.001);
  });
});
