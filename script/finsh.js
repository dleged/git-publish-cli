'use strict';

const { exec,exit,haveChange,getCurentBranchName,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,name){
	let mergeBranchName = `${env}-${name}`;
	let commitMessage = `finsh mergeBranchName`
	exec(`git-cli acmp ${commitMessage}`)
	switch (env) {
		case 'feature':
			exec(`git merge develop`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git branch -d ${mergeBranchName}`)
			exec(`git push origin develop`)
			break;
		case 'hotfixes':
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			break;
		case 'release':
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		default:
	}
}
