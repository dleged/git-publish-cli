
# gitf

gitf is a cli-tool that helps develop make sure the team is all in agreement;
to ensure the team is on the same page, an agreed upon Git workflow should be developed or selected.

# What Is Gitflow Workflow

###### The overall flow of Gitflow is:
    
1. A develop branch is created from master
2. A release branch is created from develop
3. Feature branches are created from develop
4. When a feature is complete it is merged into the develop branch
5. When the release branch is done it is merged into develop and master
6. If an issue in master is detected a hotfix branch is created from master
7. Once the hotfix is complete it is merged to both develop and master

<!--[Gitflow Workflow pic]()-->

* [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)



# Installation


```bash
npm install -g gitf
or
yarn global add gitf
```

And gitf will be installed globally to your system path.


# Usage

For CLI options, use the `-h` (or `--help`) argument:

```bash
gitf -h

Usage: gitf [options] [command]
Options:
  -V, --version                    output the version number
  -h, --help                       output usage information

Commands:
  acmp [options] [msg]             one line command commit code
  branch|br [brname] [baseBranch]  checkout new branch by other branch(default develop branch)
  start|s [options]                start iterating and branch switching
  finsh|f [options]                finsh iterating and branch switching
```


#### gitf acmp [options] [msg] 

If you like to submit code using the git command line,gitf is a fast and convenient way to submit code.as follows:

```
$ gitf acmp -h

Usage: acmp [options] [msg]

one line command commit code

Options:
  -f, --feat       Add new feature
  -x, --fix        Fix bug, hotfix
  -s, --style      Document related
  -dc, --docs      Style modification, word modification, formatting, etc.
  -rf, --refactor  Refactor
  -pf, --perf      Improve performance
  -t, --test       Test related
  -cr, --chore     Business-unrelated modification
  -dp, --deps      upgrade deps
  -rl, --release   Release version
  -o, --other      Other modification
  -h, --help       output usage information
```

example:
now your branch is feature/shopcar_page,and usegitf acmp -f 'new shopcar page': 
```
$  gitf acmp -f 'new shopcar page'

* shopcar_page
[shopcar_page 8eaf024] feat: new shopcar page
 2 files changed, 91 insertions(+), 2 deletions(-)
 create mode 100644 src/shopcar.js
 
 * [new branch]      shopcar_page -> shopcar_page
Branch 'shopcar_page' set up to track remote branch 'shopcar_page' from 'origin'.
Everything up-to-date

Operation information:
- origin rmote:  shopcar_page
- commit info: feat: new shopcar page
```
, we have completed a code submission,
then use git log,you can see
```
commit 8eaf0244aeda1b84d0bdff244569896ee307d93e (HEAD -> shopcar_page, origin/shopcar_page)
Author: yimu <1208674494@qq.com>
Date:   Sat Mar 14 15:39:23 2020 +0800

    feat: new shopcar page

```
acmp provides the option to submit information prefixes, in order to maintain a consistent submission format and distinguish the type of modification for each submission