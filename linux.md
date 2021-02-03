## linux常用命令

### 下载
wget
curl

### 文件目录操作
cd
mv
cp
rm

### 内存
free -h
du --max-depth=1 -h


### 磁盘
df -h
检查文件系统的磁盘空间占用情况
du -sh 
du -sh ./*
检查磁盘空间使用量

进程
查看进程pid
ps -ef | grep 进程名
ps aux | grep 进程名

## 查看日志
tail -f catalina.out

## 查找文件
find / -name jenkins.war

启动doclever 
目录/public/apimanage/DOClever/Server/bin/www
nohup node /public/apimanage/DOClever/Server/bin/www &
exit

启动jenkins
cd /data/uhomeres/jenkins
java -jar jenkins.war