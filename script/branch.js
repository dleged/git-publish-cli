'use strict';

const { exec,exit,localCodeIsModify,getCurentBranchName } = require('./helpers');
const chalk = require('chalk');
const version = require('../package').version;

function localHaveUpdate(){
	if(exec('git pull --porcelain').stdout.trim()){
		console.log(chalk.red('当前分支有文件变更，请先提交或者checkout'));
		exit(1);
	};
}

function isDevelop() {
	if(getCurentBranchName() !== 'develop') {
		if(exec('git merge develop && git co develop').code === 0){
			return true;
		}else{
			console.error('请先合并当前branch到master分支！');
			return false;
		}
	}
	return true;
}

module.exports = function(brName,baseBranch = 'master') {
	localCodeIsModify();
	if(!isDevelop()) return false;
	let prefix = brName || 'feature';
	if(typeof brName === 'object' ){
		brName = version;
	}
	let newDailyBr = `${prefix}-${brName}`;
	if(exec(`git checkout -b ${newDailyBr} ${baseBranch}`) !== 0) {
		console.log(`✅ 新建分支${newDailyBr}完成`);
	};
}
