#!/bin/sh
node r.js -o build.js

cd ..
cd www-root
rm -rf mvc
rm build.txt