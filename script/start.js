'use strict';

const { exec,exit,haveChange,getCurentBranchName,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,name){
	let mergeBranchName = `${env}-${name}`
	console.log(env,name);
	switch (env) {
		case 'feature':
			exec(`git checkout -b ${mergeBranchName} develop`)
			break;
		case 'hotfixes':
			exec(`git checkout master`)
			exec(`git checkout -b ${mergeBranchName}`)
			break;
		case 'release':
			exec(`git checkout -b ${mergeBranchName} develop`)
			break;
		default:
	}
}
