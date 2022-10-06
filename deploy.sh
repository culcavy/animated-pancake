#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist/client

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# if [ -d .git ];
# then
#     rm -rf .git
# fi

RANDOM_BRANCH=$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo '')

git init
git checkout --orphan ${RANDOM_BRANCH}
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:culcavy/animated-pancake.git ${RANDOM_BRANCH}:gh-pages

cd -
