#!/bin/bash
alias gulp="node node_modules/gulp/bin/gulp"
cd launchpad
npm install
gulp build
gulp test
