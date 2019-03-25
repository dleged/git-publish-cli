'use strict';


const { exec,exit,haveChange } = require('./helpers');
const chalk = require('chalk');
const version = require('../package').version;


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
	haveChange();
	if(!isMaster()) return false;
	let newDailyBr = `daily/${version}`;
	if(exec(`git checkout -b ${newDailyBr}`) !== 0) {
		console.log(`🆕 分支 ${newDailyBr}`);
	};
}
