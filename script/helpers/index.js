'use strict';

const shell = require('shelljs');
const chalk = require('chalk');
let _exec_ = shell.exec;

function __exit__(code){
	process.exit(code);
}

exports.exec = function(){
	return _exec_(...[].slice.call(arguments))
}

exports.exit = __exit__;

exports.haveChange = function(){
		if(_exec_('git status --porcelain').stdout.trim()){
			console.log(chalk.red('❌ 本地有文件修改，请先完成commit或checkout！'));
			__exit__(1);
		};
}
