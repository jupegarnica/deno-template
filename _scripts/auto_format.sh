#! /bin/bash

# This script is used to automatically format the source code.

echo "Formatting source code..."
git stash --include-untracked --all

# deno fmt

FILES=$(deno fmt)

  read -p "Do you want to apply the changes? [y/n] " -n 1 -r

if [ -n "$FILES" ]; then
    echo "Committing changes..."
    export VR_HOOKS="false"
    git add $FILES
    git commit -a -m "chore: Apply auto format"

fi

git stash pop || exit 0
