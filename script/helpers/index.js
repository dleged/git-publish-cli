'use strict';

const shell = require('shelljs');
const chalk = require('chalk');
let _exec_ = shell.exec;

function __exit__(code){
	process.exit(code);
}

let exit = __exit__;

function exec(){
	return _exec_(...[].slice.call(arguments))
}

function setUpStream(branch){
	_exec_(`git push --set-upstream origin ${branch}`);
}

function getCurentBranchName(){
	return shell.exec('git rev-parse --abbrev-ref HEAD', {silent: true}).toString();
}

function haveChange(){
		if(_exec_('git status --porcelain').stdout.trim()){
			console.log(chalk.red(`❌ ${getCurentBranchName()}文件修改，请先完成commit或checkout！`));
			__exit__(1);
		};
}

module.exports = {
	exit,
	exec,
	setUpStream,
	getCurentBranchName,
	haveChange
}
