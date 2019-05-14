'use strict';

const { exec,exit,haveChange,getCurentBranchName } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,name){
	console.log(env,name);
	switch (env) {
		case 'feature':
			exec(`git checkout -b ${env}/${name} develop`)
			break;
		case 'hotfixes':
			exec(`git checkout master`)
			exec(`git checkout -b ${env}/${name}`)
			break;
		case 'release':
			exec(`git checkout -b ${env}/${name} feature/${name}`)
			break;
		default:
	}
}
