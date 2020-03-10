'use strict';
const { exec,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,brName){
	let commitMessage = `Complete branch ${brName} coding`;
	exec(`gf cm -f ${commitMessage}`)
	switch (env) {
		case 'feature':
			exec(`git push --set-upstream origin ${brName}`)
			exec(`git merge develop`)
			exec(`git merge --no-ff ${brName} && git push`)
			exec(`git push origin develop`)
			exec(`git branch -d ${brName}`)
			break;
		case 'release':
			exec(`git push --set-upstream origin ${brName}`)
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${brName} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brName} && git push`)
			exec(`git tag -a ${tagVersion}`)
			exec(`git push origin ${tagVersion}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		case 'hotfix':
			exec(`git push --set-upstream origin ${brName}`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brName} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${brName} && git push`)
			exec(`git tag -a ${tagVersion}`)
			exec(`git push origin ${tagVersion}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		default:
	}
}
