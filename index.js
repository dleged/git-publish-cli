#!/usr/bin/env node
'use static';

const program = require('commander');
const pkg = require('./package.json');
// const feature = require('./script/feature')
const branch = require('./script/branch');
const acmp = require('./script/acmp');
const start = require('./script/start');
const finsh = require('./script/finsh');
// const publish = require('./script/publish');

//check allready install git 
require('./script/helpers/git');

// git commit -m 'new feature - #新功能'
// Commit  type
// bug fix - 组件 bug 修复；
// breaking change - 不兼容的改动；
// new feature - 新功能
// Commit 类型，建议如下：

// feat: 新特性
// fix: 缺陷修复
// docs: 文档相关
// style: 样式修改、错别字修改、格式化等
// refactor: 重构
// perf: 性能提升
// test: 增加测试
// chore: 业务无关修改，如：发版、构建工具链修改等

program
  .command('acmp [msg]')
  .description('quick submit code')
  .option('-f, --feature', 'Add new feature')
  .option('-b, --bugfix', 'fix bug, hotfix')
  .option('-s, --style', 'Document related')
  .option('-d, --docs', 'Style modification, word modification, formatting, etc.')
  .option('-r, --refactor', 'Refactor')
  .option('-p, --perf', 'Improve performance')
  .option('-t, --test', 'Test related')
  .option('-c, --chore','Business-unrelated modification')
  .option('-o, --other','Other modification')
	.action(acmp);

program
	.version(pkg.version)
	.command('branch [barnch]')
	.description('checkout new branch by master')
  .alias('br')
	.action(branch);

program
	.command('start [env] [name]')
	.description('start iterating and branch switching')
	.action(start);

program
	.command('finsh [env] [name]')
	.description('finsh iterating and branch switching')
  .action(finsh);
  
program.parse(process.argv);
