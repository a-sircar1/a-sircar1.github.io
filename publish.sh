#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PUBLIC_REPO="${PUBLIC_REPO:-$ROOT/../a-sircar1.github.io}"
REMOTE_URL="${REMOTE_URL:-https://github.com/a-sircar1/a-sircar1.github.io.git}"

echo "▶ Building Jekyll site (production)…"
bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build

if [ ! -d "$PUBLIC_REPO/.git" ]; then
  echo "▶ Cloning public repo…"
  rm -rf "$PUBLIC_REPO" || true
  git clone "$REMOTE_URL" "$PUBLIC_REPO"
fi

echo "▶ Syncing _site → public repo…"
rsync -av --delete --exclude '.git/' "$ROOT/_site/" "$PUBLIC_REPO/"

echo "Committing & pushing..."
cd "$PUBLIC_REPO"
touch .nojekyll
git add -A
git commit -m "Publish: $(date -u +'%Y-%m-%d %H:%M:%S UTC')" || true
git push

echo "Published → https://a-sircar1.github.io/"
