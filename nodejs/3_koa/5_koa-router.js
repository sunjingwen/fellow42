const Koa = require("koa");
// var Router = require('koa-router'); //koa1
const Router = require("@koa/router"); //koa2

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "首页...";
});

router.get("/index", (ctx, next) => {
  ctx.body = "首页...";
});

router.get("/todo", (ctx, next) => {
  ctx.body = "todo...";
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
