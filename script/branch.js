'use strict';

const { exec,exit } = require('./helpers');
const chalk = require('chalk');
const version = require('../package').version;

function hasLocalChange(){
	if(exec('git status --s').stdout.trim()){
		console.log(chalk.red('❌ 本地有文件修改，请先完成commit或checkout！'));
		exit(1);
	};
}
//检测本地是否有代码未提交
hasLocalChange();


function localHaveUpdate(){
	if(exec('git pull --porcelain').stdout.trim()){
		console.log(chalk.red('❌ 本地有文件修改，请先完成commit或checkout！'));
		exit(1);
	};
}


function isMaster() {
	if(!exec('git branch').stdout.includes('* master')) {
		console.error('请先合并branch到master分支！');
		return false;
	}
	return true;
}

module.exports = function() {
	if(!isMaster()) return false;
	if(exec(`git checkout -b daily/${version}`) !== 0) {
		console.log(1);
	};
}
