## 1，Session介绍

Session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而Session保存在服务器上。客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。这就是Session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了。

如果说Cookie机制是通过检查客户身上的“通行证”来确定客户身份的话，那么Session机制就是通过检查服务器上的“客户明细表”来确认客户身份。Session相当于程序在服务器上建立的一份客户档案，客户来访的时候只需要查询客户档案表就可以了。

## 2，安装session

```
npm install express-session
```

## 3，编码

```
var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));
app.get('/login', function(req, res){

    if (req.session.sign) {//检查用户是否已经登录
        console.log(req.session);//打印session的值
        res.send('welecome <strong><a href="' + req.session.name + '"/></strong>, 欢迎你再次登录');
    } else {
        req.session.sign = true;
        req.session.name = 'http://blog.csdn.net/wzjisking?viewmode=contents';
        res.send('欢迎登陆！');
    }
});
app.listen(8888);
```