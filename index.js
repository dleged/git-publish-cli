#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
// const feature = require('./script/feature')
const branch = require('./script/branch')
const acmp = require('./script/acmp')
const start = require('./script/start')
const finsh = require('./script/finsh')
const publish = require('./script/publish')
require('./script/helpers/git');

program
	.version(pkg.version)
	.command('branch [barnch]','Checkout new branch by master')
  .alias('br')
	.action(branch);

program
	.command('acmp [message]')
	.description('Quickly submit code to remote branch 👍')
	.action(acmp);

program
	.command('start [env] [name]')
	.description('start iterating and branch switching')
	.action(start);

program
	.command('finsh [env] [name]')
	.description('finsh iterating and branch switching')
	.action(finsh);

program
	.command('puhlish [env] [name]')
	.description('puhlish iterating and branch switching')
	.action(publish);

program.parse(process.argv);
