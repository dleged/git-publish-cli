'use strict';

const { exec,exit,haveChange,getCurentBranchName } = require('./helpers');
const chalk = require('chalk');
let hotfixesPre = 'hotfixes/';

function getArgs(){
	return [].slice.apply(process.argv);
}

module.exports = function() {
	let hotfixesName = getArgs()[2];
	// hotfixes 以hotfixes/开头；
	// 检验传入参数是否fhotfixes/开头，若是以它开头则直接使用；
	if(getArgs){
	  let preName = hotfixesName.slice(0,8);//
		if(hotfixesName !== hotfixesPre){
			hotfixesName = hotfixesPre + hotfixesName;
		}
		exec(`git checkout develop && git checkout -b ${hotfixesName}`);
	}else{
		console.log(chalk.red('❌ 请输入hotfixes分支名称！'));
		exit(1);
	}
}
