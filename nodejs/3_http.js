var http = require("http");
var querystring = require("querystring");
var util = require("util");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    if (req.url == "/") {
      res.write("<h1>登录</h1>");
      res.write('<form action="login" method="post">');
      res.write('<p>用户名：<input type="text" name="username"/></p>');
      res.write('<p>密码：<input type="password" name="password"/></p>');
      res.write('<p><button type="submit">登录</button></p>');
      res.write("</form>");
      res.end("");
    } else if (req.url == "/login") {
      var post = "";
    //   "username=lisi&password=124345"
      req.on("data", function (chunk) {
        post += chunk;
      });
      req.on("end", function () {
        post = querystring.parse(post);
        console.log(post);

        if(post.username == 'lisi' && post.password == "1234"){
            res.end('登录成功');
        }else{
            res.end('登录失败');
        }
      });
    }
  })
  .listen(8080);

console.log("HTTP server is listening at port 8080.");
