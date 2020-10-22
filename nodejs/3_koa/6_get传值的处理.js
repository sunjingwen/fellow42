const Koa = require("koa");
// var Router = require('koa-router'); //koa1
const Router = require("@koa/router"); //koa2

const app = new Koa();
const router = new Router();

// url
/* router.get("/todo", (ctx, next) => {
  console.log(ctx.query);
  console.log(ctx.querystring);
  var data = ctx.query;
  ctx.body = "todo...";
}); */
// url params
router.get("/todo/:name/:age", (ctx, next) => {
  // console.log(ctx.params);
  var data = ctx.params;
  console.log(data.name, data.age);
  ctx.body = "todo...";
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
