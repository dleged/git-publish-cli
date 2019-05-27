'use strict';

const { exec,exit,haveChange,getCurentBranchName,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,name){
	let tagVersion = 'v' + getCurentVersion();
	if(env === 'hotfixes' || env === 'release'){
		exec(`git checkout master`)
		exec(`git merge --no-ff ${mergeBranchName} && git push`)
		exec(`git branch -d ${getCurentVersion()}`)
		exec(`git tag -a ${tagVersion}`)
		exec(`git push origin ${tagVersion}`)
	}
}
