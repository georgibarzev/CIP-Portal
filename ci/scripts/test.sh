#!/bin/bash
gulp() {
	node node_modules/gulp/bin/gulp $1
}
cd launchpad
npm install
gulp build
gulp test
