'use strict';

const { exec,exit,setUpStream } = require('./helpers');
const chalk = require('chalk');
const { preCommitMsg } = require('./helpers/pre-commit-msg');

function _currentBranch(){
	let msg = exec('git br --contains');
	return msg.stdout;
}

function _setUpStream(){
	let branch = _currentBranch();
	setUpStream(branch);
}

module.exports = function acmp(msg){
	let prefix = preCommitMsg(this.opts());
	prefix = prefix.join('/') + ': ';
	msg = prefix + msg;
	exec(`git add . && git commit -m '${msg}'`);
	_setUpStream();//setUpStream push
	exec(`git push`);
	console.log(chalk.green('push code success into remote'));
}
