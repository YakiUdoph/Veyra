# Veyra Product Design System

## 1. Design intent

Veyra should feel calm, capable, warm, and editorial rather than game-like or dashboard-heavy. The experience is premium because it is clear, considered, responsive, and trustworthy—not because it is ornate. This specification is a design direction, not evidence that screens or assets have been produced.

The visual language must be original. Do not copy a competitor’s layout, illustrations, iconography, interaction model, or wording.

This design serves a commercial SaaS, not a hackathon demo, covering eight planned tracks across seven target languages for relocation, travel, work, and everyday communication. It must be feasible for an initial delivery team in which one founder plans to handle both frontend and backend. The founders jointly own the project, but ownership percentages remain unresolved. “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified; the interface must not imply otherwise.

The intended audience is international and aged 13+. Teenagers aged 13–17 and adults aged 18+ must both be able to understand and use the product without the interface becoming childish or relying on adult-only assumptions. International targeting does not imply legal availability in every country.

## 2. Experience principles

1. **Practical context first:** Lead with what the learner will be able to do in a situation.
2. **One meaningful action at a time:** Especially on mobile, lesson screens should not compete for attention.
3. **Language is the content:** Typography, audio, and context receive more emphasis than decorative chrome.
4. **Visible truth:** Clearly label locked, unavailable, unreviewed, syncing, and incomplete states.
5. **Calm progress:** Encourage continuity without shame, artificial urgency, streak loss, or confetti overload.
6. **Accessible by default:** Keyboard, touch, screen reader, zoom/reflow, contrast, captions/transcripts, and reduced motion are first-order requirements.
7. **Trust without theatre:** Pricing, business identity, policies, consent, and data controls are specific and accessible; decorative trust badges, fake social proof, and unsupported metrics are prohibited.

### Prohibited generic patterns

- No generic gradient washes, glowing mesh backgrounds, or gradient text used as a substitute for hierarchy or identity. A restrained gradient may be approved only when it serves a specific original brand purpose and passes contrast review.
- No vague hero claims such as “master any language” or unsupported speed, fluency, popularity, or outcome promises. Hero copy must name the practical user, situation, and product value concretely.
- No invented testimonials, logos, ratings, download counts, learner counts, success rates, “trusted by” sections, live counters, or fabricated activity.
- No excessive entrance animation, parallax, looping decoration, cursor effects, or motion that delays reading or action.
- No gratuitous pill-shaped controls. Pills are reserved for compact filters, tags, or segmented choices whose semantics require them; primary actions use a deliberate shape system.
- No emoji as interface icons. Use accessible text or one coherent lawful icon system; emoji may appear only as actual authored content where culturally and semantically appropriate.
- No unnecessary “AI-powered,” sparkle, robot, chatbot, or generative branding. AI is not part of the approved MVP promise and must not be implied.
- No default framework logo or favicon at launch. Use an original, lawful, recognizable favicon tied to the cleared brand and test it at small sizes and relevant themes.

## 3. Visual foundation

### Color roles

Final values require contrast testing in implemented components. Proposed starting tokens:

| Token | Starting value | Use |
|---|---:|---|
| `ivory-50` | `#FBF7EF` | Primary page background |
| `ivory-100` | `#F4EDDF` | Subtle sections and selected surfaces |
| `paper` | `#FFFDF8` | Cards, fields, and elevated surfaces |
| `forest-950` | `#102E27` | Primary text, dark surfaces |
| `forest-800` | `#1D493D` | Primary actions and strong accents |
| `forest-600` | `#34705E` | Secondary interactive accents when contrast permits |
| `coral-600` | `#C85E4A` | Restrained emphasis, active markers, and small highlights |
| `coral-100` | `#F8DED6` | Soft highlight backgrounds |
| `ink-700` | `#38443F` | Secondary text |
| `line-200` | `#DED8CD` | Borders and dividers |
| `danger-700` | `#A23832` | Errors/destructive actions |
| `success-700` | `#2C6A4F` | Confirmed success states |

Coral is not the default button color and is never the only carrier of meaning. Avoid generic or large gradients; flat and subtle tonal surfaces are preferable. Dark mode is not in initial scope, so do not ship an untested automatic inversion.

### Typography

- Use a licensed, high-quality variable sans-serif or humanist family with strong Latin coverage and verified glyph coverage/fallbacks for Simplified Chinese and Korean.
- A restrained editorial display face may be considered for marketing headings only if licensing, performance, and script behavior are sound.
- Body text starts near 16px with comfortable line height; avoid text smaller than 14px for essential content.
- Phrase text scales by script and viewport, with explicit wrapping and line-height tests for accents, Pinyin, Han characters, and Hangul.
- Use tabular numerals only where comparison benefits. Avoid all-caps for long labels.

Font selection is **UNKNOWN** and must be tested across all supported scripts before approval.

### Spacing, shape, and elevation

- Use a 4px base rhythm, with primary spacing steps of 4, 8, 12, 16, 24, 32, 48, 64, and 96px.
- Cards use generous padding (typically 20–32px), 16–24px corner radii, a fine border, and a very soft shadow only when hierarchy needs it.
- Controls have a minimum 44×44 CSS-pixel target; primary mobile actions should generally reach 48px height.
- Content widths: focused learning content about 42–48rem; marketing/editorial content about 70rem; never stretch phrase lines across the viewport.
- Whitespace establishes hierarchy; do not fill empty areas with decorative widgets.

### Iconography and illustration

- Use one lawful icon family or original icons with consistent stroke/weight.
- Illustrations are warm, situational, culturally respectful, and useful for context. Avoid stereotypes, flags as language proxies, faux-3D clutter, and generic AI visual artifacts.
- Every asset has source/license evidence. Decorative art is hidden from assistive technology; informative art has concise useful alt text.

## 4. Responsive layout

- Design from a 320px-wide viewport upward without horizontal page scrolling at 400% zoom/reflow conditions.
- Mobile uses a compact top bar and, if validated, a small bottom navigation for the few highest-frequency authenticated destinations.
- Tablet/desktop may expose a persistent side rail while retaining the same information architecture.
- Lesson content remains centered and focused; supplemental context can move beside it only when space permits.
- Fixed controls must not cover content, keyboard focus, browser UI, or virtual keyboard areas; account for safe-area insets.
- Pointer hover enhances but never reveals the only way to access an action.

Breakpoints should follow content failure rather than device brand categories.

## 5. Core screens

### 5.1 Public landing

- Specific hero statement naming practical communication, intended users/situations, and the actual available action; no vague transformation promise.
- Honest example or approved preview content only; no invented testimonials, learner counts, ratings, or outcomes.
- Supported-track overview that distinguishes planned from available.
- Pricing hypothesis displayed only when an actual offer is ready and terms are known.
- Primary action to explore a free lesson or create an account; secondary action to understand the method.
- Footer for legal, accessibility, support, and working-brand information as available.
- On launch, verified business/support details, applicable policy links, approved custom-domain identity, and the production favicon are consistent across metadata and visible trust surfaces.

### 5.2 Authentication

- Sign-up, sign-in, verification, recovery, and reset states.
- Clear password/passkey/provider requirements based on the selected system.
- Inline and summary errors that preserve input where safe, avoid account enumeration, and move focus appropriately.
- Loading state prevents duplicate submission; success state explains the next step without fabricating email delivery.

### 5.3 Onboarding and track selection

- Short, age-appropriate value framing, then separate controls for available interface language, instructional language, and a searchable/scannable set of eight tracks.
- An accessible language selector is available before account creation and later from persistent settings/navigation. Changing interface language is easy, reversible, and does not change the instructional language or target track without explicit confirmation.
- A supported browser language may appear as a dismissible suggestion; never force a language from browser settings, country, flag, IP address, or device region.
- Each track card names source and target explicitly and identifies regional variants (`pt-BR`, `pt-PT`).
- Track status is visible: available, coming later, or unavailable—not simulated content.
- Selection is reversible in settings and does not erase prior progress.
- The 13+ eligibility and consent experience uses approved plain language, collects minimal information, distinguishes teen and adult paths only where verified requirements need it, and does not claim universal country eligibility.

### 5.4 Home / learning path

- Greeting or simple context, active track, “continue” action, and situation cards in a clear sequence.
- Each situation shows purpose, progress, availability, and phrase count.
- Review entry appears only when relevant; do not manufacture urgency.
- This is a learning home, not an analytics dashboard: avoid dense metric tiles and decorative charts.

### 5.5 Situation overview

- Practical objective, context note, expected phrase count, and available exercise types.
- Start/resume button, progress summary, and approved regional/usage note.
- Honest locked/unavailable state with reason and next action.

### 5.6 Phrase lesson

- Progress label such as “3 of 8” and a compact exit/back control.
- Large target phrase, source meaning, pronunciation guide where reviewed, contextual note, and illustration when useful.
- Prominent audio control with loading, playing, paused, retry, and unavailable states.
- Reveal/hide behavior only when it supports learning and remains screen-reader/keyboard operable.
- “Difficult” toggle with explicit selected state.
- Previous/next controls; on mobile, predictable placement and no gesture-only navigation.

### 5.7 Listening and comprehension exercise

- One prompt, clear instruction, replay control, answer options or input, and submit action.
- Feedback explains the correct response using reviewed content; color is supplemented by icon/text.
- Attempts are not lost on transient network failure; retry is safe.
- Audio-unavailable state offers text-based continuation but cannot be reported as a listening success.

### 5.8 Review

- Queue grouped by active track and based on explicit difficult/incorrect state.
- Focused practice, remaining count, and a clear way to remove or defer an item.
- Empty state celebrates completion modestly and points back to situations.
- Previously learned content remains attributable to its content version.

### 5.9 Progress

- Human-readable situation completion and recent learning state, not vanity metrics.
- Track switcher and resumable items.
- Explanation of how completion and difficult phrases are calculated.
- Empty, partial, loading, and sync-error states.

### 5.10 Subscription and account

- Current plan/entitlement, renewal/cancellation status, and provider-supported management action.
- Plan comparison states exact price, interval, access, renewal, and known tax/refund terms.
- Checkout pending, verification pending, active, failed, canceled, refunded/disputed, and unknown states remain distinct.
- Never show “paid” based only on a redirect.
- Account profile, preferences, security/session controls as supported, privacy/export/deletion actions, and sign out.
- Consent and communication preferences distinguish essential service processing from optional analytics/marketing choices without preselected optional consent or obstruction.
- Account deletion explains scope, confirmation, expected processing, verified retention exceptions, and status; destructive actions require authorization and an accessible confirmation pattern.

### 5.11 Operational screens

- Purposeful 404, unauthorized, maintenance, offline/interrupted, and generic error screens.
- Each includes plain-language status, a safe retry or navigation action, and a support route when available.
- Administrative publishing UI, if later built, is separate, access-controlled, and clearly non-consumer.

## 6. Component patterns

- **Buttons:** primary, secondary, quiet, and destructive variants; visible focus; stable loading width; disabled state used only when the reason is evident.
- **Fields:** persistent labels, optional hint, error association, correct input/autocomplete attributes, and no placeholder-only labeling.
- **Track and situation cards:** entire-card click only if semantics remain a single link; otherwise distinct actions.
- **Phrase card:** script-aware text blocks, audio control, context, difficulty toggle, and progress without unnecessary flipping animation.
- **Audio player:** large replay target, state announcement without excessive live-region noise, duration only when reliable, and keyboard operability.
- **Progress indicator:** text equivalent and no misleading precision.
- **Toast:** only for non-critical transient confirmation; errors requiring action remain inline or in a persistent alert.
- **Dialog:** reserved for focused decisions; trap and restore focus correctly; destructive actions state consequences.
- **Skeleton:** mirrors real layout, uses reduced/no animation under reduced-motion preference, and is not shown indefinitely.
- **Status badge:** text plus color, consistent vocabulary, no ambiguous dots.

## 7. Motion and feedback

- Motion communicates relationship or state, typically 120–220ms with restrained easing.
- Use subtle opacity/position transitions and pressed states; avoid parallax, autoplay, card gymnastics, and celebration loops.
- Honor `prefers-reduced-motion` by removing nonessential movement and never depending on animation for understanding.
- Audio feedback and visual motion must not surprise or start automatically.

## 8. Accessibility acceptance baseline

- Target WCAG 2.2 AA for key journeys.
- Semantic landmarks and heading hierarchy; meaningful page titles and language attributes, including language changes for phrase text.
- Full keyboard operation with visible, unobscured focus and logical order.
- Touch targets at least 44×44 CSS pixels where applicable.
- Text and non-text contrast verified in actual component states.
- Zoom/reflow at 200% and 400% without lost functionality; supported 320px layout.
- Form labels, instructions, errors, and status announcements are programmatically associated.
- Audio has equivalent displayed phrase/transcript content; listening exercises have an accessible alternative without falsely awarding listening completion.
- Screen-reader spot checks on authentication, track selection, lesson, exercise, review, and billing.
- No content flashes above safe thresholds; reduced-motion preferences honored.
- Language selectors, age/eligibility states, consent, and preference switching are fully keyboard operable with visible focus, sufficient contrast, programmatic labels, meaningful error/status announcements, and no flag-only language labels.
- Images that convey learning or safety meaning have useful alternative text; decorative imagery is correctly ignored. Translated interface resources preserve equivalent accessible names and instructions.

Automated checks support but do not replace manual accessibility testing.

## 9. Content and voice

- Concise, respectful, adult, practical, and encouraging.
- Explain what happened and what the user can do next.
- Avoid infantilizing language, exaggerated fluency claims, shame, fake personalization, and manipulative urgency.
- Interface copy does not substitute for linguist-approved learning content.
- Dates, currencies, names, and regional wording are displayed in explicit context rather than assumed from IP location.
- Address teenagers and adults respectfully with clear language; do not infantilize teenagers, use coercive streak/peer pressure, or rely on slang that obscures consent, pricing, privacy, or safety information.
- Interface translation and lesson translation are separate. Never label an interface locale as proof that lesson explanations, phrases, audio, policies, or support are translated.
- Audio must feel natural, authentic, calm, and regionally appropriate rather than robotic, theatrical, rushed, or exaggerated. Rhythm, pauses, stress, register, and tones where applicable are part of content quality, not decorative polish.
- Each target track shows only audio approved for its explicit locale profile. Brazilian and European Portuguese remain visibly and operationally distinct; never present one recording as both variants.
- The accessible player may identify the approved language/region in plain language but must not use a provider, model, voice name, AI badge, or “authentic” claim as a substitute for reviewer evidence.
- English instructional narration and target-language phrase pronunciation are separate experiences. The preferred “ElevenLabs Lauren USA” reference is conditional and must not be exposed as available until the exact voice, rights, quality, and continuity are verified and the actual output is approved.
- Preview, unapproved, superseded, or rights-unclear audio is visibly restricted to authorized review surfaces and never appears in public lessons. Voice cloning or imitation is never presented as a convenience feature without documented authorization and applicable consent.

## 10. Trust and compliance interaction requirements

- Applicable privacy, terms, refund/cancellation, and cookie/tracking policies use approved text, visible version/effective dates, stable links, readable typography, and accessible navigation. Plain-language summaries are supplemental, not substitutes.
- Consent UI gives optional accept and refuse choices comparable prominence, avoids bundled or preselected optional consent, records the selected categories, and offers a persistent way to withdraw or revise them.
- Pricing displays currency, interval, renewal, included access, material restrictions, cancellation, and applicable refund information before commitment; it never hides recurring terms behind tooltips or low-contrast text.
- Business identity and support information must match verified records. Do not display an invented address, registration, certification, endorsement, or legal entity.
- Age safeguards use neutral, accessible language from the approved policy and do not collect more age data than needed.
- Marketing/nonessential email preference and unsubscribe controls are reachable from account settings and qualifying messages; confirmation states do not falsely claim propagation before it succeeds.
- Account/data deletion supports loading, confirmation, pending, partial/retention-exception, completed, and failure/retry states. It must not imply that retained legal/backup data was erased if it was not.
- Cookie/SDK consent failures default conservatively: optional integrations stay inactive and core learning remains usable where technically and legally permitted.
- Regional unavailability or additional-consent states explain the verified reason category and next step without making unsupported legal claims or silently redirecting by country.

## 11. Design validation required

Before implementation sign-off: create original wireframes/prototypes for teenage and adult journeys, language selection/switching, and trust/compliance states; test responsive behavior and all supported scripts/locales; verify keyboard navigation, component contrast, meaningful alternative text, focus, and reduced motion; conduct accessibility review; validate comprehension with representative users aged 13–17 and 18+ under approved research safeguards; review the anti-pattern checklist; test favicon legibility and custom-domain identity; and retain asset/font/icon/favicon licenses. No such validation is claimed complete in Phase 0.
