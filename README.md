LoCo Pro Wrestling main page
----------------------------

Apex landing page for the LoCo Pro Wrestling web presence. Static HTML/CSS/JS,
no build step.

Pages
-----

- `index.html` — landing page (story, timeline, event directory, links).
- `terms.html` — Terms of Service.
- `privacy.html` — Privacy Policy.
  - Both legal pages reuse the canonical copy from the `battle`/`vendetta`
    event sites (Colorado governing law, contact `biz@locopro.pw`), restyled to
    match `index.html`. Linked from the footer.
- `welcome.html` — generic post-login landing (`noindex`); reads `?status=`.
- `tiktok-auth.html` — `noindex` static HTTPS redirect target for VideoFactory's
  TikTok OAuth. Captures the `?code=` from TikTok and shows it for the local
  tool to exchange. See `.knowledgebase/tools/tiktok-developer-app-setup.md`.

Run locally
-----------

ES modules / `fetch` / audio need HTTP, not `file://`:

```sh
python3 -m http.server 8080   # then open http://localhost:8080
```

Deploy
------

- GitHub Pages deploys via `.github/workflows/deploy-pages.yml`, which runs
  `scripts/build-pages.sh . _site`. New top-level files are **included by
  default**; only the script's exclude list (`.git/`, `.github/`, `scripts/`,
  `archive/`, `README.md`, `.DS_Store`, etc.) is dropped.
- Push to the default branch to deploy. The remote often diverges between
  sessions — `git pull --rebase` before pushing.

Domain
------

- Canonical host is **`mainpage.locopro.pw`** (set in `CNAME`) — *not* the apex.
  Verified 2026-06-29: `mainpage.locopro.pw` → 200; `www.locopro.pw` → 301 to it;
  apex `locopro.pw` does not serve. Do not delete `CNAME`.
- The 2017 event site should use `mainstreet.locopro.pw`.
