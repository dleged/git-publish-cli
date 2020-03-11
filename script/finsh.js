'use strict';
const { exec,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,brname){
	switch (env) {
		case 'feature':
			exec(`git push --set-upstream origin ${brname}`)
			exec(`git merge develop`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git push origin develop`)
			exec(`git branch -d ${brname}`)
			break;
		case 'release':
			exec(`git push --set-upstream origin ${brname}`)
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git tag -a ${tagVersion}`)
			exec(`git push origin ${tagVersion}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		case 'hotfix':
			exec(`git push --set-upstream origin ${brname}`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brname} && git push`)
			exec(`git tag -a ${tagVersion}`)
			exec(`git push origin ${tagVersion}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		default:
	}
}
