#!/bin/bash
# Build and deploy to GitHub Pages

npm run build

# Copy CNAME to dist folder if it doesn't exist
if [ ! -f dist/CNAME ]; then
  cp public/CNAME dist/
fi

# Copy .nojekyll to dist folder
if [ ! -f dist/.nojekyll ]; then
  cp public/.nojekyll dist/
fi

echo "Build complete! The dist folder is ready for deployment."
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Commit the build: git add dist && git commit -m 'Build for production'"
echo "2. Push to GitHub Pages using: git push origin main"
echo ""
echo "Or use 'git subtree push --prefix dist origin gh-pages' if using gh-pages branch"
