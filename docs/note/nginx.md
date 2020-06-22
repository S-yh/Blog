---
title: Nginx
---

# Nginx

Nginx是开源，高性能，高可靠的Web和反向代理服务器， 支持热部署， 几乎可以做到7 * 24小时不间断运行，即使运行几个月也不需要重新启动。  
性能是Nginx最重要的考量，其占用内存少，并发能力强，能支持高达5W个并发连接数。

## Nginx用途

* 静态资源服务：通过本地文件系统提供服务
* 反向代理服务：延伸出包括缓存，负载均衡等
* API服务：OpenResty

## 简单请求和非简单请求

* 简单请求
    * 请求方法是`HEAD`, `GET`, `POST` 三种之一
    * `content-type`限于三个值：`application/x-www-form-urlencoded`，`multipart/form-data`，`text/plain`
::: tip
对于简单请求浏览器会在头信息中增加Origin字段后直接发出, Origin字段用来说明本次请求来自的那个源(协议+域名+端口)。  
如果服务器发现origin指定的源不在许可范围内, 服务器会返回一个正常的HTTP响应, 响应头信息没有包含`Access-Control-Allow-Origin`字段,抛出一个XHR的`error`事件。  
如果Origin指定的域名在许可范围内, 服务器响应会多出几个`Access-Control-`开头的头信息字段。  
:::

* 非简单请求(非简单请求是那种对服务器有特殊要求的请求)
    * 请求方法是: `PUT`, `DELETE`
    * `Content-Type`值为: `application/json`
::: tip
对于非简单请求, 浏览器在正式通信之前, 发送一次HTTP预检OPTIONS请求, 先询问服务器, 当前域名是否在服务器的许可名单中, 以及使用哪些HTTP请求方法和头信息, 只有得到肯定答复, 浏览器才会发出正式的`XHR`请求,否则报错
:::

## 正向代理与反向代理

* 正向代理  
一般的访问流程是客户端直接向目标服务器发送请求并获取内容, 使用正向代理后, 客户端改为向代理服务器发送请求,并指定目标服务器,然后由代理服务器和原始服务器通信, 转交请求并获得内容,再返回给客户端, 正向代理隐藏了真实的客户端, 为客户端转发请求, 使真实客户端对服务器不可见.

* 反向代理  
与一般访问流程相比, 使用反向代理后, 直接收到请求的服务器是代理服务器, 然后将请求转发给内部网络上真正进行处理的服务器,得到的结果返回给客户端, 反向代理隐藏了真实的服务器, 为服务器收发请求,是真实服务器对客户端不可见, 一般在处理跨域请求的时候比较常用, 

一般来说, 给客户端做代理的都是正向代理, 给服务器代理的都是反向代理

## Nginx常用命令

```shell
nginx -s reload #重新加载配置文件, 热重启
nginx -s reopen #重启ngixn
nginx -s stop   #快速关闭
nginx -s quit   #等待工作进程处理完成后关闭
nginx -T        #查看当前nginx配置
nginx -t -c <配置路径> #检查配置是否有问题
```

## Nginx配置语法  
* nginx主配置文件结构  
```
main        # 全局配置，对全局生效   
├── events  # 配置影响 Nginx 服务器或与用户的网络连接  
├── http    # 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置  
│   ├── upstream # 配置后端服务器具体地址，负载均衡配置不可或缺的部分  
│   ├── server   # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块  
│   ├── server  
│   │   ├── location  # server 块可以包含多个 location 块，location 指令用于匹配 uri  
│   │   ├── location  
│   │   └── ...  
│   └── ...  
└── ...  
```
* 语法规则
    * 配置文件由指令与指令块构成
    * 每条指令以 `;`结尾, 指令与参数间以空格符号分隔
    * 指令块以`{}`大括号将多条指令组织在一起
    * `include` 语句允许组合多个配置文件以提升可维护性
    * 使用`#`添加注释
    * 使用`$`符号使用变量
    * 部分指令的参数支持正则表达式
    * server块可以包含多个location块, location指令用于匹配uri
        * `=` 精确匹配路径,用于不含正则表达式的uri前, 匹配成功则不再后续的查找
        * `^~` 用于不含正则表达式的uri前, 表示如果该符号后面的字符是最佳匹配, 采用该规则, 不再进行后续的查找
        * `~` 表示用该符号后面的正则去匹配路径, 区分大小写
        * `~*` 表示用该符号后面的正则去匹配路径, 不区分大小写, 
        * 如果uri包含正则表达式, 必须要有 `~`或`~*`

* 全局变量

| 全局变量名       | 功能                        |
|------------------|-----------------------------|
| $host            | 请求信息中的Host,不包含端口 |
| $request_method  | 客户端请求类型              |
| $remote_addr     | 客户端IP地址                |
| $remote_port     | 客户端的端口                |
| $args            | 请求中的参数                |
| $args_PARAMETER  | GET请求中变量名参数的值     |
| $content-length  | 请求中的Contetn-length字段  |
| $http_user_agent | 客户端agent信息             |
| $http_cookie     | 客户端cookie信息            |
| $server_protocol | 请求使用的协议              |
| $server_name     | 服务器名称                  |
| $server_addr     | 服务器地址                  |
| $server_port     | 服务器端口                  |
| $scheme          | http方法(https,http)        |


## 配置反向代理
[参考](https://www.jianshu.com/p/b010c9302cd0)
```shell
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://s-yh.cn:9999;
    }
}

包含以下四种情况 (假设访问地址: http://192.168.1.1/proxy/test.html )

第一种：
location /proxy/ {
  proxy_pass http://127.0.0.1/;
}
代理到URL：http://127.0.0.1/test.html

第二种（相对于第一种，最后少一个 / ）
location /proxy/ {
  proxy_pass http://127.0.0.1;
}
代理到URL：http://127.0.0.1/proxy/test.html

第三种：
location /proxy/ {
  proxy_pass http://127.0.0.1/aaa/;
}
代理到URL：http://127.0.0.1/aaa/test.html

第四种（相对于第三种，最后少一个 / ）
location /proxy/ {
  proxy_pass http://127.0.0.1/aaa;
}
代理到URL：http://127.0.0.1/aaatest.html

```

* 反向代理其他指令
    * `proxy_set_header`: 在将客户端请求发送到服务器之前,更改来自客户端的请求头信息
    * `proxy_connerct_timeout`: 配置Nginx与后端代理服务器尝试建立连接的超时时间
    * `proxy_read_timeout`: 配置nginx向后端服务器组发出read请求后,等待响应的超时时间
    * `proxy_send_timeout`: 配置nginx向后端服务器组发出write请求后,等待响应的超时时间
    * `proxy_redirect`: 用于修改后端服务器返回的响应头中的Location和Refresh

## 跨域CROS配置

* 使用反向代理解决跨域 
* 配置header解决跨域
```shell
server {
  listen       80;
  server_name  be.sherlocked93.club;
  
	add_header 'Access-Control-Allow-Origin'$http_origin;   # 全局变量获得当前请求origin，带cookie的请求不支持*
	add_header 'Access-Control-Allow-Credentials''true';    # 为 true 可带上 cookie
	add_header 'Access-Control-Allow-Methods''GET, POST, OPTIONS';  # 允许请求方法
	add_header 'Access-Control-Allow-Headers'$http_access_control_request_headers;  # 允许请求的 header，可以为 *
	add_header 'Access-Control-Expose-Headers''Content-Length,Content-Range';
	
  if ($request_method = 'OPTIONS') {
		add_header 'Access-Control-Max-Age' 1728000;   # OPTIONS 请求的有效期，在有效期内不用发出另一条预检请求
		add_header 'Content-Type''text/plain; charset=utf-8';
		add_header 'Content-Length' 0;
    
		return 204;                  # 200 也可以
	}
  
	location / {
		root  /usr/share/nginx/html/;
		index index.html;
	}
}
```

## 开启gzip
```shell
gzip on; # 默认off，是否开启gzip
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

# 上面两个开启基本就能跑起了，下面的愿意折腾就了解一下
gzip_static on;
gzip_proxied any;
gzip_vary on;
gzip_comp_level 6;
gzip_buffers 16 8k;
# gzip_min_length 1k;
gzip_http_version 1.1;

```

* gzip_types: 要采用gzip压缩的MIME文件类型, 其中text/html被系统强制启用
* gzip_static: 默认off, 该模块启用后,Nginx首先检查是够存在请求静态文件的gz结尾的文件, 如果有直接返回改`.gz`文件内容
* gzip_proxied: 默认off, nginx作为反向代理时启用, 用于设置启用或禁用从代理服务器上收到响应内容gzip压缩
* gzip_vary：用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；
* gzip_comp_level：gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；
* gzip_buffers：获取多少内存用于缓存压缩结果，16 8k 表示以 8k*16 为单位获得；
* gzip_min_length：允许压缩的页面最小字节数，页面字节数从header头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；
* gzip_http_version：默认 1.1，启用 gzip 所需的 HTTP 最低版本；

webpack的gzip配置
```js
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  // gzip 配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      return {
        plugins: [new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css/,    // 匹配文件名
          threshold: 10240,               // 文件压缩阈值，对超过10k的进行压缩
          deleteOriginalAssets: false// 是否删除源文件
        })]
      }
    }
  },
  ...
}
```

## 配置负载均衡

```shell
http {
  upstream myserver {
  	# ip_hash;  # ip_hash 方式
    # fair;     # fair 方式
    server 127.0.0.1:8081;  # 负载均衡目的服务地址
    server 127.0.0.1:8080;
    server 127.0.0.1:8082 weight=10;  # weight 方式，不写默认为 1
  }
 
  server {
    location / {
        proxy_pass http://myserver;
        proxy_connect_timeout 10;
    }
  }
}
```

Nginx提供了几种分配方式, 默认为轮询, 
* 轮询: 每个请求按时间顺序逐一分配
* weight: 权重分配, 权重越高,被访问的概率越大
* ip_hash: 每个请求按访问的IP的hash结果分配, 这样每个访客固定访问一个后端服务器,可以解决动态网页session共享问题
* fair: 按后端服务器的响应时间分配, 响应时间短的优先分配, 依赖第三方插件 `nginx-upstream-fair` 

## 适配PC或移动设备

根据用户请求的user-agent来判断是pc还是H5站点
```shell
server {
  listen 80;
	server_name _;

	location / {
	    root  /usr/share/nginx/html/pc;
    if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
        root /usr/share/nginx/html/mobile;
    }
		index index.html;
	}
}
```

## 配置https

```shell
ssl_certificate /etc/nginx/https/1_sherlocked93.club_bundle.crt;   # 证书文件地址
ssl_certificate_key /etc/nginx/https/2_sherlocked93.club.key;      # 私钥文件地址

ssl_session_timeout 10m;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;      #请按照以下协议配置
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
ssl_prefer_server_ciphers on;
add_header X-Frame-Options DENY;           # 减少点击劫持
add_header X-Content-Type-Options nosniff; # 禁止服务器自动解析资源类型
add_header X-Xss-Protection 1;             # 防XSS攻击
```

## 图片防盗链
```shell
server {
  listen       80;
  server_name  _;
  
  # 图片防盗链
  location ~* \.(gif|jpg|jpeg|png|bmp|swf)$ {
    valid_referers none blocked 192.168.0.2;  # 只允许本机 IP 外链引用
    if ($invalid_referer){
      return 403;
    }
  }
}
```

## 请求过滤
```shell
# 非指定请求全返回 403
if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
  return 403;
}

location / {
  # IP访问限制（只允许IP是 192.168.0.2 机器访问）
  allow 192.168.0.2;
  deny all;
  
  root   html;
  index  index.html index.htm;
}
```

## 单页面history路由配置
```shell
server {
  listen       80;
  server_name  _;
  
  location / {
    root       /usr/share/nginx/html/dist;  # vue 打包后的文件夹
    index      index.html index.htm;
    try_files  $uri$uri/ /index.html @rewrites;
    
    expires -1;                          # 首页一般没有强制缓存
    add_header Cache-Control no-cache;
  }
  
  # 接口转发，如果需要的话
  #location ~ ^/api {
  #  proxy_pass http://_;
  #}
  
  location @rewrites {
    rewrite ^(.+)$ /index.html break;
  }
}
```

## http请求转发到https

配置完https后, 浏览器还是可以访问http的地址的, 可以做一个301跳转, 把对应域名的http请求重定向到https上
```shell
server {
    listen      80;
    server_name s-yh.cn;

    # 单域名重定向
    if ($host = 's-yh.cn'){
        return 301 https://s-yh.cn$request_uri;
    }
    # 全局非 https 协议时重定向
    if ($scheme != 'https') {
        return 301 https://$server_name$request_uri;
    }

    # 或者全部重定向
    return 301 https://$server_name$request_uri;

    # 以上配置选择自己需要的即可，不用全部加
}
```

## 泛域名路径分离
```shell
server {
    listen       80;
    server_name  ~^([\w-]+)\.doc\.sherlocked93\.club$;

    root /usr/share/nginx/html/doc/$1;
}
```

## 泛域名转发 
```shell
server {
    listen       80;
    server_name ~^([\w-]+)\.serv\.sherlocked93\.club$;

    location / {
        proxy_set_header        X-Real-IP $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header        Host $http_host;
        proxy_set_header        X-NginX-Proxy true;
        proxy_pass              http://127.0.0.1:8080/$1$request_uri;
    }
}
```