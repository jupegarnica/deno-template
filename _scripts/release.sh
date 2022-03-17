#!/bin/sh
# get this directory
DIR=$( dirname "$0")

git pull &&
sh $DIR/tag.sh &&
git push origin main --tags