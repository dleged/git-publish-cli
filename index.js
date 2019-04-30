#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
const feature = require('./script/feature')
require('./script/helpers/git');
console.log(feature);

program.version(pkg.version)
  .usage('<command> [options]')
	.command('branch','Checkout new branch and version add 0.0.1 by master 🔥')
  .alias('br')
  .command('acmp','git add . && git commit -m "message" && git push | Quick Submit code 👍')
  .command('feature','Switch feature branches for daily development 🔨')
  .command('hotfixes','Switch hotfixes branches for daily development 🔨')
  .command('release','Switch release branches for daily development 🔨')
  .option("start, --exec_start <mode>", "start new branch")
  .option("puhlish, --exec_start <mode>", "start new branch")
  .option("finsh, --exec_start <mode>", "start new branch")
  .action(feature)
	.parse(process.argv);
