#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
program.version(pkg.version)
  .usage('<command> [options]')
	.command('branch','checkout new branch and version add 0.0.1 by master')
  .alias('br')
  .command('acmp','git add . && git commit -m "message" && git push')
	.parse(process.argv);
