import { expect, test, type Page } from "@playwright/test";

async function begin(page: Page) {
  await page.goto("/prototype/german-accommodation");
  await page.getByRole("button", { name: "Begin test interaction" }).click();
}

async function answer(page: Page, label: string) {
  await page.getByRole("radio", { name: label }).check();
  await page.getByRole("button", { name: "Check answer" }).click();
}

test.describe("local lesson prototype", () => {
  test("exposes an accessible unavailable-audio state without substitution", async ({
    page,
  }) => {
    await page.goto("/prototype/german-accommodation");

    const player = page.getByRole("region", { name: "Pronunciation audio" });
    await expect(player).toBeVisible();
    await expect(
      player.getByText(
        "No licensed, locale-matched, reviewed pronunciation recording is available for this test fixture.",
      ),
    ).toBeVisible();
    await expect(
      player.getByRole("button", { name: "Play audio", exact: true }),
    ).toBeDisabled();
    await expect(
      player.getByRole("button", { name: "Replay audio" }),
    ).toBeDisabled();
    await expect(player.locator("audio")).toHaveCount(0);

    await expect(player.getByRole("heading", { level: 2 })).toHaveText(
      "Pronunciation audio",
    );
  });

  test("completes and restarts the deterministic flow", async ({ page }) => {
    await begin(page);

    await answer(page, "The day of the viewing");
    await expect(page.getByRole("status")).toContainText("Correct");
    await page.getByRole("button", { name: "Next question" }).click();

    await answer(page, "When the room is available");
    await page.getByRole("button", { name: "Next question" }).click();

    await answer(page, "Which document they mean");
    await page.getByRole("button", { name: "Finish interaction" }).click();

    const completionHeading = page.getByRole("heading", {
      name: "Local interaction complete.",
    });
    await expect(completionHeading).toBeVisible();
    await expect(completionHeading).toBeFocused();
    await expect(
      page.getByText("No result, answer history", { exact: false }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Restart interaction" }).click();
    await expect(
      page.getByRole("heading", { name: "Read the context before answering." }),
    ).toBeVisible();
  });

  test("shows an error and deterministic incorrect feedback", async ({
    page,
  }) => {
    await begin(page);

    const progress = page.getByRole("progressbar", {
      name: "Lesson progress: question 1 of 3",
    });
    await expect(progress).toHaveAttribute("value", "1");
    await expect(progress).toHaveAttribute("max", "3");

    await page.getByRole("button", { name: "Check answer" }).click();
    await expect(page.locator(".answer-status[role='alert']")).toContainText(
      "Choose one test answer before checking.",
    );

    const incorrectOption = page
      .locator("label.answer-option")
      .filter({ hasText: "The monthly cost" });
    const correctOption = page
      .locator("label.answer-option")
      .filter({ hasText: "The day of the viewing" });

    await page.getByRole("radio", { name: "The monthly cost" }).check();
    await expect(incorrectOption).toHaveClass(/is-selected/);
    await expect(
      incorrectOption.getByText("Selected", { exact: true }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Check answer" }).click();
    await expect(incorrectOption).toHaveClass(/is-incorrect/);
    await expect(
      incorrectOption.getByText("Selected — incorrect", { exact: true }),
    ).toBeVisible();
    await expect(correctOption).toHaveClass(/is-correct/);
    await expect(
      correctOption.getByText("Correct answer", { exact: true }),
    ).toBeVisible();
    await expect(page.getByRole("status")).toContainText(
      "The message gives the viewing day",
    );
    const nextQuestion = page.getByRole("button", { name: "Next question" });
    await expect(nextQuestion).toBeEnabled();
    await expect(nextQuestion).toBeInViewport();
    const nextQuestionBounds = await nextQuestion.boundingBox();
    expect(nextQuestionBounds).not.toBeNull();
    expect(
      (nextQuestionBounds?.y ?? 0) + (nextQuestionBounds?.height ?? 0),
    ).toBeLessThanOrEqual(await page.evaluate(() => window.innerHeight));

    await nextQuestion.click();
    await expect(
      page.getByRole("progressbar", {
        name: "Lesson progress: question 2 of 3",
      }),
    ).toHaveAttribute("value", "2");
  });

  test("supports keyboard use and stays local at the configured viewport", async ({
    page,
  }) => {
    const externalRequests: string[] = [];
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (!["127.0.0.1", "localhost"].includes(url.hostname)) {
        externalRequests.push(request.url());
      }
    });

    await page.goto("/prototype/german-accommodation");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to lesson" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#lesson-content$/);

    await page.getByRole("button", { name: "Begin test interaction" }).focus();
    await page.keyboard.press("Enter");
    await page.getByRole("radio", { name: "The day of the viewing" }).focus();
    await page.keyboard.press("Space");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("button", { name: "Check answer" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("status")).toContainText("Correct");

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
    expect(externalRequests).toEqual([]);
  });
});
