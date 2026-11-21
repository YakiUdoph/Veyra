# TDR-0001 — Technical foundation candidates

- **Status:** PROPOSED — research only; not founder-approved
- **Evidence checked:** 2026-11-21
- **Related tasks:** T1.8, T1.10, T2.1
- **Scope:** Smallest defensible implementation foundation; billing is excluded

This record prepares a decision. It does not complete T1.8, select vendors on behalf of the founders, authorize implementation, or establish legal eligibility in any country.

## 1. Verified facts

- The repository contains the seven governance documents and no application code, package manifest, schema, provider configuration, or installed dependency.
- Next.js 16 App Router supports TypeScript and Tailwind through its standard setup. Next.js 16 requires Node.js 20.9 or newer and TypeScript 5.1 or newer. Node.js 20 is now end-of-life; Node.js 24 and 26 are LTS lines on the evidence date.
- Current Vitest guidance requires Node.js 22.12 or newer and Vite 6.4 or newer. Current Playwright guidance supports the latest Node.js 22, 24, or 26 lines. Node.js 24 therefore satisfies the documented intersection without choosing the newest LTS line by default.
- Tailwind CSS 4 uses modern CSS features and its documented browser floor includes Safari 16.4 and Chrome 111; the approved support matrix must not promise older browsers without selecting and testing a different Tailwind line.
- Next.js can deploy as a normal Node.js server or Docker container, so using Vercel does not make the application intrinsically non-portable.
- Better Auth documents Next.js 16 compatibility and PostgreSQL/Drizzle support. Clerk documents a Vercel integration and a managed hosted identity model.
- Neon provides managed PostgreSQL, connection pooling, branching, scale-to-zero, region choices, and published free/usage-based plans. Cloudflare R2 exposes an S3-compatible interface. These interfaces provide practical exit paths, but migration effort and data-transfer time remain real.
- Vercel Web Analytics states that it uses no cookies and stores anonymized aggregate data, but it still sends page-view data to Vercel and can include URL, referrer, coarse geolocation, device, and browser data. It therefore remains an SDK/processor requiring T1.4/T1.8 review.
- No payment, translation, linguistic review, licensed audio, customers, production traffic, or capacity measurements exist.

## 2. Proposed architecture

Use a **single deployable modular monolith**:

1. Next.js 16 App Router with React, TypeScript, Tailwind CSS 4, and Node.js 24 LTS.
2. Server Components for read-oriented pages; Route Handlers/Server Actions behind application services for mutations. All identity, authorization, publication, progress, deletion, and future entitlement checks remain server-side.
3. PostgreSQL as the system of record, with Drizzle ORM/Drizzle Kit as the leading data-access/migration candidate and reviewed SQL migrations committed to version control.
4. Better Auth as the leading authentication candidate, storing identity/session data in Veyra's PostgreSQL database. Clerk remains the managed alternative if operational simplicity and reviewed youth/privacy terms outweigh portability and processor minimization.
5. Resend as the leading transactional-email candidate; Postmark remains the deliverability/retention alternative. Marketing email is out of the foundation and must remain separately consented and unsubscribable.
6. Cloudflare R2 Standard as the leading audio/illustration object-store candidate because its S3-compatible API and zero Internet-egress pricing reduce media-delivery lock-in and cost risk. Vercel Blob remains the lower-integration-effort alternative.
7. Vercel Pro as the leading hosting candidate, with one Next.js project and regional Functions placed near PostgreSQL. A Node/Docker deployment is the documented exit path.
8. Sentry error monitoring with aggressive PII scrubbing and replay disabled by default, only after its SDK/data-flow review. Vercel runtime logs are the minimum fallback.
9. No product analytics SDK in the T2.1 baseline. After T1.4/T1.8, Vercel Web Analytics is the leading minimal candidate; Plausible is a hosted/self-hostable alternative. PostHog is not the baseline recommendation because its much broader event/replay surface creates unnecessary youth/privacy scope.
10. `next-intl` for interface resources, routing, and formatting. Learning content stays in separately versioned domain data; interface locale, instructional locale, and target track remain independent.
11. Vitest for domain/integration tests and Playwright for browser, authorization, localization, responsive, and accessibility journeys.

Do not add Redis, queues, microservices, a separate API service, a CMS, search infrastructure, realtime services, AI SDKs, an age-verification provider, or billing during T2.1. Add one only after a measured requirement and its own decision record.

## 3. Candidate and alternative comparison

All prices below are public list prices checked on 2026-11-21, in USD, excluding taxes, usage not listed, support, migration labor, and negotiated terms. They are planning inputs, not quotes or proof that a founder/entity can open or lawfully use an account.

| Area | Leading proposal | Compatibility and version boundary | Verified public cost | Security/privacy, youth, lock-in, and exit |
|---|---|---|---|---|
| Runtime | Node.js 24 LTS | Pin the current 24.x patch at T2.1; satisfies Next.js, Vitest, and Playwright documented floors. | Open-source runtime; provider compute is separate. | Avoid EOL Node 20. Exit is any supported Node host/container. |
| Web application | Next.js 16 App Router + TypeScript | Next.js: Node >=20.9, TS >=5.1; independently run lint because Next.js 16 build no longer runs it. Validate the selected TypeScript 7.x patch with all tooling before pinning. | No package charge observed; hosting is separate. License inventory remains a T2.1 check. | Keep domain services framework-light. Full-feature exit is a Node server or Docker; framework migration remains material work. |
| Styling | Tailwind CSS 4.3 line | Modern-browser floor must align with T1.10; Tailwind 4 documentation lists Safari 16.4+, Chrome 111+, Firefox 128+. | No package charge observed; license inventory still required. | CSS output is portable; class-heavy templates create migration cost. No generic-gradient design permission is implied. |
| Localization | `next-intl` 4.14 line | App Router supported; pin an exact tested patch. BCP 47/Unicode locale identifiers and explicit fallbacks. | MIT-licensed; no hosted fee. | Messages can be exported as files. Do not place lesson translations in UI message catalogs. |
| PostgreSQL | Neon | Use pooled/serverless-compatible connections; keep standard PostgreSQL schema/migrations. Region, restore objectives, and production plan await T1.4/T1.10. | Free: 100 CU-hours and 1 GB per project. Launch: $0.106/CU-hour, $0.35/GB-month, plus branch/history/network items; published typical intermittent-load estimate $15/month. | Processor, DPA, region, retention, backups, access, and deletion need review. Exit via standard PostgreSQL dump/restore; Neon branching/operational features are not portable. |
| Data tooling | Drizzle ORM + Drizzle Kit | Official docs cover PostgreSQL/Neon; exact compatible versions must be pinned together after an authorized migration spike. | Apache-2.0 library; no hosted fee. | SQL-first design reduces ORM lock-in. Review generated migrations and never use schema push as unreviewed production migration evidence. Prisma ORM is the mature alternative but adds generated-client/runtime conventions. |
| Authentication | Better Auth | Official Next.js 16 and Drizzle/PostgreSQL integration; exact release and migrations require a controlled test. | MIT-licensed; no separate hosted fee; database, email, support, and engineering costs remain. | Keeps user/session data in Veyra's DB and improves export/exit. Veyra owns patching, abuse controls, recovery, secret rotation, and deletion. No age eligibility is inferred. |
| Managed auth alternative | Clerk | Official Next.js/Vercel integration; current SDK/version must be checked at authorization. | Hobby: $0 up to 50,000 monthly retained users; Pro public price $20/month billed annually, with published overages after included use. | Fastest operations but adds an identity processor and per-retained-user economics. Verify teen terms, regions, DPA/subprocessors, retention/deletion/export, domain, session limits, and exit before selection. |
| Transactional email | Resend | HTTP API/SDK fits Next.js server routes; exact SDK version unselected. | Free: 3,000/month, 100/day, 30-day retention. Pro: $20/month for 50,000, then $0.90/1,000. | Disable open/link tracking unless approved; minimize message content; verify regions, subprocessors, suppression/export/deletion, signed webhooks, domain authentication, and teen communications. Exit through a narrow email adapter. |
| Email alternative | Postmark | HTTP/SMTP and webhooks; exact SDK version unselected. | Free: 100/month. Basic: $15/month for 10,000, then $1.80/1,000; 45-day default message retention. | Strong transactional separation, but retained message content increases data exposure. Retention can be a selection criterion. Exit through the same adapter and portable templates. |
| Audio/object storage | Cloudflare R2 Standard | S3-compatible API; immutable hashed keys and CDN delivery. | Free: 10 GB-month, 1M Class A, 10M Class B, no Internet egress fee. Paid: $0.015/GB-month, $4.50/M Class A, $0.36/M Class B. | Verify bucket region/jurisdiction, public-vs-signed delivery, access logs, deletion, licensing, cache purge, and processor terms. S3 API gives the strongest exit path. |
| Storage alternative | Vercel Blob | Native Vercel/Next.js integration; public/private stores and immutable URLs. Store region cannot be changed after creation. | Hobby includes 1 GB storage, 10k simple ops, 2k advanced ops, 10 GB transfer. Published on-demand rates include $0.023/GB storage and $0.05/GB Blob transfer, with other CDN charges possible. | Lowest integration effort but tighter platform coupling and paid transfer. Export binaries/metadata before migration; private delivery through Functions can add cost. |
| Hosting | Vercel Pro | Native Next.js support; keep database and Functions close. | Hobby $0 is for personal/small projects; Pro public price $20/month with $20 usage credit. Commercial production plan/usage remains founder decision. | Review regions, logs, DPA/subprocessors, WAF/rate limits, preview access, secrets, incident/export path, and spend controls. Exit to any Node/Docker host; Vercel-specific services increase migration work. |
| Error monitoring | Sentry | Official Next.js SDK candidate; exact SDK and sampling unselected. Disable session replay and user/IP collection by default. | Developer $0: 1 user, 5k errors, 5M spans, 30-day lookback. Team $29 monthly/$26 annual; Business $89 monthly/$80 annual. | Stack traces, request data, source maps, and tags can leak personal/lesson data. Scrub before send, cap retention/sampling, audit AI features, and test deletion. OpenTelemetry and provider logs are exit paths. |
| Product analytics | Defer; later Vercel Web Analytics candidate | Client script required; `@vercel/analytics` version 2 is required for its resilient intake feature. | Hobby includes 50k events/month; Pro rate published as $3/100k events; Plus add-on $10/month. | No cookies and daily-reset visitor hash reduce risk but do not remove processor/legal review. Redact URLs/query values and prohibit user IDs, ages, lesson answers, or free text. Remove the script to exit; export limits must be reviewed. |
| Analytics alternatives | Plausible / PostHog | Both document Next.js-capable integrations; no baseline install. | Plausible has no free hosted plan; current exact tier price was not reliably retrievable and remains unknown. PostHog: first 1M analytics events/month free, then published per-event rates. | Plausible's narrow aggregate model is preferable to broad autocapture. PostHog replay/autocapture must remain off unless specifically approved. Self-hosting shifts rather than removes security/privacy work. |
| Unit/integration tests | Vitest 5.1 line | Requires Node >=22.12 and Vite >=6.4; TypeScript compatibility must be proven in the lockfile. | Open-source; CI compute separate. | No user data in fixtures. Database integration tests need isolated databases and safe reset rules. |
| Browser tests | Playwright 1.65 line | Current docs support latest Node 22/24/26 and Chromium/WebKit/Firefox; pin browser binaries with the package. | Open-source; CI/browser compute separate. | Traces/screenshots can contain personal data or secrets; use synthetic accounts and retention limits. Enables actual locale, keyboard, authorization, deletion, and responsive evidence. |

## 4. Product-specific technical requirements

### 13+ onboarding and privacy

- Store only the minimum result of the approved eligibility policy: policy version, decision, and timestamps. Do not design a date-of-birth, guardian, school, identity-document, or location store without T1.4 evidence.
- Gate account creation, optional tracking/marketing, and future payment separately. A technical `age >= 13` checkbox is not proof of lawful teen consent.
- Use server-enforced authorization, generic recovery errors, secure cookies, session rotation/revocation, rate limits, re-authentication for deletion, and cross-user isolation tests.
- Keep optional analytics absent by default. Error telemetry must redact identity, tokens, URL identifiers, lesson answers, message bodies, and age/eligibility details.

### Locale and learning content

- Persist `interfaceLocale`, `instructionalLocale`, and `activeTrackId` as independent fields. The initial supported instructional locale is `en`; the eight target tracks remain unchanged.
- Resolve interface locale by saved explicit choice, current explicit choice, dismissible supported browser suggestion, then documented default. Never infer language from country/IP.
- UI message resources, approved legal/policy translations, and versioned learning content are separate stores and release workflows.
- Use BCP 47 identifiers, Unicode-safe PostgreSQL text, explicit fallback, `lang` attributes, script-aware fonts, and locale-aware dates/numbers/currencies. Test Simplified Chinese, Pinyin, Hangul, accented Latin text, text expansion, and missing resources.

### Content, audio, progress, and deletion

- Only immutable reviewed content releases and licensed asset versions can be published. Audio metadata must include locale, source/speaker, checksum, review state, and license reference before delivery.
- User progress is server-persisted, user-scoped, track- and content-version-aware, transactional/idempotent where retried, and protected against stale updates.
- Before production data, create a deletion map for PostgreSQL, auth/session records, object storage, email, monitoring, analytics, logs, and backups. The workflow must be authorized, idempotent, observable with safe metadata, and honest about retention exceptions.

### Future subscriptions

- Keep a provider-neutral billing adapter and entitlement interface in the architecture, but do not add a billing SDK, schema, checkout, or webhook during T2.1 unless T1.5 and the billing part of T1.8 are approved.
- Later billing must use server-owned prices, verified raw webhook signatures, deduplication/idempotency, reconciliation, and server-computed entitlements.

## 5. Unknown information

- Operating entity, initial launch countries/exclusions, country-by-age eligibility, consent authority, age-assurance need, policy languages, and qualified privacy/legal requirements.
- Founder-approved support matrix, performance/reliability/recovery budgets, hosting/database/storage regions, production capacity, and forecast traffic/storage/email volumes.
- Provider account eligibility, contract/DPA terms, subprocessors, exact data paths, support/SLA needs, tax treatment, and whether quoted plans are available to the operating entity.
- Authentication method details, email verification/recovery policy, password/passkey/social-provider scope, abuse thresholds, retention schedules, deletion exceptions, and export format.
- Final interface locales beyond English, locale fallback policy, fonts, translation ownership, reviewed lesson content, audio licenses, and content administration workflow.
- Exact package patches and transitive dependency/license inventory. These must be resolved from an authorized install and lockfile, not guessed in documentation.
- Real usage-based cost. A defensible forecast needs user, request, database, storage, egress, email, telemetry, and support assumptions that do not yet exist.

## 6. Founder decisions required

1. Approve or reject the modular-monolith direction and Node 24/Next.js 16/Tailwind 4 compatibility baseline after T1.10 defines browser/device support.
2. Choose the operating entity and initial candidate launch countries so qualified T1.4 review can define teen/adult eligibility, consent, policy, processing, retention, and regional constraints.
3. Choose managed versus self-controlled authentication risk: Better Auth ownership/maintenance or Clerk processor/cost/lock-in.
4. Choose Vercel versus another Node/Docker host, and approve data regions, budgets, support level, and exit tolerance.
5. Choose Neon (and region/plan), Cloudflare R2 versus Vercel Blob, Resend versus Postmark, and Sentry versus native logs after processor/security/privacy review.
6. Decide whether any analytics is necessary for the authorized baseline. The recommendation is no analytics SDK in T2.1.
7. Approve measurable quality budgets and the T1.10 support matrix.
8. Explicitly authorize T2.1 only after T1.8 and T1.10 are complete.

## 7. Exact T2.1 dependency state

- **T1.8 is TODO.** Its direct dependencies T1.4, T1.6, and T1.7 are TODO. This draft covers candidate compatibility and public pricing only; it does not supply approved data locations, contracts/subprocessors, retention, complete SDK/data-flow inventory, youth threat model, deletion/export, licenses, or founder decisions.
- **T1.10 is TODO.** It depends on T1.3, T1.8, and T1.9, all TODO. No browser/device/country matrix, performance/reliability budgets, test owners/environments, or pass/fail evidence format has been approved.
- **Explicit implementation authorization has not been granted.**
- Therefore **T2.1 remains TODO and blocked from starting**.

The critical upstream chain is:

`T1.1 + T1.3 -> T1.4 -> T1.6 -> T1.7 -> T1.8 -> T1.10 -> T2.1`

`T1.3 + T1.6 + T1.7 -> T1.9 -> T1.10`

T1.5 is required only if billing enters the implementation scope.

## 8. Evidence sources

All web sources were checked on 2026-11-21.

- Next.js installation and constraints: https://nextjs.org/docs/app/getting-started/installation
- Next.js deployment portability: https://nextjs.org/docs/app/getting-started/deploying
- Node.js release status: https://nodejs.org/en/about/previous-releases
- Tailwind CSS v4 and upgrade/browser constraints: https://tailwindcss.com/blog/tailwindcss-v4 and https://tailwindcss.com/docs/upgrade-guide
- Vitest requirements/releases: https://main.vitest.dev/guide/ and https://vitest.dev/releases.html
- Playwright installation/requirements: https://playwright.dev/docs/intro
- `next-intl` App Router support/license/releases: https://next-intl.dev/docs/getting-started, https://github.com/amannn/next-intl/blob/main/LICENSE, and https://github.com/amannn/next-intl/releases
- Unicode locale identifiers: https://www.unicode.org/reports/tr35/
- Drizzle PostgreSQL support/license: https://orm.drizzle.team/docs/get-started and https://github.com/drizzle-team/drizzle-orm/blob/main/LICENSE
- Better Auth installation/Next.js support/license: https://better-auth.com/docs/installation, https://better-auth.com/docs/integrations/next, and https://github.com/better-auth/better-auth/blob/main/LICENSE.md
- Clerk Vercel integration/pricing: https://clerk.com/docs/guides/development/integrations/platforms/vercel-marketplace and https://clerk.com/pricing
- Neon pricing: https://neon.com/pricing
- Resend and Postmark pricing: https://resend.com/pricing and https://www.postmarkapp.com/pricing
- Cloudflare R2 interface/pricing: https://developers.cloudflare.com/r2/get-started/ and https://developers.cloudflare.com/r2/pricing/
- Vercel plans, Blob, and pricing: https://vercel.com/pricing, https://vercel.com/docs/vercel-blob, and https://vercel.com/docs/vercel-blob/usage-and-pricing
- Sentry pricing: https://sentry.io/pricing/
- Vercel Web Analytics privacy/pricing: https://vercel.com/docs/analytics, https://vercel.com/docs/analytics/privacy-policy, and https://vercel.com/docs/analytics/limits-and-pricing
- Plausible and PostHog: https://plausible.io/docs, https://plausible.io/contact, and https://posthog.com/product-analytics/pricing
