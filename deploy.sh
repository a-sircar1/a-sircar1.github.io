#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build

if rg -n "Note: this is a draft article|/Downsampling-Dataset/" "_site/index.html" "_site/feed.xml" "_site/sitemap.xml" >/dev/null 2>&1; then
  echo "Draft leak detected in production build. Aborting publish."
  echo "Verify that drafts are excluded before publishing."
  exit 1
fi

PUBLIC_REPO="../a-sircar1.github.io"
REMOTE_URL="https://github.com/a-sircar1/a-sircar1.github.io.git"

if [ ! -d "$PUBLIC_REPO/.git" ]; then
  rm -rf "$PUBLIC_REPO"
  git clone "$REMOTE_URL" "$PUBLIC_REPO"
fi

rsync -av --delete --exclude '.git/' _site/ "$PUBLIC_REPO/"

cd "$PUBLIC_REPO"
touch .nojekyll
git add -A
git commit -m "Publish: $(date -u +'%Y-%m-%d %H:%M:%S UTC')" || echo "Nothing to commit"
git push

echo "Published → https://a-sircar1.github.io/"
