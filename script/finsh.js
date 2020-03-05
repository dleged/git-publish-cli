'use strict';
const { exec,getCurentVersion } = require('./helpers');
const chalk = require('chalk');

module.exports = function(env,name){
	let mergeBranchName = `${name}`;
	let commitMessage = `Complete branch ${mergeBranchName} coding`;
	exec(`gitq acmp -f ${commitMessage}`)
	switch (env) {
		case 'feature':
			exec(`git push --set-upstream origin ${mergeBranchName}`)
			exec(`git merge develop`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git push origin develop`)
			exec(`git branch -d ${mergeBranchName}`)
			break;
		case 'release':
			exec(`git push --set-upstream origin ${mergeBranchName}`)
			exec(`git checkout develop`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git tag -a ${tagVersion}`)
			exec(`git push origin ${tagVersion}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		case 'hotfix':
			exec(`git push --set-upstream origin ${mergeBranchName}`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git checkout master`)
			exec(`git merge --no-ff ${mergeBranchName} && git push`)
			exec(`git tag -a ${tagVersion}`)
			exec(`git push origin ${tagVersion}`)
			exec(`git branch -d ${getCurentVersion()}`)
			break;
		default:
	}
}
