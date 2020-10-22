const Koa = require("koa");
const app = new Koa();
// 自定义日志中间件
const logger = require("./logger");

// app.use: 中间件，它是koa最核心的内容
app.use(logger);


app.use();


app.listen(3000);
