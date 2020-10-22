const Koa = require("koa");
const Router = require("@koa/router");
var bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
app.use(bodyParser());

let html = ` 
  <h1>用户登录</h1>
  <form method="post" action="/login">
    <p>userName: <input name="userName" /></p>
    <p>password: <input name="password" /></p>
    <p><button type="submit">submit</button></p>
  </form>
`;

// /index
router.get("/index", (ctx) => {
    // console.log(ctx.query);
    // console.log(ctx.querystring);
  ctx.body = html;
});
// /login
router.post("/login", (ctx) => {
    console.log(ctx.request.body);
  ctx.body = "这是登录页";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
