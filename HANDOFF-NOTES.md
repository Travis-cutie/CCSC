# Chi Cha San Chen Website — Handoff Notes

Quick orientation for anyone picking this up with Claude. The site is plain HTML/CSS/JS, no build tools or frameworks — just open the folder and edit files directly.

## File structure

- Pages live at the root (`index.html`, `menu.html`, `locations.html`, `store-*.html` — one per location)
- `/images`, `/css`, `/videos`, `/fonts` — all site assets
- `/project-files` — old drafts, wireframes, and anything not part of the live site (archived, not linked)
- `/layout-options` — 3 alternate store-page mockups kept for reference (not linked from the live site)

## CSS setup

Hybrid approach:
- `css/styles.css` is the master stylesheet — shared stuff (nav, footer, buttons, tokens, mobile menu, etc.)
- Each page also has its own `<style>` block in the `<head>` for page-specific stuff
- Brand tokens in `styles.css`: `--accent` (#93C90F, the brand green), `--ink`/`--mid`/`--faint` for text, fonts are Sentient (serif, self-hosted), Inter (sans), JetBrains Mono (labels/buttons)
- Heads up: because of how CSS cascades, a rule in a page's own `<style>` block can silently override a same-specificity rule in the master stylesheet. Worth checking both places if a style change doesn't seem to take effect.

## What's been changed

**Structure & bug fixes**
- Reorganized a flat dump of 230 files into the folder structure above
- Fixed broken homepage/nav links and a missing menu-page banner image
- Fixed inconsistent nav font size and logo size on the homepage

**Store & locations pages**
- Added real phone numbers and "Order Online" buttons to store pages, linking to each location's actual ordering platform (Clover, Snackpass, Chowbus, or brand microsite depending on the store)
- Added "View" / "Order" quick actions to the locations index page
- Removed a duplicate listing ("Edison Promenade" — same address as the Chino store)
- Redesigned the store detail page layout (sidebar-unified style, with a rotating photo carousel and a top-right "Back to all locations" link)
- Consolidated ~4,000 lines of duplicated CSS across the 25 store pages into the master stylesheet

**Site-wide polish**
- Removed the "Last Name" field from the newsletter signup form on every page
- Added a subtle page-load transition (accent progress bar + fade-in) to every page except the homepage, which has its own intro animation
- Added real Instagram and LinkedIn icons to the footer

**Mobile**
- Fixed several mobile bugs: a forced-horizontal-scroll bug on locations.html, missing mobile styles on the homepage, and oversized desktop padding bleeding into mobile on the menu page
- Standardized mobile side padding to ~24px across the site
- Added a hamburger menu for mobile nav, then redesigned it: full-screen green overlay, large serif nav links, an "Order Online" button, social icons + copyright at the bottom, sliding in from the right

## Known gaps (not yet resolved)

- 6 store pages are missing a verified phone number: Arcadia, Koreatown, Daly City, Fremont, San Jose, Boston
- Duluth store page has no confirmed online ordering link
- No single official national Facebook page was found — only scattered regional ones — so no Facebook icon was added to the footer. Worth getting the right URL from the client if one exists.

## Working with this file structure

Any changes should be tested by checking that all `src=`/`href=` references still resolve (a broken link is usually a typo in a relative path) and that the CSS `{`/`}` counts stay balanced after editing a `<style>` block — quick sanity checks that catch most mistakes before they hit the browser.
