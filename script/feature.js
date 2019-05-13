'use strict';

const { exec,exit,haveChange,getCurentBranchName } = require('./helpers');
const CONFIGBRANCH = require('./config/config.branch.js');
const chalk = require('chalk');


 // feature 以feature/开头；
 // 检验传入参数是否feture/开头，若是以它开头则直接使用；
function checkBrancName(cmd,exec_start){
	if(!CONFIGBRANCH[cmd]){
		console.log(chalk.yellow('command is not found,plase show git-cli -h list ❕'));
		exit(1);
	}
	if(cmd){
	  let featurePre = exec_start.slice(0,8);//
		if(cmd !== featurePre){
		 var branchName = cmd + '/' + exec_start;
		}
		console.log(branchName,`new ${cmd} branc name is ${branchName}`);
		return branchName;
	}else{
		console.log(chalk.red('❌ 请输入feature分支名称！'));
		exit(1);
		return false;
	}
}
module.exports = function(cmd, options) {
	// console.log(options.parent.Command,222)
	let { exec_start,exec_publish,exec_finsh } = options;
	console.log(exec_start,exec_publish,exec_finsh);
	if(exec_start){//new branch
		let branchName = checkBrancName(cmd,exec_start);
		if(haveChange()){
			exec(`git checkout develop && git checkout -b ${branchName}`);
		}
	}
	console.log('exec "%s" using %s mode', cmd, options.exec_start);
}
