## 什么是git flow分支管理模型
------
git分支主要分为: 主干(master)、分支(branch)、标记(tag)

> * 主干master分支,线上正在运行的源码
> * 开发分支feature-?,必须从master checkout开发分支,测试完成后合并到预发分支
> * 预发分支release-?,测试完成后合并到master
> * bug修复分支hotfix-?,必须从master checkout开发分支,修复bug后直接合并到master

Git Flow 是什么
Git Flow是构建在Git之上的一个组织软件开发活动的模型，是在Git之上构建的一项软件开发最佳实践。Git Flow是一套使用Git进行源代码管理时的一套行为规范和简化部分Git操作的工具,流程如下图。


![git-flow](https://raw.githubusercontent.com/dleged/git-publish-cli/master/git-model.png)

主分支是所有开发活动的核心分支。所有的开发活动产生的输出物最终都会反映到主分支的代码中。主分支分为master分支和development分支。

主分支之间的互操作

master分支
master分支上存放的应该是随时可供在生产环境中部署的代码（Production Ready state）。当开发活动告一段落，产生了一份新的可供部署的代码时，master分支上的代码会被更新。同时，每一次更新，最好添加对应的版本号标签（TAG）。

develop分支
develop分支是保存当前最新开发成果的分支。通常这个分支上的代码也是可进行每日夜间发布的代码。因此这个分支有时也可以被称作“integration branch(迭代分支)”。

当develop分支上的代码已实现了软件需求说明书中所有的功能，通过了所有的测试后，并且代码已经足够稳定时，就可以将所有的开发成果合并回master分支了。对于master分支上的新提交的代码建议都打上一个新的版本号标签（TAG），供后续代码跟踪使用。

#### git flow模型有这几种分支类型

> *	1. Feature branches
> *	2. Release branches
> *	3. Hotfix branches

#### 1.Feature branches 开发分支feature-*

``` feater-name
来自于:
 develop
分支必须merge回:
 develop
也即,开始一个feature分支,是从develop分支检出;完成feature分支后,必须将代码合并develop分支;
--- start ---
 $ git checkout -b feature-1.0 develop
--- finsh ---
 $ git checkout develop
 $ git merge --no-ff feature-1.0
 $ git branch -d feature-1.0
 $ git push origin develop
```

#### 2.Release branches 开发分支Release-*

``` Release-name
来自于:
 develop
分支必须merge回:
 develop and master
也即,开始一个release分支,是release分支检出;完成feature分支后,必须将代码合并develop和master分支;
--- start ---
 $ git checkout -b release-1.0 develop
--- finsh ---
 $ git checkout master
 $ git merge --no-ff release-1.0
 $ git tag -a 1.0
 $ git checkout develop
 $ git merge --no-ff release-1.0
 $ git branch -d release-1.0
```

#### 2.Hotfix branches 开发分支Hotfix-*

``` Hotfix-name
来自于:
 master
分支必须merge回:
 develop and master
也即,开始一个Hotfix分支,是从develop分支检出;完成Hotfix分支后,必须将代码合并develop和master分支;
--- start ---
 $ git checkout -b hotfix-1.0 master
--- finsh ---
 $ git checkout master
 $ git merge --no-ff hotfix-1.0
 $ git tag -a 1.0
 $ git checkout develop
 $ git merge --no-ff hotfix-1.0
 $ git branch -d hotfix-1.0
```
