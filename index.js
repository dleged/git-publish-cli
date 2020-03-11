#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
// const feature = require('./script/feature')
const branch = require('./script/branch');
const acmp = require('./script/acmp');
const start = require('./script/start');
const finsh = require('./script/finsh');
// const publish = require('./script/publish');

//check allready install git 
require('./script/helpers/git');

program
  .command('cm [msg]')
  .description('quick submit code')
  .option('-f, --feat', 'Add new feature')
  .option('-x, --fix', 'Fix bug, hotfix')
  .option('-s, --style', 'Document related')
  .option('-dc, --docs', 'Style modification, word modification, formatting, etc.')
  .option('-rf, --refactor', 'Refactor')
  .option('-pf, --perf', 'Improve performance')
  .option('-t, --test', 'Test related')
  .option('-cr, --chore','Business-unrelated modification')
  .option('-dp, --deps','upgrade deps')
  .option('-rl, --release','Release version')
  .option('-o, --other','Other modification')
	.action(acmp);

program
	.version(pkg.version)
	.command('branch [brname] [baseBranch]')
  .description('checkout new branch by other branch(default develop branch)')
  .alias('br')
	.action(branch);

program
	.command('start')
  .description('start iterating and branch switching')
  .alias('s')
  .option('-f, --feature <name>', 'Branch prefixed with feature')
  .option('-x, --hotfix <name>', 'Branch prefixed with hotfix')
  .option('-r, --release <name>', 'Branch prefixed with release')
	.action(start);

program
	.command('finsh [env] [name]')
  .description('finsh iterating and branch switching')
  .alias('f')
  .option('-f, --feature <name>', 'Branch prefixed with feature')
  .option('-x, --hotfix <name>', 'Branch prefixed with hotfix')
  .option('-r, --release <name>', 'Branch prefixed with release')
  .action(finsh);
  
program.parse(process.argv);
