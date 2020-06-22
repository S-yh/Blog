---
title: Docker
---

# Docker
## 常用命令
* 安装docker依赖
```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```
* 设置docker仓库
```shell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```
* 安装docker
```shell
yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
```
* 启动docker
```shell
systemctl start docker
```
* 启动docker容器
```shell
docker run hello-world
```
* 列出所有image
```shell
docker image ls
```
* 删除image
```shell
docker image remove [imageName]
```
* 列出docker 容器
```shell
docker container ls -all // -all 列出包括终止的容器docker ps //同上
```
* 删除容器
```shell
docker rm [containerID]
```
* 创建image
```shell
docker build -t test-docker .
```
* 其他命令
```shell
docker container start
docker container stop
docker container logs
docker container exec
docker container cp
```

## Nginx Docker
* 创建基础nginx容器
```shell
docker run -d -p 8080:80 --rm --name mynginx nginx -v "$PWD/html":/usr/share/nginx/html
```
>-d 启动一个daemon进程后台运行  
>-rm 容器停止自动删除  
>-p 映射端口  
>-v 映射文件目录  


