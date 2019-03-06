const shell = require('shelljs');
const version = require('../package').version;

function isMaster() {
	if(process.env.NODE_BRANCH !== 'master') {
		console.error('请先合并branch到master分支！');
		return false;
	}
	return true;
}
module.exports = function() {
	if(!isMaster()) return false;
	if(shell.exec(`git checkout branch ${daily/version}`) !== 0) {
		console.log(1);
	};
}