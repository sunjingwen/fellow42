const Koa = require("koa");
const Router = require("@koa/router"); //koa2
const views = require('koa-views');
const path = require('path');

const static = require('koa-static');

const app = new Koa();
const router = new Router();

// 用来配置ejs文件的加载路径
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs' //ejs文件的扩展名，可以是任何有效的扩展名
}));

app.use(static(
  path.join( __dirname,  './public')
));


router.get("/index",async (ctx) => {
  var title = "hello ejs";
  await ctx.render("index", {
    myTitle: title,
    arr: ["abc", "def", "ghi"]
  });
});

router.get("/login",async (ctx) => {
  await ctx.render("login");
});

router.get("/todo",async (ctx) => {
  await ctx.render("todo.html"); //如果手动指名扩展名，那么直接查找该文件，否则默认ejs
});




app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
