import { describe, expect, it } from "vitest";

import { germanAccommodationPrototypeFixture } from "../fixtures/prototype/german-accommodation";
import {
  ContentLifecycleError,
  UnpublishedContentError,
  evaluateExercise,
  getLessonExercises,
  lessonForAudience,
  nextExerciseIndex,
  publicationBlockers,
  transitionLesson,
  validateLessonSchema,
  type LessonDefinition,
  type ReviewRecord,
} from "../lib/content-engine";

const fixture = germanAccommodationPrototypeFixture;
const [firstExercise] = getLessonExercises(fixture);

function approval(
  role: ReviewRecord["role"],
  reviewerRef: string,
): ReviewRecord {
  return {
    role,
    reviewerRef,
    decision: "approved",
    contentVersion: fixture.contentVersion,
    reviewedAt: "2026-11-22T00:00:00.000Z",
    independentFromAuthor: true,
  };
}

function withReviews(records: readonly ReviewRecord[]): LessonDefinition {
  return {
    ...fixture,
    review: { ...fixture.review, records },
  };
}

describe("lesson schema and deterministic scoring", () => {
  it("accepts the explicit draft prototype schema", () => {
    expect(validateLessonSchema(fixture)).toEqual({ valid: true, issues: [] });
    expect(fixture.targetLocale).toBe("de-DE");
    expect(fixture.spanishPronunciationLocale).toBe("es-ES");
    expect(fixture.instructionalLocale).toBe("en");
    expect(fixture.audioAssetReferences).toEqual([]);
  });

  it("rejects malformed exercise answers", () => {
    const malformed = {
      ...fixture,
      situations: [
        {
          ...fixture.situations[0],
          exercises: [{ ...firstExercise, acceptedOptionId: "not-an-option" }],
        },
      ],
    } satisfies LessonDefinition;

    expect(validateLessonSchema(malformed)).toEqual({
      valid: false,
      issues: [
        `Exercise ${firstExercise.id} accepted answer is not an option.`,
      ],
    });
  });

  it("scores incomplete, correct, incorrect, and invalid answers explicitly", () => {
    expect(evaluateExercise(firstExercise, null).status).toBe("incomplete");
    expect(
      evaluateExercise(firstExercise, firstExercise.acceptedOptionId).status,
    ).toBe("correct");
    expect(evaluateExercise(firstExercise, "monthly-cost").status).toBe(
      "incorrect",
    );
    expect(evaluateExercise(firstExercise, "invented-option").status).toBe(
      "invalid",
    );
  });

  it("advances to completion deterministically", () => {
    expect(nextExerciseIndex(0, 3)).toBe(1);
    expect(nextExerciseIndex(1, 3)).toBe(2);
    expect(nextExerciseIndex(2, 3)).toBeNull();
  });
});

describe("content lifecycle and publication access", () => {
  it("rejects skipped and unapproved lifecycle transitions", () => {
    expect(() => transitionLesson(fixture, "approved")).toThrow(
      ContentLifecycleError,
    );
    expect(() => transitionLesson(fixture, "reviewed")).toThrow(
      "independent linguistic approval",
    );
  });

  it("allows reviewed and approved states only with distinct approvals", () => {
    const linguistic = approval("linguistic-reviewer", "test-linguist");
    const reviewed = transitionLesson(withReviews([linguistic]), "reviewed");
    const sameReviewer = {
      ...reviewed,
      review: {
        ...reviewed.review,
        records: [linguistic, approval("content-approver", "test-linguist")],
      },
    };
    const readyForApproval = {
      ...reviewed,
      review: {
        ...reviewed.review,
        records: [
          linguistic,
          approval("content-approver", "test-content-approver"),
        ],
      },
    };

    expect(reviewed.approvalStatus).toBe("reviewed");
    expect(() => transitionLesson(sameReviewer, "approved")).toThrow(
      "Distinct independent",
    );
    expect(transitionLesson(readyForApproval, "approved").approvalStatus).toBe(
      "approved",
    );
  });

  it("fails publication closed when reviewed phrases and audio are absent", () => {
    const approvals = [
      approval("linguistic-reviewer", "test-linguist"),
      approval("content-approver", "test-content-approver"),
    ];
    const approved = {
      ...withReviews(approvals),
      approvalStatus: "approved",
    } satisfies LessonDefinition;

    expect(publicationBlockers(approved)).toContain(
      "At least one reviewed target-language phrase is required.",
    );
    expect(() => transitionLesson(approved, "published")).toThrow(
      "Publication blocked",
    );
  });

  it("supports published and retired states for a complete test-only release", () => {
    const linguistic = approval("linguistic-reviewer", "test-linguist");
    const contentApproval = approval(
      "content-approver",
      "test-content-approver",
    );
    const audioAsset = {
      id: "test-audio",
      phraseId: "test-phrase",
      contentVersion: fixture.contentVersion,
      locale: fixture.targetLocale,
      purpose: "target-pronunciation",
      status: "available",
      assetIdentity: {
        storageKey: "audio/test-audio.ogg",
        version: "test-version",
      },
      assetPath: "/audio/test-audio.ogg",
      checksum: "test-only-checksum",
      speaker: {
        speakerRef: "test-human-speaker",
        locale: fixture.targetLocale,
        recordingMethod: "human-recorded",
        consentEvidenceRef: "test-only-consent-evidence",
      },
      license: {
        evidenceRef: "test-only-license-evidence",
        status: "approved",
        commercialUseApproved: true,
      },
      review: {
        reviewerRef: "test-audio-reviewer",
        status: "approved",
        reviewedAt: "2026-11-23T00:00:00.000Z",
        contentVersion: fixture.contentVersion,
        checksum: "test-only-checksum",
      },
    } as const;
    const approved = {
      ...fixture,
      contentSource: "production-content",
      approvalStatus: "approved",
      audioAssetReferences: [audioAsset],
      review: {
        ...fixture.review,
        records: [linguistic, contentApproval],
      },
      situations: [
        {
          ...fixture.situations[0],
          phrases: [
            {
              id: "test-phrase",
              instructionalText: "Test-only source text",
              targetText: "TEST_ONLY_TARGET_TEXT",
              targetLocale: fixture.targetLocale,
              contentVersion: fixture.contentVersion,
              approvalStatus: "approved",
              audioAssetRef: audioAsset,
              review: {
                authorRef: "test-author",
                records: [linguistic, contentApproval],
              },
            },
          ],
        },
      ],
    } satisfies LessonDefinition;

    const published = transitionLesson(approved, "published");
    expect(publicationBlockers(published)).toEqual([]);
    expect(lessonForAudience(published, "production")).toBe(published);
    expect(transitionLesson(published, "retired").approvalStatus).toBe(
      "retired",
    );
  });

  it("blocks production publication when audio lifecycle evidence is removed", () => {
    const linguistic = approval("linguistic-reviewer", "test-linguist");
    const contentApproval = approval(
      "content-approver",
      "test-content-approver",
    );
    const audioAsset = {
      id: "test-audio",
      phraseId: "test-phrase",
      contentVersion: fixture.contentVersion,
      locale: fixture.targetLocale,
      purpose: "target-pronunciation",
      status: "available",
      assetIdentity: { storageKey: "test", version: "test" },
      assetPath: "/audio/test.ogg",
      checksum: "test-checksum",
      speaker: {
        speakerRef: "test-speaker",
        locale: fixture.targetLocale,
        recordingMethod: "human-recorded",
        consentEvidenceRef: "test-consent",
      },
      license: {
        evidenceRef: "",
        status: "pending",
        commercialUseApproved: false,
      },
      review: {
        reviewerRef: null,
        status: "unreviewed",
        reviewedAt: null,
        contentVersion: null,
        checksum: null,
      },
    } as const;
    const lesson = {
      ...fixture,
      contentSource: "production-content",
      approvalStatus: "approved",
      audioAssetReferences: [audioAsset],
      review: { ...fixture.review, records: [linguistic, contentApproval] },
      situations: [
        {
          ...fixture.situations[0],
          phrases: [
            {
              id: "test-phrase",
              instructionalText: "Test-only source text",
              targetText: "TEST_ONLY_TARGET_TEXT",
              targetLocale: fixture.targetLocale,
              contentVersion: fixture.contentVersion,
              approvalStatus: "approved",
              audioAssetRef: audioAsset,
              review: {
                authorRef: "test-author",
                records: [linguistic, contentApproval],
              },
            },
          ],
        },
      ],
    } satisfies LessonDefinition;

    const blockers = publicationBlockers(lesson);
    expect(blockers).toContain(
      "Phrase test-phrase: Approved commercial-use license evidence is required.",
    );
    expect(blockers).toContain(
      "Phrase test-phrase: Qualified review of the exact audio asset is required.",
    );
    expect(() => transitionLesson(lesson, "published")).toThrow(
      "Publication blocked",
    );
  });

  it("rejects draft fixtures from production access", () => {
    expect(() => lessonForAudience(fixture, "production")).toThrow(
      UnpublishedContentError,
    );
    expect(lessonForAudience(fixture, "prototype")).toBe(fixture);
  });
});
