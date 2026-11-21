# Veyra Project Rules

These rules apply to founders, contributors, contractors, automation, and coding agents. They protect the commercial product from fabricated claims, unsafe shortcuts, and undocumented scope drift.

The protected baseline is a commercial, non-hackathon SaaS for practical relocation, travel, work, and everyday communication: eight English-to-target tracks across seven target languages, with `pt-BR` and `pt-PT` separate. Veyra targets international users aged 13+, including teenagers aged 13–17 and adults; international targeting does not prove legal eligibility in every country. English is the initial instructional language, while future interface/instructional languages require separate approval and evidence. Users control available language preferences; browser language may suggest but country/IP never forces a language. One founder plans to implement both frontend and backend; the other may contribute later. The founders jointly own the project, but ownership percentages remain unresolved. “Veyra” is a working name pending clearance. No customers, payments, translated lesson content, linguistic approvals, or audio are verified. Changing any of these facts requires explicit evidence and a synchronized documentation update.

## 1. Truth and evidence

1. Do not fabricate functionality, deployments, customers, revenue, research, testimonials, usage, demand, partnerships, credentials, reviews, or metrics.
2. Do not claim a task, test, review, deployment, or provider flow is complete without inspectable evidence.
3. Do not present mocks, fixtures, stubs, screenshots, generated assets, or test doubles as live functionality.
4. Record uncertainty using `PROPOSED`, `UNKNOWN`, or `BLOCKED`; never turn an assumption into a fact through repetition.
5. `PROGRESS.md` contains only actual work and actual checks. Include command/environment and outcome for test claims.
6. Do not claim production readiness until every applicable launch gate in `PRD.md` is evidenced.
7. Do not fabricate social proof, testimonials, customer logos, ratings, activity, adoption, performance, security, accessibility, compliance, or business metrics.

## 2. Product and scope

1. Work only on an approved numbered task from `TASKS.md`, or add the necessary task and dependency before implementation.
2. Make the smallest coherent change that satisfies its acceptance criteria.
3. Do not expand the MVP with AI tutors, social systems, gamification, native applications, or other excluded features without an explicit product decision and synchronized document update.
4. Preserve the distinction between planned, available, reviewed, published, and completed.
5. Do not use “Veyra” as a cleared commercial brand. Trademark, domain, and name clearance remain unresolved until documented evidence exists.
6. Do not invent founder ownership percentages, authority, IP assignments, or agreements.
7. Preserve the eight confirmed English-to-target tracks. Do not claim that future interface localization creates non-English instructional content or translated lessons.

## 3. Learning content and assets

1. Do not invent, improvise, machine-translate, or silently “correct” translations, regional expressions, pronunciation guides, or linguistic review.
2. Learning content requires a recorded source/version, locale, reviewer, review state, and approval evidence before publication.
3. Mandarin requires reviewed Simplified Chinese and Pinyin. Brazilian and European Portuguese remain distinct in text, audio, and metadata.
4. Do not ship synthetic, placeholder, mislabeled, or unlicensed audio as real pronunciation.
5. Do not implement or claim pronunciation scoring without a separately approved, validated, and honestly communicated method.
6. Use only original or lawfully licensed fonts, icons, illustrations, audio, copy, and other assets. Preserve license and consent records.
7. Do not copy competitor interfaces, lesson content, branding, or protected assets.
8. Pronunciation audio must be natural, authentic, and appropriate to its approved language, locale, region, and register. German, French, Spanish, Italian, Mandarin Chinese, Korean, `pt-BR`, and `pt-PT` require explicit voice selection; `pt-BR` and `pt-PT` require distinct profiles and review evidence.
9. A qualified language reviewer must listen to the actual immutable audio version before publication and record findings for pronunciation, stress, rhythm, pauses, naturalness, register, consistency, and tones where applicable. Script or provider approval alone is insufficient.
10. Keep English instructional narration separate from target-language pronunciation. “ElevenLabs Lauren USA” is a founder-preferred English narration reference only until exact identity, availability, licensing, commercial rights, compatibility, continuity, provider terms, and actual output quality are verified.
11. Store every approved audio version with its content version, locale/region profile, speaker/provider/voice/model source, settings where applicable, checksum, rights/license/consent evidence, reviewer decision, approval, correction history, and replacement/withdrawal path. Never publish an unapproved or rights-unclear asset.
12. Never clone, synthesize, or imitate an identifiable voice without documented authorization, applicable informed consent, rights evidence, and compliance with provider terms and applicable requirements. Never bypass voice-ownership or verification controls.

## 4. Billing and commercial claims

1. Proposed prices are hypotheses, not validation or live offers.
2. Do not assume a provider supports Nigerian merchant eligibility, payouts, currencies, taxes, refunds, or the intended business entity. Verify and document each requirement.
3. Never show a fake payment confirmation or grant access from a client redirect, client-supplied flag, or unverified webhook.
4. Server-side verified, deduplicated, idempotently processed provider state is the authority for paid entitlements.
5. Sandbox success is labeled sandbox success; it is not evidence of production onboarding or payouts.
6. Do not collect live payments until legal terms, privacy, cancellation/refund behavior, support, provider approval, and end-to-end verification are complete.

## 5. Security and privacy

1. Use secure, maintained authentication. Do not build custom cryptography or insecure session handling.
2. Authenticate and authorize every protected server action. Scope user data by the authenticated subject and deny by default.
3. Treat all client input, URLs, uploads, provider events, and imported content as untrusted.
4. Never commit or hardcode production secrets, tokens, private keys, credentials, or personal data. Use managed environment configuration and rotate exposed credentials.
5. Use parameterized data access, validated inputs, safe output handling, least-privilege credentials, secure cookies/headers, rate limits, and audit trails appropriate to risk.
6. Minimize personal data; document purpose, retention, access, export, and deletion before production collection.
7. Keep production data out of development and test environments unless an explicitly approved, lawful, minimized procedure exists.
8. Review dependencies, migrations, logs, backups, and external services for security and privacy impact.
9. Do not log passwords, tokens, full cookies, payment details, or unnecessary personal content.
10. Stop and escalate suspected secret exposure, cross-user access, payment inconsistency, content-license breach, or critical/high security issue.
11. Apply privacy by design: minimize collection, document purpose and retention, default optional tracking off until applicable consent, and audit every production SDK/script/cookie/pixel before use and material upgrades.
12. Account/data deletion must be server-authorized, cross-user safe, idempotent where retried, observable without exposing deleted data, and tested across the primary database, assets, logs, backups, email, analytics, billing, and other processors according to approved retention rules.
13. Do not collect a minor’s precise date of birth, identity document, school, guardian details, contacts, location, behavioral profile, or other youth data unless a verified requirement and approved data-minimization review establish necessity, access, retention, and deletion.
14. Treat ages 13–17 as a distinct threat/privacy-model cohort. Do not target them with manipulative monetization, dark patterns, unnecessary profiling, or unsupported marketing/consent flows.

## 6. Legal and trust classification

1. Treat jurisdiction-specific legal requirements as `UNKNOWN` until `T1.4` records the operating entity, launch jurisdictions, applicable requirements, and qualified approval.
2. Never generate generic privacy, terms, refund, cookie, consent, age, or deletion text and present it as legally approved, jurisdiction-complete, or a substitute for counsel.
3. Clearly label legal obligations separately from internal product requirements and recommendations. If one control serves both, record its verified legal basis and its product rationale separately.
4. Before launch, use approved applicable policy text and verified business/support information; retain version, effective date, approval evidence, and the markets to which each document applies.
5. Show transparent pricing and renewal/cancellation/refund information before purchase; do not use hidden terms, preselected add-ons, false urgency, or misleading confirmation.
6. Obtain and record applicable consent, allow accessible refusal/withdrawal, and prevent optional SDKs/cookies from loading outside the approved choice.
7. Implement approved age safeguards without inventing jurisdiction-specific eligibility/consent thresholds, legal capacity, or parental/guardian consent beyond the confirmed 13+ product audience.
8. Provide working marketing/nonessential email unsubscribe and preference controls while distinguishing required transactional communications.
9. Provide authenticated account/data deletion with clear status and truthful retention exceptions; a UI confirmation alone is not deletion evidence.
10. Lawful asset licensing, accessibility, data minimization, and accurate business information are mandatory product controls even while jurisdiction-specific legal details remain unresolved.
11. The 13+ audience boundary is a product decision, not proof that teenagers can legally register, consent, receive marketing, subscribe, or use every feature in every country. Require qualified age/privacy/consent review for intended launch markets.
12. Never claim worldwide availability or compliance merely because Veyra targets international users.

## 7. Engineering quality

1. Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `RULES.md`, `TASKS.md`, `PROGRESS.md`, and `AGENTS.md` before application implementation.
2. Preserve established repository work and inspect the current state before editing.
3. Prefer clear, typed, testable domain logic and narrow interfaces over premature abstraction.
4. Select libraries only after compatibility, security, maintenance, licensing, accessibility, runtime, and actual need are checked.
5. Add or update tests proportionate to the changed risk. Run relevant checks and report exact outcomes truthfully.
6. Handle loading, empty, error, retry, unavailable, unauthorized, interrupted, and responsive states.
7. Keep migrations reviewed, reversible where practical, and safe for staged rollout. Protect data before destructive operations.
8. Do not weaken linting, types, tests, authentication, authorization, accessibility, or security controls merely to make a check pass.
9. Do not leave misleading dead controls, fake data, placeholder success messages, or production-facing TODO behavior.
10. Record material architecture/product decisions and keep all seven governance documents consistent.

## 8. Accessibility and responsive design

1. Target WCAG 2.2 AA for all key journeys and test with more than automation.
2. Use semantic HTML, visible focus, logical keyboard order, programmatic names, sufficient contrast, and accessible status/error handling.
3. Support touch and keyboard; do not require hover, drag, gesture, sound, color, or motion alone.
4. Honor reduced motion; prevent autoplay; provide text equivalents for audio content.
5. Start at a 320px layout and verify zoom/reflow and real mobile behavior.
6. Do not accept a visually polished component that blocks assistive technology or small-screen use.

## 9. Design integrity

1. Require original, premium, accessible design; do not copy competitors or ship generic dashboard/landing-page patterns as a substitute for product-specific design.
2. Prohibit generic gradients, vague hero copy, fake social proof, fabricated metrics, excessive animation, gratuitous pill buttons, emoji UI icons, and unnecessary AI branding.
3. Use a coherent licensed icon system, restrained purposeful motion, specific truthful copy, and component shapes that match their semantics.
4. Public launch requires a real original/lawful favicon and a custom domain for the cleared brand; default framework identity and an uncleared “Veyra” domain are not launch-ready.

## 10. Localization and internationalization

1. Keep interface locale, instructional locale, and target-language track separate in requirements, data, UI, analytics, and status reporting.
2. English is the only confirmed initial instructional language. Do not fabricate non-English explanations, lesson translations, localized policies, support, or availability.
3. Let users explicitly select and change available preferred languages. Browser language may provide a dismissible suggestion; never force language from country, IP, flag, or browser inference.
4. Preserve a saved explicit preference over inference, and do not reset progress or switch a target track when the interface language changes.
5. Require reviewed localization resources, accessible names, appropriate fonts/scripts, Unicode-safe handling, locale formatting, fallback behavior, and human linguistic approval proportionate to content risk.
6. International design must retain keyboard navigation, contrast, meaningful alternative text, reduced-motion support, and comprehension for teenagers and adults.

## 11. Documentation and change control

1. `PRD.md` is authoritative for product outcomes and scope; `ARCHITECTURE.md` for system boundaries; `DESIGN.md` for experience; `RULES.md` for non-negotiable standards; `TASKS.md` for execution; `PROGRESS.md` for evidence; `AGENTS.md` for agent behavior.
2. Resolve conflicts using the precedence defined in `AGENTS.md`; do not silently overwrite a decision.
3. Update `TASKS.md` and `PROGRESS.md` after verified work. A task is not complete until acceptance criteria and evidence are satisfied.
4. Keep proposed and actual state separate. Use dates and links/paths to evidence where possible.
5. Preserve any existing “Serial Hackathon Winner Playbook” in full. This commercial project neither replaces nor modifies it. If it appears later, do not edit it without explicit authorization.
6. Never rewrite unrelated user changes or use destructive version-control/file operations without explicit authority and verified targets.

## 12. Stop conditions

Stop, mark the item `BLOCKED`, and request a decision when work would require:

- Inventing a translation, review, audio license, legal conclusion, provider eligibility, ownership term, or research result.
- Handling real payments without verified provider/legal readiness.
- Exposing or weakening protection of user data, credentials, or cross-user boundaries.
- Materially expanding scope or contradicting an established decision.
- Destructive or irreversible data/repository action not explicitly approved.
- Claiming completion without the required evidence.
