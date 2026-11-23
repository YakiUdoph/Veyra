export const contentLifecycleStates = [
  "draft",
  "reviewed",
  "approved",
  "published",
  "retired",
] as const;

export type ContentLifecycleState = (typeof contentLifecycleStates)[number];
export type ReviewRole = "linguistic-reviewer" | "content-approver";

export type ReviewRecord = Readonly<{
  reviewerRef: string;
  role: ReviewRole;
  decision: "approved" | "changes-requested";
  contentVersion: string;
  reviewedAt: string;
  independentFromAuthor: boolean;
}>;

export type ReviewMetadata = Readonly<{
  authorRef: string;
  records: readonly ReviewRecord[];
}>;

export type AudioAssetReference = Readonly<{
  id: string;
  phraseId: string;
  contentVersion: string;
  locale: string;
  status: "missing" | "accepted" | "withdrawn" | "replaced";
  checksum: string | null;
}>;

export type PhraseDefinition = Readonly<{
  id: string;
  instructionalText: string;
  targetText: string | null;
  targetLocale: string;
  contentVersion: string;
  approvalStatus: ContentLifecycleState;
  audioAssetRef: AudioAssetReference | null;
  review: ReviewMetadata;
}>;

export type ExerciseFeedback = Readonly<{
  correct: string;
  incorrect: string;
  incomplete: string;
}>;

export type ExerciseOption = Readonly<{ id: string; label: string }>;

export type ExerciseDefinition = Readonly<{
  id: string;
  type: "single-select";
  prompt: string;
  options: readonly ExerciseOption[];
  acceptedOptionId: string;
  phraseRefs: readonly string[];
  feedback: ExerciseFeedback;
  review: ReviewMetadata;
}>;

export type SituationDefinition = Readonly<{
  id: string;
  title: string;
  context: string;
  phrases: readonly PhraseDefinition[];
  exercises: readonly ExerciseDefinition[];
}>;

export type LessonDefinition = Readonly<{
  id: string;
  title: string;
  contentSource: "prototype-fixture" | "production-content";
  targetTrackId: string;
  targetLocale: string;
  instructionalLocale: string;
  contentVersion: string;
  approvalStatus: ContentLifecycleState;
  audioAssetReferences: readonly AudioAssetReference[];
  review: ReviewMetadata;
  situations: readonly SituationDefinition[];
}>;

export type ExerciseEvaluation =
  | Readonly<{ status: "correct"; message: string }>
  | Readonly<{ status: "incorrect"; message: string }>
  | Readonly<{ status: "incomplete"; message: string }>
  | Readonly<{ status: "invalid"; message: string }>;

export type ValidationResult = Readonly<{
  valid: boolean;
  issues: readonly string[];
}>;

const allowedTransitions: Readonly<
  Record<ContentLifecycleState, readonly ContentLifecycleState[]>
> = {
  draft: ["reviewed"],
  reviewed: ["approved"],
  approved: ["published"],
  published: ["retired"],
  retired: [],
};

export class ContentLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContentLifecycleError";
  }
}

export class UnpublishedContentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnpublishedContentError";
  }
}

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

function approvedReviews(
  lesson: LessonDefinition,
  role: ReviewRole,
): readonly ReviewRecord[] {
  return lesson.review.records.filter(
    (record) =>
      record.role === role &&
      record.decision === "approved" &&
      record.contentVersion === lesson.contentVersion &&
      record.independentFromAuthor &&
      record.reviewerRef !== lesson.review.authorRef,
  );
}

function hasIndependentApprovalPair(lesson: LessonDefinition): boolean {
  const linguists = approvedReviews(lesson, "linguistic-reviewer");
  const approvers = approvedReviews(lesson, "content-approver");
  return linguists.some((linguist) =>
    approvers.some((approver) => approver.reviewerRef !== linguist.reviewerRef),
  );
}

export function validateLessonSchema(
  lesson: LessonDefinition,
): ValidationResult {
  const issues: string[] = [];
  if (!hasText(lesson.id)) issues.push("Lesson id is required.");
  if (!hasText(lesson.title)) issues.push("Lesson title is required.");
  if (!hasText(lesson.targetTrackId))
    issues.push("Target track id is required.");
  if (!hasText(lesson.targetLocale)) {
    issues.push("Target-language locale is required.");
  }
  if (!hasText(lesson.instructionalLocale)) {
    issues.push("Instructional locale is required.");
  }
  if (!hasText(lesson.contentVersion))
    issues.push("Content version is required.");
  if (!contentLifecycleStates.includes(lesson.approvalStatus)) {
    issues.push("Approval status is not recognized.");
  }
  if (lesson.situations.length === 0) {
    issues.push("At least one situation is required.");
  }

  const situationIds = new Set<string>();
  const exerciseIds = new Set<string>();
  const phraseIds = new Set<string>();
  let exerciseCount = 0;

  for (const situation of lesson.situations) {
    if (situationIds.has(situation.id)) {
      issues.push(`Duplicate situation id: ${situation.id}.`);
    }
    situationIds.add(situation.id);

    for (const phrase of situation.phrases) {
      if (phraseIds.has(phrase.id)) {
        issues.push(`Duplicate phrase id: ${phrase.id}.`);
      }
      phraseIds.add(phrase.id);
      if (phrase.targetLocale !== lesson.targetLocale) {
        issues.push(`Phrase ${phrase.id} target locale does not match lesson.`);
      }
      if (phrase.contentVersion !== lesson.contentVersion) {
        issues.push(
          `Phrase ${phrase.id} content version does not match lesson.`,
        );
      }
    }

    for (const exercise of situation.exercises) {
      exerciseCount += 1;
      if (exerciseIds.has(exercise.id)) {
        issues.push(`Duplicate exercise id: ${exercise.id}.`);
      }
      exerciseIds.add(exercise.id);
      if (exercise.options.length < 2) {
        issues.push(`Exercise ${exercise.id} needs at least two options.`);
      }
      const optionIds = exercise.options.map((option) => option.id);
      if (new Set(optionIds).size !== optionIds.length) {
        issues.push(`Exercise ${exercise.id} has duplicate option ids.`);
      }
      if (!optionIds.includes(exercise.acceptedOptionId)) {
        issues.push(
          `Exercise ${exercise.id} accepted answer is not an option.`,
        );
      }
    }
  }

  if (exerciseCount === 0) {
    issues.push("At least one exercise is required.");
  }

  return { valid: issues.length === 0, issues };
}

export function publicationBlockers(
  lesson: LessonDefinition,
): readonly string[] {
  const blockers = [...validateLessonSchema(lesson).issues];
  const phrases = lesson.situations.flatMap((situation) => situation.phrases);

  if (lesson.contentSource !== "production-content") {
    blockers.push("Only production-content records may be published.");
  }
  if (!hasIndependentApprovalPair(lesson)) {
    blockers.push(
      "Distinct independent linguistic and content approvals are required.",
    );
  }
  if (phrases.length === 0) {
    blockers.push("At least one reviewed target-language phrase is required.");
  }
  for (const phrase of phrases) {
    if (!phrase.targetText || !hasText(phrase.targetText)) {
      blockers.push(`Phrase ${phrase.id} has no reviewed target text.`);
    }
    if (phrase.approvalStatus !== "approved") {
      blockers.push(`Phrase ${phrase.id} is not approved.`);
    }
    if (
      !phrase.audioAssetRef ||
      phrase.audioAssetRef.status !== "accepted" ||
      !phrase.audioAssetRef.checksum
    ) {
      blockers.push(`Phrase ${phrase.id} has no accepted audio asset.`);
    } else if (
      !lesson.audioAssetReferences.some(
        (asset) => asset.id === phrase.audioAssetRef?.id,
      )
    ) {
      blockers.push(`Phrase ${phrase.id} audio is not in the lesson manifest.`);
    }
  }
  return blockers;
}

export function transitionLesson(
  lesson: LessonDefinition,
  nextStatus: ContentLifecycleState,
): LessonDefinition {
  if (!allowedTransitions[lesson.approvalStatus].includes(nextStatus)) {
    throw new ContentLifecycleError(
      `Cannot transition lesson from ${lesson.approvalStatus} to ${nextStatus}.`,
    );
  }
  if (
    nextStatus === "reviewed" &&
    approvedReviews(lesson, "linguistic-reviewer").length === 0
  ) {
    throw new ContentLifecycleError(
      "An independent linguistic approval for this content version is required.",
    );
  }
  if (nextStatus === "approved" && !hasIndependentApprovalPair(lesson)) {
    throw new ContentLifecycleError(
      "Distinct independent linguistic and content approvals are required.",
    );
  }
  if (nextStatus === "published") {
    const blockers = publicationBlockers(lesson);
    if (blockers.length > 0) {
      throw new ContentLifecycleError(
        `Publication blocked: ${blockers.join(" ")}`,
      );
    }
  }
  return { ...lesson, approvalStatus: nextStatus };
}

export function lessonForAudience(
  lesson: LessonDefinition,
  audience: "prototype" | "production",
): LessonDefinition {
  const validation = validateLessonSchema(lesson);
  if (!validation.valid) {
    throw new UnpublishedContentError(
      `Lesson schema is invalid: ${validation.issues.join(" ")}`,
    );
  }
  if (audience === "prototype") {
    if (lesson.contentSource !== "prototype-fixture") {
      throw new UnpublishedContentError(
        "Only explicitly labeled prototype fixtures may use prototype access.",
      );
    }
    return lesson;
  }
  if (
    lesson.contentSource !== "production-content" ||
    lesson.approvalStatus !== "published" ||
    publicationBlockers(lesson).length > 0
  ) {
    throw new UnpublishedContentError(
      "Lesson is not an independently approved published production release.",
    );
  }
  return lesson;
}

export function getLessonExercises(
  lesson: LessonDefinition,
): readonly ExerciseDefinition[] {
  return lesson.situations.flatMap((situation) => situation.exercises);
}

export function evaluateExercise(
  exercise: ExerciseDefinition,
  selectedOptionId: string | null,
): ExerciseEvaluation {
  if (!selectedOptionId) {
    return { status: "incomplete", message: exercise.feedback.incomplete };
  }
  if (!exercise.options.some((option) => option.id === selectedOptionId)) {
    return {
      status: "invalid",
      message:
        "That answer is not available. Choose one of the listed options.",
    };
  }
  if (selectedOptionId === exercise.acceptedOptionId) {
    return { status: "correct", message: exercise.feedback.correct };
  }
  return { status: "incorrect", message: exercise.feedback.incorrect };
}

export function nextExerciseIndex(
  currentIndex: number,
  exerciseCount: number,
): number | null {
  const nextIndex = currentIndex + 1;
  return nextIndex < exerciseCount ? nextIndex : null;
}
