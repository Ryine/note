docker安装与使用

## 安装docker
apt install docker.io

## 启动停止docker服务
service docker start
service docker stop

## docker信息
docker info

## 从仓库搜索镜像
docker search centos

## 下载镜像
docker pull mysql

## 列出本地镜像
docker images

docker run -it centos bash


## 列出容器
docker ps // 运行中的
docker ps -a // 所有

## 启动停止容器
docker start 33c7176cb57f
docker stop 33c7176cb57f
docker attach 33c7176cb57f
docker exec -it eae6a4f7d70b bash

## 正确退出容器
CTRL + P , CTRL + Q

docker commit
dockerFile