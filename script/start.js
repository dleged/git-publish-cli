'use strict';

const { exec,exit,localCodeIsModify,getCurentBranchName,getCurentVersion,filterObjectValueTrue } = require('./helpers');
const chalk = require('chalk');
function logs(msg){
	console.log(chalk.green(msg));
}

function pritLogs(base,brname){
	logs(' ');
	logs('Summary of actions:');
	logs(`- A new branch ${brname} was created, based on '${base}'`);
	logs(`- You are now on branch '${brname}'`);
};

function startEvnBranch(env,brname){
	brname = `${env}-${brname}`;
	switch (env) {
		case 'feature':
			exec(`git checkout -b ${brname} develop`);
			pritLogs(env,brname);
			break;
		case 'hotfix':
			exec(`git checkout -b ${brname} master`);
			pritLogs(env,brname);
			break;
		case 'release':
			exec(`git checkout -b ${brname} develop`);
			pritLogs(env,brname);
			break;
		default:
	}
}

module.exports = function(){
	let opts = this.opts();
	let keys = Object.keys(opts);
	for(let i = 0,len = keys.length; i < len; i++){
		let env = keys[i];
		if(opts[env]){
			startEvnBranch(env,opts[env]);
			break;
		 }
	}
}
