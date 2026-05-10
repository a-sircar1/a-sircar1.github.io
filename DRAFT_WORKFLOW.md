# Private Draft Workflow

This site is statically hosted, so true server-side private previews are not available directly on GitHub Pages.
The current setup protects drafts in three layers:

1. Draft links are removed from public discovery surfaces (`index`, `archives`, category pages, `feed.xml`, `sitemap.xml`).
2. Draft pages are marked `noindex,nofollow,noarchive` and disallowed in `robots.txt`.
3. Draft pages can be guarded with a local passphrase gate (`assets/draft-guard.js`).

## Change the draft passphrase

Edit `assets/draft-guard.js`:

- Set `ACCESS_PHRASE` to a private value only you know.

## Publish safety checks

Both publish scripts now block deployment if a known draft marker is detected:

- `deploy.sh`
- `publish.sh`

The scripts fail if draft content appears in:

- `_site/index.html`
- `_site/feed.xml`
- `_site/sitemap.xml`

## Recommended long-term setup

For strict privacy, move authoring to a source repo with:

- `_drafts` directory for unpublished posts
- local preview using `bundle exec jekyll serve --drafts`
- production build without drafts
- optional private staging deployment for review
