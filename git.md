[git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
[Git 原理入门](http://www.ruanyifeng.com/blog/2018/10/git-internals.html)
[Git内部原理之Git对象](https://juejin.cn/post/6844903619175645192)

## git原理
![对象](/images/git_commit.png)

Git中的数据对象解决了数据存储的问题，树对象解决了文件名存储问题，提交对象解决了提交信息的存储问题

## git配置
    git config --global user.name "Your Name"
    git config --global user.email "email@example.com"
## 查看配置
    git config --global  --list

## 本机关联github
### 1.创建SSH Key
    ssh-keygen -t rsa -C "youremail@example.com"
### 2.登陆GitHub，Add SSH Key

## git流程
### 本地->远程
    1.本地新建仓库
    git init
    2.新建远程仓库
    3.关联
    git remote add origin git@github.com:ryine/note.git
    git add * 
    git commit -m "message"
    git push -u origin master
    git pull
    git push origin master

### 远程->本地
    1.新建远程仓库
    2.拉取远程仓库
    git clone git@github.com:ryine/note.git
    git add * 
    git commit -m "message"
    git pull
    git push origin master

### 合并merge
    git merge --no-ff -m "merge with no-ff" dev
    
### 标签tag
    1. git tag v1.0
    2. git push origin --tags

## git操作
丢弃工作区的修改
git checkout -- file

把暂存区的修改回退到工作区
git reset HEAD file

从本地版本库回退已提交的代码(如果此时代码已提交到远程版本库，推送新代码会发生错误)
git reset --hard commit_id

从本地版本库撤销某次提交，会产生新的commit,可以往远程仓库推送
git revert HEAD | git revert 0ffaacc

git pull、git push使用

禁用Fast forward模式合并
git merge --no-ff -m "merge with no-ff" dev

缓存工作区修改
git stash
git stash pop

复制一个特定的提交到当前分支
git cherry-pick <commit>

推送分支到远程仓库
git branch --set-upstream branch-name origin/branch-name

## 分支
创建分支并切换
git checkout -b dev
或者
git branch dev
git checkout dev

删除分支
git branch -d dev