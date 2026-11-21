# Veyra Product Design System

## 1. Design intent

Veyra should feel calm, capable, warm, and editorial rather than game-like or dashboard-heavy. The experience is premium because it is clear, considered, responsive, and trustworthy—not because it is ornate. This specification is a design direction, not evidence that screens or assets have been produced.

The visual language must be original. Do not copy a competitor’s layout, illustrations, iconography, interaction model, or wording.

This design serves a commercial SaaS, not a hackathon demo, covering eight planned tracks across seven target languages for relocation, travel, work, and everyday communication. It must be feasible for an initial delivery team in which one founder may handle both frontend and backend. The founders jointly own the project, but ownership percentages remain unresolved. “Veyra” is a working name pending clearance. No customers, payments, translations, linguistic approvals, or audio are verified; the interface must not imply otherwise.

## 2. Experience principles

1. **Practical context first:** Lead with what the learner will be able to do in a situation.
2. **One meaningful action at a time:** Especially on mobile, lesson screens should not compete for attention.
3. **Language is the content:** Typography, audio, and context receive more emphasis than decorative chrome.
4. **Visible truth:** Clearly label locked, unavailable, unreviewed, syncing, and incomplete states.
5. **Calm progress:** Encourage continuity without shame, artificial urgency, streak loss, or confetti overload.
6. **Accessible by default:** Keyboard, touch, screen reader, zoom/reflow, contrast, captions/transcripts, and reduced motion are first-order requirements.

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

Coral is not the default button color and is never the only carrier of meaning. Avoid large gradients; subtle tonal surfaces are preferable. Dark mode is not in initial scope, so do not ship an untested automatic inversion.

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

- Clear statement about practical communication and intended situations.
- Honest example or approved preview content only; no invented testimonials, learner counts, ratings, or outcomes.
- Supported-track overview that distinguishes planned from available.
- Pricing hypothesis displayed only when an actual offer is ready and terms are known.
- Primary action to explore a free lesson or create an account; secondary action to understand the method.
- Footer for legal, accessibility, support, and working-brand information as available.

### 5.2 Authentication

- Sign-up, sign-in, verification, recovery, and reset states.
- Clear password/passkey/provider requirements based on the selected system.
- Inline and summary errors that preserve input where safe, avoid account enumeration, and move focus appropriately.
- Loading state prevents duplicate submission; success state explains the next step without fabricating email delivery.

### 5.3 Onboarding and track selection

- Short value framing, then a searchable/scannable set of eight tracks.
- Each track card names source and target explicitly and identifies regional variants (`pt-BR`, `pt-PT`).
- Track status is visible: available, coming later, or unavailable—not simulated content.
- Selection is reversible in settings and does not erase prior progress.

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

Automated checks support but do not replace manual accessibility testing.

## 9. Content and voice

- Concise, respectful, adult, practical, and encouraging.
- Explain what happened and what the user can do next.
- Avoid infantilizing language, exaggerated fluency claims, shame, fake personalization, and manipulative urgency.
- Interface copy does not substitute for linguist-approved learning content.
- Dates, currencies, names, and regional wording are displayed in explicit context rather than assumed from IP location.

## 10. Design validation required

Before implementation sign-off: create original wireframes/prototypes for the key journeys; test responsive behavior and all scripts; verify component contrast and focus; conduct accessibility review; validate comprehension with representative users; and retain asset/font licenses. No such validation is claimed complete in Phase 0.
