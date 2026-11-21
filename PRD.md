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
- The initial delivery model may have one founder implementing both frontend and backend while the other founder contributes later.
- The two founders jointly own the project, but ownership percentages and the governing agreement remain unresolved.
- “Veyra” is a working name pending brand, trademark, and domain clearance.
- No customers, payments, translations, linguistic approvals, pronunciation audio, or revenue have been verified or completed on the current evidence.

## 2. Problem

People preparing to relocate, travel, work, or manage daily life in another language need concise, situation-specific communication practice. Many learning products prioritize broad curricula, isolated vocabulary, or gamification over the phrases and listening skills needed in a concrete moment. Veyra will test whether a focused, polished product can help English-speaking learners prepare for practical encounters with reviewed language, authentic pronunciation, and persistent practice.

No market size, customer count, conversion rate, competitor conclusion, or demand validation has yet been established.

## 3. Target users

Primary hypotheses:

1. English-speaking adults preparing to relocate.
2. Travelers who need high-value phrases for common situations.
3. International workers who need practical workplace and everyday communication.
4. Residents building confidence for routine local interactions.

Accessibility, device constraints, geography, willingness to pay, and learning preferences require research. The product must not imply suitability for emergencies, legal interpretation, medical interpretation, or certified language proficiency.

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

### 7.1 First visit and account creation

1. Visitor understands the practical-learning value and sees honest plan information.
2. Visitor explores the free introductory offering without a false scarcity or payment claim.
3. Visitor creates an account through a secure, verified flow.
4. User accepts required terms and privacy disclosures when those documents exist.
5. User selects a learning track and begins an available situation.

### 7.2 Learn a situation

1. User sees the situation objective and estimated scope.
2. User works through illustrated phrase cards containing source phrase, target phrase, pronunciation support where relevant, usage context, and verified audio.
3. User can replay audio, reveal supporting text, move backward or forward, and use keyboard or assistive technology.
4. User completes listening and comprehension checks with clear feedback.
5. Progress is persisted and a resumable state is shown.

### 7.3 Review difficult phrases

1. User marks a phrase difficult or the system records an incorrect response using a disclosed rule.
2. User opens a review queue scoped to the selected track.
3. Practice updates the phrase state without erasing prior history.
4. User can remove a phrase from focused review and can understand what “complete” means.

### 7.4 Subscribe

1. User encounters a transparent feature boundary.
2. User sees current price, billing interval, renewal behavior, taxes/fees if applicable, and cancellation terms.
3. The server creates checkout only through a verified eligible provider.
4. Access changes only after independently verified provider events.
5. User can inspect subscription state and reach a provider-supported cancellation path.

This journey remains **BLOCKED** until provider eligibility, Nigerian merchant support, payout availability, required entities, currencies, taxes, and webhook behavior are verified.

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
- Versioned learning content and publication state.
- Subscription functionality only after provider and end-to-end verification.
- Operational basics: error handling, logging without sensitive data, backups, security controls, privacy controls, and test coverage proportionate to risk.

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

## 10. Functional acceptance criteria

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

## 11. Measurable launch gates

“Launch-ready” may be used only when every required gate is confirmed with linked evidence in `PROGRESS.md`:

| Gate | Required evidence |
|---|---|
| Brand and legal | Working-name risk acknowledged; commercial name/domain/trademark checks completed by qualified owners; terms and privacy materials approved for launch jurisdictions. |
| Ownership | Founders have recorded ownership, IP assignment, decision rights, and responsibilities in an appropriate agreement. |
| Content | 192/192 planned entries have documented linguistic review; Mandarin and both Portuguese variants have specialist review. |
| Audio | 192/192 published entries have verified locale-appropriate audio and retained license/consent records. |
| Core functionality | All in-scope journeys pass documented acceptance testing in the production-like environment. |
| Security | Threat review complete; authentication/authorization, dependency, secret, input, rate-limit, and data-isolation checks pass with no unresolved critical/high issue. |
| Accessibility | Key journeys meet WCAG 2.2 AA acceptance checks, including keyboard, focus, labels, contrast, motion, reflow, and screen-reader spot checks. |
| Reliability | Backup/restore procedure tested; monitoring and error reporting configured; agreed service objectives and incident ownership documented. |
| Performance | On the agreed representative mobile profile, key public and lesson screens meet approved performance budgets; budgets must be set before implementation sign-off. |
| Billing | Provider supports the operating entity and Nigerian eligibility/payout needs; real sandbox and production-like webhook flows, cancellation, renewal, failure, and entitlement tests pass. If unresolved, paid billing is not launched. |
| Privacy | Data inventory, retention/deletion behavior, consent needs, processor list, and account deletion/export paths are verified. |
| Commercial validation | Founders define and record a validation sample and success thresholds before any beta; results are reported without fabricated demand claims. |

Numeric performance, conversion, retention, and research thresholds are deliberately not invented in Phase 0. They must be decided and recorded before they are used as gates.

## 12. Open decisions and dependencies

- **UNKNOWN:** Commercial brand, trademark, and domain clearance.
- **UNKNOWN:** Founder ownership percentages and governing agreement.
- **UNKNOWN:** Customer research and validated willingness to pay.
- **UNKNOWN:** Payment provider, Nigerian merchant eligibility, currencies, payouts, tax handling, and refund policy.
- **UNKNOWN:** Linguistic reviewers, review rubric, regional standards, and sign-off workflow.
- **UNKNOWN:** Audio production method, speakers, licenses, consent, storage, and budget.
- **UNKNOWN:** Hosting region, data residency, legal jurisdictions, privacy requirements, analytics, and support process.
- **UNKNOWN:** Exact authentication, database, object storage, email, observability, and billing libraries/services.
