---
title: Linux
---

# Linux常用命令

## 防火墙

systemctl start firewalld  # 开启防火墙
systemctl stop firewalld   # 关闭防火墙
systemctl status firewalld # 查看防火墙开启状态，显示running则是正在运行
firewall-cmd --reload      # 重启防火墙，永久打开端口需要reload一下

* 添加开启端口，--permanent表示永久打开，不加是临时打开重启之后失效
```shell
firewall-cmd --permanent --zone=public --add-port=8888/tcp
```
* 查看防火墙，添加的端口也可以看到
```shell
firewall-cmd --list-all
```