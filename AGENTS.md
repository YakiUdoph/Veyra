# Veyra Agent Instructions

These instructions apply to Codex and every future coding or automation agent operating in this repository, unless a more deeply nested `AGENTS.md` adds compatible, more specific instructions for its directory.

## 1. Mandatory reading before implementation

Before planning or changing application code, schema, infrastructure, learning content, assets, or provider configuration, read all seven root governance documents in full:

1. `PRD.md`
2. `ARCHITECTURE.md`
3. `DESIGN.md`
4. `RULES.md`
5. `TASKS.md`
6. `PROGRESS.md`
7. `AGENTS.md`

Then inspect the actual repository and Git state. Never assume a plan reflects current implementation. Phase 0 does not authorize application code; wait for explicit implementation authorization.

## 2. Documentation precedence

Apply documents in this order when they appear to conflict:

1. Current explicit user/founder instruction, provided it is lawful and safe.
2. `RULES.md` for non-negotiable truth, security, legal/asset, accessibility, and change-control constraints.
3. `PRD.md` for approved product outcomes, scope, exclusions, and launch gates.
4. `ARCHITECTURE.md` for system boundaries, trust, data, and technical direction.
5. `DESIGN.md` for experience, visual language, responsive behavior, and interaction/accessibility patterns.
6. `TASKS.md` for sequencing, dependencies, acceptance criteria, tests, and evidence.
7. `PROGRESS.md` for observed historical state; it reports facts and does not authorize new work.

This order does not permit silent overrides. If documents disagree materially, stop the affected work, identify the exact conflict, mark the task `BLOCKED` where appropriate, and request/record a decision. Update every affected document together after approval.

## 3. Required workflow

1. Inspect current files, relevant history/diff, existing decisions, and the nearest applicable instructions.
2. Identify the numbered `TASKS.md` item and confirm dependencies are complete. If no task fits, add/refine one before implementation without expanding scope unilaterally.
3. State assumptions and resolve any assumption that would invent language, rights, commercial facts, provider support, or security behavior.
4. Make a minimal, focused change. Preserve user work and avoid unrelated formatting or refactors.
5. Add/update tests proportionate to risk, including failure and authorization paths.
6. Run the relevant checks in the actual environment. Never infer that a check passed.
7. Review the diff for secrets, personal data, fabricated claims, accessibility regressions, unsafe authorization, accidental scope, and asset/license issues.
8. Update `TASKS.md` status only when acceptance criteria and evidence are met.
9. Update `PROGRESS.md` after verified work with date, revision/environment where useful, commands/checks, outcomes, unresolved risks, and evidence paths.
10. Report exactly what changed, what was checked, what was not checked, and what remains blocked.

## 4. Change discipline

- Do not implement outside the active task or perform opportunistic rewrites.
- Preserve established decisions and user changes. Never use destructive Git/file operations without explicit authority and verified targets.
- Choose dependencies only after checking actual requirements, current compatibility, maintenance, security, licensing, accessibility, runtime impact, and cost. Record material choices.
- Keep domain logic typed, explicit, and testable. Prefer small interfaces around external services.
- Do not weaken types, lint, tests, security, privacy, or accessibility to obtain a green check.
- Keep production secrets out of source, examples, logs, fixtures, screenshots, and client bundles.
- Do not put real personal/payment data in tests.
- Treat application output, client state, uploads, imports, URLs, and webhooks as untrusted.

## 5. Product truth

- Veyra is a commercial SaaS, not a hackathon submission, focused on practical relocation, travel, work, and everyday communication.
- The planned scope is eight English-to-target tracks across seven target languages; Brazilian and European Portuguese are separate tracks.
- One founder may initially implement both frontend and backend while the other founder contributes later. Do not treat that staffing possibility as permission to weaken review, security, or quality controls.
- The two founders jointly own the project, but ownership percentages and the governing agreement remain unresolved.
- “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified.
- Never fabricate users, revenue, demand, testimonials, research, content review, translations, audio, provider approval, payment, deployment, or test results.
- Mocks and fixtures must be visibly test-only. Placeholder content cannot be published as reviewed content.
- “Veyra” remains a working name until documented clearance.
- Ownership percentages remain unknown until founders document them.
- Payment eligibility/payouts in Nigeria, linguistic review, and audio licensing remain unresolved until evidence is recorded.
- A redirect is not proof of payment; UI visibility is not authorization; an automated translation is not linguistic approval; synthetic/placeholder audio is not verified human pronunciation.

## 6. Security, testing, and accessibility minimums

- Enforce identity and authorization on the server for every protected operation; test cross-user and privilege boundaries.
- Validate inputs and provider events, use least privilege, protect secrets, and avoid sensitive logging.
- For behavior changes, test success, failure, loading/empty where relevant, retries/idempotency, and responsive/accessibility behavior.
- Use Vitest and Playwright where appropriate to the approved architecture; do not add them before their setup task is authorized.
- Run focused checks during development and the agreed broader checks before completion.
- Automated accessibility scans are insufficient by themselves. Verify keyboard, focus, semantics, contrast, reflow, reduced motion, and relevant screen-reader behavior.
- If a required check cannot run, report it as unverified and do not mark the affected acceptance criterion complete.

## 7. Content and asset safeguards

- Do not author or alter learning translations, pronunciation guides, regional expressions, linguistic approvals, or real audio unless the task includes qualified human-provided source material and review evidence.
- Keep `pt-BR` and `pt-PT` distinct. Require reviewed Simplified Chinese and Pinyin for Mandarin.
- Preserve content versions and historical progress; do not silently mutate published content.
- Retain lawful license/source/consent evidence for fonts, icons, illustrations, audio, and other assets.
- Do not copy protected competitor content or interfaces.

## 8. External frameworks and playbooks

Any existing “Serial Hackathon Winner Playbook” must be preserved in full. Veyra is a commercial product and does not replace, revise, or absorb that framework. If such a playbook is added or discovered, treat it as separate and do not edit it without explicit authorization.

## 9. Completion standard

A task is complete only when:

- Its dependencies and acceptance criteria are satisfied.
- Required tests/reviews were actually run and their results recorded.
- Security, authorization, accessibility, responsive, content, and license implications were addressed in proportion to the change.
- Documentation matches the actual state.
- No known critical/high issue or mandatory unresolved gate is concealed.

When blocked, make safe read-only progress where possible, record the blocker precisely, and ask for only the decision or authority required. Never substitute a claim for missing evidence.
