#! /bin/bash

# This script is used to automatically format the source code.

git stash || echo 'No changes to stash.'

deno tasks fmt || deno fmt

FILES=$(git diff --staged --name-only --diff-filter=ACMR "*.*")

# if files are changed, commit them

if [ -n "$FILES" ]; then
    export VR_HOOKS="false"
    git add $FILES
    git commit -a -m "chore: Apply auto format"

fi

git stash pop || echo 'ups. nothing to pop'