const Koa = require("koa");
const app = new Koa();

// 同步处理
app.use( (ctx) => {
  ctx.body = "Hello World";
});

app.use();


app.listen(3000);
