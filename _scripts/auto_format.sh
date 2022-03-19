#! /bin/bash

# This script is used to automatically format the source code.

echo "Formatting source code..."
git stash

deno fmt

FILES=$(git diff --staged --name-only --diff-filter=ACMR "*.*")

echo "Files to be formatted: $FILES"
# if files are changed, commit them

if [ -n "$FILES" ]; then
    echo "Committing changes..."
    export VR_HOOKS="false"
    git add $FILES
    git commit -a -m "chore: Apply auto format"

fi

git stash pop || exit 0
