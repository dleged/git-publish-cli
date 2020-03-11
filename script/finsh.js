'use strict';
const { exec,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

function finshEnvBranch(env,brname){
	let tagName = brname;
	brname = `${env}/${brname}`;
	console.log(env,brname);
	switch (env) {
		case 'feature':
			exec(`git push -u origin ${brname}`)
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${brname}`)
			exec(`git push origin develop`)
			exec(`git branch -d ${brname}`)
			break;
		case 'release':
			exec(`git push --set-upstream origin ${brname}`)
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git tag -a ${tagName}`)
			exec(`git push origin ${tagName}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		case 'hotfix':
			exec(`git push --set-upstream origin ${brname}`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git tag -a ${tagName}`)
			exec(`git push origin ${tagName}`)
			exec(`git branch -d ${getCurentVersion()}`)
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
			finshEnvBranch(env,opts[env]);
			break;
		 }
	}
}