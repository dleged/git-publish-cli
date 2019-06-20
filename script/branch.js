'use strict';

const { exec,exit,haveChange,getCurentBranchName } = require('./helpers');
const chalk = require('chalk');
const version = require('../package').version;

function localHaveUpdate(){
	if(exec('git pull --porcelain').stdout.trim()){
		console.log(chalk.red('❌ 本地有文件修改，请先完成commit或checkout！'));
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

module.exports = function(env,name) {
	haveChange();
	if(!isDevelop()) return false;

	let newDailyBr = `feature-${name}` || `feature-${version}`;
	if(exec(`git checkout -b ${newDailyBr}`) !== 0) {
		console.log(`🆕 分支${newDailyBr}`);
	};
}
