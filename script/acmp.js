'use strict';

const { exec,exit,setUpStream } = require('./helpers');
const chalk = require('chalk');

function _currentBranch(){
	let msg = exec('git br --contains');
	return msg.stdout;
}

function _setUpStream(){
	let branch = _currentBranch();
	setUpStream(branch);
}

module.exports = function acmp(message = 'code commit'){
	console.log(message,arguments)
	_setUpStream();
	// let message = [].slice.apply(process.argv)[3] || 'code commit';
	exec(`git add . && git commit -m '${message}' && git push`);
	console.log(chalk.green('push code success into remote'));
}
