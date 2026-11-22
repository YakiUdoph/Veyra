export type LessonOption = Readonly<{
  id: string;
  label: string;
}>;

export type LessonQuestion = Readonly<{
  id: string;
  prompt: string;
  options: readonly LessonOption[];
  correctOptionId: string;
  feedback: Readonly<{
    correct: string;
    incorrect: string;
  }>;
}>;

export type AnswerEvaluation =
  | Readonly<{ status: "correct"; message: string }>
  | Readonly<{ status: "incorrect"; message: string }>
  | Readonly<{ status: "invalid"; message: string }>;

export const germanAccommodationTestFixture = {
  id: "german-accommodation-interaction-test",
  trackLabel: "German accommodation",
  situation:
    "A housing contact shares a few details about a room. Practise identifying the information you would need from the conversation.",
  questions: [
    {
      id: "viewing-day",
      prompt:
        "The test contact says the viewing is on Tuesday. Which detail is stated?",
      options: [
        { id: "viewing-day", label: "The day of the viewing" },
        { id: "monthly-cost", label: "The monthly cost" },
        { id: "room-size", label: "The size of the room" },
      ],
      correctOptionId: "viewing-day",
      feedback: {
        correct: "Correct. The message states the day of the viewing.",
        incorrect:
          "Not quite. The message gives the viewing day; it does not state a cost or room size.",
      },
    },
    {
      id: "availability",
      prompt:
        "The test listing says the room is available next month. What information is stated?",
      options: [
        { id: "document", label: "Which document to bring" },
        { id: "availability", label: "When the room is available" },
        { id: "address", label: "The exact street address" },
      ],
      correctOptionId: "availability",
      feedback: {
        correct: "Correct. The listing states when the room is available.",
        incorrect:
          "Not quite. The listing gives an availability time; it does not identify a document or street address.",
      },
    },
    {
      id: "clarify-document",
      prompt:
        "The test contact asks you to bring a document but does not name it. What should you clarify?",
      options: [
        { id: "pronunciation", label: "How to pronounce the contact’s name" },
        { id: "document", label: "Which document they mean" },
        { id: "achievement", label: "Which achievement you earned" },
      ],
      correctOptionId: "document",
      feedback: {
        correct:
          "Correct. The missing information is which document they mean.",
        incorrect:
          "Not quite. The contact’s request is incomplete because the document is not identified.",
      },
    },
  ] satisfies readonly LessonQuestion[],
} as const;

export function evaluateAnswer(
  question: LessonQuestion,
  selectedOptionId: string,
): AnswerEvaluation {
  if (!question.options.some((option) => option.id === selectedOptionId)) {
    return {
      status: "invalid",
      message:
        "That answer is not available. Choose one of the listed options.",
    };
  }

  if (selectedOptionId === question.correctOptionId) {
    return { status: "correct", message: question.feedback.correct };
  }

  return { status: "incorrect", message: question.feedback.incorrect };
}

export function nextQuestionIndex(
  currentIndex: number,
  questionCount: number,
): number | null {
  const nextIndex = currentIndex + 1;
  return nextIndex < questionCount ? nextIndex : null;
}
