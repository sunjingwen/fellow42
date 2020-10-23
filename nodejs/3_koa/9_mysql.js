const Koa = require("koa");
const Router = require("@koa/router"); //koa2
const views = require("koa-views");
const path = require("path");
const mysql = require("mysql");

const static = require("koa-static");
const { resolve, reject } = require("any-promise");

const app = new Koa();
const router = new Router();

// 用来配置ejs文件的加载路径
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs", //ejs文件的扩展名，可以是任何有效的扩展名
  })
);

app.use(static(path.join(__dirname, "./public")));

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
});

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) reject(error);
      connection.query(sql, function (error, results) {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
}

router.get("/users", async (ctx) => {
  var results = await query("SELECT * FROM t_user");
  await ctx.render("users", {
    users: results,
  });
});

router.get("/blogs", async (ctx) => {
  var results = await query("SELECT * FROM t_blog");
  await ctx.render("blogs", {
    blogs: results,
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
