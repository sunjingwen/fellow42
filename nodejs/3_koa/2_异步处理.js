const Koa = require("koa");
const app = new Koa();


// 异步处理
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            var data = Math.random();
            if(data){
                resolve(data);
            }else{
                reject('fail...');
            }
        }, 2000);
    });
}

app.use(async (ctx) => {
  var data = await getData();
  ctx.body = data;
});

app.use();


app.listen(3000);
