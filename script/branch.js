'use strict';

const { exec,exit,localCodeIsModify,getCurentBranchName } = require('./helpers');
const chalk = require('chalk');
const version = require('../package').version;

function localHaveUpdate(){
	if(exec('git pull --porcelain').stdout.trim()){
		console.log(chalk.red('There are file changes in the current branch, please commit or checkout first'));
		exit(1);
	};
}

function isDevelop() {
	if(getCurentBranchName() !== 'develop') {
		if(exec('git merge develop && git co develop').code === 0){
			return true;
		}else{
			console.error('please merge the current branch into the master branch first！');
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

	console.log(`git checkout -b ${newDailyBr} ${baseBranch}`);
	if(exec(`git checkout -b ${newDailyBr} ${baseBranch}`) !== 0) {
		exec(`git checkout ${newDailyBr}`);
		console.log(`✅ 新建分支${newDailyBr}完成`);
	};
}
