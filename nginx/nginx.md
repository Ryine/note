# nginx分享

## 1.nginx
> Nginx是一个高性能的HTTP和反向代理服务

### 正向代理与方向代理
- 正向代理
![正向代理](/nginx/static/images/proxy-01.png)
- 反向代理
![反向代理](/nginx/static/images/proxy-02.png)

### nginx的应用
- 部署静态资源
- 负载均衡
- 访问限制
- 反向代理(跨域)

## 2.安装
    // 更新软件源
    apt-get update
    // 安装
    apt-get install nginx
    // 查看版本
    nginx -v
    // 启动
    nginx -c /etc/nginx/nginx.conf
    // 停止
    nginx -s stop
    // 更改配置后重启
    nginx -s reload
    
<!-- > 配置文件nginx.conf -->
## 3.实践
### 静态资源部署
    server {
        listen 80;
        server_name localhost;
        location / {
            root /data/erb/nginx; // 静态资源目录
            index index.html; // 入口文件
        }
    }
### 访问限制
    server {
        listen 80;
        server_name localhost;
        location / {
            root /data/erb/nginx; // 静态资源目录
            index index.html; // 入口文件
            allow 119.139.198.244; // 允许访问
            deny all; // 禁止访问
        }
    }
### 反向代理(跨域)
    server {
        listen 80;
        server_name localhost;
        location / {
            root /data/erb/nginx; // 静态资源目录
            index index.html; // 入口文件
        }
        location /api {
            proxy_pass https://news-at.zhihu.com/api; // 代理路径
        }
    }
### 负载均衡
    upstream favtomcat {
        server 192.168.1.101 weight=1;
        server 192.168.1.102 weight=2;
        server 192.168.1.103 weight=3;
    }
    location / {
        root   html;
        index  index.html;
        proxy_pass favtomcat;
    }

## location匹配优先级
优先级与配置中location的顺序没有关系，相同类型的表达式，字符串长的会优先匹配。
优先级排列：
1、等号精确匹配 =
2、前缀匹配 ^~。一旦匹配成功，则不再查找其他匹配项
3、正则表达式类型 ~ ~*。如果有多个location的正则能匹配的话，则使用正则表达式最长的那个。
4、普通字符串匹配

### 指令
alias和root指令的区别
1、root不会将location配置的路径去掉
2、alias会将location配置的路径去掉


<!-- fuser -n tcp 80
kill -9 2115
119.139.198.244
nginx -c /etc/nginx/nginx.conf
nginx -s reload
nginx -s stop
nginx -s quit
apt autoremove nginx
rm -rf /etc/nginx 
apt-get remove --purge nginx nginx-full nginx-common -->