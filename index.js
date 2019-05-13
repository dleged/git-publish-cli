#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
require('./script/helpers/git');

program.version(pkg.version)
  .usage('<command> [options]')
	.command('branch','Checkout new branch and version add 0.0.1 by master 🔥')
  .alias('br')
  .command('acmp','git add . && git commit -m "message" && git push | Quick Submit code 👍')
  .command('feature','Switch feature branches for daily development 🔨')
  .command('hotfixes','Switch hotfixes branches for daily development 🔨')
	.parse(process.argv);
