const http = require('http');
const url = require('url');
const otherFun = require('./modles/other.js');  // 外部函数
const User = require('./modles/user.js');  // 被继承类函数
const Teacher = require('./modles/teacher.js'); // 继承类函数
const router = require('./modles/router.js')
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    if(request.url != '/favicon.ico') {
        response.write('hello,world')
        // 函数
        fun1(response); // 调用内部函数
        otherFun['fun2'](response);  // 调用外部函数
        // 类
        let user = new User(1,'张三',18);
        user.enter(response);
        let teacher = new Teacher(2,'李四',29);
        teacher.enter(response);
        teacher.teach(response);
        // 路由
        let pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'')
        console.log(pathname)
        router[pathname](request,response);
        response.end();
    }
}).listen(8000);

function fun1(res) {
    res.write('我是fun1<br/>')
}
