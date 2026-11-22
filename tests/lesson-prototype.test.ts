import { describe, expect, it } from "vitest";

import {
  evaluateAnswer,
  germanAccommodationTestFixture,
  nextQuestionIndex,
} from "../lib/lesson-prototype";

const [firstQuestion] = germanAccommodationTestFixture.questions;

describe("deterministic lesson evaluation", () => {
  it("accepts only the fixture's explicit correct option", () => {
    expect(
      evaluateAnswer(firstQuestion, firstQuestion.correctOptionId),
    ).toEqual({
      status: "correct",
      message: firstQuestion.feedback.correct,
    });
  });

  it("returns deterministic corrective feedback for a listed wrong option", () => {
    const wrongOption = firstQuestion.options.find(
      (option) => option.id !== firstQuestion.correctOptionId,
    );

    expect(evaluateAnswer(firstQuestion, wrongOption?.id ?? "")).toEqual({
      status: "incorrect",
      message: firstQuestion.feedback.incorrect,
    });
  });

  it("rejects an answer that is not part of the fixture", () => {
    expect(evaluateAnswer(firstQuestion, "invented-option")).toEqual({
      status: "invalid",
      message:
        "That answer is not available. Choose one of the listed options.",
    });
  });

  it("advances until the final question and then completes", () => {
    expect(nextQuestionIndex(0, 3)).toBe(1);
    expect(nextQuestionIndex(1, 3)).toBe(2);
    expect(nextQuestionIndex(2, 3)).toBeNull();
  });
});
