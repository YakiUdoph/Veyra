import { describe, expect, it } from "vitest";

import {
  audioPublicationIssues,
  createAudioLocalePolicy,
  fixedPronunciationLocales,
  resolvePlayablePronunciationAudio,
  type AudioAssetReference,
} from "../lib/pronunciation-audio";

const localePolicy = createAudioLocalePolicy("es-MX");
const context = {
  phraseId: "test-phrase",
  contentVersion: "test-content-v1",
  locale: "pt-BR",
  localePolicy,
} as const;

function approvedAsset(
  overrides: Partial<AudioAssetReference> = {},
): AudioAssetReference {
  return {
    id: "test-audio",
    phraseId: context.phraseId,
    contentVersion: context.contentVersion,
    locale: context.locale,
    purpose: "target-pronunciation",
    status: "available",
    assetIdentity: {
      storageKey: "audio/test-audio-v1.ogg",
      version: "test-audio-v1",
    },
    assetPath: "/audio/test-audio-v1.ogg",
    checksum: "test-checksum",
    speaker: {
      speakerRef: "test-human-speaker",
      locale: context.locale,
      recordingMethod: "human-recorded",
      consentEvidenceRef: "test-consent-evidence",
    },
    license: {
      evidenceRef: "test-license-evidence",
      status: "approved",
      commercialUseApproved: true,
    },
    review: {
      reviewerRef: "test-qualified-reviewer",
      status: "approved",
      reviewedAt: "2026-11-23T00:00:00.000Z",
      contentVersion: context.contentVersion,
      checksum: "test-checksum",
    },
    ...overrides,
  };
}

describe("pronunciation locale policy", () => {
  it("supports the seven fixed locales and one configured Spanish locale", () => {
    expect(localePolicy.supportedLocales).toEqual([
      ...fixedPronunciationLocales,
      "es-MX",
    ]);
    expect(localePolicy.supportedLocales).toContain("pt-BR");
    expect(localePolicy.supportedLocales).toContain("pt-PT");
  });

  it("rejects a generic or malformed Spanish locale", () => {
    expect(() => createAudioLocalePolicy("es")).toThrow("es-REGION");
    expect(() => createAudioLocalePolicy("en-US")).toThrow("es-REGION");
  });
});

describe("pronunciation audio lifecycle gates", () => {
  it("rejects missing audio and never resolves it for playback", () => {
    expect(audioPublicationIssues(null, context)).toEqual([
      "Pronunciation audio asset is missing.",
    ]);
    expect(resolvePlayablePronunciationAudio(null, context)).toBeNull();
  });

  it("rejects locale substitution even when the other locale is supported", () => {
    const mismatched = approvedAsset({
      locale: "pt-PT",
      speaker: {
        ...approvedAsset().speaker,
        locale: "pt-PT",
      },
    });
    expect(audioPublicationIssues(mismatched, context)).toContain(
      "Audio locale does not match the phrase locale.",
    );
    expect(resolvePlayablePronunciationAudio(mismatched, context)).toBeNull();
  });

  it("rejects unavailable, unlicensed, and unreviewed assets", () => {
    const gated = approvedAsset({
      status: "withdrawn",
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
    });
    const issues = audioPublicationIssues(gated, context);
    expect(issues).toContain("Audio asset is not available.");
    expect(issues).toContain(
      "Approved commercial-use license evidence is required.",
    );
    expect(issues).toContain(
      "Qualified review of the exact audio asset is required.",
    );
    expect(resolvePlayablePronunciationAudio(gated, context)).toBeNull();
  });

  it("rejects content-version, checksum, and missing-path mismatches", () => {
    const mismatched = approvedAsset({
      contentVersion: "other-content-version",
      assetPath: null,
      review: {
        ...approvedAsset().review,
        checksum: "other-checksum",
      },
    });
    const issues = audioPublicationIssues(mismatched, context);
    expect(issues).toContain(
      "Audio content version does not match the phrase.",
    );
    expect(issues).toContain(
      "Audio asset path must be a local immutable path.",
    );
    expect(issues).toContain("Audio review does not match the asset checksum.");
  });

  it("resolves only an exact fully gated future human recording", () => {
    const asset = approvedAsset();
    expect(audioPublicationIssues(asset, context)).toEqual([]);
    expect(resolvePlayablePronunciationAudio(asset, context)).toEqual({
      assetId: asset.id,
      src: asset.assetPath,
      locale: asset.locale,
      checksum: asset.checksum,
    });
  });
});
