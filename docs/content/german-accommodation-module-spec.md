# First learning-content specification — German accommodation

- **Status:** DRAFT — unreviewed, unapproved, unpublished
- **Prepared:** 2026-11-21
- **Related tasks:** T1.6 and T1.7
- **Instructional locale:** English (`en`)
- **Target locale:** Standard German as used in Germany (`de-DE`)
- **Application status:** No application implementation is authorized or present
- **Asset status:** No audio, illustration, speaker consent, or asset license exists

## 1. Purpose and limits

This document proposes a reusable content contract and one pilot module for the existing linguistic/content workstream. Every German phrase, English gloss, usage note, exercise answer, and feedback string below is a candidate requiring qualified human review. The document is not evidence of translation approval, educational effectiveness, German legal advice, licensed audio, or readiness to publish.

T1.6 remains incomplete because T1.3 and T1.4 are incomplete and no reviewer qualifications, style guide, reviewer agreement, locale matrix, pilot review, or approval exists. T1.7 remains incomplete because T1.4 and T1.6 are incomplete and no approved speaker, recording, consent/license, cost, storage, replacement, or pilot-asset evidence exists.

## 2. Reusable lesson content schema

The schema is a product/content specification, not application code or a selected serialization format. Required fields must be validated by the future import and publication workflow. Stable opaque identifiers must not encode mutable display text.

### 2.1 Module and situation

| Field | Requirement |
|---|---|
| `schemaVersion` | Required version of this content contract. A schema migration must be explicit and must not silently rewrite published releases. |
| `moduleId` | Stable opaque module identifier. |
| `contentVersion` | Immutable semantic content version for review and correction history. |
| `status` | One of `DRAFT`, `REVIEWED`, `APPROVED`, `PUBLISHED`, or `RETIRED`; transitions follow section 7. |
| `instructionalLocale` | BCP 47 locale for explanations and source phrases; initially `en`. |
| `targetTrackId` | Stable identifier for one of the eight approved target tracks. |
| `targetLocale` | Reviewed BCP 47 locale for this release; it must not be inferred from country or interface locale. |
| `regionalScope` | Plain-language scope and exclusions, such as Germany-focused `de-DE`, not `de-AT` or `de-CH`. |
| `situation.id` | Stable situation identifier. |
| `situation.title` | Concise English-first situation title. |
| `situation.context` | Who is communicating, with whom, through which channel, and for what real-world purpose. |
| `situation.learningObjective` | Observable learner outcome using reviewed wording. |
| `situation.safetyBoundary` | Statements of what the lesson does not teach or authorize, including legal, financial, emergency, or safeguarding limits. |
| `sourceReferences` | Dated terminology/context references with URL, title, publisher, purpose, and license/use note. A source is not reviewer approval. |

### 2.2 Phrase entry

| Field | Requirement |
|---|---|
| `phraseId` | Stable identifier unique within the content system. |
| `sourceText` | Reviewed English instructional phrase. |
| `targetText` | Reviewed target-locale phrase; Unicode text must preserve spelling, punctuation, and diacritics. |
| `literalGloss` | Optional word-near gloss clearly distinguished from the natural English meaning. |
| `meaning` | Natural English meaning used for teaching and deterministic exercises. |
| `usageNote` | When the phrase is appropriate and any pragmatic limitation. |
| `register` | Controlled value plus note, for example `formal-polite`, `neutral`, or `informal`; pronoun/address choice must be explicit. |
| `regionalNote` | Locale-specific terminology or a warning that another region may differ. |
| `sensitivity` | Content risk flags such as housing/legal-adjacent, personal-data request, safety, or adult-contract context. |
| `audioAssetRefs` | Zero or more immutable audio-version identifiers. Empty in `DRAFT`; publication requires accepted licensed audio under section 6. |
| `review` | Reviewer identifier, qualifications evidence reference, target locale, review date, decision, issue log, and immutable evidence location. Empty until actual review. |
| `approval` | Approver identifier, role/authority, approved version, date, scope, and evidence location. Empty until actual approval. |
| `history` | Append-only changes with version, date, author, reason, affected fields, prior-version reference, and review impact. |

### 2.3 Audio asset reference

| Field | Requirement |
|---|---|
| `audioAssetId` and `assetVersion` | Stable asset identity and immutable version. |
| `assetPurpose` | Required value distinguishing `target-pronunciation` from `instructional-narration`; one purpose cannot satisfy the other. |
| `phraseId` and `phraseVersion` | Exact reviewed phrase/version spoken; text changes invalidate the association. |
| `locale` | Reviewed spoken locale, here proposed as `de-DE`. |
| `speakerId` | Pseudonymous/internal speaker reference; personal contract data stays in restricted records. |
| `speakerQualification` | Evidence of target-locale competence and suitability for the specified register; never inferred from nationality alone. |
| `voiceProfile` | Approved language, locale, region, register, delivery purpose, and selection evidence. `pt-BR` and `pt-PT` profiles must be distinct. |
| `providerSource` | Provider, stable voice ID, display name as non-authoritative metadata, model/version, account/plan entitlement, settings, notice/removal terms, and export/replacement route when generated narration is permitted. |
| `recordingSpec` | Approved master/delivery formats and measurable technical targets. |
| `licenseRecord` | Rights holder, grant/license/consent evidence, permitted commercial uses and territories, term, editing/streaming/download rights, attribution, revocation/replacement terms, and restrictions. |
| `checksums` | Cryptographic checksum for the accepted master and each delivery derivative. |
| `linguisticQa` | Reviewer, phrase/version, pronunciation/register/pacing decision, issues, date, and evidence. |
| `technicalQa` | Engineer/reviewer, measurable checks, listening checks, decision, date, and evidence. |
| `accessibility` | Exact visible transcript reference and any non-audio alternative. |
| `assetStatus` | Controlled asset state such as `MISSING`, `RECORDED`, `QA_FAILED`, `ACCEPTED`, `WITHDRAWN`, or `REPLACED`. |

### 2.4 Exercise and feedback

| Field | Requirement |
|---|---|
| `exerciseId` | Stable exercise identifier. |
| `type` | Approved deterministic type such as `single-select`, `matching`, `ordering`, or constrained `text-entry`. |
| `prompt` | Reviewed English-first instruction with language metadata for embedded German. |
| `phraseRefs` | Exact phrase versions assessed. |
| `stimulus` | Reviewed text/audio/choices used by the exercise; no unpublished reference may leak into a published release. |
| `acceptedAnswers` | Explicit answer IDs, ordered token IDs, pairs, or finite reviewed strings. Regex or normalization must not expand semantic acceptance implicitly. |
| `normalization` | Explicit mechanical rules only, such as trimming outer whitespace or normalizing Unicode. Case, punctuation, spelling, and accepted variants require reviewer decisions. |
| `feedback.correct` | Reviewed explanation of why the response works. |
| `feedback.incorrect` | Reviewed corrective explanation that does not shame the learner. |
| `feedback.hint` | Optional reviewed clue that does not reveal unrelated personal or legal guidance. |
| `accessibility` | Keyboard order, programmatic grouping/labels, non-color correctness cues, audio alternative, and status announcement requirements. |
| `review` and `history` | Same evidence and correction principles as phrase entries. |

## 3. Proposed German accommodation module

### 3.1 Module metadata

| Field | DRAFT value |
|---|---|
| Module ID | `module-de-de-accommodation-01` |
| Content version | `0.1.0-draft` |
| Status | `DRAFT` |
| Track | German |
| Instructional locale | English (`en`) |
| Target locale | Standard German used in Germany (`de-DE`) |
| Situation | Asking about a rental listing and arranging a viewing |
| Context | An English-speaking learner contacts a landlord, landlady, property manager, or agent about a residential listing in Germany. |
| Learning objective | Given a listing or contact exchange, the learner can politely ask whether the property is available, request a viewing, and ask about basic rent, additional costs, deposit, availability date, and required documents. |
| Register | Formal-polite `Sie` register; reviewer must confirm consistent capitalization and address. |
| Safety boundary | Vocabulary preparation only. It does not explain tenancy law, verify a listing, recommend a payment, authorize document disclosure, or establish that a teenager may enter a rental contract. |

### 3.2 DRAFT phrase set

All eight entries have `review.decision = NOT_REVIEWED`, `approval = null`, `audioAssetRefs = []`, and `publicationEligible = false`.

| ID | English source | German target — DRAFT | Usage/register note — DRAFT |
|---|---|---|---|
| `de-accom-p01` | Is the apartment still available? | Ist die Wohnung noch verfügbar? | Neutral formal inquiry about a listing. A reviewer must decide whether `frei` or `zu vermieten` should be taught as variants. |
| `de-accom-p02` | Could I arrange a viewing appointment? | Könnte ich einen Besichtigungstermin vereinbaren? | Polite formal request. Do not teach this as confirmation that an appointment exists. |
| `de-accom-p03` | How much is the monthly basic rent? | Wie hoch ist die monatliche Kaltmiete? | Germany-focused housing term. `Kaltmiete` excludes additional costs in the referenced Germany guidance; exact explanation requires review. |
| `de-accom-p04` | How much are the additional costs? | Wie hoch sind die Nebenkosten? | Neutral formal question. The included items vary; the lesson must not state a universal list. |
| `de-accom-p05` | What is included in the additional costs? | Was ist in den Nebenkosten enthalten? | Follow-up question because heating, electricity, water, and other items may be treated differently. |
| `de-accom-p06` | How much is the deposit? | Wie hoch ist die Kaution? | Housing/legal-adjacent term. Do not teach a universal amount or payment instruction in this phrase module. |
| `de-accom-p07` | From when is the apartment available? | Ab wann ist die Wohnung verfügbar? | Asks for the availability date; it does not create an offer or agreement. |
| `de-accom-p08` | Which documents do you need from me? | Welche Unterlagen benötigen Sie von mir? | Formal question only. The product must not prompt upload or disclosure of identity, financial, immigration, school, or guardian data without an approved necessity and secure workflow. |

### 3.3 DRAFT terminology references

Checked on 2026-11-21:

- Goethe-Institut, *Wohnen — Mein Weg nach Deutschland*: https://www.goethe.de/prj/mwd/de/idl/woh.html — context for Germany-focused `Kaltmiete`, `Nebenkosten`, `Warmmiete`, and `Kaution`. The page is a reference, not reusable course-copy permission or Veyra approval.
- Goethe-Institut, *Mein Deutschlandheft*: https://www.goethe.de/resources/files/pdf352/goethe-institut_mein-deutschlandheft.pdf — confirms common housing-question patterns. Do not reproduce its exercises, layout, images, or extended wording.
- Make it in Germany, *Wohnung finden und anmelden*: https://www.make-it-in-germany.com/de/ankommen-bleiben/erste-schritte/wohnung-finden-anmelden — official Germany-context explanation of viewing, documents, rent categories, deposits, and scam risk. It is contextual information, not legal advice for a specific learner.
- Verbraucherzentrale, *Die erste Wohnung*: https://www.verbraucherzentrale.de/laura-zieht-aus/mietvertrag — additional Germany-focused context for rent terminology and rental contracts. Any legal-adjacent statement requires qualified review and a current-date check.

The final content record must state whether each target phrase was independently authored, adapted under permission, or quoted under an approved basis. No third-party exercise structure, illustration, audio, or substantial text may be copied.

## 4. Deterministic DRAFT exercises

No exercise uses speech recognition, generative AI, semantic similarity, or an external paid API. All answers remain unreviewed until a qualified reviewer accepts the linked phrase version.

### Exercise 1 — single select

- **Prompt:** You want to know whether the advertised apartment can still be rented. Which question should you ask?
- **Choices:**
  - A: `Wie hoch ist die Kaution?`
  - B: `Ist die Wohnung noch verfügbar?`
  - C: `Welche Unterlagen benötigen Sie von mir?`
- **Accepted answer:** Choice B, linked to `de-accom-p01@0.1.0-draft`.
- **Correct feedback:** This asks whether the apartment is still available.
- **Incorrect feedback:** Choose the question about availability, not the deposit or documents.

### Exercise 2 — matching

- **Prompt:** Match each Germany-focused housing term to its DRAFT English meaning.
- **Pairs:** `Kaltmiete` → basic rent before additional costs; `Nebenkosten` → additional/service costs; `Kaution` → rental deposit.
- **Accepted answer:** Exact three-pair mapping by stable option IDs; display order may vary.
- **Feedback:** Show the reviewed definition for each incorrect pair. Do not add legal amounts or universal inclusions.

### Exercise 3 — ordering

- **Prompt:** Put the words in order to make the polite viewing request.
- **Tokens:** `Könnte` / `ich` / `einen` / `Besichtigungstermin` / `vereinbaren` / `?`
- **Accepted answer:** Exact token-ID order matching `de-accom-p02@0.1.0-draft`.
- **Correct feedback:** The modal form `Könnte ich …?` makes this a polite formal request.
- **Normalization:** Ignore visual spacing before the question mark only; do not silently accept other word orders until reviewed.

### Exercise 4 — constrained text entry

- **Prompt:** Complete the question: `Was ist in den ______ enthalten?`
- **Accepted answer:** `Nebenkosten` after Unicode normalization and trimming outer whitespace. Case must remain significant until the reviewer decides otherwise.
- **Correct feedback:** `Nebenkosten` is the noun used in this question about included additional costs.
- **Incorrect feedback:** Review the phrase asking what the additional costs include.

### Exercise 5 — single select by intent

- **Prompt:** The listing gives no move-in date. Which question asks when the apartment becomes available?
- **Choices:** phrase IDs `de-accom-p03`, `de-accom-p07`, and `de-accom-p08` in randomized display order.
- **Accepted answer:** `de-accom-p07`.
- **Correct feedback:** `Ab wann …?` asks from what date something is available.
- **Incorrect feedback:** Look for the phrase that asks about a starting date.

## 5. Linguistic-review workflow

### 5.1 Required roles

- **Content author/editor:** prepares English objectives, sources, draft German candidates, exercises, notes, and risk flags; cannot self-approve.
- **Qualified `de-DE` linguistic reviewer:** demonstrates professional German-language teaching, translation, linguistics, editing, or equivalent relevant experience; verifies both German and English meaning, register, naturalness, grammar, spelling, terminology, age suitability, and exercise answers.
- **Second reviewer or specialist:** required for disputed items, safety/legal-adjacent explanations, material corrections after approval, or other risks defined by the approved style guide. Legal review verifies legal-adjacent claims but does not replace linguistic review.
- **Content owner/approver:** verifies that evidence is complete and approves the exact reviewed version for production. This role cannot overrule an unresolved linguistic issue.
- **Release publisher:** a separately authorized role or automated gate that can publish only an approved immutable release with accepted assets.

Reviewer selection must record target locale, relevant qualifications, conflicts of interest, confidentiality/IP terms, compensation where applicable, and authority. Nationality alone is not a qualification, and founder preference is not linguistic evidence.

### 5.2 Review checks

1. Confirm `en` source intent, learner level assumptions, situation, and safety boundary.
2. Confirm `de-DE` locale and explicitly flag terms or phrasing that differ in Austria, Switzerland, or German regional usage.
3. Review every phrase for semantic equivalence, naturalness, grammar, spelling, punctuation, formal `Sie` consistency, register, pragmatics, and likely learner misunderstanding.
4. Review every meaning, usage note, feedback string, distractor, token, accepted answer, normalization rule, and glossary definition—not only the headline translation.
5. Check housing/legal-adjacent statements against current approved references and remove or escalate claims outside language instruction.
6. Check teen suitability, safeguarding, privacy prompts, stereotypes, discrimination risks, and whether the learner is incorrectly assumed to be an adult contracting party.
7. Record each issue with severity, field, proposed resolution, author response, reviewer disposition, and date. Preserve disagreements and superseded drafts.
8. Re-run the complete linked review after any semantic, target-text, answer, register, or safety change. Typographic-only corrections still require a documented impact decision.
9. Reviewer signs the exact content version and locale. Any unreviewed field prevents `REVIEWED` status.

## 6. Proposed audio acceptance criteria

These are production-oriented proposals for T1.7, not approved policy or evidence that an asset exists.

### 6.1 Founder requirements and provider status

- All pronunciation audio must sound natural, authentic, and regionally appropriate. German, French, Spanish, Italian, Mandarin Chinese, Korean, Brazilian Portuguese, and European Portuguese require language-appropriate voice selection; `pt-BR` and `pt-PT` require distinct profiles and separately reviewed assets.
- Qualified reviewers for the applicable language/locale must check each actual immutable audio version for pronunciation, stress, rhythm, pauses, naturalness, register, consistency, and tones where applicable before publication.
- English instructional narration should use ElevenLabs “Lauren USA” as the preferred voice reference, subject to verification. It is a separate asset purpose from the German target-pronunciation audio in this module.
- Official ElevenLabs documentation checked on 2026-11-21 describes a dynamic Voice Library with language/accent filters, access restrictions, voice-owner notice periods, and plan-dependent commercial use. It also recommends matching a voice to the target language/region. Those general capabilities do not verify a “Lauren USA” voice's stable ID, current availability, rights, notice period, model compatibility, or suitability for Veyra.
- No provider or voice has been selected. No ElevenLabs account entitlement, contract, DPA, data flow, commercial license, cost, voice ID, availability, continuity, output, or quality test is evidenced in this repository.
- Current official cloning documentation and policy impose ownership, verification, and consent restrictions. Veyra must never clone or imitate a voice without documented authorization, applicable informed consent, rights evidence, and compliance with the provider's then-current terms and applicable requirements; no verification safeguard may be bypassed.

Provider references checked on 2026-11-21:

- ElevenLabs Voice Library documentation: https://elevenlabs.io/docs/eleven-creative/voices/voice-library
- ElevenLabs Voices documentation: https://elevenlabs.io/docs/overview/capabilities/voices
- ElevenLabs Text to Speech documentation: https://elevenlabs.io/docs/overview/capabilities/text-to-speech
- ElevenLabs Voice Cloning documentation: https://elevenlabs.io/docs/eleven-creative/voices/voice-cloning
- ElevenLabs Terms of Service and Prohibited Use Policy: https://elevenlabs.io/terms-of-use and https://elevenlabs.io/use-policy

### 6.2 Rights and speaker gate

- The exact phrase version is `APPROVED` and frozen before final recording.
- The selected speaker's `de-DE` competence and ability to deliver the specified formal-neutral register are documented by the linguistic reviewer; no nationality or demographic stereotype is required.
- A signed agreement or license identifies the rights holder and expressly covers the intended commercial SaaS uses, territories, duration, streaming/download or offline use if applicable, editing/normalization, derivative encodes, storage/CDN, replacement, attribution, compensation, withdrawal, and use after termination.
- The speaker understands the script and recording use. No minor is recorded for this module unless a separately approved necessity, safeguarding process, consent authority, contract, and licensing review exists; the default is an eligible adult speaker.
- For published target-language pronunciation, the existing PRD baseline still requires licensed, verified human pronunciation audio. Synthetic or cloned target pronunciation cannot be substituted through this specification. English instructional narration is a separate conditional asset class; generated narration remains prohibited until its provider voice, commercial rights, data terms, model/settings, actual output, and T1.7 workflow are verified and approved.
- Third-party music, room media, unauthorized synthetic or cloned voice, copied course audio, or unlicensed material is prohibited.

### 6.3 Linguistic and performance gate

- The recording exactly matches the approved German phrase version; no omitted, added, or substituted word.
- A qualified `de-DE` reviewer listens to and accepts the actual immutable asset version for pronunciation, stress, intonation, rhythm, pauses, articulation, naturalness, formal-neutral register, and consistency across the module. Approval of the text, speaker, provider, model, or demo is insufficient.
- Delivery is clear for a learner without becoming distorted, robotic, exaggerated, or falsely presented as the only valid German accent.
- Each asset contains one phrase, with useful leading/trailing silence and no spoken file name or production chatter.
- Any edit or rerecord receives a new immutable asset version and repeats linguistic and technical QA.

### 6.4 Proposed technical gate

- Preserve a lossless mono PCM WAV master, proposed at 48 kHz/24-bit; select delivery encoding only after the approved architecture, bandwidth, browser, and accessibility tests.
- No clipping, audible distortion, distracting noise, hum, reverb, plosives, mouth noise, truncation, or inconsistent level. Proposed speech target: approximately `-18 LUFS` integrated with a `±2 LU` tolerance and true peak no higher than `-1 dBTP`, subject to validation by an audio professional and representative-device tests.
- Record and verify duration, file type by content, sample rate/bit depth, channel count, checksum, phrase/version, locale, speaker reference, take, QA decisions, license record, storage key, and replacement relationship.
- Test on representative phone speaker, headphones, low-bandwidth delivery, replay/pause controls, failure/retry state, and reduced-data behavior.

### 6.5 Accessibility gate

- Display the exact reviewed phrase and accessible English meaning with the audio; identify language changes programmatically.
- Never autoplay. Provide keyboard-operable play, pause, and replay controls with visible focus and an announced state.
- A non-audio route must preserve learning access. It must not claim that a listening objective was completed when the learner used only the alternative.
- Do not record, upload, retain, or score learner voices as part of this module.

## 7. Content state and release workflow

Only these forward transitions are allowed; rejection or a material correction returns work to a new `DRAFT` version.

| State | Meaning | Entry evidence | Visibility and allowed action |
|---|---|---|---|
| `DRAFT` | Authored candidate; fields may be incomplete or wrong. | Author, version, date, source references, risk flags, and change history. | Author/reviewer workspace only. Never in public paths, search, metadata, feeds, analytics labels, or learner payloads. |
| `REVIEWED` | A qualified independent reviewer has accepted every learner-visible field and resolved or explicitly blocked every issue for the exact locale/version. | Reviewer qualifications reference, signed decision, field-level issue log, locale, date, and second/specialist review where required. | Restricted preview only. No audio production claim, public use, or founder override of linguistic findings. |
| `APPROVED` | The authorized content owner has accepted the exact reviewed version for asset production/release preparation and verified required scope, safety, source/IP, and review evidence. | Approval authority, exact version/hash, date, evidence checklist, unresolved-risk disposition, and approved regional scope. | Frozen for production. Text changes create a new `DRAFT`; approval alone is not publication. |
| `PUBLISHED` | The immutable approved content version and its accepted licensed assets are included in an authorized content release after all publication gates pass. | Release ID, publisher authorization, accepted audio/license/QA records, validation result, date, and rollback/retirement path. | Public only through the active published release. Historical progress retains the release/version. |
| `RETIRED` | No longer assigned to new learning paths but retained as required for history, audit, correction, and rights records. | Retirement reason, authority, date, replacement if any, and learner/history policy. | Not available for new starts; never silently rewritten or reused as current. |

### 7.1 Publication prevention controls

- Deny publication by default. A module is public only when `status = PUBLISHED`, its immutable version belongs to the active signed/authorized release, and every referenced phrase, exercise, feedback item, source/license record, and mandatory audio asset matches the approved version.
- Separate authoring/review storage and credentials from public delivery. Public queries resolve only the active release; knowing an identifier or URL never grants draft access.
- Require distinct author, reviewer, approver, and publisher evidence. A small team may hold more than one operational role only if the approved workflow permits it, but an author must not supply their own independent linguistic approval.
- Validate imports for schema version, IDs, locale, status transitions, hashes, reviewer/approval evidence, asset/license metadata, accepted-answer references, dangerous markup, missing fields, and orphaned or cross-version links.
- Fail the release if any learner-visible string or asset is `DRAFT`, unreviewed, changed after approval, missing a required license, expired/withdrawn, or linked to a different content version.
- Restrict preview to authorized reviewers, mark it visibly `UNPUBLISHED`, prevent indexing/caching/sharing, and use no real learner progress or public entitlement.
- Test direct-object access, predictable URLs, stale caches/CDN objects, search indexes, feeds/sitemaps, client bundles, API payloads, logs, exports, and rollback so unpublished material cannot leak.
- A correction to published content creates a new version and release. Retain the previous evidence and progress association; use an auditable emergency withdrawal rather than editing in place.

## 8. Accessibility, teen suitability, copyright, and regional concerns

### Accessibility

- Mark German text with `lang="de-DE"` and English with `lang="en"`; verify screen-reader pronunciation without claiming every assistive technology will behave identically.
- Exercises must be fully keyboard operable, expose instructions and grouped choices programmatically, announce correctness without relying on color/sound, preserve zoom/reflow at 320 CSS pixels, and retain visible focus.
- Provide text equivalents for audio, no autoplay, sufficient control labels/touch targets, and a truthful non-listening alternative.
- Do not use a housing photograph or illustration unless purposeful, original/lawfully licensed, and supplied with reviewed alternative-text treatment.

### Teen suitability and privacy

- Use respectful mixed-audience language. Do not infantilize teenagers or assume that they are tenants, legally able to contract, responsible for a household, or permitted to provide financial/identity documents.
- Frame the situation as language preparation for a learner or accompanying family member. Do not ask for real addresses, landlord contacts, financial status, identity documents, immigration data, school details, guardian data, or recordings.
- Never turn phrase 8 into an upload flow without separately approved necessity, security, consent, retention, deletion, and age/region requirements.
- Include a reviewed safety boundary against sending money or sensitive documents merely because a listing or contact requests them. Current official sources may inform a future safety note, but qualified legal/content review is required before publication.

### Copyright and provenance

- Preserve source, author, version, date, and rights/permission evidence for every text and asset. Publicly accessible material is not automatically reusable.
- Common functional phrases still receive provenance and similarity review. Do not copy third-party exercises, selection/order, explanations, dialogues, layout, images, recordings, or branded terminology collections.
- Contracts with authors, reviewers, speakers, and contractors must address ownership/license, commercial use, confidentiality, corrections, attribution, and replacement under the final founder/entity/IP arrangements.

### Regional language and scope

- This draft is `de-DE`, focused on Germany. It must not be presented as reviewed for Austria (`de-AT`), Switzerland (`de-CH`), or every German-speaking community.
- A qualified reviewer must confirm `Wohnung`, `Besichtigungstermin`, `Kaltmiete`, `Nebenkosten`, `Kaution`, `Unterlagen`, formal `Sie`, and any accepted alternatives for the stated context.
- Rent terminology, included costs, documents, deposits, contract practices, and scam guidance can vary by place and time. Keep linguistic teaching separate from legal/commercial guidance and date-check any contextual claim.
- Interface locale remains independent: changing the interface language must not alter this instructional locale, target locale, content status, or progress history.

## 9. External evidence and approvals still required

### T1.6 linguistic/content requirements

- Completion of T1.3 and T1.4 dependencies.
- Founder-approved `de-DE` locale scope, learner-level assumptions, situation/style guide, terminology policy, source/copyright policy, risk classification, reviewer qualifications, reviewer agreement, dispute/escalation process, and version/re-review rules.
- An identified qualified `de-DE` reviewer with recorded qualifications and IP/confidentiality terms, plus specialist/second-review rules.
- Field-by-field review of the objective, eight English/German phrases, notes, meanings, register, exercises, accepted answers, feedback, teen/accessibility treatment, and contextual claims.
- Auditable issue resolution, exact-version approval, and a pilot review record. Nothing in this document supplies those results.

### T1.7 audio/asset requirements

- Completion of T1.4 and T1.6 dependencies and approval of the asset policy and technical specification.
- Verification or rejection of ElevenLabs “Lauren USA” as the English instructional-narration reference, including stable identity, availability, account/plan eligibility, commercial rights, terms, notice/removal continuity, model compatibility, data processing, cost, export/replacement, and actual-script quality. The display name alone is not evidence.
- Approved language/locale/register voice profiles for German, French, Spanish, Italian, Mandarin Chinese, Korean, `pt-BR`, and `pt-PT`, with distinct Brazilian and European Portuguese evidence.
- Speaker selection and qualification; signed commercial-use consent/license; compensation/cost; territories/term; distribution, editing, offline, replacement, withdrawal, and attribution rights.
- Actual recording from the frozen approved script, immutable masters/derivatives, metadata, checksums, storage/access decisions, linguistic QA covering pronunciation, stress, rhythm, pauses, naturalness, register, and tones where applicable, technical QA, accessibility checks, and representative-device tests.
- Approved illustration decision and provenance if imagery is introduced. No illustration is required by this draft.

### Founder/content-owner decisions

- Whether this accommodation situation belongs in the first German track release; this document does not supersede the evidence-based first-three track process in T1.3.
- Who may appoint reviewers, approve reviewed content, authorize production spend, accept licenses, publish/withdraw releases, and resolve disputes under the unfinished founder/entity agreement.
- Whether to approve, revise, or reject this schema, the `de-DE` scope, the eight-phrase set, deterministic exercises, proposed audio targets, and publication gates.

## 10. Smallest next action

Do not record audio or implement content import. After T1.3/T1.4 supply the required scope and legal/privacy decisions, founders should approve a reviewer brief and engage a qualified `de-DE` reviewer to return a field-level issue log for version `0.1.0-draft`. Any resulting change remains a new draft until the documented workflow is approved.
