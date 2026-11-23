export const fixedPronunciationLocales = [
  "de-DE",
  "fr-FR",
  "it-IT",
  "ko-KR",
  "zh-CN",
  "pt-BR",
  "pt-PT",
] as const;

export type FixedPronunciationLocale =
  (typeof fixedPronunciationLocales)[number];
export type SpanishPronunciationLocale = `es-${string}`;
export type PronunciationLocale =
  FixedPronunciationLocale | SpanishPronunciationLocale;

export type AudioLocalePolicy = Readonly<{
  spanishLocale: SpanishPronunciationLocale;
  supportedLocales: readonly PronunciationLocale[];
}>;

export type AudioAssetReference = Readonly<{
  id: string;
  phraseId: string;
  contentVersion: string;
  locale: string;
  purpose: "target-pronunciation";
  status: "missing" | "available" | "withdrawn" | "replaced";
  assetIdentity: Readonly<{
    storageKey: string;
    version: string;
  }>;
  assetPath: string | null;
  checksum: string | null;
  speaker: Readonly<{
    speakerRef: string;
    locale: string;
    recordingMethod: "human-recorded";
    consentEvidenceRef: string;
  }>;
  license: Readonly<{
    evidenceRef: string;
    status: "pending" | "approved" | "expired" | "withdrawn";
    commercialUseApproved: boolean;
  }>;
  review: Readonly<{
    reviewerRef: string | null;
    status: "unreviewed" | "approved" | "changes-requested" | "withdrawn";
    reviewedAt: string | null;
    contentVersion: string | null;
    checksum: string | null;
  }>;
}>;

export type AudioValidationContext = Readonly<{
  phraseId: string;
  contentVersion: string;
  locale: string;
  localePolicy: AudioLocalePolicy;
}>;

export type PlayablePronunciationAudio = Readonly<{
  assetId: string;
  src: string;
  locale: PronunciationLocale;
  checksum: string;
}>;

const spanishLocalePattern = /^es-(?:[A-Z]{2}|[0-9]{3})$/;

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

export function createAudioLocalePolicy(
  spanishLocale: string,
): AudioLocalePolicy {
  if (!spanishLocalePattern.test(spanishLocale)) {
    throw new Error(
      "Spanish pronunciation locale must use an explicit es-REGION identifier.",
    );
  }
  const configuredSpanishLocale = spanishLocale as SpanishPronunciationLocale;
  return {
    spanishLocale: configuredSpanishLocale,
    supportedLocales: [...fixedPronunciationLocales, configuredSpanishLocale],
  };
}

export function audioPublicationIssues(
  asset: AudioAssetReference | null,
  context: AudioValidationContext,
): readonly string[] {
  if (!asset) return ["Pronunciation audio asset is missing."];

  const issues: string[] = [];
  if (!hasText(asset.id)) {
    issues.push("Audio asset identity is missing.");
  }
  if (asset.purpose !== "target-pronunciation") {
    issues.push("Audio purpose is not target-language pronunciation.");
  }
  if (
    !context.localePolicy.supportedLocales.some(
      (locale) => locale === asset.locale,
    )
  ) {
    issues.push(
      `Audio locale ${asset.locale} is not supported by this release.`,
    );
  }
  if (asset.locale !== context.locale) {
    issues.push("Audio locale does not match the phrase locale.");
  }
  if (asset.speaker.locale !== asset.locale) {
    issues.push("Speaker locale does not match the audio locale.");
  }
  if (asset.phraseId !== context.phraseId) {
    issues.push("Audio phrase identity does not match the phrase.");
  }
  if (asset.contentVersion !== context.contentVersion) {
    issues.push("Audio content version does not match the phrase.");
  }
  if (asset.status !== "available") {
    issues.push("Audio asset is not available.");
  }
  if (!hasText(asset.assetIdentity.storageKey)) {
    issues.push("Audio storage identity is missing.");
  }
  if (!hasText(asset.assetIdentity.version)) {
    issues.push("Audio asset version is missing.");
  }
  if (!asset.assetPath || !/^\/(?!\/)/.test(asset.assetPath)) {
    issues.push("Audio asset path must be a local immutable path.");
  }
  if (!asset.checksum || !hasText(asset.checksum)) {
    issues.push("Audio checksum is missing.");
  }
  if (
    !hasText(asset.speaker.speakerRef) ||
    !hasText(asset.speaker.consentEvidenceRef)
  ) {
    issues.push("Human speaker identity and consent evidence are required.");
  }
  if (asset.speaker.recordingMethod !== "human-recorded") {
    issues.push("Target pronunciation must be a human recording.");
  }
  if (
    asset.license.status !== "approved" ||
    !asset.license.commercialUseApproved ||
    !hasText(asset.license.evidenceRef)
  ) {
    issues.push("Approved commercial-use license evidence is required.");
  }
  if (
    asset.review.status !== "approved" ||
    !asset.review.reviewerRef ||
    !asset.review.reviewedAt
  ) {
    issues.push("Qualified review of the exact audio asset is required.");
  }
  if (asset.review.contentVersion !== context.contentVersion) {
    issues.push("Audio review does not match the content version.");
  }
  if (!asset.checksum || asset.review.checksum !== asset.checksum) {
    issues.push("Audio review does not match the asset checksum.");
  }
  return issues;
}

export function resolvePlayablePronunciationAudio(
  asset: AudioAssetReference | null,
  context: AudioValidationContext,
): PlayablePronunciationAudio | null {
  if (audioPublicationIssues(asset, context).length > 0 || !asset) return null;
  return {
    assetId: asset.id,
    src: asset.assetPath as string,
    locale: asset.locale as PronunciationLocale,
    checksum: asset.checksum as string,
  };
}
