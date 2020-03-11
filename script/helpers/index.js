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
	return _exec_(`git push --set-upstream origin ${branch}`);
}

exports.localCodeIsModify = function(){
		if(_exec_('git status --porcelain').stdout.trim()){
			console.log(chalk.red('please commit your changes or stash them before you switch branches.'));
			__exit__(1);
		};
}

exports.getCurentBranchName = function(){
	return shell.exec('git rev-parse --abbrev-ref HEAD', {silent: true}).toString();
}
/**
 * 
 */
exports.getCurentVersion = function(){
	const pkgPath = path.resolve(process.cwd,'package.json');
	if(fs.existSync()) throw Error('does the package exist?');
	const pkg = require(pkgPath);
	if(!pkg.version) throw Error('versoin is not defined in pacakge.json');
	return pkg.version;
}

/**
 * 
 */
exports.filterObjectValueTrue = function(obj){
	return 	Object.keys(obj).reduce((acc,key) => {
		if(obj[key]){
			acc.push(key);
		}
		return acc;
	},[]);
}



