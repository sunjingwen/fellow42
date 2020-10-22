const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

//app.use(中间件)
// 同步方式
// app.use(function(ctx){ //ctx(context)
//     ctx.body = "haha";
// });

function getData(){
    return new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'utf-8', function(err, data){
            if(data){
                resolve(data);
            }else{
                reject(err);
            }
        });
    });
}

// 异步方式
app.use(async ctx => {
    // 异步操作
    // var data = fs.readFileSync('./a.txt', 'utf-8');
    // 下面这种异步的操作方式是不对的
    /* var data = "";
    fs.readFile('./a.txt', 'utf-8', function(err, res){
        data = res;
    });
    ctx.body = data; */

    var data = await getData();
    ctx.body = data;
});

app.listen(3000);