set -euo pipefail

bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build   # no --drafts, no --unpublished

PUBLIC_REPO="../a-sircar1.github.io"
rsync -av --delete _site/ "$PUBLIC_REPO/"

cd "$PUBLIC_REPO"
touch .nojekyll
git add -A
git commit -m "Publish: $(date -u +'%Y-%m-%d %H:%M:%S UTC')" || echo "Nothing to commit"
git push
echo "Published → https://a-sircar1.github.io/"