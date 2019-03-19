#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
program.version(pkg.version)
  .usage('<command> [options]')
	.command('branch','checkout new branch and version add 0.0.1 by master')
	.parse(process.argv);
