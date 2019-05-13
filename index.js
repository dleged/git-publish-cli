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
	.description('git add . && git commit -m "message" && git push | Quick Submit code 👍')
	.action(acmp);

program
	.command('start [env] [name]')
	.description('start iterating branch switching')
	.action(start);

// program
// 	.command('finsh [env] [name]')
// 	.description('finsh iterating branch switching')
// 	.action(finsh);
//
// program
// 	.command('puhlish [env] [name]')
// 	.description('puhlish iterating branch switching')
// 	.action(puhlish);





// program
//   .command('feature','Switch feature branches for daily development 🔨')
//   .command('hotfixes','Switch hotfixes branches for daily development 🔨')
//   .command('release','Switch release branches for daily development 🔨')
//   .option("start, --exec_start <mode>", "start new branch")
//   .option("puhlish, --exec_start <mode>", "start new branch")
//   .option("finsh, --exec_start <mode>", "start new branch")

// program
//   .command('*')
//   .action(function(env,options){
// 		console.log(options);
// 		feature(env,options)
//   });

// program
//   .version('0.0.1')
//   .option('-C, --chdir <path>', 'change the working directory')
//   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
//   .option('-T, --no-tests', 'ignore test hook')

// program
//   .command('setup [env]')
//   .description('run setup commands for all envs')
//   .option("-s, --setup_mode [mode]", "Which setup mode to use")
//   .action(function(env, options){
//     var mode = options.setup_mode || "normal";
//     env = env || 'all';
//     console.log('setup for %s env(s) with %s mode', env, mode);
//   });

// program
//   .command('exec <cmd>')
//   .alias('ex')
//   .description('execute the given remote cmd')
//   .option("-e, --exec_mode <mode>", "Which exec mode to use")
//   .action(function(cmd, options){
//     console.log('exec "%s" using %s mode', cmd, options.exec_mode);
//   }).on('--help', function() {
//     console.log('  Examples:');
//     console.log();
//     console.log('    $ deploy exec sequential');
//     console.log('    $ deploy exec async');
//     console.log();
//   });

program.parse(process.argv);
