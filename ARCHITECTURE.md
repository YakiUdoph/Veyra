# Veyra Architecture

## 1. Status and principles

This is a proposed architecture for implementation planning. No application code or deployed system is claimed. Specific vendors and libraries remain decisions until requirements, compatibility, eligibility, maintenance, security, and cost are checked.

Veyra is a commercial SaaS, not a hackathon system. The planned scope is eight English-to-target tracks across seven target languages, with Brazilian and European Portuguese modeled separately. One founder plans to implement both frontend and backend, so the architecture should remain operable by a small team without weakening security or review controls. The founders jointly own the project, but ownership percentages remain unresolved. “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified.

Architectural principles:

- Server-enforced trust boundaries; the client is never authoritative for identity, entitlements, scores, or publication state.
- Versioned, reviewable learning content rather than uncontrolled strings embedded in UI code.
- Least privilege, user-level data isolation, and deny-by-default authorization.
- Honest degradation when audio, content, network, or billing services are unavailable.
- Mobile-first delivery, accessibility, observability, testability, and reversible choices.
- No production secret in source control or browser-delivered bundles.
- Explicit user preferences outrank inferred locale signals; browser language may suggest but country/IP never forces interface or instructional language.

## 2. System boundaries

### Veyra-controlled boundary

- Next.js web application and server routes/actions.
- Domain services for content access, learning sessions, progress, review, and entitlements.
- PostgreSQL data model and migrations.
- Content publishing and audit workflow.
- Asset metadata and delivery authorization where needed.
- Provider adapters for authentication, email, object storage/CDN, observability, and billing.

### External boundaries

- Authentication/email delivery service if selected.
- Object storage and CDN for audio and illustrations.
- Billing provider and its webhook/event system.
- Hosting, managed PostgreSQL, logging, monitoring, and backup services.
- Human linguists, audio speakers/producers, and asset licensors.

Each external service requires a data-processing, security, availability, eligibility, exit, and cost review. Provider names are not selected in Phase 0.

## 3. Proposed technology

- **Application:** Next.js App Router with TypeScript.
- **UI:** React through Next.js and Tailwind CSS.
- **Database:** PostgreSQL with migration tooling and a type-safe access layer selected after evaluation.
- **Authentication:** A secure maintained solution supporting server-validated sessions, verification/recovery, rotation/revocation, and CSRF-safe flows where relevant.
- **Storage:** Private origin/object storage for master assets, with CDN delivery and immutable versioned keys.
- **Testing:** Vitest for appropriate unit/component/integration tests; Playwright for browser end-to-end and accessibility-oriented journeys.
- **Deployment:** Managed environments with separate preview/staging/production configuration and a PostgreSQL service supporting backups and point-in-time recovery where required.

No library should be introduced solely because it is popular. Record the decision, version compatibility, maintenance posture, security implications, bundle/runtime cost, and alternatives in a short architecture decision record when selection materially constrains the product.

## 4. Logical application layers

1. **Presentation:** Server and client components, accessible controls, responsive layouts, and localized display formatting.
2. **Application:** Use cases such as start lesson, answer exercise, update progress, manage review queue, and resolve entitlement.
3. **Domain:** Track/content rules, publication rules, progress transitions, exercise evaluation, and subscription entitlement policy.
4. **Persistence:** Repositories/queries, transactions, migrations, concurrency controls, and audit records.
5. **Integrations:** Authentication, email, asset delivery, billing webhooks, logging, and monitoring behind narrow adapters.

Domain rules should remain testable without calling external providers.

## 5. Proposed data model

Identifiers should be opaque. Timestamps should be stored in UTC. User-facing locales and source/target language codes should use explicit standards and product-defined variants.

| Entity | Purpose and key relationships |
|---|---|
| `User` | Product profile keyed to the authentication subject; contains minimal application data, not reusable credentials. |
| `UserPreference` | Explicit `interfaceLocale`, `instructionalLocale`, active track, reduced-motion choice where stored, and optional onboarding state. Inferred browser locale is not persisted as consent or an explicit selection. |
| `LearningTrack` | Source language, target language, regional variant, display metadata, status, and current published release. `pt-BR` and `pt-PT` are distinct. |
| `ContentRelease` | Immutable/versioned release for a track, with draft/reviewed/published/retired states, reviewer evidence, and timestamps. |
| `Situation` | Ordered practical context within a content release. |
| `Phrase` | Ordered source/target text, context, locale, and review metadata within a situation/release. |
| `PronunciationGuide` | Optional script/romanization data such as reviewed Pinyin, explicitly linked to a phrase version. |
| `AudioAsset` | Storage key, locale, speaker/source, duration/type, checksum, license reference, review state, and phrase-version association. |
| `IllustrationAsset` | Storage key, alt-text policy, source/license metadata, checksum, and content association. |
| `Exercise` | Versioned deterministic prompt, answer specification, type, and content links. |
| `LessonProgress` | User, track, release/situation, state, last position, completion timestamps, and concurrency version. |
| `PhraseProgress` | User and immutable phrase-version state: attempts, correct/incorrect counts, last seen, difficulty state, and review timing if introduced. |
| `ExerciseAttempt` | Append-oriented answer record with exercise version, outcome, and timestamp; retention must be defined. |
| `ReviewItem` | User/phrase-version focused-review state and reason. |
| `SubscriptionCustomer` | Mapping from user to billing-provider customer identifier; no sensitive payment credentials. |
| `Subscription` | Provider subscription reference, normalized status, plan/price reference, current period, cancellation state, and last verified event. |
| `BillingEvent` | Deduplicated provider event identifier, verification status, received/processed timestamps, type, and safe diagnostic metadata. |
| `Entitlement` | Server-computed feature access with source, validity window, and audit trail. |
| `AuditEvent` | Security/content/admin actions with actor, action, subject, time, and minimal safe metadata. |
| `ConsentRecord` | User/anonymous subject where appropriate, consent category, choice, policy/version, capture method, jurisdiction context if approved, and timestamps; avoid storing unnecessary fingerprinting data. |
| `CommunicationPreference` | User-level marketing/nonessential email choices, source, and update timestamp; transactional classification must follow approved requirements. |
| `DeletionRequest` | Authorized request, scope, state, verification/confirmation timestamps, execution evidence, and approved retention exceptions without exposing deleted content. |
| `EligibilityDecision` | Minimal, auditable result of the approved age/region eligibility and consent policy (for example allowed, additional consent required, or unavailable), policy/version, and timestamps; avoid storing full date of birth or identity evidence unless verified requirements make it necessary. |

Schema details and retention rules require design before migrations. Do not store raw webhook secrets, passwords, full card data, or unnecessary personal data.

### Localization-ready boundaries

- Use standards-based locale identifiers (such as BCP 47 where appropriate) and explicit product-defined track identifiers; do not overload one field for interface, instruction, and target language.
- Resolve interface locale in this order: explicit saved choice, explicit current-session choice, supported browser-language suggestion, then documented default. IP/country may inform legal eligibility only after approval; it never chooses language.
- English is the confirmed initial instructional locale. The eight existing tracks remain English-to-target and unchanged.
- Store interface messages in versioned locale resources separate from reviewed learning content. A translated UI resource cannot alter or imply translated phrases, exercises, audio, or instructional explanations.
- Future instructional locales require separate versioned content releases, linguistic review, asset/audio associations, and progress/version policy.
- Unsupported or missing interface strings use an explicit tested fallback and must be observable; missing lesson translations are unavailable, never machine-filled silently.
- Locale-sensitive formatting for dates, times, numbers, currencies, names, text direction, pluralization, sorting, line breaking, and fonts belongs to the presentation boundary and support matrix.
- Language preference changes must be authorized for authenticated users, persist across sessions, remain reversible, and not reset progress or silently switch target tracks.

## 6. Content versioning and publication

- Content changes are drafted in a new immutable release or version, never silently edited under completed learner history.
- Publication requires a recorded reviewer, review date, locale, and review state. Reviewer qualifications and approval workflow are unresolved.
- A release references immutable phrase, exercise, guide, and asset versions.
- Progress records retain the content version used. New releases define an explicit migration/display policy rather than rewriting historical attempts.
- Retired releases are unavailable for new lessons but retained as required for history and audit.
- Draft or unreviewed content must never be visible through public queries, predictable URLs, client payloads, or search indexing.
- Content import must validate counts, identifiers, locales, dangerous markup, duplicates, relationships, and required review/license fields before publication.

## 7. Authentication and session security

- Use a maintained authentication system only after evaluation.
- Prefer secure, `HttpOnly`, `Secure`, appropriate `SameSite` cookie-based sessions for the web client; rotate and revoke sessions according to provider guidance.
- Enforce verified identity where risk or product policy requires it; rate-limit registration, login, verification, and recovery.
- Prevent account enumeration and use generic recovery responses.
- Protect state-changing requests against CSRF where the chosen mechanism requires it.
- Require re-authentication for sensitive account actions.
- Never implement custom password cryptography. If passwords are in scope, use the selected provider’s current secure hashing and breach-protection guidance.
- Log security events without credentials, tokens, full cookies, or sensitive request bodies.

## 8. Authorization

- Every request derives the actor from a server-validated session.
- Every user-owned query scopes by authenticated user ID; object identifiers alone never authorize access.
- Roles, if later required, start deny-by-default. Content publication and support/admin actions require explicit permissions and audit events.
- Entitlements are computed on the server from verified state. UI hiding is not authorization.
- Preview access to draft content uses separate explicit permissions and is unavailable to normal users.
- Automated tests must cover horizontal access attempts, unpublished content, expired sessions, revoked entitlements, and privileged operations.

## 9. Progress persistence

- Persist meaningful actions server-side using validated commands.
- Use idempotency keys or natural idempotency for retryable completion/attempt writes.
- Use transactions where an attempt and progress summary must remain consistent.
- Protect against stale concurrent updates using an update version, timestamp condition, or transaction strategy.
- Define completion from explicit domain criteria; never infer completion only from reaching a client route.
- Preserve append-oriented attempt evidence while keeping a query-efficient progress summary.
- Provide a deliberate policy for account deletion, export, retention, and anonymization before collecting production data.

## 10. Audio and illustration delivery

- Keep master assets in controlled storage; deliver optimized immutable variants using content hashes or versioned keys.
- Store license/consent provenance separately from the binary and require it before publish.
- Validate file type by content, size, duration/dimensions, encoding, and malware risk during ingestion.
- Use CDN caching for public licensed assets only when licensing permits; otherwise use short-lived signed access.
- Supply audio controls with play/pause/replay state, transcript/text equivalents, and no autoplay.
- Preload conservatively for mobile data use; failure must show a retry/unavailable state without blocking textual learning.
- Illustrations must be original or lawfully licensed, purposeful, responsive, and supplied with appropriate alternative text or marked decorative.

## 11. Billing boundary

Billing is isolated behind an adapter and remains blocked for release until provider verification.

- The server creates checkout with server-owned price identifiers; it never accepts an arbitrary amount or entitlement from the client.
- Redirect success is not proof of payment.
- Verify webhook authenticity using raw payload/signature requirements, reject replay where supported, deduplicate events, and process idempotently.
- Reconcile out-of-order and missed events against provider state.
- Model pending, active, past-due, canceled, expired, refunded, disputed, and unknown states conservatively.
- Grant access only from verified normalized subscription/entitlement state.
- Keep provider customer/subscription IDs but no card details.
- Test checkout, renewal, failure, cancellation, refund/dispute, duplicate event, delayed event, and entitlement revocation in supported provider environments.
- Verify Nigerian merchant onboarding, payout rails, settlement currency, fees, tax handling, and legal entity requirements before provider selection.

## 12. Security and privacy architecture

- Maintain a threat model and data inventory before production data collection.
- Validate input at every trust boundary; encode output; avoid unsafe HTML; use a restrictive Content Security Policy appropriate to Next.js.
- Set security headers, TLS-only transport, secure cookies, and least-privilege database/service credentials.
- Use parameterized database access and migration review.
- Rate-limit abuse-prone routes and introduce bot controls only with privacy/accessibility review.
- Separate environment secrets in managed secret storage and rotate them after exposure or staff changes.
- Restrict production access, use auditable access paths, and avoid copying production personal data into local/test environments.
- Keep dependencies minimal; automate supported dependency and vulnerability checks; triage findings rather than claiming zero risk.
- Define backup, restore, retention, deletion, incident response, and breach-notification ownership.
- Collect minimal analytics only after purpose, consent, retention, and processor questions are settled.
- Maintain a reviewed registry of every production SDK, third-party script, cookie, pixel, and processor, including purpose, data accessed, legal/consent basis as approved, configuration, owner, version, retention, security review, and removal path.
- Load optional analytics/marketing integrations only after the applicable consent decision; revocation must stop future optional collection and update the recorded preference.
- Treat account and data deletion as an authorized server-side workflow, not a client-only action: re-authenticate where required, prevent cross-user requests, enumerate owned data and external processors, execute idempotently, and retain only documented exceptions.
- Test deletion against backups, logs, analytics, email, billing, object storage, and other processors according to the approved retention policy; never claim immediate erasure where architecture or law requires delayed retention.
- Define age collection or age-assurance only after `T1.4`; minimize age data and prevent unsupported claims of parental consent.
- The confirmed product audience is 13+. Treat ages 13–17 as a distinct privacy/threat-model cohort, collect no minors’ data merely for personalization or marketing convenience, and avoid precise birth dates unless verified requirements justify them.
- Determine region/age eligibility and applicable consent at explicit decision points: before account creation, before optional tracking/marketing, before payment, and when the user changes a relevant region or policy context. Failure or uncertainty defaults to no optional processing and no unsupported availability claim.
- Do not select or integrate an age/identity verification provider until `T1.4` and `T1.8` define necessity, jurisdictions, data minimization, security, accessibility, retention, subprocessors, cost, and exit requirements.
- Separate essential transactional email from marketing/nonessential email and propagate unsubscribe/preference changes to the selected email provider.

### Legal status of architecture controls

The controls above are product and security requirements. The 13+ audience boundary is a confirmed product decision, but legal eligibility for teenagers and adults, consent authority, age-assurance method, retention period, policy content, and jurisdictional applicability must be supplied by `T1.4` and qualified review. Architecture documentation, international targeting, generated policy text, or a successful technical test is not legal approval.

## 13. Deployment and operations

- Environments: local, preview/test, staging where justified, and production, each with separate data and credentials.
- Pull requests should run formatting/linting, type checking, unit/integration tests, build checks, and selected browser tests once those tools exist.
- Database changes use reviewed forward migrations, safe rollout sequencing, and a tested recovery plan; avoid destructive production changes without backups and explicit approval.
- Deploy immutable artifacts from version control with traceable revision and environment configuration.
- Health signals cover availability, errors, latency, database saturation, asset failures, authentication failures, and billing-event processing without logging personal content unnecessarily.
- Alerts require an owner and actionable threshold. Runbooks should cover authentication, database, content, asset, and billing failures.
- Hosting region, provider, SLOs, performance budgets, backup objectives, and log retention are **UNKNOWN**.
- Production launch requires TLS, canonical redirects, and verified ownership for the approved custom domain; domain selection remains blocked by brand clearance. Serve the approved original favicon and related metadata rather than framework defaults.

## 14. Testing architecture

- **Static checks:** formatting, lint rules, TypeScript, dependency/license checks, migration validation, and secret scanning as selected.
- **Unit tests (Vitest):** domain rules, exercise evaluation, progress transitions, entitlement normalization, validators, and content parsing.
- **Integration tests (Vitest or suitable harness):** database queries/transactions, authorization isolation, content publication, provider adapters with controlled fakes, and webhook processing.
- **Component/accessibility tests:** key states, semantics, keyboard behavior, and reduced motion where valuable.
- **End-to-end tests (Playwright):** account flow, lesson/resume, listening/comprehension, review queue, access isolation, responsive behavior, and verified billing sandbox journeys if billing is enabled.
- **Manual checks:** screen readers, real mobile/touch behavior, audio quality, linguistic review, visual polish, recovery procedures, and provider dashboards.
- **Privacy/compliance tests:** consent accept/refuse/withdraw paths, SDK/cookie blocking, email unsubscribe propagation, age-policy states, account/data deletion authorization and idempotency, processor cleanup, retention exceptions, and policy/version visibility.
- **Localization tests:** explicit preference persistence/switching, browser-language suggestion and dismissal, no country/IP forcing, interface/instruction/track independence, fallback and missing-resource behavior, Unicode/script rendering, locale formatting, text expansion/direction where supported, keyboard navigation, contrast, meaningful alt text, and reduced motion.

Test doubles must be labeled and cannot serve as evidence that a real provider, audio file, payment, or deployment works. Test results enter `PROGRESS.md` only when actually executed with command/environment and outcome.

## 15. Unresolved architecture decisions

- Authentication, email, database access, hosting, storage/CDN, monitoring, analytics, and billing providers/libraries.
- Administrative content-authoring approach and reviewer workflow.
- Content import format and release migration policy.
- Privacy jurisdictions, retention periods, data export/deletion requirements, and hosting region.
- Performance budgets, availability/recovery objectives, browser/device support matrix, and capacity targets.
- Billing eligibility and payout feasibility in Nigeria.
- Audio recording, licensing, processing, and delivery economics.
- International launch-market eligibility and age/consent decision rules for 13–17 and 18+ users.
- Future interface/instructional locale roadmap, translation workflow, resource tooling, fallback policy, and support/localized-policy coverage.
