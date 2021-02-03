## centos7 安装shadowsocks
// yum install epel-release
yum install python36
yum install python-pip
pip install shadowsocks

## ubuntu16 安装shadowsockst 
apt-get update
apt-get upgrade
apt-get install python-pip

pip install shadowsocks
## 配置shadowcocks
  //新建shadowsocks.json文件
{
 "server":"0.0.0.0",
 "local_address":"127.0.0.1",
    "port_password":{
        "8088":"lin12345",
        "8188":"lin12345",
        "8288":"lin12345",
        "8388":"lin12345",
        "8488":"lin12345",
        "8588":"lin12345",
        "8688":"lin12345",
        "8788":"lin12345",
        "8888":"lin12345",
        "8988":"lin12345"
    },
    "timeout":400,
    "method":"aes-256-cfb",
    "fast_open":true
}
## 启动服务
ssserver -c /etc/shadowsocks/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d start
## 停止
ssserver -d stop
## 查看日志
tail /var/log/shadowsocks.log -n100 -f

## 开启bbr加速
-linux内核>4.9
    echo 'net.core.default_qdisc = fq' > /etc/sysctl.d/99-bbr.conf
    echo 'net.ipv4.tcp_congestion_control = bbr' >> /etc/sysctl.d/99-bbr.conf
    sysctl --system
    // 验证配置
    lsmod | grep tcp_bbr

## 配置防火墙

## v2ray
执行脚本
bash <(curl -L -s https://install.direct/go.sh)

修改配置
vim /etc/v2ray/config.json

{
  "inbounds": [{
  "protocol": "shadowsocks", // Shadowsocks 协议
  "port": 8399, // 服务器端口
  "settings": {
    "method": "aes-256-cfb", // AEAD 加密算法 
    "password": "lin12345",  // 密码
    "network": "tcp,udp" // 网络协议 
  }
}],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],
  "routing": {
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      }
    ]
  }
}

控制运行
systemctl start v2ray
systemctl restart v2ray
systemctl stop v2ray
systemctl status v2ray