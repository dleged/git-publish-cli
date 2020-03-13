'use strict';
const { exec, getCurentVersion,execCmdList } = require('./helpers');
const chalk = require('chalk');

function finshEnvBranch(env, brname) {
	let tagName = `v${brname}`;
	brname = `${env}/${brname}`;
	switch (env) {
		case 'feature':
			runFinshFeature(brname);
			break;
		case 'release':
			runFinshRelease(brname,tagName);
			break;
		case 'hotfix':
			runFinshHotfix(brname);
			break;
		default:
	}
}

module.exports = function () {
	let opts = this.opts();
	let keys = Object.keys(opts);
	for (let i = 0, len = keys.length; i < len; i++) {
		let env = keys[i];
		if (opts[env]) {
			finshEnvBranch(env, opts[env]);
			break;
		}
	}
}

//todo: merge 有冲突退出
function runFinshFeature(brname) {
	let cmdList = [
		`git checkout develop && git pull`,
		`git merge --no-ff ${brname}`,
		`git push origin develop`,
		`git branch -d ${brname}`
	];
	execCmdList(cmdList);
	pritLogs([
		`- merge the ${brname} into develop;`,
		`- delete branch ${brname}`
	]);
}

function runFinshRelease(brname,tagName) {
	let cmdList = [
		`git checkout develop && git pull`,
		`git merge --no-ff ${brname} && git push`,
		`git checkout master && git pull`,
		`git merge --no-ff ${brname} && git push`,
		`git tag -a ${tagName} -m 'my version ${tagName}'`,
		`git push origin ${tagName}`,
		`git branch -d ${brname}`
	];
	execCmdList(cmdList);
	pritLogs([
		`- merge the ${brname} into develop;`,
		`- merge the ${brname} into master;`,
		`- git push origin tag ${tagName};`,
		`- delete branch ${brname}`
	]);
}

function runFinshHotfix(brname) {
	let cmdList = [
		`git checkout develop && git pull`,
		`git merge --no-ff ${brname} && git push`,
		`git checkout master && git pull`,
		`git merge --no-ff ${brname} && git push`,
		`git branch -d ${brname}`
	];
	execCmdList(cmdList);
	pritLogs([
		`- merge the ${brname} into develop;`,
		`- merge the ${brname} into master;`,
		`- delete branch ${brname}`
	]);
}



function pritLogs(msgs) {
	console.log('Operation information:');
	msgs.forEach((msg) => {
		console.log(chalk.green(msg));
	});
};