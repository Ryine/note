var net = require('net')    //引入网络模块
var HOST = '127.0.0.1';     //定义服务器地址
var PORT = 3000;            //定义端口号

console.info('Server is running on port ' + PORT);

//创建TCP服务器
var server = net.createServer(function(socket) {
    var client = socket.remoteAddress + ':' + socket.remotePort;
    console.log('Connected to ' + client);

    //监听数据接收事件
    socket.on('data', function(data) {
        console.log(data.toString());
        socket.write('Hello Client!');
    });

    //监听连接断开事件
    socket.on('end', function() {
        console.log('Client disconnected.');
    });
});

//TCP服务器开始监听特定端口
server.listen(PORT, HOST);
Function.prototype.bind = function (context) {
    let self = this
    let args = Array.prototype.slice.call(arguments, 1)
    return function () {
        let secondArgs = Array.prototype.slice.call(arguments)
        self.apply(context, args.concat(secondArgs))
    }
}