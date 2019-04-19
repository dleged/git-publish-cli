'use strict';

const { exec,exit,haveChange,getCurentBranchName } = require('./helpers');
const chalk = require('chalk');

function getArgs(){
	return [].slice.apply(process.argv);
}

getArgs();

module.exports = function() {

	console.log(getArgs());
}
