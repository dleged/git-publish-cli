#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
// const feature = require('./script/feature')
const branch = require('./script/branch')
const acmp = require('./script/acmp')
const start = require('./script/start')
require('./script/helpers/git');

program
	.version(pkg.version)
	.command('branch [barnch]','Checkout new branch and version add 0.0.1 by master 🔥')
  .alias('br')
	.action(branch);

program
	.command('acmp [message]')
	.description('Quick Submit code')
	.action(acmp);

program
	.command('start [env] [name]')
	.description('start iterating branch switching')
	.action(start);

program.parse(process.argv);
