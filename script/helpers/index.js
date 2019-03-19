'use strict';

const shell = require('shelljs');

let _exec_ = shell.exec;

exports.exec = function(){
	return _exec_(...[].slice.call(arguments))
}

exports.exit = function(code){
	shell.exit(code);
}
