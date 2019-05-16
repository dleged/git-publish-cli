'use strict';

const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
let _exec_ = shell.exec;

function __exit__(code){
	process.exit(code);
}

exports.exec = function(){
	return _exec_(...[].slice.call(arguments))
}

exports.exit = __exit__;

exports.setUpStream = function setUpStream(branch){
	_exec_(`git push --set-upstream origin ${branch}`);
}

exports.haveChange = function(){
		if(_exec_('git status --porcelain').stdout.trim()){
			console.log(chalk.red('❌ 本地有文件修改，请先完成commit或checkout！'));
			__exit__(1);
		};
}

exports.getCurentBranchName = function(){
	return shell.exec('git rev-parse --abbrev-ref HEAD', {silent: true}).toString();
}

exports.getCurentVersion = function(){
	const pkgPath = path.resolve(process.cwd,'package.json');
	if(fs.existSync()) throw Error('Does the package exist?');
	const pkg = require(pkgPath);
	if(!pkg.version) throw Error('s there version in package.json?');
	return pkg.version;
}
