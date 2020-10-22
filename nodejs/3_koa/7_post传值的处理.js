const Koa = require("koa");
// var Router = require('koa-router'); //koa1
const Router = require("@koa/router"); //koa2
const bodyParser = require('koa-bodyparser'); //用来处理post数据的中间件

const app = new Koa();
const router = new Router();

app.use(bodyParser())

let html = ` 
  <h1>用户注册</h1>
  <form method="POST" action="/regist">
    <p>userName: <input name="userName" /></p>
    <p>nickName: <input name="nickName" /></p>
    <p>email: <input name="email" /></p>
    <p><button type="submit">submit</button></p>
  </form>
`;

router.get("/", (ctx) => {
  ctx.body = html;
});

router.post("/regist", (ctx) => {
    console.log(ctx.request.body);
    ctx.body = "...";
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
