LoCo Pro Wrestling main page
----------------------------

Apex landing page for the LoCo Pro Wrestling web presence. Static HTML/CSS/JS,
no build step.

Pages
-----

- `index.html` — landing page (story, timeline, event directory, links).
  - The event directory supports a full-width featured event card. Current
    featured event: **The Last Stand at the Lodge** →
    `https://laststand.locopro.pw`, using
    `webimages/event-laststand-v2.png`.
- `terms.html` — Terms of Service.
- `privacy.html` — Privacy Policy.
  - Both legal pages reuse the canonical copy from the `battle`/`vendetta`
    event sites (Colorado governing law, contact `biz@locopro.pw`), restyled to
    match `index.html`. Linked from the footer.
- `welcome.html` — generic post-login landing (`noindex`); reads `?status=`.
- `tiktok-auth.html` — `noindex` static HTTPS redirect target for
  LoCoProGenFactory/youtube's TikTok OAuth. Captures the `?code=` from TikTok
  and shows it for the local tool to exchange. See
  `.knowledgebase/tools/tiktok-developer-app-setup.md`.

Run locally
-----------

ES modules / `fetch` / audio need HTTP, not `file://`:

```sh
python3 -m http.server 8080   # then open http://localhost:8080
```

For quick asset checks after adding event artwork:

```sh
node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); for (const m of html.matchAll(/(?:src|href)=\\\"([^\\\"]+)\\\"/g)) { const u=m[1]; if (/^(https?:|#|mailto:)/.test(u)) continue; if (!fs.existsSync(u)) { console.log('MISSING '+u); process.exitCode=1; } }"
git diff --check
```

More detailed mainpage event-directory notes live in:
`.knowledgebase/projects/mainpage/README.md`.

Deploy
------

- GitHub Pages deploys via `.github/workflows/deploy-pages.yml`, which runs
  `scripts/build-pages.sh . _site`. New top-level files are **included by
  default**; only the script's exclude list (`.git/`, `.github/`, `scripts/`,
  `archive/`, `README.md`, `.DS_Store`, etc.) is dropped.
- Push to the default branch to deploy. The remote often diverges between
  sessions — `git pull --rebase` before pushing.
- Before committing, check for unrelated dirty files and stage only the intended
  change. For small `index.html` content updates, use `git add index.html`.
  If `git push origin main` is rejected with `fetch first`, fetch and rebase;
  stash unrelated local files by path before rebasing when needed, then pop the
  stash before pushing.

Static asset hosting
--------------------

`webimages/brand/locopro-layers/` holds the LoCo Pro logo layer PNGs used by
external renderers that require public HTTPS image URLs, including vidIQ motion
graphics. Source layers live in:

```text
/Users/gecko/locoprowrestling/LoCoProGenFactory/logos/3D Objects/LoCoPro_Layers/
```

After pushing asset changes, wait for GitHub Pages and verify the public URLs
return images before using them in a render:

```sh
for f in 01_starburst.png 02_ring.png 03_badge.png 04_text.png; do
  curl -L -s -o /dev/null -w "$f %{http_code} %{content_type}\n" \
    "https://mainpage.locopro.pw/webimages/brand/locopro-layers/$f"
done
```

Expected output is `200 image/png` for each file.

Content notes
-------------

- The current hero ledger "Primary venue" value is in `index.html` near the
  `ledger__label` text `Primary venue`.
- If that value is `Elks Lodge 1055`, the adjacent street/location label should
  be `Coffman Street`, not `Main Street`.
- Do not bulk-replace every `Dickens Opera House` mention for venue updates.
  Several references are historical timeline/story context.
- The Event Directory section should appear above the Timeline section in the
  page body. Keep the top navigation in the same practical order: Event Sites,
  then Timeline.

Domain
------

- Canonical host is **`mainpage.locopro.pw`** (set in `CNAME`) — *not* the apex.
  Verified 2026-06-29: `mainpage.locopro.pw` → 200; `www.locopro.pw` → 301 to it;
  apex `locopro.pw` does not serve. Do not delete `CNAME`.
- The 2017 event site should use `mainstreet.locopro.pw`.
