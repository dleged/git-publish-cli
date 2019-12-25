'use strict';

const { exec,exit,setUpStream } = require('./helpers');
const chalk = require('chalk');

function _currentBranch(){
	let msg = exec('git br --contains');

	return msg.stdout.replace('* ','').replace('\n','');
}

function _setUpStream(){
	let branch = _currentBranch();
	setUpStream(branch);
}

module.exports = function acmp(){
	_setUpStream();
	let message = [].slice.apply(process.argv)[2] || 'code commit';
	console.log(message,'message');
	exec(`git add . && git commit -m '${message}' && git push`);
}
