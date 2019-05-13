'use strict';

const { exec,exit,haveChange,getCurentBranchName } = require('./helpers');
const CONFIGBRANCH = require('./config/config.branch.js');
const chalk = require('chalk');

module.exports = function(env,name){
	console.log(env,name);
	switch (env) {
		case 'feature':
			exec(`git-cli checkout -b dvelop ${env}/${name}`)
			break;
		case 'hotfixes':
			exec(`git-cli checkout -b master ${env}/${name}`)
			break;
		case 'release':
			exec(`git-cli checkout -b feature/${name} ${env}/${name}`)
			break;
		default:
	}
}
