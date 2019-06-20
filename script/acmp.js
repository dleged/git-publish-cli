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

module.exports = function acmp(message){
	_setUpStream();
	message = message || 'code commit';
	exec(`git add . && git commit -m '${message}' && git push`);
}
