#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
// const feature = require('./script/feature')
const branch = require('./script/branch')
const acmp = require('./script/acmp')
const start = require('./script/start')
const finsh = require('./script/finsh')
const finsh = require('./script/publish')
require('./script/helpers/git');

program
	.version(pkg.version)
	.command('branch [barnch]','Checkout new branch and version add 0.0.1 by master 🔥')
  .alias('br')
	.action(branch);

program
	.command('acmp [message]')
	.description('git add . && git commit -m "message" && git push | Quick Submit code 👍')
	.action(acmp);

program
	.command('start [env] [name]')
	.description('start iterating branch switching')
	.action(start);

program
	.command('finsh [env] [name]')
	.description('finsh iterating branch switching')
	.action(finsh);

program
	.command('puhlish [env] [name]')
	.description('puhlish iterating branch switching')
	.action(publish);

program.parse(process.argv);
