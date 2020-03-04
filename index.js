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
  .command('acmp [message]')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
	.description('quick submit code')
	.action(acmp);

program
	.version(pkg.version)
	.command('branch [barnch]')
	.description('checkout new branch by master')
  .alias('br')
	.action(branch);

program
	.command('start [env] [name]')
	.description('start iterating and branch switching')
	.action(start);

program
	.command('finsh [env] [name]')
	.description('finsh iterating and branch switching')
  .action(finsh);
  
program.parse(process.argv);
