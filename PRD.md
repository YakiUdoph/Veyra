# Veyra Product Requirements Document

## 1. Document status

- **Stage:** Phase 0 — documentation baseline
- **Product name:** Veyra (working name only; no trademark, company-name, domain, or commercial-brand clearance is claimed)
- **Product type:** Commercial, mobile-first language-learning SaaS
- **Owners:** Two founders jointly own the project; exact ownership percentages and a formal agreement are **UNKNOWN**
- **Evidence date:** 2026-11-21

This document defines intended product outcomes. It does not claim that the application, content, audio, billing, or customer demand already exists.

### Project baseline

- Veyra is planned as a commercial SaaS product, not a hackathon submission or demo.
- The product plans eight English-to-target learning tracks across seven target languages; Brazilian and European Portuguese are separate tracks within Portuguese.
- Veyra targets international users aged 13 and above; teenagers aged 13–17 and adults aged 18+ are intended audiences. This product decision does not establish legal eligibility in every country.
- English is the initial instructional language. Other interface and instructional languages are a future direction, not completed content.
- Users must be able to select an available preferred language. Browser-language detection may suggest an available language but must never force a language based on browser settings, IP address, or country.
- One founder plans to implement both frontend and backend while the other founder may contribute later.
- The two founders jointly own the project, but ownership percentages and the governing agreement remain unresolved.
- “Veyra” is a working name pending brand, trademark, and domain clearance.
- No customers, payments, translations, linguistic approvals, pronunciation audio, or revenue have been verified or completed on the current evidence.

## 2. Problem

People preparing to relocate, travel, work, or manage daily life in another language need concise, situation-specific communication practice. Many learning products prioritize broad curricula, isolated vocabulary, or gamification over the phrases and listening skills needed in a concrete moment. Veyra will test whether a focused, polished product can help English-speaking learners prepare for practical encounters with reviewed language, authentic pronunciation, and persistent practice.

No market size, customer count, conversion rate, competitor conclusion, or demand validation has yet been established.

## 3. Target users

Confirmed audience boundary and primary hypotheses:

1. Teenagers aged 13–17 preparing for travel, relocation, study, work preparation, or everyday communication.
2. Adults aged 18+ preparing to relocate.
3. Travelers who need high-value phrases for common situations.
4. International workers who need practical workplace and everyday communication.
5. Residents building confidence for routine local interactions.

Veyra targets international users rather than Nigeria alone. International targeting does not prove that registration, content, subscriptions, data processing, or teen use is legally or commercially available in every country. Launch markets, regional exclusions, age/consent rules, payment availability, accessibility obligations, and privacy duties require verification under `T1.4` and related tasks.

Accessibility, device constraints, geography, willingness to pay, teenage/adult needs, and learning preferences require research. The product must not imply suitability for emergencies, legal interpretation, medical interpretation, or certified language proficiency.

## 4. Product promise

Veyra aims to help a learner quickly understand, recall, and pronounce useful phrases for a real situation through a calm mobile-first experience, reviewed regional language, authentic licensed audio, and progress-aware review.

The promise is contingent on professional linguistic review and lawful audio production. Automated pronunciation scoring is excluded from the MVP unless a later validated design can provide honest, reliable feedback.

## 5. Planned learning tracks

All eight tracks across seven target languages are planned from English:

1. German
2. French
3. Spanish
4. Italian
5. Mandarin Chinese, using Simplified Chinese characters and Pinyin
6. Korean
7. Brazilian Portuguese (`pt-BR`)
8. European Portuguese (`pt-PT`)

Brazilian and European Portuguese are separate content and pronunciation tracks. Regional choices for all tracks must be identified in content metadata and reviewed; they must not be silently generalized.

### Localization boundaries

- **Interface locale:** Navigation, buttons, forms, policies, account controls, billing surfaces, and product messages. The initial interface may be English, but the architecture and design must support future approved interface locales.
- **Instructional locale:** The language used to explain a lesson and provide source phrases. English is the only confirmed initial instructional language.
- **Target-language track:** One of the eight existing English-to-target tracks listed above. These tracks and their 192-entry content target remain unchanged.
- Interface localization does not create translated lesson content. A translated interface may still deliver an English-instruction track.
- A future non-English instructional locale requires its own reviewed lesson content, metadata, linguistic workflow, and release evidence; it must not reuse English-source approval as proof of translation quality.
- Users select from actually available interface and instructional languages. Browser language may provide a dismissible suggestion, but country/IP must not force a language or silently change a saved preference.
- Unsupported languages must be labeled unavailable or planned; the product must not imply that translations exist.

## 6. Initial MVP content target

- Three practical situations per language track.
- Eight phrases per situation.
- 24 phrases per track and 192 planned phrase entries in total.
- Reviewed translations, usage notes, and regional expressions.
- Simplified Chinese and Pinyin for Mandarin.
- Distinct `pt-BR` and `pt-PT` wording and pronunciation.
- Licensed, verified human pronunciation audio for published phrases.

These are targets, not completed assets. The situations themselves, content workflow, reviewers, review evidence, and audio licenses are **UNKNOWN**.

## 7. Core user journeys

### 7.1 Shared language and age-appropriate onboarding

1. Visitor understands the practical-learning value and sees honest plan information appropriate to both teenagers and adults.
2. Veyra may suggest an available interface language from the browser preference, clearly labels it as a suggestion, and provides an immediate user-controlled selector.
3. User explicitly selects or confirms an available interface language, instructional language, and one of the eight target-language tracks; the three choices remain conceptually separate.
4. User encounters the approved 13+ eligibility and consent flow for the intended launch jurisdiction without collecting more age data than necessary or claiming universal eligibility.
5. Visitor explores the free introductory offering without false scarcity or a payment claim and creates an account through a secure flow where eligible.
6. User receives applicable approved terms/privacy information and consent choices in an available understood interface language; missing approved translations are handled honestly rather than fabricated.

### 7.2 Teenage learner journey (ages 13–17)

1. Teenager receives concise, age-appropriate onboarding without infantilizing language, behavioral pressure, or manipulative monetization.
2. The system applies the verified regional eligibility/consent path, which may require additional consent or may block availability; the exact rule is unresolved until legal review.
3. Only necessary age/eligibility data is collected and the reason is explained clearly.
4. Teenager selects an available preferred interface/instructional language and target track, can change the preference later, and can access privacy, safety, support, and deletion controls.
5. Learning, review, progress, and subscription surfaces remain accessible and suitable for a mixed teenage/adult audience.

### 7.3 Adult learner journey (ages 18+)

1. Adult receives concise onboarding, selects available interface/instructional languages and a target track, and can revise preferences later.
2. The system applies verified regional eligibility, policy, consent, and billing rules without assuming country from language choice.
3. Adult can access learning, review, progress, subscription, privacy, export, and deletion controls.

### 7.4 Learn a situation

1. User sees the situation objective and estimated scope.
2. User works through illustrated phrase cards containing source phrase, target phrase, pronunciation support where relevant, usage context, and verified audio.
3. User can replay audio, reveal supporting text, move backward or forward, and use keyboard or assistive technology.
4. User completes listening and comprehension checks with clear feedback.
5. Progress is persisted and a resumable state is shown.

### 7.5 Review difficult phrases

1. User marks a phrase difficult or the system records an incorrect response using a disclosed rule.
2. User opens a review queue scoped to the selected track.
3. Practice updates the phrase state without erasing prior history.
4. User can remove a phrase from focused review and can understand what “complete” means.

### 7.6 Subscribe

1. User encounters a transparent feature boundary.
2. User sees current price, billing interval, renewal behavior, taxes/fees if applicable, and cancellation terms.
3. The server creates checkout only through a verified eligible provider.
4. Access changes only after independently verified provider events.
5. User can inspect subscription state and reach a provider-supported cancellation path.

This journey remains **BLOCKED** until provider eligibility for the operating entity and intended launch markets, Nigerian merchant/payout needs, international currencies/regions, taxes, age eligibility, consumer rules, and webhook behavior are verified. International targeting is not proof of payment or subscription availability in any country.

## 8. MVP scope

### Included

- Secure registration, login, logout, session handling, and recovery appropriate to the chosen authentication system.
- Track selection across the eight planned tracks, with only reviewed/published content accessible.
- Situation-based lesson navigation.
- Illustrated phrase flashcards using lawful original or licensed assets.
- Licensed human pronunciation audio and accessible playback controls.
- Listening and comprehension exercises with deterministic answers.
- Server-persisted lesson and phrase progress.
- Difficult-phrase review.
- Responsive, accessible, mobile-first light-mode interface.
- Explicit available-language selection and easy switching without country-based language forcing.
- Versioned learning content and publication state.
- Subscription functionality only after provider and end-to-end verification.
- Operational basics: error handling, logging without sensitive data, backups, security controls, privacy controls, and test coverage proportionate to risk.
- Trust surfaces for accurate business identity, transparent pricing, applicable policies, consent choices, communication preferences, and account/data deletion.
- A production launch identity using an original lawful favicon and a custom domain approved for the commercially cleared brand.

### Explicitly excluded from the initial MVP

- AI conversation tutors or open-ended generated translations.
- Unverified pronunciation scoring.
- Social feeds, leaderboards, streak pressure, and competitive gamification.
- User-authored public content.
- Live tutors, marketplace features, certificates, or proficiency claims.
- Native iOS or Android applications; the MVP is a responsive web application.
- Offline-first synchronization.
- Institutional administration, classroom management, or team accounts.
- Additional source languages or target tracks beyond the eight listed.
- Claims that a phrase is appropriate for legal, medical, or emergency interpretation.

## 9. Commercial assumptions

The following prices are hypotheses, not validated demand or final offers:

- Free introductory lessons.
- Weekly: USD 1.50.
- Monthly: USD 5.00.
- Yearly: USD 50.00.

Open commercial questions include entitlements, free lesson depth, trial behavior, local pricing, taxes, refunds, currency conversion, cancellation, app-store implications, customer support, privacy obligations, and unit economics. No revenue or customers exist on the evidence currently available.

## 10. Trust, legal, and compliance classification

Jurisdiction-specific legal obligations are **UNKNOWN** until `T1.4` identifies the operating entity, launch markets, country-specific youth eligibility/consent policy, data flows, and qualified legal/privacy review. The confirmed 13+ product audience does not settle those legal questions. No template, generated text, checklist, or product decision may be presented as legally approved.

### Applicable legal requirements — pending verification

Where required by verified law, regulation, contract, or provider terms, launch must include approved and accurate privacy, terms, refund/cancellation, and cookie/tracking policies; valid consent and withdrawal behavior; age safeguards; consumer and data-subject rights; required business disclosures; marketing-email unsubscribe; records of consent; and legally compliant account/data deletion or retention handling. The exact scope, wording, retention periods, jurisdiction-specific eligibility/consent thresholds, consent standard, and territorial reach remain unresolved.

### Mandatory product trust requirements

Regardless of the final jurisdictional classification, Veyra must:

- Minimize collected data and document each data category’s purpose, access, processor, retention, and deletion behavior.
- Maintain an inventory of third-party SDKs, scripts, cookies, pixels, and processors; audit their data access, necessity, consent behavior, security, licensing, and removal path before production use and material upgrades.
- Show accurate business and support information without implying an entity, address, registration, endorsement, or availability that has not been verified.
- Show the full price, currency, billing interval, renewal behavior, material restrictions, cancellation path, and applicable refund information before purchase.
- Provide accessible consent controls without preselected optional consent or manipulative refusal flows.
- Provide unsubscribe controls for marketing and other nonessential email; required transactional messages must be clearly distinguished.
- Provide authenticated account deletion and data-deletion workflows with clear scope, confirmation, status, retention exceptions, authorization checks, and tested execution.
- Use only lawfully licensed content, audio, fonts, icons, illustrations, favicon assets, and other media with retained evidence.
- Meet the accessibility requirements in `DESIGN.md` and avoid excluding users through consent, policy, billing, or deletion flows.
- Use a custom launch domain associated with the cleared commercial brand and an original production favicon; default framework branding is not launch-ready.

### Product-quality recommendations

Plain-language policy summaries, a consolidated trust/support area, preference management, and concise explanations beside sensitive choices are recommended for comprehension. These aids do not replace approved policy text, legal notices, or qualified review.

## 11. Functional acceptance criteria

The MVP is functionally acceptable only when all applicable criteria are evidenced:

1. A user can register, verify/authenticate as required, log in, recover access, and log out without exposing another user’s data.
2. A user can select each published track and access only published, reviewed content.
3. Each released track contains exactly three approved situations with eight approved phrase entries each, or the launch scope is explicitly revised in these documents.
4. Mandarin entries display reviewed Simplified Chinese and Pinyin; `pt-BR` and `pt-PT` remain separately modeled and served.
5. Each published audio asset has an identified speaker/source, language/locale, review state, and license evidence.
6. Lessons and exercises work at supported mobile and desktop widths using touch, keyboard, and common assistive technology.
7. Progress survives logout/login and is isolated by user and track.
8. Difficult phrases can be added, reviewed, and removed predictably.
9. Billing, if launched, grants or revokes access only from verified server-side provider state and exposes no fake success path.
10. Error, empty, loading, offline/interrupted, and unavailable-content states are handled honestly.
11. Public and checkout surfaces show verified business/support information and transparent price, currency, interval, renewal, cancellation, and applicable refund information.
12. Applicable approved privacy, terms, refund/cancellation, and cookie/tracking policies are reachable before the relevant consent or transaction; version and effective date are visible.
13. Optional consent can be accepted, refused, and withdrawn accessibly; the stored record reflects the policy/version and does not block unrelated service use unless a verified requirement says otherwise.
14. Every production SDK/script/cookie/pixel is present in the approved inventory and behaves according to its consent category; unapproved integrations are absent.
15. Marketing or nonessential email includes a working unsubscribe path, and preference changes prevent future sends within the approved processing window.
16. Account deletion requires authenticated authorization and confirmation, prevents cross-user deletion, reports status honestly, deletes or anonymizes in-scope data, and documents verified retention exceptions.
17. Age safeguards follow the approved market-specific policy without fabricating age eligibility or parental consent.
18. Key trust, policy, consent, billing, unsubscribe, and deletion flows meet the accessibility acceptance baseline.
19. Launch uses the approved custom domain and a non-placeholder, original, lawfully sourced favicon with appropriate browser/device variants.
20. Public copy contains no fake social proof, fabricated metrics, vague outcome claims, or unsupported business/legal assertions.
21. Registration and onboarding enforce the approved 13+ product boundary and jurisdiction-specific teen eligibility/consent decision without claiming universal legal availability or collecting unnecessary minors’ data.
22. Teenagers and adults can complete core onboarding and learning journeys with age-appropriate, accessible language and without dark patterns.
23. Interface locale, instructional locale, and target-language track are stored and changed independently; switching interface language does not silently change lesson content or track.
24. Browser-language detection can offer a dismissible suggestion but never overrides a saved choice or forces a language from country/IP.
25. Only English instructional content is represented as initially available until separately reviewed non-English instructional releases exist.
26. International formatting, Unicode/script rendering, keyboard navigation, meaningful alternative text, contrast, reflow, and reduced motion meet the approved support matrix.

## 12. Measurable launch gates

“Launch-ready” may be used only when every required gate is confirmed with linked evidence in `PROGRESS.md`:

| Gate | Required evidence |
|---|---|
| Brand and legal | Working-name risk acknowledged; commercial name/domain/trademark checks completed by qualified owners; approved custom launch domain and original favicon prepared; applicable terms, privacy, refund/cancellation, cookie/tracking, age, and business-disclosure requirements approved for launch jurisdictions. |
| Ownership | Founders have recorded ownership, IP assignment, decision rights, and responsibilities in an appropriate agreement. |
| Content | 192/192 planned entries have documented linguistic review; Mandarin and both Portuguese variants have specialist review. |
| Audio | 192/192 published entries have verified locale-appropriate audio and retained license/consent records. |
| Core functionality | All in-scope journeys pass documented acceptance testing in the production-like environment. |
| Security | Threat review complete; authentication/authorization, dependency, secret, input, rate-limit, and data-isolation checks pass with no unresolved critical/high issue. |
| Accessibility | Key journeys meet WCAG 2.2 AA acceptance checks, including keyboard, focus, labels, contrast, motion, reflow, and screen-reader spot checks. |
| Reliability | Backup/restore procedure tested; monitoring and error reporting configured; agreed service objectives and incident ownership documented. |
| Performance | On the agreed representative mobile profile, key public and lesson screens meet approved performance budgets; budgets must be set before implementation sign-off. |
| Billing | Provider supports the operating entity and Nigerian eligibility/payout needs; real sandbox and production-like webhook flows, cancellation, renewal, failure, and entitlement tests pass. If unresolved, paid billing is not launched. |
| Privacy and trust | Data inventory, SDK/processor/cookie inventory, consent and withdrawal, retention/deletion behavior, age safeguards, email unsubscribe, accurate business information, and account deletion/export paths are approved and verified end to end. |
| International and youth eligibility | Intended launch countries are explicitly approved; 13–17 and 18+ eligibility/consent paths, exclusions, policy availability, data minimization, and support escalation are verified for each launch market without assuming worldwide legality. |
| Localization | Available interface/instructional languages and eight tracks are accurately represented; preference selection/switching, browser suggestion, locale formatting, script rendering, fallback behavior, and untranslated-content handling pass the support matrix. |
| Commercial validation | Founders define and record a validation sample and success thresholds before any beta; results are reported without fabricated demand claims. |

Numeric performance, conversion, retention, and research thresholds are deliberately not invented in Phase 0. They must be decided and recorded before they are used as gates.

## 13. Open decisions and dependencies

- **UNKNOWN:** Commercial brand, trademark, and domain clearance.
- **UNKNOWN:** Founder ownership percentages and governing agreement.
- **UNKNOWN:** Customer research and validated willingness to pay.
- **UNKNOWN:** Payment provider, Nigerian merchant eligibility, currencies, payouts, tax handling, and refund policy.
- **UNKNOWN:** Linguistic reviewers, review rubric, regional standards, and sign-off workflow.
- **UNKNOWN:** Audio production method, speakers, licenses, consent, storage, and budget.
- **UNKNOWN:** Hosting region, data residency, legal jurisdictions, privacy requirements, analytics, and support process.
- **UNKNOWN:** Exact authentication, database, object storage, email, observability, and billing libraries/services.
- **UNKNOWN:** Which privacy, terms, refund/cancellation, cookie/tracking, consent, age, marketing, business-disclosure, and deletion requirements apply in each launch jurisdiction.
- **UNKNOWN:** Cleared custom launch domain, final business identity/support details, favicon asset, SDK/processor inventory, and approved retention/deletion schedule.
- **UNKNOWN:** Initial approved launch countries, regional exclusions, and whether/how users aged 13–17 may register, consent, subscribe, receive marketing, or exercise data rights in each market.
- **UNKNOWN:** Future interface and instructional languages, translation owners/reviewers, localization rollout order, locale fallback rules, and approved policy/support translations.
