# Veyra Task Plan

## 1. Task conventions

- Status values: `TODO`, `IN PROGRESS`, `BLOCKED`, `COMPLETED`.
- Every unimplemented item begins as `TODO`.
- A task becomes `COMPLETED` only after its acceptance criteria and evidence requirements are satisfied.
- Dependencies refer to task IDs. Tasks may be refined, but scope or decisions must remain consistent with the other governance documents.
- Application implementation requires explicit authorization after Phase 0.

### Current baseline and phase boundary

- Veyra is a commercial, non-hackathon SaaS for practical relocation, travel, work, and everyday communication.
- Scope is eight English-to-target tracks across seven target languages; `pt-BR` and `pt-PT` are separate tracks.
- Veyra targets international users aged 13+, including teenagers aged 13–17 and adults aged 18+; eligibility in each country remains unresolved.
- English is the initial instructional language. Users choose available preferred languages; browser language may suggest but country/IP never forces. Future interface/instructional languages are planned, not completed content.
- One founder plans to implement both frontend and backend; the other may contribute later.
- The founders jointly own the project, but ownership percentages and the governing agreement remain unresolved.
- “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified.
- Documentation work has begun and D0.1 is complete. Business/editorial gates remain unresolved. Application implementation has not started and no application code exists.

## 2. Phase 0 — documentation (current task)

### D0.1 — Establish governance baseline — COMPLETED

- **Dependencies:** None.
- **Scope:** Inspect the repository and create the seven required project-specific governance documents without application code.
- **Acceptance criteria:** All seven files exist; planned vs actual state is explicit; unresolved brand, ownership, payment, linguistic review, and audio licensing questions are recorded; documents are consistent; existing work is preserved.
- **Checks:** Repository inventory, document presence check, cross-document terminology review, and Git diff review.
- **Completion evidence:** Root files `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `RULES.md`, `TASKS.md`, `PROGRESS.md`, and `AGENTS.md`; checks recorded in `PROGRESS.md`.

### D0.2 — Audit and stage the Phase 0 baseline — COMPLETED

- **Dependencies:** D0.1.
- **Scope:** Read all seven documents, inspect the repository and Git state, reconcile baseline terminology and dependencies, update evidence, run the required Git checks, and stage only the seven governance documents. Do not implement application code.
- **Acceptance criteria:** All seven documents consistently preserve the commercial/non-hackathon scope, eight tracks across seven target languages, practical communication focus, initial one-founder full-stack delivery model, unresolved joint-ownership percentages, working-name status, and absence of verified customers/payments/translations/audio; contradictions and unclear dependencies are corrected without inventing approvals; implementation remains explicitly not started; only the seven documents are staged; no commit or push occurs.
- **Checks:** Complete document read, repository inventory, `git status --short`, `git diff --check`, staged-file list, and no-commit verification.
- **Completion evidence:** Audit entry and exact command outcomes in `PROGRESS.md`; staged paths from `git diff --cached --name-only`.

### D0.3 — Add design, trust, and compliance requirements — COMPLETED

- **Dependencies:** D0.2.
- **Scope:** Reconcile mandatory design-integrity, trust, privacy, compliance, security, domain/favicon, SDK-audit, email, age, pricing, consent, and deletion requirements across all seven governance documents without application code.
- **Acceptance criteria:** Existing decisions, task IDs, and dependencies are preserved; legal requirements are separated from product requirements and recommendations; jurisdiction-specific obligations remain unresolved pending `T1.4`; relevant implementation tasks contain measurable acceptance criteria and checks; no compliance approval, feature completion, or test result is invented.
- **Checks:** Complete seven-document read, cross-document term scan, task-ID/dependency comparison, `git diff --check`, and Git status/diff review.
- **Completion evidence:** Documentation-only diff and dated evidence in `PROGRESS.md`.

### D0.4 — Update governance for international users aged 13+ — COMPLETED

- **Dependencies:** D0.3.
- **Scope:** Record confirmed founder decisions for international 13+ users, teenage/adult journeys, English-first instruction, future localization, explicit language preferences, non-forcing browser-language suggestions, unchanged tracks, and one-founder full-stack delivery without application code.
- **Acceptance criteria:** All seven documents distinguish product audience from country-specific legal eligibility; interface, instructional, and target-track locales are separate; youth privacy/data minimization and age/consent decision points are explicit; existing task IDs/dependencies and eight tracks are preserved; T2.1 remains gated; no translated lesson, legal approval, provider, implementation, or test is fabricated.
- **Checks:** Complete seven-document read, cross-document contradiction scan, confirmed/unknown terminology scan, existing task-ID/dependency comparison, `git diff --check`, and `git status --short`.
- **Completion evidence:** Documentation-only diff and dated evidence in `PROGRESS.md`.

### D0.5 — Prepare technical feasibility evidence — COMPLETED

- **Dependencies:** D0.4.
- **Scope:** Inspect the documentation-only repository and actual T1.8/T1.10 dependency chain; research a smallest defensible non-billing architecture using current primary provider/library sources; record candidate compatibility, cost, security/privacy, youth/international impact, lock-in, exit, unknowns, and founder decisions without application code or provider selection.
- **Acceptance criteria:** A clearly non-approved technical decision draft separates verified facts, proposals, unknowns, and founder decisions; covers the proposed stack and Veyra-specific 13+, localization, content/audio, progress, deletion, accessibility, and future-billing boundaries; preserves every implementation task/dependency and leaves T1.8, T1.10, and T2.1 incomplete.
- **Checks:** Complete seven-document read, repository/Git inventory, primary-source verification dated 2026-11-21, task-dependency review, documentation link/whitespace review, `git diff --check`, and `git status --short`.
- **Completion evidence:** `docs/decisions/TDR-0001-technical-foundation-candidates.md` and the dated technical-feasibility entry in `PROGRESS.md`.

## 3. Phase 1 — decisions and discovery

### T1.1 — Resolve founder governance — IN PROGRESS

- **Dependencies:** D0.1.
- **Acceptance criteria:** Founders record ownership percentages, IP assignment, roles, decision rights, vesting/exit considerations as applicable, and who can approve product/legal/financial changes through qualified advice.
- **Tests/checks:** Both founders review the final agreement; counsel/accounting review where appropriate.
- **Evidence:** Signed/approved agreement location and non-sensitive decision summary; do not commit confidential terms unless intentionally approved.
- **Current evidence:** `docs/decisions/FDR-0001-proposed-founder-arrangements.md` records one set of discussion inputs only. It is not mutually approved or signed and does not satisfy the acceptance criteria.
- **Remaining:** Mutual agreement and appropriate legal/accounting review covering ownership/IP structure, responsibilities/contributions, expenses/reimbursement, revenue/compensation, decision authority/deadlock, departure/transfer, operational account control, entity, and paid-launch/teen-payment safeguards.

### T1.2 — Conduct brand and domain clearance — TODO

- **Dependencies:** D0.1.
- **Acceptance criteria:** Relevant name, trademark, company, domain, and social-handle checks are documented for intended markets; founders decide whether to keep or replace the working name; a custom launch domain is selected only for the cleared brand; original favicon requirements and asset ownership/license are approved.
- **Tests/checks:** Qualified legal review where appropriate; verify domain availability and control at decision time; inspect favicon provenance and legibility at required sizes without treating visual approval as trademark clearance.
- **Evidence:** Dated decision, counsel/search references, domain-control evidence, and favicon source/license record without claiming broader clearance than performed.

### T1.3 — Validate user problems and commercial hypotheses — IN PROGRESS

- **Dependencies:** D0.1.
- **Acceptance criteria:** Founders predefine international participant segments including ages 13–17 and 18+, relocation/travel/work contexts, language/accessibility needs, interview/usability method, sample target, and success/failure thresholds; conduct research; record anonymized findings and resulting scope/pricing decisions.
- **Tests/checks:** Research notes trace conclusions; contradictory evidence is retained; approved safeguards, consent, recruitment, data minimization, and deletion requirements for research involving teenagers are followed.
- **Evidence:** Research plan, dated findings, and decision record. No fabricated statistics.
- **Current evidence:** `docs/research/T1.3-product-validation-plan.md` proposes evidence-labeled segments, an interview/concept-test method, 10 questions, sample and decision thresholds, an approach comparison, an eight-track scoring rubric, a testable lesson flow, and completion evidence. It contains no participant findings and is not founder-approved.
- **Remaining:** Founder approval of the plan and thresholds; qualified research-specific youth/privacy safeguards; lawful recruitment and consent evidence; completed interviews and concept tests; anonymized findings including contrary evidence; an evidence-cited all-track matrix; and a founder-approved scope, first-three sequencing, free-beta, and pricing decision record.

### T1.4 — Define launch jurisdictions, privacy, and legal requirements — TODO

- **Dependencies:** T1.1, T1.3.
- **Acceptance criteria:** Intended operating/launch jurisdictions, excluded regions, and business entity are recorded; qualified review maps eligibility separately for ages 13–17 and 18+, including registration, consent authority, age assurance, guardian involvement if applicable, optional tracking, marketing, payments/subscriptions, consumer rights, support/escalation, and data rights. Review also identifies applicable privacy, terms, refund/cancellation, cookie/tracking, accessibility, marketing-email, business-disclosure, data-subject, account/data-deletion, retention, localization/policy-language, and content-disclaimer requirements. Legal obligations, contractual/provider duties, internal product requirements, and recommendations are labeled separately. Approved policy documents include version, effective date, applicable markets/ages, owner, and review evidence; generic/generated text is never presented as approved.
- **Tests/checks:** Qualified legal/privacy review; country-by-age eligibility matrix; policy-to-data-flow and policy-to-product control mapping; consistency review against pricing, providers, SDK/cookie inventory, email classes, deletion/retention design, language availability, and age handling; product requirements mapped to implementation tasks.
- **Evidence:** Approved requirements matrix, qualified review record, jurisdiction scope, versioned approved policies/links, and unresolved questions. Templates or drafts remain explicitly labeled unapproved.

### T1.5 — Verify billing providers and Nigerian payouts — TODO

- **Dependencies:** T1.1, T1.4.
- **Acceptance criteria:** Candidate providers are compared using current official evidence for merchant/entity eligibility, Nigerian onboarding/payout needs, intended international customer countries, age/contract eligibility, currencies, settlement/payouts, fees, taxes, subscriptions, refunds/disputes, webhooks, localization, and customer portal; one provider/supported-market scope is approved or billing remains blocked.
- **Tests/checks:** Provider onboarding feasibility confirmed directly; no reliance on a checkout demo alone.
- **Evidence:** Dated provider matrix, official sources, account eligibility result, and decision record.

### T1.6 — Define linguistic review workflow — TODO

- **Dependencies:** T1.3, T1.4.
- **Acceptance criteria:** Reviewer qualifications, locale choices, style guide, source attribution, draft/review/approval states, dispute handling, re-review/versioning, and specialist requirements for Mandarin, Korean, `pt-BR`, and `pt-PT` are approved. Interface-resource localization is defined separately from instructional/lesson localization. English remains the initial instructional locale; any future instructional locale requires independently reviewed source explanations, phrases, exercises, audio, policy/support boundaries, and release evidence.
- **Tests/checks:** Pilot entries pass the workflow with auditable feedback; reviewers explicitly approve locale metadata; tests demonstrate that interface-language changes do not imply or silently create translated lesson content.
- **Evidence:** Content and localization style guides, reviewer agreement/process, locale/resource ownership matrix, and pilot review records.
- **Preparation evidence:** `docs/content/german-accommodation-module-spec.md` proposes a reusable locale-aware content contract, an explicitly unreviewed `de-DE` accommodation pilot, deterministic exercises, a review/status workflow, correction controls, and publication gates. It is not an approved style guide, reviewer process, locale decision, or pilot review record.
- **Remaining:** Complete T1.3/T1.4; approve reviewer qualifications, locale/style/source/IP rules, agreements, dispute and re-review processes; appoint qualified reviewers; review every pilot field; resolve issues; and record exact-version approval and pilot evidence.

### T1.7 — Define audio and illustration production/licensing — TODO

- **Dependencies:** T1.4, T1.6.
- **Acceptance criteria:** Speaker/source, locale, consent/license, recording specification, quality review, file format, storage, replacement, cost, and illustration provenance processes are approved.
- **Tests/checks:** Pilot assets pass linguistic, audio/visual quality, accessibility, metadata, and license checks.
- **Evidence:** Asset policy, license templates/records, technical spec, and pilot approval.
- **Preparation evidence:** `docs/content/german-accommodation-module-spec.md` proposes audio reference metadata and rights, linguistic, technical, accessibility, versioning, withdrawal, and replacement acceptance criteria. No speaker, recording, license, consent, cost, storage decision, illustration, QA result, or pilot asset exists.
- **Founder audio-quality requirements:** Natural, authentic, regionally appropriate output; language-appropriate voice profiles for all eight tracks; distinct `pt-BR` and `pt-PT` profiles; qualified review of each actual asset for pronunciation, stress, rhythm, pauses, naturalness, register, and tones where applicable; immutable versioned rights/review evidence; no unapproved publication; and no unauthorized voice cloning. ElevenLabs “Lauren USA” is the preferred English instructional-narration reference only, subject to provider, identity, availability, licensing, compatibility, continuity, data, cost, and actual-output verification.
- **Remaining:** Complete T1.4/T1.6; verify or reject the ElevenLabs/“Lauren USA” candidate without treating a display name as a stable licensed identity; approve each language/locale voice profile, provider/speaker path, cloning prohibition/authorization controls, asset policy, license/consent terms, recording/delivery specification, storage and replacement process, costs, and illustration provenance rules; then produce and approve licensed pilot assets. T1.7 remains incomplete.

### T1.8 — Approve technical decision records — TODO

- **Dependencies:** T1.4, T1.6, T1.7. Billing-specific decisions additionally depend on T1.5; unresolved billing must not block decisions for a non-billing implementation foundation.
- **Acceptance criteria:** Hosting, PostgreSQL, data-access/migration tooling, authentication, email, storage/CDN, observability, analytics, and localization resource/tooling choices have requirements-based decision records, version compatibility checks, costs, risks, data locations, retention implications, subprocessors/SDKs, consent requirements, accessibility impact, and exit/removal paths. Records separate interface locale, instructional locale, and target track; define explicit-preference precedence, browser suggestion, fallback, Unicode/script support, and locale formatting. Every proposed SDK/script/cookie/pixel has a documented purpose and data-access audit. No age/identity provider is selected without a verified need and full privacy/security/accessibility review. A billing decision record is required only if billing is approved for the implementation scope; otherwise billing remains explicitly deferred and blocked.
- **Tests/checks:** Minimal isolated technical spikes only if explicitly authorized; security/privacy, youth threat model, locale/fallback, SDK/data-flow, license, deletion/export, unsubscribe, age-provider necessity, and provider-exit review.
- **Evidence:** Versioned architecture decision records, SDK/processor inventory, data-flow notes, and updated architecture/task dependencies.

### T1.9 — Produce and validate original UX prototypes — TODO

- **Dependencies:** T1.3, T1.6, T1.7.
- **Acceptance criteria:** Mobile-first flows cover teenage and adult public entry, explicit interface/instructional/track selection, browser-language suggestion/dismissal, easy language switching, age/region eligibility, authentication, home, lessons, exercises, review, progress, account, transparent billing, applicable policy access, consent/refusal/withdrawal, email preferences/unsubscribe, account/data deletion and retention-exception states, plus operational errors. All supported scripts/locales are exercised; unavailable translations are honest; hero copy is specific; the approved custom-domain/favicon identity is represented; prohibited generic gradients, fake social proof/metrics, excessive animation, gratuitous pill buttons, emoji UI icons, unnecessary AI branding, and dark patterns are absent. Representative users aged 13–17 and 18+ complete approved key prototype journeys against predefined criteria.
- **Tests/checks:** Accessibility review, keyboard/focus plan, contrast checks, meaningful-alt-text review, 320px/reflow review, reduced-motion behavior, language-switch/track-independence tests, anti-pattern review, favicon small-size/theme check, age-appropriate/trust-copy comprehension, transparent-pricing review, and safeguarded usability sessions including consent and deletion flows.
- **Evidence:** Original designs/prototypes, lawful asset/favicon provenance, completed anti-pattern checklist, test plan/results, and approved changes.

### T1.10 — Define release quality budgets and support matrix — TODO

- **Dependencies:** T1.3, T1.8, T1.9.
- **Acceptance criteria:** Supported browsers/devices, initial interface/instructional locales, scripts/fonts, locale fallback/formatting, teenage/adult and approved country/region matrix, performance budgets, availability/latency objectives, backup/restore objectives, monitoring thresholds, accessibility test matrix, SDK/privacy regression checks, consent and deletion test environments, and beta/launch metrics are explicitly approved. The matrix defines pass/fail evidence for explicit preference switching, browser suggestion/no country forcing, track independence, custom-domain/favicon readiness, transparent pricing, policy/version visibility, optional SDK blocking, unsubscribe propagation, authorization, and deletion/retention behavior.
- **Tests/checks:** Budgets are measurable in chosen tooling and realistic on representative mobile/network profiles; each trust/compliance check has an owner, environment, trigger, and evidence format.
- **Evidence:** Dated quality plan, trust/compliance test matrix, and updated PRD launch gates if numeric thresholds are approved.

## 4. Phase 2 — implementation foundation

### T2.1 — Bootstrap the application and quality toolchain — TODO

- **Dependencies:** T1.8, T1.10; explicit implementation authorization.
- **Acceptance criteria:** Supported Next.js App Router/TypeScript/Tailwind setup; pinned/runtime requirements; formatting, lint, typecheck, Vitest, Playwright, environment validation, secret-safe examples, localization-ready resource/test structure from approved `T1.8` decisions, dependency/license inventory, and an initial SDK/script/cookie register; no unnecessary dependency, analytics, AI SDK, pixel, tracking code, translated lesson content, or unapproved age-verification provider.
- **Tests/checks:** Install, format/lint, typecheck, unit smoke test, browser smoke test, production build, dependency/license audit, secret scan, and verification that no optional network SDK/tracker loads in the baseline.
- **Evidence:** Commands and outputs recorded in `PROGRESS.md`; dependency decision references and initial integration inventory.

### T2.2 — Establish design tokens and accessible application shell — TODO

- **Dependencies:** T1.9, T2.1.
- **Acceptance criteria:** Approved original tokens, international script/font fallbacks, lawful icon system, semantic landmarks, navigation, explicit available-language selector/switcher, responsive shell, focus treatment, reduced motion, base error/loading patterns, metadata, and non-placeholder favicon exist without copied UI. Interface language changes are reversible and independent from instructional locale/track; browser suggestions are dismissible and country/IP never forces language. Generic gradients, vague hero content, fake proof/metrics, excessive animation, gratuitous pills, emoji icons, unnecessary AI branding, and default framework branding are absent.
- **Tests/checks:** Component/unit checks, automated accessibility scan, full keyboard walkthrough, contrast and meaningful-alt-text review, 320px and zoom/reflow review, reduced-motion check, preference/suggestion/fallback tests, track-independence test, international text-expansion/script review, anti-pattern inspection, metadata/favicon rendering check, and asset-license review.
- **Evidence:** Test output, screenshots across agreed viewports and favicon contexts, provenance records, completed anti-pattern checklist, and manual check notes.

### T2.3 — Establish database, migrations, and local test isolation — TODO

- **Dependencies:** T1.8, T2.1.
- **Acceptance criteria:** Approved schema foundation includes distinct interface/instructional/track preferences and the minimum approved eligibility/consent state without unnecessary youth data; migration workflow, constraints/indexes, generated types where selected, isolated test database, and documented safe reset procedure are established.
- **Tests/checks:** Apply migrations from empty state, idempotent setup where intended, integration test, and rollback/recovery strategy review.
- **Evidence:** Migration/test output and schema decision references.

### T2.4 — Implement secure authentication and account lifecycle — TODO

- **Dependencies:** T1.4, T1.8, T2.2, T2.3.
- **Acceptance criteria:** Registration/login/logout, verification/recovery as selected, approved 13+ age/region eligibility and consent paths for teenagers/adults, protected routes/actions, session security, generic enumeration-safe errors, rate limits, explicit language preferences, and account/privacy controls required for beta are implemented without an unapproved age-verification provider or excess minors’ data.
- **Tests/checks:** Unit/integration/E2E for approved teen/adult and region states, under-13/unavailable handling as legally specified, consent/guardian paths where applicable, data minimization, success, failure, expiry, revocation, CSRF considerations, horizontal access, language preference persistence, keyboard, and accessible errors.
- **Evidence:** Actual test results and security review notes.

### T2.5 — Implement authorization and audit foundation — TODO

- **Dependencies:** T2.3, T2.4.
- **Acceptance criteria:** Deny-by-default policy, user-scoped repositories, explicit content/admin permissions, entitlement interface, and safe audit events cover learning data plus consent, communication preferences, export, account deletion, and data-deletion operations.
- **Tests/checks:** Cross-user/object-ID attempts, unauthenticated calls, privilege escalation, unpublished content access, unauthorized consent/preference mutation, unauthorized deletion/export, retry/idempotency, and log redaction tests.
- **Evidence:** Test outputs and threat-model update.

## 5. Phase 3 — content and learning experience

### T3.1 — Implement versioned content schema and validation — TODO

- **Dependencies:** T1.6, T1.7, T2.3, T2.5.
- **Acceptance criteria:** Track/release/situation/phrase/guide/exercise/asset models separate instructional locale from interface locale and target track; immutable publication behavior, standards-based locale validation, English-instruction initial scope, review/license requirements, and safe import validation prevent unreviewed translated lesson content.
- **Tests/checks:** Invalid/unsupported interface and instructional locales, silent machine-filled content, locale/count/review/license/markup/relationship cases; draft data is not publicly queryable; release history remains stable.
- **Evidence:** Migrations, fixtures labeled as test-only, and executed integration tests.

### T3.2 — Produce and approve MVP learning content — TODO

- **Dependencies:** T1.6, T3.1.
- **Acceptance criteria:** 192/192 planned entries across eight tracks meet the approved review workflow; three situations and eight phrases per situation; required regional/script metadata complete.
- **Tests/checks:** Automated structural validation plus human linguistic approval; duplicate and cross-locale review.
- **Evidence:** Review records, versioned release manifest, validator output. Machine checks do not replace human approval.

### T3.3 — Produce and approve audio/illustration assets — TODO

- **Dependencies:** T1.7, T3.2.
- **Acceptance criteria:** Every published phrase has approved locale-appropriate audio and required illustrations have lawful provenance and accessible treatment.
- **Tests/checks:** Checksum/format/duration metadata validation, human audio/locale QA, license/consent audit, visual accessibility review.
- **Evidence:** Asset manifest, license references, QA approvals, and validator output.

### T3.4 — Implement track, home, and situation navigation — TODO

- **Dependencies:** T2.2, T3.1.
- **Acceptance criteria:** Only published/available tracks and content are accessible; regional variants and English instructional language are explicit; users can switch available interface language without changing instructional locale, target track, or progress; unsupported translation and loading/empty/error/locked/responsive states follow design.
- **Tests/checks:** Unit/integration/E2E for preference persistence, browser suggestion dismissal, no country forcing, locale fallback, track/progress independence, unpublished-content authorization, keyboard/screen-reader spot checks, contrast, meaningful alt text, reduced motion, and responsive matrix.
- **Evidence:** Executed checks and screenshots/manual notes.

### T3.5 — Implement phrase lessons and audio delivery — TODO

- **Dependencies:** T3.1, T3.3, T3.4.
- **Acceptance criteria:** Script-aware phrase card, reviewed guide/context, accessible audio controls, difficult toggle, predictable navigation, retry/unavailable behavior, and lawful immutable asset delivery.
- **Tests/checks:** Audio success/failure, no autoplay, keyboard/screen reader, reduced motion, mobile data/loading, authorization/cache behavior.
- **Evidence:** Test outputs and manual audio/accessibility QA.

### T3.6 — Implement deterministic exercises — TODO

- **Dependencies:** T3.1, T3.5.
- **Acceptance criteria:** Listening/comprehension prompts use versioned reviewed answers; clear accessible feedback; retry-safe submission; audio failure cannot count as listening success.
- **Tests/checks:** Domain unit tests for answer evaluation; integration/E2E for attempts, retries, failure, accessibility, and content versions.
- **Evidence:** Executed test results and manual interaction review.

### T3.7 — Implement progress persistence and resume — TODO

- **Dependencies:** T2.5, T3.4, T3.6.
- **Acceptance criteria:** Transactional/idempotent user-scoped progress, explicit completion rules, concurrency handling, resume across sessions/devices, and version-aware history.
- **Tests/checks:** Retry/duplicate, concurrent update, cross-user, logout/login, new-content-version, partial/error-path tests.
- **Evidence:** Database/integration/E2E output and reviewed completion rules.

### T3.8 — Implement difficult-phrase review — TODO

- **Dependencies:** T3.5, T3.7.
- **Acceptance criteria:** Add/remove/defer and exercise-driven difficult state work by user/track/content version; empty and sync-error states are honest.
- **Tests/checks:** State-transition unit tests, persistence/isolation integration tests, responsive/accessibility E2E.
- **Evidence:** Executed tests and manual review notes.

## 6. Phase 4 — billing, operations, and release

### T4.1 — Implement billing adapter and verified event processing — TODO

- **Dependencies:** T1.5 approved (not blocked), T1.8, T2.5.
- **Acceptance criteria:** Server-owned plans/prices; signed raw-event verification; deduplication/idempotency; reconciliation; normalized states; no client-authoritative success.
- **Tests/checks:** Controlled unit/integration tests for valid/invalid signatures, duplicate/out-of-order/delayed events, renewal/failure/cancel/refund/dispute, and replay behavior.
- **Evidence:** Executed test output and provider documentation/version references.

### T4.2 — Implement subscription UX and entitlements — TODO

- **Dependencies:** T1.4, T4.1.
- **Acceptance criteria:** Transparent plans/terms show verified business information, price, currency, interval, renewal, included access, material restrictions, cancellation, and applicable approved refund information before checkout; pending/active/failure/canceled/refunded/unknown states, customer management/cancellation, and server-enforced access are implemented without fake urgency or confirmation.
- **Tests/checks:** Provider sandbox E2E plus authorization tests, price/term consistency checks, applicable policy-link/version checks, refund/cancellation state checks, and accessible responsive states. Sandbox is labeled as such.
- **Evidence:** Test identifiers/results, webhook logs with secrets/personal data removed, and manual UX/accessibility review.

### T4.3 — Complete privacy, account data, and operational controls — TODO

- **Dependencies:** T1.4, T2.4, T3.7, T4.2 if billing launches.
- **Acceptance criteria:** Approved applicable privacy/terms/refund/cookie policies and accurate business/support information are published with version/effective date and only in approved available translations; consent acceptance/refusal/withdrawal controls and records work; data and SDK/processor/cookie inventories are current; country-by-age eligibility for 13–17 and 18+ users, youth data minimization, language preferences, email classification/unsubscribe, retention, export, authenticated account/data deletion, processor cleanup, redacted logging, backups, restore, and incident runbooks match approved requirements. Retention exceptions, regional unavailability, and delayed backup expiry are reported truthfully.
- **Tests/checks:** Policy/version/link checks; consent accept/refuse/withdraw and optional SDK-blocking tests; data-minimization and integration audit; age-state tests; unsubscribe propagation; cross-user and retry-safe export/deletion verification across database, assets, logs, backups, email, analytics, billing, and other processors; backup restore exercise, log review, privilege/access audit, and incident tabletop.
- **Evidence:** Dated execution records, approved policies/runbooks, consent and SDK inventories, provider cleanup evidence, deletion trace with safe metadata, retention-exception record, and qualified approval references.

### T4.4 — Perform full security and accessibility verification — TODO

- **Dependencies:** T3.8, T4.2 if billing launches, T4.3.
- **Acceptance criteria:** Threat/privacy model covers teenagers and adults across approved markets; no unresolved critical/high finding; key learning, language selection/switching, policy, consent, pricing, age, unsubscribe, export, and deletion journeys meet the approved WCAG 2.2 AA test plan; authorization, dependency, SDK, secret, configuration, youth data-minimization, localization, and deletion controls are verified.
- **Tests/checks:** Static/automated checks plus manual cross-user authorization, teen/adult eligibility, safe-data handling, consent/SDK behavior, deletion/retention, browser suggestion/no country forcing, language fallback/track independence, keyboard, focus, reflow, contrast, meaningful alt text, screen-reader, reduced-motion, and error recovery testing.
- **Evidence:** Dated reports, findings, remediation links, and retest results.

### T4.5 — Verify performance, reliability, and deployment — TODO

- **Dependencies:** T1.10, T4.3, T4.4.
- **Acceptance criteria:** Approved budgets/objectives are met in a production-like environment; monitoring/alerts are owned; migrations, rollback, backup restore, asset failure behavior, consent-dependent SDK loading, approved custom-domain TLS/canonical behavior, and original favicon/metadata delivery are verified.
- **Tests/checks:** Production build, representative mobile performance runs, load/capacity checks as defined, recovery drill, custom-domain/DNS/TLS/canonical checks, favicon/metadata checks, consent-mode network inspection, and smoke/E2E suite.
- **Evidence:** Environment/revision-tagged results and runbook links.

### T4.6 — Run controlled beta and evaluate launch gates — TODO

- **Dependencies:** T3.2, T3.3, T4.4, T4.5, and T4.2 if paid billing is included.
- **Acceptance criteria:** Predefined beta metrics/research for approved teenage/adult and international segments is completed with applicable consent; defects are triaged; every PRD launch gate—including approved launch countries, 13–17/18+ eligibility, localization truthfulness, language preference/switching, design integrity, custom domain/favicon, applicable policy approval, accurate business/pricing information, SDK audit, consent, unsubscribe, accessibility, and account/data deletion—is marked pass, fail, or blocked with evidence; founders record launch/no-launch decision.
- **Tests/checks:** Full acceptance suite and manual journey review on support matrix; legal-approval scope check; design anti-pattern review; trust/compliance and evidence audit.
- **Evidence:** Honest beta report, launch-gate checklist, known risks, and signed decision.

## 7. Blocked-by-default conditions

- Paid billing tasks remain blocked unless T1.5 confirms provider eligibility and payouts.
- Publication of learning content remains blocked until T1.6 and human review evidence exist.
- Publication of audio remains blocked until T1.7 and license/consent evidence exist.
- Commercial use of “Veyra” remains provisional until T1.2.
- Any ownership-dependent commitment remains blocked until T1.1.
- Public launch remains blocked until `T1.4` verifies jurisdiction-specific requirements, `T1.2` clears the brand/custom domain/favicon provenance, and the applicable policy, consent, SDK, pricing, business-information, age, unsubscribe, accessibility, and deletion controls have verified evidence.
- T2.1 remains blocked until T1.8 and T1.10 are actually complete and explicit implementation authorization is granted; these documentation decisions do not satisfy those gates.
- International availability remains blocked country by country until teen/adult eligibility, consent/privacy, policy/support language, payments where offered, and operational support are verified. Future interface or instructional languages remain unavailable until their resources and required human/legal reviews exist.
