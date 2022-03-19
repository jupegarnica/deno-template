#! /bin/bash

# This script is used to automatically format the source code.

git stash save wip || echo 'No changes to stash.'

deno fmt

FILES=$(git diff --staged --name-only --diff-filter=ACMR "*.*")

# if files are changed, commit them

if [ -n "$FILES" ]; then
    export VR_HOOKS="false"
    git add $FILES
    git commit -a -m "chore: Apply auto format"

fi

git stash apply wip || echo 'ups. nothing to pop'
