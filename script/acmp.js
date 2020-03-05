'use strict';

const { exec,exit,setUpStream } = require('./helpers');
const chalk = require('chalk');
const { preCommitMsg } = require('./helpers/pre-commit-msg');
const program = require('commander');

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
	console.log(prefix);
	prefix = prefix.join('/') + ': ';
	msg = prefix + msg;
	// program.parse(process.argv);
	// _setUpStream();
	// let message = [].slice.apply(process.argv)[3] || 'code commit';
	exec(`git add . && git commit -m '${msg}' && git push`);
	console.log(chalk.green('push code success into remote'));
}
