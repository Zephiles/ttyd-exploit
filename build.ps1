git checkout gh-pages
git checkout master -- WebVersion/main.js WebVersion/index.html
git reset HEAD -- WebVersion/
mv -Force WebVersion/main.js .
mv -Force WebVersion/index.html .
git add index.html main.js
git commit -m "Build"
git push
git checkout master
git push
