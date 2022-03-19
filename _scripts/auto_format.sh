#! /bin/bash

# This script is used to automatically format the source code.


git stash

deno tasks fmt || deno fmt

git commit -a -m "chore: Apply auto format"

git stash pop
