const Koa = require("koa");
const fs = require('fs');
const app = new Koa();

// 我们的需求：
// 1. http://localhost:3000 || http://localhost:3000/index 访问views/index.html
// 2. http://localhost:3000/todo 访问views/todo.html
// 3. http://localhost:3000/xxx 访问views/404.html
// 那么我们的路由就有：
// 1. "/"
// 2. "/index"
// 3. "/todo"
// 4. "/xxx": 其它不存在的url
// render: 渲染，一般我们加载网页也被称为渲染页面
function render(page){
    // "views/" + page + ".html"
    var fileName = "./views/" + page + ".html";
    // return fs.readFile(fileName);
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

app.use(async (ctx) => {
    let url = ctx.url;
    var data = "";
    switch(url){
        case "/":
        case "/index":
            data = await render("index"); //渲染views/index.html
            break;
        case "/todo":
            data = await render("todo"); //渲染views/todo.html
            break;
        default:
            data = await render("404"); //渲染views/404.html
    }

    ctx.body = data;
});

app.listen(3000);
