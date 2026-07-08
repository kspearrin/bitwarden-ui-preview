# Bitwarden Design System (BitByte)

A faithful, code-derived design system for **Bitwarden** — the open-source password manager and secrets platform. Everything here was ported directly from Bitwarden's own source, so designs built on it match the real product.

## Sources used
- **Component library & tokens:** [`bitwarden/clients`](https://github.com/bitwarden/clients) — `libs/components/` (Tailwind component library). Color tokens from `libs/components/src/tw-theme.css`, type/fonts from `theme.css`, icon font from `libs/angular/src/scss/bwicons/`, component styling from each `*.component.ts` / `base-button.directive.ts`.
- **Brand assets:** [`bitwarden/brand`](https://github.com/bitwarden/brand) — logos, shield marks, app icons.

Explore those repos for deeper fidelity when building new Bitwarden surfaces — the Tailwind config (`tailwind.config.base.js`) and theme CSS are the canonical source of truth.

> **Product context.** Bitwarden secures credentials for individuals, teams, and enterprises. The flagship surface is the **Password Manager** (web/desktop/browser/mobile vault). Adjacent products include **Send** (encrypted sharing), **Secrets Manager**, and **Authenticator**. The voice is trustworthy, plain-spoken, and security-forward — open source and zero-knowledge by design.

---

## Content fundamentals

**Voice:** clear, calm, trustworthy, and human. Bitwarden explains security without jargon or fear-mongering. It is confident but never boastful.

- **Person:** Address the user as **“you”**; Bitwarden refers to itself as **“Bitwarden”** or **“we”** sparingly. e.g. *“Your vault is end-to-end encrypted.”*
- **Casing:** **Sentence case** everywhere — buttons, headings, labels, menu items. *“New login”*, *“Log in with passkey”*, not Title Case. Product names keep their capitals: **Password Manager**, **Send**, **Secrets Manager**.
- **Tone:** action-oriented and concise. Buttons are verbs: *“Log in”, “Generate”, “Create Send”, “Save”*. Empty states and hints are reassuring: *“Bitwarden cannot recover your master password.”*
- **Security framing:** lead with protection, plainly. *“End-to-end encrypted”, “Found in a data breach”, “Zero-knowledge”*. Warnings are factual + actionable, never alarmist: *“This password was found in a data breach. Change it now.”*
- **Punctuation:** minimal. No exclamation marks in UI. Periods on full-sentence hints, none on labels/buttons.
- **Emoji:** **none** in product UI. Iconography is handled by the bwi icon font.
- **Examples:** *“Search vault”, “Add an item”, “Favorites”, “Master password”, “Password strength: Strong”.*

---

## Visual foundations

**Color.** The brand axis is **Bitwarden blue** (`--color-brand-700` = `#175ddc`), the canonical logo blue. A full 050–950 ramp exists for brand, gray (cool, slightly blue-tinted neutrals), and status families (red/danger, orange/warning, green/success). Accent families — **teal, coral, purple, pink** — are used for avatars, Send, and illustrations. **Always design with the semantic tokens** (`--color-bg-*`, `--color-fg-*`, `--color-border-*`) rather than primitives; they flip correctly between `.theme_light` (default) and `.theme_dark`. Surfaces are white/near-white in light mode; the side navigation is solid brand blue (`--color-nav-bg-primary`).

**Type.** **Inter** (variable, 100–900) is the only typeface. Body is 400/16px at **150% line-height**; headings and UI emphasis are **500 (medium)** — Bitwarden rarely uses 700. Fixed type scale: 30 / 24 / 20 / 18 / 16 / 14 / 12. Monospace (`--font-mono`) renders passwords, keys, and codes, often with digits/symbols color-tinted.

**Spacing & radius.** 4px base unit (Tailwind scale). Radii: inputs/fields `lg` (8px), **buttons & cards `xl` (12px)**, badges/avatars/icon-buttons/pills fully round. Borders are 1px, hairline, in `--color-border-base`/`-light`.

**Elevation.** Soft, low shadows tinted with `--color-shadow` (a blue-gray). Cards often rely on a 1px border rather than shadow; menus and dialogs add `shadow-md`/`shadow-lg`. No heavy drop shadows, no neumorphism.

**Cards.** White surface, 1px `--color-border-base`, `radius-xl`, generous padding. Quiet — content-first, no decorative gradients or colored left-border accents.

**Backgrounds.** Flat color fills. The product avoids photographic/full-bleed imagery in chrome; marketing uses friendly flat **illustrations** with a blue/yellow palette and outlined shapes (illustration tokens `--color-illustration-*`). No gradients in UI, no textures, no grain.

**Motion.** Restrained. Short fades/slides (`slide-up`/`slide-down`, ~0.3s ease-out); the loading spinner (`bwi-spin`) rotates. No bounces or playful overshoot.

**Interaction states.** Hover = a darker fill (`-strong` token) for solids, or a subtle `--color-bg-hover` wash for ghost/outline/rows. Focus = a 2px ring in `--color-border-focus` (black on light, white on dark) with a 1px offset — highly visible for accessibility. Disabled = `--color-bg-inactive` + `--color-fg-inactive`, no pointer. Press has no separate scale animation.

**Transparency & blur.** Used sparingly — overlay scrims (`--color-bg-overlay`) behind dialogs; nav hover states are low-alpha black/white. No glassmorphism.

---

## Iconography

Bitwarden ships a **proprietary icon font, “bwi”** (`tokens/icons.css`, font files in `assets/fonts/`). Usage:

```html
<i class="bwi bwi-lock" aria-hidden="true"></i>
<i class="bwi bwi-search bwi-lg"></i>   <!-- size: bwi-sm/lg/2x/3x/4x -->
<i class="bwi bwi-spinner bwi-spin"></i> <!-- animated -->
```

- ~150 glyphs incl. aliases (e.g. `bwi-trash`/`bwi-delete`, `bwi-eye`/`bwi-visibility`, `bwi-cog`/`bwi-settings`). See the **Brand → Icon font** card for the common set, or `tokens/icons.css` for the full map.
- Icons are **monochrome**, inherit `currentColor`, line-style at a consistent weight. Use them for all UI affordances.
- **No emoji** and no ad-hoc unicode symbols as icons. Don't hand-draw SVG icons — use the bwi font. The `Icon` component is a thin React wrapper around it.

---

## Index / manifest

**Foundations & tokens** (root)
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `tokens/colors.css` — primitives (brand, gray, status, accent) + semantic fg/bg/border, light + dark.
- `tokens/typography.css` · `tokens/fonts.css` (Inter + bwi `@font-face`) · `tokens/spacing.css` (spacing, radius, shadow) · `tokens/icons.css` (bwi glyphs) · `tokens/base.css` (element resets).
- `assets/fonts/` — `inter.woff2`, `bwi-font.*`. `assets/logos/` — horizontal & vertical logos (blue/white), shield marks, app icons.

**Components** (`components/`) — React primitives, each with `.jsx`, `.d.ts`, `.prompt.md`, and a Design-System card.
- `actions/` — **Button**, **IconButton**
- `feedback/` — **Badge**, **Callout**, **Banner**
- `forms/` — **FormField**, **Select**, **Checkbox**, **Radio**, **Toggle**
- `navigation/` — **Tabs**, **Menu** (dropdown), **Breadcrumbs**
- `overlays/` — **Dialog**, **Toast**, **Tooltip**
- `data-display/` — **Avatar**, **Card**, **Icon**, **ListItem**, **Table**, **Chip**, **Link**, **Spinner**, **ProgressBar**, **Accordion**

**Guidelines** (`guidelines/`) — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**UI kits** (`ui_kits/`)
- `password-manager/` — interactive web-vault recreation (login → vault → generator → Send). See its `README.md`.

**Usage in code:** link `styles.css`, load `_ds_bundle.js` (auto-generated), then `const { Button } = window.DesignSystem_17827c`.

---

## Caveats
- Fonts (**Inter**, **bwi-font**) are the genuine Bitwarden binaries imported from source — no substitutions.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated by the compiler — never edit by hand.
- Components are simplified, cosmetic recreations of Bitwarden's Angular components (which use Tailwind `tw-` utilities); they reproduce the look and key states, not the full production behavior.
