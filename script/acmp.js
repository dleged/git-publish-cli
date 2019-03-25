'use strict';

const { exec,exit,haveChange } = require('./helpers');
const chalk = require('chalk');

function _currentBranch(){
	let msg = exec('git br --contains');
	return msg.stdout.replace('* ','');
}


function _setUpSteam(){
	let branch = _currentBranch();
	let msg = exec(`git -u origin ${branch}`);
}


module.exports = function acmp(){
	let message = [].slice.apply(process.argv)[2] || 'Daily Development';
	exec(`git add . && git commit -m '${message}' && git push`);
}
