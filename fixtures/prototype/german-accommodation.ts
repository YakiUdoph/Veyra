import type { LessonDefinition } from "../../lib/content-engine";

const emptyFixtureReview = {
  authorRef: "prototype-fixture",
  records: [],
} as const;

export const germanAccommodationPrototypeFixture = {
  id: "german-accommodation-interaction-test",
  title: "German accommodation",
  contentSource: "prototype-fixture",
  targetTrackId: "de",
  targetLocale: "de-DE",
  spanishPronunciationLocale: "es-ES",
  instructionalLocale: "en",
  contentVersion: "0.3.0-prototype",
  approvalStatus: "draft",
  audioAssetReferences: [],
  review: emptyFixtureReview,
  situations: [
    {
      id: "housing-details-test",
      title: "Read the context before answering.",
      context:
        "A housing contact shares a few details about a room. Practise identifying the information you would need from the conversation.",
      phrases: [],
      exercises: [
        {
          id: "viewing-day",
          type: "single-select",
          prompt:
            "The test contact says the viewing is on Tuesday. Which detail is stated?",
          options: [
            { id: "viewing-day", label: "The day of the viewing" },
            { id: "monthly-cost", label: "The monthly cost" },
            { id: "room-size", label: "The size of the room" },
          ],
          acceptedOptionId: "viewing-day",
          phraseRefs: [],
          feedback: {
            correct: "Correct. The message states the day of the viewing.",
            incorrect:
              "Not quite. The message gives the viewing day; it does not state a cost or room size.",
            incomplete: "Choose one test answer before checking.",
          },
          review: emptyFixtureReview,
        },
        {
          id: "availability",
          type: "single-select",
          prompt:
            "The test listing says the room is available next month. What information is stated?",
          options: [
            { id: "document", label: "Which document to bring" },
            { id: "availability", label: "When the room is available" },
            { id: "address", label: "The exact street address" },
          ],
          acceptedOptionId: "availability",
          phraseRefs: [],
          feedback: {
            correct: "Correct. The listing states when the room is available.",
            incorrect:
              "Not quite. The listing gives an availability time; it does not identify a document or street address.",
            incomplete: "Choose one test answer before checking.",
          },
          review: emptyFixtureReview,
        },
        {
          id: "clarify-document",
          type: "single-select",
          prompt:
            "The test contact asks you to bring a document but does not name it. What should you clarify?",
          options: [
            {
              id: "pronunciation",
              label: "How to pronounce the contact’s name",
            },
            { id: "document", label: "Which document they mean" },
            { id: "achievement", label: "Which achievement you earned" },
          ],
          acceptedOptionId: "document",
          phraseRefs: [],
          feedback: {
            correct:
              "Correct. The missing information is which document they mean.",
            incorrect:
              "Not quite. The contact’s request is incomplete because the document is not identified.",
            incomplete: "Choose one test answer before checking.",
          },
          review: emptyFixtureReview,
        },
      ],
    },
  ],
} as const satisfies LessonDefinition;
